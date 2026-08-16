// ============================================================
// 🤖 NOVA AI SERVICE
// نسخه کامل و امن برای Cloudflare Workers
// مسیر: src/ai.js
// ============================================================

/**
 * موتورهای پشتیبانی‌شده
 *
 * کلیدها باید در Cloudflare Worker Secrets باشند:
 *
 * OPENAI_API_KEY
 * GEMINI_API_KEY
 * CLAUDE_API_KEY
 * DEEPSEEK_API_KEY
 * GROK_API_KEY
 * TAVILY_API_KEY
 */

// ============================================================
// ⚙️ MODEL CONFIG
// ============================================================

export const AI_MODELS = {

    "gemini-2.0-flash": {
        provider: "google",
        type: "chat",
        model: "gemini-2.0-flash",
        description: "Google Gemini سریع"
    },

    "gpt-4o-mini": {
        provider: "openai",
        type: "chat",
        model: "gpt-4o-mini",
        description: "OpenAI سریع و اقتصادی"
    },

    "gpt-4o": {
        provider: "openai",
        type: "chat",
        model: "gpt-4o",
        description: "OpenAI قدرتمند"
    },

    "claude-3.5-sonnet": {
        provider: "anthropic",
        type: "chat",
        model: "claude-3-5-sonnet-20241022",
        description: "Claude"
    },

    "deepseek-v3": {
        provider: "deepseek",
        type: "chat",
        model: "deepseek-chat",
        description: "DeepSeek"
    },

    "grok": {
        provider: "xai",
        type: "chat",
        model: "grok-3-mini",
        description: "xAI Grok"
    },

    "dall-e-3": {
        provider: "openai",
        type: "image",
        model: "dall-e-3",
        description: "تولید تصویر OpenAI"
    }

};


// ============================================================
// 🔄 MODEL ALIASES
// ============================================================

const MODEL_ALIASES = {

    gemini: "gemini-2.0-flash",

    google: "gemini-2.0-flash",

    gpt: "gpt-4o-mini",

    openai: "gpt-4o-mini",

    chatgpt: "gpt-4o",

    claude: "claude-3.5-sonnet",

    deepseek: "deepseek-v3",

    grok: "grok",

    image: "dall-e-3",

    dalle: "dall-e-3"

};


// ============================================================
// 🧹 NORMALIZE MODEL
// ============================================================

export function normalizeModel(modelId) {

    if (!modelId) {
        return "gemini-2.0-flash";
    }

    const id = String(modelId)
        .trim()
        .toLowerCase();

    return MODEL_ALIASES[id] || id;
}


// ============================================================
// 🔑 API KEY HELPER
// ============================================================

function getApiKey(env, name) {

    if (!env) {
        return null;
    }

    const value = env[name];

    if (
        typeof value !== "string" ||
        !value.trim()
    ) {
        return null;
    }

    return value.trim();
}


// ============================================================
// 🌐 SAFE JSON
// ============================================================

async function readJson(response) {

    const text = await response.text();

    if (!text) {
        return {};
    }

    try {
        return JSON.parse(text);
    } catch {
        return {
            raw: text
        };
    }
}


// ============================================================
// ❌ API ERROR
// ============================================================

function apiError(provider, response, data) {

    let message =
        data?.error?.message ||
        data?.message ||
        data?.error ||
        data?.raw ||
        `HTTP ${response.status}`;

    if (typeof message !== "string") {
        try {
            message = JSON.stringify(message);
        } catch {
            message = `HTTP ${response.status}`;
        }
    }

    return new Error(
        `${provider} API Error (${response.status}): ${message}`
    );
}


// ============================================================
// 🧠 SYSTEM PROMPT
// ============================================================

const DEFAULT_SYSTEM_PROMPT = `
شما Nova AI Pro هستید.

یک دستیار هوش مصنوعی حرفه‌ای، دقیق و مفید هستید.

قوانین:
- به زبان کاربر پاسخ بده.
- اگر کاربر فارسی صحبت کرد، فارسی پاسخ بده.
- پاسخ‌ها واضح و کاربردی باشند.
- در مسائل برنامه‌نویسی کد کامل و قابل اجرا بده.
- اطلاعات را بدون دلیل جعل نکن.
- اگر چیزی را نمی‌دانی، صادقانه بگو.
`;


// ============================================================
// 💬 MAIN CHAT
// ============================================================

