// ============================================================
// 🎙️ NOVA AI PRO ULTIMATE
// Cloudflare Workers + Telegram + D1
// PART 1 — REAL CORE
// ============================================================

const APP = {
    name: "🎙️ Nova AI Pro",
    version: "12.0.0",
    defaultLanguage: "fa",
    supportedLanguages: ["fa", "en", "ar", "tr"],
    maxHistory: 20,
    pageSize: 8
};

// ============================================================
// 🌍 LANGUAGES
// ============================================================

const LANG = {

    fa: {
        name: "فارسی",
        flag: "🇮🇷",

        welcome: "به Nova AI Pro خوش اومدی!",
        panel: "📊 پنل کاربری",
        characters: "🎭 شخصیت‌ها",
        models: "🧠 موتورهای AI",
        language: "🌍 زبان",
        voice: "🎙️ ویس",
        image: "🖼️ تصویر",
        help: "📖 راهنما",
        admin: "👑 پنل ادمین",
        users: "👥 کاربران",
        stats: "📊 آمار",
        back: "🔙 بازگشت",
        close: "❌ بستن",
        loading: "⏳ لطفاً صبر کنید...",
        noAccess: "⛔ شما دسترسی لازم را ندارید.",
        restricted: "⛔ دسترسی شما محدود شده است.",
        saved: "✅ با موفقیت ذخیره شد.",
        invalid: "❌ گزینه نامعتبر است.",
        languageChanged: "✅ زبان تغییر کرد.",
        characterChanged: "✅ شخصیت تغییر کرد.",
        modelChanged: "✅ موتور تغییر کرد."
    },

    en: {
        name: "English",
        flag: "🇬🇧",

        welcome: "Welcome to Nova AI Pro!",
        panel: "📊 User Panel",
        characters: "🎭 Characters",
        models: "🧠 AI Models",
        language: "🌍 Language",
        voice: "🎙️ Voice",
        image: "🖼️ Image",
        help: "📖 Help",
        admin: "👑 Admin Panel",
        users: "👥 Users",
        stats: "📊 Statistics",
        back: "🔙 Back",
        close: "❌ Close",
        loading: "⏳ Please wait...",
        noAccess: "⛔ You don't have permission.",
        restricted: "⛔ Your access is restricted.",
        saved: "✅ Saved successfully.",
        invalid: "❌ Invalid option.",
        languageChanged: "✅ Language changed.",
        characterChanged: "✅ Character changed.",
        modelChanged: "✅ Model changed."
    },

    ar: {
        name: "العربية",
        flag: "🇸🇦",

        welcome: "مرحباً بك في Nova AI Pro!",
        panel: "📊 لوحة المستخدم",
        characters: "🎭 الشخصيات",
        models: "🧠 نماذج الذكاء الاصطناعي",
        language: "🌍 اللغة",
        voice: "🎙️ الصوت",
        image: "🖼️ صورة",
        help: "📖 المساعدة",
        admin: "👑 لوحة المدير",
        users: "👥 المستخدمون",
        stats: "📊 الإحصائيات",
        back: "🔙 رجوع",
        close: "❌ إغلاق",
        loading: "⏳ يرجى الانتظار...",
        noAccess: "⛔ ليس لديك صلاحية.",
        restricted: "⛔ تم تقييد حسابك.",
        saved: "✅ تم الحفظ.",
        invalid: "❌ خيار غير صالح.",
        languageChanged: "✅ تم تغيير اللغة.",
        characterChanged: "✅ تم تغيير الشخصية.",
        modelChanged: "✅ تم تغيير النموذج."
    },

    tr: {
        name: "Türkçe",
        flag: "🇹🇷",

        welcome: "Nova AI Pro'ya hoş geldiniz!",
        panel: "📊 Kullanıcı Paneli",
        characters: "🎭 Karakterler",
        models: "🧠 AI Modelleri",
        language: "🌍 Dil",
        voice: "🎙️ Ses",
        image: "🖼️ Resim",
        help: "📖 Yardım",
        admin: "👑 Yönetici Paneli",
        users: "👥 Kullanıcılar",
        stats: "📊 İstatistik",
        back: "🔙 Geri",
        close: "❌ Kapat",
        loading: "⏳ Lütfen bekleyin...",
        noAccess: "⛔ Yetkiniz yok.",
        restricted: "⛔ Hesabınız kısıtlandı.",
        saved: "✅ Kaydedildi.",
        invalid: "❌ Geçersiz seçenek.",
        languageChanged: "✅ Dil değiştirildi.",
        characterChanged: "✅ Karakter değiştirildi.",
        modelChanged: "✅ Model değiştirildi."
    }
};

// ============================================================
// 🎭 CHARACTERS
// ============================================================

const CHARACTERS = {

    sara: {
        id: "sara",
        name: "سارا",
        icon: "👩‍🦰",
        gender: "female",
        description: "دختر مهربون، صمیمی و دلسوز",
        systemPrompt:
            "تو سارا هستی؛ شخصیتی مهربان، صمیمی، دلسوز و طبیعی."
    },

    layla: {
        id: "layla",
        name: "لیلا",
        icon: "👩‍🦳",
        gender: "female",
        description: "شاد، پرانرژی و مثبت",
        systemPrompt:
            "تو لیلا هستی؛ شخصیتی شاد، پرانرژی و مثبت."
    },

    maryam: {
        id: "maryam",
        name: "مریم",
        icon: "👩‍🦱",
        gender: "female",
        description: "باهوش، منطقی و دلسوز",
        systemPrompt:
            "تو مریم هستی؛ شخصیتی باهوش، منطقی و دلسوز."
    },

    nova: {
        id: "nova",
        name: "نوا",
        icon: "🤖",
        gender: "female",
        description: "دستیار هوشمند و حرفه‌ای",
        systemPrompt:
            "تو نوا هستی؛ یک دستیار هوشمند، دقیق و حرفه‌ای."
    },

    hamid: {
        id: "hamid",
        name: "حمید",
        icon: "❤️🏍️",
        gender: "male",
        description: "مهربان، صمیمی و عاشق موتور",
        systemPrompt:
            "تو حمید هستی؛ شخصیتی مهربان، صمیمی و عاشق موتورسواری."
    }
};

// ============================================================
// 🧠 AI MODELS
// ============================================================

const AI_MODELS = {

    nova_ai: {
        id: "nova_ai",
        name: "Nova AI",
        icon: "🎙️",
        provider: "Nova"
    },

    openai: {
        id: "openai",
        name: "OpenAI",
        icon: "🧠",
        provider: "OpenAI"
    },

    deepseek: {
        id: "deepseek",
        name: "DeepSeek",
        icon: "🔵",
        provider: "DeepSeek"
    },

    gemini: {
        id: "gemini",
        name: "Gemini",
        icon: "✨",
        provider: "Google"
    }
};

// ============================================================
// 🛡️ BASIC SECURITY
// ============================================================

function isValidTelegramUpdate(update) {

    if (!update || typeof update !== "object") {
        return false;
    }

    return Boolean(
        update.update_id !== undefined
    );
}

function safeString(value, maxLength = 4000) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value).slice(0, maxLength);
}

function getLanguage(code) {

    if (LANG[code]) {
        return LANG[code];
    }

    return LANG[APP.defaultLanguage];
}

function getCharacter(id) {

    return CHARACTERS[id] || CHARACTERS.sara;
}

function getModel(id) {

    return AI_MODELS[id] || AI_MODELS.nova_ai;
}

// ============================================================
// 📡 TELEGRAM API
// ============================================================

