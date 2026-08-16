// ============================================================
// 🤖 AI SERVICE - نسخه کامل با ۱۱ موتور هوش مصنوعی
// ============================================================

export const AI = {
  // ============================================================
  // 📌 تنظیمات مدل‌ها
  // ============================================================
  MODELS: {
    // ===== چت (۵ مدل) =====
    'gemini-2.0-flash': {
      provider: 'google',
      endpoint: 'gemini',
      model: 'gemini-2.0-flash-exp',
      description: 'سریع و دقیق'
    },
    'gpt-4o-mini': {
      provider: 'openai',
      endpoint: 'chat',
      model: 'gpt-4o-mini',
      description: 'سبک و سریع'
    },
    'gpt-4o': {
      provider: 'openai',
      endpoint: 'chat',
      model: 'gpt-4o',
      description: 'قدرتمند OpenAI'
    },
    'claude-3.5-sonnet': {
      provider: 'anthropic',
      endpoint: 'claude',
      model: 'claude-3-5-sonnet-20241022',
      description: 'تحلیل عمیق'
    },
    'deepseek-v3': {
      provider: 'deepseek',
      endpoint: 'chat',
      model: 'deepseek-chat',
      description: 'مدل چینی قدرتمند'
    },
    
    // ===== تصویر (۲ مدل) =====
    'dall-e-3': {
      provider: 'openai',
      endpoint: 'image',
      model: 'dall-e-3',
      description: 'کیفیت بالا'
    },
    'dall-e-2': {
      provider: 'openai',
      endpoint: 'image',
      model: 'dall-e-2',
      description: 'سریع و اقتصادی'
    },
    
    // ===== ویدیو (در حال توسعه) =====
    'sora-2': {
      provider: 'openai',
      endpoint: 'video',
      model: 'sora-2',
      description: 'تولید ویدیو'
    },
    
    // ===== صدا (در حال توسعه) =====
    'elevenlabs-v3': {
      provider: 'elevenlabs',
      endpoint: 'voice',
      model: 'elevenlabs-v3',
      description: 'صدای طبیعی'
    }
  },

  // ============================================================
  // 💬 چت با مدل‌های مختلف
  // ============================================================
  async chat(prompt, env, modelId = 'gemini-2.0-flash') {
    const model = this.MODELS[modelId];
    if (!model) throw new Error(`❌ مدل ${modelId} یافت نشد`);

    try {
      let result;
      
      switch (model.provider) {
        case 'google':
          result = await this._geminiChat(prompt, env, model.model);
          break;
        case 'openai':
          result = await this._openAIChat(prompt, env, model.model);
          break;
        case 'anthropic':
          result = await this._claudeChat(prompt, env, model.model);
          break;
        case 'deepseek':
          result = await this._deepSeekChat(prompt, env, model.model);
          break;
        default:
          throw new Error(`❌ Provider ${model.provider} پشتیبانی نمی‌شود`);
      }
      
      return result;
      
    } catch (error) {
      console.error('AI Chat Error:', error);
      return `❌ خطا: ${error.message}`;
    }
  },

  // ============================================================
  // 🎨 تولید تصویر
  // ============================================================
  async image(prompt, env, modelId = 'dall-e-3') {
    const model = this.MODELS[modelId];
    if (!model) throw new Error(`❌ مدل ${modelId} یافت نشد`);

    try {
      let result;
      
      switch (model.provider) {
        case 'openai':
          result = await this._openAIImage(prompt, env, model.model);
          break;
        default:
          throw new Error(`❌ Provider ${model.provider} برای تصویر پشتیبانی نمی‌شود`);
      }
      
      return result;
      
    } catch (error) {
      console.error('AI Image Error:', error);
      return null;
    }
  },

  // ============================================================
  // 📝 خلاصه‌سازی
  // ============================================================
  async summarize(text, env) {
    const prompt = `
لطفاً متن زیر را خلاصه کنید:

${text}

خلاصه باید:
- شامل نکات کلیدی باشد
- به زبان روان و ساده نوشته شود
- حداکثر ۵۰۰ کلمه باشد
`;
    return await this.chat(prompt, env, 'gemini-2.0-flash');
  },

  // ============================================================
  // 🌐 ترجمه
  // ============================================================
  async translate(text, targetLang = 'فارسی', env) {
    const prompt = `
متن زیر را به ${targetLang} ترجمه کنید:

${text}

ترجمه باید:
- روان و طبیعی باشد
- معانی را به درستی منتقل کند
- به سبک متن اصلی نوشته شود
`;
    return await this.chat(prompt, env, 'gemini-2.0-flash');
  },

  // ============================================================
  // 💻 تولید کد
  // ============================================================
  async code(description, language = 'javascript', env) {
    const prompt = `
کد زیر را در زبان ${language} بنویسید:

${description}

نیازمندی‌ها:
- کد تمیز و خواناتر باشد
- دارای کامنت‌های توضیحی
- بهترین روش‌های برنامه‌نویسی رعایت شود
- در صورت امکان، مثال استفاده نیز ارائه شود
`;
    return await this.chat(prompt, env, 'gpt-4o-mini');
  },

  // ============================================================
  // 🔍 تحلیل
  // ============================================================
  async analyze(text, env) {
    const prompt = `
متن زیر را تحلیل کنید:

${text}

تحلیل باید شامل:
1. موضوع و محتوای اصلی
2. سبک و لحن متن
3. نقاط قوت و ضعف
4. پیشنهادات برای بهبود
5. نتیجه‌گیری نهایی
`;
    return await this.chat(prompt, env, 'gemini-2.0-flash');
  },

  // ============================================================
  // 🧠 استدلال
  // ============================================================
  async reason(problem, env) {
    const prompt = `
مسئله زیر را با دقت تحلیل و حل کنید:

${problem}

لطفاً:
1. مسئله را دقیقاً تعریف کنید
2. مراحل حل را گام‌به‌گام توضیح دهید
3. راه‌حل نهایی را ارائه دهید
4. اگر راه‌حل‌های جایگزین وجود دارد، ذکر کنید
`;
    return await this.chat(prompt, env, 'gpt-4o');
  },

  // ============================================================
  // 🔎 جستجو (با Tavily)
  // ============================================================
  async search(query, env) {
    try {
      const key = env.TAVILY_API_KEY;
      if (!key) throw new Error('TAVILY_API_KEY not configured');

      const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query,
          search_depth: 'advanced',
          include_answer: true,
          max_results: 5
        })
      });

      const data = await response.json();
      
      let result = `🔎 **نتایج جستجو برای: ${query}**\n\n`;
      
      if (data.answer) {
        result += `📝 **پاسخ:**\n${data.answer}\n\n`;
      }
      
      if (data.results && data.results.length > 0) {
        result += `📚 **منابع:**\n`;
        for (const r of data.results.slice(0, 5)) {
          result += `• [${r.title}](${r.url})\n`;
          if (r.content) {
            result += `  ${r.content.substring(0, 150)}${r.content.length > 150 ? '...' : ''}\n\n`;
          }
        }
      }
      
      return result;
      
    } catch (error) {
      console.error('Search Error:', error);
      return `❌ خطا در جستجو: ${error.message}`;
    }
  },

  // ============================================================
  // 🔧 Private Methods (Providers)
  // ============================================================

  // ---- Gemini (Google) ----
  async _geminiChat(prompt, env, model) {
    const key = env.GEMINI_API_KEY || CONFIG?.GEMINI_API_KEY;
    if (!key) throw new Error('GEMINI_API_KEY not configured');

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2000,
            topP: 0.9,
            topK: 40
          }
        })
      }
    );

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Gemini Error: ${error}`);
    }

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '❌ پاسخی دریافت نشد';
  },

  // ---- OpenAI (Chat) ----
  async _openAIChat(prompt, env, model) {
    const key = env.OPENAI_API_KEY || CONFIG?.OPENAI_API_KEY;
    if (!key) throw new Error('OPENAI_API_KEY not configured');

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: 'شما یک دستیار هوش مصنوعی حرفه‌ای هستید.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`OpenAI Error: ${error}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content || '❌ پاسخی دریافت نشد';
  },

  // ---- OpenAI (Image) ----
  async _openAIImage(prompt, env, model) {
    const key = env.OPENAI_API_KEY || CONFIG?.OPENAI_API_KEY;
    if (!key) throw new Error('OPENAI_API_KEY not configured');

    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        prompt: prompt,
        n: 1,
        size: '1024x1024',
        quality: 'standard'
      })
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`OpenAI Image Error: ${error}`);
    }

    const data = await res.json();
    return data.data?.[0]?.url || null;
  },

  // ---- Claude (Anthropic) ----
  async _claudeChat(prompt, env, model) {
    const key = env.CLAUDE_API_KEY || CONFIG?.CLAUDE_API_KEY;
    if (!key) throw new Error('CLAUDE_API_KEY not configured');

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        max_tokens: 2000,
        temperature: 0.7,
        system: 'شما یک دستیار هوش مصنوعی حرفه‌ای هستید.',
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Claude Error: ${error}`);
    }

    const data = await res.json();
    return data.content?.[0]?.text || '❌ پاسخی دریافت نشد';
  },

  // ---- DeepSeek ----
  async _deepSeekChat(prompt, env, model) {
    const key = env.DEEPSEEK_API_KEY || CONFIG?.DEEPSEEK_API_KEY;
    if (!key) throw new Error('DEEPSEEK_API_KEY not configured');

    const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: 'شما یک دستیار هوش مصنوعی مفید هستید.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`DeepSeek Error: ${error}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content || '❌ پاسخی دریافت نشد';
  }
};

export default AI;