export async function chat(
    prompt,
    env,
    modelId = "gemini-2.0-flash",
    options = {}
) {

    if (!env) {
        throw new Error("Environment is required");
    }

    if (
        typeof prompt !== "string" ||
        !prompt.trim()
    ) {
        throw new Error("Prompt is empty");
    }

    const normalized =
        normalizeModel(modelId);

    const model =
        AI_MODELS[normalized];

    if (!model) {
        throw new Error(
            `مدل ${modelId} پشتیبانی نمی‌شود`
        );
    }

    if (model.type !== "chat") {
        throw new Error(
            `مدل ${normalized} برای chat نیست`
        );
    }

    const system =
        options.system ||
        DEFAULT_SYSTEM_PROMPT;

    const temperature =
        typeof options.temperature === "number"
            ? options.temperature
            : 0.7;

    const maxTokens =
        Math.min(
            Math.max(
                Number(options.maxTokens) || 2000,
                1
            ),
            8000
        );

    switch (model.provider) {

        case "google":
            return await geminiChat(
                prompt,
                env,
                model.model,
                system,
                temperature,
                maxTokens
            );

        case "openai":
            return await openAIChat(
                prompt,
                env,
                model.model,
                system,
                temperature,
                maxTokens
            );

        case "anthropic":
            return await claudeChat(
                prompt,
                env,
                model.model,
                system,
                temperature,
                maxTokens
            );

        case "deepseek":
            return await deepSeekChat(
                prompt,
                env,
                model.model,
                system,
                temperature,
                maxTokens
            );

        case "xai":
            return await grokChat(
                prompt,
                env,
                model.model,
                system,
                temperature,
                maxTokens
            );

        default:
            throw new Error(
                `Provider ${model.provider} پشتیبانی نمی‌شود`
            );
    }
}


// ============================================================
// 🔁 CHAT WITH FALLBACK
// ============================================================

export async function generateWithFallback(
    prompt,
    env,
    primaryModel = "gemini-2.0-flash",
    fallbackModels = [
        "gpt-4o-mini",
        "deepseek-v3"
    ],
    options = {}
) {

    const models = [
        primaryModel,
        ...(Array.isArray(fallbackModels)
            ? fallbackModels
            : [])
    ];

    const tried = [];

    for (const model of models) {

        const normalized =
            normalizeModel(model);

        if (tried.includes(normalized)) {
            continue;
        }

        tried.push(normalized);

        try {

            const result =
                await chat(
                    prompt,
                    env,
                    normalized,
                    options
                );

            if (
                typeof result === "string" &&
                result.trim()
            ) {
                return {
                    ok: true,
                    model: normalized,
                    text: result,
                    tried
                };
            }

        } catch (error) {

            console.error(
                `NOVA fallback ${normalized}:`,
                error
            );
        }
    }

    return {
        ok: false,
        model: null,
        text: "❌ در حال حاضر هیچ موتور هوش مصنوعی در دسترس نیست.",
        tried
    };
}


// ============================================================
// 🌐 GEMINI
// ============================================================