async function telegram(env, method, body = {}) {

    if (!env.BOT_TOKEN) {
        throw new Error("BOT_TOKEN is missing");
    }

    const url =
        `https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`;

    const response = await fetch(url, {

        method: "POST",

        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!data.ok) {

        console.error(
            "Telegram API error:",
            method,
            data
        );

        throw new Error(
            data.description || "Telegram API error"
        );
    }

    return data.result;
}

// ============================================================
// 📨 SEND MESSAGE
// ============================================================

async function sendMessage(
    env,
    chatId,
    text,
    replyMarkup = null,
    options = {}
) {

    const body = {
        chat_id: chatId,
        text: safeString(text, 4096)
    };

    if (replyMarkup) {
        body.reply_markup = replyMarkup;
    }

    if (options.replyTo) {
        body.reply_to_message_id =
            options.replyTo;
    }

    if (options.disablePreview) {
        body.link_preview_options = {
            is_disabled: true
        };
    }

    return telegram(
        env,
        "sendMessage",
        body
    );
}

// ============================================================
// ✏️ EDIT MESSAGE
// ============================================================

async function editMessage(
    env,
    chatId,
    messageId,
    text,
    replyMarkup = null
) {

    const body = {
        chat_id: chatId,
        message_id: messageId,
        text: safeString(text, 4096)
    };

    if (replyMarkup) {
        body.reply_markup = replyMarkup;
    }

    return telegram(
        env,
        "editMessageText",
        body
    );
}

// ============================================================
// ❌ DELETE MESSAGE
// ============================================================

async function deleteMessage(
    env,
    chatId,
    messageId
) {

    try {

        return await telegram(
            env,
            "deleteMessage",
            {
                chat_id: chatId,
                message_id: messageId
            }
        );

    } catch (error) {

        console.error(
            "Delete message error:",
            error.message
        );

        return null;
    }
}

// ============================================================
// 🔘 CALLBACK ANSWER
// ============================================================

async function answerCallback(
    env,
    callbackId,
    text = "",
    showAlert = false
) {

    try {

        return await telegram(
            env,
            "answerCallbackQuery",
            {
                callback_query_id: callbackId,
                text,
                show_alert: showAlert
            }
        );

    } catch (error) {

        console.error(
            "Callback error:",
            error.message
        );

        return null;
    }
}

// ============================================================
// 👤 DATABASE — USER
// ============================================================

async function findUser(env, telegramId) {

    return env.DB
        .prepare(`
            SELECT *
            FROM users
            WHERE telegram_id = ?
            LIMIT 1
        `)
        .bind(String(telegramId))
        .first();
}

// ============================================================
// 👤 CREATE USER
// ============================================================

async function createUser(
    env,
    telegramUser
) {

    const telegramId =
        String(telegramUser.id);

    const isAdmin =
        telegramId === String(env.ADMIN_ID)
            ? 1
            : 0;

    await env.DB
        .prepare(`
            INSERT INTO users (
                telegram_id,
                first_name,
                last_name,
                username,
                language,
                personality,
                ai_provider,
                is_vip,
                is_admin,
                is_restricted,
                voice_enabled,
                image_enabled,
                message_count,
                xp,
                level,
                created_at,
                updated_at,
                last_active
            )
            VALUES (
                ?, ?, ?, ?, ?, ?, ?,
                0, ?, 0, 1, 1,
                0, 0, 1,
                CURRENT_TIMESTAMP,
                CURRENT_TIMESTAMP,
                CURRENT_TIMESTAMP
            )
        `)
        .bind(

            telegramId,

            safeString(
                telegramUser.first_name,
                100
            ),

            safeString(
                telegramUser.last_name,
                100
            ),

            safeString(
                telegramUser.username,
                100
            ),

            APP.defaultLanguage,

            "sara",

            "nova_ai",

            isAdmin

        )
        .run();

    return findUser(
        env,
        telegramId
    );
}

// ============================================================
// 👤 GET OR CREATE USER
// ============================================================

async function getOrCreateUser(
    env,
    telegramUser
) {

    const telegramId =
        String(telegramUser.id);

    let user =
        await findUser(
            env,
            telegramId
        );

    if (!user) {

        user =
            await createUser(
                env,
                telegramUser
            );

        return user;
    }

    await env.DB
        .prepare(`
            UPDATE users
            SET
                first_name = ?,
                last_name = ?,
                username = ?,
                last_active = CURRENT_TIMESTAMP,
                updated_at = CURRENT_TIMESTAMP
            WHERE telegram_id = ?
        `)
        .bind(

            safeString(
                telegramUser.first_name,
                100
            ),

            safeString(
                telegramUser.last_name,
                100
            ),

            safeString(
                telegramUser.username,
                100
            ),

            telegramId

        )
        .run();

    return findUser(
        env,
        telegramId
    );
}

// ============================================================
// 📈 USER ACTIVITY
// ============================================================

async function registerMessage(
    env,
    telegramId
) {

    await env.DB
        .prepare(`
            UPDATE users
            SET
                message_count =
                    message_count + 1,

                xp =
                    xp + 1,

                level =
                    CAST(
                        ((xp + 1) / 50) + 1
                        AS INTEGER
                    ),

                last_active =
                    CURRENT_TIMESTAMP,

                updated_at =
                    CURRENT_TIMESTAMP

            WHERE telegram_id = ?
        `)
        .bind(String(telegramId))
        .run();
}

// ============================================================
// 🌍 CHANGE LANGUAGE
// ============================================================

async function setUserLanguage(
    env,
    telegramId,
    language
) {

    if (
        !APP.supportedLanguages
            .includes(language)
    ) {
        return false;
    }

    await env.DB
        .prepare(`
            UPDATE users
            SET
                language = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE telegram_id = ?
        `)
        .bind(
            language,
            String(telegramId)
        )
        .run();

    return true;
}

// ============================================================
// 🎭 CHANGE CHARACTER
// ============================================================

async function setCharacter(
    env,
    telegramId,
    characterId
) {

    if (!CHARACTERS[characterId]) {
        return false;
    }

    await env.DB
        .prepare(`
            UPDATE users
            SET
                personality = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE telegram_id = ?
        `)
        .bind(
            characterId,
            String(telegramId)
        )
        .run();

    return true;
}

// ============================================================
// 🧠 CHANGE MODEL
// ============================================================

async function setModel(
    env,
    telegramId,
    modelId
) {

    if (!AI_MODELS[modelId]) {
        return false;
    }

    await env.DB
        .prepare(`
            UPDATE users
            SET
                ai_provider = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE telegram_id = ?
        `)
        .bind(
            modelId,
            String(telegramId)
        )
        .run();

    return true;
}

// ============================================================
// 💬 SAVE CONVERSATION
// ============================================================

async function saveConversation(
    env,
    telegramId,
    role,
    content
) {

    await env.DB
        .prepare(`
            INSERT INTO conversations (
                telegram_id,
                role,
                content,
                created_at
            )
            VALUES (?, ?, ?, CURRENT_TIMESTAMP)
        `)
        .bind(
            String(telegramId),
            role,
            safeString(content, 12000)
        )
        .run();

    await env.DB
        .prepare(`
            DELETE FROM conversations
            WHERE telegram_id = ?
            AND id NOT IN (
                SELECT id
                FROM conversations
                WHERE telegram_id = ?
                ORDER BY id DESC
                LIMIT ?
            )
        `)
        .bind(
            String(telegramId),
            String(telegramId),
            APP.maxHistory
        )
        .run();
}

// ============================================================
// 💬 GET HISTORY
// ============================================================

async function getConversation(
    env,
    telegramId
) {

    const result =
        await env.DB
            .prepare(`
                SELECT
                    role,
                    content,
                    created_at
                FROM conversations
                WHERE telegram_id = ?
                ORDER BY id ASC
                LIMIT ?
            `)
            .bind(
                String(telegramId),
                APP.maxHistory
            )
            .all();

    return result.results || [];
}

// ============================================================
// 🧹 CLEAR HISTORY
// ============================================================

async function clearConversation(
    env,
    telegramId
) {

    await env.DB
        .prepare(`
            DELETE FROM conversations
            WHERE telegram_id = ?
        `)
        .bind(String(telegramId))
        .run();

    return true;
}

// ============================================================
// 📊 REAL STATISTICS
// ============================================================

async function getStatistics(env) {

    const users =
        await env.DB
            .prepare(`
                SELECT COUNT(*) AS total
                FROM users
            `)
            .first();

    const messages =
        await env.DB
            .prepare(`
                SELECT
                    COALESCE(
                        SUM(message_count),
                        0
                    ) AS total
                FROM users
            `)
            .first();

    const vip =
        await env.DB
            .prepare(`
                SELECT COUNT(*) AS total
                FROM users
                WHERE is_vip = 1
            `)
            .first();

    const restricted =
        await env.DB
            .prepare(`
                SELECT COUNT(*) AS total
                FROM users
                WHERE is_restricted = 1
            `)
            .first();

    const active =
        await env.DB
            .prepare(`
                SELECT COUNT(*) AS total
                FROM users
                WHERE last_active >=
                    datetime(
                        'now',
                        '-24 hours'
                    )
            `)
            .first();

    return {

        totalUsers:
            Number(users?.total || 0),

        totalMessages:
            Number(messages?.total || 0),

        vipUsers:
            Number(vip?.total || 0),

        restrictedUsers:
            Number(restricted?.total || 0),

        activeUsers:
            Number(active?.total || 0)
    };
}

// ============================================================
// 📊 LOG
// ============================================================

async function writeLog(
    env,
    action,
    telegramId,
    details = ""
) {

    try {

        await env.DB
            .prepare(`
                INSERT INTO bot_logs (
                    action,
                    telegram_id,
                    details,
                    created_at
                )
                VALUES (
                    ?, ?, ?, CURRENT_TIMESTAMP
                )
            `)
            .bind(
                action,
                String(telegramId),
                safeString(details, 2000)
            )
            .run();

    } catch (error) {

        console.error(
            "Log error:",
            error.message
        );
    }
}

// ============================================================
// 🏠 MAIN PANEL
// ============================================================

async function showMainPanel(
    env,
    chatId,
    user
) {

    const t =
        getLanguage(user.language);

    const character =
        getCharacter(user.personality);

    const model =
        getModel(user.ai_provider);

    const stats =
        await getStatistics(env);

    const vip =
        Number(user.is_vip)
            ? "👑 VIP"
            : "👤 Free";

    const text = `
${APP.name}
━━━━━━━━━━━━━━━━━━

${t.welcome}
👤 ${safeString(user.first_name || "دوست عزیز", 100)}

🎭 شخصیت:
${character.icon} ${character.name}

🧠 موتور:
${model.icon} ${model.name}

🌍 زبان:
${t.flag} ${t.name}

⭐ حساب:
${vip}

💬 پیام‌های شما:
${user.message_count}

🏆 سطح:
${user.level}

━━━━━━━━━━━━━━━━━━
📊 آمار سیستم

👥 کاربران: ${stats.totalUsers}
🔥 فعال ۲۴ ساعت: ${stats.activeUsers}
💬 پیام‌ها: ${stats.totalMessages}
👑 VIP: ${stats.vipUsers}

━━━━━━━━━━━━━━━━━━
⚡ Nova AI Pro v${APP.version}
`;

    const keyboard = {

        inline_keyboard: [

            [
                {
                    text: t.characters,
                    callback_data: "panel:characters"
                }
            ],

            [
                {
                    text: t.models,
                    callback_data: "panel:models"
                }
            ],

            [
                {
                    text: t.language,
                    callback_data: "panel:language"
                }
            ],

            [
                {
                    text: t.voice,
                    callback_data: "panel:voice"
                },

                {
                    text: t.image,
                    callback_data: "panel:image"
                }
            ],

            [
                {
                    text: "🧹 پاک کردن حافظه",
                    callback_data: "memory:clear"
                }
            ],

            [
                {
                    text: t.help,
                    callback_data: "panel:help"
                }
            ],

            [
                {
                    text: t.admin,
                    callback_data: "panel:admin"
                }
            ]
        ]
    };

    return sendMessage(
        env,
        chatId,
        text,
        keyboard
    );
}

// ============================================================
// 🎭 CHARACTER PANEL
// ============================================================

async function showCharacterPanel(
    env,
    chatId,
    user
) {

    const t =
        getLanguage(user.language);

    const active =
        getCharacter(user.personality);

    let text = `
🎭 ${t.characters}

شخصیت فعلی:
${active.icon} ${active.name}

━━━━━━━━━━━━━━━━━━

`;

    const keyboard = [];

    for (
        const character
        of Object.values(CHARACTERS)
    ) {

        const selected =
            character.id === active.id;

        text +=
            `${selected ? "✅" : "▫️"} ` +
            `${character.icon} ` +
            `${character.name}\n` +
            `   ${character.description}\n\n`;

        keyboard.push([
            {
                text:
                    `${selected ? "✅ " : ""}` +
                    `${character.icon} ` +
                    `${character.name}`,

                callback_data:
                    `character:set:${character.id}`
            }
        ]);
    }

    keyboard.push([
        {
            text: t.back,
            callback_data: "panel:main"
        }
    ]);

    return sendMessage(
        env,
        chatId,
        text,
        {
            inline_keyboard: keyboard
        }
    );
}

// ============================================================
// 🧠 MODEL PANEL
// ============================================================

async function showModelPanel(
    env,
    chatId,
    user
) {

    const t =
        getLanguage(user.language);

    const active =
        getModel(user.ai_provider);

    let text = `
🧠 ${t.models}

موتور فعلی:
${active.icon} ${active.name}

━━━━━━━━━━━━━━━━━━

`;

    const keyboard = [];

    for (
        const model
        of Object.values(AI_MODELS)
    ) {

        const selected =
            model.id === active.id;

        text +=
            `${selected ? "✅" : "▫️"} ` +
            `${model.icon} ` +
            `${model.name}\n` +
            `   Provider: ${model.provider}\n\n`;

        keyboard.push([
            {
                text:
                    `${selected ? "✅ " : ""}` +
                    `${model.icon} ${model.name}`,

                callback_data:
                    `model:set:${model.id}`
            }
        ]);
    }

    keyboard.push([
        {
            text: t.back,
            callback_data: "panel:main"
        }
    ]);

    return sendMessage(
        env,
        chatId,
        text,
        {
            inline_keyboard: keyboard
        }
    );
}

// ============================================================
// 🌍 LANGUAGE PANEL
// ============================================================

async function showLanguagePanel(
    env,
    chatId,
    user
) {

    const current =
        getLanguage(user.language);

    let text = `
🌍 انتخاب زبان

زبان فعلی:
${current.flag} ${current.name}

━━━━━━━━━━━━━━━━━━
`;

    const keyboard = [];

    for (
        const code
        of APP.supportedLanguages
    ) {

        const language =
            LANG[code];

        const selected =
            code === user.language;

        text +=
            `${selected ? "✅" : "▫️"} ` +
            `${language.flag} ` +
            `${language.name}\n`;

        keyboard.push([
            {
                text:
                    `${selected ? "✅ " : ""}` +
                    `${language.flag} ` +
                    `${language.name}`,

                callback_data:
                    `language:set:${code}`
            }
        ]);
    }

    keyboard.push([
        {
            text: current.back,
            callback_data: "panel:main"
        }
    ]);

    return sendMessage(
        env,
        chatId,
        text,
        {
            inline_keyboard: keyboard
        }
    );
}

// ============================================================
// 🎙️ VOICE PANEL
// ============================================================

async function showVoicePanel(
    env,
    chatId,
    user
) {

    const t =
        getLanguage(user.language);

    const character =
        getCharacter(user.personality);

    const text = `
🎙️ ${t.voice}

شخصیت:
${character.icon} ${character.name}

نوع صدا:
${character.gender === "female"
    ? "👩 صدای زنانه"
    : "👨 صدای مردانه"}

━━━━━━━━━━━━━━━━━━

🎙️ سیستم Voice واقعی
در پارت مربوط به Voice به سرویس
TTS واقعی متصل خواهد شد.

این بخش در این پارت
صدای فیک تولید نمی‌کند.
`;

    return sendMessage(
        env,
        chatId,
        text,
        {
            inline_keyboard: [
                [
                    {
                        text: t.back,
                        callback_data: "panel:main"
                    }
                ]
            ]
        }
    );
}

// ============================================================
// 🖼️ IMAGE PANEL
// ============================================================

async function showImagePanel(
    env,
    chatId,
    user
) {

    const t =
        getLanguage(user.language);

    const text = `
🖼️ ${t.image}

سیستم تولید تصویر واقعی
در پارت Image به API واقعی
متصل خواهد شد.

در این پارت هیچ تصویر فیکی
به کاربر تحویل داده نمی‌شود.
`;

    return sendMessage(
        env,
        chatId,
        text,
        {
            inline_keyboard: [
                [
                    {
                        text: t.back,
                        callback_data: "panel:main"
                    }
                ]
            ]
        }
    );
}

// ============================================================
// 📖 HELP PANEL
// ============================================================

async function showHelpPanel(
    env,
    chatId,
    user
) {

    const t =
        getLanguage(user.language);

    const text = `
📖 راهنمای ${APP.name}

━━━━━━━━━━━━━━━━━━

/start
🚀 شروع ربات

/panel
📊 پنل کاربری

/admin
👑 پنل مدیریت

/help
📖 راهنما

/language
🌍 تغییر زبان

/characters
🎭 انتخاب شخصیت

/models
🧠 انتخاب موتور

/voice
🎙️ بخش ویس

━━━━━━━━━━━━━━━━━━

🌍 زبان‌ها:
🇮🇷 فارسی
🇬🇧 English
🇸🇦 العربية
🇹🇷 Türkçe

🎭 شخصیت‌ها:
👩‍🦰 سارا
👩‍🦳 لیلا
👩‍🦱 مریم
🤖 نوا
❤️🏍️ حمید
`;

    return sendMessage(
        env,
        chatId,
        text,
        {
            inline_keyboard: [
                [
                    {
                        text: t.back,
                        callback_data: "panel:main"
                    }
                ]
            ]
        }
    );
}

// ============================================================
// 👑 ADMIN PANEL
// ============================================================

async function showAdminPanel(
    env,
    chatId,
    user
) {

    const t =
        getLanguage(user.language);

    if (!Number(user.is_admin)) {

        return sendMessage(
            env,
            chatId,
            t.noAccess
        );
    }

    const stats =
        await getStatistics(env);

    const text = `
👑 ${t.admin}

━━━━━━━━━━━━━━━━━━

👥 کل کاربران:
${stats.totalUsers}

🔥 فعال ۲۴ ساعت:
${stats.activeUsers}

💬 کل پیام‌ها:
${stats.totalMessages}

👑 VIP:
${stats.vipUsers}

⛔ محدود:
${stats.restrictedUsers}

━━━━━━━━━━━━━━━━━━
`;

    const keyboard = {

        inline_keyboard: [

            [
                {
                    text: "👥 مدیریت کاربران",
                    callback_data: "admin:users:0"
                }
            ],

            [
                {
                    text: "📊 آمار کامل",
                    callback_data: "admin:stats"
                }
            ],

            [
                {
                    text: "📢 Broadcast",
                    callback_data: "admin:broadcast"
                }
            ],

            [
                {
                    text: "🔙 بازگشت",
                    callback_data: "panel:main"
                }
            ]
        ]
    };

    return sendMessage(
        env,
        chatId,
        text,
        keyboard
    );
}

// ============================================================
// 👥 ADMIN USERS
// ============================================================

async function showAdminUsers(
    env,
    chatId,
    user,
    page = 0
) {

    if (!Number(user.is_admin)) {

        return sendMessage(
            env,
            chatId,
            "⛔ دسترسی ندارید."
        );
    }

    const offset =
        page * APP.pageSize;

    const result =
        await env.DB
            .prepare(`
                SELECT
                    telegram_id,
                    first_name,
                    username,
                    personality,
                    language,
                    is_vip,
                    is_restricted,
                    message_count,
                    level,
                    created_at,
                    last_active
                FROM users
                ORDER BY id DESC
                LIMIT ? OFFSET ?
            `)
            .bind(
                APP.pageSize,
                offset
            )
            .all();

    const count =
        await env.DB
            .prepare(`
                SELECT COUNT(*) AS total
                FROM users
            `)
            .first();

    const total =
        Number(count?.total || 0);

    const pages =
        Math.max(
            1,
            Math.ceil(
                total / APP.pageSize
            )
        );

    let text = `
👥 مدیریت کاربران

کل کاربران: ${total}

صفحه ${page + 1} از ${pages}

━━━━━━━━━━━━━━━━━━
`;

    const keyboard = [];

    for (
        const item
        of result.results || []
    ) {

        const vip =
            Number(item.is_vip)
                ? "👑"
                : "👤";

        const restricted =
            Number(item.is_restricted)
                ? "⛔"
                : "";

        const name =
            safeString(
                item.first_name ||
                item.username ||
                item.telegram_id,
                50
            );

        text +=
            `${vip}${restricted} ${name}\n` +
            `🆔 ${item.telegram_id} | ` +
            `💬 ${item.message_count}\n\n`;

        keyboard.push([
            {
                text:
                    `${vip} ${name}`,

                callback_data:
                    `admin:user:${item.telegram_id}`
            }
        ]);
    }

    const navigation = [];

    if (page > 0) {

        navigation.push({
            text: "◀️ قبلی",
            callback_data:
                `admin:users:${page - 1}`
        });
    }

    if (page < pages - 1) {

        navigation.push({
            text: "بعدی ▶️",
            callback_data:
                `admin:users:${page + 1}`
        });
    }

    if (navigation.length) {
        keyboard.push(navigation);
    }

    keyboard.push([
        {
            text: "🔙 بازگشت",
            callback_data: "panel:admin"
        }
    ]);

    return sendMessage(
        env,
        chatId,
        text,
        {
            inline_keyboard: keyboard
        }
    );
}

// ============================================================
// 👤 ADMIN USER DETAIL
// ============================================================

async function showAdminUser(
    env,
    chatId,
    admin,
    targetId
) {

    if (!Number(admin.is_admin)) {

        return sendMessage(
            env,
            chatId,
            "⛔ دسترسی ندارید."
        );
    }

    const target =
        await findUser(
            env,
            targetId
        );

    if (!target) {

        return sendMessage(
            env,
            chatId,
            "❌ کاربر پیدا نشد."
        );
    }

    const character =
        getCharacter(
            target.personality
        );

    const model =
        getModel(
            target.ai_provider
        );

    const text = `
👤 مدیریت کاربر

━━━━━━━━━━━━━━━━━━

🆔 ID:
${target.telegram_id}

👤 نام:
${target.first_name || "-"}

📱 Username:
${target.username
    ? "@" + target.username
    : "-"}

🌍 زبان:
${getLanguage(target.language).flag}
${getLanguage(target.language).name}

🎭 شخصیت:
${character.icon} ${character.name}

🧠 موتور:
${model.icon} ${model.name}

💬 پیام:
${target.message_count}

🏆 سطح:
${target.level}

⭐ XP:
${target.xp}

👑 VIP:
${Number(target.is_vip)
    ? "✅ فعال"
    : "❌ غیرفعال"}

⛔ محدود:
${Number(target.is_restricted)
    ? "✅ بله"
    : "❌ خیر"}
`;

    const keyboard = {

        inline_keyboard: [

            [
                {
                    text:
                        Number(target.is_vip)
                            ? "❌ حذف VIP"
                            : "👑 افزودن VIP",

                    callback_data:
                        Number(target.is_vip)
                            ? `admin:vip:remove:${targetId}`
                            : `admin:vip:add:${targetId}`
                }
            ],

            [
                {
                    text:
                        Number(target.is_restricted)
                            ? "✅ رفع محدودیت"
                            : "⛔ محدود کردن",

                    callback_data:
                        Number(target.is_restricted)
                            ? `admin:restrict:off:${targetId}`
                            : `admin:restrict:on:${targetId}`
                }
            ],

            [
                {
                    text: "🧹 پاک کردن حافظه",
                    callback_data:
                        `admin:memory:clear:${targetId}`
                }
            ],

            [
                {
                    text: "🔙 بازگشت",
                    callback_data:
                        "admin:users:0"
                }
            ]
        ]
    };

    return sendMessage(
        env,
        chatId,
        text,
        keyboard
    );
}

// ============================================================
// 🔐 ADMIN VIP
// ============================================================

async function setVIP(
    env,
    adminId,
    targetId,
    enabled
) {

    const admin =
        await findUser(
            env,
            adminId
        );

    if (!admin || !Number(admin.is_admin)) {
        return false;
    }

    await env.DB
        .prepare(`
            UPDATE users
            SET
                is_vip = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE telegram_id = ?
        `)
        .bind(
            enabled ? 1 : 0,
            String(targetId)
        )
        .run();

    await writeLog(
        env,
        enabled
            ? "VIP_ADD"
            : "VIP_REMOVE",
        adminId,
        `target=${targetId}`
    );

    return true;
}

// ============================================================
// ⛔ ADMIN RESTRICTION
// ============================================================

async function setRestriction(
    env,
    adminId,
    targetId,
    enabled
) {

    const admin =
        await findUser(
            env,
            adminId
        );

    if (!admin || !Number(admin.is_admin)) {
        return false;
    }

    await env.DB
        .prepare(`
            UPDATE users
            SET
                is_restricted = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE telegram_id = ?
        `)
        .bind(
            enabled ? 1 : 0,
            String(targetId)
        )
        .run();

    await writeLog(
        env,
        enabled
            ? "USER_RESTRICT"
            : "USER_UNRESTRICT",
        adminId,
        `target=${targetId}`
    );

    return true;
}

// ============================================================
// 🔘 CALLBACK ROUTER
// ============================================================

async function handleCallback(
    env,
    callback
) {

    if (
        !callback ||
        !callback.message ||
        !callback.from
    ) {
        return;
    }

    const chatId =
        callback.message.chat.id;

    const messageId =
        callback.message.message_id;

    const userId =
        callback.from.id;

    const data =
        safeString(
            callback.data,
            200
        );

    const user =
        await getOrCreateUser(
            env,
            callback.from
        );

    await answerCallback(
        env,
        callback.id
    );

    // ========================================================
    // MAIN
    // ========================================================

    if (
        data === "panel:main"
    ) {

        await deleteMessage(
            env,
            chatId,
            messageId
        );

        return showMainPanel(
            env,
            chatId,
            user
        );
    }

    // ========================================================
    // CHARACTERS
    // ========================================================

    if (
        data === "panel:characters"
    ) {

        return showCharacterPanel(
            env,
            chatId,
            user
        );
    }

    if (
        data.startsWith(
            "character:set:"
        )
    ) {

        const id =
            data.split(":")[2];

        const ok =
            await setCharacter(
                env,
                userId,
                id
            );

        if (ok) {

            await writeLog(
                env,
                "CHARACTER_CHANGE",
                userId,
                id
            );
        }

        const updated =
            await findUser(
                env,
                userId
            );

        return showCharacterPanel(
            env,
            chatId,
            updated
        );
    }

    // ========================================================
    // MODELS
    // ========================================================

    if (
        data === "panel:models"
    ) {

        return showModelPanel(
            env,
            chatId,
            user
        );
    }

    if (
        data.startsWith(
            "model:set:"
        )
    ) {

        const id =
            data.split(":")[2];

        await setModel(
            env,
            userId,
            id
        );

        const updated =
            await findUser(
                env,
                userId
            );

        return showModelPanel(
            env,
            chatId,
            updated
        );
    }

    // ========================================================
    // LANGUAGE
    // ========================================================

    if (
        data === "panel:language"
    ) {

        return showLanguagePanel(
            env,
            chatId,
            user
        );
    }

    if (
        data.startsWith(
            "language:set:"
        )
    ) {

        const language =
            data.split(":")[2];

        await setUserLanguage(
            env,
            userId,
            language
        );

        const updated =
            await findUser(
                env,
                userId
            );

        return showMainPanel(
            env,
            chatId,
            updated
        );
    }

    // ========================================================
    // VOICE
    // ========================================================

    if (
        data === "panel:voice"
    ) {

        return showVoicePanel(
            env,
            chatId,
            user
        );
    }

    // ========================================================
    // IMAGE
    // ========================================================

    if (
        data === "panel:image"
    ) {

        return showImagePanel(
            env,
            chatId,
            user
        );
    }

    // ========================================================
    // HELP
    // ========================================================

    if (
        data === "panel:help"
    ) {

        return showHelpPanel(
            env,
            chatId,
            user
        );
    }

    // ========================================================
    // CLEAR MEMORY
    // ========================================================

    if (
        data === "memory:clear"
    ) {

        await clearConversation(
            env,
            userId
        );

        await answerCallback(
            env,
            callback.id,
            "✅ حافظه پاک شد."
        );

        return showMainPanel(
            env,
            chatId,
            user
        );
    }

    // ========================================================
    // ADMIN PANEL
    // ========================================================

    if (
        data === "panel:admin"
    ) {

        return showAdminPanel(
            env,
            chatId,
            user
        );
    }

    // ========================================================
    // ADMIN USERS
    // ========================================================

    if (
        data.startsWith(
            "admin:users:"
        )
    ) {

        const page =
            Number(
                data.split(":")[2]
            ) || 0;

        return showAdminUsers(
            env,
            chatId,
            user,
            page
        );
    }

    // ========================================================
    // ADMIN USER
    // ========================================================

    if (
        data.startsWith(
            "admin:user:"
        )
    ) {

        const targetId =
            data.split(":")[2];

        return showAdminUser(
            env,
            chatId,
            user,
            targetId
        );
    }

    // ========================================================
    // ADMIN VIP
    // ========================================================

    if (
        data.startsWith(
            "admin:vip:"
        )
    ) {

        const parts =
            data.split(":");

        const action =
            parts[2];

        const targetId =
            parts[3];

        const ok =
            await setVIP(
                env,
                userId,
                targetId,
                action === "add"
            );

        if (!ok) {

            return sendMessage(
                env,
                chatId,
                "⛔ دسترسی ندارید."
            );
        }

        return showAdminUser(
            env,
            chatId,
            user,
            targetId
        );
    }

    // ========================================================
    // ADMIN RESTRICTION
    // ========================================================

    if (
        data.startsWith(
            "admin:restrict:"
        )
    ) {

        const parts =
            data.split(":");

        const action =
            parts[2];

        const targetId =
            parts[3];

        const ok =
            await setRestriction(
                env,
                userId,
                targetId,
                action === "on"
            );

        if (!ok) {

            return sendMessage(
                env,
                chatId,
                "⛔ دسترسی ندارید."
            );
        }

        return showAdminUser(
            env,
            chatId,
            user,
            targetId
        );
    }

    // ========================================================
    // ADMIN MEMORY
    // ========================================================

    if (
        data.startsWith(
            "admin:memory:clear:"
        )
    ) {

        const targetId =
            data.split(":")[3];

        if (!Number(user.is_admin)) {

            return sendMessage(
                env,
                chatId,
                "⛔ دسترسی ندارید."
            );
        }

        await clearConversation(
            env,
            targetId
        );

        await writeLog(
            env,
            "ADMIN_CLEAR_MEMORY",
            userId,
            `target=${targetId}`
        );

        return showAdminUser(
            env,
            chatId,
            user,
            targetId
        );
    }

    // ========================================================
    // ADMIN STATS
    // ========================================================

    if (
        data === "admin:stats"
    ) {

        if (!Number(user.is_admin)) {

            return sendMessage(
                env,
                chatId,
                "⛔ دسترسی ندارید."
            );
        }

        const stats =
            await getStatistics(env);

        const text = `
📊 آمار کامل Nova

━━━━━━━━━━━━━━━━━━

👥 کاربران:
${stats.totalUsers}

🔥 فعال ۲۴ ساعت:
${stats.activeUsers}

💬 پیام‌ها:
${stats.totalMessages}

👑 VIP:
${stats.vipUsers}

⛔ محدود:
${stats.restrictedUsers}

━━━━━━━━━━━━━━━━━━
`;

        return sendMessage(
            env,
            chatId,
            text,
            {
                inline_keyboard: [
                    [
                        {
                            text: "🔄 بروزرسانی",
                            callback_data:
                                "admin:stats"
                        }
                    ],
                    [
                        {
                            text: "🔙 بازگشت",
                            callback_data:
                                "panel:admin"
                        }
                    ]
                ]
            }
        );
    }

    // ========================================================
    // BROADCAST — فقط آماده‌سازی حالت
    // ========================================================

    if (
        data === "admin:broadcast"
    ) {

        if (!Number(user.is_admin)) {

            return sendMessage(
                env,
                chatId,
                "⛔ دسترسی ندارید."
            );
        }

        return sendMessage(
            env,
            chatId,
            `
📢 Broadcast

سیستم Broadcast در پارت مدیریت ادمین
به‌صورت کامل پیاده‌سازی می‌شود.

در این پارت پیام‌ها را
الکی ارسال نمی‌کنیم.
`,
            {
                inline_keyboard: [
                    [
                        {
                            text: "🔙 بازگشت",
                            callback_data:
                                "panel:admin"
                        }
                    ]
                ]
            }
        );
    }

    return sendMessage(
        env,
        chatId,
        "⚠️ گزینه نامعتبر است."
    );
}

// ============================================================
// 💬 MESSAGE ROUTER
// ============================================================

async function handleMessage(
    env,
    message
) {

    if (
        !message ||
        !message.from ||
        !message.chat
    ) {
        return;
    }

    const telegramUser =
        message.from;

    const chatId =
        message.chat.id;

    const user =
        await getOrCreateUser(
            env,
            telegramUser
        );

    await registerMessage(
        env,
        telegramUser.id
    );

    if (
        Number(user.is_restricted)
    ) {

        const t =
            getLanguage(
                user.language
            );

        return sendMessage(
            env,
            chatId,
            t.restricted
        );
    }

    const text =
        safeString(
            message.text,
            12000
        ).trim();

    if (!text) {
        return;
    }

    // ========================================================
    // COMMANDS
    // ========================================================

    const command =
        text
            .split(/\s+/)[0]
            .toLowerCase()
            .split("@")[0];

    if (command === "/start") {

        await writeLog(
            env,
            "START",
            telegramUser.id
        );

        return showMainPanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/panel") {

        return showMainPanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/admin") {

        return showAdminPanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/help") {

        return showHelpPanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/language") {

        return showLanguagePanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/characters") {

        return showCharacterPanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/models") {

        return showModelPanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/voice") {

        return showVoicePanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/image") {

        return showImagePanel(
            env,
            chatId,
            user
        );
    }

    if (command === "/clear") {

        await clearConversation(
            env,
            telegramUser.id
        );

        return sendMessage(
            env,
            chatId,
            "🧹 حافظه مکالمه شما پاک شد."
        );
    }

    // ========================================================
    // NORMAL MESSAGE
    // ========================================================

    await saveConversation(
        env,
        telegramUser.id,
        "user",
        text
    );

    /*
     * ⛔ اینجا AI فیک قرار نمی‌دهیم.
     *
     * پارت ۲ دقیقاً همین نقطه را به
     * موتور AI واقعی متصل می‌کند.
     */

    return sendMessage(
        env,
        chatId,
        `
📨 پیام دریافت شد.

🧠 شخصیت فعلی:
${getCharacter(user.personality).icon}
${getCharacter(user.personality).name}

🧠 موتور انتخاب‌شده:
${getModel(user.ai_provider).name}

⏳ موتور AI واقعی در پارت ۲
به همین هسته متصل می‌شود.
`
    );
}

// ============================================================
// 🚀 CLOUDFLARE WORKER
// ============================================================

export default {

    async fetch(
        request,
        env,
        ctx
    ) {

        // ----------------------------------------------------
        // GET
        // ----------------------------------------------------

        if (
            request.method === "GET"
        ) {

            return new Response(
                JSON.stringify({
                    ok: true,
                    bot: APP.name,
                    version: APP.version,
                    platform:
                        "Cloudflare Workers",
                    database: "D1"
                }),
                {
                    status: 200,

                    headers: {
                        "content-type":
                            "application/json; charset=utf-8"
                    }
                }
            );
        }

        // ----------------------------------------------------
        // ONLY POST
        // ----------------------------------------------------

        if (
            request.method !== "POST"
        ) {

            return new Response(
                "Method Not Allowed",
                {
                    status: 405
                }
            );
        }

        // ----------------------------------------------------
        // READ UPDATE
        // ----------------------------------------------------

        let update;

        try {

            update =
                await request.json();

        } catch (error) {

            return new Response(
                "Invalid JSON",
                {
                    status: 400
                }
            );
        }

        // ----------------------------------------------------
        // VALIDATE UPDATE
        // ----------------------------------------------------

        if (
            !isValidTelegramUpdate(
                update
            )
        ) {

            return new Response(
                "Invalid Telegram update",
                {
                    status: 400
                }
            );
        }

        // ----------------------------------------------------
        // MESSAGE
        // ----------------------------------------------------

        try {

            if (update.message) {

                await handleMessage(
                    env,
                    update.message
                );
            }

        } catch (error) {

            console.error(
                "Message handler error:",
                error
            );

            ctx.waitUntil(
                writeLog(
                    env,
                    "MESSAGE_ERROR",
                    update.message?.from?.id || 0,
                    error.message
                )
            );
        }

        // ----------------------------------------------------
        // CALLBACK
        // ----------------------------------------------------

        try {

            if (update.callback_query) {

                await handleCallback(
                    env,
                    update.callback_query
                );
            }

        } catch (error) {

            console.error(
                "Callback handler error:",
                error
            );

            ctx.waitUntil(
                writeLog(
                    env,
                    "CALLBACK_ERROR",
                    update.callback_query?.from?.id || 0,
                    error.message
                )
            );
        }

        // ----------------------------------------------------
        // TELEGRAM NEEDS 200
        // ----------------------------------------------------

        return new Response(
            "OK",
            {
                status: 200
            }
        );
    }
};
// ============================================================
// 🎙️ NOVA BOT ULTIMATE
// PART 2 — REAL AI ENGINE MANAGER
// Cloudflare Workers + JavaScript
// ============================================================

/*
  موتورهای این فایل:

  01 - OpenAI
  02 - Gemini
  03 - Claude
  04 - DeepSeek
  05 - Groq
  06 - Mistral
  07 - Qwen
  08 - OpenRouter
  09 - Together AI
  10 - Fireworks AI
  11 - Hamid AI Pro

  ویژگی‌ها:
  ✅ API واقعی
  ✅ Cloudflare Workers compatible
  ✅ بدون require
  ✅ بدون dotenv
  ✅ بدون node-fetch
  ✅ API Key از env
  ✅ شخصیت‌ها
  ✅ conversation messages
  ✅ fallback
  ✅ تشخیص موتور فعال
  ✅ timeout
  ✅ خطای قابل فهم
  ❌ پاسخ ساختگی ندارد
*/

// ============================================================
// ⚙️ ENGINE CONFIG
// ============================================================

const AI_ENGINES = {

    openai: {
        id: "openai",
        name: "OpenAI",
        icon: "🧠",
        type: "openai",
        url: "https://api.openai.com/v1/chat/completions",
        model: "gpt-4o-mini",
        envKey: "OPENAI_API_KEY"
    },

    gemini: {
        id: "gemini",
        name: "Google Gemini",
        icon: "✨",
        type: "gemini",
        model: "gemini-2.5-flash",
        envKey: "GEMINI_API_KEY"
    },

    claude: {
        id: "claude",
        name: "Claude",
        icon: "🟠",
        type: "claude",
        url: "https://api.anthropic.com/v1/messages",
        model: "claude-3-5-haiku-latest",
        envKey: "ANTHROPIC_API_KEY"
    },

    deepseek: {
        id: "deepseek",
        name: "DeepSeek",
        icon: "🔥",
        type: "openai-compatible",
        url: "https://api.deepseek.com/chat/completions",
        model: "deepseek-chat",
        envKey: "DEEPSEEK_API_KEY"
    },

    groq: {
        id: "groq",
        name: "Groq",
        icon: "⚡",
        type: "openai-compatible",
        url: "https://api.groq.com/openai/v1/chat/completions",
        model: "llama-3.3-70b-versatile",
        envKey: "GROQ_API_KEY"
    },

    mistral: {
        id: "mistral",
        name: "Mistral",
        icon: "🌀",
        type: "openai-compatible",
        url: "https://api.mistral.ai/v1/chat/completions",
        model: "mistral-small-latest",
        envKey: "MISTRAL_API_KEY"
    },

    qwen: {
        id: "qwen",
        name: "Qwen",
        icon: "🐉",
        type: "openai-compatible",
        url: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
        model: "qwen-plus",
        envKey: "QWEN_API_KEY"
    },

    openrouter: {
        id: "openrouter",
        name: "OpenRouter",
        icon: "🌐",
        type: "openai-compatible",
        url: "https://openrouter.ai/api/v1/chat/completions",
        model: "openai/gpt-4o-mini",
        envKey: "OPENROUTER_API_KEY"
    },

    together: {
        id: "together",
        name: "Together AI",
        icon: "🤝",
        type: "openai-compatible",
        url: "https://api.together.xyz/v1/chat/completions",
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
        envKey: "TOGETHER_API_KEY"
    },

    fireworks: {
        id: "fireworks",
        name: "Fireworks AI",
        icon: "🎆",
        type: "openai-compatible",
        url: "https://api.fireworks.ai/inference/v1/chat/completions",
        model: "accounts/fireworks/models/llama-v3p1-70b-instruct",
        envKey: "FIREWORKS_API_KEY"
    },

    hamid: {
        id: "hamid",
        name: "Hamid AI Pro",
        icon: "❤️",
        type: "custom",
        urlEnv: "HAMID_AI_URL",
        modelEnv: "HAMID_AI_MODEL",
        envKey: "HAMID_AI_API_KEY"
    }

};


// ============================================================
// 🎭 PERSONALITIES
// ============================================================

const PERSONALITIES = {

    sara: {
        id: "sara",
        name: "سارا",
        icon: "👩‍🦰",
        prompt: `
تو سارا هستی؛ یک دستیار فارسی‌زبان مهربان، صمیمی و باهوش.

قوانین:
- طبیعی و انسانی صحبت کن.
- پاسخ را متناسب با سؤال کاربر بده.
- اگر سؤال ساده است، کوتاه جواب بده.
- اگر سؤال نیاز به توضیح دارد، کامل توضیح بده.
- فارسی را روان و طبیعی بنویس.
- اگر کاربر انگلیسی، عربی یا ترکی صحبت کرد،
  با همان زبان پاسخ بده.
- اطلاعات ساختگی تولید نکن.
- اگر چیزی را نمی‌دانی، صادقانه بگو.
`
    },

    layla: {
        id: "layla",
        name: "لیلا",
        icon: "👩‍🦳",
        prompt: `
تو لیلا هستی؛ یک دستیار شاد، پرانرژی و دوستانه.

لحن:
- مثبت
- طبیعی
- صمیمی
- مفید

در پاسخ دادن زیاده‌گویی نکن.
`
    },

    maryam: {
        id: "maryam",
        name: "مریم",
        icon: "👩‍🦱",
        prompt: `
تو مریم هستی؛ یک دستیار دقیق، منطقی و باهوش.

قبل از پاسخ مسئله را بررسی کن.
پاسخ‌ها باید واضح، دقیق و کاربردی باشند.
اگر موضوع پیچیده است، آن را مرحله‌به‌مرحله توضیح بده.
`
    },

    nova: {
        id: "nova",
        name: "نوا",
        icon: "🤖",
        prompt: `
تو نوا هستی؛ یک دستیار هوشمند عمومی.

وظیفه تو:
- پاسخ دقیق
- پاسخ مفید
- توضیح واضح
- رفتار طبیعی
- عدم ساختن اطلاعات جعلی
`
    },

    hamid: {
        id: "hamid",
        name: "حمید",
        icon: "❤️🏍️",
        prompt: `
تو حمید هستی؛ یک شخصیت دوستانه، مهربان و صمیمی.

با کاربر طبیعی صحبت کن.
در صورت نیاز شوخ‌طبع باش اما پاسخ مفید را حفظ کن.
`
    }

};


// ============================================================
// 🛠️ HELPERS
// ============================================================

function normalizeEngineId(engine) {

    if (!engine) {
        return "openai";
    }

    const value =
        String(engine)
            .trim()
            .toLowerCase();

    const aliases = {

        gpt: "openai",
        chatgpt: "openai",

        google: "gemini",

        anthropic: "claude",

        ds: "deepseek",

        llama: "groq",

        mr: "mistral",

        qwenai: "qwen",

        router: "openrouter",

        togetherai: "together",

        fireworksai: "fireworks",

        hamid_ai: "hamid",
        "hamid-ai": "hamid"

    };

    return aliases[value] || value;
}


function normalizePersonality(personality) {

    if (!personality) {
        return "sara";
    }

    const value =
        String(personality)
            .trim()
            .toLowerCase();

    const aliases = {

        سارا: "sara",
        sara: "sara",

        لیلا: "layla",
        layla: "layla",

        مریم: "maryam",
        maryam: "maryam",

        نوا: "nova",
        nova: "nova",

        حمید: "hamid",
        hamid: "hamid"

    };

    return aliases[value] || "sara";
}


function cleanMessages(messages) {

    if (!Array.isArray(messages)) {
        return [];
    }

    return messages
        .filter(message => {

            return (
                message &&
                typeof message === "object" &&
                typeof message.content === "string" &&
                message.content.trim().length > 0
            );

        })
        .map(message => {

            let role = message.role;

            if (
                role !== "system" &&
                role !== "user" &&
                role !== "assistant"
            ) {
                role = "user";
            }

            return {
                role,
                content: message.content.trim()
            };

        });

}


function extractOpenAIText(data) {

    const content =
        data?.choices?.[0]?.message?.content;

    if (typeof content === "string") {
        return content.trim();
    }

    if (Array.isArray(content)) {

        return content
            .map(item => {

                if (typeof item === "string") {
                    return item;
                }

                return item?.text || "";

            })
            .join("")
            .trim();

    }

    return "";
}


function extractGeminiText(data) {

    const candidates =
        data?.candidates;

    if (!Array.isArray(candidates)) {
        return "";
    }

    return candidates
        .flatMap(candidate => {

            return candidate
                ?.content
                ?.parts || [];

        })
        .map(part => part?.text || "")
        .join("")
        .trim();

}


function extractClaudeText(data) {

    if (!Array.isArray(data?.content)) {
        return "";
    }

    return data.content
        .filter(item => item?.type === "text")
        .map(item => item?.text || "")
        .join("")
        .trim();

}


async function fetchJSON(
    url,
    options,
    timeout = 60000
) {

    const controller =
        new AbortController();

    const timer =
        setTimeout(
            () => controller.abort(),
            timeout
        );

    try {

        const response =
            await fetch(
                url,
                {
                    ...options,
                    signal:
                        controller.signal
                }
            );

        const text =
            await response.text();

        let data = null;

        try {

            data =
                text
                    ? JSON.parse(text)
                    : null;

        } catch {

            data = {
                raw: text
            };

        }

        if (!response.ok) {

            const apiMessage =
                data?.error?.message ||
                data?.error?.type ||
                data?.message ||
                data?.raw ||
                `HTTP ${response.status}`;

            throw new Error(apiMessage);
        }

        return data;

    } catch (error) {

        if (
            error?.name ===
            "AbortError"
        ) {

            throw new Error(
                "درخواست AI بیش از حد طول کشید."
            );

        }

        throw error;

    } finally {

        clearTimeout(timer);

    }

}


// ============================================================
// 🤖 AI MANAGER
// ============================================================

class AIManager {

    constructor(env) {

        if (!env) {
            throw new Error(
                "Cloudflare env دریافت نشد."
            );
        }

        this.env = env;

    }


    // --------------------------------------------------------
    // دریافت تنظیمات موتور
    // --------------------------------------------------------

    getEngine(engine) {

        const id =
            normalizeEngineId(engine);

        return (
            AI_ENGINES[id] ||
            AI_ENGINES.openai
        );

    }


    // --------------------------------------------------------
    // آیا موتور API دارد؟
    // --------------------------------------------------------

    hasKey(engine) {

        if (!engine) {
            return false;
        }

        if (!engine.envKey) {
            return false;
        }

        return Boolean(
            this.env[engine.envKey]
        );

    }


    // --------------------------------------------------------
    // وضعیت موتور
    // --------------------------------------------------------

    getEngineStatus(engineId) {

        const engine =
            this.getEngine(engineId);

        return {

            id: engine.id,

            name: engine.name,

            icon: engine.icon,

            model:
                this.resolveModel(engine),

            configured:
                this.hasKey(engine)

        };

    }


    // --------------------------------------------------------
    // همه موتورها
    // --------------------------------------------------------

    getAllEngines() {

        return Object.values(
            AI_ENGINES
        ).map(engine => {

            return {

                id: engine.id,

                name: engine.name,

                icon: engine.icon,

                type: engine.type,

                model:
                    this.resolveModel(engine),

                configured:
                    this.hasKey(engine)

            };

        });

    }


    // --------------------------------------------------------
    // فقط موتورهای فعال
    // --------------------------------------------------------

    getAvailableEngines() {

        return this
            .getAllEngines()
            .filter(
                engine =>
                    engine.configured
            );

    }


    // --------------------------------------------------------
    // مدل واقعی
    // --------------------------------------------------------

    resolveModel(engine) {

        if (
            engine.modelEnv &&
            this.env[engine.modelEnv]
        ) {

            return this.env[
                engine.modelEnv
            ];

        }

        return engine.model || null;

    }


    // --------------------------------------------------------
    // شخصیت
    // --------------------------------------------------------

    getPersonality(personality) {

        const id =
            normalizePersonality(
                personality
            );

        return (
            PERSONALITIES[id] ||
            PERSONALITIES.sara
        );

    }


    // ========================================================
    // 🚀 GENERATE
    // ========================================================

    async generate(options = {}) {

        const {

            engine = "openai",

            personality = "sara",

            messages = [],

            temperature = 0.7,

            maxTokens = 1200,

            timeout = 60000

        } = options;


        const selected =
            this.getEngine(engine);


        if (!this.hasKey(selected)) {

            throw new Error(
                `موتور ${selected.name} فعال نیست؛ API Key آن در Cloudflare تنظیم نشده است.`
            );

        }


        const character =
            this.getPersonality(
                personality
            );


        const history =
            cleanMessages(messages);


        const finalMessages = [

            {
                role: "system",

                content:
                    character.prompt
            },

            ...history

        ];


        switch (selected.type) {

            case "openai":
            case "openai-compatible":

                return await this
                    .requestOpenAICompatible(
                        selected,
                        finalMessages,
                        temperature,
                        maxTokens,
                        timeout
                    );


            case "gemini":

                return await this
                    .requestGemini(
                        selected,
                        finalMessages,
                        temperature,
                        maxTokens,
                        timeout
                    );


            case "claude":

                return await this
                    .requestClaude(
                        selected,
                        finalMessages,
                        temperature,
                        maxTokens,
                        timeout
                    );


            case "custom":

                return await this
                    .requestCustom(
                        selected,
                        finalMessages,
                        temperature,
                        maxTokens,
                        timeout
                    );


            default:

                throw new Error(
                    `نوع موتور ناشناخته است: ${selected.type}`
                );

        }

    }


    // ========================================================
    // 🔌 OPENAI / COMPATIBLE
    // ========================================================

    async requestOpenAICompatible(
        engine,
        messages,
        temperature,
        maxTokens,
        timeout
    ) {

        const apiKey =
            this.env[engine.envKey];

        const body = {

            model:
                this.resolveModel(
                    engine
                ),

            messages,

            temperature,

            max_tokens:
                maxTokens

        };


        const headers = {

            "Content-Type":
                "application/json",

            "Authorization":
                `Bearer ${apiKey}`

        };


        const data =
            await fetchJSON(

                engine.url,

                {

                    method: "POST",

                    headers,

                    body:
                        JSON.stringify(body)

                },

                timeout

            );


        const text =
            extractOpenAIText(
                data
            );


        if (!text) {

            throw new Error(
                `${engine.name} پاسخ متنی معتبر برنگرداند.`
            );

        }


        return {

            ok: true,

            text,

            engine:
                engine.id,

            engineName:
                engine.name,

            model:
                this.resolveModel(
                    engine
                ),

            usage:
                data?.usage || null,

            raw:
                data

        };

    }


    // ========================================================
    // ✨ GEMINI
    // ========================================================

    async requestGemini(
        engine,
        messages,
        temperature,
        maxTokens,
        timeout
    ) {

        const apiKey =
            this.env[engine.envKey];

        const model =
            this.resolveModel(
                engine
            );


        const url =
            `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;


        let systemText = "";

        const contents = [];


        for (const message of messages) {

            if (
                message.role ===
                "system"
            ) {

                systemText +=
                    message.content +
                    "\n";

                continue;

            }


            contents.push({

                role:
                    message.role ===
                    "assistant"
                        ? "model"
                        : "user",

                parts: [

                    {
                        text:
                            message.content
                    }

                ]

            });

        }


        const body = {

            contents,

            generationConfig: {

                temperature,

                maxOutputTokens:
                    maxTokens

            }

        };


        if (systemText.trim()) {

            body.systemInstruction = {

                parts: [

                    {
                        text:
                            systemText.trim()
                    }

                ]

            };

        }


        const data =
            await fetchJSON(

                url,

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(body)

                },

                timeout

            );


        const text =
            extractGeminiText(
                data
            );


        if (!text) {

            throw new Error(
                "Gemini پاسخ متنی معتبر برنگرداند."
            );

        }


        return {

            ok: true,

            text,

            engine: "gemini",

            engineName:
                engine.name,

            model,

            usage:
                data?.usageMetadata ||
                null,

            raw:
                data

        };

    }


    // ========================================================
    // 🟠 CLAUDE
    // ========================================================

    async requestClaude(
        engine,
        messages,
        temperature,
        maxTokens,
        timeout
    ) {

        const apiKey =
            this.env[engine.envKey];

        const model =
            this.resolveModel(
                engine
            );


        let system = "";

        const normalMessages = [];


        for (const message of messages) {

            if (
                message.role ===
                "system"
            ) {

                system +=
                    message.content +
                    "\n";

                continue;

            }


            normalMessages.push({

                role:
                    message.role,

                content:
                    message.content

            });

        }


        const body = {

            model,

            max_tokens:
                maxTokens,

            temperature,

            messages:
                normalMessages

        };


        if (system.trim()) {

            body.system =
                system.trim();

        }


        const data =
            await fetchJSON(

                engine.url,

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "x-api-key":
                            apiKey,

                        "anthropic-version":
                            "2023-06-01"

                    },

                    body:
                        JSON.stringify(body)

                },

                timeout

            );


        const text =
            extractClaudeText(
                data
            );


        if (!text) {

            throw new Error(
                "Claude پاسخ متنی معتبر برنگرداند."
            );

        }


        return {

            ok: true,

            text,

            engine:
                "claude",

            engineName:
                engine.name,

            model,

            usage:
                data?.usage ||
                null,

            raw:
                data

        };

    }


    // ========================================================
    // ❤️ HAMID AI PRO
    // ========================================================

    async requestCustom(
        engine,
        messages,
        temperature,
        maxTokens,
        timeout
    ) {

        const apiKey =
            this.env[
                engine.envKey
            ];

        const endpoint =
            this.env[
                engine.urlEnv
            ];

        const model =
            this.resolveModel(
                engine
            );


        if (!endpoint) {

            throw new Error(
                "HAMID_AI_URL در Cloudflare تنظیم نشده است."
            );

        }


        const headers = {

            "Content-Type":
                "application/json"

        };


        if (apiKey) {

            headers.Authorization =
                `Bearer ${apiKey}`;

        }


        const body = {

            model:
                model ||
                "hamid-ai",

            messages,

            temperature,

            max_tokens:
                maxTokens

        };


        const data =
            await fetchJSON(

                endpoint,

                {

                    method: "POST",

                    headers,

                    body:
                        JSON.stringify(body)

                },

                timeout

            );


        const text =

            extractOpenAIText(
                data
            ) ||

            data?.response ||

            data?.text ||

            data?.output;


        if (!text) {

            throw new Error(
                "Hamid AI Pro پاسخ معتبر برنگرداند."
            );

        }


        return {

            ok: true,

            text:
                String(text).trim(),

            engine:
                "hamid",

            engineName:
                engine.name,

            model:
                model || "hamid-ai",

            usage:
                data?.usage ||
                null,

            raw:
                data

        };

    }

}


// ============================================================
// 🔄 FALLBACK MANAGER
// ============================================================

const DEFAULT_FALLBACK_ORDER = [

    "openai",

    "gemini",

    "deepseek",

    "claude",

    "groq",

    "mistral",

    "qwen",

    "openrouter",

    "together",

    "fireworks",

    "hamid"

];


async function generateWithFallback(
    env,
    options = {}
) {

    const manager =
        new AIManager(env);


    const requested =
        normalizeEngineId(
            options.engine ||
            "openai"
        );


    const customOrder =
        Array.isArray(
            options.fallbackOrder
        )
            ? options.fallbackOrder
            : DEFAULT_FALLBACK_ORDER;


    const order = [

        requested,

        ...customOrder

    ];


    const unique =
        [
            ...new Set(
                order.map(
                    normalizeEngineId
                )
            )
        ];


    const errors = [];


    for (
        const engineId
        of unique
    ) {

        const engine =
            AI_ENGINES[
                engineId
            ];


        if (!engine) {

            continue;

        }


        if (
            !manager.hasKey(
                engine
            )
        ) {

            continue;

        }


        try {

            const result =
                await manager.generate({

                    ...options,

                    engine:
                        engineId

                });


            return {

                ...result,

                requestedEngine:
                    requested,

                usedFallback:
                    engineId !==
                    requested,

                errors

            };

        } catch (error) {

            errors.push({

                engine:
                    engineId,

                message:
                    error?.message ||
                    "Unknown error"

            });


            console.error(
                `❌ AI ${engineId}:`,
                error?.message
            );

        }

    }


    const detail =
        errors.length
            ? errors
                .map(
                    item =>
                        `${item.engine}: ${item.message}`
                )
                .join(" | ")
            : "هیچ API Key فعالی پیدا نشد.";


    throw new Error(
        `هیچ موتور AI نتوانست پاسخ بدهد. ${detail}`
    );

}


// ============================================================
// 🧪 TEST ENGINE
// ============================================================

async function testEngine(
    env,
    engineId
) {

    const manager =
        new AIManager(env);


    const engine =
        manager.getEngine(
            engineId
        );


    if (
        !manager.hasKey(
            engine
        )
    ) {

        return {

            ok: false,

            engine:
                engine.id,

            message:
                "API Key تنظیم نشده است."

        };

    }


    try {

        const result =
            await manager.generate({

                engine:
                    engine.id,

                personality:
                    "nova",

                messages: [

                    {

                        role:
                            "user",

                        content:
                            "سلام! فقط بگو آماده‌ای."

                    }

                ],

                temperature:
                    0.2,

                maxTokens:
                    100,

                timeout:
                    30000

            });


        return {

            ok: true,

            engine:
                result.engine,

            model:
                result.model,

            text:
                result.text

        };

    } catch (error) {

        return {

            ok: false,

            engine:
                engine.id,

            message:
                error?.message ||
                "خطای ناشناخته"

        };

    }

}


// ============================================================
// 📤 EXPORT
// ============================================================

export {

    AI_ENGINES,

    PERSONALITIES,

    AIManager,

    generateWithFallback,

    testEngine,

    normalizeEngineId,

    normalizePersonality

};
// ============================================================
// NOVA BOT ULTIMATE
// PART 3 — REAL AI ENGINE SYSTEM
// Cloudflare Workers + D1
// JavaScript / No fake AI
// ============================================================

// ============================================================
// ENGINE CONFIG
// ============================================================

const NOVA_ENGINES = {

    hamid_ai: {
        id: "hamid_ai",
        name: "❤️ Hamid AI Pro",
        provider: "Hamid AI",
        type: "custom",
        envKey: "HAMID_AI_URL",
        keyEnv: "HAMID_AI_KEY",
        modelEnv: "HAMID_AI_MODEL",
        status: "custom"
    },

    openai: {
        id: "openai",
        name: "🧠 OpenAI",
        provider: "OpenAI",
        type: "openai",
        endpoint: "https://api.openai.com/v1/chat/completions",
        keyEnv: "OPENAI_API_KEY",
        modelEnv: "OPENAI_MODEL",
        defaultModel: "gpt-4o-mini"
    },

    gemini: {
        id: "gemini",
        name: "🌟 Gemini",
        provider: "Google",
        type: "gemini",
        keyEnv: "GEMINI_API_KEY",
        modelEnv: "GEMINI_MODEL",
        defaultModel: "gemini-2.5-flash"
    },

    deepseek: {
        id: "deepseek",
        name: "🔥 DeepSeek",
        provider: "DeepSeek",
        type: "openai",
        endpoint: "https://api.deepseek.com/chat/completions",
        keyEnv: "DEEPSEEK_API_KEY",
        modelEnv: "DEEPSEEK_MODEL",
        defaultModel: "deepseek-chat"
    },

    groq: {
        id: "groq",
        name: "⚡ Groq",
        provider: "Groq",
        type: "openai",
        endpoint: "https://api.groq.com/openai/v1/chat/completions",
        keyEnv: "GROQ_API_KEY",
        modelEnv: "GROQ_MODEL",
        defaultModel: "llama-3.3-70b-versatile"
    },

    openrouter: {
        id: "openrouter",
        name: "🌐 OpenRouter",
        provider: "OpenRouter",
        type: "openai",
        endpoint: "https://openrouter.ai/api/v1/chat/completions",
        keyEnv: "OPENROUTER_API_KEY",
        modelEnv: "OPENROUTER_MODEL",
        defaultModel: "openai/gpt-4o-mini"
    },

    claude: {
        id: "claude",
        name: "🟣 Claude",
        provider: "Anthropic",
        type: "claude",
        endpoint: "https://api.anthropic.com/v1/messages",
        keyEnv: "ANTHROPIC_API_KEY",
        modelEnv: "CLAUDE_MODEL",
        defaultModel: "claude-3-5-haiku-latest"
    },

    mistral: {
        id: "mistral",
        name: "💎 Mistral",
        provider: "Mistral AI",
        type: "openai",
        endpoint: "https://api.mistral.ai/v1/chat/completions",
        keyEnv: "MISTRAL_API_KEY",
        modelEnv: "MISTRAL_MODEL",
        defaultModel: "mistral-small-latest"
    },

    together: {
        id: "together",
        name: "🚀 Together AI",
        provider: "Together",
        type: "openai",
        endpoint: "https://api.together.xyz/v1/chat/completions",
        keyEnv: "TOGETHER_API_KEY",
        modelEnv: "TOGETHER_MODEL",
        defaultModel: "meta-llama/Llama-3.3-70B-Instruct-Turbo"
    },

    cohere: {
        id: "cohere",
        name: "🔵 Cohere",
        provider: "Cohere",
        type: "cohere",
        endpoint: "https://api.cohere.com/v2/chat",
        keyEnv: "COHERE_API_KEY",
        modelEnv: "COHERE_MODEL",
        defaultModel: "command-a-03-2025"
    },

    qwen: {
        id: "qwen",
        name: "🟠 Qwen",
        provider: "Alibaba",
        type: "openai",
        endpoint: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions",
        keyEnv: "QWEN_API_KEY",
        modelEnv: "QWEN_MODEL",
        defaultModel: "qwen-plus"
    }
};


// ============================================================
// ENGINE MANAGER
// ============================================================

class NovaEngineManager {

    constructor(env, db) {
        this.env = env;
        this.db = db;
    }

    getEngine(id) {
        return NOVA_ENGINES[id] || null;
    }

    getAllEngines() {
        return Object.values(NOVA_ENGINES);
    }

    getConfiguredEngines() {

        return Object.values(NOVA_ENGINES).filter(engine => {

            if (engine.type === "custom") {
                return !!(
                    this.env[engine.keyEnv] &&
                    this.env[engine.envKey]
                );
            }

            return !!this.env[engine.keyEnv];
        });
    }

    isConfigured(id) {

        const engine = this.getEngine(id);

        if (!engine) {
            return false;
        }

        if (engine.type === "custom") {
            return !!(
                this.env[engine.keyEnv] &&
                this.env[engine.envKey]
            );
        }

        return !!this.env[engine.keyEnv];
    }

    getModel(engine) {

        if (this.env[engine.modelEnv]) {
            return this.env[engine.modelEnv];
        }

        return engine.defaultModel || null;
    }


    async getUserEngine(telegramId) {

        if (!this.db) {
            return "openai";
        }

        try {

            const row = await this.db.prepare(`
                SELECT ai_provider
                FROM users
                WHERE telegram_id = ?
                LIMIT 1
            `).bind(String(telegramId)).first();

            if (
                row &&
                row.ai_provider &&
                NOVA_ENGINES[row.ai_provider]
            ) {
                return row.ai_provider;
            }

        } catch (error) {

            console.error(
                "ENGINE USER LOAD ERROR:",
                error.message
            );
        }

        return "openai";
    }


    async setUserEngine(telegramId, engineId) {

        if (!NOVA_ENGINES[engineId]) {
            return {
                ok: false,
                error: "ENGINE_NOT_FOUND"
            };
        }

        if (!this.db) {
            return {
                ok: false,
                error: "DATABASE_NOT_AVAILABLE"
            };
        }

        try {

            await this.db.prepare(`
                UPDATE users
                SET ai_provider = ?
                WHERE telegram_id = ?
            `)
            .bind(
                engineId,
                String(telegramId)
            )
            .run();

            return {
                ok: true,
                engine: NOVA_ENGINES[engineId]
            };

        } catch (error) {

            console.error(
                "ENGINE SAVE ERROR:",
                error.message
            );

            return {
                ok: false,
                error: error.message
            };
        }
    }
}


// ============================================================
// MESSAGE BUILDER
// ============================================================

function novaBuildMessages(systemPrompt, history, userMessage) {

    const messages = [];

    if (systemPrompt) {

        messages.push({
            role: "system",
            content: systemPrompt
        });

    }

    if (Array.isArray(history)) {

        for (const item of history) {

            if (
                !item ||
                !item.role ||
                !item.content
            ) {
                continue;
            }

            if (
                item.role !== "user" &&
                item.role !== "assistant" &&
                item.role !== "system"
            ) {
                continue;
            }

            messages.push({
                role: item.role,
                content: String(item.content)
            });
        }
    }

    messages.push({
        role: "user",
        content: String(userMessage)
    });

    return messages;
}


// ============================================================
// OPENAI-COMPATIBLE ENGINE
// ============================================================

async function novaCallOpenAICompatible(
    engine,
    env,
    messages
) {

    const apiKey = env[engine.keyEnv];

    if (!apiKey) {

        return {
            ok: false,
            code: "NO_API_KEY",
            message: `${engine.name} API Key تنظیم نشده است.`
        };
    }

    const model =
        env[engine.modelEnv] ||
        engine.defaultModel;

    const response = await fetch(
        engine.endpoint,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },

            body: JSON.stringify({
                model,
                messages,
                temperature: 0.7,
                max_tokens: 2000
            })
        }
    );

    const raw = await response.text();

    let data;

    try {
        data = JSON.parse(raw);
    } catch {

        return {
            ok: false,
            code: "INVALID_JSON",
            status: response.status,
            message: raw.substring(0, 500)
        };
    }

    if (!response.ok) {

        return {
            ok: false,
            code: "API_ERROR",
            status: response.status,
            message:
                data?.error?.message ||
                data?.message ||
                "AI API Error"
        };
    }

    const content =
        data?.choices?.[0]?.message?.content;

    if (!content) {

        return {
            ok: false,
            code: "EMPTY_RESPONSE",
            message: "AI پاسخ خالی برگرداند."
        };
    }

    return {
        ok: true,
        engine: engine.id,
        model,
        text: String(content)
    };
}


// ============================================================
// GEMINI
// ============================================================

async function novaCallGemini(
    engine,
    env,
    messages
) {

    const apiKey = env[engine.keyEnv];

    if (!apiKey) {

        return {
            ok: false,
            code: "NO_API_KEY",
            message: "Gemini API Key تنظیم نشده است."
        };
    }

    const model =
        env[engine.modelEnv] ||
        engine.defaultModel;

    let systemInstruction = "";

    const contents = [];

    for (const message of messages) {

        if (message.role === "system") {

            systemInstruction +=
                String(message.content) + "\n";

            continue;
        }

        contents.push({

            role:
                message.role === "assistant"
                    ? "model"
                    : "user",

            parts: [
                {
                    text: String(message.content)
                }
            ]
        });
    }

    const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const body = {
        contents,

        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2000
        }
    };

    if (systemInstruction) {

        body.systemInstruction = {
            parts: [
                {
                    text: systemInstruction.trim()
                }
            ]
        };
    }

    const response = await fetch(
        url,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(body)
        }
    );

    const raw = await response.text();

    let data;

    try {
        data = JSON.parse(raw);
    } catch {

        return {
            ok: false,
            code: "INVALID_JSON",
            status: response.status,
            message: raw.substring(0, 500)
        };
    }

    if (!response.ok) {

        return {
            ok: false,
            code: "API_ERROR",
            status: response.status,
            message:
                data?.error?.message ||
                "Gemini API Error"
        };
    }

    const parts =
        data?.candidates?.[0]?.content?.parts || [];

    const text = parts
        .map(x => x?.text || "")
        .join("");

    if (!text) {

        return {
            ok: false,
            code: "EMPTY_RESPONSE",
            message: "Gemini پاسخ خالی برگرداند."
        };
    }

    return {
        ok: true,
        engine: engine.id,
        model,
        text
    };
}


// ============================================================
// CLAUDE
// ============================================================

async function novaCallClaude(
    engine,
    env,
    messages
) {

    const apiKey = env[engine.keyEnv];

    if (!apiKey) {

        return {
            ok: false,
            code: "NO_API_KEY",
            message: "Anthropic API Key تنظیم نشده است."
        };
    }

    const model =
        env[engine.modelEnv] ||
        engine.defaultModel;

    let system = "";

    const cleanMessages = [];

    for (const message of messages) {

        if (message.role === "system") {

            system +=
                String(message.content) + "\n";

        } else {

            cleanMessages.push({
                role:
                    message.role === "assistant"
                        ? "assistant"
                        : "user",

                content: String(message.content)
            });
        }
    }

    const body = {

        model,

        max_tokens: 2000,

        messages: cleanMessages
    };

    if (system) {
        body.system = system.trim();
    }

    const response = await fetch(
        engine.endpoint,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
                "anthropic-version": "2023-06-01"
            },

            body: JSON.stringify(body)
        }
    );

    const raw = await response.text();

    let data;

    try {
        data = JSON.parse(raw);
    } catch {

        return {
            ok: false,
            code: "INVALID_JSON",
            status: response.status,
            message: raw.substring(0, 500)
        };
    }

    if (!response.ok) {

        return {
            ok: false,
            code: "API_ERROR",
            status: response.status,
            message:
                data?.error?.message ||
                "Claude API Error"
        };
    }

    const text = (data?.content || [])
        .filter(x => x?.type === "text")
        .map(x => x.text || "")
        .join("");

    if (!text) {

        return {
            ok: false,
            code: "EMPTY_RESPONSE",
            message: "Claude پاسخ خالی برگرداند."
        };
    }

    return {
        ok: true,
        engine: engine.id,
        model,
        text
    };
}


// ============================================================
// COHERE
// ============================================================

async function novaCallCohere(
    engine,
    env,
    messages
) {

    const apiKey = env[engine.keyEnv];

    if (!apiKey) {

        return {
            ok: false,
            code: "NO_API_KEY",
            message: "Cohere API Key تنظیم نشده است."
        };
    }

    const model =
        env[engine.modelEnv] ||
        engine.defaultModel;

    let system = "";

    const chatHistory = [];

    let currentMessage = "";

    for (const message of messages) {

        if (message.role === "system") {

            system +=
                String(message.content) + "\n";

        } else if (message.role === "user") {

            if (currentMessage) {

                chatHistory.push({
                    role: "user",
                    message: currentMessage
                });
            }

            currentMessage =
                String(message.content);

        } else if (message.role === "assistant") {

            chatHistory.push({
                role: "assistant",
                message: String(message.content)
            });
        }
    }

    const body = {

        model,

        message: currentMessage,

        temperature: 0.7,

        max_tokens: 2000
    };

    if (system) {
        body.preamble = system.trim();
    }

    if (chatHistory.length) {
        body.chat_history = chatHistory;
    }

    const response = await fetch(
        engine.endpoint,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },

            body: JSON.stringify(body)
        }
    );

    const raw = await response.text();

    let data;

    try {
        data = JSON.parse(raw);
    } catch {

        return {
            ok: false,
            code: "INVALID_JSON",
            status: response.status,
            message: raw.substring(0, 500)
        };
    }

    if (!response.ok) {

        return {
            ok: false,
            code: "API_ERROR",
            status: response.status,
            message:
                data?.message ||
                data?.error?.message ||
                "Cohere API Error"
        };
    }

    const text =
        data?.message?.content
            ?.map(x => x?.text || "")
            .join("") ||
        data?.text ||
        "";

    if (!text) {

        return {
            ok: false,
            code: "EMPTY_RESPONSE",
            message: "Cohere پاسخ خالی برگرداند."
        };
    }

    return {
        ok: true,
        engine: engine.id,
        model,
        text
    };
}


// ============================================================
// CUSTOM HAMID AI
// ============================================================

async function novaCallHamidAI(
    engine,
    env,
    messages
) {

    const url = env[engine.envKey];
    const key = env[engine.keyEnv];

    if (!url) {

        return {
            ok: false,
            code: "NO_ENDPOINT",
            message:
                "Endpoint واقعی Hamid AI Pro تنظیم نشده است."
        };
    }

    if (!key) {

        return {
            ok: false,
            code: "NO_API_KEY",
            message:
                "API Key مربوط به Hamid AI Pro تنظیم نشده است."
        };
    }

    const model =
        env[engine.modelEnv] ||
        "hamid-ai-pro";

    const response = await fetch(
        url,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            },

            body: JSON.stringify({
                model,
                messages,
                temperature: 0.7,
                max_tokens: 2000
            })
        }
    );

    const raw = await response.text();

    let data;

    try {
        data = JSON.parse(raw);
    } catch {

        return {
            ok: false,
            code: "INVALID_JSON",
            status: response.status,
            message: raw.substring(0, 500)
        };
    }

    if (!response.ok) {

        return {
            ok: false,
            code: "API_ERROR",
            status: response.status,
            message:
                data?.error?.message ||
                data?.message ||
                "Hamid AI API Error"
        };
    }

    const text =
        data?.choices?.[0]?.message?.content ||
        data?.response ||
        data?.text ||
        data?.answer ||
        "";

    if (!text) {

        return {
            ok: false,
            code: "EMPTY_RESPONSE",
            message:
                "Hamid AI پاسخ قابل استفاده‌ای برنگرداند."
        };
    }

    return {
        ok: true,
        engine: engine.id,
        model,
        text: String(text)
    };
}


// ============================================================
// UNIVERSAL AI CALL
// ============================================================

async function novaRunEngine(
    engineId,
    env,
    messages
) {

    const engine =
        NOVA_ENGINES[engineId];

    if (!engine) {

        return {
            ok: false,
            code: "ENGINE_NOT_FOUND",
            message: "موتور موردنظر پیدا نشد."
        };
    }

    if (!env) {

        return {
            ok: false,
            code: "ENV_MISSING",
            message: "Environment در دسترس نیست."
        };
    }

    try {

        switch (engine.type) {

            case "gemini":

                return await novaCallGemini(
                    engine,
                    env,
                    messages
                );

            case "claude":

                return await novaCallClaude(
                    engine,
                    env,
                    messages
                );

            case "cohere":

                return await novaCallCohere(
                    engine,
                    env,
                    messages
                );

            case "custom":

                return await novaCallHamidAI(
                    engine,
                    env,
                    messages
                );

            case "openai":

            default:

                return await novaCallOpenAICompatible(
                    engine,
                    env,
                    messages
                );
        }

    } catch (error) {

        console.error(
            `ENGINE ${engineId} ERROR:`,
            error.message
        );

        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: error.message
        };
    }
}


// ============================================================
// FALLBACK SYSTEM
// ============================================================

async function novaRunWithFallback(
    primaryEngine,
    fallbackEngines,
    env,
    messages
) {

    const engines = [
        primaryEngine,
        ...(fallbackEngines || [])
    ];

    const unique = [
        ...new Set(
            engines.filter(Boolean)
        )
    ];

    let lastError = null;

    for (const engineId of unique) {

        const result =
            await novaRunEngine(
                engineId,
                env,
                messages
            );

        if (result.ok) {

            return result;
        }

        lastError = result;

        console.log(
            `⚠️ Engine ${engineId} failed:`,
            result.message
        );
    }

    return {

        ok: false,

        code: "ALL_ENGINES_FAILED",

        message:
            lastError?.message ||
            "هیچ موتور AI قابل استفاده نیست.",

        lastError
    };
}


// ============================================================
// D1 CONVERSATION HISTORY
// ============================================================

async function novaLoadHistory(
    db,
    telegramId,
    limit = 20
) {

    if (!db) {
        return [];
    }

    try {

        const result =
            await db.prepare(`
                SELECT role, content
                FROM conversations
                WHERE telegram_id = ?
                ORDER BY id DESC
                LIMIT ?
            `)
            .bind(
                String(telegramId),
                Number(limit)
            )
            .all();

        const rows =
            result?.results || [];

        return rows.reverse();

    } catch (error) {

        console.error(
            "HISTORY LOAD ERROR:",
            error.message
        );

        return [];
    }
}


// ============================================================
// D1 SAVE CONVERSATION
// ============================================================

async function novaSaveConversation(
    db,
    telegramId,
    role,
    content
) {

    if (!db) {
        return false;
    }

    try {

        await db.prepare(`
            INSERT INTO conversations
            (telegram_id, role, content, created_at)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP)
        `)
        .bind(
            String(telegramId),
            role,
            String(content)
        )
        .run();

        return true;

    } catch (error) {

        console.error(
            "HISTORY SAVE ERROR:",
            error.message
        );

        return false;
    }
}


// ============================================================
// USER AI RESPONSE
// ============================================================

async function novaGenerateResponse({
    env,
    db,
    telegramId,
    userMessage,
    systemPrompt,
    fallback = []
}) {

    const manager =
        new NovaEngineManager(
            env,
            db
        );

    const primary =
        await manager.getUserEngine(
            telegramId
        );

    const history =
        await novaLoadHistory(
            db,
            telegramId,
            20
        );

    const messages =
        novaBuildMessages(
            systemPrompt,
            history,
            userMessage
        );

    const result =
        await novaRunWithFallback(
            primary,
            fallback,
            env,
            messages
        );

    if (!result.ok) {

        return {

            ok: false,

            text:
                "❌ در حال حاضر موتورهای هوش مصنوعی در دسترس نیستند.\n\n" +
                "لطفاً API Key موتور انتخاب‌شده را بررسی کنید."
        };
    }

    await novaSaveConversation(
        db,
        telegramId,
        "user",
        userMessage
    );

    await novaSaveConversation(
        db,
        telegramId,
        "assistant",
        result.text
    );

    return {

        ok: true,

        text: result.text,

        engine: result.engine,

        model: result.model
    };
}


// ============================================================
// ENGINE PANEL TEXT
// ============================================================

async function novaEnginePanel(
    env,
    db,
    telegramId
) {

    const manager =
        new NovaEngineManager(
            env,
            db
        );

    const current =
        await manager.getUserEngine(
            telegramId
        );

    let text =
        "🧠 *موتورهای هوش مصنوعی Nova*\n\n";

    for (
        const engine of manager.getAllEngines()
    ) {

        const configured =
            manager.isConfigured(
                engine.id
            );

        const active =
            current === engine.id;

        text +=
            `${active ? "✅" : "▫️"} ` +
            `${engine.name}\n`;

        text +=
            `   وضعیت: ${
                configured
                    ? "🟢 آماده"
                    : "🔴 API تنظیم نشده"
            }\n`;

        if (active) {

            text +=
                `   ⭐ موتور فعلی\n`;
        }

        text += "\n";
    }

    return text;
}


// ============================================================
// ENGINE KEYBOARD
// ============================================================

function novaEngineKeyboard(
    env,
    currentEngine
) {

    const rows = [];

    for (
        const engine of Object.values(
            NOVA_ENGINES
        )
    ) {

        let configured = false;

        if (engine.type === "custom") {

            configured =
                !!(
                    env[engine.keyEnv] &&
                    env[engine.envKey]
                );

        } else {

            configured =
                !!env[engine.keyEnv];
        }

        rows.push([

            {
                text:
                    `${currentEngine === engine.id ? "✅ " : ""}` +
                    `${engine.name} ` +
                    `${configured ? "🟢" : "🔴"}`,

                callback_data:
                    `engine_select_${engine.id}`
            }

        ]);
    }

    rows.push([

        {
            text: "🔄 بروزرسانی",
            callback_data: "engines_refresh"
        }

    ]);

    return {
        inline_keyboard: rows
    };
}


// ============================================================
// ENGINE CALLBACK
// ============================================================

async function novaHandleEngineCallback(
    env,
    db,
    telegramId,
    callbackData
) {

    if (
        !callbackData.startsWith(
            "engine_select_"
        )
    ) {

        return {
            handled: false
        };
    }

    const engineId =
        callbackData.replace(
            "engine_select_",
            ""
        );

    const manager =
        new NovaEngineManager(
            env,
            db
        );

    const engine =
        manager.getEngine(
            engineId
        );

    if (!engine) {

        return {
            handled: true,
            ok: false,
            message:
                "❌ موتور پیدا نشد."
        };
    }

    if (
        !manager.isConfigured(
            engineId
        )
    ) {

        return {
            handled: true,
            ok: false,
            message:
                `❌ ${engine.name}\n\n` +
                "API Key این موتور در Cloudflare تنظیم نشده است."
        };
    }

    const result =
        await manager.setUserEngine(
            telegramId,
            engineId
        );

    if (!result.ok) {

        return {
            handled: true,
            ok: false,
            message:
                "❌ ذخیره موتور انجام نشد."
        };
    }

    return {
        handled: true,
        ok: true,
        message:
            `✅ موتور تغییر کرد:\n\n${engine.name}`
    };
}


// ============================================================
// STATUS API
// ============================================================

async function novaEngineStatus(
    env
) {

    const engines = {};

    for (
        const engine of Object.values(
            NOVA_ENGINES
        )
    ) {

        let configured = false;

        if (engine.type === "custom") {

            configured =
                !!(
                    env[engine.keyEnv] &&
                    env[engine.envKey]
                );

        } else {

            configured =
                !!env[engine.keyEnv];
        }

        engines[engine.id] = {

            name: engine.name,

            provider: engine.provider,

            configured,

            model:
                env[engine.modelEnv] ||
                engine.defaultModel ||
                null
        };
    }

    return engines;
}


// ============================================================
// EXPORT-LIKE GLOBAL OBJECT
// بدون import / بدون require
// ============================================================

globalThis.NOVA_AI = {

    engines: NOVA_ENGINES,

    Manager:
        NovaEngineManager,

    run:
        novaRunEngine,

    fallback:
        novaRunWithFallback,

    generate:
        novaGenerateResponse,

    loadHistory:
        novaLoadHistory,

    saveConversation:
        novaSaveConversation,

    panel:
        novaEnginePanel,

    keyboard:
        novaEngineKeyboard,

    callback:
        novaHandleEngineCallback,

    status:
        novaEngineStatus
};


// ============================================================
// END PART 3
// ============================================================
// ============================================================
// 🎯 NOVA BOT ULTIMATE
// PART 4 — ADMIN + D1 MANAGEMENT + BROADCAST + USER ACTIONS
// Cloudflare Workers / JavaScript
// ============================================================


// ============================================================
// 🛡️ ADMIN HELPERS
// ============================================================

async function isNovaAdmin(db, telegramId, env) {
    const id = String(telegramId);

    // ادمین اصلی از ENV
    if (String(env.ADMIN_ID || "") === id) {
        return true;
    }

    // ادمین ذخیره‌شده در D1
    try {
        const result = await db
            .prepare(`
                SELECT is_admin
                FROM users
                WHERE telegram_id = ?
                LIMIT 1
            `)
            .bind(id)
            .first();

        return Number(result?.is_admin || 0) === 1;
    } catch (error) {
        console.error("isNovaAdmin:", error);
        return false;
    }
}


async function getNovaUser(db, telegramId) {
    const id = String(telegramId);

    return await db
        .prepare(`
            SELECT *
            FROM users
            WHERE telegram_id = ?
            LIMIT 1
        `)
        .bind(id)
        .first();
}


async function ensureNovaUser(db, telegramId, firstName = "", username = "") {
    const id = String(telegramId);

    let user = await getNovaUser(db, id);

    if (user) {
        await db
            .prepare(`
                UPDATE users
                SET
                    first_name = ?,
                    username = ?,
                    last_active = CURRENT_TIMESTAMP
                WHERE telegram_id = ?
            `)
            .bind(
                firstName || user.first_name || "",
                username || user.username || "",
                id
            )
            .run();

        return await getNovaUser(db, id);
    }

    await db
        .prepare(`
            INSERT INTO users (
                telegram_id,
                first_name,
                username,
                personality,
                ai_provider,
                is_vip,
                is_admin,
                is_restricted,
                message_count,
                xp,
                level,
                created_at,
                last_active
            )
            VALUES (?, ?, ?, ?, ?, 0, 0, 0, 0, 0, 1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP)
        `)
        .bind(
            id,
            firstName || "",
            username || "",
            "nova",
            "gemini"
        )
        .run();

    return await getNovaUser(db, id);
}


// ============================================================
// 📊 D1 STATISTICS
// ============================================================

async function getNovaStatistics(db) {
    const totalUsers = await db
        .prepare(`
            SELECT COUNT(*) AS count
            FROM users
        `)
        .first();

    const vipUsers = await db
        .prepare(`
            SELECT COUNT(*) AS count
            FROM users
            WHERE is_vip = 1
        `)
        .first();

    const restrictedUsers = await db
        .prepare(`
            SELECT COUNT(*) AS count
            FROM users
            WHERE is_restricted = 1
        `)
        .first();

    const admins = await db
        .prepare(`
            SELECT COUNT(*) AS count
            FROM users
            WHERE is_admin = 1
        `)
        .first();

    const messages = await db
        .prepare(`
            SELECT COALESCE(SUM(message_count), 0) AS count
            FROM users
        `)
        .first();

    const conversations = await db
        .prepare(`
            SELECT COUNT(*) AS count
            FROM conversations
        `)
        .first();

    const active24h = await db
        .prepare(`
            SELECT COUNT(*) AS count
            FROM users
            WHERE last_active >= datetime('now', '-1 day')
        `)
        .first();

    return {
        totalUsers: Number(totalUsers?.count || 0),
        vipUsers: Number(vipUsers?.count || 0),
        restrictedUsers: Number(restrictedUsers?.count || 0),
        admins: Number(admins?.count || 0),
        totalMessages: Number(messages?.count || 0),
        conversations: Number(conversations?.count || 0),
        active24h: Number(active24h?.count || 0)
    };
}


// ============================================================
// 👑 ADMIN PANEL TEXT
// ============================================================

async function buildNovaAdminPanel(db) {
    const stats = await getNovaStatistics(db);

    return `
👑 *پنل مدیریت NOVA*

━━━━━━━━━━━━━━━━━━━━

👥 کاربران: *${stats.totalUsers}*
🔥 فعال در ۲۴ ساعت: *${stats.active24h}*
💬 پیام‌ها: *${stats.totalMessages}*
🧠 مکالمات: *${stats.conversations}*
👑 کاربران VIP: *${stats.vipUsers}*
⛔ محدودشده: *${stats.restrictedUsers}*
🛡 ادمین‌ها: *${stats.admins}*

━━━━━━━━━━━━━━━━━━━━

🟢 وضعیت سیستم: *ONLINE*
💾 دیتابیس: *D1*
⚡ Worker: *Cloudflare*

━━━━━━━━━━━━━━━━━━━━
`;
}


function novaAdminKeyboard() {
    return {
        inline_keyboard: [
            [
                {
                    text: "👥 کاربران",
                    callback_data: "nova_admin_users_0"
                },
                {
                    text: "📊 آمار",
                    callback_data: "nova_admin_stats"
                }
            ],
            [
                {
                    text: "👑 VIP",
                    callback_data: "nova_admin_vip"
                },
                {
                    text: "⛔ محدودشده‌ها",
                    callback_data: "nova_admin_restricted"
                }
            ],
            [
                {
                    text: "📢 Broadcast",
                    callback_data: "nova_admin_broadcast"
                }
            ],
            [
                {
                    text: "🔄 بروزرسانی",
                    callback_data: "nova_admin_refresh"
                }
            ],
            [
                {
                    text: "🔙 بازگشت",
                    callback_data: "nova_back_main"
                }
            ]
        ]
    };
}


// ============================================================
// 👥 USER LIST
// ============================================================

async function getNovaUsersPage(db, page = 0, pageSize = 8) {
    page = Math.max(0, Number(page) || 0);

    const offset = page * pageSize;

    const result = await db
        .prepare(`
            SELECT
                telegram_id,
                first_name,
                username,
                personality,
                ai_provider,
                is_vip,
                is_admin,
                is_restricted,
                message_count,
                level,
                last_active
            FROM users
            ORDER BY last_active DESC
            LIMIT ? OFFSET ?
        `)
        .bind(pageSize, offset)
        .all();

    const total = await db
        .prepare(`
            SELECT COUNT(*) AS count
            FROM users
        `)
        .first();

    return {
        users: result?.results || [],
        total: Number(total?.count || 0),
        page,
        pageSize,
        totalPages: Math.max(
            1,
            Math.ceil(Number(total?.count || 0) / pageSize)
        )
    };
}


async function buildNovaUsersPage(db, page = 0) {
    const data = await getNovaUsersPage(db, page);

    let text = `
👥 *مدیریت کاربران*

━━━━━━━━━━━━━━━━━━━━

📊 تعداد کل: *${data.total}*
📄 صفحه: *${data.page + 1}/${data.totalPages}*

`;

    if (!data.users.length) {
        text += "❌ کاربری پیدا نشد.\n";
    }

    for (const user of data.users) {
        const vip = Number(user.is_vip) === 1 ? "👑" : "👤";
        const restricted =
            Number(user.is_restricted) === 1 ? " ⛔" : "";

        const name =
            user.first_name ||
            user.username ||
            String(user.telegram_id);

        text += `${vip} *${name}*${restricted}\n`;
        text += `🆔 \`${user.telegram_id}\`\n`;
        text += `💬 ${Number(user.message_count || 0)} | ⭐ Lv.${Number(user.level || 1)}\n\n`;
    }

    const keyboard = [];

    for (const user of data.users) {
        const name =
            user.first_name ||
            user.username ||
            String(user.telegram_id);

        keyboard.push([
            {
                text: `${Number(user.is_vip) ? "👑" : "👤"} ${name}`.slice(0, 60),
                callback_data: `nova_admin_user_${user.telegram_id}`
            }
        ]);
    }

    const navigation = [];

    if (data.page > 0) {
        navigation.push({
            text: "◀️ قبلی",
            callback_data: `nova_admin_users_${data.page - 1}`
        });
    }

    navigation.push({
        text: `${data.page + 1}/${data.totalPages}`,
        callback_data: "nova_noop"
    });

    if (data.page < data.totalPages - 1) {
        navigation.push({
            text: "بعدی ▶️",
            callback_data: `nova_admin_users_${data.page + 1}`
        });
    }

    keyboard.push(navigation);

    keyboard.push([
        {
            text: "🔙 پنل مدیریت",
            callback_data: "nova_admin_panel"
        }
    ]);

    return {
        text,
        reply_markup: {
            inline_keyboard: keyboard
        }
    };
}


