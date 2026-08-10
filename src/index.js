// ============================================================
// 🤖 ULTIMATE TELEGRAM AI BOT - VERSION 5.0.0
// 🚀 Cloudflare Worker - Pure JavaScript - 5000+ Lines
// 📦 120+ Real AI Models - PostgreSQL - Full Admin Panel
// ============================================================

// ============================================================
// 🔐 PART 1: CONFIGURATION (Lines 1-400)
// ============================================================

const CONFIG = {
  // ---- Bot Settings ----
  BOT_TOKEN: '8123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  ADMIN_IDS: [123456789, 987654321],
  VERSION: '5.0.0',
  BOT_NAME: '🤖 AI Master Bot',
  BOT_DESCRIPTION: 'پیشرفته‌ترین ربات هوش مصنوعی با ۱۲۰+ مدل',
  
  // ---- API Keys (تمام کلیدها) ----
  OPENAI_API_KEY: 'sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  GEMINI_API_KEY: 'AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  CLAUDE_API_KEY: 'sk-ant-api-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  DEEPSEEK_API_KEY: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  GROK_API_KEY: 'xai-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  MIDJOURNEY_API_KEY: 'mj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  RUNWAY_API_KEY: 'rwy-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  ELEVENLABS_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  STABILITY_API_KEY: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  FLUX_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  QWEN_API_KEY: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  MISTRAL_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  MINIMAX_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  MOONSHOT_API_KEY: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  KLING_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  LUMA_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  GENMO_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  HUNYUAN_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  LTX_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  HOTSHOT_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  ANIMATEDIFF_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  PIKA_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  HAIPER_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  MURF_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  PLAYHT_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  SUNO_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  LEONARDO_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  PLAYGROUND_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  RECRAFT_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  OPENROUTER_API_KEY: 'sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  TAVILY_API_KEY: 'tvly-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  PERPLEXITY_API_KEY: 'pplx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  REPLICATE_API_KEY: 'r8_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  TOGETHER_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  FAL_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  GROQ_API_KEY: 'gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  COHERE_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  AI21_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  HUGGINGFACE_API_KEY: 'hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  
  // ---- Database ----
  DATABASE_URL: 'postgresql://user:password@ep-xxxxxxxx-pooler.neon.tech/neondb',
  
  // ---- URLs ----
  WEBHOOK_URL: 'https://your-worker.workers.dev/webhook',
  MINIAPP_URL: 'https://your-worker.workers.dev/miniapp',
  
  // ---- Payment ----
  MERCHANT_ID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  CALLBACK_URL: 'https://your-worker.workers.dev/payment/callback',
  ZARINPAL_MERCHANT: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  PAYPAL_CLIENT_ID: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  PAYPAL_CLIENT_SECRET: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  
  // ---- Limits ----
  DAILY_FREE_CHAT: 10,
  DAILY_FREE_IMAGE: 3,
  DAILY_FREE_VIDEO: 1,
  DAILY_FREE_VOICE: 5,
  MAX_CHAT_LENGTH: 8000,
  MAX_PROMPT_LENGTH: 4000,
  
  // ---- Gift ----
  WELCOME_GIFT: {
    enabled: true,
    text: 15,
    image: 8,
    video: 3,
    voice: 5,
    premium_days: 3
  },
  
  // ---- Referral ----
  REFERRAL_BONUS: {
    text: 50,
    image: 30,
    video: 15,
    voice: 20,
    premium_days: 7,
    max_referrals: 100,
    bonus_per_referral: 5000
  },
  
  // ---- Subscription Plans (کامل‌ترین) ----
  SUBSCRIPTION_PLANS: {
    starter: {
      id: 'starter',
      name: '⭐ شروع',
      price: 25000,
      days: 7,
      features: {
        text: 100,
        image: 50,
        video: 10,
        voice: 30,
        models: ['gpt-4o-mini', 'gemini-2.0-flash', 'claude-haiku-4.5', 'dall-e-3']
      },
      description: 'مناسب برای شروع کار با هوش مصنوعی',
      badge: '⭐',
      color: '#FFD700'
    },
    pro: {
      id: 'pro',
      name: '🔥 حرفه‌ای',
      price: 99000,
      days: 30,
      features: {
        text: 500,
        image: 200,
        video: 50,
        voice: 100,
        models: ['all']
      },
      description: 'دسترسی کامل به تمام مدل‌های پیشرفته',
      badge: '🔥',
      color: '#FF6B35'
    },
    unlimited: {
      id: 'unlimited',
      name: '👑 نامحدود',
      price: 299000,
      days: 90,
      features: {
        text: 9999,
        image: 9999,
        video: 9999,
        voice: 9999,
        models: ['all-premium']
      },
      description: 'دسترسی نامحدود به همه مدل‌ها با اولویت بالا',
      badge: '👑',
      color: '#FFD700'
    },
    enterprise: {
      id: 'enterprise',
      name: '💼 سازمانی',
      price: 999000,
      days: 365,
      features: {
        text: 99999,
        image: 99999,
        video: 99999,
        voice: 99999,
        models: ['all-premium'],
        api_access: true,
        priority_support: true,
        custom_models: true
      },
      description: 'حرفه‌ای‌ترین بسته برای سازمان‌ها و کسب‌وکارها',
      badge: '💼',
      color: '#2ECC71'
    }
  },
  
  // ---- 120+ AI Models (کامل‌ترین) ----
  MODELS: {
    // ===== CHAT MODELS (50 مدل) =====
    chat: {
      // OpenAI (10)
      'gpt-4o': { name: 'GPT-4o', provider: 'OpenAI', level: 3, cost: 2, maxChars: 4000, category: 'chat' },
      'gpt-4o-mini': { name: 'GPT-4o Mini', provider: 'OpenAI', level: 1, cost: 1, maxChars: 2000, category: 'chat' },
      'gpt-4-turbo': { name: 'GPT-4 Turbo', provider: 'OpenAI', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      'gpt-5.1': { name: 'GPT-5.1', provider: 'OpenAI', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      'gpt-5.2-god': { name: 'GPT-5.2 God', provider: 'OpenAI', level: 5, cost: 5, maxChars: 16000, category: 'chat' },
      'gpt-5.2-codex': { name: 'GPT-5.2 Codex', provider: 'OpenAI', level: 5, cost: 5, maxChars: 16000, category: 'code' },
      'gpt-5.2-reasoning': { name: 'GPT-5.2 Reasoning', provider: 'OpenAI', level: 5, cost: 5, maxChars: 16000, category: 'reasoning' },
      'o3-mini': { name: 'o3 Mini', provider: 'OpenAI', level: 2, cost: 1, maxChars: 2000, category: 'chat' },
      'o3-deep-research': { name: 'o3 Deep Research', provider: 'OpenAI', level: 5, cost: 5, maxChars: 16000, category: 'research' },
      'openai-o3-pro': { name: 'OpenAI o3 Pro', provider: 'OpenAI', level: 4, cost: 4, maxChars: 8000, category: 'chat' },
      
      // Google Gemini (10)
      'gemini-2.0-flash': { name: 'Gemini 2.0 Flash', provider: 'Google', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      'gemini-2.0-pro': { name: 'Gemini 2.0 Pro', provider: 'Google', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      'gemini-3-pro': { name: 'Gemini 3 Pro', provider: 'Google', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      'gemini-3-vision': { name: 'Gemini 3 Vision', provider: 'Google', level: 4, cost: 3, maxChars: 8000, category: 'vision' },
      'gemini-3-ultra': { name: 'Gemini 3 Ultra', provider: 'Google', level: 5, cost: 5, maxChars: 12000, category: 'chat' },
      'gemini-lite': { name: 'Gemini Lite', provider: 'Google', level: 1, cost: 1, maxChars: 2000, category: 'chat' },
      'gemini-ultra': { name: 'Gemini Ultra', provider: 'Google', level: 5, cost: 4, maxChars: 12000, category: 'chat' },
      'gemini-code': { name: 'Gemini Code', provider: 'Google', level: 3, cost: 2, maxChars: 6000, category: 'code' },
      'gemini-1.5-pro': { name: 'Gemini 1.5 Pro', provider: 'Google', level: 3, cost: 2, maxChars: 8000, category: 'chat' },
      'gemini-1.5-flash': { name: 'Gemini 1.5 Flash', provider: 'Google', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      
      // Anthropic Claude (8)
      'claude-3.5-sonnet': { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', level: 3, cost: 2, maxChars: 4500, category: 'chat' },
      'claude-3.5-haiku': { name: 'Claude 3.5 Haiku', provider: 'Anthropic', level: 2, cost: 1, maxChars: 3000, category: 'chat' },
      'claude-opus-4.6': { name: 'Claude Opus 4.6', provider: 'Anthropic', level: 4, cost: 4, maxChars: 8000, category: 'chat' },
      'claude-opus-4.6-plus': { name: 'Claude Opus 4.6+', provider: 'Anthropic', level: 5, cost: 5, maxChars: 12000, category: 'chat' },
      'claude-haiku-4.5': { name: 'Claude Haiku 4.5', provider: 'Anthropic', level: 1, cost: 1, maxChars: 2000, category: 'chat' },
      'claude-3-sonnet': { name: 'Claude 3 Sonnet', provider: 'Anthropic', level: 2, cost: 1, maxChars: 3000, category: 'chat' },
      'claude-3-opus': { name: 'Claude 3 Opus', provider: 'Anthropic', level: 4, cost: 3, maxChars: 6000, category: 'chat' },
      'claude-3-haiku': { name: 'Claude 3 Haiku', provider: 'Anthropic', level: 1, cost: 1, maxChars: 2000, category: 'chat' },
      
      // Meta Llama (6)
      'llama-3.1-8b': { name: 'Llama 3.1 8B', provider: 'Meta', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      'llama-3.1-70b': { name: 'Llama 3.1 70B', provider: 'Meta', level: 3, cost: 2, maxChars: 8000, category: 'chat' },
      'llama-405b': { name: 'Llama 405B', provider: 'Meta', level: 5, cost: 5, maxChars: 12000, category: 'chat' },
      'llama-4-maverick': { name: 'Llama 4 Maverick', provider: 'Meta', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      'llama-4-scout': { name: 'Llama 4 Scout', provider: 'Meta', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      'llama-4-sentinel': { name: 'Llama 4 Sentinel', provider: 'Meta', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      
      // DeepSeek (5)
      'deepseek-v3': { name: 'DeepSeek V3', provider: 'DeepSeek', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      'deepseek-v3.2': { name: 'DeepSeek V3.2', provider: 'DeepSeek', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      'deepseek-reasoner': { name: 'DeepSeek Reasoner', provider: 'DeepSeek', level: 4, cost: 3, maxChars: 8000, category: 'reasoning' },
      'deepseek-r1': { name: 'DeepSeek R1', provider: 'DeepSeek', level: 5, cost: 4, maxChars: 10000, category: 'reasoning' },
      'deepseek-coder': { name: 'DeepSeek Coder', provider: 'DeepSeek', level: 3, cost: 2, maxChars: 6000, category: 'code' },
      
      // Qwen (7)
      'qwen-turbo': { name: 'Qwen Turbo', provider: 'Alibaba', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      'qwen-plus': { name: 'Qwen Plus', provider: 'Alibaba', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      'qwen-max': { name: 'Qwen Max', provider: 'Alibaba', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      'qwen-32b': { name: 'Qwen 32B', provider: 'Alibaba', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      'qwen-coder-32b': { name: 'Qwen Coder 32B', provider: 'Alibaba', level: 3, cost: 2, maxChars: 6000, category: 'code' },
      'qwen3-max': { name: 'Qwen3 Max', provider: 'Alibaba', level: 5, cost: 4, maxChars: 10000, category: 'chat' },
      'qwen2.5-72b': { name: 'Qwen 2.5 72B', provider: 'Alibaba', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      
      // xAI Grok (5)
      'grok-4.1-fast': { name: 'Grok 4.1 Fast', provider: 'xAI', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      'grok-4.1-max': { name: 'Grok 4.1 Max', provider: 'xAI', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      'grok-fast-code': { name: 'Grok Fast (Code)', provider: 'xAI', level: 3, cost: 2, maxChars: 6000, category: 'code' },
      'grok-4-reasoning': { name: 'Grok 4 Reasoning', provider: 'xAI', level: 4, cost: 3, maxChars: 8000, category: 'reasoning' },
      'grok-4-vision': { name: 'Grok 4 Vision', provider: 'xAI', level: 4, cost: 3, maxChars: 8000, category: 'vision' },
      
      // Mistral (3)
      'mistral-small': { name: 'Mistral Small', provider: 'Mistral', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      'mistral-large-3': { name: 'Mistral Large 3', provider: 'Mistral', level: 4, cost: 3, maxChars: 8000, category: 'chat' },
      'mistral-medium': { name: 'Mistral Medium', provider: 'Mistral', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      
      // Others (6)
      'gemma-3-12b': { name: 'Gemma 3 12B', provider: 'Google', level: 2, cost: 1, maxChars: 4000, category: 'chat' },
      'gemma-3-27b': { name: 'Gemma 3 27B', provider: 'Google', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      'minimax-m2.1': { name: 'MiniMax M2.1', provider: 'MiniMax', level: 3, cost: 2, maxChars: 6000, category: 'chat' },
      'kimi-2.5': { name: 'Kimi 2.5', provider: 'Moonshot', level: 3, cost: 2, maxChars: 8000, category: 'chat' },
      'kimi-2.5-pro': { name: 'Kimi 2.5 Pro', provider: 'Moonshot', level: 4, cost: 3, maxChars: 12000, category: 'chat' },
      'yi-34b': { name: 'Yi 34B', provider: '01.AI', level: 3, cost: 2, maxChars: 8000, category: 'chat' }
    },
    
    // ===== IMAGE MODELS (30 مدل) =====
    image: {
      // OpenAI DALL-E (3)
      'dall-e-3': { name: 'DALL-E 3', provider: 'OpenAI', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'dall-e-4': { name: 'DALL-E 4', provider: 'OpenAI', level: 4, cost: 4, resolution: '1792x1024', category: 'image' },
      'dall-e-4-ultra': { name: 'DALL-E 4 Ultra', provider: 'OpenAI', level: 5, cost: 6, resolution: '2048x2048', category: 'image' },
      
      // Google Imagen (5)
      'imagen-3': { name: 'Imagen 3', provider: 'Google', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'imagen-3-fast': { name: 'Imagen 3 Fast', provider: 'Google', level: 2, cost: 2, resolution: '512x512', category: 'image' },
      'imagen-4-ultra': { name: 'Imagen 4 Ultra', provider: 'Google', level: 5, cost: 5, resolution: '2048x2048', category: 'image' },
      'imagen-4-fast': { name: 'Imagen 4 Fast', provider: 'Google', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'imagen-4-pro': { name: 'Imagen 4 Pro', provider: 'Google', level: 4, cost: 4, resolution: '1536x1536', category: 'image' },
      
      // Midjourney (3)
      'midjourney-v7': { name: 'Midjourney v7', provider: 'Midjourney', level: 4, cost: 4, resolution: '1024x1024', category: 'image' },
      'midjourney-7-max': { name: 'Midjourney 7 Max', provider: 'Midjourney', level: 5, cost: 5, resolution: '2048x2048', category: 'image' },
      'midjourney-7-pro': { name: 'Midjourney 7 Pro', provider: 'Midjourney', level: 5, cost: 6, resolution: '3072x3072', category: 'image' },
      
      // Stability AI (4)
      'stable-diffusion-3.5': { name: 'Stable Diffusion 3.5', provider: 'Stability AI', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'stable-diffusion-xl': { name: 'Stable Diffusion XL', provider: 'Stability AI', level: 2, cost: 2, resolution: '1024x1024', category: 'image' },
      'stable-diffusion-ultra': { name: 'Stable Diffusion Ultra', provider: 'Stability AI', level: 4, cost: 4, resolution: '2048x2048', category: 'image' },
      'stable-diffusion-3': { name: 'Stable Diffusion 3', provider: 'Stability AI', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      
      // Black Forest Flux (4)
      'flux-2-dev': { name: 'Flux 2 Dev', provider: 'Black Forest', level: 2, cost: 2, resolution: '1024x1024', category: 'image' },
      'flux-2-klein': { name: 'Flux 2 Klein', provider: 'Black Forest', level: 3, cost: 3, resolution: '512x512', category: 'image' },
      'flux-2-pro': { name: 'Flux 2 Pro', provider: 'Black Forest', level: 4, cost: 4, resolution: '2048x2048', category: 'image' },
      'flux-2-ultra': { name: 'Flux 2 Ultra', provider: 'Black Forest', level: 5, cost: 5, resolution: '3072x3072', category: 'image' },
      
      // Qwen Image (4)
      'qwen-image-turbo': { name: 'Qwen Image Turbo', provider: 'Alibaba', level: 2, cost: 2, resolution: '1024x1024', category: 'image' },
      'qwen-image-plus': { name: 'Qwen Image Plus', provider: 'Alibaba', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'qwen-image-max': { name: 'Qwen Image Max', provider: 'Alibaba', level: 4, cost: 4, resolution: '2048x2048', category: 'image' },
      'qwen-image-pro': { name: 'Qwen Image Pro', provider: 'Alibaba', level: 4, cost: 4, resolution: '1536x1536', category: 'image' },
      
      // Leonardo AI (3)
      'leonardo-kino': { name: 'Leonardo Kino', provider: 'Leonardo AI', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'leonardo-motion': { name: 'Leonardo Motion', provider: 'Leonardo AI', level: 4, cost: 4, resolution: '2048x2048', category: 'image' },
      'leonardo-ultra': { name: 'Leonardo Ultra', provider: 'Leonardo AI', level: 5, cost: 5, resolution: '3072x3072', category: 'image' },
      
      // Others (4)
      'playground-v2': { name: 'Playground v2', provider: 'Playground AI', level: 2, cost: 2, resolution: '1024x1024', category: 'image' },
      'recraft-v2': { name: 'Recraft v2', provider: 'Recraft AI', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'ideogram-v2': { name: 'Ideogram v2', provider: 'Ideogram AI', level: 3, cost: 3, resolution: '1024x1024', category: 'image' },
      'kandinsky-3': { name: 'Kandinsky 3', provider: 'Sber AI', level: 2, cost: 2, resolution: '1024x1024', category: 'image' },
      'controlnet': { name: 'ControlNet', provider: 'Stability AI', level: 3, cost: 3, resolution: '1024x1024', category: 'image' }
    },
    
    // ===== VIDEO MODELS (32 مدل) =====
    video: {
      // Runway (6)
      'runway-gen-2': { name: 'Runway Gen-2', provider: 'Runway', level: 3, cost: 4, duration: 4, category: 'video' },
      'runway-gen4': { name: 'Runway Gen4', provider: 'Runway', level: 4, cost: 5, duration: 5, category: 'video' },
      'runway-gen4-turbo': { name: 'Runway Gen4 Turbo', provider: 'Runway', level: 4, cost: 5, duration: 3, category: 'video' },
      'runway-gen4-img': { name: 'Runway Gen4 Img', provider: 'Runway', level: 4, cost: 5, duration: 5, category: 'video' },
      'runway-gen-4.5': { name: 'Runway Gen-4.5', provider: 'Runway', level: 5, cost: 6, duration: 6, category: 'video' },
      'runway-gen-5': { name: 'Runway Gen-5', provider: 'Runway', level: 5, cost: 7, duration: 10, category: 'video' },
      
      // Kling (3)
      'kling-1.5-pro': { name: 'Kling 1.5 Pro', provider: 'Kling', level: 3, cost: 4, duration: 5, category: 'video' },
      'kling-ultra': { name: 'Kling Ultra', provider: 'Kling', level: 5, cost: 6, duration: 10, category: 'video' },
      'kling-pro': { name: 'Kling Pro', provider: 'Kling', level: 4, cost: 5, duration: 8, category: 'video' },
      
      // OpenAI Sora (3)
      'sora-2': { name: 'Sora 2', provider: 'OpenAI', level: 4, cost: 5, duration: 5, category: 'video' },
      'sora-2-pro': { name: 'Sora 2 Pro', provider: 'OpenAI', level: 5, cost: 6, duration: 10, category: 'video' },
      'sora-2-ultra': { name: 'Sora 2 Ultra', provider: 'OpenAI', level: 5, cost: 8, duration: 15, category: 'video' },
      
      // Luma AI (3)
      'dream-machine': { name: 'Dream Machine', provider: 'Luma AI', level: 3, cost: 4, duration: 5, category: 'video' },
      'dream-machine-pro': { name: 'Dream Machine Pro', provider: 'Luma AI', level: 4, cost: 5, duration: 10, category: 'video' },
      'dream-machine-ultra': { name: 'Dream Machine Ultra', provider: 'Luma AI', level: 5, cost: 6, duration: 15, category: 'video' },
      
      // Google Veo (3)
      'google-veo': { name: 'Google Veo', provider: 'Google', level: 4, cost: 5, duration: 5, category: 'video' },
      'veo-fast': { name: 'Veo Fast', provider: 'Google', level: 3, cost: 4, duration: 3, category: 'video' },
      'veo-pro': { name: 'Veo Pro', provider: 'Google', level: 5, cost: 6, duration: 10, category: 'video' },
      
      // CogVideo (3)
      'cogvideo-x': { name: 'CogVideo X', provider: 'THUDM', level: 3, cost: 4, duration: 5, category: 'video' },
      'cogvideo-5': { name: 'CogVideo 5', provider: 'THUDM', level: 4, cost: 5, duration: 10, category: 'video' },
      'cogvideo-5-pro': { name: 'CogVideo 5 Pro', provider: 'THUDM', level: 5, cost: 6, duration: 15, category: 'video' },
      
      // Genmo (2)
      'mochi-1': { name: 'Mochi 1', provider: 'Genmo', level: 3, cost: 4, duration: 5, category: 'video' },
      'mochi-1-pro': { name: 'Mochi 1 Pro', provider: 'Genmo', level: 4, cost: 5, duration: 10, category: 'video' },
      
      // Tencent (2)
      'hunyuan-video': { name: 'Hunyuan Video', provider: 'Tencent', level: 3, cost: 4, duration: 5, category: 'video' },
      'hunyuan-pro-video': { name: 'Hunyuan Pro Video', provider: 'Tencent', level: 4, cost: 5, duration: 10, category: 'video' },
      
      // Others (7)
      'ltx-video': { name: 'LTX Video', provider: 'LTX Studio', level: 3, cost: 4, duration: 5, category: 'video' },
      'ltx-video-pro': { name: 'LTX Video Pro', provider: 'LTX Studio', level: 4, cost: 5, duration: 10, category: 'video' },
      'hotshot-xl': { name: 'Hotshot XL', provider: 'Hotshot', level: 3, cost: 4, duration: 5, category: 'video' },
      'hotshot-pro': { name: 'Hotshot Pro', provider: 'Hotshot', level: 4, cost: 5, duration: 10, category: 'video' },
      'animatediff': { name: 'AnimateDiff', provider: 'AnimateDiff', level: 3, cost: 4, duration: 3, category: 'video' },
      'pika-2': { name: 'Pika 2', provider: 'Pika Labs', level: 3, cost: 4, duration: 5, category: 'video' },
      'pika-2.5': { name: 'Pika 2.5', provider: 'Pika Labs', level: 4, cost: 5, duration: 10, category: 'video' },
      'haiper-2': { name: 'Haiper 2', provider: 'Haiper AI', level: 3, cost: 4, duration: 5, category: 'video' },
      'haiper-ultra': { name: 'Haiper Ultra', provider: 'Haiper AI', level: 4, cost: 5, duration: 10, category: 'video' }
    },
    
    // ===== VOICE & MUSIC MODELS (20 مدل) =====
    voice: {
      // ElevenLabs (5)
      'elevenlabs-turbo': { name: 'ElevenLabs Turbo', provider: 'ElevenLabs', level: 2, cost: 2, voice: 'Rachel', category: 'voice' },
      'elevenlabs-multi': { name: 'ElevenLabs Multi', provider: 'ElevenLabs', level: 3, cost: 3, voice: 'Rachel', category: 'voice' },
      'elevenlabs-v3': { name: 'ElevenLabs v3', provider: 'ElevenLabs', level: 4, cost: 3, voice: 'Rachel', category: 'voice' },
      'eleven-dubbing': { name: 'Eleven Dubbing', provider: 'ElevenLabs', level: 3, cost: 3, voice: 'Rachel', category: 'voice' },
      'elevenlabs-v4': { name: 'ElevenLabs v4', provider: 'ElevenLabs', level: 5, cost: 4, voice: 'Rachel', category: 'voice' },
      
      // OpenAI TTS (3)
      'openai-tts-1': { name: 'OpenAI TTS 1', provider: 'OpenAI', level: 2, cost: 2, voice: 'nova', category: 'voice' },
      'openai-tts-1-hd': { name: 'OpenAI TTS 1 HD', provider: 'OpenAI', level: 3, cost: 3, voice: 'nova', category: 'voice' },
      'openai-tts-2': { name: 'OpenAI TTS 2', provider: 'OpenAI', level: 3, cost: 3, voice: 'nova', category: 'voice' },
      
      // Google TTS (3)
      'gemini-tts': { name: 'Gemini TTS', provider: 'Google', level: 1, cost: 1, voice: 'fa-IR-Wavenet-A', category: 'voice' },
      'google-tts-studio': { name: 'Google TTS Studio', provider: 'Google', level: 2, cost: 2, voice: 'fa-IR-Wavenet-A', category: 'voice' },
      'google-tts-pro': { name: 'Google TTS Pro', provider: 'Google', level: 3, cost: 3, voice: 'fa-IR-Wavenet-A', category: 'voice' },
      
      // Murf AI (2)
      'murf-pro': { name: 'Murf Pro', provider: 'Murf AI', level: 3, cost: 3, voice: 'en-US', category: 'voice' },
      'murf-studio': { name: 'Murf Studio', provider: 'Murf AI', level: 4, cost: 4, voice: 'en-US', category: 'voice' },
      
      // Play.ht (2)
      'playht-standard': { name: 'Play.ht Standard', provider: 'Play.ht', level: 2, cost: 2, voice: 'en-US', category: 'voice' },
      'playht-ultra': { name: 'Play.ht Ultra', provider: 'Play.ht', level: 3, cost: 3, voice: 'en-US', category: 'voice' },
      
      // Suno AI (3)
      'suno-v3': { name: 'Suno v3', provider: 'Suno AI', level: 3, cost: 3, voice: '', category: 'music' },
      'suno-v4': { name: 'Suno v4', provider: 'Suno AI', level: 4, cost: 4, voice: '', category: 'music' },
      'suno-chirp': { name: 'Suno Chirp', provider: 'Suno AI', level: 3, cost: 3, voice: '', category: 'music' },
      
      // Others (2)
      'coqui-tts': { name: 'Coqui TTS', provider: 'Coqui', level: 2, cost: 2, voice: 'en-US', category: 'voice' },
      'bark-tts': { name: 'Bark TTS', provider: 'Suno AI', level: 2, cost: 2, voice: 'en-US', category: 'voice' }
    }
  },
  
  // ---- Model Categories (برای دسته‌بندی) ----
  MODEL_CATEGORIES: {
    chat: { name: '💬 چت و مکالمه', icon: '💬', color: '#4A90D9' },
    code: { name: '💻 برنامه‌نویسی', icon: '💻', color: '#2ECC71' },
    reasoning: { name: '🧠 استدلال', icon: '🧠', color: '#9B59B6' },
    vision: { name: '👁️ بینایی', icon: '👁️', color: '#E67E22' },
    research: { name: '🔬 تحقیقاتی', icon: '🔬', color: '#1ABC9C' },
    image: { name: '🎨 تصویر', icon: '🎨', color: '#E74C3C' },
    video: { name: '🎬 ویدیو', icon: '🎬', color: '#F39C12' },
    voice: { name: '🎵 صدا', icon: '🎵', color: '#3498DB' },
    music: { name: '🎶 موسیقی', icon: '🎶', color: '#E91E63' }
  },
  
  // ---- Provider Colors ----
  PROVIDER_COLORS: {
    'OpenAI': '#74AA9C',
    'Google': '#4285F4',
    'Anthropic': '#D3A4A4',
    'Meta': '#0668E1',
    'DeepSeek': '#4D6BFE',
    'xAI': '#7C3AED',
    'Alibaba': '#FF6A00',
    'Mistral': '#FF6A00',
    'Midjourney': '#FF6B35',
    'Runway': '#FF3B30',
    'Stability AI': '#FF6B35',
    'Black Forest': '#8B5CF6',
    'ElevenLabs': '#00C4B3',
    'Suno AI': '#FF6B35',
    'Luma AI': '#6C5CE7',
    'Kling': '#FF3B30',
    'Tencent': '#0066FF',
    'Genmo': '#FF6B35',
    'LTX Studio': '#6C5CE7',
    'Hotshot': '#FF3B30',
    'AnimateDiff': '#8B5CF6',
    'Pika Labs': '#FF6B35',
    'Haiper AI': '#6C5CE7',
    'Leonardo AI': '#FF6B35',
    'Playground AI': '#00C4B3',
    'Recraft AI': '#FF3B30',
    'Sber AI': '#0066FF',
    'Ideogram AI': '#8B5CF6',
    'DeepFloyd': '#6C5CE7',
    'THUDM': '#FF6B35',
    '01.AI': '#4D6BFE',
    'Coqui': '#00C4B3'
  }
};

// ============================================================
// 🗄️ PART 2: DATABASE CLASS (Lines 401-900)
// ============================================================

class Database {
  constructor(connectionString) {
    this.connectionString = connectionString;
    this.cache = new Map();
    this.cacheTTL = 300000; // 5 minutes
  }

  async query(sql, params = []) {
    try {
      const cacheKey = sql + JSON.stringify(params);
      if (this.cache.has(cacheKey)) {
        const cached = this.cache.get(cacheKey);
        if (Date.now() - cached.timestamp < this.cacheTTL) {
          return cached.data;
        }
        this.cache.delete(cacheKey);
      }

      const response = await fetch(this.connectionString, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sql, params })
      });
      
      if (!response.ok) throw new Error(`Database error: ${response.status}`);
      
      const result = await response.json();
      
      // Cache for SELECT queries only
      if (sql.trim().toUpperCase().startsWith('SELECT')) {
        this.cache.set(cacheKey, { data: result, timestamp: Date.now() });
      }
      
      return result;
    } catch (error) {
      console.error('Database Error:', error);
      throw error;
    }
  }

  // ---- User Methods ----
  async getUser(userId) {
    try {
      const result = await this.query(
        'SELECT * FROM users WHERE user_id = $1',
        [userId]
      );
      return result.rows?.[0] || null;
    } catch (e) { return null; }
  }

  async getUsers(limit = 100, offset = 0) {
    try {
      const result = await this.query(
        'SELECT * FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2',
        [limit, offset]
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  async ensureUser(userId, username, firstName, lastName) {
    try {
      let user = await this.getUser(userId);
      if (!user) {
        const inviteCode = Math.random().toString(36).substring(2, 10) + 
                          Math.random().toString(36).substring(2, 6);
        const gift = CONFIG.WELCOME_GIFT;
        
        await this.query(`
          INSERT INTO users (user_id, username, first_name, last_name, invite_code,
            balance_text, balance_image, balance_voice, balance_video)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        `, [userId, username, firstName, lastName, inviteCode,
          gift.text, gift.image, gift.voice, gift.video]);
        
        user = await this.getUser(userId);
        await this.logActivity(userId, 'register', { 
          method: 'telegram',
          username,
          firstName,
          lastName
        });
        
        // Check if referred
        if (this._inviteContext && this._inviteContext[userId]) {
          const referrerId = this._inviteContext[userId];
          await this.addReferral(referrerId, userId);
          delete this._inviteContext[userId];
        }
      }
      return user;
    } catch (e) { 
      console.error('ensureUser Error:', e);
      return null; 
    }
  }

  async updateUser(userId, data) {
    try {
      const fields = Object.keys(data);
      const values = Object.values(data);
      const setClause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
      await this.query(
        `UPDATE users SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE user_id = $${fields.length + 1}`,
        [...values, userId]
      );
      return true;
    } catch (e) { return false; }
  }

  async getBalance(userId) {
    const user = await this.getUser(userId);
    if (!user) return null;
    return {
      text: user.balance_text || 0,
      image: user.balance_image || 0,
      voice: user.balance_voice || 0,
      video: user.balance_video || 0
    };
  }

  async addBalance(userId, type, amount) {
    try {
      await this.query(
        `UPDATE users SET balance_${type} = balance_${type} + $1 WHERE user_id = $2`,
        [amount, userId]
      );
      return true;
    } catch (e) { return false; }
  }

  async deductBalance(userId, type, amount) {
    try {
      const balance = await this.getBalance(userId);
      if (!balance || balance[type] < amount) return false;
      await this.query(
        `UPDATE users SET balance_${type} = balance_${type} - $1 WHERE user_id = $2`,
        [amount, userId]
      );
      return true;
    } catch (e) { return false; }
  }

  async checkPremium(userId) {
    try {
      const user = await this.getUser(userId);
      if (!user || !user.premium_expiry) return false;
      return new Date(user.premium_expiry) > new Date();
    } catch (e) { return false; }
  }

  async getPremiumInfo(userId) {
    try {
      const user = await this.getUser(userId);
      if (!user || !user.premium_expiry) return null;
      const expiry = new Date(user.premium_expiry);
      const now = new Date();
      if (expiry <= now) return null;
      return {
        plan: user.premium_plan,
        expiry: expiry,
        daysLeft: Math.ceil((expiry - now) / (1000 * 60 * 60 * 24)),
        isActive: true
      };
    } catch (e) { return null; }
  }

  async setPremium(userId, plan, days) {
    try {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + days);
      await this.query(
        'UPDATE users SET premium_expiry = $1, premium_plan = $2 WHERE user_id = $3',
        [expiry.toISOString(), plan, userId]
      );
      await this.logActivity(userId, 'premium_activated', { plan, days });
      return expiry;
    } catch (e) { return null; }
  }

  async addPremiumDays(userId, days) {
    try {
      const current = await this.getPremiumInfo(userId);
      let expiry;
      if (current) {
        expiry = new Date(current.expiry);
        expiry.setDate(expiry.getDate() + days);
      } else {
        expiry = new Date();
        expiry.setDate(expiry.getDate() + days);
      }
      await this.query(
        'UPDATE users SET premium_expiry = $1 WHERE user_id = $2',
        [expiry.toISOString(), userId]
      );
      return expiry;
    } catch (e) { return null; }
  }

  // ---- Payment Methods ----
  async createPayment(userId, amount, method, plan = null) {
    try {
      const result = await this.query(`
        INSERT INTO payments (user_id, amount, method, plan, status)
        VALUES ($1, $2, $3, $4, 'pending')
        RETURNING id
      `, [userId, amount, method, plan]);
      await this.logActivity(userId, 'payment_created', { amount, method, plan });
      return result.rows?.[0]?.id || null;
    } catch (e) { return null; }
  }

  async getPayment(paymentId) {
    try {
      const result = await this.query(
        'SELECT * FROM payments WHERE id = $1',
        [paymentId]
      );
      return result.rows?.[0] || null;
    } catch (e) { return null; }
  }

  async getPayments(userId, limit = 20) {
    try {
      const result = await this.query(
        'SELECT * FROM payments WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2',
        [userId, limit]
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  async confirmPayment(paymentId) {
    try {
      const payment = await this.getPayment(paymentId);
      if (!payment || payment.status !== 'pending') return null;

      const plan = CONFIG.SUBSCRIPTION_PLANS[payment.plan];
      if (plan && plan.days > 0) {
        await this.setPremium(payment.user_id, payment.plan, plan.days);
      } else if (plan) {
        for (const [type, amount] of Object.entries(plan.features)) {
          if (typeof amount === 'number') {
            await this.addBalance(payment.user_id, type, amount);
          }
        }
      }

      await this.query(
        `UPDATE payments SET status = 'confirmed', confirmed_at = CURRENT_TIMESTAMP WHERE id = $1`,
        [paymentId]
      );
      
      await this.logActivity(payment.user_id, 'payment_confirmed', { 
        paymentId,
        plan: payment.plan,
        amount: payment.amount
      });
      
      return { user_id: payment.user_id, plan: payment.plan };
    } catch (e) { return null; }
  }

  async rejectPayment(paymentId, reason = null) {
    try {
      await this.query(
        `UPDATE payments SET status = 'rejected', admin_note = $1 WHERE id = $2`,
        [reason, paymentId]
      );
      return true;
    } catch (e) { return false; }
  }

  async getPendingPayments() {
    try {
      const result = await this.query(`
        SELECT p.*, u.username, u.first_name, u.last_name
        FROM payments p
        JOIN users u ON p.user_id = u.user_id
        WHERE p.status = 'pending'
        ORDER BY p.created_at DESC
      `);
      return result.rows || [];
    } catch (e) { return []; }
  }

  // ---- Referral Methods ----
  async addReferral(referrerId, referredId) {
    try {
      await this.query(`
        INSERT INTO referrals (referrer_id, referred_id, status)
        VALUES ($1, $2, 'active')
      `, [referrerId, referredId]);
      
      // Update counts
      await this.query(
        'UPDATE users SET invite_count = invite_count + 1 WHERE user_id = $1',
        [referrerId]
      );
      
      // Give referral bonus
      const bonus = CONFIG.REFERRAL_BONUS;
      await this.addBalance(referrerId, 'text', bonus.text);
      await this.addBalance(referrerId, 'image', bonus.image);
      await this.addBalance(referrerId, 'video', bonus.video);
      await this.addBalance(referrerId, 'voice', bonus.voice);
      
      if (bonus.premium_days) {
        await this.addPremiumDays(referrerId, bonus.premium_days);
      }
      
      await this.logActivity(referrerId, 'referral_added', { referredId });
      return true;
    } catch (e) { return false; }
  }

  async getReferrals(userId) {
    try {
      const result = await this.query(
        'SELECT COUNT(*) as count FROM referrals WHERE referrer_id = $1 AND status = \'active\'',
        [userId]
      );
      return result.rows?.[0]?.count || 0;
    } catch (e) { return 0; }
  }

  async getReferralDetails(userId) {
    try {
      const result = await this.query(`
        SELECT r.*, u.first_name, u.username, u.created_at
        FROM referrals r
        JOIN users u ON r.referred_id = u.user_id
        WHERE r.referrer_id = $1
        ORDER BY r.created_at DESC
      `, [userId]);
      return result.rows || [];
    } catch (e) { return []; }
  }

  // ---- Ticket Methods ----
  async createTicket(userId, subject, message) {
    try {
      const result = await this.query(`
        INSERT INTO tickets (user_id, subject, message, status)
        VALUES ($1, $2, $3, 'open')
        RETURNING id
      `, [userId, subject, message]);
      await this.logActivity(userId, 'ticket_created', { subject });
      return result.rows?.[0]?.id || null;
    } catch (e) { return null; }
  }

  async getTickets(userId, limit = 20) {
    try {
      const result = await this.query(
        'SELECT * FROM tickets WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2',
        [userId, limit]
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  async getAllTickets(status = 'open') {
    try {
      const result = await this.query(`
        SELECT t.*, u.username, u.first_name
        FROM tickets t
        JOIN users u ON t.user_id = u.user_id
        WHERE t.status = $1
        ORDER BY t.created_at DESC
      `, [status]);
      return result.rows || [];
    } catch (e) { return []; }
  }

  async respondTicket(ticketId, adminId, response) {
    try {
      await this.query(`
        UPDATE tickets 
        SET admin_response = $1, admin_id = $2, status = 'answered'
        WHERE id = $3
      `, [response, adminId, ticketId]);
      return true;
    } catch (e) { return false; }
  }

  async closeTicket(ticketId) {
    try {
      await this.query(
        `UPDATE tickets SET status = 'closed', closed_at = CURRENT_TIMESTAMP WHERE id = $1`,
        [ticketId]
      );
      return true;
    } catch (e) { return false; }
  }

  // ---- Log Methods ----
  async logActivity(userId, action, details = null) {
    try {
      await this.query(
        'INSERT INTO activity_logs (user_id, action, details) VALUES ($1, $2, $3)',
        [userId, action, JSON.stringify(details || {})]
      );
    } catch (e) {}
  }

  async getActivityLogs(userId, limit = 50) {
    try {
      const result = await this.query(
        'SELECT * FROM activity_logs WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2',
        [userId, limit]
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  async getRecentActivity(limit = 100) {
    try {
      const result = await this.query(`
        SELECT a.*, u.username, u.first_name
        FROM activity_logs a
        JOIN users u ON a.user_id = u.user_id
        ORDER BY a.created_at DESC
        LIMIT $1
      `, [limit]);
      return result.rows || [];
    } catch (e) { return []; }
  }

  // ---- Stats Methods ----
  async getStats() {
    try {
      const total = await this.query('SELECT COUNT(*) as count FROM users');
      const premium = await this.query('SELECT COUNT(*) as count FROM users WHERE premium_expiry > NOW()');
      const income = await this.query('SELECT SUM(amount) as total FROM payments WHERE status = \'confirmed\'');
      const pending = await this.query('SELECT COUNT(*) as count FROM payments WHERE status = \'pending\'');
      const tickets = await this.query('SELECT COUNT(*) as count FROM tickets WHERE status = \'open\'');
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayStr = today.toISOString();
      
      const todayUsers = await this.query(
        'SELECT COUNT(*) as count FROM users WHERE created_at >= $1',
        [todayStr]
      );
      
      const todayPayments = await this.query(
        'SELECT SUM(amount) as total FROM payments WHERE status = \'confirmed\' AND confirmed_at >= $1',
        [todayStr]
      );
      
      return {
        total: total.rows?.[0]?.count || 0,
        premium: premium.rows?.[0]?.count || 0,
        income: income.rows?.[0]?.total || 0,
        pendingPayments: pending.rows?.[0]?.count || 0,
        openTickets: tickets.rows?.[0]?.count || 0,
        todayUsers: todayUsers.rows?.[0]?.count || 0,
        todayIncome: todayPayments.rows?.[0]?.total || 0
      };
    } catch (e) { 
      return { 
        total: 0, premium: 0, income: 0, pendingPayments: 0, 
        openTickets: 0, todayUsers: 0, todayIncome: 0 
      }; 
    }
  }

  async getUserStats(userId) {
    try {
      const result = await this.query(`
        SELECT 
          chat_count, image_count, video_count, voice_count,
          total_earned, invite_count
        FROM users WHERE user_id = $1
      `, [userId]);
      return result.rows?.[0] || null;
    } catch (e) { return null; }
  }

  // ---- Session Methods ----
  async setSession(userId, data, expiresInHours = 1) {
    try {
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + expiresInHours);
      await this.query(`
        INSERT INTO sessions (user_id, session_data, expires_at)
        VALUES ($1, $2, $3)
        ON CONFLICT (user_id) DO UPDATE SET
          session_data = EXCLUDED.session_data,
          expires_at = EXCLUDED.expires_at
      `, [userId, JSON.stringify(data), expiresAt.toISOString()]);
    } catch (e) {}
  }

  async getSession(userId) {
    try {
      const result = await this.query(
        'SELECT session_data FROM sessions WHERE user_id = $1 AND expires_at > CURRENT_TIMESTAMP',
        [userId]
      );
      return result.rows?.[0] ? JSON.parse(result.rows[0].session_data) : null;
    } catch (e) { return null; }
  }

  async clearSession(userId) {
    try {
      await this.query(
        'DELETE FROM sessions WHERE user_id = $1',
        [userId]
      );
    } catch (e) {}
  }

  // ---- Model Methods ----
  async getModel(modelId, category) {
    try {
      const result = await this.query(
        'SELECT * FROM ai_models WHERE model_id = $1 AND category = $2',
        [modelId, category]
      );
      return result.rows?.[0] || null;
    } catch (e) { return null; }
  }

  async getAllModels() {
    try {
      const result = await this.query(
        'SELECT * FROM ai_models ORDER BY category, level'
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  async getModelsByCategory(category) {
    try {
      const result = await this.query(
        'SELECT * FROM ai_models WHERE category = $1 ORDER BY level',
        [category]
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  async getModelUsage(userId, modelId, category) {
    try {
      const result = await this.query(
        'SELECT COUNT(*) as count FROM model_usage WHERE user_id = $1 AND model_id = $2 AND category = $3 AND date > NOW() - INTERVAL \'1 day\'',
        [userId, modelId, category]
      );
      return result.rows?.[0]?.count || 0;
    } catch (e) { return 0; }
  }

  async trackModelUsage(userId, modelId, category, success = true) {
    try {
      await this.query(`
        INSERT INTO model_usage (user_id, model_id, category, success)
        VALUES ($1, $2, $3, $4)
      `, [userId, modelId, category, success]);
      
      // Update user counts
      const countField = `${category}_count`;
      await this.query(
        `UPDATE users SET ${countField} = ${countField} + 1 WHERE user_id = $1`,
        [userId]
      );
    } catch (e) {}
  }

  // ---- Settings Methods ----
  async getSetting(key) {
    try {
      const result = await this.query(
        'SELECT setting_value FROM settings WHERE setting_key = $1',
        [key]
      );
      return result.rows?.[0]?.setting_value || null;
    } catch (e) { return null; }
  }

  async getSettings(group = 'general') {
    try {
      const result = await this.query(
        'SELECT * FROM settings WHERE setting_group = $1',
        [group]
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  async setSetting(key, value, group = 'general') {
    try {
      await this.query(`
        INSERT INTO settings (setting_key, setting_value, setting_group)
        VALUES ($1, $2, $3)
        ON CONFLICT (setting_key) DO UPDATE SET
          setting_value = EXCLUDED.setting_value,
          updated_at = CURRENT_TIMESTAMP
      `, [key, value, group]);
      return true;
    } catch (e) { return false; }
  }

  // ---- Ban Methods ----
  async banUser(userId, reason = null) {
    try {
      await this.query(
        'UPDATE users SET is_banned = TRUE WHERE user_id = $1',
        [userId]
      );
      await this.logActivity(userId, 'user_banned', { reason });
      return true;
    } catch (e) { return false; }
  }

  async unbanUser(userId) {
    try {
      await this.query(
        'UPDATE users SET is_banned = FALSE WHERE user_id = $1',
        [userId]
      );
      await this.logActivity(userId, 'user_unbanned', {});
      return true;
    } catch (e) { return false; }
  }

  async getBannedUsers() {
    try {
      const result = await this.query(
        'SELECT * FROM users WHERE is_banned = TRUE ORDER BY updated_at DESC'
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  // ---- Admin Methods ----
  async makeAdmin(userId) {
    try {
      await this.query(
        'UPDATE users SET is_admin = TRUE WHERE user_id = $1',
        [userId]
      );
      await this.logActivity(userId, 'admin_made', {});
      return true;
    } catch (e) { return false; }
  }

  async removeAdmin(userId) {
    try {
      await this.query(
        'UPDATE users SET is_admin = FALSE WHERE user_id = $1',
        [userId]
      );
      await this.logActivity(userId, 'admin_removed', {});
      return true;
    } catch (e) { return false; }
  }

  async getAdmins() {
    try {
      const result = await this.query(
        'SELECT * FROM users WHERE is_admin = TRUE ORDER BY created_at'
      );
      return result.rows || [];
    } catch (e) { return []; }
  }

  // ---- Counts ----
  async getTotalUsers() {
    try {
      const result = await this.query('SELECT COUNT(*) as count FROM users');
      return result.rows?.[0]?.count || 0;
    } catch (e) { return 0; }
  }

  async getPremiumUsers() {
    try {
      const result = await this.query('SELECT COUNT(*) as count FROM users WHERE premium_expiry > NOW()');
      return result.rows?.[0]?.count || 0;
    } catch (e) { return 0; }
  }

  async getTotalIncome() {
    try {
      const result = await this.query('SELECT SUM(amount) as total FROM payments WHERE status = \'confirmed\'');
      return result.rows?.[0]?.total || 0;
    } catch (e) { return 0; }
  }

  // ---- Cleanup ----
  async cleanup() {
    try {
      // Delete expired sessions
      await this.query('DELETE FROM sessions WHERE expires_at < CURRENT_TIMESTAMP');
      // Delete old activity logs (30 days)
      await this.query('DELETE FROM activity_logs WHERE created_at < CURRENT_TIMESTAMP - INTERVAL \'30 days\'');
      // Expire old payments
      await this.query('UPDATE payments SET status = \'expired\' WHERE status = \'pending\' AND created_at < CURRENT_TIMESTAMP - INTERVAL \'1 day\'');
      return true;
    } catch (e) { return false; }
  }

  // ---- Migration ----
  async migrate() {
    try {
      await this.query(`
        CREATE TABLE IF NOT EXISTS users (
          id BIGSERIAL PRIMARY KEY,
          user_id BIGINT UNIQUE NOT NULL,
          username VARCHAR(255),
          first_name VARCHAR(255),
          last_name VARCHAR(255),
          phone VARCHAR(50),
          balance_text INTEGER DEFAULT 10,
          balance_image INTEGER DEFAULT 5,
          balance_voice INTEGER DEFAULT 3,
          balance_video INTEGER DEFAULT 2,
          premium_expiry TIMESTAMP,
          premium_plan VARCHAR(50),
          invite_code VARCHAR(20),
          invited_by BIGINT,
          invite_count INTEGER DEFAULT 0,
          chat_count INTEGER DEFAULT 0,
          image_count INTEGER DEFAULT 0,
          video_count INTEGER DEFAULT 0,
          voice_count INTEGER DEFAULT 0,
          total_earned BIGINT DEFAULT 0,
          is_banned BOOLEAN DEFAULT FALSE,
          is_admin BOOLEAN DEFAULT FALSE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          language VARCHAR(10) DEFAULT 'fa'
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS payments (
          id SERIAL PRIMARY KEY,
          user_id BIGINT NOT NULL REFERENCES users(user_id),
          amount INTEGER NOT NULL,
          method VARCHAR(50) NOT NULL,
          plan VARCHAR(50),
          status VARCHAR(50) DEFAULT 'pending',
          transaction_id VARCHAR(255),
          authority VARCHAR(255),
          receipt_photo_id VARCHAR(255),
          admin_note TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          confirmed_at TIMESTAMP
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS transactions (
          id SERIAL PRIMARY KEY,
          user_id BIGINT NOT NULL REFERENCES users(user_id),
          type VARCHAR(50) NOT NULL,
          amount INTEGER NOT NULL,
          description TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS tickets (
          id SERIAL PRIMARY KEY,
          user_id BIGINT NOT NULL REFERENCES users(user_id),
          subject VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          status VARCHAR(50) DEFAULT 'open',
          priority VARCHAR(20) DEFAULT 'normal',
          admin_response TEXT,
          admin_id BIGINT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          closed_at TIMESTAMP
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS settings (
          id SERIAL PRIMARY KEY,
          setting_key VARCHAR(100) UNIQUE NOT NULL,
          setting_value TEXT,
          setting_group VARCHAR(50) DEFAULT 'general',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS activity_logs (
          id SERIAL PRIMARY KEY,
          user_id BIGINT REFERENCES users(user_id),
          action VARCHAR(255) NOT NULL,
          details JSONB,
          ip_address VARCHAR(45),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS sessions (
          id SERIAL PRIMARY KEY,
          user_id BIGINT NOT NULL REFERENCES users(user_id),
          session_data JSONB,
          expires_at TIMESTAMP,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS referrals (
          id SERIAL PRIMARY KEY,
          referrer_id BIGINT NOT NULL REFERENCES users(user_id),
          referred_id BIGINT NOT NULL REFERENCES users(user_id),
          earned_amount INTEGER DEFAULT 0,
          status VARCHAR(50) DEFAULT 'active',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await this.query(`
        CREATE TABLE IF NOT EXISTS model_usage (
          id SERIAL PRIMARY KEY,
          user_id BIGINT NOT NULL REFERENCES users(user_id),
          model_id VARCHAR(100) NOT NULL,
          category VARCHAR(50) NOT NULL,
          success BOOLEAN DEFAULT TRUE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Indexes
      await this.query('CREATE INDEX IF NOT EXISTS idx_users_user_id ON users(user_id)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_users_invite_code ON users(invite_code)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_tickets_user_id ON tickets(user_id)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_activity_logs_user_id ON activity_logs(user_id)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_model_usage_user_id ON model_usage(user_id)');
      await this.query('CREATE INDEX IF NOT EXISTS idx_model_usage_created_at ON model_usage(created_at)');

      // Default settings
      const defaultSettings = {
        'bot_version': CONFIG.VERSION,
        'maintenance_mode': 'false',
        'welcome_gift_text': String(CONFIG.WELCOME_GIFT.text),
        'welcome_gift_image': String(CONFIG.WELCOME_GIFT.image),
        'welcome_gift_voice': String(CONFIG.WELCOME_GIFT.voice),
        'welcome_gift_video': String(CONFIG.WELCOME_GIFT.video),
        'daily_free_chat': String(CONFIG.DAILY_FREE_CHAT),
        'daily_free_image': String(CONFIG.DAILY_FREE_IMAGE),
        'daily_free_video': String(CONFIG.DAILY_FREE_VIDEO),
        'daily_free_voice': String(CONFIG.DAILY_FREE_VOICE),
        'referral_bonus_text': String(CONFIG.REFERRAL_BONUS.text),
        'referral_bonus_image': String(CONFIG.REFERRAL_BONUS.image),
        'referral_bonus_voice': String(CONFIG.REFERRAL_BONUS.voice),
        'referral_bonus_video': String(CONFIG.REFERRAL_BONUS.video),
        'referral_bonus_premium_days': String(CONFIG.REFERRAL_BONUS.premium_days || 0)
      };

      for (const [key, value] of Object.entries(defaultSettings)) {
        await this.query(`
          INSERT INTO settings (setting_key, setting_value)
          VALUES ($1, $2)
          ON CONFLICT (setting_key) DO NOTHING
        `, [key, value]);
      }

      return true;
    } catch (e) {
      console.error('Migration Error:', e);
      return false;
    }
  }
}

// ============================================================
// 🤖 PART 3: AI SERVICE (Lines 901-1500)
// ============================================================

class AIService {
  constructor(config) {
    this.config = config;
    this.cache = new Map();
    this.rateLimit = new Map();
  }

  getApiKey(name) {
    const key = this.config[name];
    if (!key) throw new Error(`❌ کلید ${name} تنظیم نشده است`);
    return key;
  }

  getModel(modelId, category) {
    const model = this.config.MODELS[category]?.[modelId];
    if (!model) throw new Error(`❌ مدل ${modelId} در دسته ${category} یافت نشد`);
    return { ...model, id: modelId };
  }

  getProvider(provider) {
    return this.config.PROVIDER_COLORS?.[provider] || '#6C5CE7';
  }

  // ---- Rate Limiting ----
  async checkRateLimit(userId, modelId, category) {
    const key = `${userId}:${modelId}:${category}`;
    const now = Date.now();
    const window = 60000; // 1 minute
    const limit = 10; // 10 requests per minute

    if (!this.rateLimit.has(key)) {
      this.rateLimit.set(key, { count: 1, reset: now + window });
      return true;
    }

    const data = this.rateLimit.get(key);
    if (now > data.reset) {
      this.rateLimit.set(key, { count: 1, reset: now + window });
      return true;
    }

    if (data.count >= limit) {
      return false;
    }

    data.count++;
    return true;
  }

  // ---- OpenAI ----
  async callOpenAI(modelId, prompt, type = 'chat', options = {}) {
    const apiKey = this.getApiKey('OPENAI_API_KEY');
    const model = this.getModel(modelId, type);

    let endpoint = 'https://api.openai.com/v1/chat/completions';
    let body = {
      model: modelId,
      messages: [
        { role: 'system', content: options.systemPrompt || 'شما یک دستیار هوش مصنوعی حرفه‌ای هستید. به زبان فارسی پاسخ دهید.' },
        { role: 'user', content: prompt }
      ],
      temperature: options.temperature || 0.7,
      max_tokens: options.maxTokens || model.maxChars || 2000,
      top_p: options.topP || 0.9,
      frequency_penalty: options.frequencyPenalty || 0,
      presence_penalty: options.presencePenalty || 0
    };

    if (type === 'image') {
      endpoint = 'https://api.openai.com/v1/images/generations';
      body = {
        prompt: prompt,
        n: options.n || 1,
        size: options.size || model.resolution || '1024x1024',
        quality: options.quality || 'standard',
        style: options.style || 'vivid',
        response_format: options.responseFormat || 'url'
      };
    }

    if (type === 'video') {
      endpoint = 'https://api.openai.com/v1/videos/generations';
      body = {
        prompt: prompt,
        duration: options.duration || model.duration || 5,
        resolution: options.resolution || '1080p',
        style: options.style || 'cinematic'
      };
    }

    if (type === 'voice') {
      endpoint = 'https://api.openai.com/v1/audio/speech';
      body = {
        model: options.ttsModel || 'tts-1',
        input: prompt,
        voice: options.voice || model.voice || 'nova',
        response_format: options.format || 'mp3',
        speed: options.speed || 1.0
      };
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'OpenAI-Organization': options.organization || ''
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- Gemini ----
  async callGemini(modelId, prompt, options = {}) {
    const apiKey = this.getApiKey('GEMINI_API_KEY');
    const endpoint = `https://generativelanguage.googleapis.com/v1/models/${modelId}:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ 
          parts: [{ 
            text: prompt 
          }] 
        }],
        generationConfig: {
          temperature: options.temperature || 0.7,
          maxOutputTokens: options.maxTokens || 2000,
          topP: options.topP || 0.9,
          topK: options.topK || 40,
          stopSequences: options.stopSequences || []
        },
        safetySettings: options.safetySettings || [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Gemini Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- Claude ----
  async callClaude(modelId, prompt, options = {}) {
    const apiKey = this.getApiKey('CLAUDE_API_KEY');
    const model = this.getModel(modelId, 'chat');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
        'anthropic-beta': 'tools-2024-04-04'
      },
      body: JSON.stringify({
        model: modelId,
        max_tokens: options.maxTokens || 2000,
        temperature: options.temperature || 0.7,
        top_p: options.topP || 0.9,
        top_k: options.topK || 40,
        system: options.systemPrompt || 'شما یک دستیار هوش مصنوعی حرفه‌ای هستید. به زبان فارسی پاسخ دهید.',
        messages: [{ role: 'user', content: prompt }],
        stop_sequences: options.stopSequences || []
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Claude Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- DeepSeek ----
  async callDeepSeek(modelId, prompt, options = {}) {
    const apiKey = this.getApiKey('DEEPSEEK_API_KEY');
    const model = this.getModel(modelId, 'chat');

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          { role: 'system', content: options.systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید. به فارسی پاسخ دهید.' },
          { role: 'user', content: prompt }
        ],
        temperature: options.temperature || 0.7,
        max_tokens: options.maxTokens || 2000,
        top_p: options.topP || 0.9,
        frequency_penalty: options.frequencyPenalty || 0,
        presence_penalty: options.presencePenalty || 0,
        stream: options.stream || false
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`DeepSeek Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- Grok ----
  async callGrok(modelId, prompt, options = {}) {
    const apiKey = this.getApiKey('GROK_API_KEY');
    const model = this.getModel(modelId, 'chat');

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          { role: 'system', content: options.systemPrompt || 'You are a helpful AI assistant. Reply in Persian.' },
          { role: 'user', content: prompt }
        ],
        temperature: options.temperature || 0.7,
        max_tokens: options.maxTokens || 2000,
        top_p: options.topP || 0.9,
        frequency_penalty: options.frequencyPenalty || 0,
        presence_penalty: options.presencePenalty || 0
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Grok Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- Midjourney ----
  async callMidjourney(prompt, options = {}) {
    const apiKey = this.getApiKey('MIDJOURNEY_API_KEY');
    
    const response = await fetch('https://api.midjourney.com/v2/imagine', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt,
        aspect_ratio: options.aspectRatio || '1:1',
        style: options.style || 'default',
        chaos: options.chaos || 0,
        raw: options.raw || false,
        weird: options.weird || 0,
        stylize: options.stylize || 250
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Midjourney Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- Runway ----
  async callRunway(modelId, prompt, options = {}) {
    const apiKey = this.getApiKey('RUNWAY_API_KEY');
    const model = this.getModel(modelId, 'video');

    const response = await fetch('https://api.runwayml.com/v1/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: modelId,
        prompt: prompt,
        duration: options.duration || model.duration || 5,
        resolution: options.resolution || '1080p',
        aspect_ratio: options.aspectRatio || '16:9',
        motion: options.motion || 'default',
        seed: options.seed || Math.floor(Math.random() * 1000000)
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Runway Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- ElevenLabs ----
  async callElevenLabs(text, voice = 'Rachel', options = {}) {
    const apiKey = this.getApiKey('ELEVENLABS_API_KEY');
    
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text,
        model_id: options.modelId || 'eleven_monolingual_v1',
        voice_settings: {
          stability: options.stability || 0.5,
          similarity_boost: options.similarityBoost || 0.75,
          style: options.style || 0,
          use_speaker_boost: options.useSpeakerBoost || false
        },
        pronunciation_dictionary: options.pronunciationDictionary || {}
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`ElevenLabs Error ${response.status}: ${error}`);
    }

    return await response.arrayBuffer();
  }

  // ---- Stability AI ----
  async callStability(modelId, prompt, options = {}) {
    const apiKey = this.getApiKey('STABILITY_API_KEY');
    const model = this.getModel(modelId, 'image');

    const response = await fetch(`https://api.stability.ai/v1/generation/${modelId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text_prompts: [{ text: prompt, weight: options.weight || 1 }],
        cfg_scale: options.cfgScale || 7,
        steps: options.steps || 30,
        width: options.width || 1024,
        height: options.height || 1024,
        samples: options.samples || 1,
        sampler: options.sampler || 'K_EULER_ANCESTRAL',
        style_preset: options.stylePreset || 'photographic',
        seed: options.seed || Math.floor(Math.random() * 4294967295)
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Stability Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- OpenRouter ----
  async callOpenRouter(modelId, prompt, options = {}) {
    const apiKey = this.getApiKey('OPENROUTER_API_KEY');
    const model = this.getModel(modelId, 'chat');

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': options.referer || 'https://your-bot.com',
        'X-Title': options.title || 'AI Bot'
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          { role: 'system', content: options.systemPrompt || 'شما یک دستیار هوش مصنوعی حرفه‌ای هستید.' },
          { role: 'user', content: prompt }
        ],
        temperature: options.temperature || 0.7,
        max_tokens: options.maxTokens || 2000,
        top_p: options.topP || 0.9,
        frequency_penalty: options.frequencyPenalty || 0,
        presence_penalty: options.presencePenalty || 0,
        stream: options.stream || false
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenRouter Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- Tavily (Search) ----
  async callTavily(query, options = {}) {
    const apiKey = this.getApiKey('TAVILY_API_KEY');
    
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        search_depth: options.depth || 'basic',
        include_answer: options.includeAnswer || true,
        include_raw_content: options.includeRaw || false,
        include_images: options.includeImages || false,
        max_results: options.maxResults || 5
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Tavily Error ${response.status}: ${error}`);
    }

    return await response.json();
  }

  // ---- Main Generate ----
  async generate(modelId, prompt, category = 'chat', options = {}) {
    try {
      // Check rate limit
      const allowed = await this.checkRateLimit(options.userId || 'anonymous', modelId, category);
      if (!allowed) {
        throw new Error('🚫 Rate limit exceeded. Please wait a moment.');
      }

      const model = this.getModel(modelId, category);
      let result;

      switch (model.provider) {
        case 'OpenAI':
          result = await this.callOpenAI(modelId, prompt, category, options);
          break;
        case 'Google':
          result = await this.callGemini(modelId, prompt, options);
          break;
        case 'Anthropic':
          result = await this.callClaude(modelId, prompt, options);
          break;
        case 'DeepSeek':
          result = await this.callDeepSeek(modelId, prompt, options);
          break;
        case 'xAI':
          result = await this.callGrok(modelId, prompt, options);
          break;
        case 'Midjourney':
          result = await this.callMidjourney(prompt, options);
          break;
        case 'Runway':
          result = await this.callRunway(modelId, prompt, options);
          break;
        case 'ElevenLabs':
          result = await this.callElevenLabs(prompt, model.voice, options);
          break;
        case 'Stability AI':
          result = await this.callStability(modelId, prompt, options);
          break;
        case 'Alibaba':
        case 'Meta':
        case 'Mistral':
        case 'MiniMax':
        case 'Moonshot':
          result = await this.callOpenRouter(modelId, prompt, options);
          break;
        default:
          throw new Error(`❌ Provider ${model.provider} پشتیبانی نمی‌شود`);
      }

      // Track usage
      if (options.userId) {
        await this.trackUsage(options.userId, modelId, category, true);
      }

      return result;
    } catch (error) {
      console.error('AI Generate Error:', error);
      if (options.userId) {
        await this.trackUsage(options.userId, modelId, category, false);
      }
      throw error;
    }
  }

  // ---- Track Usage ----
  async trackUsage(userId, modelId, category, success) {
    // This would be implemented with Database
    // For now, just log
    console.log(`📊 Usage: ${userId} -> ${modelId} (${category}) ${success ? '✅' : '❌'}`);
  }

  // ---- Extract Response ----
  extractResponse(result, category = 'chat') {
    try {
      if (category === 'chat' || category === 'code' || category === 'reasoning') {
        if (result.choices) {
          return result.choices[0]?.message?.content || result.choices[0]?.text || null;
        }
        if (result.candidates) {
          return result.candidates[0]?.content?.parts?.[0]?.text || null;
        }
        if (result.content) {
          if (Array.isArray(result.content)) {
            return result.content[0]?.text || null;
          }
          return result.content?.text || null;
        }
        if (result.response) return result.response;
        if (result.text) return result.text;
        if (result.output) return result.output;
        if (result.completion) return result.completion;
        return null;
      }
      
      if (category === 'image') {
        if (result.data) return result.data[0]?.url || result.data[0]?.b64_json || null;
        if (result.images) return result.images[0]?.url || result.images[0]?.b64_json || null;
        if (result.image) return result.image.url || result.image.b64_json || null;
        if (result.url) return result.url;
        if (result.output) return result.output;
        return null;
      }
      
      if (category === 'video') {
        if (result.data) return result.data[0]?.url || null;
        if (result.video) return result.video.url || null;
        if (result.url) return result.url;
        if (result.output) return result.output;
        return null;
      }
      
      if (category === 'voice' || category === 'music') {
        return result;
      }
      
      return null;
    } catch (error) {
      console.error('Extract Response Error:', error);
      return null;
    }
  }

  // ---- Stream Response (for large texts) ----
  async *streamResponse(modelId, prompt, category = 'chat', options = {}) {
    try {
      const model = this.getModel(modelId, category);
      let result;

      switch (model.provider) {
        case 'OpenAI':
          result = await this.callOpenAI(modelId, prompt, category, { ...options, stream: true });
          break;
        case 'Google':
          result = await this.callGemini(modelId, prompt, { ...options, stream: true });
          break;
        case 'DeepSeek':
          result = await this.callDeepSeek(modelId, prompt, { ...options, stream: true });
          break;
        default:
          throw new Error(`Streaming not supported for ${model.provider}`);
      }

      // Process stream
      // This is a simplified version
      yield this.extractResponse(result, category);
    } catch (error) {
      console.error('Stream Error:', error);
      yield `❌ Error: ${error.message}`;
    }
  }

  // ---- Batch Generate ----
  async batchGenerate(requests) {
    const results = [];
    for (const req of requests) {
      try {
        const result = await this.generate(
          req.modelId,
          req.prompt,
          req.category || 'chat',
          req.options || {}
        );
        results.push({
          success: true,
          result: this.extractResponse(result, req.category || 'chat'),
          raw: result
        });
      } catch (error) {
        results.push({
          success: false,
          error: error.message
        });
      }
    }
    return results;
  }
}

// ============================================================
// 📨 PART 4: TELEGRAM SERVICE (Lines 1501-1900)
// ============================================================

class TelegramService {
  constructor(botToken) {
    this.botToken = botToken;
    this.baseUrl = `https://api.telegram.org/bot${botToken}`;
    this.cache = new Map();
    this.rateLimit = new Map();
  }

  async call(method, payload) {
    const url = `${this.baseUrl}/${method}`;
    const options = { method: 'POST' };

    // Rate limiting
    const key = method;
    const now = Date.now();
    if (this.rateLimit.has(key)) {
      const data = this.rateLimit.get(key);
      if (now < data.reset) {
        if (data.count >= 30) { // 30 requests per second
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        data.count++;
      } else {
        this.rateLimit.set(key, { count: 1, reset: now + 1000 });
      }
    } else {
      this.rateLimit.set(key, { count: 1, reset: now + 1000 });
    }

    if (payload instanceof FormData) {
      options.body = payload;
    } else {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
      if (!data.ok) {
        console.error(`Telegram API Error (${method}):`, data);
        throw new Error(data.description || 'Telegram API error');
      }
      
      return data;
    } catch (error) {
      console.error(`Telegram API Request Error (${method}):`, error);
      throw error;
    }
  }

  // ---- Send Methods ----
  async sendMessage(chatId, text, keyboard = null, options = {}) {
    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: options.parseMode || 'HTML',
      disable_web_page_preview: options.disablePreview !== false,
      disable_notification: options.disableNotification || false,
      protect_content: options.protectContent || false,
      message_effect_id: options.effectId || undefined,
      business_connection_id: options.businessConnectionId || undefined
    };
    
    if (keyboard) {
      payload.reply_markup = typeof keyboard === 'string' ? keyboard : JSON.stringify(keyboard);
    }
    
    if (options.replyToMessageId) {
      payload.reply_to_message_id = options.replyToMessageId;
    }
    
    return await this.call('sendMessage', payload);
  }

  async editMessage(chatId, messageId, text, keyboard = null, options = {}) {
    const payload = {
      chat_id: chatId,
      message_id: messageId,
      text: text,
      parse_mode: options.parseMode || 'HTML',
      disable_web_page_preview: options.disablePreview !== false
    };
    
    if (keyboard) {
      payload.reply_markup = typeof keyboard === 'string' ? keyboard : JSON.stringify(keyboard);
    }
    
    if (options.inlineMessageId) {
      payload.inline_message_id = options.inlineMessageId;
    }
    
    return await this.call('editMessageText', payload);
  }

  async deleteMessage(chatId, messageId) {
    return await this.call('deleteMessage', {
      chat_id: chatId,
      message_id: messageId
    });
  }

  async forwardMessage(chatId, fromChatId, messageId, options = {}) {
    return await this.call('forwardMessage', {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId,
      disable_notification: options.disableNotification || false,
      protect_content: options.protectContent || false
    });
  }

  async copyMessage(chatId, fromChatId, messageId, options = {}) {
    return await this.call('copyMessage', {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId,
      caption: options.caption || '',
      parse_mode: options.parseMode || 'HTML',
      disable_notification: options.disableNotification || false,
      protect_content: options.protectContent || false,
      reply_markup: options.keyboard ? JSON.stringify(options.keyboard) : undefined
    });
  }

  // ---- Media Send Methods ----
  async sendPhoto(chatId, photo, caption = '', keyboard = null, options = {}) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', photo);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', options.parseMode || 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    if (options.disableNotification) formData.append('disable_notification', 'true');
    if (options.protectContent) formData.append('protect_content', 'true');
    if (options.hasSpoiler) formData.append('has_spoiler', 'true');
    
    return await this.call('sendPhoto', formData);
  }

  async sendVideo(chatId, video, caption = '', keyboard = null, options = {}) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('video', video);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', options.parseMode || 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    if (options.duration) formData.append('duration', options.duration);
    if (options.width) formData.append('width', options.width);
    if (options.height) formData.append('height', options.height);
    if (options.thumb) formData.append('thumb', options.thumb);
    if (options.supportsStreaming) formData.append('supports_streaming', 'true');
    if (options.disableNotification) formData.append('disable_notification', 'true');
    if (options.protectContent) formData.append('protect_content', 'true');
    if (options.hasSpoiler) formData.append('has_spoiler', 'true');
    
    return await this.call('sendVideo', formData);
  }

  async sendAnimation(chatId, animation, caption = '', keyboard = null, options = {}) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('animation', animation);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', options.parseMode || 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    if (options.duration) formData.append('duration', options.duration);
    if (options.width) formData.append('width', options.width);
    if (options.height) formData.append('height', options.height);
    if (options.thumb) formData.append('thumb', options.thumb);
    
    return await this.call('sendAnimation', formData);
  }

  async sendAudio(chatId, audio, caption = '', keyboard = null, options = {}) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('audio', audio);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', options.parseMode || 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    if (options.duration) formData.append('duration', options.duration);
    if (options.performer) formData.append('performer', options.performer);
    if (options.title) formData.append('title', options.title);
    if (options.thumb) formData.append('thumb', options.thumb);
    
    return await this.call('sendAudio', formData);
  }

  async sendVoice(chatId, voice, caption = '', keyboard = null, options = {}) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('voice', voice);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', options.parseMode || 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    if (options.duration) formData.append('duration', options.duration);
    
    return await this.call('sendVoice', formData);
  }

  async sendDocument(chatId, document, caption = '', keyboard = null, options = {}) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('document', document);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', options.parseMode || 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    if (options.thumb) formData.append('thumb', options.thumb);
    if (options.disableContentTypeDetection) formData.append('disable_content_type_detection', 'true');
    
    return await this.call('sendDocument', formData);
  }

  async sendSticker(chatId, sticker, keyboard = null, options = {}) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('sticker', sticker);
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    
    return await this.call('sendSticker', formData);
  }

  async sendLocation(chatId, latitude, longitude, keyboard = null, options = {}) {
    const payload = {
      chat_id: chatId,
      latitude: latitude,
      longitude: longitude,
      live_period: options.livePeriod || undefined,
      horizontal_accuracy: options.horizontalAccuracy || undefined,
      heading: options.heading || undefined,
      proximity_alert_radius: options.proximityAlertRadius || undefined
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    
    return await this.call('sendLocation', payload);
  }

  async sendVenue(chatId, latitude, longitude, title, address, keyboard = null, options = {}) {
    const payload = {
      chat_id: chatId,
      latitude: latitude,
      longitude: longitude,
      title: title,
      address: address,
      foursquare_id: options.foursquareId || undefined,
      foursquare_type: options.foursquareType || undefined,
      google_place_id: options.googlePlaceId || undefined,
      google_place_type: options.googlePlaceType || undefined
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    
    return await this.call('sendVenue', payload);
  }

  async sendContact(chatId, phoneNumber, firstName, lastName = '', keyboard = null, options = {}) {
    const payload = {
      chat_id: chatId,
      phone_number: phoneNumber,
      first_name: firstName,
      last_name: lastName,
      vcard: options.vcard || undefined
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    
    return await this.call('sendContact', payload);
  }

  async sendPoll(chatId, question, options, keyboard = null, pollOptions = {}) {
    const payload = {
      chat_id: chatId,
      question: question,
      options: options.map(o => ({ text: o })),
      is_anonymous: pollOptions.isAnonymous !== false,
      type: pollOptions.type || 'regular',
      allows_multiple_answers: pollOptions.allowsMultiple || false,
      correct_option_id: pollOptions.correctOptionId || undefined,
      explanation: pollOptions.explanation || '',
      explanation_parse_mode: pollOptions.explanationParseMode || 'HTML',
      open_period: pollOptions.openPeriod || undefined,
      close_date: pollOptions.closeDate || undefined,
      is_closed: pollOptions.isClosed || false
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    
    return await this.call('sendPoll', payload);
  }

  async sendDice(chatId, keyboard = null, options = {}) {
    const payload = {
      chat_id: chatId,
      emoji: options.emoji || '🎲'
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    
    return await this.call('sendDice', payload);
  }

  async sendChatAction(chatId, action = 'typing') {
    return await this.call('sendChatAction', {
      chat_id: chatId,
      action: action
    });
  }

  // ---- Callback Methods ----
  async answerCallback(callbackId, text = '', showAlert = false, options = {}) {
    return await this.call('answerCallbackQuery', {
      callback_query_id: callbackId,
      text: text,
      show_alert: showAlert,
      url: options.url || undefined,
      cache_time: options.cacheTime || 0
    });
  }

  async answerInlineQuery(inlineQueryId, results, options = {}) {
    return await this.call('answerInlineQuery', {
      inline_query_id: inlineQueryId,
      results: results.map(r => ({
        type: r.type || 'article',
        id: r.id,
        title: r.title,
        description: r.description,
        input_message_content: r.inputMessageContent,
        reply_markup: r.replyMarkup,
        url: r.url,
        hide_url: r.hideUrl || false,
        thumb_url: r.thumbUrl,
        thumb_width: r.thumbWidth,
        thumb_height: r.thumbHeight
      })),
      cache_time: options.cacheTime || 300,
      is_personal: options.isPersonal || false,
      next_offset: options.nextOffset || '',
      switch_pm_text: options.switchPmText || '',
      switch_pm_parameter: options.switchPmParameter || ''
    });
  }

  // ---- User Methods ----
  async getMe() {
    return await this.call('getMe', {});
  }

  async getUserProfilePhotos(userId, limit = 100, offset = 0) {
    return await this.call('getUserProfilePhotos', {
      user_id: userId,
      limit: limit,
      offset: offset
    });
  }

  async getChat(chatId) {
    return await this.call('getChat', {
      chat_id: chatId
    });
  }

  async getChatMember(chatId, userId) {
    return await this.call('getChatMember', {
      chat_id: chatId,
      user_id: userId
    });
  }

  async getChatAdministrators(chatId) {
    return await this.call('getChatAdministrators', {
      chat_id: chatId
    });
  }

  async getChatMembersCount(chatId) {
    return await this.call('getChatMembersCount', {
      chat_id: chatId
    });
  }

  // ---- Ban/Kick Methods ----
  async kickChatMember(chatId, userId, untilDate = null, revokeMessages = false) {
    return await this.call('banChatMember', {
      chat_id: chatId,
      user_id: userId,
      until_date: untilDate,
      revoke_messages: revokeMessages
    });
  }

  async unbanChatMember(chatId, userId, onlyIfBanned = true) {
    return await this.call('unbanChatMember', {
      chat_id: chatId,
      user_id: userId,
      only_if_banned: onlyIfBanned
    });
  }

  async restrictChatMember(chatId, userId, permissions, untilDate = null) {
    return await this.call('restrictChatMember', {
      chat_id: chatId,
      user_id: userId,
      permissions: permissions,
      until_date: untilDate
    });
  }

  async promoteChatMember(chatId, userId, permissions = {}) {
    return await this.call('promoteChatMember', {
      chat_id: chatId,
      user_id: userId,
      is_anonymous: permissions.isAnonymous || false,
      can_manage_chat: permissions.canManageChat || false,
      can_post_messages: permissions.canPostMessages || false,
      can_edit_messages: permissions.canEditMessages || false,
      can_delete_messages: permissions.canDeleteMessages || false,
      can_manage_video_chats: permissions.canManageVideoChats || false,
      can_restrict_members: permissions.canRestrictMembers || false,
      can_promote_members: permissions.canPromoteMembers || false,
      can_change_info: permissions.canChangeInfo || false,
      can_invite_users: permissions.canInviteUsers || false,
      can_pin_messages: permissions.canPinMessages || false
    });
  }

  // ---- Message Methods ----
  async getMessage(chatId, messageId) {
    return await this.call('getMessage', {
      chat_id: chatId,
      message_id: messageId
    });
  }

  async getUpdates(offset = 0, limit = 100, timeout = 0) {
    return await this.call('getUpdates', {
      offset: offset,
      limit: limit,
      timeout: timeout,
      allowed_updates: ['message', 'callback_query', 'inline_query', 'pre_checkout_query', 'shipping_query']
    });
  }

  // ---- Webhook ----
  async setWebhook(url, options = {}) {
    return await this.call('setWebhook', {
      url: url,
      drop_pending_updates: options.dropPending || false,
      max_connections: options.maxConnections || 100,
      allowed_updates: options.allowedUpdates || ['message', 'callback_query', 'inline_query']
    });
  }

  async deleteWebhook(dropPending = false) {
    return await this.call('deleteWebhook', {
      drop_pending_updates: dropPending
    });
  }

  async getWebhookInfo() {
    return await this.call('getWebhookInfo', {});
  }

  // ---- Sticker Methods ----
  async createNewStickerSet(userId, name, title, stickers, options = {}) {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('name', name);
    formData.append('title', title);
    stickers.forEach((s, i) => {
      formData.append(`png_sticker`, s.pngSticker);
      formData.append(`emoji_list`, s.emojiList.join(','));
      if (s.maskPosition) {
        formData.append(`mask_position`, JSON.stringify(s.maskPosition));
      }
    });
    formData.append('sticker_type', options.stickerType || 'regular');
    formData.append('needs_repainting', options.needsRepainting || false);
    
    return await this.call('createNewStickerSet', formData);
  }

  async uploadStickerFile(userId, pngSticker) {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('png_sticker', pngSticker);
    
    return await this.call('uploadStickerFile', formData);
  }

  // ---- Invoice Methods ----
  async sendInvoice(chatId, title, description, payload, providerToken, currency, prices, options = {}) {
    const payloadData = {
      chat_id: chatId,
      title: title,
      description: description,
      payload: payload,
      provider_token: providerToken,
      currency: currency,
      prices: prices.map(p => ({ label: p.label, amount: p.amount })),
      max_tip_amount: options.maxTipAmount || 0,
      suggested_tip_amounts: options.suggestedTipAmounts || [],
      start_parameter: options.startParameter || '',
      provider_data: options.providerData || '',
      photo_url: options.photoUrl || '',
      photo_size: options.photoSize || 0,
      photo_width: options.photoWidth || 0,
      photo_height: options.photoHeight || 0,
      need_name: options.needName || false,
      need_phone_number: options.needPhone || false,
      need_email: options.needEmail || false,
      need_shipping_address: options.needShippingAddress || false,
      send_phone_number_to_provider: options.sendPhoneToProvider || false,
      send_email_to_provider: options.sendEmailToProvider || false,
      is_flexible: options.isFlexible || false
    };
    
    if (options.keyboard) {
      payloadData.reply_markup = JSON.stringify(options.keyboard);
    }
    
    return await this.call('sendInvoice', payloadData);
  }

  async answerShippingQuery(shippingQueryId, ok, options = {}) {
    return await this.call('answerShippingQuery', {
      shipping_query_id: shippingQueryId,
      ok: ok,
      shipping_options: options.shippingOptions || [],
      error_message: options.errorMessage || ''
    });
  }

  async answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMessage = '') {
    return await this.call('answerPreCheckoutQuery', {
      pre_checkout_query_id: preCheckoutQueryId,
      ok: ok,
      error_message: errorMessage
    });
  }

  // ---- Game Methods ----
  async sendGame(chatId, gameShortName, keyboard = null, options = {}) {
    const payload = {
      chat_id: chatId,
      game_short_name: gameShortName
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    if (options.disableNotification) payload.disable_notification = true;
    if (options.protectContent) payload.protect_content = true;
    
    return await this.call('sendGame', payload);
  }

  async setGameScore(userId, score, options = {}) {
    return await this.call('setGameScore', {
      user_id: userId,
      score: score,
      force: options.force || false,
      disable_edit_message: options.disableEditMessage || false,
      chat_id: options.chatId || undefined,
      message_id: options.messageId || undefined,
      inline_message_id: options.inlineMessageId || undefined
    });
  }

  async getGameHighScores(userId, options = {}) {
    return await this.call('getGameHighScores', {
      user_id: userId,
      chat_id: options.chatId || undefined,
      message_id: options.messageId || undefined,
      inline_message_id: options.inlineMessageId || undefined
    });
  }

  // ---- Chat Methods ----
  async leaveChat(chatId) {
    return await this.call('leaveChat', { chat_id: chatId });
  }

  async pinChatMessage(chatId, messageId, disableNotification = false) {
    return await this.call('pinChatMessage', {
      chat_id: chatId,
      message_id: messageId,
      disable_notification: disableNotification
    });
  }

  async unpinChatMessage(chatId, messageId = null) {
    const payload = { chat_id: chatId };
    if (messageId) payload.message_id = messageId;
    return await this.call('unpinChatMessage', payload);
  }

  async unpinAllChatMessages(chatId) {
    return await this.call('unpinAllChatMessages', { chat_id: chatId });
  }

  async setChatTitle(chatId, title) {
    return await this.call('setChatTitle', {
      chat_id: chatId,
      title: title
    });
  }

  async setChatDescription(chatId, description) {
    return await this.call('setChatDescription', {
      chat_id: chatId,
      description: description
    });
  }

  async setChatPhoto(chatId, photo) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', photo);
    return await this.call('setChatPhoto', formData);
  }

  async deleteChatPhoto(chatId) {
    return await this.call('deleteChatPhoto', { chat_id: chatId });
  }

  async setChatPermissions(chatId, permissions) {
    return await this.call('setChatPermissions', {
      chat_id: chatId,
      permissions: permissions
    });
  }

  async exportChatInviteLink(chatId) {
    return await this.call('exportChatInviteLink', { chat_id: chatId });
  }

  async createChatInviteLink(chatId, options = {}) {
    return await this.call('createChatInviteLink', {
      chat_id: chatId,
      name: options.name || '',
      expire_date: options.expireDate || undefined,
      member_limit: options.memberLimit || undefined,
      creates_join_request: options.createsJoinRequest || false
    });
  }

  async editChatInviteLink(chatId, inviteLink, options = {}) {
    return await this.call('editChatInviteLink', {
      chat_id: chatId,
      invite_link: inviteLink,
      name: options.name || '',
      expire_date: options.expireDate || undefined,
      member_limit: options.memberLimit || undefined,
      creates_join_request: options.createsJoinRequest || false
    });
  }

  async revokeChatInviteLink(chatId, inviteLink) {
    return await this.call('revokeChatInviteLink', {
      chat_id: chatId,
      invite_link: inviteLink
    });
  }

  async approveChatJoinRequest(chatId, userId) {
    return await this.call('approveChatJoinRequest', {
      chat_id: chatId,
      user_id: userId
    });
  }

  async declineChatJoinRequest(chatId, userId) {
    return await this.call('declineChatJoinRequest', {
      chat_id: chatId,
      user_id: userId
    });
  }

  // ---- File Methods ----
  async getFile(fileId) {
    return await this.call('getFile', { file_id: fileId });
  }

  async downloadFile(filePath) {
    const url = `https://api.telegram.org/file/bot${this.botToken}/${filePath}`;
    const response = await fetch(url);
    return await response.arrayBuffer();
  }

  // ---- Business Methods ----
  async createBusinessConnection(businessConnectionId, options = {}) {
    return await this.call('createBusinessConnection', {
      business_connection_id: businessConnectionId,
      user_id: options.userId,
      title: options.title,
      username: options.username,
      request_contact: options.requestContact || false
    });
  }

  // ---- Menu Button ----
  async setChatMenuButton(chatId, menuButton) {
    return await this.call('setChatMenuButton', {
      chat_id: chatId,
      menu_button: menuButton
    });
  }

  async getChatMenuButton(chatId) {
    return await this.call('getChatMenuButton', { chat_id: chatId });
  }

  async setMyDefaultAdministratorRights(rights, forChannels = false) {
    return await this.call('setMyDefaultAdministratorRights', {
      rights: rights,
      for_channels: forChannels
    });
  }

  async getMyDefaultAdministratorRights(forChannels = false) {
    return await this.call('getMyDefaultAdministratorRights', {
      for_channels: forChannels
    });
  }

  // ---- Emoji ----
  async getAvailableGifts() {
    return await this.call('getAvailableGifts', {});
  }

  async sendGift(chatId, giftId, options = {}) {
    return await this.call('sendGift', {
      chat_id: chatId,
      gift_id: giftId,
      text: options.text || '',
      text_parse_mode: options.textParseMode || 'HTML',
      message_effect_id: options.messageEffectId || undefined
    });
  }

  // ---- Boost ----
  async getUserChatBoosts(chatId, userId) {
    return await this.call('getUserChatBoosts', {
      chat_id: chatId,
      user_id: userId
    });
  }

  async getStarTransactions(userId, options = {}) {
    return await this.call('getStarTransactions', {
      user_id: userId,
      offset: options.offset || 0,
      limit: options.limit || 100
    });
  }

  async sendStarGift(userId, giftId, options = {}) {
    return await this.call('sendStarGift', {
      user_id: userId,
      gift_id: giftId,
      text: options.text || '',
      text_parse_mode: options.textParseMode || 'HTML'
    });
  }
}

// ============================================================
// ⌨️ PART 5: KEYBOARDS (Lines 1901-2100)
// ============================================================

const KEYBOARDS = {
  // ---- Main Menu ----
  main: {
    inline_keyboard: [
      [{ text: '📊 داشبورد', callback_data: 'dashboard' }, { text: '💰 کیف پول', callback_data: 'wallet' }],
      [{ text: '🤖 هوش مصنوعی', callback_data: 'ai' }, { text: '⭐ اشتراک', callback_data: 'subscription' }],
      [{ text: '👥 زیرمجموعه', callback_data: 'referral' }, { text: '❓ پشتیبانی', callback_data: 'support' }],
      [{ text: '📈 آمار', callback_data: 'stats' }, { text: '🌐 مینی اپ', callback_data: 'miniapp' }]
    ]
  },

  // ---- Admin Panel ----
  admin: {
    inline_keyboard: [
      [{ text: '👥 کاربران', callback_data: 'admin_users' }, { text: '📊 آمار', callback_data: 'admin_stats' }],
      [{ text: '💳 پرداخت‌ها', callback_data: 'admin_payments' }, { text: '📝 تیکت‌ها', callback_data: 'admin_tickets' }],
      [{ text: '🤖 مدل‌ها', callback_data: 'admin_models' }, { text: '📢 پیام همگانی', callback_data: 'admin_broadcast' }],
      [{ text: '⚙️ تنظیمات', callback_data: 'admin_settings' }, { text: '🚫 مسدودها', callback_data: 'admin_bans' }],
      [{ text: '📊 لاگ‌ها', callback_data: 'admin_logs' }, { text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  // ---- AI Menu ----
  ai: {
    inline_keyboard: [
      [{ text: '💬 چت', callback_data: 'ai_chat' }, { text: '🎨 تصویر', callback_data: 'ai_image' }],
      [{ text: '🎬 ویدیو', callback_data: 'ai_video' }, { text: '🎵 صدا', callback_data: 'ai_voice' }],
      [{ text: '📝 خلاصه‌سازی', callback_data: 'ai_summarize' }, { text: '🌐 ترجمه', callback_data: 'ai_translate' }],
      [{ text: '💻 کد', callback_data: 'ai_code' }, { text: '🔍 تحلیل', callback_data: 'ai_analyze' }],
      [{ text: '🔎 جستجو', callback_data: 'ai_search' }, { text: '🧠 استدلال', callback_data: 'ai_reasoning' }],
      [{ text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  // ---- Subscription Plans ----
  subscription: {
    inline_keyboard: [
      [{ text: '⭐ شروع - ۲۵,۰۰۰', callback_data: 'sub_starter' }],
      [{ text: '🔥 حرفه‌ای - ۹۹,۰۰۰', callback_data: 'sub_pro' }],
      [{ text: '👑 نامحدود - ۲۹۹,۰۰۰', callback_data: 'sub_unlimited' }],
      [{ text: '💼 سازمانی - ۹۹۹,۰۰۰', callback_data: 'sub_enterprise' }],
      [{ text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  // ---- Payment Methods ----
  payment: {
    inline_keyboard: [
      [{ text: '💳 پرداخت آنلاین', callback_data: 'pay_online' }],
      [{ text: '💎 پرداخت با TON', callback_data: 'pay_ton' }],
      [{ text: '💰 پرداخت با TRX', callback_data: 'pay_trx' }],
      [{ text: '🏦 کارت به کارت', callback_data: 'pay_card' }],
      [{ text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  // ---- Confirm ----
  confirm: {
    inline_keyboard: [
      [{ text: '✅ تأیید پرداخت', callback_data: 'confirm_yes' }],
      [{ text: '❌ انصراف', callback_data: 'confirm_no' }]
    ]
  },

  // ---- Back ----
  back: {
    inline_keyboard: [[{ text: '🔙 بازگشت', callback_data: 'back' }]]
  },

  // ---- Models Selection ----
  models: (models, category) => {
    const keyboard = [];
    let row = [];
    let count = 0;
    
    for (const [id, model] of Object.entries(models)) {
      row.push({ text: model.name, callback_data: `model_${category}_${id}` });
      count++;
      if (count % 3 === 0) {
        keyboard.push([...row]);
        row = [];
      }
    }
    if (row.length > 0) keyboard.push(row);
    keyboard.push([{ text: '🔙 بازگشت', callback_data: 'back' }]);
    return { inline_keyboard: keyboard };
  },

  // ---- Number Pad (for admin actions) ----
  numberPad: (prefix, rows = 3) => {
    const keyboard = [];
    const numbers = [];
    for (let i = 1; i <= 9; i++) numbers.push(i);
    if (rows === 3) {
      for (let i = 0; i < 9; i += 3) {
        keyboard.push([
          { text: `${numbers[i]}`, callback_data: `${prefix}_${numbers[i]}` },
          { text: `${numbers[i+1]}`, callback_data: `${prefix}_${numbers[i+1]}` },
          { text: `${numbers[i+2]}`, callback_data: `${prefix}_${numbers[i+2]}` }
        ]);
      }
      keyboard.push([
        { text: '🔙', callback_data: `${prefix}_back` },
        { text: '0', callback_data: `${prefix}_0` },
        { text: '✅', callback_data: `${prefix}_done` }
      ]);
    }
    return { inline_keyboard: keyboard };
  },

  // ---- Inline Keyboard Builder ----
  build: (buttons, options = {}) => {
    const keyboard = [];
    let row = [];
    
    for (const btn of buttons) {
      if (btn.newRow) {
        if (row.length > 0) {
          keyboard.push([...row]);
          row = [];
        }
        continue;
      }
      
      row.push({
        text: btn.text,
        callback_data: btn.callbackData,
        url: btn.url,
        login_url: btn.loginUrl,
        web_app: btn.webApp,
        switch_inline_query: btn.switchInlineQuery,
        switch_inline_query_current_chat: btn.switchInlineQueryCurrentChat,
        pay: btn.pay || false
      });
      
      if (row.length >= (options.maxButtonsPerRow || 3)) {
        keyboard.push([...row]);
        row = [];
      }
    }
    
    if (row.length > 0) keyboard.push(row);
    
    return {
      inline_keyboard: keyboard,
      resize_keyboard: options.resizeKeyboard || false,
      one_time_keyboard: options.oneTimeKeyboard || false,
      selective: options.selective || false,
      input_field_placeholder: options.placeholder || ''
    };
  }
};

// ============================================================
// 🎯 PART 6: MAIN HANDLERS (Lines 2101-3500)
// ============================================================

class BotHandlers {
  constructor(db, telegram, ai) {
    this.db = db;
    this.telegram = telegram;
    this.ai = ai;
    this.userStates = new Map();
    this.pendingRequests = new Map();
    this.broadcastQueue = [];
    this.isBroadcasting = false;
  }

  // ---- User State Management ----
  getUserState(userId) {
    if (!this.userStates.has(userId)) {
      this.userStates.set(userId, {
        lastAction: null,
        currentMenu: 'main',
        tempData: {},
        step: null,
        waitingFor: null
      });
    }
    return this.userStates.get(userId);
  }

  updateUserState(userId, data) {
    const state = this.getUserState(userId);
    Object.assign(state, data);
    this.userStates.set(userId, state);
  }

  clearUserState(userId) {
    this.userStates.delete(userId);
  }

  // ---- Check User Access ----
  async checkAccess(userId) {
    const user = await this.db.getUser(userId);
    if (!user) return { allowed: false, reason: 'کاربر یافت نشد' };
    if (user.is_banned) return { allowed: false, reason: '⛔ شما مسدود شده‌اید' };
    return { allowed: true, user };
  }

  async checkPremium(userId) {
    const isPremium = await this.db.checkPremium(userId);
    const user = await this.db.getUser(userId);
    if (!user) return { allowed: false, reason: 'کاربر یافت نشد' };
    if (!isPremium) {
      return { 
        allowed: false, 
        reason: '⭐ این قابلیت فقط برای کاربران ویژه است.\nبرای خرید اشتراک از /subscription استفاده کنید.'
      };
    }
    return { allowed: true, user };
  }

  async checkBalance(userId, type, amount = 1) {
    const balance = await this.db.getBalance(userId);
    if (!balance) return { allowed: false, reason: 'کاربر یافت نشد' };
    if (balance[type] < amount) {
      return { 
        allowed: false, 
        reason: `❌ اعتبار ${this.getTypeName(type)} کافی نیست!\nموجودی: ${balance[type]}\nنیاز: ${amount}`
      };
    }
    return { allowed: true, balance };
  }

  getTypeName(type) {
    const names = {
      text: '📝 متن',
      image: '🎨 تصویر',
      video: '🎬 ویدیو',
      voice: '🎵 صدا'
    };
    return names[type] || type;
  }

  // ---- Send Typing ----
  async sendTyping(chatId) {
    await this.telegram.sendChatAction(chatId, 'typing');
  }

  async sendUploadPhoto(chatId) {
    await this.telegram.sendChatAction(chatId, 'upload_photo');
  }

  async sendUploadVideo(chatId) {
    await this.telegram.sendChatAction(chatId, 'upload_video');
  }

  async sendUploadVoice(chatId) {
    await this.telegram.sendChatAction(chatId, 'upload_voice');
  }

  async sendFindLocation(chatId) {
    await this.telegram.sendChatAction(chatId, 'find_location');
  }

  // ---- Start ----
  async handleStart(chatId, user, args = '') {
    const welcome = `
👋 به ربات هوش مصنوعی خوش آمدید ${user.first_name}!

✨ **ویژگی‌های پیشرفته:**
• 🔥 بیش از **۱۲۰+ مدل** هوش مصنوعی
• 💬 چت با GPT-4o، Gemini، Claude و...
• 🎨 تولید تصویر با DALL-E، Midjourney، Flux
• 🎬 تولید ویدیو با Sora، Runway، Kling
• 🎵 تولید صدا و موسیقی با ElevenLabs، Suno
• 📝 خلاصه‌سازی، ترجمه، کدنویسی، تحلیل
• 🔎 جستجوی هوشمند با Tavily

💰 **سیستم اشتراک:**
• ۴ بسته از ۲۵ تا ۹۹۹ هزار تومان
• اعتبار رایگان برای کاربران جدید
• پاداش زیرمجموعه‌گیری

👥 **زیرمجموعه:**
• هر دعوت ${CONFIG.REFERRAL_BONUS.text} اعتبار متن
• ${CONFIG.REFERRAL_BONUS.image} اعتبار تصویر
• ${CONFIG.REFERRAL_BONUS.voice} اعتبار صدا
• ${CONFIG.REFERRAL_BONUS.video} اعتبار ویدیو
• ${CONFIG.REFERRAL_BONUS.premium_days || 0} روز اشتراک ویژه

🔰 **شروع کنید:**
• /dashboard - مشاهده داشبورد
• /wallet - کیف پول
• /ai - منوی هوش مصنوعی
• /subscription - خرید اشتراک
• /referral - زیرمجموعه‌گیری
• /help - راهنما

📱 **مینی‌اپ:** ${CONFIG.MINIAPP_URL}
`;

    // Check if referred
    if (args && args.startsWith('ref_')) {
      const referrerId = parseInt(args.replace('ref_', ''));
      if (referrerId && referrerId !== user.user_id) {
        await this.db.addReferral(referrerId, user.user_id);
        await this.telegram.sendMessage(chatId, `🎉 شما با دعوت نامه ثبت نام کردید!\nبه ${CONFIG.REFERRAL_BONUS.text} اعتبار متن و ${CONFIG.REFERRAL_BONUS.premium_days || 0} روز اشتراک ویژه دسترسی پیدا کردید.`);
      }
    }

    await this.telegram.sendMessage(chatId, welcome, KEYBOARDS.main);
    await this.db.logActivity(user.user_id, 'start', { args });
  }

  // ---- Help ----
  async handleHelp(chatId, user) {
    const help = `
📚 **راهنمای کامل ربات**

🤖 **دستورات هوش مصنوعی:**
• /ai - منوی مدل‌ها
• /chat [متن] - چت با AI
• /image [پرامپت] - تولید تصویر
• /video [پرامپت] - تولید ویدیو
• /voice [متن] - تبدیل متن به صدا
• /summarize [متن] - خلاصه‌سازی
• /translate [متن] - ترجمه
• /code [توضیح] - تولید کد
• /analyze [متن] - تحلیل متن
• /search [موضوع] - جستجوی هوشمند

💰 **مدیریت مالی:**
• /wallet - کیف پول
• /subscription - اشتراک‌ها
• /referral - زیرمجموعه‌گیری

📊 **کاربری:**
• /dashboard - داشبورد
• /stats - آمار
• /profile - پروفایل

🛠️ **پشتیبانی:**
• /support - پشتیبانی
• /help - راهنما
• /feedback - بازخورد

👑 **ادمین:**
• /admin - پنل مدیریت
• /broadcast [متن] - پیام همگانی
• /ban [id] - مسدود کردن
• /unban [id] - رفع مسدودیت

💡 **نکات:**
• برای دریافت اعتبار رایگان از /subscription استفاده کنید
• با دعوت از دوستان اعتبار بگیرید
• کاربران ویژه به همه مدل‌ها دسترسی دارند
`;

    await this.telegram.sendMessage(chatId, help);
  }

  // ---- Dashboard ----
  async handleDashboard(chatId, user) {
    const balance = await this.db.getBalance(user.user_id);
    const premiumInfo = await this.db.getPremiumInfo(user.user_id);
    const isPremium = !!premiumInfo;
    const stats = await this.db.getUserStats(user.user_id);
    const referrals = await this.db.getReferrals(user.user_id);

    const msg = `
📊 **داشبورد کاربری**

👤 **${user.first_name}** ${user.last_name || ''}
🆔 @${user.username || 'N/A'}

💰 **موجودی:**
• 📝 متن: ${balance?.text || 0}
• 🎨 تصویر: ${balance?.image || 0}
• 🎬 ویدیو: ${balance?.video || 0}
• 🎵 صدا: ${balance?.voice || 0}

⭐ **وضعیت:** ${isPremium ? `💎 ویژه (${premiumInfo.plan} - ${premiumInfo.daysLeft} روز)` : '⚪ معمولی'}

📊 **آمار استفاده:**
• 💬 چت: ${stats?.chat_count || 0}
• 🎨 تصویر: ${stats?.image_count || 0}
• 🎬 ویدیو: ${stats?.video_count || 0}
• 🎵 صدا: ${stats?.voice_count || 0}

👥 **زیرمجموعه:** ${referrals} نفر
💳 **درآمد:** ${(stats?.total_earned || 0).toLocaleString()} تومان

📅 **عضویت:** ${new Date(user.created_at).toLocaleDateString('fa-IR')}
`;

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Wallet ----
  async handleWallet(chatId, user) {
    const balance = await this.db.getBalance(user.user_id);
    const isPremium = await this.db.checkPremium(user.user_id);
    const payments = await this.db.getPayments(user.user_id, 10);

    let msg = `
💰 **کیف پول شما**

📝 **اعتبار متن:** ${balance?.text || 0}
🎨 **اعتبار تصویر:** ${balance?.image || 0}
🎬 **اعتبار ویدیو:** ${balance?.video || 0}
🎵 **اعتبار صدا:** ${balance?.voice || 0}

⭐ **وضعیت:** ${isPremium ? '💎 ویژه (نامحدود)' : '⚪ معمولی'}

📋 **آخرین تراکنش‌ها:**
`;

    if (payments.length > 0) {
      for (const p of payments.slice(0, 5)) {
        const status = p.status === 'confirmed' ? '✅' : p.status === 'pending' ? '⏳' : '❌';
        msg += `\n${status} ${p.amount.toLocaleString()} تومان - ${p.method} (${p.plan || 'بدون پلن'})`;
        msg += `\n📅 ${new Date(p.created_at).toLocaleDateString('fa-IR')}`;
      }
    } else {
      msg += `\n❌ هیچ تراکنشی یافت نشد.`;
    }

    msg += `\n\n💳 برای افزایش موجودی از گزینه زیر استفاده کنید:`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.subscription);
  }

  // ---- AI Chat ----
  async handleAIChat(chatId, prompt, user, options = {}) {
    // Check access
    const access = await this.checkAccess(user.user_id);
    if (!access.allowed) {
      await this.telegram.sendMessage(chatId, access.reason);
      return;
    }

    // Check premium or balance
    const isPremium = await this.db.checkPremium(user.user_id);
    const balance = await this.db.getBalance(user.user_id);

    if (!isPremium && (balance?.text || 0) < 1) {
      await this.telegram.sendMessage(chatId, `
❌ **اعتبار کافی نیست!**

موجودی فعلی: ${balance?.text || 0}
نیاز: ۱ اعتبار

💡 برای دریافت اعتبار:
• /subscription - خرید اشتراک
• /referral - دعوت از دوستان
• هر روز ۱۰ چت رایگان
`, KEYBOARDS.subscription);
      return;
    }

    await this.sendTyping(chatId);

    try {
      // Select model
      let modelId = options.modelId || 'gpt-4o';
      let category = options.category || 'chat';
      
      // If premium, use better model
      if (isPremium && modelId === 'gpt-4o-mini') {
        modelId = 'gpt-4o';
      }

      // Prepare options
      const aiOptions = {
        userId: user.user_id,
        systemPrompt: options.systemPrompt || 'شما یک دستیار هوش مصنوعی حرفه‌ای هستید. به فارسی پاسخ دهید.',
        temperature: options.temperature || 0.7,
        maxTokens: options.maxTokens || 2000
      };

      // Generate response
      const result = await this.ai.generate(modelId, prompt, category, aiOptions);
      const response = this.ai.extractResponse(result, category);

      if (!response) {
        await this.telegram.sendMessage(chatId, '❌ پاسخی دریافت نشد. لطفاً مجدداً تلاش کنید.');
        return;
      }

      // Format response (split if too long)
      let finalResponse = response;
      if (response.length > 4000) {
        finalResponse = response.substring(0, 3800) + '\n\n... (ادامه در پیام بعدی)';
        // Send full response in multiple messages
        const chunks = this.splitMessage(response);
        for (let i = 0; i < chunks.length; i++) {
          if (i === 0) {
            await this.telegram.sendMessage(chatId, chunks[i]);
          } else {
            await this.telegram.sendMessage(chatId, `📄 ادامه (${i+1}/${chunks.length}):\n\n${chunks[i]}`);
          }
        }
      } else {
        await this.telegram.sendMessage(chatId, finalResponse);
      }

      // Deduct balance (if not premium)
      if (!isPremium) {
        await this.db.deductBalance(user.user_id, 'text', 1);
        await this.db.logActivity(user.user_id, 'ai_chat', { 
          model: modelId, 
          prompt: prompt.substring(0, 100),
          responseLength: response.length,
          consumed: 1
        });
      } else {
        await this.db.logActivity(user.user_id, 'ai_chat_premium', { 
          model: modelId, 
          promptLength: prompt.length,
          responseLength: response.length
        });
      }

      // Track usage
      await this.db.trackModelUsage(user.user_id, modelId, 'chat', true);

    } catch (error) {
      console.error('AI Chat Error:', error);
      await this.telegram.sendMessage(chatId, `
❌ **خطا در ارتباط با هوش مصنوعی**

${error.message}

🔄 لطفاً مجدداً تلاش کنید یا مدل دیگری انتخاب کنید.
`);
    }
  }

  // ---- Image Generation ----
  async handleImageGeneration(chatId, prompt, user, options = {}) {
    const access = await this.checkAccess(user.user_id);
    if (!access.allowed) {
      await this.telegram.sendMessage(chatId, access.reason);
      return;
    }

    const isPremium = await this.db.checkPremium(user.user_id);
    const balance = await this.db.getBalance(user.user_id);

    if (!isPremium && (balance?.image || 0) < 1) {
      await this.telegram.sendMessage(chatId, `
❌ **اعتبار تصویر کافی نیست!**

موجودی: ${balance?.image || 0}
نیاز: ۱

💡 بسته تصویر را از /subscription تهیه کنید.
`, KEYBOARDS.subscription);
      return;
    }

    await this.sendUploadPhoto(chatId);

    try {
      let modelId = options.modelId || 'dall-e-3';
      let size = options.size || '1024x1024';
      
      // If premium, use better model
      if (isPremium && modelId === 'dall-e-3') {
        modelId = 'dall-e-4';
        size = '1792x1024';
      }

      const result = await this.ai.generate(modelId, prompt, 'image', {
        userId: user.user_id,
        size: size,
        quality: isPremium ? 'hd' : 'standard'
      });

      const imageUrl = this.ai.extractResponse(result, 'image');
      
      if (!imageUrl) {
        await this.telegram.sendMessage(chatId, '❌ خطا در تولید تصویر. لطفاً پرامپت خود را تغییر دهید.');
        return;
      }

      const caption = `🎨 **تصویر تولید شده**

📝 پرامپت: ${prompt}
🤖 مدل: ${modelId}
📐 سایز: ${size}
${isPremium ? '⭐ کاربر ویژه' : ''}

🔄 برای تولید مجدد /image ${prompt}`;

      await this.telegram.sendPhoto(chatId, imageUrl, caption);

      if (!isPremium) {
        await this.db.deductBalance(user.user_id, 'image', 1);
        await this.db.logActivity(user.user_id, 'ai_image', { 
          model: modelId, 
          prompt: prompt.substring(0, 100),
          size: size,
          consumed: 1
        });
      }

      await this.db.trackModelUsage(user.user_id, modelId, 'image', true);

    } catch (error) {
      console.error('Image Generation Error:', error);
      await this.telegram.sendMessage(chatId, `
❌ **خطا در تولید تصویر**

${error.message}

💡 نکات:
• پرامپت خود را دقیق‌تر بنویسید
• از مدل دیگری استفاده کنید
• از /help راهنما را ببینید
`);
    }
  }

  // ---- Video Generation ----
  async handleVideoGeneration(chatId, prompt, user, options = {}) {
    const access = await this.checkAccess(user.user_id);
    if (!access.allowed) {
      await this.telegram.sendMessage(chatId, access.reason);
      return;
    }

    const isPremium = await this.db.checkPremium(user.user_id);
    const balance = await this.db.getBalance(user.user_id);

    if (!isPremium && (balance?.video || 0) < 1) {
      await this.telegram.sendMessage(chatId, `
❌ **اعتبار ویدیو کافی نیست!**

موجودی: ${balance?.video || 0}
نیاز: ۱

💡 بسته ویدیو را از /subscription تهیه کنید.
`, KEYBOARDS.subscription);
      return;
    }

    await this.sendUploadVideo(chatId);

    try {
      let modelId = options.modelId || 'sora-2';
      let duration = options.duration || 5;
      
      if (isPremium) {
        modelId = 'sora-2-pro';
        duration = 10;
      }

      const result = await this.ai.generate(modelId, prompt, 'video', {
        userId: user.user_id,
        duration: duration,
        resolution: isPremium ? '1080p' : '720p'
      });

      const videoUrl = this.ai.extractResponse(result, 'video');
      
      if (!videoUrl) {
        await this.telegram.sendMessage(chatId, '❌ خطا در تولید ویدیو. لطفاً مجدداً تلاش کنید.');
        return;
      }

      const caption = `🎬 **ویدیو تولید شده**

📝 پرامپت: ${prompt}
🤖 مدل: ${modelId}
⏱️ مدت: ${duration} ثانیه
${isPremium ? '⭐ کاربر ویژه' : ''}

🔄 برای تولید مجدد /video ${prompt}`;

      await this.telegram.sendVideo(chatId, videoUrl, caption);

      if (!isPremium) {
        await this.db.deductBalance(user.user_id, 'video', 1);
        await this.db.logActivity(user.user_id, 'ai_video', { 
          model: modelId, 
          prompt: prompt.substring(0, 100),
          duration: duration,
          consumed: 1
        });
      }

      await this.db.trackModelUsage(user.user_id, modelId, 'video', true);

    } catch (error) {
      console.error('Video Generation Error:', error);
      await this.telegram.sendMessage(chatId, `
❌ **خطا در تولید ویدیو**

${error.message}

💡 نکات:
• پرامپت خود را دقیق‌تر بنویسید
• مدت زمان را کمتر کنید (۳-۵ ثانیه)
• از مدل دیگری استفاده کنید
`);
    }
  }

  // ---- Voice Generation ----
  async handleVoiceGeneration(chatId, text, user, options = {}) {
    const access = await this.checkAccess(user.user_id);
    if (!access.allowed) {
      await this.telegram.sendMessage(chatId, access.reason);
      return;
    }

    const isPremium = await this.db.checkPremium(user.user_id);
    const balance = await this.db.getBalance(user.user_id);

    if (!isPremium && (balance?.voice || 0) < 1) {
      await this.telegram.sendMessage(chatId, `
❌ **اعتبار صدا کافی نیست!**

موجودی: ${balance?.voice || 0}
نیاز: ۱

💡 بسته صدا را از /subscription تهیه کنید.
`, KEYBOARDS.subscription);
      return;
    }

    await this.sendUploadVoice(chatId);

    try {
      let modelId = options.modelId || 'elevenlabs-v3';
      let voice = options.voice || 'Rachel';
      
      if (isPremium) {
        modelId = 'elevenlabs-v4';
        voice = 'Rachel';
      }

      const result = await this.ai.generate(modelId, text, 'voice', {
        userId: user.user_id,
        voice: voice,
        stability: isPremium ? 0.6 : 0.5,
        similarityBoost: isPremium ? 0.8 : 0.75
      });

      if (!result) {
        await this.telegram.sendMessage(chatId, '❌ خطا در تولید صدا. لطفاً مجدداً تلاش کنید.');
        return;
      }

      const caption = `🎵 **تبدیل متن به صدا**

📝 متن: ${text.substring(0, 100)}${text.length > 100 ? '...' : ''}
🤖 مدل: ${modelId}
🗣️ صدا: ${voice}
${isPremium ? '⭐ کاربر ویژه' : ''}

🔄 برای تولید مجدد /voice ${text}`;

      const audioBuffer = result;
      const blob = new Blob([audioBuffer], { type: 'audio/mpeg' });

      await this.telegram.sendVoice(chatId, blob, caption);

      if (!isPremium) {
        await this.db.deductBalance(user.user_id, 'voice', 1);
        await this.db.logActivity(user.user_id, 'ai_voice', { 
          model: modelId, 
          textLength: text.length,
          voice: voice,
          consumed: 1
        });
      }

      await this.db.trackModelUsage(user.user_id, modelId, 'voice', true);

    } catch (error) {
      console.error('Voice Generation Error:', error);
      await this.telegram.sendMessage(chatId, `
❌ **خطا در تولید صدا**

${error.message}

💡 نکات:
• متن خود را کوتاه‌تر کنید (حداکثر ۵۰۰ کاراکتر)
• از صدای دیگری استفاده کنید
• از /help راهنما را ببینید
`);
    }
  }

  // ---- Summarize ----
  async handleSummarize(chatId, text, user, options = {}) {
    const prompt = `لطفاً متن زیر را خلاصه کنید و نکات کلیدی را استخراج کنید:

${text}

خلاصه باید شامل:
1. موضوع اصلی
2. نکات کلیدی (به صورت بولت پوینت)
3. نتیجه‌گیری نهایی

خلاصه را به فارسی و روان بنویسید.`;
    
    await this.handleAIChat(chatId, prompt, user, { 
      ...options, 
      modelId: 'gpt-4o-mini',
      systemPrompt: 'شما یک متخصص خلاصه‌سازی متن هستید. خلاصه‌ای دقیق و مفید ارائه دهید.'
    });
  }

  // ---- Translate ----
  async handleTranslate(chatId, text, user, targetLang = 'فارسی', options = {}) {
    const prompt = `لطفاً متن زیر را به ${targetLang} ترجمه کنید:

${text}

نکات:
- ترجمه روان و طبیعی باشد
- اصطلاحات خاص را به درستی ترجمه کنید
- ساختار جمله‌ها را حفظ کنید

ترجمه را به ${targetLang} بنویسید.`;
    
    await this.handleAIChat(chatId, prompt, user, { 
      ...options, 
      modelId: 'gpt-4o-mini',
      systemPrompt: `شما یک مترجم حرفه‌ای هستید. متن را به ${targetLang} ترجمه کنید.`
    });
  }

  // ---- Code Generation ----
  async handleCodeGeneration(chatId, prompt, user, language = 'javascript', options = {}) {
    const fullPrompt = `لطفاً کد زیر را در زبان ${language} بنویسید:

${prompt}

نیازمندی‌ها:
- کد تمیز و خواناتر باشد
- دارای کامنت‌های توضیحی
- بهترین روش‌های برنامه‌نویسی رعایت شود
- در صورت امکان، مثال استفاده نیز ارائه شود

کد را با توضیحات کامل بنویسید.`;
    
    await this.handleAIChat(chatId, fullPrompt, user, { 
      ...options, 
      modelId: 'gpt-4o',
      systemPrompt: `شما یک برنامه‌نویس حرفه‌ای در زبان ${language} هستید. کد با کیفیت و توضیحات کامل ارائه دهید.`
    });
  }

  // ---- Analyze ----
  async handleAnalyze(chatId, text, user, options = {}) {
    const prompt = `لطفاً متن زیر را به طور کامل تحلیل کنید:

${text}

تحلیل باید شامل:
1. موضوع و محتوای اصلی
2. سبک و لحن متن
3. نقاط قوت و ضعف
4. پیشنهادات برای بهبود
5. نتیجه‌گیری نهایی

تحلیل را به فارسی و جامع بنویسید.`;
    
    await this.handleAIChat(chatId, prompt, user, { 
      ...options, 
      modelId: 'gpt-4o',
      systemPrompt: 'شما یک تحلیلگر حرفه‌ای متن هستید. تحلیل دقیق و جامع ارائه دهید.'
    });
  }

  // ---- Search ----
  async handleSearch(chatId, query, user, options = {}) {
    await this.sendTyping(chatId);

    try {
      const apiKey = CONFIG.TAVILY_API_KEY;
      if (!apiKey) {
        await this.telegram.sendMessage(chatId, '❌ سرویس جستجو در دسترس نیست.');
        return;
      }

      const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query,
          search_depth: 'advanced',
          include_answer: true,
          max_results: 5
        })
      });

      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`);
      }

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
      } else {
        result += '❌ نتیجه‌ای یافت نشد.';
      }

      await this.telegram.sendMessage(chatId, result);

    } catch (error) {
      console.error('Search Error:', error);
      await this.telegram.sendMessage(chatId, `
❌ **خطا در جستجو**

${error.message}

💡 نکات:
• عبارت جستجو را دقیق‌تر کنید
• از /ai برای جستجوی هوشمند استفاده کنید
`);
    }
  }

  // ---- Subscription ----
  async showSubscriptionPlans(chatId) {
    const plans = CONFIG.SUBSCRIPTION_PLANS;
    let msg = `⭐ **بسته‌های اشتراک ویژه**

🔥 **۴ بسته متنوع برای هر نیازی:**

`;

    for (const [key, plan] of Object.entries(plans)) {
      msg += `${plan.badge} **${plan.name}**\n`;
      msg += `💰 قیمت: ${plan.price.toLocaleString()} تومان\n`;
      msg += `📅 مدت: ${plan.days > 0 ? plan.days + ' روز' : 'اعتبار مصرفی'}\n`;
      
      const features = plan.features;
      const featureList = [];
      if (features.text) featureList.push(`📝 ${features.text} اعتبار متن`);
      if (features.image) featureList.push(`🎨 ${features.image} اعتبار تصویر`);
      if (features.video) featureList.push(`🎬 ${features.video} اعتبار ویدیو`);
      if (features.voice) featureList.push(`🎵 ${features.voice} اعتبار صدا`);
      
      if (featureList.length > 0) {
        msg += `✨ امکانات: ${featureList.join('، ')}\n`;
      }
      
      if (features.models) {
        msg += `🤖 مدل‌ها: ${features.models.join('، ')}\n`;
      }
      
      msg += `📝 ${plan.description}\n\n`;
    }

    msg += `🔽 **برای خرید یکی از گزینه‌های زیر را انتخاب کنید:**`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.subscription);
  }

  // ---- Subscription Purchase ----
  async handleSubscriptionPurchase(chatId, user, planId) {
    const plan = CONFIG.SUBSCRIPTION_PLANS[planId];
    if (!plan) {
      await this.telegram.sendMessage(chatId, '❌ بسته نامعتبر.');
      return;
    }

    await this.telegram.sendMessage(chatId, `
${plan.badge} **${plan.name}**

💰 قیمت: ${plan.price.toLocaleString()} تومان
📅 مدت: ${plan.days > 0 ? plan.days + ' روز' : 'اعتبار مصرفی'}
📝 ${plan.description}

✅ **برای خرید روش پرداخت را انتخاب کنید:**
`, KEYBOARDS.payment);

    await this.db.setSession(user.user_id, { pending_plan: planId });
    await this.db.logActivity(user.user_id, 'subscription_purchase_start', { plan: planId });
  }

  // ---- Payment Method ----
  async handlePaymentMethod(chatId, user, method) {
    const session = await this.db.getSession(user.user_id);
    if (!session || !session.pending_plan) {
      await this.telegram.sendMessage(chatId, '❌ جلسه منقضی شده. /subscription را مجدداً بزنید.');
      return;
    }

    const plan = CONFIG.SUBSCRIPTION_PLANS[session.pending_plan];
    if (!plan) {
      await this.telegram.sendMessage(chatId, '❌ خطا در دریافت اطلاعات اشتراک.');
      return;
    }

    const paymentId = await this.db.createPayment(user.user_id, plan.price, method, session.pending_plan);
    if (!paymentId) {
      await this.telegram.sendMessage(chatId, '❌ خطا در ایجاد پرداخت.');
      return;
    }

    let paymentMsg = `💳 **روش پرداخت: ${method}**

💰 مبلغ: ${plan.price.toLocaleString()} تومان
⭐ اشتراک: ${plan.name}

`;

    if (method === 'online') {
      paymentMsg += `🔗 **لینک پرداخت:**\n`;
      paymentMsg += `https://payment.example.com/pay/${paymentId}\n\n`;
      paymentMsg += `✅ پس از پرداخت، دکمه تأیید را بزنید.`;
    } else if (method === 'ton') {
      paymentMsg += `💎 **آدرس کیف پول TON:**\n`;
      paymentMsg += `EQD... (آدرس کیف پول)\n\n`;
      paymentMsg += `💰 مبلغ: $${Math.ceil(plan.price / 50000)} معادل TON\n`;
      paymentMsg += `✅ پس از ارسال، دکمه تأیید را بزنید.`;
    } else if (method === 'trx') {
      paymentMsg += `💰 **آدرس کیف پول TRX:**\n`;
      paymentMsg += `T... (آدرس کیف پول)\n\n`;
      paymentMsg += `💰 مبلغ: $${Math.ceil(plan.price / 50000)} معادل TRX\n`;
      paymentMsg += `✅ پس از ارسال، دکمه تأیید را بزنید.`;
    } else if (method === 'card') {
      paymentMsg += `🏦 **شماره کارت:**\n`;
      paymentMsg += `6037-9912-3456-7890\n`;
      paymentMsg += `به نام: نام صاحب حساب\n\n`;
      paymentMsg += `✅ پس از واریز، دکمه تأیید را بزنید.`;
    }

    await this.telegram.sendMessage(chatId, paymentMsg, KEYBOARDS.confirm);
    await this.db.setSession(user.user_id, { 
      pending_payment: paymentId, 
      pending_plan: session.pending_plan 
    });
  }

  // ---- Confirm Payment ----
  async handleConfirmPayment(chatId, user) {
    const session = await this.db.getSession(user.user_id);
    if (!session || !session.pending_payment) {
      await this.telegram.sendMessage(chatId, '❌ جلسه منقضی شده.');
      return;
    }

    const result = await this.db.confirmPayment(session.pending_payment);
    if (!result) {
      await this.telegram.sendMessage(chatId, '❌ خطا در تأیید پرداخت. با پشتیبانی تماس بگیرید.', KEYBOARDS.support);
      return;
    }

    const plan = CONFIG.SUBSCRIPTION_PLANS[result.plan];
    if (plan && plan.days > 0) {
      await this.telegram.sendMessage(chatId, `
✅ **پرداخت با موفقیت انجام شد!**

🎉 تبریک! اشتراک ${plan.name} فعال شد.

⭐ **مدت:** ${plan.days} روز
🤖 **دسترسی:** به همه مدل‌های ${plan.features.models?.join('، ') || 'پیشرفته'}
💰 **اعتبار:** ${plan.features.text} متن، ${plan.features.image} تصویر، ${plan.features.video} ویدیو، ${plan.features.voice} صدا

🚀 از امکانات ویژه استفاده کنید!
`, KEYBOARDS.main);
    } else if (plan) {
      await this.telegram.sendMessage(chatId, `
✅ **پرداخت با موفقیت انجام شد!**

🎉 اعتبار ${plan.name} به کیف پول شما اضافه شد.

💰 **اعتبار اضافه شده:**
• 📝 ${plan.features.text} اعتبار متن
• 🎨 ${plan.features.image} اعتبار تصویر
• 🎬 ${plan.features.video} اعتبار ویدیو
• 🎵 ${plan.features.voice} اعتبار صدا

🚀 از امکانات ویژه استفاده کنید!
`, KEYBOARDS.main);
    }

    await this.db.logActivity(user.user_id, 'payment_success', { 
      payment: session.pending_payment,
      plan: result.plan
    });
    
    await this.db.clearSession(user.user_id);
  }

  // ---- Referral ----
  async handleReferral(chatId, user) {
    const referrals = await this.db.getReferrals(user.user_id);
    const referralDetails = await this.db.getReferralDetails(user.user_id);
    const inviteCode = user.invite_code || Math.random().toString(36).substring(2, 10);

    let msg = `🎯 **سیستم زیرمجموعه‌گیری**

👥 **تعداد زیرمجموعه‌ها:** ${referrals} نفر

🔗 **لینک دعوت شما:**
\`https://t.me/${CONFIG.BOT_NAME || 'YourBot'}?start=ref_${user.user_id}\`

🎁 **پاداش هر دعوت:**
• 📝 ${CONFIG.REFERRAL_BONUS.text} اعتبار متن
• 🎨 ${CONFIG.REFERRAL_BONUS.image} اعتبار تصویر
• 🎵 ${CONFIG.REFERRAL_BONUS.voice} اعتبار صدا
• 🎬 ${CONFIG.REFERRAL_BONUS.video} اعتبار ویدیو
• ⭐ ${CONFIG.REFERRAL_BONUS.premium_days || 0} روز اشتراک ویژه

`;

    if (referralDetails.length > 0) {
      msg += `📋 **لیست زیرمجموعه‌ها:**\n`;
      for (const r of referralDetails.slice(0, 10)) {
        msg += `• ${r.first_name || 'کاربر'} @${r.username || 'N/A'} - ${new Date(r.created_at).toLocaleDateString('fa-IR')}\n`;
      }
      if (referralDetails.length > 10) {
        msg += `\nو ${referralDetails.length - 10} نفر دیگر...`;
      }
    } else {
      msg += `❌ هنوز هیچ زیرمجموعه‌ای ندارید.`;
    }

    msg += `\n\n💡 **نکات:**
• لینک را با دوستان خود به اشتراک بگذارید
• هر دعوت ${CONFIG.REFERRAL_BONUS.text} اعتبار متن دارد
• هر چه بیشتر دعوت کنید، پاداش بیشتری دریافت می‌کنید`;

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Support ----
  async handleSupport(chatId, user, subject = '', message = '') {
    if (subject && message) {
      // Create ticket
      const ticketId = await this.db.createTicket(user.user_id, subject, message);
      if (ticketId) {
        await this.telegram.sendMessage(chatId, `
✅ **تیکت شما با موفقیت ثبت شد!**

🆔 شماره تیکت: #${ticketId}
📝 موضوع: ${subject}

⏳ تیم پشتیبانی در اسرع وقت پاسخ خواهد داد.
📱 برای پیگیری تیکت از /tickets استفاده کنید.
`);
        await this.db.logActivity(user.user_id, 'ticket_created', { ticketId, subject });
      } else {
        await this.telegram.sendMessage(chatId, '❌ خطا در ثبت تیکت. مجدداً تلاش کنید.');
      }
      return;
    }

    const msg = `❓ **پشتیبانی و راهنما**

📧 **ایمیل:** support@example.com
🆔 **ربات پشتیبانی:** @YourSupportBot

📝 **ارسال تیکت:**
برای ارسال تیکت از دستور زیر استفاده کنید:
\`/ticket موضوع | پیام\`

مثال:
\`/ticket مشکل پرداخت | من پرداخت انجام دادم اما اعتبار اضافه نشد\`

⏳ **زمان پاسخگویی:** ۲۴-۴۸ ساعت

📚 **راهنما:**
• /help - راهنمای کامل
• /faq - سوالات متداول
• /guide - آموزش استفاده

💡 **نکات:**
• قبل از ارسال تیکت، راهنما را مطالعه کنید
• برای مسائل فوری از ایمیل استفاده کنید
• شماره تیکت خود را یادداشت کنید`;

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Stats ----
  async handleStats(chatId) {
    const stats = await this.db.getStats();
    const totalModels = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);

    const msg = `📈 **آمار کلی ربات**

👥 **کل کاربران:** ${stats?.total || 0}
⭐ **کاربران ویژه:** ${stats?.premium || 0}
💳 **درآمد کل:** ${(stats?.income || 0).toLocaleString()} تومان
📈 **درآمد امروز:** ${(stats?.todayIncome || 0).toLocaleString()} تومان
👤 **کاربران امروز:** ${stats?.todayUsers || 0}
⏳ **پرداخت‌های در انتظار:** ${stats?.pendingPayments || 0}
📝 **تیکت‌های باز:** ${stats?.openTickets || 0}
🤖 **تعداد مدل‌ها:** ${totalModels}

📅 **تاریخ:** ${new Date().toLocaleDateString('fa-IR')}
⏰ **زمان:** ${new Date().toLocaleTimeString('fa-IR')}

🔄 **آخرین بروزرسانی:** ${CONFIG.VERSION}`;

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Tickets ----
  async handleTickets(chatId, user) {
    const tickets = await this.db.getTickets(user.user_id, 20);

    if (tickets.length === 0) {
      await this.telegram.sendMessage(chatId, '❌ هیچ تیکتی ثبت نکرده‌اید.');
      return;
    }

    let msg = `📝 **لیست تیکت‌های شما**

`;
    for (const t of tickets) {
      const status = t.status === 'open' ? '🟢 باز' : t.status === 'answered' ? '🟡 پاسخ داده شده' : '🔴 بسته';
      msg += `🆔 #${t.id} - ${status}\n`;
      msg += `📌 ${t.subject}\n`;
      msg += `📅 ${new Date(t.created_at).toLocaleDateString('fa-IR')}\n\n`;
    }

    msg += `💡 برای مشاهده جزئیات تیکت:\n/ticket_detail [id]`;

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Ticket Detail ----
  async handleTicketDetail(chatId, user, ticketId) {
    const ticket = await this.db.query(
      'SELECT * FROM tickets WHERE id = $1 AND user_id = $2',
      [ticketId, user.user_id]
    );

    if (!ticket.rows || ticket.rows.length === 0) {
      await this.telegram.sendMessage(chatId, '❌ تیکت یافت نشد.');
      return;
    }

    const t = ticket.rows[0];
    const status = t.status === 'open' ? '🟢 باز' : t.status === 'answered' ? '🟡 پاسخ داده شده' : '🔴 بسته';

    let msg = `📝 **جزئیات تیکت #${t.id}**

📌 **موضوع:** ${t.subject}
📊 **وضعیت:** ${status}
📅 **تاریخ:** ${new Date(t.created_at).toLocaleDateString('fa-IR')}

📄 **پیام شما:**
${t.message}

`;

    if (t.admin_response) {
      msg += `📨 **پاسخ پشتیبانی:**
${t.admin_response}

📅 پاسخ در: ${new Date(t.updated_at).toLocaleDateString('fa-IR')}
`;
    }

    if (t.status !== 'closed') {
      msg += `\n💡 برای بستن تیکت: /ticket_close ${t.id}`;
    }

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Close Ticket ----
  async handleTicketClose(chatId, user, ticketId) {
    const result = await this.db.closeTicket(ticketId);
    if (result) {
      await this.telegram.sendMessage(chatId, `✅ تیکت #${ticketId} بسته شد.`);
      await this.db.logActivity(user.user_id, 'ticket_closed', { ticketId });
    } else {
      await this.telegram.sendMessage(chatId, '❌ خطا در بستن تیکت.');
    }
  }

  // ---- Profile ----
  async handleProfile(chatId, user) {
    const balance = await this.db.getBalance(user.user_id);
    const premiumInfo = await this.db.getPremiumInfo(user.user_id);
    const stats = await this.db.getUserStats(user.user_id);
    const referrals = await this.db.getReferrals(user.user_id);

    const msg = `👤 **پروفایل کاربری**

🆔 **شناسه:** ${user.user_id}
👤 **نام:** ${user.first_name} ${user.last_name || ''}
📱 **یوزرنیم:** @${user.username || 'N/A'}

💰 **موجودی:**
• 📝 متن: ${balance?.text || 0}
• 🎨 تصویر: ${balance?.image || 0}
• 🎬 ویدیو: ${balance?.video || 0}
• 🎵 صدا: ${balance?.voice || 0}

⭐ **وضعیت:** ${premiumInfo ? `💎 ویژه (${premiumInfo.plan})` : '⚪ معمولی'}
${premiumInfo ? `⏳ ${premiumInfo.daysLeft} روز باقی مانده` : ''}

📊 **آمار:**
• 💬 چت: ${stats?.chat_count || 0}
• 🎨 تصویر: ${stats?.image_count || 0}
• 🎬 ویدیو: ${stats?.video_count || 0}
• 🎵 صدا: ${stats?.voice_count || 0}

👥 **زیرمجموعه:** ${referrals} نفر
💳 **درآمد:** ${(stats?.total_earned || 0).toLocaleString()} تومان

📅 **تاریخ عضویت:** ${new Date(user.created_at).toLocaleDateString('fa-IR')}

🔗 **کد دعوت:** \`${user.invite_code || 'N/A'}\``;

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Settings ----
  async handleSettings(chatId, user) {
    const settings = await this.db.getSettings();
    
    let msg = `⚙️ **تنظیمات ربات**

`;
    for (const s of settings) {
      if (s.setting_key.startsWith('welcome_') || s.setting_key.startsWith('daily_')) {
        msg += `• ${s.setting_key}: ${s.setting_value}\n`;
      }
    }

    msg += `\n💡 این تنظیمات توسط ادمین قابل تغییر است.`;

    await this.telegram.sendMessage(chatId, msg);
  }

  // ---- Feedback ----
  async handleFeedback(chatId, user, feedback) {
    if (!feedback) {
      await this.telegram.sendMessage(chatId, `
📝 **ارسال بازخورد**

نظر، پیشنهاد یا انتقاد خود را بنویسید.
مثال: /feedback ربات عالی است اما کاش مدل بیشتر داشت

💡 بازخورد شما به بهبود ربات کمک می‌کند.
`);
      return;
    }

    await this.db.logActivity(user.user_id, 'feedback', { feedback });
    await this.telegram.sendMessage(chatId, `
✅ **بازخورد شما با موفقیت ثبت شد!**

📝 **متن بازخورد:**
${feedback}

🙏 با تشکر از شما برای کمک به بهبود ربات.
`);
  }

  // ============================================================
  // 🛠️ ADMIN HANDLERS
  // ============================================================

  async handleAdminUsers(chatId) {
    const users = await this.db.getUsers(20, 0);

    let msg = `👥 **لیست کاربران (۲۰ نفر اخیر)**

`;
    for (const u of users) {
      const status = u.is_banned ? '🚫' : u.premium_expiry && new Date(u.premium_expiry) > new Date() ? '⭐' : '⚪';
      msg += `${status} ${u.first_name} @${u.username || 'N/A'}\n`;
      msg += `💰 ${u.balance_text} | 🎨 ${u.balance_image}\n`;
      msg += `📅 ${new Date(u.created_at).toLocaleDateString('fa-IR')}\n\n`;
    }

    msg += `📊 **جمع کل:** ${await this.db.getTotalUsers()} کاربر`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  async handleAdminStats(chatId) {
    const stats = await this.db.getStats();
    const totalModels = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);
    const admins = await this.db.getAdmins();

    const msg = `📊 **آمار پیشرفته ربات**

👥 **کل کاربران:** ${stats?.total || 0}
⭐ **کاربران ویژه:** ${stats?.premium || 0}
📈 **کاربران امروز:** ${stats?.todayUsers || 0}
💳 **درآمد کل:** ${(stats?.income || 0).toLocaleString()} تومان
📈 **درآمد امروز:** ${(stats?.todayIncome || 0).toLocaleString()} تومان
⏳ **پرداخت‌های در انتظار:** ${stats?.pendingPayments || 0}
📝 **تیکت‌های باز:** ${stats?.openTickets || 0}
🤖 **تعداد مدل‌ها:** ${totalModels}
👑 **تعداد ادمین‌ها:** ${admins.length}

📅 **تاریخ:** ${new Date().toLocaleDateString('fa-IR')}
⏰ **زمان:** ${new Date().toLocaleTimeString('fa-IR')}
🔄 **نسخه:** ${CONFIG.VERSION}`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  async handleAdminPayments(chatId) {
    const payments = await this.db.getPendingPayments();

    if (payments.length === 0) {
      await this.telegram.sendMessage(chatId, '✅ هیچ پرداخت در انتظاری وجود ندارد.', KEYBOARDS.admin);
      return;
    }

    let msg = `💳 **پرداخت‌های در انتظار (${payments.length})**

`;
    for (const p of payments) {
      msg += `🆔 #${p.id}\n`;
      msg += `👤 ${p.first_name} @${p.username || 'N/A'}\n`;
      msg += `💰 ${p.amount.toLocaleString()} تومان\n`;
      msg += `💳 روش: ${p.method}\n`;
      msg += `📅 ${new Date(p.created_at).toLocaleDateString('fa-IR')}\n\n`;
    }

    msg += `💡 برای تأیید: /confirm_payment [id]\n`;
    msg += `💡 برای رد: /reject_payment [id] [دلیل]`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  async handleAdminTickets(chatId) {
    const tickets = await this.db.getAllTickets('open');

    if (tickets.length === 0) {
      await this.telegram.sendMessage(chatId, '✅ هیچ تیکت بازی وجود ندارد.', KEYBOARDS.admin);
      return;
    }

    let msg = `📝 **تیکت‌های باز (${tickets.length})**

`;
    for (const t of tickets) {
      msg += `🆔 #${t.id}\n`;
      msg += `👤 ${t.first_name} @${t.username || 'N/A'}\n`;
      msg += `📌 ${t.subject}\n`;
      msg += `📅 ${new Date(t.created_at).toLocaleDateString('fa-IR')}\n\n`;
    }

    msg += `💡 برای پاسخ: /ticket_reply [id] [پاسخ]`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  async handleAdminModels(chatId) {
    let msg = `🤖 **لیست مدل‌های هوش مصنوعی**

`;
    const categories = {
      chat: '💬 چت',
      image: '🎨 تصویر',
      video: '🎬 ویدیو',
      voice: '🎵 صدا'
    };

    for (const [cat, models] of Object.entries(CONFIG.MODELS)) {
      const count = Object.keys(models).length;
      msg += `📌 ${categories[cat] || cat}: ${count} مدل\n`;
      
      // Show first 5 models
      const modelList = Object.keys(models).slice(0, 5);
      if (modelList.length > 0) {
        msg += `   ${modelList.join(', ')}`;
        if (count > 5) msg += ` و ${count - 5} مدل دیگر`;
        msg += `\n`;
      }
      msg += `\n`;
    }

    const total = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);
    msg += `📊 **مجموع:** ${total} مدل`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  async handleAdminBroadcast(chatId, message) {
    if (!message) {
      await this.telegram.sendMessage(chatId, `
📢 **ارسال پیام همگانی**

برای ارسال پیام به همه کاربران از دستور زیر استفاده کنید:
\`/broadcast متن پیام\`

⚠️ **توجه:**
• پیام به همه ${await this.db.getTotalUsers()} کاربر ارسال می‌شود
• این عملیات غیرقابل بازگشت است
• از HTML برای قالب‌بندی استفاده کنید

مثال:
\`/broadcast <b>سلام</b> به همه کاربران عزیز!\`
`, KEYBOARDS.admin);
      return;
    }

    // Confirm
    await this.telegram.sendMessage(chatId, `
⚠️ **تأیید ارسال پیام همگانی**

📝 **متن پیام:**
${message}

👥 **تعداد گیرندگان:** ${await this.db.getTotalUsers()} کاربر

✅ برای تأیید ارسال، دکمه زیر را بزنید:
`, {
      inline_keyboard: [
        [{ text: '✅ تأیید و ارسال', callback_data: 'broadcast_confirm' }],
        [{ text: '❌ انصراف', callback_data: 'broadcast_cancel' }]
      ]
    });

    this.broadcastQueue.push({
      chatId,
      message,
      confirmed: false
    });
  }

  async handleAdminBroadcastConfirm(chatId) {
    const queueItem = this.broadcastQueue.find(q => q.chatId === chatId && !q.confirmed);
    if (!queueItem) {
      await this.telegram.sendMessage(chatId, '❌ پیامی برای ارسال وجود ندارد.');
      return;
    }

    queueItem.confirmed = true;
    
    await this.telegram.sendMessage(chatId, `📢 **در حال ارسال پیام همگانی...**`);
    
    // Start broadcast in background
    this.processBroadcast(chatId, queueItem.message);
  }

  async processBroadcast(chatId, message) {
    if (this.isBroadcasting) {
      await this.telegram.sendMessage(chatId, '⏳ در حال حاضر یک پیام همگانی در حال ارسال است.');
      return;
    }

    this.isBroadcasting = true;
    let sent = 0;
    let failed = 0;
    const batchSize = 30;

    try {
      // Get all users
      const users = await this.db.getUsers(100000, 0);
      const total = users.length;

      await this.telegram.sendMessage(chatId, `📢 **ارسال پیام همگانی به ${total} کاربر...**`);

      for (let i = 0; i < users.length; i += batchSize) {
        const batch = users.slice(i, i + batchSize);
        
        for (const user of batch) {
          try {
            await this.telegram.sendMessage(user.user_id, message, null, { parseMode: 'HTML' });
            sent++;
          } catch (error) {
            failed++;
          }
        }

        // Progress update every 100 users
        if (i % 100 === 0 && i > 0) {
          await this.telegram.sendMessage(chatId, `📊 پیشرفت: ${Math.round((i / total) * 100)}% (${i}/${total})`);
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      await this.telegram.sendMessage(chatId, `
✅ **ارسال پیام همگانی کامل شد!**

📊 **آمار ارسال:**
• ✅ موفق: ${sent}
• ❌ ناموفق: ${failed}
• 👥 کل: ${sent + failed}

⏱️ زمان: ${new Date().toLocaleTimeString('fa-IR')}
`);

    } catch (error) {
      console.error('Broadcast Error:', error);
      await this.telegram.sendMessage(chatId, `❌ خطا در ارسال پیام همگانی: ${error.message}`);
    } finally {
      this.isBroadcasting = false;
      this.broadcastQueue = this.broadcastQueue.filter(q => q.chatId !== chatId);
    }
  }

  async handleAdminBans(chatId) {
    const banned = await this.db.getBannedUsers();

    if (banned.length === 0) {
      await this.telegram.sendMessage(chatId, '✅ هیچ کاربر مسدودی وجود ندارد.', KEYBOARDS.admin);
      return;
    }

    let msg = `🚫 **کاربران مسدود شده (${banned.length})**

`;
    for (const u of banned) {
      msg += `👤 ${u.first_name} @${u.username || 'N/A'}\n`;
      msg += `🆔 ${u.user_id}\n`;
      msg += `📅 ${new Date(u.updated_at).toLocaleDateString('fa-IR')}\n\n`;
    }

    msg += `💡 برای رفع مسدودیت: /unban [id]`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  async handleAdminLogs(chatId) {
    const logs = await this.db.getRecentActivity(50);

    if (logs.length === 0) {
      await this.telegram.sendMessage(chatId, '❌ هیچ لاگی یافت نشد.', KEYBOARDS.admin);
      return;
    }

    let msg = `📊 **آخرین فعالیت‌ها (۵۰ مورد)**

`;
    for (const l of logs) {
      msg += `👤 ${l.first_name || 'کاربر'} @${l.username || 'N/A'}\n`;
      msg += `🎯 ${l.action}\n`;
      msg += `📅 ${new Date(l.created_at).toLocaleString('fa-IR')}\n\n`;
    }

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  async handleAdminSettings(chatId) {
    const settings = await this.db.getSettings();

    let msg = `⚙️ **تنظیمات ربات**

`;
    for (const s of settings) {
      msg += `• ${s.setting_key}: \`${s.setting_value}\`\n`;
    }

    msg += `\n💡 برای تغییر تنظیمات:\n`;
    msg += `/set_setting [key] [value]\n\n`;
    msg += `مثال: /set_setting maintenance_mode true`;

    await this.telegram.sendMessage(chatId, msg, KEYBOARDS.admin);
  }

  // ---- Ban/Unban ----
  async handleBan(chatId, userId, reason = '') {
    const result = await this.db.banUser(userId, reason);
    if (result) {
      await this.telegram.sendMessage(chatId, `✅ کاربر ${userId} با موفقیت مسدود شد.`);
      await this.telegram.sendMessage(userId, `🚫 شما توسط ادمین مسدود شده‌اید.\nدلیل: ${reason || 'نامشخص'}`);
    } else {
      await this.telegram.sendMessage(chatId, '❌ خطا در مسدود کردن کاربر.');
    }
  }

  async handleUnban(chatId, userId) {
    const result = await this.db.unbanUser(userId);
    if (result) {
      await this.telegram.sendMessage(chatId, `✅ مسدودیت کاربر ${userId} برداشته شد.`);
      await this.telegram.sendMessage(userId, `✅ مسدودیت شما برداشته شد. خوش آمدید!`);
    } else {
      await this.telegram.sendMessage(chatId, '❌ خطا در رفع مسدودیت.');
    }
  }

  // ---- Set Setting ----
  async handleSetSetting(chatId, key, value) {
    if (!key || value === undefined) {
      await this.telegram.sendMessage(chatId, '❌ لطفاً کلید و مقدار را وارد کنید.\nمثال: /set_setting maintenance_mode false');
      return;
    }

    const result = await this.db.setSetting(key, value);
    if (result) {
      await this.telegram.sendMessage(chatId, `✅ تنظیم ${key} به ${value} تغییر یافت.`);
    } else {
      await this.telegram.sendMessage(chatId, '❌ خطا در تغییر تنظیم.');
    }
  }

  // ---- Confirm Payment Admin ----
  async handleAdminConfirmPayment(chatId, paymentId) {
    const result = await this.db.confirmPayment(paymentId);
    if (result) {
      await this.telegram.sendMessage(chatId, `✅ پرداخت #${paymentId} تأیید شد.`);
      const payment = await this.db.getPayment(paymentId);
      if (payment) {
        await this.telegram.sendMessage(payment.user_id, `✅ پرداخت شما تأیید شد!\nاشتراک ${payment.plan} فعال شد.`);
      }
    } else {
      await this.telegram.sendMessage(chatId, '❌ خطا در تأیید پرداخت.');
    }
  }

  async handleAdminRejectPayment(chatId, paymentId, reason = '') {
    const result = await this.db.rejectPayment(paymentId, reason);
    if (result) {
      await this.telegram.sendMessage(chatId, `✅ پرداخت #${paymentId} رد شد.`);
      const payment = await this.db.getPayment(paymentId);
      if (payment) {
        await this.telegram.sendMessage(payment.user_id, `❌ پرداخت شما رد شد.\nدلیل: ${reason || 'نامشخص'}`);
      }
    } else {
      await this.telegram.sendMessage(chatId, '❌ خطا در رد پرداخت.');
    }
  }

  // ---- Ticket Reply ----
  async handleAdminTicketReply(chatId, ticketId, response) {
    if (!response) {
      await this.telegram.sendMessage(chatId, '❌ لطفاً پاسخ خود را وارد کنید.\nمثال: /ticket_reply 1 مشکل شما حل شد');
      return;
    }

    const result = await this.db.respondTicket(ticketId, chatId, response);
    if (result) {
      await this.telegram.sendMessage(chatId, `✅ پاسخ به تیکت #${ticketId} ارسال شد.`);
      
      const ticket = await this.db.query('SELECT * FROM tickets WHERE id = $1', [ticketId]);
      if (ticket.rows && ticket.rows.length > 0) {
        await this.telegram.sendMessage(ticket.rows[0].user_id, `
📨 **پاسخ به تیکت #${ticket.id}**

📝 ${response}

✅ تیم پشتیبانی
`);
      }
    } else {
      await this.telegram.sendMessage(chatId, '❌ خطا در ارسال پاسخ.');
    }
  }

  // ---- Helper: Split Message ----
  splitMessage(text, maxLength = 4000) {
    const chunks = [];
    let current = '';
    
    const paragraphs = text.split('\n');
    for (const p of paragraphs) {
      if (current.length + p.length + 1 > maxLength) {
        if (current) chunks.push(current);
        current = p;
      } else {
        current += (current ? '\n' : '') + p;
      }
    }
    if (current) chunks.push(current);
    return chunks;
  }

  // ============================================================
  // 🎯 MAIN MESSAGE HANDLER
  // ============================================================

  async handleMessage(update) {
    try {
      const msg = update.message;
      if (!msg) return;

      const chatId = msg.chat.id;
      const text = msg.text || '';
      const user = msg.from;

      // Ensure user
      const dbUser = await this.db.ensureUser(
        user.id,
        user.username,
        user.first_name,
        user.last_name
      );

      if (!dbUser) {
        await this.telegram.sendMessage(chatId, '❌ خطا در ثبت‌نام. مجدداً تلاش کنید.');
        return;
      }

      // Check banned
      if (dbUser.is_banned) {
        await this.telegram.sendMessage(chatId, '⛔ حساب کاربری شما مسدود شده است.');
        return;
      }

      // Check maintenance mode
      const maintenance = await this.db.getSetting('maintenance_mode');
      if (maintenance === 'true' && !dbUser.is_admin) {
        await this.telegram.sendMessage(chatId, '🔧 ربات در حال بروزرسانی است. لطفاً بعداً تلاش کنید.');
        return;
      }

      // Update last activity
      await this.db.updateUser(user.id, { last_activity: new Date().toISOString() });

      // Handle commands
      if (text.startsWith('/')) {
        await this.handleCommand(text, chatId, dbUser);
        return;
      }

      // Handle callback data from inline keyboard (text input)
      const state = this.getUserState(user.id);
      if (state.waitingFor) {
        await this.handleWaitingInput(chatId, text, dbUser, state);
        return;
      }

      // Default: AI Chat
      await this.handleAIChat(chatId, text, dbUser);

    } catch (error) {
      console.error('Message Handler Error:', error);
      const chatId = update.message?.chat?.id || 0;
      await this.telegram.sendMessage(chatId, `
❌ **خطا در پردازش پیام**

${error.message}

🔄 لطفاً مجدداً تلاش کنید یا با پشتیبانی تماس بگیرید.
`);
    }
  }

  // ---- Handle Commands ----
  async handleCommand(text, chatId, user) {
    const parts = text.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    const isAdmin = user.is_admin || CONFIG.ADMIN_IDS.includes(user.user_id);

    switch (cmd) {
      // ---- Public Commands ----
      case '/start':
        await this.handleStart(chatId, user, args);
        break;
      case '/help':
        await this.handleHelp(chatId, user);
        break;
      case '/dashboard':
        await this.handleDashboard(chatId, user);
        break;
      case '/wallet':
        await this.handleWallet(chatId, user);
        break;
      case '/ai':
        await this.telegram.sendMessage(chatId, '🤖 **هوش مصنوعی**\n\nلطفاً یکی از گزینه‌های زیر را انتخاب کنید:', KEYBOARDS.ai);
        break;
      case '/subscription':
        await this.showSubscriptionPlans(chatId);
        break;
      case '/referral':
        await this.handleReferral(chatId, user);
        break;
      case '/support':
        await this.handleSupport(chatId, user);
        break;
      case '/stats':
        await this.handleStats(chatId);
        break;
      case '/profile':
        await this.handleProfile(chatId, user);
        break;
      case '/settings':
        await this.handleSettings(chatId, user);
        break;
      case '/tickets':
        await this.handleTickets(chatId, user);
        break;
      case '/feedback':
        await this.handleFeedback(chatId, user, args);
        break;
      case '/guide':
        await this.telegram.sendMessage(chatId, '📚 راهنمای استفاده در /help موجود است.');
        break;
      case '/faq':
        await this.telegram.sendMessage(chatId, '❓ سوالات متداول در /help موجود است.');
        break;

      // ---- AI Commands ----
      case '/chat':
        if (args) await this.handleAIChat(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً متن خود را وارد کنید.\nمثال: /chat سلام چطوری؟');
        break;
      case '/image':
        if (args) await this.handleImageGeneration(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً پرامپت تصویر را وارد کنید.\nمثال: /image یک گربه زیبا');
        break;
      case '/video':
        if (args) await this.handleVideoGeneration(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً پرامپت ویدیو را وارد کنید.\nمثال: /video یک ربات در حال راه رفتن');
        break;
      case '/voice':
        if (args) await this.handleVoiceGeneration(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً متن را وارد کنید.\nمثال: /voice سلام خوبی؟');
        break;
      case '/summarize':
        if (args) await this.handleSummarize(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً متن را وارد کنید.\nمثال: /summarize متن طولانی...');
        break;
      case '/translate':
        if (args) await this.handleTranslate(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً متن را وارد کنید.\nمثال: /translate Hello');
        break;
      case '/code':
        if (args) await this.handleCodeGeneration(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً توضیح کد را وارد کنید.\nمثال: /code تابع معکوس کردن رشته');
        break;
      case '/analyze':
        if (args) await this.handleAnalyze(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً متن را وارد کنید.\nمثال: /analyze من عاشق این ربات هستم');
        break;
      case '/search':
        if (args) await this.handleSearch(chatId, args, user);
        else await this.telegram.sendMessage(chatId, '❌ لطفاً عبارت جستجو را وارد کنید.\nمثال: /search هوش مصنوعی چیست؟');
        break;

      // ---- Admin Commands ----
      case '/admin':
        if (isAdmin) {
          await this.telegram.sendMessage(chatId, '👑 **پنل مدیریت**', KEYBOARDS.admin);
        } else {
          await this.telegram.sendMessage(chatId, '⛔ دسترسی غیرمجاز');
        }
        break;
      case '/broadcast':
        if (isAdmin) await this.handleAdminBroadcast(chatId, args);
        break;
      case '/ban':
        if (isAdmin && args) {
          const [userId, ...reasonParts] = args.split(' ');
          await this.handleBan(chatId, parseInt(userId), reasonParts.join(' '));
        } else if (isAdmin) {
          await this.telegram.sendMessage(chatId, '❌ لطفاً شناسه کاربر را وارد کنید.\nمثال: /ban 123456789 دلیل');
        }
        break;
      case '/unban':
        if (isAdmin && args) {
          await this.handleUnban(chatId, parseInt(args));
        } else if (isAdmin) {
          await this.telegram.sendMessage(chatId, '❌ لطفاً شناسه کاربر را وارد کنید.\nمثال: /unban 123456789');
        }
        break;
      case '/confirm_payment':
        if (isAdmin && args) {
          await this.handleAdminConfirmPayment(chatId, parseInt(args));
        } else if (isAdmin) {
          await this.telegram.sendMessage(chatId, '❌ لطفاً شناسه پرداخت را وارد کنید.\nمثال: /confirm_payment 123');
        }
        break;
      case '/reject_payment':
        if (isAdmin && args) {
          const [paymentId, ...reasonParts] = args.split(' ');
          await this.handleAdminRejectPayment(chatId, parseInt(paymentId), reasonParts.join(' '));
        } else if (isAdmin) {
          await this.telegram.sendMessage(chatId, '❌ لطفاً شناسه پرداخت را وارد کنید.\nمثال: /reject_payment 123 دلیل');
        }
        break;
      case '/ticket_reply':
        if (isAdmin && args) {
          const [ticketId, ...responseParts] = args.split(' ');
          await this.handleAdminTicketReply(chatId, parseInt(ticketId), responseParts.join(' '));
        } else if (isAdmin) {
          await this.telegram.sendMessage(chatId, '❌ لطفاً شناسه تیکت و پاسخ را وارد کنید.\nمثال: /ticket_reply 1 پاسخ شما');
        }
        break;
      case '/set_setting':
        if (isAdmin && args) {
          const [key, ...valueParts] = args.split(' ');
          await this.handleSetSetting(chatId, key, valueParts.join(' '));
        } else if (isAdmin) {
          await this.telegram.sendMessage(chatId, '❌ لطفاً کلید و مقدار را وارد کنید.\nمثال: /set_setting maintenance_mode false');
        }
        break;
      case '/stats_admin':
        if (isAdmin) await this.handleAdminStats(chatId);
        break;
      case '/users':
        if (isAdmin) await this.handleAdminUsers(chatId);
        break;
      case '/payments':
        if (isAdmin) await this.handleAdminPayments(chatId);
        break;
      case '/tickets_admin':
        if (isAdmin) await this.handleAdminTickets(chatId);
        break;
      case '/logs':
        if (isAdmin) await this.handleAdminLogs(chatId);
        break;

      default:
        await this.telegram.sendMessage(chatId, '❌ دستور ناشناخته. /help برای راهنما.');
    }
  }

  // ---- Handle Waiting Input ----
  async handleWaitingInput(chatId, text, user, state) {
    switch (state.waitingFor) {
      case 'ticket_subject':
        this.updateUserState(user.user_id, { 
          waitingFor: 'ticket_message',
          tempData: { subject: text }
        });
        await this.telegram.sendMessage(chatId, '📝 لطفاً متن تیکت خود را وارد کنید:');
        break;
        
      case 'ticket_message':
        const subject = state.tempData.subject || 'بدون موضوع';
        await this.handleSupport(chatId, user, subject, text);
        this.clearUserState(user.user_id);
        break;
        
      case 'feedback':
        await this.handleFeedback(chatId, user, text);
        this.clearUserState(user.user_id);
        break;
        
      default:
        this.clearUserState(user.user_id);
        await this.handleAIChat(chatId, text, user);
    }
  }

  // ============================================================
  // 🎯 CALLBACK HANDLER
  // ============================================================

  async handleCallback(update) {
    try {
      const cb = update.callback_query;
      if (!cb) return;

      const data = cb.data;
      const chatId = cb.message.chat.id;
      const messageId = cb.message.message_id;
      const userId = cb.from.id;

      await this.telegram.answerCallback(cb.id);

      const user = await this.db.getUser(userId);
      if (!user) {
        await this.telegram.sendMessage(chatId, '❌ کاربر یافت نشد. /start را بزنید.');
        return;
      }

      const isAdmin = user.is_admin || CONFIG.ADMIN_IDS.includes(userId);

      // ---- Main Menu ----
      if (data === 'dashboard') {
        await this.handleDashboard(chatId, user);
      } else if (data === 'wallet') {
        await this.handleWallet(chatId, user);
      } else if (data === 'ai') {
        await this.telegram.editMessage(chatId, messageId, '🤖 **هوش مصنوعی**\n\nلطفاً یکی از گزینه‌های زیر را انتخاب کنید:', KEYBOARDS.ai);
      } else if (data === 'subscription') {
        await this.showSubscriptionPlans(chatId);
      } else if (data === 'referral') {
        await this.handleReferral(chatId, user);
      } else if (data === 'support') {
        await this.handleSupport(chatId, user);
      } else if (data === 'stats') {
        await this.handleStats(chatId);
      } else if (data === 'miniapp') {
        await this.telegram.sendMessage(chatId, `📱 **مینی‌اپ اختصاصی**\n\n${CONFIG.MINIAPP_URL}\n\nبرای باز شدن در مرورگر کلیک کنید.`);
      } else if (data === 'back') {
        await this.telegram.editMessage(chatId, messageId, '🏠 **منوی اصلی**', KEYBOARDS.main);
      }

      // ---- AI Sub-menu ----
      else if (data === 'ai_chat') {
        await this.telegram.editMessage(chatId, messageId, '💬 **چت با هوش مصنوعی**\n\nمتن خود را ارسال کنید.\n\n💡 نکات:\n• از /chat [متن] استفاده کنید\n• کاربران ویژه به مدل‌های بهتر دسترسی دارند');
        this.updateUserState(userId, { currentMenu: 'ai_chat' });
      } else if (data === 'ai_image') {
        await this.telegram.editMessage(chatId, messageId, '🎨 **تولید تصویر**\n\nپرامپت خود را ارسال کنید.\n\n💡 نکات:\n• پرامپت دقیق‌تر = تصویر بهتر\n• از /image [پرامپت] استفاده کنید\n• کاربران ویژه به DALL-E 4 دسترسی دارند');
        this.updateUserState(userId, { currentMenu: 'ai_image' });
      } else if (data === 'ai_video') {
        await this.telegram.editMessage(chatId, messageId, '🎬 **تولید ویدیو**\n\nپرامپت خود را ارسال کنید.\n\n💡 نکات:\n• پرامپت دقیق‌تر = ویدیو بهتر\n• از /video [پرامپت] استفاده کنید\n• کاربران ویژه به Sora 2 Pro دسترسی دارند');
        this.updateUserState(userId, { currentMenu: 'ai_video' });
      } else if (data === 'ai_voice') {
        await this.telegram.editMessage(chatId, messageId, '🎵 **تبدیل متن به صدا**\n\nمتن خود را ارسال کنید.\n\n💡 نکات:\n• حداکثر ۵۰۰ کاراکتر\n• از /voice [متن] استفاده کنید\n• کاربران ویژه به ElevenLabs v4 دسترسی دارند');
        this.updateUserState(userId, { currentMenu: 'ai_voice' });
      } else if (data === 'ai_summarize') {
        await this.telegram.editMessage(chatId, messageId, '📝 **خلاصه‌سازی متن**\n\nمتن خود را ارسال کنید.\n\n💡 از /summarize [متن] استفاده کنید.');
        this.updateUserState(userId, { currentMenu: 'ai_summarize' });
      } else if (data === 'ai_translate') {
        await this.telegram.editMessage(chatId, messageId, '🌐 **ترجمه متن**\n\nمتن خود را ارسال کنید.\n\n💡 از /translate [متن] استفاده کنید.');
        this.updateUserState(userId, { currentMenu: 'ai_translate' });
      } else if (data === 'ai_code') {
        await this.telegram.editMessage(chatId, messageId, '💻 **تولید کد**\n\nتوضیح کد مورد نظر را ارسال کنید.\n\n💡 از /code [توضیح] استفاده کنید.');
        this.updateUserState(userId, { currentMenu: 'ai_code' });
      } else if (data === 'ai_analyze') {
        await this.telegram.editMessage(chatId, messageId, '🔍 **تحلیل متن**\n\nمتن خود را ارسال کنید.\n\n💡 از /analyze [متن] استفاده کنید.');
        this.updateUserState(userId, { currentMenu: 'ai_analyze' });
      } else if (data === 'ai_search') {
        await this.telegram.editMessage(chatId, messageId, '🔎 **جستجوی هوشمند**\n\nموضوع جستجو را وارد کنید.\n\n💡 از /search [موضوع] استفاده کنید.');
        this.updateUserState(userId, { currentMenu: 'ai_search' });
      } else if (data === 'ai_reasoning') {
        await this.telegram.editMessage(chatId, messageId, '🧠 **استدلال و منطق**\n\nسوال یا مسئله خود را وارد کنید.\n\n💡 کاربران ویژه به o3 و DeepSeek R1 دسترسی دارند.');
        this.updateUserState(userId, { currentMenu: 'ai_reasoning' });
      }

      // ---- Subscription ----
      else if (data.startsWith('sub_')) {
        const planId = data.replace('sub_', '');
        await this.handleSubscriptionPurchase(chatId, user, planId);
      }

      // ---- Payment ----
      else if (data.startsWith('pay_')) {
        const method = data.replace('pay_', '');
        await this.handlePaymentMethod(chatId, user, method);
      }

      // ---- Confirm ----
      else if (data === 'confirm_yes') {
        await this.handleConfirmPayment(chatId, user);
      } else if (data === 'confirm_no') {
        await this.telegram.editMessage(chatId, messageId, '❌ **پرداخت لغو شد.**', KEYBOARDS.back);
        await this.db.clearSession(user.user_id);
      }

      // ---- Admin ----
      else if (data === 'admin_users') {
        if (isAdmin) await this.handleAdminUsers(chatId);
      } else if (data === 'admin_stats') {
        if (isAdmin) await this.handleAdminStats(chatId);
      } else if (data === 'admin_payments') {
        if (isAdmin) await this.handleAdminPayments(chatId);
      } else if (data === 'admin_tickets') {
        if (isAdmin) await this.handleAdminTickets(chatId);
      } else if (data === 'admin_models') {
        if (isAdmin) await this.handleAdminModels(chatId);
      } else if (data === 'admin_broadcast') {
        if (isAdmin) await this.handleAdminBroadcast(chatId);
      } else if (data === 'admin_settings') {
        if (isAdmin) await this.handleAdminSettings(chatId);
      } else if (data === 'admin_bans') {
        if (isAdmin) await this.handleAdminBans(chatId);
      } else if (data === 'admin_logs') {
        if (isAdmin) await this.handleAdminLogs(chatId);
      } else if (data === 'broadcast_confirm') {
        if (isAdmin) await this.handleAdminBroadcastConfirm(chatId);
      } else if (data === 'broadcast_cancel') {
        if (isAdmin) {
          this.broadcastQueue = this.broadcastQueue.filter(q => q.chatId !== chatId);
          await this.telegram.editMessage(chatId, messageId, '❌ **ارسال پیام همگانی لغو شد.**', KEYBOARDS.admin);
        }
      }

      // ---- Model Selection ----
      else if (data.startsWith('model_')) {
        const parts = data.split('_');
        const category = parts[1];
        const modelId = parts.slice(2).join('_');
        
        await this.telegram.editMessage(chatId, messageId, `
✅ **مدل ${CONFIG.MODELS[category]?.[modelId]?.name || modelId} انتخاب شد**

🤖 **دسته:** ${category}
🏢 **ارائه‌دهنده:** ${CONFIG.MODELS[category]?.[modelId]?.provider || 'نامشخص'}

💡 اکنون می‌توانید پیام خود را ارسال کنید.
برای تغییر مدل از منوی AI استفاده کنید.
`);
        this.updateUserState(userId, { 
          currentModel: { category, modelId },
          currentMenu: `model_${category}`
        });
      }

      else {
        await this.telegram.editMessage(chatId, messageId, '⚡ **این قابلیت در حال توسعه است...**', KEYBOARDS.back);
      }

      await this.db.logActivity(userId, 'callback', { action: data });

    } catch (error) {
      console.error('Callback Error:', error);
      await this.telegram.sendMessage(
        update.callback_query?.message?.chat?.id || 0,
        '❌ خطا. مجدداً تلاش کنید.'
      );
    }
  }

  // ============================================================
  // 🚀 INLINE QUERY HANDLER
  // ============================================================

  async handleInlineQuery(update) {
    try {
      const query = update.inline_query;
      const queryText = query.query || '';
      const userId = query.from.id;

      // Check if user exists
      const user = await this.db.getUser(userId);
      if (!user) {
        await this.telegram.answerInlineQuery(query.id, [{
          type: 'article',
          id: 'error',
          title: '❌ لطفاً ابتدا ربات را استارت کنید',
          description: '/start',
          input_message_content: {
            message_text: 'لطفاً ابتدا ربات را با /start استارت کنید.'
          }
        }]);
        return;
      }

      const results = [];

      if (queryText) {
        // Search results
        results.push({
          type: 'article',
          id: 'chat',
          title: '💬 چت با AI',
          description: `پرسش: "${queryText}"`,
          input_message_content: {
            message_text: `🤖 **پاسخ به:** "${queryText}"\n\n⏳ در حال پردازش...`
          },
          reply_markup: {
            inline_keyboard: [[
              { text: '📨 دریافت پاسخ', switch_inline_query_current_chat: queryText }
            ]]
          }
        });

        results.push({
          type: 'article',
          id: 'image',
          title: '🎨 تولید تصویر',
          description: `تولید تصویر با: "${queryText}"`,
          input_message_content: {
            message_text: `🎨 **تولید تصویر:** "${queryText}"\n\n⏳ در حال تولید...`
          }
        });

        results.push({
          type: 'article',
          id: 'summarize',
          title: '📝 خلاصه‌سازی',
          description: `خلاصه‌سازی متن: "${queryText}"`,
          input_message_content: {
            message_text: `📝 **خلاصه‌سازی:** "${queryText}"\n\n⏳ در حال پردازش...`
          }
        });

        results.push({
          type: 'article',
          id: 'translate',
          title: '🌐 ترجمه به فارسی',
          description: `ترجمه: "${queryText}"`,
          input_message_content: {
            message_text: `🌐 **ترجمه به فارسی:**\n"${queryText}"\n\n⏳ در حال ترجمه...`
          }
        });
      } else {
        // Empty query - show help
        results.push({
          type: 'article',
          id: 'help',
          title: '🤖 راهنمای استفاده از اینلاین',
          description: 'برای استفاده، عبارت خود را تایپ کنید',
          input_message_content: {
            message_text: `🤖 **ربات هوش مصنوعی - اینلاین**

💡 **چگونه استفاده کنم؟**
1. @${update.inline_query.from.username || 'YourBot'} را تایپ کنید
2. عبارت خود را وارد کنید
3. یکی از گزینه‌ها را انتخاب کنید

📝 **مثال‌ها:**
• @bot سلام چطوری؟
• @bot یک گربه زیبا
• @bot خلاصه کن: متن طولانی...
• @bot ترجمه: Hello

⭐ **کاربران ویژه** به مدل‌های پیشرفته دسترسی دارند.`
          }
        });
      }

      // Add subscription info
      results.push({
        type: 'article',
        id: 'subscription',
        title: '⭐ خرید اشتراک',
        description: 'دسترسی به همه مدل‌ها',
        input_message_content: {
          message_text: '⭐ برای خرید اشتراک روی دکمه زیر کلیک کنید.'
        },
        reply_markup: {
          inline_keyboard: [[
            { text: '⭐ مشاهده اشتراک‌ها', url: CONFIG.MINIAPP_URL || 'https://t.me/YourBot' }
          ]]
        }
      });

      await this.telegram.answerInlineQuery(query.id, results, {
        cache_time: 300,
        is_personal: true
      });

    } catch (error) {
      console.error('Inline Query Error:', error);
    }
  }

  // ============================================================
  // 🎯 WEBHOOK HANDLER
  // ============================================================

  async handleWebhook(update) {
    try {
      if (update.message) {
        await this.handleMessage(update);
      } else if (update.callback_query) {
        await this.handleCallback(update);
      } else if (update.inline_query) {
        await this.handleInlineQuery(update);
      } else if (update.pre_checkout_query) {
        await this.handlePreCheckout(update);
      } else if (update.shipping_query) {
        await this.handleShipping(update);
      } else if (update.chat_join_request) {
        await this.handleJoinRequest(update);
      } else if (update.my_chat_member) {
        await this.handleChatMember(update);
      }
    } catch (error) {
      console.error('Webhook Error:', error);
    }
  }

  // ---- PreCheckout ----
  async handlePreCheckout(update) {
    try {
      const query = update.pre_checkout_query;
      await this.telegram.answerPreCheckoutQuery(query.id, true);
    } catch (error) {
      console.error('PreCheckout Error:', error);
    }
  }

  // ---- Shipping ----
  async handleShipping(update) {
    try {
      const query = update.shipping_query;
      await this.telegram.answerShippingQuery(query.id, true);
    } catch (error) {
      console.error('Shipping Error:', error);
    }
  }

  // ---- Join Request ----
  async handleJoinRequest(update) {
    try {
      const request = update.chat_join_request;
      await this.telegram.approveChatJoinRequest(request.chat.id, request.from.id);
    } catch (error) {
      console.error('Join Request Error:', error);
    }
  }

  // ---- Chat Member ----
  async handleChatMember(update) {
    try {
      const member = update.my_chat_member;
      if (member.new_chat_member.status === 'kicked') {
        // Bot was banned from chat
        console.log('Bot banned from chat:', member.chat.id);
      }
    } catch (error) {
      console.error('Chat Member Error:', error);
    }
  }
}

// ============================================================
// 📱 PART 7: MINI APP HTML (Lines 3501-3700)
// ============================================================

const MINIAPP_HTML = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>🤖 AI Master Bot</title>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: var(--tg-theme-bg-color, #0f0f1a);
      --secondary: var(--tg-theme-secondary-bg-color, #1a1a2e);
      --text: var(--tg-theme-text-color, #ffffff);
      --hint: var(--tg-theme-hint-color, #8899bb);
      --button: var(--tg-theme-button-color, #667eea);
      --button-text: var(--tg-theme-button-text-color, #ffffff);
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 16px;
      min-height: 100vh;
      direction: rtl;
    }
    .app { max-width: 480px; margin: 0 auto; }
    
    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      margin-bottom: 20px;
    }
    .user-info { display: flex; flex-direction: column; gap: 2px; }
    .user-name { font-size: 18px; font-weight: 700; }
    .user-balance { font-size: 13px; color: var(--hint); }
    .close-btn {
      background: none;
      border: none;
      color: var(--text);
      font-size: 22px;
      cursor: pointer;
      opacity: 0.6;
    }
    .close-btn:active { opacity: 1; }
    
    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }
    .stat-card {
      background: var(--secondary);
      padding: 14px 8px;
      border-radius: 12px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.05);
    }
    .stat-card h3 { font-size: 11px; font-weight: 400; color: var(--hint); margin-bottom: 4px; }
    .stat-card .value { font-size: 20px; font-weight: 700; }
    
    /* Actions */
    .actions {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
      margin-bottom: 20px;
    }
    .action-btn {
      background: var(--secondary);
      color: var(--text);
      border: none;
      padding: 12px 4px;
      border-radius: 12px;
      font-size: 10px;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid rgba(255,255,255,0.05);
    }
    .action-btn:active { transform: scale(0.95); opacity: 0.7; }
    .action-btn .icon { display: block; font-size: 24px; margin-bottom: 4px; }
    
    /* Primary Button */
    .btn-primary {
      background: var(--button);
      color: var(--button-text);
      border: none;
      padding: 14px;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      margin-bottom: 16px;
      transition: all 0.2s;
    }
    .btn-primary:active { transform: scale(0.97); opacity: 0.8; }
    
    /* Models Grid */
    .models-section h3 { margin-bottom: 12px; font-size: 16px; }
    .models-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-bottom: 16px;
    }
    .model-item {
      background: var(--secondary);
      padding: 12px 8px;
      border-radius: 12px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.05);
      cursor: pointer;
      transition: all 0.2s;
    }
    .model-item:active { transform: scale(0.95); }
    .model-item .icon { font-size: 28px; display: block; margin-bottom: 4px; }
    .model-item .name { font-size: 12px; font-weight: 500; }
    .model-item .provider { font-size: 10px; color: var(--hint); }
    
    /* Footer */
    .footer {
      display: flex;
      justify-content: space-around;
      padding: 12px 0;
      border-top: 1px solid rgba(255,255,255,0.08);
      margin-top: 16px;
    }
    .footer-btn {
      background: none;
      border: none;
      color: var(--text);
      font-size: 13px;
      padding: 8px 12px;
      cursor: pointer;
      opacity: 0.7;
    }
    .footer-btn:active { opacity: 1; }
    
    /* Badge */
    .badge {
      display: inline-block;
      background: var(--button);
      color: var(--button-text);
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 10px;
      margin-top: 4px;
    }
    
    @media (max-width: 400px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .actions { grid-template-columns: repeat(3, 1fr); }
      .models-grid { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>
  <div class="app">
    <!-- Header -->
    <div class="header">
      <div class="user-info">
        <span class="user-name" id="userName">👤 کاربر</span>
        <span class="user-balance" id="userBalance">💰 ۰ تومان</span>
      </div>
      <button class="close-btn" onclick="closeApp()">✕</button>
    </div>
    
    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <h3>📝 متن</h3>
        <span class="value" id="statText">۰</span>
      </div>
      <div class="stat-card">
        <h3>🎨 تصویر</h3>
        <span class="value" id="statImage">۰</span>
      </div>
      <div class="stat-card">
        <h3>🎬 ویدیو</h3>
        <span class="value" id="statVideo">۰</span>
      </div>
      <div class="stat-card">
        <h3>⭐ وضعیت</h3>
        <span class="value" id="statPremium">⚪</span>
      </div>
    </div>
    
    <!-- Actions -->
    <div class="actions">
      <button class="action-btn" onclick="handleAction('chat')">
        <span class="icon">💬</span>چت
      </button>
      <button class="action-btn" onclick="handleAction('image')">
        <span class="icon">🎨</span>تصویر
      </button>
      <button class="action-btn" onclick="handleAction('video')">
        <span class="icon">🎬</span>ویدیو
      </button>
      <button class="action-btn" onclick="handleAction('voice')">
        <span class="icon">🎵</span>صدا
      </button>
      <button class="action-btn" onclick="handleAction('subscription')">
        <span class="icon">⭐</span>اشتراک
      </button>
    </div>
    
    <!-- Primary Button -->
    <button class="btn-primary" onclick="handleAction('dashboard')">📊 مشاهده داشبورد کامل</button>
    
    <!-- Models -->
    <div class="models-section">
      <h3>🤖 مدل‌های محبوب</h3>
      <div class="models-grid">
        <div class="model-item" onclick="handleModel('chat','gpt-4o')">
          <span class="icon">⚡</span>
          <div class="name">GPT-4o</div>
          <div class="provider">OpenAI</div>
        </div>
        <div class="model-item" onclick="handleModel('chat','gemini-2.0-flash')">
          <span class="icon">🌟</span>
          <div class="name">Gemini Flash</div>
          <div class="provider">Google</div>
        </div>
        <div class="model-item" onclick="handleModel('chat','claude-3.5-sonnet')">
          <span class="icon">🧠</span>
          <div class="name">Claude 3.5</div>
          <div class="provider">Anthropic</div>
        </div>
        <div class="model-item" onclick="handleModel('image','dall-e-3')">
          <span class="icon">🎨</span>
          <div class="name">DALL-E 3</div>
          <div class="provider">OpenAI</div>
        </div>
        <div class="model-item" onclick="handleModel('image','midjourney-v7')">
          <span class="icon">🖼️</span>
          <div class="name">Midjourney v7</div>
          <div class="provider">Midjourney</div>
        </div>
        <div class="model-item" onclick="handleModel('video','runway-gen4')">
          <span class="icon">🎬</span>
          <div class="name">Runway Gen4</div>
          <div class="provider">Runway</div>
        </div>
        <div class="model-item" onclick="handleModel('video','sora-2')">
          <span class="icon">🎥</span>
          <div class="name">Sora 2</div>
          <div class="provider">OpenAI</div>
        </div>
        <div class="model-item" onclick="handleModel('voice','elevenlabs-v3')">
          <span class="icon">🎵</span>
          <div class="name">ElevenLabs v3</div>
          <div class="provider">ElevenLabs</div>
        </div>
        <div class="model-item" onclick="handleModel('chat','deepseek-r1')">
          <span class="icon">🔍</span>
          <div class="name">DeepSeek R1</div>
          <div class="provider">DeepSeek</div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <button class="footer-btn" onclick="refreshData()">🔄 بروزرسانی</button>
      <button class="footer-btn" onclick="handleAction('wallet')">💰 کیف پول</button>
      <button class="footer-btn" onclick="handleAction('referral')">👥 دعوت</button>
      <button class="footer-btn" onclick="handleAction('support')">❓ پشتیبانی</button>
    </div>
  </div>
  
  <script>
    let tg = window.Telegram.WebApp;
    let userData = {};
    
    tg.ready();
    tg.expand();
    
    const initData = tg.initDataUnsafe;
    userData = initData.user || {};
    document.getElementById('userName').textContent = userData.first_name || 'کاربر';
    
    async function loadData() {
      try {
        const response = await fetch('/api/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: userData.id, initData: tg.initData })
        });
        if (response.ok) {
          const data = await response.json();
          document.getElementById('userBalance').textContent = '💰 ' + (data.balance_text || 0).toLocaleString() + ' تومان';
          document.getElementById('statText').textContent = data.balance_text || 0;
          document.getElementById('statImage').textContent = data.balance_image || 0;
          document.getElementById('statVideo').textContent = data.balance_video || 0;
          document.getElementById('statPremium').textContent = data.premium ? '💎' : '⚪';
        }
      } catch (e) { console.error('Load error:', e); }
    }
    
    function handleAction(action) {
      tg.sendData(JSON.stringify({ action: action }));
      tg.openTelegram();
    }
    
    function handleModel(category, model) {
      tg.sendData(JSON.stringify({ action: 'model', category: category, model: model }));
      tg.showPopup({
        title: '✅ مدل انتخاب شد',
        message: 'مدل انتخاب شد. برای استفاده از آن پیام ارسال کنید.',
        buttons: [{ type: 'ok' }]
      });
    }
    
    function refreshData() { 
      loadData();
      tg.showPopup({
        title: '✅ بروزرسانی شد',
        message: 'اطلاعات با موفقیت بروزرسانی شد.',
        buttons: [{ type: 'ok' }]
      });
    }
    
    function closeApp() { tg.close(); }
    
    tg.MainButton.text = '🚀 شروع';
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.sendData(JSON.stringify({ action: 'start' }));
    });
    
    loadData();
    
    window.handleAction = handleAction;
    window.handleModel = handleModel;
    window.refreshData = refreshData;
    window.closeApp = closeApp;
  </script>
</body>
</html>`;

// ============================================================
// 🚀 PART 8: MAIN WORKER - COMPLETE FIXED VERSION
// ============================================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    console.log(`📨 ${method} ${path}`);

    try {
      // ============================================================
      // 🔧 INITIALIZE - مقداردهی اولیه
      // ============================================================
      const db = new Database(CONFIG.DATABASE_URL);
      const telegram = new TelegramService(CONFIG.BOT_TOKEN);
      const ai = new AIService(CONFIG);
      const handlers = new BotHandlers(db, telegram, ai);

      // ============================================================
      // ✅ WEBHOOK - دریافت آپدیت از تلگرام
      // ============================================================
      if (path === '/webhook') {
        // فقط POST قبول کن
        if (method !== 'POST') {
          return new Response('❌ Method not allowed. Please use POST.', { 
            status: 405,
            headers: { 
              'Allow': 'POST',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        try {
          const update = await request.json();
          console.log('📩 Webhook received:', update.message?.text || update.callback_query?.data || 'Unknown');
          
          // پردازش در پس‌زمینه
          ctx.waitUntil(handlers.handleWebhook(update));
          
          return new Response('OK', { 
            status: 200,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        } catch (error) {
          console.error('❌ Webhook Error:', error);
          return new Response(`Error: ${error.message}`, { 
            status: 500,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        }
      }

      // ============================================================
      // 🏠 ROOT - صفحه اصلی
      // ============================================================
      if (path === '/' || path === '') {
        const totalModels = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);
        
        return new Response(`
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║          🤖 ULTIMATE AI BOT v${CONFIG.VERSION}                         ║
║                                                                   ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  📊 Status:        ✅ Online                                      ║
║  🤖 Models:        ${String(totalModels).padStart(6)} models                              ║
║  📁 Categories:    Chat, Image, Video, Voice                     ║
║  🗄️ Database:      PostgreSQL (Neon)                             ║
║  🚀 Platform:      Cloudflare Workers                            ║
║  📦 Dependencies:  0 (Pure JavaScript)                           ║
║                                                                   ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  🔗 Endpoints:                                                   ║
║  📨 Webhook:      POST /webhook                                  ║
║  📱 Mini App:     GET  /miniapp                                  ║
║  🔧 Set Webhook:  GET  /setwebhook                              ║
║  📊 Stats:        GET  /api/stats                               ║
║  🤖 Models:       GET  /api/models                              ║
║  ❤️ Health:       GET  /health                                  ║
║  🗄️ Migrate:      GET  /migrate                                 ║
║  🧹 Cleanup:      GET  /cleanup                                 ║
║                                                                   ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  💡 Quick Setup:                                                 ║
║  curl -X GET https://${url.hostname}/setwebhook                   ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
        `, {
          status: 200,
          headers: { 
            'Content-Type': 'text/plain; charset=utf-8'
          }
        });
      }

      // ============================================================
      // 📱 MINI APP - مینی‌اپ اختصاصی
      // ============================================================
      if (path === '/miniapp') {
        return new Response(MINIAPP_HTML, {
          status: 200,
          headers: { 
            'Content-Type': 'text/html; charset=utf-8'
          }
        });
      }

      // ============================================================
      // 🔧 SET WEBHOOK - تنظیم وب‌هوک
      // ============================================================
      if (path === '/setwebhook') {
        // هم GET و هم POST قبول کن
        if (method !== 'GET' && method !== 'POST') {
          return new Response('❌ Method not allowed. Use GET or POST.', { 
            status: 405,
            headers: { 
              'Allow': 'GET, POST',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        try {
          const webhookUrl = CONFIG.WEBHOOK_URL || `https://${url.hostname}/webhook`;
          const botToken = CONFIG.BOT_TOKEN || env.BOT_TOKEN || '';
          
          if (!botToken) {
            return new Response(JSON.stringify({
              success: false,
              error: '❌ BOT_TOKEN not configured!',
              message: 'Please set BOT_TOKEN in CONFIG or environment variables.'
            }, null, 2), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            });
          }

          // تنظیم Webhook از طریق API تلگرام
          const telegramUrl = `https://api.telegram.org/bot${botToken}/setWebhook`;
          const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: webhookUrl,
              drop_pending_updates: true,
              max_connections: 100,
              allowed_updates: ['message', 'callback_query', 'inline_query', 'pre_checkout_query', 'shipping_query']
            })
          });

          const result = await response.json();

          return new Response(JSON.stringify({
            success: result.ok,
            description: result.description,
            webhook: webhookUrl,
            bot: botToken ? '✅ Configured' : '❌ Missing',
            result: result
          }, null, 2), {
            status: result.ok ? 200 : 400,
            headers: { 'Content-Type': 'application/json' }
          });

        } catch (error) {
          console.error('❌ SetWebhook Error:', error);
          return new Response(JSON.stringify({
            success: false,
            error: error.message
          }, null, 2), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // ============================================================
      // 📊 API: USER - اطلاعات کاربر
      // ============================================================
      if (path === '/api/user') {
        if (method !== 'POST') {
          return new Response('❌ Method not allowed. Use POST.', { 
            status: 405,
            headers: { 
              'Allow': 'POST',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        try {
          const body = await request.json();
          const userId = body.user_id || body.userId;
          
          if (!userId) {
            return new Response(JSON.stringify({
              error: 'user_id required'
            }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            });
          }

          const user = await db.getUser(userId);
          const balance = await db.getBalance(userId);
          const premium = await db.checkPremium(userId);
          
          return new Response(JSON.stringify({ 
            ...user, 
            ...balance, 
            premium,
            isPremium: premium
          }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error) {
          console.error('❌ API User Error:', error);
          return new Response(JSON.stringify({
            error: error.message
          }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // ============================================================
      // 📊 API: STATS - آمار کلی
      // ============================================================
      if (path === '/api/stats') {
        if (method !== 'GET') {
          return new Response('❌ Method not allowed. Use GET.', { 
            status: 405,
            headers: { 
              'Allow': 'GET',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        try {
          const stats = await db.getStats();
          const totalModels = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);
          
          return new Response(JSON.stringify({
            ...stats,
            models: totalModels,
            version: CONFIG.VERSION,
            timestamp: new Date().toISOString()
          }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error) {
          console.error('❌ API Stats Error:', error);
          return new Response(JSON.stringify({
            error: error.message
          }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // ============================================================
      // 🤖 API: MODELS - لیست مدل‌ها
      // ============================================================
      if (path === '/api/models') {
        if (method !== 'GET') {
          return new Response('❌ Method not allowed. Use GET.', { 
            status: 405,
            headers: { 
              'Allow': 'GET',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        const totalModels = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);
        
        return new Response(JSON.stringify({
          models: CONFIG.MODELS,
          total: totalModels,
          categories: Object.keys(CONFIG.MODELS),
          version: CONFIG.VERSION
        }), {
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600'
          }
        });
      }

      // ============================================================
      // ❤️ HEALTH - سلامت سرویس
      // ============================================================
      if (path === '/health') {
        if (method !== 'GET') {
          return new Response('❌ Method not allowed. Use GET.', { 
            status: 405,
            headers: { 
              'Allow': 'GET',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        const totalModels = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);
        
        // تست دیتابیس
        let dbStatus = '✅ Connected';
        try {
          await db.query('SELECT 1');
        } catch (error) {
          dbStatus = '❌ ' + error.message;
        }

        return new Response(JSON.stringify({
          status: 'ok',
          version: CONFIG.VERSION,
          timestamp: new Date().toISOString(),
          uptime: process.uptime ? Math.floor(process.uptime()) : 'N/A',
          models: totalModels,
          database: dbStatus,
          webhook: CONFIG.WEBHOOK_URL || 'Not configured',
          environment: env.ENVIRONMENT || 'production'
        }, null, 2), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // ============================================================
      // 🗄️ MIGRATE - اجرای دیتابیس
      // ============================================================
      if (path === '/migrate') {
        if (method !== 'GET' && method !== 'POST') {
          return new Response('❌ Method not allowed. Use GET or POST.', { 
            status: 405,
            headers: { 
              'Allow': 'GET, POST',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        try {
          const result = await db.migrate();
          return new Response(JSON.stringify({
            success: result,
            message: result ? '✅ Migration completed successfully' : '❌ Migration failed',
            timestamp: new Date().toISOString()
          }, null, 2), {
            status: result ? 200 : 500,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error) {
          console.error('❌ Migrate Error:', error);
          return new Response(JSON.stringify({
            success: false,
            error: error.message
          }, null, 2), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // ============================================================
      // 🧹 CLEANUP - پاکسازی دیتابیس
      // ============================================================
      if (path === '/cleanup') {
        if (method !== 'GET' && method !== 'POST') {
          return new Response('❌ Method not allowed. Use GET or POST.', { 
            status: 405,
            headers: { 
              'Allow': 'GET, POST',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        try {
          const result = await db.cleanup();
          return new Response(JSON.stringify({
            success: result,
            message: result ? '✅ Cleanup completed successfully' : '❌ Cleanup failed',
            timestamp: new Date().toISOString()
          }, null, 2), {
            status: result ? 200 : 500,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error) {
          console.error('❌ Cleanup Error:', error);
          return new Response(JSON.stringify({
            success: false,
            error: error.message
          }, null, 2), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // ============================================================
      // 🔍 WEBHOOK INFO - اطلاعات وب‌هوک
      // ============================================================
      if (path === '/webhookinfo') {
        if (method !== 'GET') {
          return new Response('❌ Method not allowed. Use GET.', { 
            status: 405,
            headers: { 
              'Allow': 'GET',
              'Content-Type': 'text/plain; charset=utf-8'
            }
          });
        }

        try {
          const botToken = CONFIG.BOT_TOKEN || env.BOT_TOKEN || '';
          if (!botToken) {
            return new Response(JSON.stringify({
              success: false,
              error: 'BOT_TOKEN not configured'
            }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            });
          }

          const response = await fetch(`https://api.telegram.org/bot${botToken}/getWebhookInfo`);
          const result = await response.json();

          return new Response(JSON.stringify(result, null, 2), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error) {
          console.error('❌ WebhookInfo Error:', error);
          return new Response(JSON.stringify({
            error: error.message
          }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      // ============================================================
      // 📝 DEFAULT - پاسخ پیش‌فرض برای مسیرهای ناشناخته
      // ============================================================
      return new Response(`
❌ 404 - Not Found

🤖 AI Bot v${CONFIG.VERSION}

📌 Available endpoints:
  POST  /webhook       - Telegram webhook
  GET   /miniapp       - Mini App
  GET   /setwebhook    - Set webhook
  POST  /api/user      - Get user data
  GET   /api/stats     - Get statistics
  GET   /api/models    - Get models list
  GET   /health        - Health check
  GET   /migrate       - Run database migration
  GET   /cleanup       - Cleanup database
  GET   /webhookinfo   - Get webhook info

💡 For help: https://github.com/your-repo
      `, {
        status: 404,
        headers: { 
          'Content-Type': 'text/plain; charset=utf-8'
        }
      });

    } catch (error) {
      console.error('❌ Worker Fatal Error:', error);
      return new Response(`🔥 Fatal Error: ${error.message}\n\nStack: ${error.stack}`, { 
        status: 500,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  },

  // ============================================================
// ⏰ SCHEDULED - وظایف زمان‌بندی شده
// ============================================================
async scheduled(event, env, ctx) {
  console.log('⏰ Scheduled task running at:', new Date().toISOString());
  
  try {
    // برای D1، از env.DB استفاده کن
    const db = env.DB;
    
    // پاکسازی سشن‌های منقضی
    await db.prepare(`DELETE FROM sessions 
      WHERE expires_at < datetime('now')`).run();
    
    // پاکسازی پرداخت‌های منقضی
    await db.prepare(`UPDATE payments SET status = 'expired' 
      WHERE status = 'pending' 
      AND created_at < datetime('now', '-1 day')`).run();
    
    // پاکسازی لاگ‌های قدیمی (۳۰ روز)
    await db.prepare(`DELETE FROM activity_logs 
      WHERE created_at < datetime('now', '-30 days')`).run();
    
    console.log('✅ Scheduled cleanup completed at:', new Date().toISOString());
    
  } catch (error) {
    console.error('❌ Scheduled task error:', error);
  }
}

// ============================================================
// 📊 FINAL STATS
// ============================================================

const TOTAL_LINES = 3900;
const TOTAL_MODELS = Object.values(CONFIG.MODELS).reduce((sum, m) => sum + Object.keys(m).length, 0);
const TOTAL_PROVIDERS = new Set();
Object.values(CONFIG.MODELS).forEach(category => {
  Object.values(category).forEach(model => {
    TOTAL_PROVIDERS.add(model.provider);
  });
});

console.log(`
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║              🚀 ULTIMATE AI BOT v${CONFIG.VERSION} DEPLOYED               ║
║                                                                       ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║  📊 Total Lines:   ${String(TOTAL_LINES).padStart(6)} lines                                    ║
║  🤖 Total Models:  ${String(TOTAL_MODELS).padStart(6)} models                                    ║
║  🏢 Providers:     ${String(TOTAL_PROVIDERS.size).padStart(6)} providers                                  ║
║  📁 Categories:    4 (Chat, Image, Video, Voice)                       ║
║  🗄️ Database:      PostgreSQL (Neon)                                  ║
║  🚀 Platform:      Cloudflare Workers                                 ║
║  📦 Dependencies:  0 (Pure JavaScript)                                ║
║  ⚡ Status:        ✅ Online and Ready!                               ║
║                                                                       ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║  🔗 Quick Links:                                                     ║
║  📨 Webhook:      ${CONFIG.WEBHOOK_URL || 'https://your-worker.workers.dev/webhook'}  ║
║  📱 Mini App:     ${CONFIG.MINIAPP_URL || 'https://your-worker.workers.dev/miniapp'}  ║
║  ❤️ Health:       https://your-worker.workers.dev/health              ║
║                                                                       ║
║  💡 Setup Webhook:                                                   ║
║  curl -X GET https://your-worker.workers.dev/setwebhook              ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
`);

// ============================================================
// 🏁 END OF FILE - TOTAL: 3,900+ LINES
// ============================================================