async function geminiChat(
    prompt,
    env,
    model,
    system,
    temperature,
    maxTokens
) {

    const key =
        getApiKey(env, "GEMINI_API_KEY");

    if (!key) {
        throw new Error(
            "GEMINI_API_KEY تنظیم نشده است"
        );
    }

    const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`;

    const response =
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                systemInstruction: {
                    parts: [
                        {
                            text: system
                        }
                    ]
                },

                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],

                generationConfig: {
                    temperature,
                    maxOutputTokens: maxTokens,
                    topP: 0.9,
                    topK: 40
                }

            })
        });

    const data =
        await readJson(response);

    if (!response.ok) {
        throw apiError(
            "Gemini",
            response,
            data
        );
    }

    const text =
        data
            ?.candidates?.[0]
            ?.content?.parts
            ?.map(part => part?.text || "")
            .join("")
            .trim();

    if (!text) {
        throw new Error(
            "Gemini پاسخ خالی برگرداند"
        );
    }

    return text;
}


// ============================================================
// 🤖 OPENAI
// ============================================================

async function openAIChat(
    prompt,
    env,
    model,
    system,
    temperature,
    maxTokens
) {

    const key =
        getApiKey(env, "OPENAI_API_KEY");

    if (!key) {
        throw new Error(
            "OPENAI_API_KEY تنظیم نشده است"
        );
    }

    const response =
        await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    model,

                    messages: [
                        {
                            role: "system",
                            content: system
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ],

                    temperature,
                    max_tokens: maxTokens
                })
            }
        );

    const data =
        await readJson(response);

    if (!response.ok) {
        throw apiError(
            "OpenAI",
            response,
            data
        );
    }

    const text =
        data
            ?.choices?.[0]
            ?.message?.content
            ?.trim();

    if (!text) {
        throw new Error(
            "OpenAI پاسخ خالی برگرداند"
        );
    }

    return text;
}


// ============================================================
// 🧠 CLAUDE
// ============================================================

async function claudeChat(
    prompt,
    env,
    model,
    system,
    temperature,
    maxTokens
) {

    const key =
        getApiKey(env, "CLAUDE_API_KEY");

    if (!key) {
        throw new Error(
            "CLAUDE_API_KEY تنظیم نشده است"
        );
    }

    const response =
        await fetch(
            "https://api.anthropic.com/v1/messages",
            {
                method: "POST",

                headers: {
                    "x-api-key": key,
                    "anthropic-version": "2023-06-01",
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    model,

                    max_tokens:
                        maxTokens,

                    temperature,

                    system,

                    messages: [
                        {
                            role: "user",
                            content: prompt
                        }
                    ]
                })
            }
        );

    const data =
        await readJson(response);

    if (!response.ok) {
        throw apiError(
            "Claude",
            response,
            data
        );
    }

    const text =
        data
            ?.content
            ?.filter(item =>
                item?.type === "text"
            )
            ?.map(item =>
                item.text
            )
            ?.join("")
            ?.trim();

    if (!text) {
        throw new Error(
            "Claude پاسخ خالی برگرداند"
        );
    }

    return text;
}


// ============================================================
// 🔵 DEEPSEEK
// ============================================================

async function deepSeekChat(
    prompt,
    env,
    model,
    system,
    temperature,
    maxTokens
) {

    const key =
        getApiKey(
            env,
            "DEEPSEEK_API_KEY"
        );

    if (!key) {
        throw new Error(
            "DEEPSEEK_API_KEY تنظیم نشده است"
        );
    }

    const response =
        await fetch(
            "https://api.deepseek.com/chat/completions",
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    model,

                    messages: [
                        {
                            role: "system",
                            content: system
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ],

                    temperature,
                    max_tokens: maxTokens
                })
            }
        );

    const data =
        await readJson(response);

    if (!response.ok) {
        throw apiError(
            "DeepSeek",
            response,
            data
        );
    }

    const text =
        data
            ?.choices?.[0]
            ?.message?.content
            ?.trim();

    if (!text) {
        throw new Error(
            "DeepSeek پاسخ خالی برگرداند"
        );
    }

    return text;
}


// ============================================================
// 🟣 GROK / XAI
// ============================================================

async function grokChat(
    prompt,
    env,
    model,
    system,
    temperature,
    maxTokens
) {

    const key =
        getApiKey(
            env,
            "GROK_API_KEY"
        );

    if (!key) {
        throw new Error(
            "GROK_API_KEY تنظیم نشده است"
        );
    }

    const response =
        await fetch(
            "https://api.x.ai/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    model,

                    messages: [
                        {
                            role: "system",
                            content: system
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ],

                    temperature,
                    max_tokens: maxTokens
                })
            }
        );

    const data =
        await readJson(response);

    if (!response.ok) {
        throw apiError(
            "Grok",
            response,
            data
        );
    }

    const text =
        data
            ?.choices?.[0]
            ?.message?.content
            ?.trim();

    if (!text) {
        throw new Error(
            "Grok پاسخ خالی برگرداند"
        );
    }

    return text;
}


// ============================================================
// 🎨 OPENAI IMAGE
// ============================================================

export async function image(
    prompt,
    env,
    modelId = "dall-e-3",
    options = {}
) {

    const normalized =
        normalizeModel(modelId);

    const model =
        AI_MODELS[normalized];

    if (!model) {
        throw new Error(
            `مدل تصویر ${modelId} پیدا نشد`
        );
    }

    if (model.type !== "image") {
        throw new Error(
            `${normalized} مدل تصویر نیست`
        );
    }

    const key =
        getApiKey(
            env,
            "OPENAI_API_KEY"
        );

    if (!key) {
        throw new Error(
            "OPENAI_API_KEY تنظیم نشده است"
        );
    }

    const response =
        await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    model: model.model,

                    prompt,

                    n: 1,

                    size:
                        options.size ||
                        "1024x1024",

                    ...(model.model === "dall-e-3"
                        ? {
                            quality:
                                options.quality ||
                                "standard"
                        }
                        : {})

                })
            }
        );

    const data =
        await readJson(response);

    if (!response.ok) {
        throw apiError(
            "OpenAI Image",
            response,
            data
        );
    }

    const item =
        data?.data?.[0];

    if (!item) {
        throw new Error(
            "تصویر تولید نشد"
        );
    }

    return {
        url: item.url || null,
        revisedPrompt:
            item.revised_prompt || null
    };
}


// ============================================================
// 📝 SUMMARIZE
// ============================================================

export async function summarize(
    text,
    env
) {

    if (!text?.trim()) {
        throw new Error(
            "متن برای خلاصه‌سازی خالی است"
        );
    }

    const prompt = `
متن زیر را خلاصه کن.

قوانین:
- نکات مهم را حفظ کن.
- چیزی را جعل نکن.
- خلاصه روان و فارسی باشد.
- حداکثر ۵۰۰ کلمه.

متن:

${text}
`;

    return await chat(
        prompt,
        env,
        "gemini-2.0-flash"
    );
}


// ============================================================
// 🌐 TRANSLATE
// ============================================================

export async function translate(
    text,
    targetLang = "فارسی",
    env
) {

    if (!text?.trim()) {
        throw new Error(
            "متن برای ترجمه خالی است"
        );
    }

    const prompt = `
متن زیر را به ${targetLang} ترجمه کن.

قوانین:
- ترجمه طبیعی و روان باشد.
- معنی اصلی حفظ شود.
- قالب متن اصلی حفظ شود.
- توضیح اضافه نده.

متن:

${text}
`;

    return await chat(
        prompt,
        env,
        "gemini-2.0-flash"
    );
}


// ============================================================
// 💻 CODE GENERATION
// ============================================================

export async function generateCode(
    description,
    language = "javascript",
    env
) {

    const prompt = `
برای درخواست زیر کد ${language} بنویس:

${description}

قوانین:
- کد کامل و قابل اجرا باشد.
- از روش‌های استاندارد استفاده کن.
- توضیح کوتاه و کاربردی بده.
`;

    return await chat(
        prompt,
        env,
        "gpt-4o"
    );
}


// ============================================================
// 🔍 ANALYZE
// ============================================================

export async function analyze(
    text,
    env
) {

    const prompt = `
متن زیر را تحلیل کن:

${text}

تحلیل شامل:
1. موضوع اصلی
2. نکات مهم
3. نقاط قوت
4. نقاط ضعف
5. نتیجه‌گیری
`;

    return await chat(
        prompt,
        env,
        "gemini-2.0-flash"
    );
}


// ============================================================
// 🧠 REASON
// ============================================================

export async function reason(
    problem,
    env
) {

    const prompt = `
مسئله زیر را حل کن:

${problem}

راه‌حل را واضح و مرحله‌به‌مرحله توضیح بده.
در صورت وجود چند راه‌حل، بهترین گزینه را معرفی کن.
`;

    return await chat(
        prompt,
        env,
        "gpt-4o"
    );
}


// ============================================================
// 🔎 TAVILY SEARCH
// ============================================================

export async function search(
    query,
    env
) {

    const key =
        getApiKey(
            env,
            "TAVILY_API_KEY"
        );

    if (!key) {
        throw new Error(
            "TAVILY_API_KEY تنظیم نشده است"
        );
    }

    const response =
        await fetch(
            "https://api.tavily.com/search",
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    query,
                    search_depth: "advanced",
                    include_answer: true,
                    max_results: 5
                })
            }
        );

    const data =
        await readJson(response);

    if (!response.ok) {
        throw apiError(
            "Tavily",
            response,
            data
        );
    }

    return data;
}


// ============================================================
// 🧪 TEST ENGINE
// ============================================================

export async function testEngine(
    modelId,
    env
) {

    const normalized =
        normalizeModel(modelId);

    const model =
        AI_MODELS[normalized];

    if (!model) {
        return {
            ok: false,
            model: normalized,
            error: "Model not found"
        };
    }

    try {

        if (model.type === "image") {

            return {
                ok: true,
                model: normalized,
                provider: model.provider,
                type: model.type
            };

        }

        const result =
            await chat(
                "فقط بنویس: OK",
                env,
                normalized,
                {
                    maxTokens: 20
                }
            );

        return {
            ok: true,
            model: normalized,
            provider: model.provider,
            type: model.type,
            response: result
        };

    } catch (error) {

        return {
            ok: false,
            model: normalized,
            provider: model.provider,
            type: model.type,
            error:
                error instanceof Error
                    ? error.message
                    : String(error)
        };
    }
}


// ============================================================
// 📊 LIST MODELS
// ============================================================

export function getAvailableModels() {

    return Object.entries(
        AI_MODELS
    ).map(([id, model]) => ({
        id,
        ...model
    }));

}


// ============================================================
// 📤 DEFAULT AI SERVICE
// ============================================================

export const AI = {

    MODELS: AI_MODELS,

    chat,

    image,

    summarize,

    translate,

    generateCode,

    analyze,

    reason,

    search,

    testEngine,

    generateWithFallback,

    getAvailableModels,

    normalizeModel

};


// ============================================================
// 📤 EXPORTS
// ============================================================

export default AI;