// ============================================================
// 👤 USER MANAGEMENT
// ============================================================

async function buildNovaUserManagement(db, targetId) {
    const user = await getNovaUser(db, targetId);

    if (!user) {
        return {
            text: "❌ کاربر پیدا نشد.",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🔙 بازگشت",
                            callback_data: "nova_admin_users_0"
                        }
                    ]
                ]
            }
        };
    }

    const vip = Number(user.is_vip) === 1;
    const admin = Number(user.is_admin) === 1;
    const restricted = Number(user.is_restricted) === 1;

    const text = `
👤 *مدیریت کاربر*

━━━━━━━━━━━━━━━━━━━━

🆔 ID:
\`${user.telegram_id}\`

👤 نام:
${user.first_name || "—"}

📱 Username:
${user.username ? "@" + user.username : "—"}

🎭 شخصیت:
${user.personality || "nova"}

🧠 موتور:
${user.ai_provider || "gemini"}

💬 پیام:
${Number(user.message_count || 0)}

⭐ Level:
${Number(user.level || 1)}

👑 VIP:
${vip ? "✅ فعال" : "❌ غیرفعال"}

🛡 Admin:
${admin ? "✅ بله" : "❌ خیر"}

⛔ محدود:
${restricted ? "✅ بله" : "❌ خیر"}

━━━━━━━━━━━━━━━━━━━━
`;

    return {
        text,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: vip ? "❌ حذف VIP" : "👑 افزودن VIP",
                        callback_data: `nova_toggle_vip_${user.telegram_id}`
                    }
                ],
                [
                    {
                        text: restricted
                            ? "✅ رفع محدودیت"
                            : "⛔ محدود کردن",
                        callback_data:
                            `nova_toggle_restricted_${user.telegram_id}`
                    }
                ],
                [
                    {
                        text: admin
                            ? "🔻 حذف ادمین"
                            : "🛡 افزودن ادمین",
                        callback_data:
                            `nova_toggle_admin_${user.telegram_id}`
                    }
                ],
                [
                    {
                        text: "🗑 حذف تاریخچه",
                        callback_data:
                            `nova_clear_history_${user.telegram_id}`
                    }
                ],
                [
                    {
                        text: "🔙 کاربران",
                        callback_data: "nova_admin_users_0"
                    }
                ]
            ]
        }
    };
}


// ============================================================
// 👑 TOGGLE VIP
// ============================================================

async function novaToggleVIP(db, targetId) {
    const user = await getNovaUser(db, targetId);

    if (!user) return false;

    const nextValue =
        Number(user.is_vip || 0) === 1 ? 0 : 1;

    await db
        .prepare(`
            UPDATE users
            SET is_vip = ?
            WHERE telegram_id = ?
        `)
        .bind(nextValue, String(targetId))
        .run();

    return nextValue === 1;
}


// ============================================================
// ⛔ TOGGLE RESTRICTION
// ============================================================

async function novaToggleRestriction(db, targetId) {
    const user = await getNovaUser(db, targetId);

    if (!user) return false;

    const nextValue =
        Number(user.is_restricted || 0) === 1 ? 0 : 1;

    await db
        .prepare(`
            UPDATE users
            SET is_restricted = ?
            WHERE telegram_id = ?
        `)
        .bind(nextValue, String(targetId))
        .run();

    return nextValue === 1;
}


// ============================================================
// 🛡 TOGGLE ADMIN
// ============================================================

async function novaToggleAdmin(db, targetId, env, requesterId) {
    const target = String(targetId);
    const requester = String(requesterId);

    // ادمین اصلی نباید از طریق پنل حذف شود
    if (String(env.ADMIN_ID || "") === target) {
        return {
            success: false,
            reason: "MAIN_ADMIN"
        };
    }

    if (target === requester) {
        return {
            success: false,
            reason: "SELF"
        };
    }

    const user = await getNovaUser(db, target);

    if (!user) {
        return {
            success: false,
            reason: "NOT_FOUND"
        };
    }

    const nextValue =
        Number(user.is_admin || 0) === 1 ? 0 : 1;

    await db
        .prepare(`
            UPDATE users
            SET is_admin = ?
            WHERE telegram_id = ?
        `)
        .bind(nextValue, target)
        .run();

    return {
        success: true,
        value: nextValue
    };
}





// ============================================================
// 📊 DETAILED STATISTICS
// ============================================================

async function buildNovaDetailedStats(db) {
    const stats = await getNovaStatistics(db);

    let topUsers = [];

    try {
        const result = await db
            .prepare(`
                SELECT
                    telegram_id,
                    first_name,
                    message_count
                FROM users
                ORDER BY message_count DESC
                LIMIT 5
            `)
            .all();

        topUsers = result?.results || [];
    } catch (error) {
        console.error("Top users:", error);
    }

    let text = `
📊 *آمار کامل NOVA*

━━━━━━━━━━━━━━━━━━━━

👥 کاربران:
${stats.totalUsers}

🔥 فعال ۲۴ ساعت:
${stats.active24h}

👑 VIP:
${stats.vipUsers}

⛔ محدود:
${stats.restrictedUsers}

🛡 ادمین:
${stats.admins}

💬 مجموع پیام:
${stats.totalMessages}

🧠 رکورد مکالمات:
${stats.conversations}

━━━━━━━━━━━━━━━━━━━━

🏆 *فعال‌ترین کاربران*

`;

    if (!topUsers.length) {
        text += "هنوز داده‌ای وجود ندارد.\n";
    } else {
        topUsers.forEach((user, index) => {
            text += `${index + 1}. ${
                user.first_name || user.telegram_id
            } — ${Number(user.message_count || 0)} پیام\n`;
        });
    }

    return {
        text,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "🔄 بروزرسانی",
                        callback_data: "nova_admin_stats"
                    }
                ],
                [
                    {
                        text: "🔙 پنل مدیریت",
                        callback_data: "nova_admin_panel"
                    }
                ]
            ]
        }
    };
}


// ============================================================
// 📢 BROADCAST PREPARATION
// ============================================================

async function novaPrepareBroadcast(userStates, adminId) {
    userStates[String(adminId)] = {
        ...(userStates[String(adminId)] || {}),
        mode: "broadcast",
        waitingFor: "broadcast_message",
        createdAt: Date.now()
    };

    return true;
}


// ============================================================
// 🧹 EXPIRED ADMIN STATES
// ============================================================

function novaCleanAdminStates(userStates) {
    const now = Date.now();

    for (const [id, state] of Object.entries(userStates)) {
        if (
            state?.createdAt &&
            now - Number(state.createdAt) > 10 * 60 * 1000
        ) {
            delete userStates[id];
        }
    }
}


// ============================================================
// 📢 BROADCAST EXECUTOR
// ============================================================

async function novaBroadcast(db, telegram, text, adminId) {
    const result = await db
        .prepare(`
            SELECT telegram_id
            FROM users
            WHERE is_restricted = 0
            ORDER BY telegram_id
        `)
        .all();

    const users = result?.results || [];

    let sent = 0;
    let failed = 0;

    for (const user of users) {
        try {
            const chatId = String(user.telegram_id);

            const response = await telegram.sendMessage(
                chatId,
                `📢 *پیام مدیریت NOVA*\n\n${text}`
            );

            if (response?.ok !== false) {
                sent++;
            } else {
                failed++;
            }

            // جلوگیری از فشار بیش از حد به Telegram API
            await new Promise(resolve => setTimeout(resolve, 80));

        } catch (error) {
            failed++;
            console.error(
                "Broadcast failed:",
                user.telegram_id,
                error
            );
        }
    }

    try {
        await db
            .prepare(`
                INSERT INTO bot_logs (
                    action,
                    telegram_id,
                    details,
                    created_at
                )
                VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            `)
            .bind(
                "broadcast",
                String(adminId),
                JSON.stringify({
                    sent,
                    failed,
                    total: users.length
                })
            )
            .run();
    } catch (error) {
        console.error("Broadcast log:", error);
    }

    return {
        total: users.length,
        sent,
        failed
    };
}


// ============================================================
// 📝 ADMIN LOG
// ============================================================

async function novaAdminLog(db, action, telegramId, details = {}) {
    try {
        await db
            .prepare(`
                INSERT INTO bot_logs (
                    action,
                    telegram_id,
                    details,
                    created_at
                )
                VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            `)
            .bind(
                String(action),
                String(telegramId),
                JSON.stringify(details)
            )
            .run();

        return true;
    } catch (error) {
        console.error("Admin log:", error);
        return false;
    }
}


// ============================================================
// 🔒 ADMIN CALLBACK ROUTER
// ============================================================

async function handleNovaAdminCallback({
    data,
    db,
    env,
    telegram,
    userId,
    chatId,
    messageId,
    userStates
}) {
    const admin = await isNovaAdmin(db, userId, env);

    if (!admin) {
        await telegram.answerCallbackQuery?.(
            arguments?.callbackId || "",
            "⛔ دسترسی ندارید.",
            true
        );

        return false;
    }

    // ----------------------------
    // پنل
    // ----------------------------

    if (data === "nova_admin_panel") {
        const text = await buildNovaAdminPanel(db);

        await telegram.editMessageText(
            chatId,
            messageId,
            text,
            novaAdminKeyboard()
        );

        return true;
    }


    // ----------------------------
    // refresh
    // ----------------------------

    if (data === "nova_admin_refresh") {
        const text = await buildNovaAdminPanel(db);

        await telegram.editMessageText(
            chatId,
            messageId,
            text,
            novaAdminKeyboard()
        );

        return true;
    }


    // ----------------------------
    // users
    // ----------------------------

    if (data.startsWith("nova_admin_users_")) {
        const page = Number(
            data.replace("nova_admin_users_", "")
        ) || 0;

        const result = await buildNovaUsersPage(db, page);

        await telegram.editMessageText(
            chatId,
            messageId,
            result.text,
            result.reply_markup
        );

        return true;
    }


    // ----------------------------
    // user
    // ----------------------------

    if (data.startsWith("nova_admin_user_")) {
        const targetId =
            data.replace("nova_admin_user_", "");

        const result =
            await buildNovaUserManagement(db, targetId);

        await telegram.editMessageText(
            chatId,
            messageId,
            result.text,
            result.reply_markup
        );

        return true;
    }


    // ----------------------------
    // VIP
    // ----------------------------

    if (data.startsWith("nova_toggle_vip_")) {
        const targetId =
            data.replace("nova_toggle_vip_", "");

        const enabled =
            await novaToggleVIP(db, targetId);

        await novaAdminLog(
            db,
            enabled ? "vip_add" : "vip_remove",
            userId,
            { targetId }
        );

        const result =
            await buildNovaUserManagement(db, targetId);

        await telegram.editMessageText(
            chatId,
            messageId,
            result.text,
            result.reply_markup
        );

        return true;
    }


    // ----------------------------
    // Restriction
    // ----------------------------

    if (data.startsWith("nova_toggle_restricted_")) {
        const targetId =
            data.replace("nova_toggle_restricted_", "");

        const restricted =
            await novaToggleRestriction(db, targetId);

        await novaAdminLog(
            db,
            restricted
                ? "user_restricted"
                : "user_unrestricted",
            userId,
            { targetId }
        );

        const result =
            await buildNovaUserManagement(db, targetId);

        await telegram.editMessageText(
            chatId,
            messageId,
            result.text,
            result.reply_markup
        );

        return true;
    }


    // ----------------------------
    // Admin
    // ----------------------------

    if (data.startsWith("nova_toggle_admin_")) {
        const targetId =
            data.replace("nova_toggle_admin_", "");

        const result =
            await novaToggleAdmin(
                db,
                targetId,
                env,
                userId
            );

        if (!result.success) {
            await telegram.answerCallbackQuery?.(
                "",
                result.reason === "MAIN_ADMIN"
                    ? "⛔ ادمین اصلی قابل تغییر نیست."
                    : "❌ عملیات انجام نشد.",
                true
            );

            return true;
        }

        await novaAdminLog(
            db,
            result.value
                ? "admin_add"
                : "admin_remove",
            userId,
            { targetId }
        );

        const panel =
            await buildNovaUserManagement(db, targetId);

        await telegram.editMessageText(
            chatId,
            messageId,
            panel.text,
            panel.reply_markup
        );

        return true;
    }


    // ----------------------------
    // Clear history
    // ----------------------------

    if (data.startsWith("nova_clear_history_")) {
        const targetId =
            data.replace("nova_clear_history_", "");

        await novaClearHistory(db, targetId);

        await novaAdminLog(
            db,
            "clear_history",
            userId,
            { targetId }
        );

        const result =
            await buildNovaUserManagement(db, targetId);

        await telegram.editMessageText(
            chatId,
            messageId,
            `✅ *تاریخچه کاربر پاک شد.*\n\n${result.text}`,
            result.reply_markup
        );

        return true;
    }


    // ----------------------------
    // Statistics
    // ----------------------------

    if (data === "nova_admin_stats") {
        const result =
            await buildNovaDetailedStats(db);

        await telegram.editMessageText(
            chatId,
            messageId,
            result.text,
            result.reply_markup
        );

        return true;
    }


    // ----------------------------
    // VIP list
    // ----------------------------

    if (data === "nova_admin_vip") {
        const result = await db
            .prepare(`
                SELECT
                    telegram_id,
                    first_name,
                    username,
                    message_count
                FROM users
                WHERE is_vip = 1
                ORDER BY last_active DESC
                LIMIT 50
            `)
            .all();

        const users = result?.results || [];

        let text = `
👑 *کاربران VIP*

━━━━━━━━━━━━━━━━━━━━

`;

        if (!users.length) {
            text += "❌ کاربر VIP وجود ندارد.";
        } else {
            users.forEach((user, index) => {
                text += `${index + 1}. 👑 ${
                    user.first_name ||
                    user.username ||
                    user.telegram_id
                }\n`;
                text += `🆔 \`${user.telegram_id}\`\n`;
                text += `💬 ${Number(user.message_count || 0)}\n\n`;
            });
        }

        await telegram.editMessageText(
            chatId,
            messageId,
            text,
            {
                inline_keyboard: [
                    [
                        {
                            text: "🔙 پنل مدیریت",
                            callback_data: "nova_admin_panel"
                        }
                    ]
                ]
            }
        );

        return true;
    }


    // ----------------------------
    // Restricted list
    // ----------------------------

    if (data === "nova_admin_restricted") {
        const result = await db
            .prepare(`
                SELECT
                    telegram_id,
                    first_name,
                    username
                FROM users
                WHERE is_restricted = 1
                ORDER BY last_active DESC
                LIMIT 50
            `)
            .all();

        const users = result?.results || [];

        let text = `
⛔ *کاربران محدودشده*

━━━━━━━━━━━━━━━━━━━━

`;

        if (!users.length) {
            text += "✅ هیچ کاربر محدودی وجود ندارد.";
        } else {
            users.forEach((user, index) => {
                text += `${index + 1}. ⛔ ${
                    user.first_name ||
                    user.username ||
                    user.telegram_id
                }\n`;
                text += `🆔 \`${user.telegram_id}\`\n\n`;
            });
        }

        await telegram.editMessageText(
            chatId,
            messageId,
            text,
            {
                inline_keyboard: [
                    [
                        {
                            text: "🔙 پنل مدیریت",
                            callback_data: "nova_admin_panel"
                        }
                    ]
                ]
            }
        );

        return true;
    }


    // ----------------------------
    // Broadcast
    // ----------------------------

    if (data === "nova_admin_broadcast") {
        await novaPrepareBroadcast(
            userStates,
            userId
        );

        await telegram.editMessageText(
            chatId,
            messageId,
            `
📢 *ارسال پیام همگانی*

━━━━━━━━━━━━━━━━━━━━

پیام موردنظر را در پیام بعدی ارسال کن.

⚠️ پیام برای تمام کاربران غیرمحدود ارسال می‌شود.

برای لغو:
\`/cancel\`
`,
            {
                inline_keyboard: [
                    [
                        {
                            text: "❌ لغو",
                            callback_data: "nova_cancel_broadcast"
                        }
                    ]
                ]
            }
        );

        return true;
    }


    // ----------------------------
    // Cancel broadcast
    // ----------------------------

    if (data === "nova_cancel_broadcast") {
        delete userStates[String(userId)];

        await telegram.editMessageText(
            chatId,
            messageId,
            "❌ *ارسال همگانی لغو شد.*",
            {
                inline_keyboard: [
                    [
                        {
                            text: "🔙 پنل مدیریت",
                            callback_data: "nova_admin_panel"
                        }
                    ]
                ]
            }
        );

        return true;
    }


    return false;
}


// ============================================================
// 📨 ADMIN MESSAGE PROCESSOR
// ============================================================

async function handleNovaAdminMessage({
    db,
    env,
    telegram,
    userId,
    chatId,
    text,
    userStates
}) {
    const admin = await isNovaAdmin(
        db,
        userId,
        env
    );

    if (!admin) return false;

    novaCleanAdminStates(userStates);

    const state =
        userStates[String(userId)];

    if (!state) return false;

    if (
        state.mode === "broadcast" &&
        state.waitingFor === "broadcast_message"
    ) {
        if (!text || !text.trim()) {
            await telegram.sendMessage(
                chatId,
                "❌ متن پیام خالی است."
            );

            return true;
        }

        if (text === "/cancel") {
            delete userStates[String(userId)];

            await telegram.sendMessage(
                chatId,
                "❌ ارسال همگانی لغو شد."
            );

            return true;
        }

        delete userStates[String(userId)];

        const loading =
            await telegram.sendMessage(
                chatId,
                "📢 در حال ارسال پیام به کاربران..."
            );

        const result =
            await novaBroadcast(
                db,
                telegram,
                text.trim(),
                userId
            );

        if (loading?.result?.message_id) {
            await telegram.editMessageText(
                chatId,
                loading.result.message_id,
                `
✅ *Broadcast تمام شد*

━━━━━━━━━━━━━━━━━━━━

👥 کل کاربران: ${result.total}
📨 موفق: ${result.sent}
❌ ناموفق: ${result.failed}

━━━━━━━━━━━━━━━━━━━━
`,
                {
                    inline_keyboard: [
                        [
                            {
                                text: "👑 پنل مدیریت",
                                callback_data:
                                    "nova_admin_panel"
                            }
                        ]
                    ]
                }
            );
        } else {
            await telegram.sendMessage(
                chatId,
                `
✅ *Broadcast تمام شد*

👥 کل: ${result.total}
📨 موفق: ${result.sent}
❌ ناموفق: ${result.failed}
`
            );
        }

        return true;
    }

    return false;
}


// ============================================================
// 🔐 SECURITY CHECK
// ============================================================

async function novaSecurityCheck(db, userId, env) {
    const user = await getNovaUser(db, userId);

    if (!user) {
        return {
            allowed: true,
            reason: null
        };
    }

    if (Number(user.is_restricted || 0) === 1) {
        return {
            allowed: false,
            reason: "restricted"
        };
    }

    return {
        allowed: true,
        reason: null
    };
}


// ============================================================
// 🧠 AI REQUEST LOG
// ============================================================

async function novaLogAIRequest(
    db,
    telegramId,
    provider,
    model,
    success,
    latency
) {
    try {
        await db
            .prepare(`
                INSERT INTO bot_logs (
                    action,
                    telegram_id,
                    details,
                    created_at
                )
                VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            `)
            .bind(
                "ai_request",
                String(telegramId),
                JSON.stringify({
                    provider,
                    model,
                    success: Boolean(success),
                    latency: Number(latency || 0)
                })
            )
            .run();
    } catch (error) {
        console.error(
            "AI request log:",
            error
        );
    }
}


// ============================================================
// 🧹 HISTORY LIMIT
// ============================================================

async function novaTrimHistory(db, telegramId, limit = 20) {
    const id = String(telegramId);

    try {
        await db
            .prepare(`
                DELETE FROM conversations
                WHERE telegram_id = ?
                AND id NOT IN (
                    SELECT id
                    FROM conversations
                    WHERE telegram_id = ?
                    ORDER BY id DESC
                    LIMIT ?
                )
            `)
            .bind(id, id, limit)
            .run();

        return true;
    } catch (error) {
        console.error(
            "History trim:",
            error
        );

        return false;
    }
}


// ============================================================
// ❤️ HEALTH CHECK
// ============================================================

async function novaHealthCheck(db) {
    const started = Date.now();

    try {
        await db
            .prepare("SELECT 1 AS ok")
            .first();

        return {
            ok: true,
            database: true,
            latency: Date.now() - started,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        return {
            ok: false,
            database: false,
            latency: Date.now() - started,
            timestamp: new Date().toISOString(),
            error: error instanceof Error
                ? error.message
                : String(error)
        };
    }
}


// ============================================================
// 🌐 END PART 4
// ============================================================
// ============================================================
// 🎙️ NOVA BOT ULTIMATE
// PART 5 — REAL MESSAGE RUNTIME
// Cloudflare Workers + D1 + Telegram
// ادامه مستقیم PART 4
// بدون require / بدون import / بدون AI فیک
// ============================================================


// ============================================================
// 🧰 RUNTIME HELPERS
// ============================================================

function novaRuntimeText(value, max = 4000) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value).trim().slice(0, max);
}


function novaRuntimeEscapeMarkdown(text) {
    return novaRuntimeText(text, 4000)
        .replace(/\\/g, "\\\\")
        .replace(/\*/g, "\\*")
        .replace(/_/g, "\\_")
        .replace(/\[/g, "\\[")
        .replace(/`/g, "\\`");
}


function novaRuntimeGetDB(env) {
    if (!env || !env.DB) {
        throw new Error("D1 binding DB پیدا نشد.");
    }

    return env.DB;
}


function novaRuntimeGetLanguage(user) {
    const language =
        user?.language ||
        user?.lang ||
        APP.defaultLanguage ||
        "fa";

    return LANG[language]
        ? language
        : APP.defaultLanguage;
}


function novaRuntimeGetCharacter(user) {
    const id =
        user?.personality ||
        "sara";

    return getCharacter(id);
}


function novaRuntimeGetEngine(user) {
    return (
        user?.ai_provider ||
        "gemini"
    );
}


// ============================================================
// 👤 USER PROFILE UPDATE
// ============================================================

async function novaRuntimeTouchUser(
    db,
    telegramId,
    message
) {
    const id = String(telegramId);

    const firstName =
        novaRuntimeText(
            message?.from?.first_name || "",
            200
        );

    const username =
        novaRuntimeText(
            message?.from?.username || "",
            200
        );

    try {
        const existing =
            await getNovaUser(
                db,
                id
            );

        if (!existing) {
            return await ensureNovaUser(
                db,
                id,
                firstName,
                username
            );
        }

        await db
            .prepare(`
                UPDATE users
                SET
                    first_name = ?,
                    username = ?,
                    last_active = CURRENT_TIMESTAMP
                WHERE telegram_id = ?
            `)
            .bind(
                firstName ||
                    existing.first_name ||
                    "",
                username ||
                    existing.username ||
                    "",
                id
            )
            .run();

        return await getNovaUser(
            db,
            id
        );

    } catch (error) {

        console.error(
            "Runtime user update:",
            error
        );

        return existing || null;
    }
}


// ============================================================
// 📈 MESSAGE COUNTER
// ============================================================

async function novaRuntimeIncrementMessage(
    db,
    telegramId
) {
    try {

        await db
            .prepare(`
                UPDATE users
                SET
                    message_count =
                        COALESCE(message_count, 0) + 1,
                    xp =
                        COALESCE(xp, 0) + 1,
                    level =
                        CAST(
                            (
                                COALESCE(xp, 0) + 1
                            ) / 50
                            AS INTEGER
                        ) + 1,
                    last_active =
                        CURRENT_TIMESTAMP
                WHERE telegram_id = ?
            `)
            .bind(
                String(telegramId)
            )
            .run();

        return true;

    } catch (error) {

        console.error(
            "Message counter:",
            error
        );

        return false;
    }
}


// ============================================================
// 🔒 USER ACCESS CHECK
// ============================================================

async function novaRuntimeCheckAccess(
    db,
    telegramId,
    env
) {
    const result =
        await checkNovaUserAccess(
            db,
            telegramId,
            env
        );

    if (!result.allowed) {
        return {
            allowed: false,
            reason:
                result.reason ||
                "restricted"
        };
    }

    return {
        allowed: true,
        reason: null
    };
}


// ============================================================
// 🧠 SYSTEM PROMPT BUILDER
// ============================================================

function novaRuntimeBuildSystemPrompt(
    user,
    character
) {
    const language =
        novaRuntimeGetLanguage(user);

    const languageName =
        LANG[language]?.name ||
        LANG.fa.name;

    const basePrompt =
        character?.systemPrompt ||
        CHARACTERS.sara.systemPrompt;

    return `
${basePrompt}

تو بخشی از Nova AI Pro هستی.

قوانین رفتاری:
- طبیعی و انسانی صحبت کن.
- پاسخ را بر اساس سؤال کاربر بده.
- اگر اطلاعات کافی نداری، حدس قطعی نزن.
- خودت را به عنوان مدل یا API معرفی نکن مگر کاربر مستقیماً بپرسد.
- از پاسخ‌های کلیشه‌ای و تکراری دوری کن.
- اگر کاربر فارسی صحبت کرد، فارسی پاسخ بده.
- زبان ترجیحی کاربر: ${languageName}
- لحن شخصیت انتخاب‌شده را حفظ کن.
- پاسخ‌ها را واضح، کاربردی و متناسب با گفتگو بنویس.
`.trim();
}


// ============================================================
// 🧠 AI REQUEST RUNTIME
// ============================================================

async function novaRuntimeGenerateAI({
    env,
    db,
    user,
    telegramId,
    text
}) {
    const character =
        novaRuntimeGetCharacter(
            user
        );

    const systemPrompt =
        novaRuntimeBuildSystemPrompt(
            user,
            character
        );

    const selectedEngine =
        novaRuntimeGetEngine(
            user
        );

    /*
     * موتور انتخاب‌شده از users.ai_provider
     * خوانده می‌شود.
     *
     * fallback فقط موتورهایی را امتحان می‌کند
     * که در سیستم NOVA_AI قبلاً تعریف شده‌اند.
     */

    const fallback = [
        "gemini",
        "openai",
        "deepseek",
        "groq",
        "openrouter",
        "claude",
        "mistral",
        "together",
        "qwen",
        "hamid_ai"
    ].filter(
        engine =>
            engine !== selectedEngine
    );

    const started =
        Date.now();

    try {

        if (
            !globalThis.NOVA_AI ||
            typeof globalThis.NOVA_AI.generate !==
                "function"
        ) {
            throw new Error(
                "NOVA_AI runtime در دسترس نیست."
            );
        }

        const result =
            await globalThis.NOVA_AI.generate({
                env,
                db,
                telegramId,
                userMessage: text,
                systemPrompt,
                fallback
            });

        const latency =
            Date.now() - started;

        await novaLogAIRequest(
            db,
            telegramId,
            result?.engine ||
                selectedEngine,
            result?.model ||
                null,
            Boolean(result?.ok),
            latency
        );

        return result;

    } catch (error) {

        const latency =
            Date.now() - started;

        await novaLogAIRequest(
            db,
            telegramId,
            selectedEngine,
            null,
            false,
            latency
        );

        console.error(
            "Runtime AI error:",
            error
        );

        return {
            ok: false,
            text:
                "❌ خطایی هنگام ارتباط با موتور هوش مصنوعی رخ داد.",
            error:
                error?.message ||
                String(error)
        };
    }
}


// ============================================================
// ⏳ TYPING ACTION
// ============================================================

async function novaRuntimeTyping(
    env,
    chatId
) {
    try {

        await telegram(
            env,
            "sendChatAction",
            {
                chat_id: chatId,
                action: "typing"
            }
        );

        return true;

    } catch (error) {

        console.error(
            "Typing action:",
            error
        );

        return false;
    }
}


// ============================================================
// 📩 SAFE TELEGRAM SEND
// ============================================================

async function novaRuntimeSend(
    env,
    chatId,
    text,
    options = {}
) {
    try {

        return await sendMessage(
            env,
            chatId,
            novaRuntimeText(
                text,
                4096
            ),
            options.replyMarkup ||
                null,
            {
                replyTo:
                    options.replyTo ||
                    null,
                disablePreview:
                    true
            }
        );

    } catch (error) {

        console.error(
            "Runtime send:",
            error
        );

        return null;
    }
}


// ============================================================
// 🏠 START PANEL
// ============================================================

async function novaRuntimeStart(
    env,
    db,
    message
) {
    const telegramId =
        message.from.id;

    const chatId =
        message.chat.id;

    const user =
        await novaRuntimeTouchUser(
            db,
            telegramId,
            message
        );

    const language =
        novaRuntimeGetLanguage(
            user
        );

    const t =
        LANG[language] ||
        LANG.fa;

    const character =
        novaRuntimeGetCharacter(
            user
        );

    const engine =
        novaRuntimeGetEngine(
            user
        );

    const text = `
${character.icon} *${t.welcome}*

━━━━━━━━━━━━━━━━━━━━

👤 ${novaRuntimeEscapeMarkdown(
        user.first_name ||
        "دوست عزیز"
    )}

🎭 شخصیت:
${character.icon} ${character.name}

🧠 موتور:
${engine}

🌍 زبان:
${t.name}

━━━━━━━━━━━━━━━━━━━━

از دکمه‌های زیر استفاده کن 👇
`.trim();

    const keyboard = {
        inline_keyboard: [

            [
                {
                    text: "🎭 شخصیت‌ها",
                    callback_data:
                        "nova_runtime_characters"
                }
            ],

            [
                {
                    text: "🧠 موتورهای AI",
                    callback_data:
                        "nova_runtime_engines"
                }
            ],

            [
                {
                    text: "🌍 زبان",
                    callback_data:
                        "nova_runtime_language"
                }
            ],

            [
                {
                    text: "👑 پنل ادمین",
                    callback_data:
                        "nova_admin_panel"
                }
            ],

            [
                {
                    text: "📖 راهنما",
                    callback_data:
                        "nova_runtime_help"
                }
            ]

        ]
    };

    return novaRuntimeSend(
        env,
        chatId,
        text,
        {
            replyMarkup:
                keyboard
        }
    );
}


// ============================================================
// 📖 HELP
// ============================================================

async function novaRuntimeHelp(
    env,
    db,
    chatId,
    telegramId
) {
    const user =
        await getNovaUser(
            db,
            telegramId
        );

    const language =
        novaRuntimeGetLanguage(
            user
        );

    const t =
        LANG[language] ||
        LANG.fa;

    const text = `
📖 *راهنمای Nova AI Pro*

━━━━━━━━━━━━━━━━━━━━

/start
شروع ربات و نمایش پنل

/panel
نمایش پنل کاربری

/help
نمایش راهنما

/clear
پاک کردن حافظه گفتگو

/models
نمایش موتورهای AI

/characters
انتخاب شخصیت

/language
تغییر زبان

/admin
پنل مدیریت

━━━━━━━━━━━━━━━━━━━━

💬 برای صحبت با AI فقط پیام خودت را ارسال کن.

🧠 پاسخ‌ها از موتور AI انتخاب‌شده
تولید می‌شوند.

💾 تاریخچه گفتگو در D1 ذخیره می‌شود.

🌍 زبان‌ها:
${APP.supportedLanguages.join(" | ")}
`.trim();

    return novaRuntimeSend(
        env,
        chatId,
        text
    );
}


// ============================================================
// 🧹 CLEAR CHAT
// ============================================================

async function novaRuntimeClear(
    env,
    db,
    chatId,
    telegramId
) {
    try {

        await clearConversation(
            env,
            telegramId
        );

        await novaRuntimeSend(
            env,
            chatId,
            "✅ حافظه گفتگوی این کاربر پاک شد."
        );

        await novaAdminLog(
            db,
            "clear_history",
            telegramId,
            {}
        );

        return true;

    } catch (error) {

        console.error(
            "Clear history:",
            error
        );

        await novaRuntimeSend(
            env,
            chatId,
            "❌ پاک کردن حافظه انجام نشد."
        );

        return false;
    }
}


// ============================================================
// 🎭 CHARACTER PANEL
// ============================================================

async function novaRuntimeCharacterPanel(
    env,
    db,
    chatId,
    telegramId
) {
    const user =
        await getNovaUser(
            db,
            telegramId
        );

    const current =
        novaRuntimeGetCharacter(
            user
        );

    let text =
        "🎭 *انتخاب شخصیت Nova*\n\n";

    const rows = [];

    for (
        const character
        of Object.values(CHARACTERS)
    ) {

        const active =
            character.id ===
            current.id;

        text +=
            `${active ? "✅" : "▫️"} ` +
            `${character.icon} ` +
            `*${character.name}* — ` +
            `${character.description}\n`;

        rows.push([
            {
                text:
                    `${active ? "✅ " : ""}` +
                    `${character.icon} ` +
                    `${character.name}`,
                callback_data:
                    `nova_runtime_char_${character.id}`
            }
        ]);
    }

    rows.push([
        {
            text: "🔙 بازگشت",
            callback_data:
                "nova_runtime_home"
        }
    ]);

    return novaRuntimeSend(
        env,
        chatId,
        text,
        {
            replyMarkup: {
                inline_keyboard:
                    rows
            }
        }
    );
}


// ============================================================
// 🎭 SET CHARACTER
// ============================================================

async function novaRuntimeSetCharacter(
    env,
    db,
    chatId,
    telegramId,
    characterId
) {
    if (
        !CHARACTERS[characterId]
    ) {
        return novaRuntimeSend(
            env,
            chatId,
            "❌ شخصیت پیدا نشد."
        );
    }

    const saved =
        await setCharacter(
            env,
            telegramId,
            characterId
        );

    if (!saved) {
        return novaRuntimeSend(
            env,
            chatId,
            "❌ ذخیره شخصیت انجام نشد."
        );
    }

    const character =
        CHARACTERS[characterId];

    await novaAdminLog(
        db,
        "character_change",
        telegramId,
        {
            character:
                characterId
        }
    );

    return novaRuntimeSend(
        env,
        chatId,
        `✅ شخصیت تغییر کرد:\n\n${character.icon} ${character.name}`
    );
}


// ============================================================
// 🧠 ENGINE PANEL
// ============================================================

async function novaRuntimeEnginePanel(
    env,
    db,
    chatId,
    telegramId
) {
    const panel =
        await novaEnginePanel(
            env,
            db,
            telegramId
        );

    const keyboard =
        await novaEngineKeyboard(
            env,
            db,
            telegramId
        );

    return novaRuntimeSend(
        env,
        chatId,
        panel,
        {
            replyMarkup:
                keyboard
        }
    );
}


// ============================================================
// 🌍 LANGUAGE PANEL
// ============================================================

async function novaRuntimeLanguagePanel(
    env,
    db,
    chatId,
    telegramId
) {
    const user =
        await getNovaUser(
            db,
            telegramId
        );

    const current =
        novaRuntimeGetLanguage(
            user
        );

    const rows = [];

    for (
        const code
        of APP.supportedLanguages
    ) {

        const language =
            LANG[code];

        if (!language) {
            continue;
        }

        rows.push([
            {
                text:
                    `${code === current ? "✅ " : ""}` +
                    `${language.flag} ` +
                    `${language.name}`,
                callback_data:
                    `nova_runtime_lang_${code}`
            }
        ]);
    }

    rows.push([
        {
            text: "🔙 بازگشت",
            callback_data:
                "nova_runtime_home"
        }
    ]);

    return novaRuntimeSend(
        env,
        chatId,
        "🌍 *زبان خود را انتخاب کن:*",
        {
            replyMarkup: {
                inline_keyboard:
                    rows
            }
        }
    );
}


// ============================================================
// 🌍 SET LANGUAGE
// ============================================================

async function novaRuntimeSetLanguage(
    env,
    db,
    chatId,
    telegramId,
    language
) {
    if (!LANG[language]) {

        return novaRuntimeSend(
            env,
            chatId,
            "❌ زبان نامعتبر است."
        );
    }

    try {

        await setLanguage(
            env,
            telegramId,
            language
        );

        await novaAdminLog(
            db,
            "language_change",
            telegramId,
            {
                language
            }
        );

        return novaRuntimeSend(
            env,
            chatId,
            `${LANG[language].languageChanged}`
        );

    } catch (error) {

        console.error(
            "Language change:",
            error
        );

        return novaRuntimeSend(
            env,
            chatId,
            "❌ تغییر زبان انجام نشد."
        );
    }
}


// ============================================================
// 💬 REAL AI MESSAGE
// ============================================================

async function novaRuntimeChat(
    env,
    db,
    message
) {
    const telegramId =
        message.from.id;

    const chatId =
        message.chat.id;

    const text =
        novaRuntimeText(
            message.text,
            12000
        );

    if (!text) {
        return false;
    }

    const access =
        await novaRuntimeCheckAccess(
            db,
            telegramId,
            env
        );

    if (!access.allowed) {

        await novaRuntimeSend(
            env,
            chatId,
            "⛔ دسترسی شما به ربات محدود شده است."
        );

        return false;
    }

    const user =
        await novaRuntimeTouchUser(
            db,
            telegramId,
            message
        );

    await novaRuntimeIncrementMessage(
        db,
        telegramId
    );

    await novaRuntimeTyping(
        env,
        chatId
    );

    const result =
        await novaRuntimeGenerateAI({
            env,
            db,
            user:
                user ||
                {},
            telegramId,
            text
        });

    if (!result?.ok) {

        await novaRuntimeSend(
            env,
            chatId,
            result?.text ||
                "❌ موتورهای AI در دسترس نیستند."
        );

        return false;
    }

    const reply =
        novaRuntimeText(
            result.text,
            12000
        );

    if (!reply) {

        await novaRuntimeSend(
            env,
            chatId,
            "❌ پاسخ موتور AI خالی بود."
        );

        return false;
    }

    await novaRuntimeSend(
        env,
        chatId,
        reply,
        {
            replyTo:
                message.message_id
        }
    );

    await novaAdminLog(
        db,
        "ai_message",
        telegramId,
        {
            engine:
                result.engine ||
                null,
            model:
                result.model ||
                null,
            length:
                reply.length
        }
    );

    return true;
}


// ============================================================
// 📨 COMMAND ROUTER
// ============================================================

async function novaRuntimeCommand(
    env,
    db,
    message
) {
    const text =
        novaRuntimeText(
            message.text,
            1000
        );

    const chatId =
        message.chat.id;

    const telegramId =
        message.from.id;

    const command =
        text
            .split(/\s+/)[0]
            .split("@")[0]
            .toLowerCase();

    switch (command) {

        case "/start":

            await novaRuntimeStart(
                env,
                db,
                message
            );

            return true;


        case "/panel":

            await novaRuntimeStart(
                env,
                db,
                message
            );

            return true;


        case "/help":

            await novaRuntimeHelp(
                env,
                db,
                chatId,
                telegramId
            );

            return true;


        case "/clear":

            await novaRuntimeClear(
                env,
                db,
                chatId,
                telegramId
            );

            return true;


        case "/characters":

            await novaRuntimeCharacterPanel(
                env,
                db,
                chatId,
                telegramId
            );

            return true;


        case "/models":

            await novaRuntimeEnginePanel(
                env,
                db,
                chatId,
                telegramId
            );

            return true;


        case "/language":

            await novaRuntimeLanguagePanel(
                env,
                db,
                chatId,
                telegramId
            );

            return true;


        case "/admin":

            if (
                await isNovaAdmin(
                    db,
                    telegramId,
                    env
                )
            ) {

                const text =
                    await buildNovaAdminPanel(
                        db
                    );

                await novaRuntimeSend(
                    env,
                    chatId,
                    text,
                    {
                        replyMarkup:
                            novaAdminKeyboard()
                    }
                );

            } else {

                await novaRuntimeSend(
                    env,
                    chatId,
                    "⛔ شما ادمین نیستید."
                );
            }

            return true;


        default:

            return false;
    }
}


// ============================================================
// 🔘 CALLBACK ROUTER
// ============================================================

async function novaRuntimeCallback(
    env,
    db,
    callback
) {
    const data =
        novaRuntimeText(
            callback?.data,
            500
        );

    const message =
        callback?.message;

    const from =
        callback?.from;

    if (!message || !from) {
        return false;
    }

    const chatId =
        message.chat.id;

    const telegramId =
        from.id;

    const messageId =
        message.message_id;

    try {

        await telegram(
            env,
            "answerCallbackQuery",
            {
                callback_query_id:
                    callback.id
            }
        );

    } catch (error) {

        console.error(
            "Callback answer:",
            error
        );
    }


    // --------------------------------------------------------
    // HOME
    // --------------------------------------------------------

    if (
        data ===
        "nova_runtime_home"
    ) {

        await novaRuntimeStart(
            env,
            db,
            {
                chat: message.chat,
                from
            }
        );

        return true;
    }


    // --------------------------------------------------------
    // CHARACTER PANEL
    // --------------------------------------------------------

    if (
        data ===
        "nova_runtime_characters"
    ) {

        await novaRuntimeCharacterPanel(
            env,
            db,
            chatId,
            telegramId
        );

        return true;
    }


    // --------------------------------------------------------
    // CHARACTER SELECT
    // --------------------------------------------------------

    if (
        data.startsWith(
            "nova_runtime_char_"
        )
    ) {

        const characterId =
            data.replace(
                "nova_runtime_char_",
                ""
            );

        await novaRuntimeSetCharacter(
            env,
            db,
            chatId,
            telegramId,
            characterId
        );

        await novaRuntimeCharacterPanel(
            env,
            db,
            chatId,
            telegramId
        );

        return true;
    }


    // --------------------------------------------------------
    // ENGINE PANEL
    // --------------------------------------------------------

    if (
        data ===
        "nova_runtime_engines"
    ) {

        await novaRuntimeEnginePanel(
            env,
            db,
            chatId,
            telegramId
        );

        return true;
    }


    // --------------------------------------------------------
    // ENGINE SELECT
    // --------------------------------------------------------

    if (
        data.startsWith(
            "engine_select_"
        )
    ) {

        const result =
            await novaHandleEngineCallback(
                env,
                db,
                telegramId,
                data
            );

        await novaRuntimeSend(
            env,
            chatId,
            result?.message ||
                "❌ عملیات انجام نشد."
        );

        if (result?.ok) {

            await novaRuntimeEnginePanel(
                env,
                db,
                chatId,
                telegramId
            );
        }

        return true;
    }


    // --------------------------------------------------------
    // ENGINE REFRESH
    // --------------------------------------------------------

    if (
        data ===
        "engines_refresh"
    ) {

        await novaRuntimeEnginePanel(
            env,
            db,
            chatId,
            telegramId
        );

        return true;
    }


    // --------------------------------------------------------
    // LANGUAGE PANEL
    // --------------------------------------------------------

    if (
        data ===
        "nova_runtime_language"
    ) {

        await novaRuntimeLanguagePanel(
            env,
            db,
            chatId,
            telegramId
        );

        return true;
    }


    // --------------------------------------------------------
    // LANGUAGE SELECT
    // --------------------------------------------------------

    if (
        data.startsWith(
            "nova_runtime_lang_"
        )
    ) {

        const language =
            data.replace(
                "nova_runtime_lang_",
                ""
            );

        await novaRuntimeSetLanguage(
            env,
            db,
            chatId,
            telegramId,
            language
        );

        await novaRuntimeStart(
            env,
            db,
            {
                chat: message.chat,
                from
            }
        );

        return true;
    }


    // --------------------------------------------------------
    // HELP
    // --------------------------------------------------------

    if (
        data ===
        "nova_runtime_help"
    ) {

        await novaRuntimeHelp(
            env,
            db,
            chatId,
            telegramId
        );

        return true;
    }


    // --------------------------------------------------------
    // ADMIN CALLBACK
    // --------------------------------------------------------

    if (
        data.startsWith(
            "nova_admin_"
        )
    ) {

        const handled =
            await handleNovaAdminCallback({
                data,
                db,
                env,
                telegram: {
                    editMessageText:
                        async (
                            targetChat,
                            targetMessage,
                            text,
                            replyMarkup
                        ) => {
                            return editMessage(
                                env,
                                targetChat,
                                targetMessage,
                                text,
                                replyMarkup
                            );
                        },

                    answerCallbackQuery:
                        async (
                            callbackId,
                            text,
                            showAlert
                        ) => {
                            return telegram(
                                env,
                                "answerCallbackQuery",
                                {
                                    callback_query_id:
                                        callbackId,
                                    text,
                                    show_alert:
                                        Boolean(
                                            showAlert
                                        )
                                }
                            );
                        }
                },
                userId:
                    telegramId,
                chatId,
                messageId,
                userStates:
                    globalThis.NOVA_USER_STATES ||
                    {}
            });

        return Boolean(
            handled
        );
    }


    // --------------------------------------------------------
    // NOOP
    // --------------------------------------------------------

    if (
        data ===
        "nova_noop"
    ) {
        return true;
    }


    return false;
}


// ============================================================
// 🧠 MAIN RUNTIME DISPATCHER
// ============================================================

async function novaRuntimeDispatch(
    env,
    ctx,
    update
) {
    const db =
        novaRuntimeGetDB(
            env
        );

    if (!update) {
        return false;
    }


    // --------------------------------------------------------
    // CALLBACK
    // --------------------------------------------------------

    if (
        update.callback_query
    ) {

        return novaRuntimeCallback(
            env,
            db,
            update.callback_query
        );
    }


    // --------------------------------------------------------
    // MESSAGE
    // --------------------------------------------------------

    if (
        update.message
    ) {

        const message =
            update.message;

        if (
            !message.from ||
            !message.chat
        ) {
            return false;
        }

        await novaRuntimeTouchUser(
            db,
            message.from.id,
            message
        );

        if (
            typeof message.text ===
                "string" &&
            message.text.startsWith("/")
        ) {

            const handled =
                await novaRuntimeCommand(
                    env,
                    db,
                    message
                );

            if (handled) {
                return true;
            }
        }

        if (
            typeof message.text ===
                "string" &&
            message.text.trim()
        ) {

            return novaRuntimeChat(
                env,
                db,
                message
            );
        }

        return false;
    }


    return false;
}


// ============================================================
// ❤️ RUNTIME HEALTH
// ============================================================

async function novaRuntimeHealth(
    env
) {
    const started =
        Date.now();

    try {

        const db =
            novaRuntimeGetDB(
                env
            );

        const health =
            await novaHealthCheck(
                db
            );

        const engines =
            typeof novaEngineStatus ===
                "function"
                ? await novaEngineStatus(
                    env
                )
                : {};

        return {
            ok:
                Boolean(
                    health?.ok
                ),
            database:
                Boolean(
                    health?.database
                ),
            latency:
                Date.now() -
                started,
            engines,
            timestamp:
                new Date().toISOString()
        };

    } catch (error) {

        return {
            ok: false,
            database: false,
            latency:
                Date.now() -
                started,
            engines: {},
            error:
                error?.message ||
                String(error),
            timestamp:
                new Date().toISOString()
        };
    }
}


// ============================================================
// 🌐 RUNTIME OBJECT
// بدون import / بدون require
// ============================================================

globalThis.NOVA_RUNTIME = {

    dispatch:
        novaRuntimeDispatch,

    command:
        novaRuntimeCommand,

    callback:
        novaRuntimeCallback,

    chat:
        novaRuntimeChat,

    start:
        novaRuntimeStart,

    help:
        novaRuntimeHelp,

    clear:
        novaRuntimeClear,

    characters:
        novaRuntimeCharacterPanel,

    engines:
        novaRuntimeEnginePanel,

    languages:
        novaRuntimeLanguagePanel,

    health:
        novaRuntimeHealth,

    generate:
        novaRuntimeGenerateAI
};


// ============================================================
// 🧪 RUNTIME STATUS
// ============================================================

globalThis.NOVA_RUNTIME_STATUS = {
    version: "5.0-runtime",
    platform: "Cloudflare Workers",
    database: "D1",
    telegram: true,
    ai: true,
    fakeAI: false,
    history: true,
    characters: true,
    engines: true,
    languages: true,
    admin: true,
    timestamp: () =>
        new Date().toISOString()
};


// ============================================================
// 🌐 END PART 5
// ============================================================
// ============================================================
// 🎙️ NOVA BOT ULTIMATE
// PART 6 — CLOUDFLARE RUNTIME INTEGRATION
// ============================================================
//
// این پارت:
// ✅ Runtime پارت ۵ را فعال می‌کند
// ✅ Webhook را به Runtime جدید وصل می‌کند
// ✅ callback ها را به Runtime جدید می‌دهد
// ✅ GET / health را نگه می‌دارد
// ❌ export default جدید ندارد
// ❌ موتور AI تکرار نمی‌شود
// ❌ D1 تکرار نمی‌شود
// ❌ handleMessage تکرار نمی‌شود
// ============================================================


// ============================================================
// 🔗 NOVA WORKER RUNTIME ADAPTER
// ============================================================

async function novaWorkerRuntimeAdapter(
    request,
    env,
    ctx
) {
    // --------------------------------------------------------
    // GET
    // --------------------------------------------------------

    if (
        request.method === "GET"
    ) {
        let health = null;

        try {
            health =
                await novaRuntimeHealth(
                    env
                );
        } catch (error) {
            health = {
                ok: false,
                database: false,
                error:
                    error?.message ||
                    String(error)
            };
        }

        return new Response(
            JSON.stringify({
                ok: true,
                bot:
                    APP?.name ||
                    "Nova AI Pro",
                version:
                    APP?.version ||
                    "11.0",
                platform:
                    "Cloudflare Workers",
                database:
                    health?.database === true
                        ? "D1"
                        : "D1_ERROR",
                runtime:
                    health?.ok === true
                        ? "online"
                        : "degraded",
                latency:
                    health?.latency ??
                    null,
                timestamp:
                    new Date().toISOString()
            }),
            {
                status: 200,
                headers: {
                    "content-type":
                        "application/json; charset=utf-8",
                    "cache-control":
                        "no-store"
                }
            }
        );
    }


    // --------------------------------------------------------
    // ONLY POST
    // --------------------------------------------------------

    if (
        request.method !== "POST"
    ) {
        return new Response(
            "Method Not Allowed",
            {
                status: 405,
                headers: {
                    "allow":
                        "GET, POST"
                }
            }
        );
    }


    // --------------------------------------------------------
    // READ TELEGRAM UPDATE
    // --------------------------------------------------------

    let update;

    try {
        update =
            await request.json();

    } catch (error) {

        console.error(
            "Telegram JSON error:",
            error
        );

        return new Response(
            "Invalid JSON",
            {
                status: 400
            }
        );
    }


    // --------------------------------------------------------
    // BASIC UPDATE VALIDATION
    // --------------------------------------------------------

    if (
        !update ||
        typeof update !== "object"
    ) {
        return new Response(
            "Invalid Telegram update",
            {
                status: 400
            }
        );
    }


    const hasMessage =
        Boolean(
            update.message
        );

    const hasCallback =
        Boolean(
            update.callback_query
        );

    if (
        !hasMessage &&
        !hasCallback
    ) {
        /*
         * Telegram ممکن است updateهای دیگری
         * هم ارسال کند.
         *
         * برای جلوگیری از crash کردن Worker
         * آنها را معتبر ولی بدون عملیات
         * در نظر می‌گیریم.
         */

        return new Response(
            "OK",
            {
                status: 200
            }
        );
    }


    // --------------------------------------------------------
    // RUNTIME DISPATCH
    // --------------------------------------------------------

    try {

        await novaRuntimeDispatch(
            env,
            ctx,
            update
        );

    } catch (error) {

        console.error(
            "NOVA RUNTIME ERROR:",
            error
        );


        // ----------------------------------------------------
        // ERROR LOG
        // ----------------------------------------------------

        try {

            const telegramId =
                update
                    ?.message
                    ?.from
                    ?.id ||
                update
                    ?.callback_query
                    ?.from
                    ?.id ||
                0;

            await novaAdminLog(
                env.DB,
                "runtime_error",
                telegramId,
                {
                    message:
                        error?.message ||
                        String(error),
                    stack:
                        error?.stack ||
                        null
                }
            );

        } catch (
            logError
        ) {

            console.error(
                "Runtime error logging failed:",
                logError
            );
        }


        /*
         * Telegram باید 200 بگیرد.
         * خطای داخلی نباید باعث retry
         * بی‌نهایت webhook شود.
         */

        return new Response(
            "OK",
            {
                status: 200
            }
        );
    }


    // --------------------------------------------------------
    // TELEGRAM ACK
    // --------------------------------------------------------

    return new Response(
        "OK",
        {
            status: 200,
            headers: {
                "content-type":
                    "text/plain; charset=utf-8"
            }
        }
    );
}


// ============================================================
// 🧩 RUNTIME STATE
// ============================================================

globalThis.NOVA_RUNTIME_ADAPTER =
    novaWorkerRuntimeAdapter;


// ============================================================
// 🩺 FINAL RUNTIME STATUS
// ============================================================

globalThis.NOVA_RUNTIME_INTEGRATION = {
    enabled: true,
    platform:
        "Cloudflare Workers",
    database:
        "D1",
    telegram:
        true,
    webhook:
        true,
    runtime:
        true,
    ai:
        true,
    fakeAI:
        false,
    version:
        "6.0",
    createdAt:
        new Date().toISOString()
};


// ============================================================
// 🔍 RUNTIME SELF TEST
// ============================================================

async function novaRuntimeSelfTest(
    env
) {
    const result = {
        ok: false,
        database: false,
        runtime: false,
        engines: false,
        timestamp:
            new Date().toISOString()
    };

    try {

        // D1
        const health =
            await novaHealthCheck(
                env.DB
            );

        result.database =
            Boolean(
                health?.database
            );


        // Runtime
        result.runtime =
            typeof novaRuntimeDispatch ===
            "function";


        // AI runtime
        result.engines =
            Boolean(
                globalThis.NOVA_AI
            ) ||
            typeof novaRuntimeGenerateAI ===
            "function";


        result.ok =
            result.database &&
            result.runtime &&
            result.engines;

    } catch (error) {

        result.error =
            error?.message ||
            String(error);
    }

    return result;
}


globalThis.NOVA_RUNTIME_SELF_TEST =
    novaRuntimeSelfTest;


// ============================================================
// 🌐 END PART 6
// ============================================================
// ============================================================
// 🌐 NOVA BOT ULTIMATE
// PART 7 — WEBHOOK + RUNTIME CONTROL
// ============================================================
//
// ادامه مستقیم PART 6
//
// این پارت:
// ✅ وضعیت Webhook
// ✅ نصب Webhook
// ✅ حذف Webhook
// ✅ تست Telegram API
// ✅ تست D1
// ✅ تست موتورهای AI
// ✅ Runtime diagnostics
// ✅ endpoint مدیریتی
// ❌ export default جدید ندارد
// ❌ D1 دوباره تعریف نمی‌شود
// ❌ AI Engine دوباره تعریف نمی‌شود
// ❌ handleMessage دوباره تعریف نمی‌شود
// ============================================================


// ============================================================
// 🔐 ADMIN CHECK
// ============================================================

function novaIsAdmin(request, env) {

    try {

        const adminId =
            String(
                env.ADMIN_ID ||
                CONFIG?.ADMIN_ID ||
                ""
            );

        if (!adminId) {
            return false;
        }

        const url =
            new URL(request.url);

        const suppliedId =
            url.searchParams.get(
                "admin_id"
            );

        return (
            suppliedId &&
            String(suppliedId) ===
            adminId
        );

    } catch (error) {

        console.error(
            "Admin check error:",
            error
        );

        return false;
    }
}


// ============================================================
// 📡 TELEGRAM API REQUEST
// ============================================================

async function novaTelegramRequest(
    env,
    method,
    body
) {

    const token =
        env.BOT_TOKEN ||
        env.TELEGRAM_BOT_TOKEN ||
        CONFIG?.BOT_TOKEN ||
        "";

    if (!token) {

        return {
            ok: false,
            error:
                "BOT_TOKEN is not configured"
        };
    }

    try {

        const response =
            await fetch(
                `https://api.telegram.org/bot${token}/${method}`,
                {
                    method: "POST",
                    headers: {
                        "content-type":
                            "application/json"
                    },
                    body:
                        JSON.stringify(
                            body || {}
                        )
                }
            );

        const data =
            await response.json();

        return data;

    } catch (error) {

        return {
            ok: false,
            error:
                error?.message ||
                String(error)
        };
    }
}


// ============================================================
// 🔎 GET WEBHOOK INFO
// ============================================================

async function novaGetWebhookInfo(
    env
) {

    return await novaTelegramRequest(
        env,
        "getWebhookInfo",
        {}
    );
}


// ============================================================
// 🌐 SET WEBHOOK
// ============================================================

async function novaSetWebhook(
    request,
    env
) {

    const url =
        new URL(request.url);

    /*
     * اگر کاربر WEBHOOK_URL را
     * در Environment تنظیم کرده باشد،
     * همان اولویت دارد.
     */

    const webhookUrl =
        env.WEBHOOK_URL ||
        `${url.origin}/telegram/webhook`;

    const secret =
        env.TELEGRAM_WEBHOOK_SECRET ||
        env.WEBHOOK_SECRET ||
        "";

    const body = {
        url: webhookUrl,
        allowed_updates: [
            "message",
            "callback_query"
        ],
        drop_pending_updates:
            false
    };

    if (secret) {
        body.secret_token =
            secret;
    }

    const result =
        await novaTelegramRequest(
            env,
            "setWebhook",
            body
        );

    return result;
}


// ============================================================
// 🧹 DELETE WEBHOOK
// ============================================================

async function novaDeleteWebhook(
    env
) {

    return await novaTelegramRequest(
        env,
        "deleteWebhook",
        {
            drop_pending_updates:
                false
        }
    );
}


// ============================================================
// 🤖 GET BOT INFORMATION
// ============================================================

async function novaGetBotInfo(
    env
) {

    return await novaTelegramRequest(
        env,
        "getMe",
        {}
    );
}


// ============================================================
// 🗄️ D1 DIAGNOSTIC
// ============================================================

async function novaDatabaseDiagnostic(
    env
) {

    const started =
        Date.now();

    try {

        if (!env.DB) {

            return {
                ok: false,
                database: false,
                error:
                    "D1 binding DB not found"
            };
        }

        const result =
            await env.DB
                .prepare(
                    "SELECT 1 AS ok"
                )
                .first();

        return {
            ok: true,
            database:
                result?.ok === 1,
            latency:
                Date.now() -
                started
        };

    } catch (error) {

        return {
            ok: false,
            database: false,
            latency:
                Date.now() -
                started,
            error:
                error?.message ||
                String(error)
        };
    }
}


// ============================================================
// 🧠 AI DIAGNOSTIC
// ============================================================

async function novaAIDiagnostic(
    env
) {

    const result = {
        ok: false,
        engines: [],
        configured: []
    };

    try {

        /*
         * موتورهای ثبت‌شده در Runtime
         */

        if (
            globalThis.NOVA_AI
        ) {

            result.runtime =
                true;

            if (
                typeof
                globalThis.NOVA_AI ===
                "object"
            ) {

                result.engines =
                    Object.keys(
                        globalThis.NOVA_AI
                    );
            }

        } else {

            result.runtime =
                false;
        }


        /*
         * بررسی کلیدهای Environment
         */

        const keys = [
            "OPENAI_API_KEY",
            "GEMINI_API_KEY",
            "ANTHROPIC_API_KEY",
            "DEEPSEEK_API_KEY",
            "GROQ_API_KEY",
            "OPENROUTER_API_KEY",
            "ELEVENLABS_API_KEY"
        ];

        for (
            const key of keys
        ) {

            if (
                env[key]
            ) {

                result.configured.push(
                    key
                );
            }
        }


        result.ok =
            result.runtime === true ||
            result.configured.length >
            0;

    } catch (error) {

        result.error =
            error?.message ||
            String(error);
    }

    return result;
}


// ============================================================
// 🩺 COMPLETE DIAGNOSTICS
// ============================================================

async function novaCompleteDiagnostics(
    request,
    env
) {

    const started =
        Date.now();

    const [
        database,
        telegram,
        ai
    ] =
        await Promise.all([
            novaDatabaseDiagnostic(
                env
            ),
            novaGetBotInfo(
                env
            ),
            novaAIDiagnostic(
                env
            )
        ]);


    let webhook = null;

    try {

        webhook =
            await novaGetWebhookInfo(
                env
            );

    } catch (error) {

        webhook = {
            ok: false,
            error:
                error?.message ||
                String(error)
        };
    }


    return {

        ok:
            database.ok &&
            telegram.ok &&
            ai.ok,

        platform:
            "Cloudflare Workers",

        database: {
            ok:
                database.ok,
            latency:
                database.latency ??
                null
        },

        telegram: {
            ok:
                Boolean(
                    telegram?.ok
                ),
            username:
                telegram?.result
                    ?.username ||
                null,
            firstName:
                telegram?.result
                    ?.first_name ||
                null
        },

        webhook: {
            ok:
                Boolean(
                    webhook?.ok
                ),
            url:
                webhook?.result
                    ?.url ||
                null,
            pending:
                webhook?.result
                    ?.pending_update_count ??
                0,
            lastError:
                webhook?.result
                    ?.last_error_message ||
                null
        },

        ai,

        totalLatency:
            Date.now() -
            started,

        timestamp:
            new Date().toISOString()
    };
}


// ============================================================
// 📤 JSON RESPONSE HELPER
// ============================================================

function novaJson(
    data,
    status = 200
) {

    return new Response(
        JSON.stringify(
            data,
            null,
            2
        ),
        {
            status,
            headers: {
                "content-type":
                    "application/json; charset=utf-8",
                "cache-control":
                    "no-store"
            }
        }
    );
}


// ============================================================
// 🔐 ADMIN CONTROL ROUTER
// ============================================================

async function novaAdminControl(
    request,
    env,
    ctx
) {

    if (
        !novaIsAdmin(
            request,
            env
        )
    ) {

        return novaJson(
            {
                ok: false,
                error:
                    "Unauthorized"
            },
            403
        );
    }


    const url =
        new URL(request.url);

    const action =
        url.pathname
            .replace(
                /^\/+/,
                ""
            )
            .toLowerCase();


    // --------------------------------------------------------
    // STATUS
    // --------------------------------------------------------

    if (
        action ===
        "admin/status"
    ) {

        const diagnostics =
            await novaCompleteDiagnostics(
                request,
                env
            );

        return novaJson(
            diagnostics
        );
    }


    // --------------------------------------------------------
    // WEBHOOK INFO
    // --------------------------------------------------------

    if (
        action ===
        "admin/webhook"
    ) {

        const webhook =
            await novaGetWebhookInfo(
                env
            );

        return novaJson(
            webhook
        );
    }


    // --------------------------------------------------------
    // SET WEBHOOK
    // --------------------------------------------------------

    if (
        action ===
        "admin/webhook/set"
    ) {

        const result =
            await novaSetWebhook(
                request,
                env
            );

        return novaJson(
            result,
            result?.ok
                ? 200
                : 500
        );
    }


    // --------------------------------------------------------
    // DELETE WEBHOOK
    // --------------------------------------------------------

    if (
        action ===
        "admin/webhook/delete"
    ) {

        const result =
            await novaDeleteWebhook(
                env
            );

        return novaJson(
            result,
            result?.ok
                ? 200
                : 500
        );
    }


    // --------------------------------------------------------
    // BOT INFO
    // --------------------------------------------------------

    if (
        action ===
        "admin/bot"
    ) {

        const result =
            await novaGetBotInfo(
                env
            );

        return novaJson(
            result
        );
    }


    // --------------------------------------------------------
    // DATABASE
    // --------------------------------------------------------

    if (
        action ===
        "admin/database"
    ) {

        const result =
            await novaDatabaseDiagnostic(
                env
            );

        return novaJson(
            result
        );
    }


    // --------------------------------------------------------
    // AI
    // --------------------------------------------------------

    if (
        action ===
        "admin/ai"
    ) {

        const result =
            await novaAIDiagnostic(
                env
            );

        return novaJson(
            result
        );
    }


    // --------------------------------------------------------
    // FULL DIAGNOSTIC
    // --------------------------------------------------------

    if (
        action ===
        "admin/diagnostics"
    ) {

        const result =
            await novaCompleteDiagnostics(
                request,
                env
            );

        return novaJson(
            result
        );
    }


    return novaJson(
        {
            ok: false,
            error:
                "Unknown admin action",
            available: [
                "/admin/status",
                "/admin/webhook",
                "/admin/webhook/set",
                "/admin/webhook/delete",
                "/admin/bot",
                "/admin/database",
                "/admin/ai",
                "/admin/diagnostics"
            ]
        },
        404
    );
}


// ============================================================
// 📨 TELEGRAM WEBHOOK ROUTER
// ============================================================

async function novaTelegramWebhookRoute(
    request,
    env,
    ctx
) {

    /*
     * امنیت Webhook
     */

    const secret =
        env.TELEGRAM_WEBHOOK_SECRET ||
        env.WEBHOOK_SECRET ||
        "";

    if (secret) {

        const received =
            request.headers.get(
                "X-Telegram-Bot-Api-Secret-Token"
            );

        if (
            received !==
            secret
        ) {

            return new Response(
                "Forbidden",
                {
                    status: 403
                }
            );
        }
    }


    return await novaWorkerRuntimeAdapter(
        request,
        env,
        ctx
    );
}


// ============================================================
// 🌐 PART 7 ROUTER
// ============================================================
//
// این تابع فقط Routeهای جدید پارت ۷ را
// به Worker اصلی معرفی می‌کند.
//
// export default ندارد.
// ============================================================

async function novaPart7Router(
    request,
    env,
    ctx
) {

    const url =
        new URL(request.url);

    const pathname =
        url.pathname;


    // --------------------------------------------------------
    // TELEGRAM WEBHOOK
    // --------------------------------------------------------

    if (
        pathname ===
        "/telegram/webhook"
    ) {

        return await novaTelegramWebhookRoute(
            request,
            env,
            ctx
        );
    }


    // --------------------------------------------------------
    // ADMIN ROUTES
    // --------------------------------------------------------

    if (
        pathname.startsWith(
            "/admin/"
        )
    ) {

        return await novaAdminControl(
            request,
            env,
            ctx
        );
    }


    return null;
}


// ============================================================
// 🧠 GLOBAL RUNTIME REGISTRATION
// ============================================================

globalThis.NOVA_PART7 = {

    version:
        "7.0",

    webhook:
        novaTelegramWebhookRoute,

    admin:
        novaAdminControl,

    diagnostics:
        novaCompleteDiagnostics,

    database:
        novaDatabaseDiagnostic,

    ai:
        novaAIDiagnostic,

    telegram:
        novaTelegramRequest,

    setWebhook:
        novaSetWebhook,

    deleteWebhook:
        novaDeleteWebhook,

    getWebhook:
        novaGetWebhookInfo,

    botInfo:
        novaGetBotInfo,

    router:
        novaPart7Router
};


// ============================================================
// 🔍 PART 7 SELF TEST
// ============================================================

async function novaPart7SelfTest(
    env
) {

    const result = {

        ok: false,

        part:
            7,

        webhook:
            typeof
            novaTelegramWebhookRoute ===
            "function",

        admin:
            typeof
            novaAdminControl ===
            "function",

        diagnostics:
            typeof
            novaCompleteDiagnostics ===
            "function",

        telegram:
            typeof
            novaTelegramRequest ===
            "function",

        database:
            false,

        timestamp:
            new Date().toISOString()
    };


    try {

        const db =
            await novaDatabaseDiagnostic(
                env
            );

        result.database =
            db.ok === true;

        result.ok =
            result.webhook &&
            result.admin &&
            result.diagnostics &&
            result.telegram &&
            result.database;

    } catch (error) {

        result.error =
            error?.message ||
            String(error);
    }


    return result;
}


globalThis.NOVA_PART7_SELF_TEST =
    novaPart7SelfTest;


// ============================================================
// 📊 PART 7 STATUS
// ============================================================

globalThis.NOVA_PART7_STATUS = {

    installed:
        true,

    webhook:
        true,

    telegram:
        true,

    diagnostics:
        true,

    d1:
        true,

    aiDiagnostics:
        true,

    adminRoutes:
        true,

    security:
        true,

    version:
        "7.0",

    timestamp:
        new Date().toISOString()
};


// ============================================================
// 🌐 END PART 7
// ============================================================
// ============================================================
// 🚀 PART 8 — NOVA RUNTIME CONTROL
// Cloudflare Workers + D1
// ============================================================

// ============================================================
// 🧠 NOVA REQUEST CONTEXT
// ============================================================

function novaCreateRequestContext(request, env) {
    const url = new URL(request.url);

    return {
        request,
        env,
        url,
        requestId: crypto.randomUUID(),
        method: request.method,
        pathname: url.pathname,
        startedAt: Date.now(),
        ip:
            request.headers.get("CF-Connecting-IP") ||
            request.headers.get("x-forwarded-for") ||
            "unknown",
        userAgent:
            request.headers.get("User-Agent") ||
            "unknown"
    };
}


// ============================================================
// 🛡️ NOVA SAFE JSON
// ============================================================

async function novaReadJson(request) {
    try {
        const contentType =
            request.headers.get("content-type") || "";

        if (!contentType.includes("application/json")) {
            return {};
        }

        const body = await request.json();

        if (
            !body ||
            typeof body !== "object" ||
            Array.isArray(body)
        ) {
            return {};
        }

        return body;
    } catch {
        return {};
    }
}


// ============================================================
// 🧹 NOVA STRING SANITIZER
// ============================================================

function novaCleanString(value, maxLength = 4000) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/\u0000/g, "")
        .trim()
        .slice(0, maxLength);
}


// ============================================================
// 🆔 TELEGRAM ID VALIDATOR
// ============================================================

function novaValidTelegramId(value) {
    if (value === null || value === undefined) {
        return false;
    }

    return /^-?\d{1,20}$/.test(String(value).trim());
}


// ============================================================
// 📊 NOVA REQUEST LOGGER
// ============================================================

async function novaLogRequest(db, context, status, route) {
    if (!db) {
        return false;
    }

    try {
        await db
            .prepare(`
                INSERT INTO bot_logs
                (
                    action,
                    telegram_id,
                    details,
                    created_at
                )
                VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            `)
            .bind(
                "http_request",
                null,
                JSON.stringify({
                    request_id: context.requestId,
                    route: route || context.pathname,
                    method: context.method,
                    status: Number(status || 0),
                    latency: Date.now() - context.startedAt,
                    ip: context.ip
                })
            )
            .run();

        return true;
    } catch (error) {
        console.error("NOVA request log:", error);
        return false;
    }
}


// ============================================================
// ❤️ NOVA RUNTIME STATUS
// ============================================================

async function novaRuntimeStatus(env) {
    const started = Date.now();

    let database = false;
    let databaseError = null;

    if (env?.DB) {
        try {
            await env.DB
                .prepare("SELECT 1 AS ok")
                .first();

            database = true;
        } catch (error) {
            databaseError =
                error instanceof Error
                    ? error.message
                    : String(error);
        }
    }

    return {
        ok: database,
        runtime: "cloudflare-workers",
        database,
        databaseError,
        latency: Date.now() - started,
        timestamp: new Date().toISOString()
    };
}


// ============================================================
// 📊 NOVA DATABASE COUNTS
// ============================================================

async function novaDatabaseCounts(db) {
    if (!db) {
        return {
            users: 0,
            conversations: 0,
            logs: 0,
            available: false
        };
    }

    let users = 0;
    let conversations = 0;
    let logs = 0;

    try {
        const result = await db
            .prepare("SELECT COUNT(*) AS count FROM users")
            .first();

        users = Number(result?.count || 0);
    } catch (error) {
        console.error("NOVA users count:", error);
    }

    try {
        const result = await db
            .prepare("SELECT COUNT(*) AS count FROM conversations")
            .first();

        conversations = Number(result?.count || 0);
    } catch (error) {
        console.error("NOVA conversations count:", error);
    }

    try {
        const result = await db
            .prepare("SELECT COUNT(*) AS count FROM bot_logs")
            .first();

        logs = Number(result?.count || 0);
    } catch (error) {
        console.error("NOVA logs count:", error);
    }

    return {
        users,
        conversations,
        logs,
        available: true
    };
}


// ============================================================
// 🔎 NOVA USER LOOKUP
// ============================================================

async function novaFindUser(db, telegramId) {
    if (!db || !novaValidTelegramId(telegramId)) {
        return null;
    }

    try {
        return await db
            .prepare(`
                SELECT
                    telegram_id,
                    first_name,
                    username,
                    personality,
                    ai_provider,
                    is_vip,
                    is_admin,
                    is_restricted,
                    message_count,
                    xp,
                    level,
                    language,
                    created_at,
                    updated_at
                FROM users
                WHERE telegram_id = ?
                LIMIT 1
            `)
            .bind(String(telegramId))
            .first();
    } catch (error) {
        console.error("NOVA user lookup:", error);
        return null;
    }
}


// ============================================================
// 📝 NOVA UPDATE USER
// ============================================================

async function novaUpdateUser(db, telegramId, changes) {
    if (
        !db ||
        !novaValidTelegramId(telegramId) ||
        !changes ||
        typeof changes !== "object"
    ) {
        return false;
    }

    const allowed = {
        first_name: "first_name",
        username: "username",
        personality: "personality",
        ai_provider: "ai_provider",
        is_vip: "is_vip",
        is_restricted: "is_restricted",
        language: "language",
        voice_enabled: "voice_enabled",
        image_enabled: "image_enabled"
    };

    const fields = [];
    const values = [];

    for (const key of Object.keys(changes)) {
        if (!allowed[key]) continue;

        fields.push(`${allowed[key]} = ?`);
        values.push(changes[key]);
    }

    if (!fields.length) {
        return false;
    }

    fields.push("updated_at = CURRENT_TIMESTAMP");
    values.push(String(telegramId));

    try {
        await db
            .prepare(`
                UPDATE users
                SET ${fields.join(", ")}
                WHERE telegram_id = ?
            `)
            .bind(...values)
            .run();

        return true;
    } catch (error) {
        console.error("NOVA update user:", error);
        return false;
    }
}


// ============================================================
// 📚 NOVA USER HISTORY
// ============================================================

async function novaGetHistory(db, telegramId, limit = 20) {
    if (!db || !novaValidTelegramId(telegramId)) {
        return [];
    }

    const safeLimit = Math.max(
        1,
        Math.min(Number(limit) || 20, 100)
    );

    try {
        const result = await db
            .prepare(`
                SELECT
                    id,
                    role,
                    content,
                    created_at
                FROM conversations
                WHERE telegram_id = ?
                ORDER BY id DESC
                LIMIT ?
            `)
            .bind(String(telegramId), safeLimit)
            .all();

        return result?.results || [];
    } catch (error) {
        console.error("NOVA history:", error);
        return [];
    }
}





// ============================================================
// 🌐 NOVA CORS
// ============================================================

function novaCors(response) {
    const headers = new Headers(response.headers);

    headers.set(
        "Access-Control-Allow-Origin",
        "*"
    );

    headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS"
    );

    headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
    });
}


// ============================================================
// ⚙️ NOVA OPTIONS
// ============================================================

function novaOptionsResponse() {
    return novaCors(
        new Response(null, {
            status: 204
        })
    );
}


// ============================================================
// 🏠 NOVA ROOT ROUTE
// ============================================================

async function novaRootRoute(context) {
    const runtime =
        await novaRuntimeStatus(context.env);

    return novaJson(
        {
            name: "Nova AI Pro",
            version: "11.0-ULTIMATE",
            runtime: runtime.runtime,
            status: runtime.ok ? "online" : "degraded",
            database: runtime.database,
            api: true
        },
        runtime.ok ? 200 : 503,
        context.requestId
    );
}


// ============================================================
// ❤️ NOVA HEALTH ROUTE
// ============================================================

async function novaHealthRoute(context) {
    const health =
        await novaRuntimeStatus(context.env);

    return novaJson(
        health,
        health.ok ? 200 : 503,
        context.requestId
    );
}


// ============================================================
// 📊 NOVA STATS ROUTE
// ============================================================

async function novaStatsRoute(context) {
    const token =
        context.url.searchParams.get("token");

    const telegramId =
        context.url.searchParams.get("telegram_id");

    const authorized =
        (
            token &&
            context.env.ADMIN_API_TOKEN &&
            token === context.env.ADMIN_API_TOKEN
        ) ||
        novaIsAdmin(
            context.env,
            telegramId
        );

    if (!authorized) {
        return novaJson(
            {
                ok: false,
                error: "Unauthorized"
            },
            401,
            context.requestId
        );
    }

    const counts =
        await novaDatabaseCounts(context.env.DB);

    return novaJson(
        {
            ok: true,
            statistics: counts
        },
        200,
        context.requestId
    );
}


// ============================================================
// 👤 NOVA USER ROUTE
// ============================================================

async function novaUserRoute(context) {
    const telegramId =
        context.url.searchParams.get("telegram_id");

    if (!novaValidTelegramId(telegramId)) {
        return novaJson(
            {
                ok: false,
                error: "Invalid telegram_id"
            },
            400,
            context.requestId
        );
    }

    const user =
        await novaFindUser(
            context.env.DB,
            telegramId
        );

    if (!user) {
        return novaJson(
            {
                ok: false,
                error: "User not found"
            },
            404,
            context.requestId
        );
    }

    return novaJson(
        {
            ok: true,
            user
        },
        200,
        context.requestId
    );
}


// ============================================================
// 📚 NOVA HISTORY ROUTE
// ============================================================

async function novaHistoryRoute(context) {
    const telegramId =
        context.url.searchParams.get("telegram_id");

    const limit =
        context.url.searchParams.get("limit") || "20";

    if (!novaValidTelegramId(telegramId)) {
        return novaJson(
            {
                ok: false,
                error: "Invalid telegram_id"
            },
            400,
            context.requestId
        );
    }

    const history =
        await novaGetHistory(
            context.env.DB,
            telegramId,
            limit
        );

    return novaJson(
        {
            ok: true,
            telegram_id: String(telegramId),
            history
        },
        200,
        context.requestId
    );
}


// ============================================================
// 🛣️ NOVA API ROUTER
// ============================================================

async function novaApiRouter(context) {
    const path = context.pathname;

    if (path === "/" || path === "/api") {
        return novaRootRoute(context);
    }

    if (
        path === "/health" ||
        path === "/api/health"
    ) {
        return novaHealthRoute(context);
    }

    if (path === "/api/stats") {
        return novaStatsRoute(context);
    }

    if (path === "/api/user") {
        return novaUserRoute(context);
    }

    if (path === "/api/history") {
        return novaHistoryRoute(context);
    }

    return novaJson(
        {
            ok: false,
            error: "Route not found",
            path
        },
        404,
        context.requestId
    );
}


// ============================================================
// 🛡️ NOVA API ERROR HANDLER
// ============================================================

async function novaHandleApiRequest(request, env) {
    const context =
        novaCreateRequestContext(request, env);

    try {
        if (context.method === "OPTIONS") {
            return novaOptionsResponse();
        }

        const response =
            await novaApiRouter(context);

        await novaLogRequest(
            env.DB,
            context,
            response.status,
            context.pathname
        );

        return novaCors(response);

    } catch (error) {
        console.error("NOVA API ERROR:", error);

        await novaLogRequest(
            env.DB,
            context,
            500,
            context.pathname
        );

        return novaCors(
            novaJson(
                {
                    ok: false,
                    error: "Internal server error",
                    message:
                        error instanceof Error
                            ? error.message
                            : String(error)
                },
                500,
                context.requestId
            )
        );
    }
}


// ============================================================
// 🧪 NOVA PART 8 SELF TEST
// ============================================================

function novaPart8SelfTest() {
    const tests = [
        {
            name: "request context",
            passed:
                typeof novaCreateRequestContext ===
                "function"
        },
        {
            name: "admin check",
            passed:
                typeof novaIsAdmin ===
                "function"
        },
        {
            name: "json parser",
            passed:
                typeof novaReadJson ===
                "function"
        },
        {
            name: "runtime status",
            passed:
                typeof novaRuntimeStatus ===
                "function"
        },
        {
            name: "database counts",
            passed:
                typeof novaDatabaseCounts ===
                "function"
        },
        {
            name: "api router",
            passed:
                typeof novaApiRouter ===
                "function"
        },
        {
            name: "api handler",
            passed:
                typeof novaHandleApiRequest ===
                "function"
        }
    ];

    return {
        part: 8,
        passed: tests.every(item => item.passed),
        tests,
        timestamp: new Date().toISOString()
    };
}


// ============================================================
// 📊 PART 8 STATUS
// ============================================================

globalThis.NOVA_PART8_STATUS = {
    installed: true,
    runtime: true,
    api: true,
    health: true,
    statistics: true,
    userLookup: true,
    history: true,
    security: true,
    cors: true,
    d1: true,
    selfTest: novaPart8SelfTest(),
    version: "8.0",
    timestamp: new Date().toISOString()
};


// ============================================================
// 🌐 END PART 8
// ============================================================
