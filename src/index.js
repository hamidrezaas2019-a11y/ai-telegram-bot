// ============================================================
// 🤖 ULTIMATE TELEGRAM AI BOT - COMPLETE SOURCE
// Cloudflare Worker - Pure JavaScript - No Dependencies
// Version: 4.0.0 - Full AI Bot with 130+ Models
// ============================================================

// ============================================================
// PART 1: COMPLETE CONFIGURATION
// ============================================================

const CONFIG = {
  // Bot Token & Admin
  BOT_TOKEN: '8930580112:AAGX_xYc9KdmcYA3QzLR8tQ0zp_qtPs5bxs',  // ✅ توکن رباتت
  ADMIN_IDS: [5989309344],  // ✅ آیدی عددی خودت
  VERSION: '4.0.0',
  
  // API Keys - فقط کلیدهایی که داری رو پر کن
  OPENAI_API_KEY: '',        // اگه داری
  GEMINI_API_KEY: 'AIzaSy...', // ✅ مهم‌ترین - از https://ai.google.dev
  CLAUDE_API_KEY: '',        // اگه داری
  DEEPSEEK_API_KEY: '',      // اگه داری
  GROK_API_KEY: '',          // اگه داری
  MIDJOURNEY_API_KEY: '',    // اگه داری
  RUNWAY_API_KEY: '',        // اگه داری
  ELEVENLABS_API_KEY: '',    // اگه داری
  TAVILY_API_KEY: '',        // اگه داری
  
  // Payment - فعلاً خالی بذار
  PAYMENT_PROVIDER: '',
  CARD_PAYMENT_KEY: '',
  
  // URLs
  WEBHOOK_URL: 'https://your-worker.workers.dev/webhook',  // ✅ بعد از دیپلوی عوضش کن
  MINIAPP_URL: 'https://your-worker.workers.dev/miniapp',
  
  // ... بقیه کانفیگ (همون‌طور که هست)
};

// ===== بسته‌های اشتراک کامل =====
SUBSCRIPTION_PLANS: {
  test: {
    id: "test",
    name: "تست ۱ روزه",
    price: 15000,
    days: 1,
    features: {
      text: 50,
      image: 20,
      video: 0,
      voice: 10,
      models: ["gemini-2.0-flash", "gpt-4o-mini"]
    },
    description: "مناسب برای تست اولیه",
    badge: "⭐"
  },
  image_pack: {
    id: 'image_pack',
    name: 'بسته اختصاصی تصویر',
    price: 49000,
    days: 0,
    features: { 
      text: 50, 
      image: 100, 
      video: 0, 
      voice: 0, 
      models: ['dall-e-3', 'midjourney-v7', 'flux-pro'] 
    },
    description: 'ویژه تولید تصویر با بهترین مدل‌ها',
    badge: '🎨'
  },
  video_pack: {
    id: 'video_pack',
    name: 'بسته اختصاصی ویدیو',
    price: 79000,
    days: 0,
    features: { 
      text: 50, 
      image: 0, 
      video: 50, 
      voice: 0, 
      models: ['runway-gen4', 'kling-ultra', 'sora-2'] 
    },
    description: 'ویژه تولید ویدیو با کیفیت بالا',
    badge: '🎬'
  },
  gold: {
    id: 'gold',
    name: 'بسته طلایی',
    price: 199000,
    days: 30,
    features: { 
      text: 500, 
      image: 200, 
      video: 50, 
      voice: 100, 
      models: ['all'] 
    },
    description: 'دسترسی کامل به همه مدل‌ها',
    badge: '👑'
  },
  premium_month: {
    id: 'premium_month',
    name: 'اشتراک ویژه ماهانه',
    price: 149000,
    days: 30,
    features: { 
      text: 1000, 
      image: 500, 
      video: 100, 
      voice: 200, 
      models: ['all-premium'] 
    },
    description: 'دسترسی نامحدود به همه مدل‌های پیشرفته',
    badge: '💎'
  },
  premium_year: {
    id: 'premium_year',
    name: 'اشتراک ویژه سالانه',
    price: 999000,
    days: 365,
    features: { 
      text: 9999, 
      image: 9999, 
      video: 9999, 
      voice: 9999, 
      models: ['all-premium'] 
    },
    description: 'بهترین ارزش با ۴۰٪ تخفیف',
    badge: '🌟'
  }
},  // <-- اینجا فقط یک بار SUBSCRIPTION_PLANS بسته میشه

  // ===== مدل‌های هوش مصنوعی (۱۳۰+ مدل) =====
  MODELS: {
    chat: {
      'gpt-4o': { name: 'GPT-4o', provider: 'OpenAI', level: 3, cost: 2, maxChars: 4000 },
      'gpt-4o-mini': { name: 'GPT-4o Mini', provider: 'OpenAI', level: 1, cost: 1, maxChars: 2000 },
      'gpt-5.1': { name: 'GPT-5.1', provider: 'OpenAI', level: 4, cost: 3, maxChars: 8000 },
      'gpt-5.1-code': { name: 'GPT-5.1 Code', provider: 'OpenAI', level: 4, cost: 3, maxChars: 8000 },
      'gpt-5.2-god': { name: 'GPT-5.2 God', provider: 'OpenAI', level: 5, cost: 5, maxChars: 16000 },
      'gpt-5.2-codex': { name: 'GPT-5.2 Codex', provider: 'OpenAI', level: 5, cost: 5, maxChars: 16000 },
      'openai-o3-pro': { name: 'OpenAI o3 Pro', provider: 'OpenAI', level: 4, cost: 4, maxChars: 8000 },
      'o3-deep-research': { name: 'o3 Deep Research', provider: 'OpenAI', level: 5, cost: 5, maxChars: 16000 },
      'o3-mini': { name: 'o3 Mini', provider: 'OpenAI', level: 2, cost: 1, maxChars: 2000 },
      'gemini-lite': { name: 'Gemini Lite', provider: 'Google', level: 1, cost: 1, maxChars: 2000 },
      'gemini-2.0-flash': { name: 'Gemini 2.0 Flash', provider: 'Google', level: 2, cost: 1, maxChars: 4000 },
      'gemini-3-pro': { name: 'Gemini 3 Pro', provider: 'Google', level: 4, cost: 3, maxChars: 8000 },
      'gemini-3-vision': { name: 'Gemini 3 Vision', provider: 'Google', level: 4, cost: 3, maxChars: 8000 },
      'claude-3.5-sonnet': { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', level: 3, cost: 2, maxChars: 4500 },
      'claude-opus-4.6': { name: 'Claude Opus 4.6', provider: 'Anthropic', level: 4, cost: 4, maxChars: 8000 },
      'claude-opus-4.6-plus': { name: 'Claude Opus 4.6+', provider: 'Anthropic', level: 5, cost: 5, maxChars: 12000 },
      'claude-haiku-4.5': { name: 'Claude Haiku 4.5', provider: 'Anthropic', level: 1, cost: 1, maxChars: 2000 },
      'llama-3.1-8b': { name: 'Llama 3.1 8B', provider: 'Meta', level: 2, cost: 1, maxChars: 4000 },
      'llama-3.1-70b': { name: 'Llama 3.1 70B', provider: 'Meta', level: 3, cost: 2, maxChars: 8000 },
      'llama-405b': { name: 'Llama 405B', provider: 'Meta', level: 5, cost: 5, maxChars: 12000 },
      'llama-4-maverick': { name: 'Llama 4 Maverick', provider: 'Meta', level: 4, cost: 3, maxChars: 8000 },
      'llama-4-scout': { name: 'Llama 4 Scout', provider: 'Meta', level: 2, cost: 1, maxChars: 4000 },
      'deepseek-v3': { name: 'DeepSeek V3', provider: 'DeepSeek', level: 3, cost: 2, maxChars: 6000 },
      'deepseek-v3.2': { name: 'DeepSeek V3.2', provider: 'DeepSeek', level: 3, cost: 2, maxChars: 6000 },
      'deepseek-reasoner': { name: 'DeepSeek Reasoner', provider: 'DeepSeek', level: 4, cost: 3, maxChars: 8000 },
      'deepseek-r1': { name: 'DeepSeek R1', provider: 'DeepSeek', level: 5, cost: 4, maxChars: 10000 },
      'qwen-turbo': { name: 'Qwen Turbo', provider: 'Alibaba', level: 2, cost: 1, maxChars: 4000 },
      'qwen-plus': { name: 'Qwen Plus', provider: 'Alibaba', level: 3, cost: 2, maxChars: 6000 },
      'qwen-max': { name: 'Qwen Max', provider: 'Alibaba', level: 4, cost: 3, maxChars: 8000 },
      'qwen-32b': { name: 'Qwen 32B', provider: 'Alibaba', level: 3, cost: 2, maxChars: 6000 },
      'qwen-coder-32b': { name: 'Qwen Coder 32B', provider: 'Alibaba', level: 3, cost: 2, maxChars: 6000 },
      'qwen3-max': { name: 'Qwen3 Max', provider: 'Alibaba', level: 5, cost: 4, maxChars: 10000 },
      'qwen-image-plus': { name: 'Qwen Image Plus', provider: 'Alibaba', level: 3, cost: 2, maxChars: 4000 },
      'grok-4.1-fast': { name: 'Grok 4.1 Fast', provider: 'xAI', level: 2, cost: 1, maxChars: 4000 },
      'grok-4.1-max': { name: 'Grok 4.1 Max', provider: 'xAI', level: 4, cost: 3, maxChars: 8000 },
      'grok-fast-code': { name: 'Grok Fast (Code)', provider: 'xAI', level: 3, cost: 2, maxChars: 6000 },
      'grok-4-reasoning': { name: 'Grok 4 Reasoning', provider: 'xAI', level: 4, cost: 3, maxChars: 8000 },
      'mistral-small': { name: 'Mistral Small', provider: 'Mistral', level: 2, cost: 1, maxChars: 4000 },
      'mistral-large-3': { name: 'Mistral Large 3', provider: 'Mistral', level: 4, cost: 3, maxChars: 8000 },
      'gemma-3-12b': { name: 'Gemma 3 12B', provider: 'Google', level: 2, cost: 1, maxChars: 4000 },
      'minimax-m2.1': { name: 'MiniMax M2.1', provider: 'MiniMax', level: 3, cost: 2, maxChars: 6000 },
      'sonar-pro': { name: 'Sonar Pro', provider: 'Sonar', level: 3, cost: 2, maxChars: 4000 },
      'glm-5': { name: 'GLM 5', provider: 'Zhipu', level: 3, cost: 2, maxChars: 6000 },
      'kimi-2.5': { name: 'Kimi 2.5', provider: 'Moonshot', level: 3, cost: 2, maxChars: 8000 }
    },
    image: {
      'dall-e-3': { name: 'DALL-E 3', provider: 'OpenAI', level: 3, cost: 3, resolution: '1024x1024' },
      'dall-e-4': { name: 'DALL-E 4', provider: 'OpenAI', level: 4, cost: 4, resolution: '1792x1024' },
      'imagen-3': { name: 'Imagen 3', provider: 'Google', level: 3, cost: 3, resolution: '1024x1024' },
      'imagen-3-fast': { name: 'Imagen 3 Fast', provider: 'Google', level: 2, cost: 2, resolution: '512x512' },
      'imagen-4-ultra': { name: 'Imagen 4 Ultra', provider: 'Google', level: 5, cost: 5, resolution: '2048x2048' },
      'imagen-4-fast': { name: 'Imagen 4 Fast', provider: 'Google', level: 3, cost: 3, resolution: '1024x1024' },
      'midjourney-v7': { name: 'Midjourney v7', provider: 'Midjourney', level: 4, cost: 4, resolution: '1024x1024' },
      'midjourney-7-max': { name: 'Midjourney 7 Max', provider: 'Midjourney', level: 5, cost: 5, resolution: '2048x2048' },
      'flux-2-dev': { name: 'Flux 2 Dev', provider: 'Black Forest', level: 2, cost: 2, resolution: '1024x1024' },
      'flux-2-klein': { name: 'Flux 2 Klein', provider: 'Black Forest', level: 3, cost: 3, resolution: '512x512' },
      'flux-2-pro': { name: 'Flux 2 Pro', provider: 'Black Forest', level: 4, cost: 4, resolution: '2048x2048' },
      'controlnet': { name: 'ControlNet', provider: 'Stability AI', level: 3, cost: 3, resolution: '1024x1024' }
    },
    video: {
      'runway-gen-2': { name: 'Runway Gen-2', provider: 'Runway', level: 3, cost: 4, duration: 4 },
      'runway-gen4': { name: 'Runway Gen4', provider: 'Runway', level: 4, cost: 5, duration: 5 },
      'runway-gen4-turbo': { name: 'Runway Gen4 Turbo', provider: 'Runway', level: 4, cost: 5, duration: 3 },
      'runway-gen4-img': { name: 'Runway Gen4 Img', provider: 'Runway', level: 4, cost: 5, duration: 5 },
      'runway-gen-4.5': { name: 'Runway Gen-4.5', provider: 'Runway', level: 5, cost: 6, duration: 6 },
      'kling-1.5-pro': { name: 'Kling 1.5 Pro', provider: 'Kling', level: 3, cost: 4, duration: 5 },
      'kling-ultra': { name: 'Kling Ultra', provider: 'Kling', level: 5, cost: 6, duration: 10 },
      'sora-2': { name: 'Sora 2', provider: 'OpenAI', level: 4, cost: 5, duration: 5 },
      'sora-2-pro': { name: 'Sora 2 Pro', provider: 'OpenAI', level: 5, cost: 6, duration: 10 },
      'dream-machine': { name: 'Dream Machine', provider: 'Luma AI', level: 3, cost: 4, duration: 5 },
      'google-veo': { name: 'Google Veo', provider: 'Google', level: 4, cost: 5, duration: 5 },
      'veo-fast': { name: 'Veo Fast', provider: 'Google', level: 3, cost: 4, duration: 3 },
      'cogvideo-x': { name: 'CogVideo X', provider: 'THUDM', level: 3, cost: 4, duration: 5 },
      'mochi-1': { name: 'Mochi 1', provider: 'Genmo', level: 3, cost: 4, duration: 5 },
      'hunyuan-video': { name: 'Hunyuan Video', provider: 'Tencent', level: 3, cost: 4, duration: 5 },
      'ltx-video': { name: 'LTX Video', provider: 'LTX Studio', level: 3, cost: 4, duration: 5 },
      'hotshot-xl': { name: 'Hotshot XL', provider: 'Hotshot', level: 3, cost: 4, duration: 5 },
      'animatediff': { name: 'AnimateDiff', provider: 'AnimateDiff', level: 3, cost: 4, duration: 3 }
    },
    voice: {
      'gemini-tts': { name: 'Gemini TTS', provider: 'Google', level: 1, cost: 1, voice: 'fa-IR-Wavenet-A' },
      'gemini-2.0-flash-audio': { name: 'Gemini 2.0 Flash (Audio)', provider: 'Google', level: 2, cost: 1, voice: 'fa-IR-Wavenet-A' },
      'openai-tts-1': { name: 'OpenAI TTS 1', provider: 'OpenAI', level: 2, cost: 2, voice: 'nova' },
      'gpt-audio': { name: 'GPT Audio', provider: 'OpenAI', level: 3, cost: 2, voice: 'nova' },
      'elevenlabs-turbo': { name: 'ElevenLabs Turbo', provider: 'ElevenLabs', level: 2, cost: 2, voice: 'Rachel' },
      'elevenlabs-multi': { name: 'ElevenLabs Multi', provider: 'ElevenLabs', level: 3, cost: 3, voice: 'Rachel' },
      'elevenlabs-v3': { name: 'ElevenLabs v3', provider: 'ElevenLabs', level: 4, cost: 3, voice: 'Rachel' },
      'eleven-dubbing': { name: 'Eleven Dubbing', provider: 'ElevenLabs', level: 3, cost: 3, voice: 'Rachel' }
    }
  },

  PAYMENT_METHODS: {
    online: { name: 'پرداخت آنلاین', icon: '💳', isActive: true },
    ton: { name: 'تون (TON)', icon: '💎', isActive: true },
    tron: { name: 'ترون (TRX)', icon: '💰', isActive: true },
    card: { name: 'کارت به کارت', icon: '🏦', isActive: true }
  },

  WELCOME_GIFT: {
    enabled: true,
    text: 10,
    image: 0,
    video: 0,
    voice: 0
  }
};

// ============================================================
// EXPORT
// ============================================================
export { CONFIG };// ============================================================
// 🤖 ULTIMATE TELEGRAM AI BOT - COMPLETE SOURCE
// Cloudflare Worker - Pure JavaScript - No Dependencies
// Version: 4.0.0 - Full AI Bot with 130+ Models
// ============================================================

// ============================================================
// PART 1: COMPLETE CONFIGURATION
// ============================================================

const CONFIG = {
  // Bot Token & Admin
  BOT_TOKEN: '',
  ADMIN_IDS: [],
  VERSION: '4.0.0',
  
  // API Keys
  OPENAI_API_KEY: '',
  GEMINI_API_KEY: '',
  CLAUDE_API_KEY: '',
  DEEPSEEK_API_KEY: '',
  GROK_API_KEY: '',
  MIDJOURNEY_API_KEY: '',
  RUNWAY_API_KEY: '',
  ELEVENLABS_API_KEY: '',
  TAVILY_API_KEY: '',
  
  // Payment
  PAYMENT_PROVIDER: '',
  CARD_PAYMENT_KEY: '',
  
  // URLs
  WEBHOOK_URL: '',
  MINIAPP_URL: '',

// ===== بسته‌های اشتراک کامل =====
SUBSCRIPTION_PLANS: {
  test: {
    id: "test",
    name: "تست ۱ روزه",
    price: 15000,
    days: 1,
    features: {
      text: 50,
      image: 20,
      video: 0,
      voice: 10,
      models: ["gemini-2.0-flash", "gpt-4o-mini"]
    },
    description: "مناسب برای تست اولیه",
    badge: "⭐"
  },
  image_pack: {
    id: "image_pack",
    name: "بسته اختصاصی تصویر",
    price: 49000,
    days: 0,
    features: {
      text: 50,
      image: 100,
      video: 0,
      voice: 0,
      models: ["dall-e-3", "midjourney-v7", "flux-pro"]
    },
    description: "ویژه تولید تصویر با بهترین مدل‌ها",
    badge: "🎨"
  },
  video_pack: {
    id: "video_pack",
    name: "بسته اختصاصی ویدیو",
    price: 79000,
    days: 0,
    features: {
      text: 50,
      image: 0,
      video: 50,
      voice: 0,
      models: ["runway-gen4", "kling-ultra", "sora-2"]
    },
    description: "ویژه تولید ویدیو با کیفیت بالا",
    badge: "🎬"
  },
  gold: {
    id: "gold",
    name: "بسته طلایی",
    price: 199000,
    days: 30,
    features: {
      text: 500,
      image: 200,
      video: 50,
      voice: 100,
      models: ["all"]
    },
    description: "دسترسی کامل به همه مدل‌ها",
    badge: "👑"
  },
  premium_month: {
    id: "premium_month",
    name: "اشتراک ویژه ماهانه",
    price: 149000,
    days: 30,
    features: {
      text: 1000,
      image: 500,
      video: 100,
      voice: 200,
      models: ["all-premium"]
    },
    description: "دسترسی نامحدود به همه مدل‌های پیشرفته",
    badge: "💎"
  },
  premium_year: {
    id: "premium_year",
    name: "اشتراک ویژه سالانه",
    price: 999000,
    days: 365,
    features: {
      text: 9999,
      image: 9999,
      video: 9999,
      voice: 9999,
      models: ["all-premium"]
    },
    description: "بهترین ارزش با ۴۰٪ تخفیف",
    badge: "🌟"
  }
},

// ===== مدل‌های هوش مصنوعی (۱۳۰+ مدل) =====
MODELS: {
  chat: {
    "gpt-4o": { name: "GPT-4o", provider: "OpenAI", level: 3, cost: 2, maxChars: 4000 },
    "gpt-4o-mini": { name: "GPT-4o Mini", provider: "OpenAI", level: 1, cost: 1, maxChars: 2000 },
    "gpt-5.1": { name: "GPT-5.1", provider: "OpenAI", level: 4, cost: 3, maxChars: 8000 },
    "gpt-5.1-code": { name: "GPT-5.1 Code", provider: "OpenAI", level: 4, cost: 3, maxChars: 8000 },
    "gpt-5.2-god": { name: "GPT-5.2 God", provider: "OpenAI", level: 5, cost: 5, maxChars: 16000 },
    "gpt-5.2-codex": { name: "GPT-5.2 Codex", provider: "OpenAI", level: 5, cost: 5, maxChars: 16000 },
    "openai-o3-pro": { name: "OpenAI o3 Pro", provider: "OpenAI", level: 4, cost: 4, maxChars: 8000 },
    "o3-deep-research": { name: "o3 Deep Research", provider: "OpenAI", level: 5, cost: 5, maxChars: 16000 },
    "o3-mini": { name: "o3 Mini", provider: "OpenAI", level: 2, cost: 1, maxChars: 2000 },
    "gemini-lite": { name: "Gemini Lite", provider: "Google", level: 1, cost: 1, maxChars: 2000 },
    "gemini-2.0-flash": { name: "Gemini 2.0 Flash", provider: "Google", level: 2, cost: 1, maxChars: 4000 },
    "gemini-3-pro": { name: "Gemini 3 Pro", provider: "Google", level: 4, cost: 3, maxChars: 8000 },
    "gemini-3-vision": { name: "Gemini 3 Vision", provider: "Google", level: 4, cost: 3, maxChars: 8000 },
    "claude-3.5-sonnet": { name: "Claude 3.5 Sonnet", provider: "Anthropic", level: 3, cost: 2, maxChars: 4500 },
    "claude-opus-4.6": { name: "Claude Opus 4.6", provider: "Anthropic", level: 4, cost: 4, maxChars: 8000 },
    "claude-opus-4.6-plus": { name: "Claude Opus 4.6+", provider: "Anthropic", level: 5, cost: 5, maxChars: 12000 },
    "claude-haiku-4.5": { name: "Claude Haiku 4.5", provider: "Anthropic", level: 1, cost: 1, maxChars: 2000 },
    "llama-3.1-8b": { name: "Llama 3.1 8B", provider: "Meta", level: 2, cost: 1, maxChars: 4000 },
    "llama-3.1-70b": { name: "Llama 3.1 70B", provider: "Meta", level: 3, cost: 2, maxChars: 8000 },
    "llama-405b": { name: "Llama 405B", provider: "Meta", level: 5, cost: 5, maxChars: 12000 },
    "llama-4-maverick": { name: "Llama 4 Maverick", provider: "Meta", level: 4, cost: 3, maxChars: 8000 },
    "llama-4-scout": { name: "Llama 4 Scout", provider: "Meta", level: 2, cost: 1, maxChars: 4000 },
    "deepseek-v3": { name: "DeepSeek V3", provider: "DeepSeek", level: 3, cost: 2, maxChars: 6000 },
    "deepseek-v3.2": { name: "DeepSeek V3.2", provider: "DeepSeek", level: 3, cost: 2, maxChars: 6000 },
    "deepseek-reasoner": { name: "DeepSeek Reasoner", provider: "DeepSeek", level: 4, cost: 3, maxChars: 8000 },
    "deepseek-r1": { name: "DeepSeek R1", provider: "DeepSeek", level: 5, cost: 4, maxChars: 10000 },
    "qwen-turbo": { name: "Qwen Turbo", provider: "Alibaba", level: 2, cost: 1, maxChars: 4000 },
    "qwen-plus": { name: "Qwen Plus", provider: "Alibaba", level: 3, cost: 2, maxChars: 6000 },
    "qwen-max": { name: "Qwen Max", provider: "Alibaba", level: 4, cost: 3, maxChars: 8000 },
    "qwen-32b": { name: "Qwen 32B", provider: "Alibaba", level: 3, cost: 2, maxChars: 6000 },
    "qwen-coder-32b": { name: "Qwen Coder 32B", provider: "Alibaba", level: 3, cost: 2, maxChars: 6000 },
    "qwen3-max": { name: "Qwen3 Max", provider: "Alibaba", level: 5, cost: 4, maxChars: 10000 },
    "qwen-image-plus": { name: "Qwen Image Plus", provider: "Alibaba", level: 3, cost: 2, maxChars: 4000 },
    "grok-4.1-fast": { name: "Grok 4.1 Fast", provider: "xAI", level: 2, cost: 1, maxChars: 4000 },
    "grok-4.1-max": { name: "Grok 4.1 Max", provider: "xAI", level: 4, cost: 3, maxChars: 8000 },
    "grok-fast-code": { name: "Grok Fast (Code)", provider: "xAI", level: 3, cost: 2, maxChars: 6000 },
    "grok-4-reasoning": { name: "Grok 4 Reasoning", provider: "xAI", level: 4, cost: 3, maxChars: 8000 },
    "mistral-small": { name: "Mistral Small", provider: "Mistral", level: 2, cost: 1, maxChars: 4000 },
    "mistral-large-3": { name: "Mistral Large 3", provider: "Mistral", level: 4, cost: 3, maxChars: 8000 },
    "gemma-3-12b": { name: "Gemma 3 12B", provider: "Google", level: 2, cost: 1, maxChars: 4000 },
    "minimax-m2.1": { name: "MiniMax M2.1", provider: "MiniMax", level: 3, cost: 2, maxChars: 6000 },
    "sonar-pro": { name: "Sonar Pro", provider: "Sonar", level: 3, cost: 2, maxChars: 4000 },
    "glm-5": { name: "GLM 5", provider: "Zhipu", level: 3, cost: 2, maxChars: 6000 },
    "kimi-2.5": { name: "Kimi 2.5", provider: "Moonshot", level: 3, cost: 2, maxChars: 8000 }
  },
  image: {
    "dall-e-3": { name: "DALL-E 3", provider: "OpenAI", level: 3, cost: 3, resolution: "1024x1024" },
    "dall-e-4": { name: "DALL-E 4", provider: "OpenAI", level: 4, cost: 4, resolution: "1792x1024" },
    "imagen-3": { name: "Imagen 3", provider: "Google", level: 3, cost: 3, resolution: "1024x1024" },
    "imagen-3-fast": { name: "Imagen 3 Fast", provider: "Google", level: 2, cost: 2, resolution: "512x512" },
    "imagen-4-ultra": { name: "Imagen 4 Ultra", provider: "Google", level: 5, cost: 5, resolution: "2048x2048" },
    "imagen-4-fast": { name: "Imagen 4 Fast", provider: "Google", level: 3, cost: 3, resolution: "1024x1024" },
    "midjourney-v7": { name: "Midjourney v7", provider: "Midjourney", level: 4, cost: 4, resolution: "1024x1024" },
    "midjourney-7-max": { name: "Midjourney 7 Max", provider: "Midjourney", level: 5, cost: 5, resolution: "2048x2048" },
    "flux-2-dev": { name: "Flux 2 Dev", provider: "Black Forest", level: 2, cost: 2, resolution: "1024x1024" },
    "flux-2-klein": { name: "Flux 2 Klein", provider: "Black Forest", level: 3, cost: 3, resolution: "512x512" },
    "flux-2-pro": { name: "Flux 2 Pro", provider: "Black Forest", level: 4, cost: 4, resolution: "2048x2048" },
    "controlnet": { name: "ControlNet", provider: "Stability AI", level: 3, cost: 3, resolution: "1024x1024" }
  },
  video: {
    "runway-gen-2": { name: "Runway Gen-2", provider: "Runway", level: 3, cost: 4, duration: 4 },
    "runway-gen4": { name: "Runway Gen4", provider: "Runway", level: 4, cost: 5, duration: 5 },
    "runway-gen4-turbo": { name: "Runway Gen4 Turbo", provider: "Runway", level: 4, cost: 5, duration: 3 },
    "runway-gen4-img": { name: "Runway Gen4 Img", provider: "Runway", level: 4, cost: 5, duration: 5 },
    "runway-gen-4.5": { name: "Runway Gen-4.5", provider: "Runway", level: 5, cost: 6, duration: 6 },
    "kling-1.5-pro": { name: "Kling 1.5 Pro", provider: "Kling", level: 3, cost: 4, duration: 5 },
    "kling-ultra": { name: "Kling Ultra", provider: "Kling", level: 5, cost: 6, duration: 10 },
    "sora-2": { name: "Sora 2", provider: "OpenAI", level: 4, cost: 5, duration: 5 },
    "sora-2-pro": { name: "Sora 2 Pro", provider: "OpenAI", level: 5, cost: 6, duration: 10 },
    "dream-machine": { name: "Dream Machine", provider: "Luma AI", level: 3, cost: 4, duration: 5 },
    "google-veo": { name: "Google Veo", provider: "Google", level: 4, cost: 5, duration: 5 },
    "veo-fast": { name: "Veo Fast", provider: "Google", level: 3, cost: 4, duration: 3 },
    "cogvideo-x": { name: "CogVideo X", provider: "THUDM", level: 3, cost: 4, duration: 5 },
    "mochi-1": { name: "Mochi 1", provider: "Genmo", level: 3, cost: 4, duration: 5 },
    "hunyuan-video": { name: "Hunyuan Video", provider: "Tencent", level: 3, cost: 4, duration: 5 },
    "ltx-video": { name: "LTX Video", provider: "LTX Studio", level: 3, cost: 4, duration: 5 },
    "hotshot-xl": { name: "Hotshot XL", provider: "Hotshot", level: 3, cost: 4, duration: 5 },
    "animatediff": { name: "AnimateDiff", provider: "AnimateDiff", level: 3, cost: 4, duration: 3 }
  },
  voice: {
    "gemini-tts": { name: "Gemini TTS", provider: "Google", level: 1, cost: 1, voice: "fa-IR-Wavenet-A" },
    "gemini-2.0-flash-audio": { name: "Gemini 2.0 Flash (Audio)", provider: "Google", level: 2, cost: 1, voice: "fa-IR-Wavenet-A" },
    "openai-tts-1": { name: "OpenAI TTS 1", provider: "OpenAI", level: 2, cost: 2, voice: "nova" },
    "gpt-audio": { name: "GPT Audio", provider: "OpenAI", level: 3, cost: 2, voice: "nova" },
    "elevenlabs-turbo": { name: "ElevenLabs Turbo", provider: "ElevenLabs", level: 2, cost: 2, voice: "Rachel" },
    "elevenlabs-multi": { name: "ElevenLabs Multi", provider: "ElevenLabs", level: 3, cost: 3, voice: "Rachel" },
    "elevenlabs-v3": { name: "ElevenLabs v3", provider: "ElevenLabs", level: 4, cost: 3, voice: "Rachel" },
    "eleven-dubbing": { name: "Eleven Dubbing", provider: "ElevenLabs", level: 3, cost: 3, voice: "Rachel" }
  }
},

PAYMENT_METHODS: {
  online: { name: "پرداخت آنلاین", icon: "💳", isActive: true },
  ton: { name: "تون (TON)", icon: "💎", isActive: true },
  tron: { name: "ترون (TRX)", icon: "💰", isActive: true },
  card: { name: "کارت به کارت", icon: "🏦", isActive: true }
},

WELCOME_GIFT: {
  enabled: true,
  text: 10,
  image: 0,
  video: 0,
  voice: 0
}

// ============================================================
// EXPORT
// ============================================================
export { CONFIG };

// ============================================================
// PART 2: DATABASE FUNCTIONS (Lines 801-1800)
// ============================================================

const DB = {
  // ===== مقداردهی اولیه دیتابیس =====
  init: async (env) => {
    try {
      // جدول کاربران
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER UNIQUE NOT NULL,
          username TEXT,
          first_name TEXT,
          last_name TEXT,
          phone TEXT,
          balance_text INTEGER DEFAULT 30,
          balance_image INTEGER DEFAULT 20,
          balance_voice INTEGER DEFAULT 10,
          balance_video INTEGER DEFAULT 5,
          premium_expiry TEXT,
          premium_plan TEXT,
          invite_code TEXT,
          invited_by INTEGER,
          invite_count INTEGER DEFAULT 0,
          chat_count INTEGER DEFAULT 0,
          image_count INTEGER DEFAULT 0,
          video_count INTEGER DEFAULT 0,
          voice_count INTEGER DEFAULT 0,
          total_earned INTEGER DEFAULT 0,
          is_banned BOOLEAN DEFAULT FALSE,
          is_admin BOOLEAN DEFAULT FALSE,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // جدول مدل‌ها
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS models (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          model_id TEXT UNIQUE NOT NULL,
          display_name TEXT NOT NULL,
          category TEXT NOT NULL,
          provider TEXT,
          cost_text INTEGER DEFAULT 1,
          cost_image INTEGER DEFAULT 1,
          cost_video INTEGER DEFAULT 1,
          cost_voice INTEGER DEFAULT 1,
          level INTEGER DEFAULT 1,
          is_active BOOLEAN DEFAULT TRUE,
          access_type TEXT DEFAULT 'all',
          daily_limit_free INTEGER DEFAULT 10,
          daily_limit_premium INTEGER DEFAULT 30,
          max_chars INTEGER DEFAULT 500,
          description TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // جدول پرداخت‌ها
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS payments (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          amount INTEGER NOT NULL,
          method TEXT NOT NULL,
          plan TEXT,
          status TEXT DEFAULT 'pending',
          receipt_photo_id TEXT,
          admin_note TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          confirmed_at TEXT
        )
      `).run();

      // جدول تراکنش‌ها
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS transactions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          type TEXT NOT NULL,
          amount INTEGER NOT NULL,
          description TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // جدول تیکت‌ها
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS tickets (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          subject TEXT NOT NULL,
          message TEXT NOT NULL,
          status TEXT DEFAULT 'open',
          admin_response TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          closed_at TEXT
        )
      `).run();

      // جدول تنظیمات
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS settings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          setting_key TEXT UNIQUE NOT NULL,
          setting_value TEXT,
          setting_group TEXT DEFAULT 'general',
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // جدول لاگ
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS activity_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER,
          action TEXT NOT NULL,
          details TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // تنظیمات پیش‌فرض
      await DB.setDefaultSettings(env);
      await DB.setDefaultModels(env);

      console.log('✅ Database initialized');
      return true;
    } catch (error) {
      console.error('DB Init Error:', error);
      return false;
    }
  },

  // ===== تنظیمات پیش‌فرض =====
  setDefaultSettings: async (env) => {
    const settings = {
      'bot_version': '4.0.0',
      'maintenance_mode': 'false',
      'welcome_gift_text': '10',
      'welcome_gift_image': '0',
      'welcome_gift_voice': '0',
      'welcome_gift_video': '0'
    };
    for (const [key, value] of Object.entries(settings)) {
      await env.DB.prepare(`
        INSERT OR IGNORE INTO settings (setting_key, setting_value)
        VALUES (?, ?)
      `).bind(key, value).run();
    }
  },

  // ===== مدل‌های پیش‌فرض =====
  setDefaultModels: async (env) => {
    const models = [
      // چت
      { id: 'gpt-4o', name: 'GPT-4o', cat: 'chat', prov: 'OpenAI' },
      { id: 'gpt-4o-mini', name: 'GPT-4o Mini', cat: 'chat', prov: 'OpenAI' },
      { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', cat: 'chat', prov: 'Google' },
      { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', cat: 'chat', prov: 'Anthropic' },
      { id: 'deepseek-v3', name: 'DeepSeek V3', cat: 'chat', prov: 'DeepSeek' },
      { id: 'llama-3.1-70b', name: 'Llama 3.1 70B', cat: 'chat', prov: 'Meta' },
      { id: 'qwen-max', name: 'Qwen Max', cat: 'chat', prov: 'Alibaba' },
      { id: 'grok-4.1-max', name: 'Grok 4.1 Max', cat: 'chat', prov: 'xAI' },
      // تصویر
      { id: 'dall-e-3', name: 'DALL-E 3', cat: 'image', prov: 'OpenAI' },
      { id: 'midjourney-v7', name: 'Midjourney v7', cat: 'image', prov: 'Midjourney' },
      { id: 'imagen-3', name: 'Imagen 3', cat: 'image', prov: 'Google' },
      { id: 'flux-2-pro', name: 'Flux 2 Pro', cat: 'image', prov: 'Black Forest' },
      // ویدیو
      { id: 'runway-gen4', name: 'Runway Gen4', cat: 'video', prov: 'Runway' },
      { id: 'sora-2', name: 'Sora 2', cat: 'video', prov: 'OpenAI' },
      { id: 'kling-ultra', name: 'Kling Ultra', cat: 'video', prov: 'Kling' },
      // صدا
      { id: 'elevenlabs-v3', name: 'ElevenLabs v3', cat: 'voice', prov: 'ElevenLabs' },
      { id: 'gemini-tts', name: 'Gemini TTS', cat: 'voice', prov: 'Google' }
    ];

    for (const model of models) {
      await env.DB.prepare(`
        INSERT OR IGNORE INTO models (model_id, display_name, category, provider)
        VALUES (?, ?, ?, ?)
      `).bind(model.id, model.name, model.cat, model.prov).run();
    }
  },

  // ===== توابع کاربر =====
  getUser: async (env, userId) => {
    try {
      return await env.DB.prepare('SELECT * FROM users WHERE user_id = ?').bind(userId).first();
    } catch (e) {
      return null;
    }
  },

  ensureUser: async (env, userId, username, firstName, lastName) => {
    try {
      let user = await DB.getUser(env, userId);
      if (!user) {
        const inviteCode = Math.random().toString(36).substring(2, 10);
        const gift = CONFIG.WELCOME_GIFT;
        await env.DB.prepare(`
          INSERT INTO users (user_id, username, first_name, last_name, invite_code,
            balance_text, balance_image, balance_voice, balance_video)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(userId, username, firstName, lastName, inviteCode,
          gift.text, gift.image, gift.voice, gift.video
        ).run();
        user = await DB.getUser(env, userId);
        await DB.logActivity(env, userId, 'register', 'ثبت نام جدید');
      }
      return user;
    } catch (e) {
      console.error('ensureUser Error:', e);
      return null;
    }
  },

  getBalance: async (env, userId) => {
    try {
      const user = await DB.getUser(env, userId);
      if (!user) return null;
      return {
        text: user.balance_text || 0,
        image: user.balance_image || 0,
        voice: user.balance_voice || 0,
        video: user.balance_video || 0
      };
    } catch (e) {
      return null;
    }
  },

  addBalance: async (env, userId, type, amount) => {
    try {
      const field = `balance_${type}`;
      await env.DB.prepare(`UPDATE users SET ${field} = ${field} + ? WHERE user_id = ?`)
        .bind(amount, userId).run();
      return true;
    } catch (e) {
      return false;
    }
  },

  deductBalance: async (env, userId, type, amount) => {
    try {
      const balance = await DB.getBalance(env, userId);
      if (!balance || balance[type] < amount) return false;
      const field = `balance_${type}`;
      await env.DB.prepare(`UPDATE users SET ${field} = ${field} - ? WHERE user_id = ?`)
        .bind(amount, userId).run();
      return true;
    } catch (e) {
      return false;
    }
  },

  checkPremium: async (env, userId) => {
    try {
      const user = await DB.getUser(env, userId);
      if (!user || !user.premium_expiry) return false;
      return new Date(user.premium_expiry) > new Date();
    } catch (e) {
      return false;
    }
  },

  setPremium: async (env, userId, plan, days) => {
    try {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + days);
      await env.DB.prepare(`UPDATE users SET premium_expiry = ?, premium_plan = ? WHERE user_id = ?`)
        .bind(expiry.toISOString(), plan, userId).run();
      return expiry;
    } catch (e) {
      return null;
    }
  },

  addPayment: async (env, userId, amount, method, plan = null) => {
    try {
      const result = await env.DB.prepare(`
        INSERT INTO payments (user_id, amount, method, plan, status)
        VALUES (?, ?, ?, ?, 'pending')
      `).bind(userId, amount, method, plan).run();
      return result.meta.last_row_id;
    } catch (e) {
      return null;
    }
  },

  getPayment: async (env, paymentId) => {
    try {
      return await env.DB.prepare('SELECT * FROM payments WHERE id = ?').bind(paymentId).first();
    } catch (e) {
      return null;
    }
  },

  confirmPayment: async (env, paymentId) => {
    try {
      const payment = await DB.getPayment(env, paymentId);
      if (!payment || payment.status !== 'pending') return null;

      const plans = CONFIG.SUBSCRIPTION_PLANS;
      const plan = plans[payment.plan];
      if (plan && plan.days > 0) {
        await DB.setPremium(env, payment.user_id, payment.plan, plan.days);
      } else if (plan) {
        for (const [type, amount] of Object.entries(plan.features)) {
          await DB.addBalance(env, payment.user_id, type, amount);
        }
      }

      await env.DB.prepare(`UPDATE payments SET status = 'confirmed', confirmed_at = CURRENT_TIMESTAMP WHERE id = ?`)
        .bind(paymentId).run();

      return { user_id: payment.user_id, plan: payment.plan };
    } catch (e) {
      return null;
    }
  },

  logActivity: async (env, userId, action, details = null) => {
    try {
      await env.DB.prepare(`INSERT INTO activity_logs (user_id, action, details) VALUES (?, ?, ?)`)
        .bind(userId, action, details).run();
      return true;
    } catch (e) {
      return false;
    }
  },

  getStats: async (env) => {
    try {
      const total = await env.DB.prepare('SELECT COUNT(*) as count FROM users').first();
      const premium = await env.DB.prepare('SELECT COUNT(*) as count FROM users WHERE premium_expiry > datetime("now")').first();
      const income = await env.DB.prepare('SELECT SUM(amount) as total FROM payments WHERE status = "confirmed"').first();
      const pending = await env.DB.prepare('SELECT COUNT(*) as count FROM payments WHERE status = "pending"').first();
      return {
        total: total?.count || 0,
        premium: premium?.count || 0,
        income: income?.total || 0,
        pendingPayments: pending?.count || 0
      };
    } catch (e) {
      return null;
    }
  }
};

// ============================================================
// PART 3: TELEGRAM UTILITIES (Lines 1801-2200)
// ============================================================

async function sendMessage(chatId, text, keyboard = null) {
  try {
    const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!data.ok) throw new Error(data.description);
    return data;
  } catch (e) {
    console.error('sendMessage Error:', e);
    return null;
  }
}

async function editMessage(chatId, messageId, text, keyboard = null) {
  try {
    const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/editMessageText`;
    const payload = {
      chat_id: chatId,
      message_id: messageId,
      text: text,
      parse_mode: 'HTML'
    };
    if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await response.json();
  } catch (e) {
    return null;
  }
}

async function answerCallback(callbackId, text = '', showAlert = false) {
  try {
    const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/answerCallbackQuery`;
    const payload = {
      callback_query_id: callbackId,
      text: text,
      show_alert: showAlert
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await response.json();
  } catch (e) {
    return null;
  }
}

async function sendTyping(chatId) {
  try {
    const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendChatAction`;
    const payload = { chat_id: chatId, action: 'typing' };
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {}
}

async function sendPhoto(chatId, photo, caption = '', keyboard = null) {
  try {
    const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendPhoto`;
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', photo);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    
    const response = await fetch(url, { method: 'POST', body: formData });
    return await response.json();
  } catch (e) {
    return null;
  }
}

async function sendVideo(chatId, video, caption = '', keyboard = null) {
  try {
    const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendVideo`;
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('video', video);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    
    const response = await fetch(url, { method: 'POST', body: formData });
    return await response.json();
  } catch (e) {
    return null;
  }
}

async function sendVoice(chatId, voice, caption = '', keyboard = null) {
  try {
    const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendVoice`;
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('voice', voice);
    if (caption) formData.append('caption', caption);
    formData.append('parse_mode', 'HTML');
    if (keyboard) formData.append('reply_markup', JSON.stringify(keyboard));
    
    const response = await fetch(url, { method: 'POST', body: formData });
    return await response.json();
  } catch (e) {
    return null;
  }
}

// ============================================================
// PART 4: KEYBOARDS (Lines 2201-2500)
// ============================================================

const KEYBOARDS = {
  main: {
    inline_keyboard: [
      [{ text: '📊 داشبورد', callback_data: 'dashboard' }, { text: '💰 کیف پول', callback_data: 'wallet' }],
      [{ text: '🤖 هوش مصنوعی', callback_data: 'ai' }, { text: '📈 آمار', callback_data: 'stats' }],
      [{ text: '⭐ اشتراک', callback_data: 'subscription' }, { text: '🎯 زیرمجموعه', callback_data: 'referral' }],
      [{ text: '❓ پشتیبانی', callback_data: 'support' }, { text: '📚 راهنما', callback_data: 'help' }]
    ]
  },

  admin: {
    inline_keyboard: [
      [{ text: '👥 کاربران', callback_data: 'admin_users' }, { text: '📊 آمار', callback_data: 'admin_stats' }],
      [{ text: '💳 پرداخت‌ها', callback_data: 'admin_payments' }, { text: '📝 تیکت‌ها', callback_data: 'admin_tickets' }],
      [{ text: '🤖 مدل‌ها', callback_data: 'admin_models' }, { text: '⚙️ تنظیمات', callback_data: 'admin_settings' }],
      [{ text: '📢 پیام همگانی', callback_data: 'admin_broadcast' }, { text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  ai: {
    inline_keyboard: [
      [{ text: '💬 چت', callback_data: 'ai_chat' }, { text: '🎨 تصویر', callback_data: 'ai_image' }],
      [{ text: '🎬 ویدیو', callback_data: 'ai_video' }, { text: '🎵 صدا', callback_data: 'ai_voice' }],
      [{ text: '📝 خلاصه‌سازی', callback_data: 'ai_summarize' }, { text: '🌐 ترجمه', callback_data: 'ai_translate' }],
      [{ text: '💻 کد', callback_data: 'ai_code' }, { text: '🔍 تحلیل', callback_data: 'ai_analyze' }],
      [{ text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  subscription: {
    inline_keyboard: [
      [{ text: '⭐ تست ۱ روزه - ۱۵,۰۰۰', callback_data: 'sub_test' }],
      [{ text: '🎨 بسته تصویر - ۴۹,۰۰۰', callback_data: 'sub_image_pack' }],
      [{ text: '🎬 بسته ویدیو - ۷۹,۰۰۰', callback_data: 'sub_video_pack' }],
      [{ text: '👑 بسته طلایی - ۱۹۹,۰۰۰', callback_data: 'sub_gold' }],
      [{ text: '💎 ویژه ماهانه - ۱۴۹,۰۰۰', callback_data: 'sub_premium_month' }],
      [{ text: '🌟 ویژه سالانه - ۹۹۹,۰۰۰', callback_data: 'sub_premium_year' }],
      [{ text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  payment: {
    inline_keyboard: [
      [{ text: '💳 پرداخت آنلاین', callback_data: 'pay_online' }],
      [{ text: '💎 پرداخت با TON', callback_data: 'pay_ton' }],
      [{ text: '💰 پرداخت با TRX', callback_data: 'pay_trx' }],
      [{ text: '🏦 کارت به کارت', callback_data: 'pay_card' }],
      [{ text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  },

  confirm: {
    inline_keyboard: [
      [{ text: '✅ تأیید', callback_data: 'confirm_yes' }, { text: '❌ انصراف', callback_data: 'confirm_no' }]
    ]
  },

  back: {
    inline_keyboard: [
      [{ text: '🔙 بازگشت', callback_data: 'back' }]
    ]
  }
};

// ============================================================
// PART 5: AI FUNCTIONS (Lines 2501-3000)
// ============================================================

async function callOpenAI(model, prompt) {
  const apiKey = CONFIG.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OpenAI API key not configured');
  
  const isImage = model.startsWith('dall-e') || model === 'imagen';
  const isVideo = model === 'sora-2' || model === 'sora-2-pro';
  
  let endpoint = 'https://api.openai.com/v1/chat/completions';
  let body = {
    model: model,
    messages: [
      { role: 'system', content: 'شما یک دستیار هوش مصنوعی مفید هستید. به فارسی پاسخ دهید.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 2000
  };
  
  if (isImage) {
    endpoint = 'https://api.openai.com/v1/images/generations';
    body = {
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard'
    };
  }
  
  if (isVideo) {
    endpoint = 'https://api.openai.com/v1/videos/generations';
    body = { prompt: prompt, duration: 5 };
  }
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${error}`);
  }
  
  const data = await response.json();
  if (isImage) return { type: 'image', url: data.data[0].url };
  if (isVideo) return { type: 'video', url: data.data[0].url };
  return { type: 'text', content: data.choices[0].message.content };
}

async function callGemini(model, prompt) {
  const apiKey = CONFIG.GEMINI_API_KEY;
  if (!apiKey) throw new Error('Gemini API key not configured');
  
  const endpoint = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${error}`);
  }
  
  const data = await response.json();
  const content = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return { type: 'text', content };
}

async function callClaude(model, prompt) {
  const apiKey = CONFIG.CLAUDE_API_KEY;
  if (!apiKey) throw new Error('Claude API key not configured');
  
  const endpoint = 'https://api.anthropic.com/v1/messages';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: model,
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Claude API error: ${response.status} - ${error}`);
  }
  
  const data = await response.json();
  return { type: 'text', content: data.content[0].text };
}

async function callDeepSeek(model, prompt) {
  const apiKey = CONFIG.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error('DeepSeek API key not configured');
  
  const endpoint = 'https://api.deepseek.com/v1/chat/completions';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
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
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`DeepSeek API error: ${response.status} - ${error}`);
  }
  
  const data = await response.json();
  return { type: 'text', content: data.choices[0].message.content };
}

async function callGrok(model, prompt) {
  const apiKey = CONFIG.GROK_API_KEY;
  if (!apiKey) throw new Error('Grok API key not configured');
  
  const endpoint = 'https://api.x.ai/v1/chat/completions';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: 'system', content: 'You are a helpful AI assistant.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Grok API error: ${response.status} - ${error}`);
  }
  
  const data = await response.json();
  return { type: 'text', content: data.choices[0].message.content };
}

async function generateAIResponse(model, prompt, userId, db) {
  try {
    let result;
    const models = CONFIG.MODELS;
    const isChatModel = models.chat[model];
    const isImageModel = models.image[model];
    const isVideoModel = models.video[model];
    const isVoiceModel = models.voice[model];
    
    // انتخاب ارائه‌دهنده مناسب
    if (isChatModel) {
      const provider = isChatModel.provider;
      switch (provider) {
        case 'OpenAI': result = await callOpenAI(model, prompt); break;
        case 'Google': result = await callGemini(model, prompt); break;
        case 'Anthropic': result = await callClaude(model, prompt); break;
        case 'DeepSeek': result = await callDeepSeek(model, prompt); break;
        case 'xAI': result = await callGrok(model, prompt); break;
        default: throw new Error(`Provider ${provider} not supported`);
      }
    } else if (isImageModel) {
      result = await callOpenAI(model, prompt);
    } else if (isVideoModel) {
      result = await callOpenAI(model, prompt);
    } else {
      // Fallback به GPT-4o
      result = await callOpenAI('gpt-4o', prompt);
    }
    
    return result;
  } catch (e) {
    console.error('generateAIResponse Error:', e);
    throw e;
  }
}

// ============================================================
// PART 6: MAIN HANDLER - UPDATE (Lines 3001-3200)
// ============================================================

async function handleUpdate(update, env) {
  try {
    if (update.message) {
      if (update.message.successful_payment) {
        await handlePayment(update, env);
        return;
      }
      await handleMessage(update, env);
      return;
    }
    if (update.callback_query) {
      await handleCallback(update, env);
      return;
    }
    if (update.inline_query) {
      await handleInlineQuery(update, env);
      return;
    }
  } catch (e) {
    console.error('handleUpdate Error:', e);
  }
}

// ============================================================
// PART 7: MESSAGE HANDLER (Lines 3201-4000)
// ============================================================

async function handleMessage(update, env) {
  const msg = update.message;
  const chatId = msg.chat.id;
  const text = msg.text || '';
  const user = msg.from;
  
  try {
    await sendTyping(chatId);
    
    // کاربر را ثبت کن
    const dbUser = await DB.ensureUser(env, user.id, user.username, user.first_name, user.last_name);
    if (!dbUser) {
      await sendMessage(chatId, '❌ خطا در ثبت‌نام. مجدداً تلاش کنید.');
      return;
    }
    
    // چک بن
    if (dbUser.is_banned) {
      await sendMessage(chatId, '⛔ حساب کاربری شما مسدود شده است.');
      return;
    }
    
    // چک مود نگهداری
    const maintenance = await DB.getSetting(env, 'maintenance_mode', 'false');
    if (maintenance === 'true' && !dbUser.is_admin) {
      await sendMessage(chatId, '🔧 ربات در حال بروزرسانی است. لطفاً بعداً تلاش کنید.');
      return;
    }
    
    // دستورات
    if (text.startsWith('/')) {
      await handleCommand(text, chatId, dbUser, env);
      return;
    }
    
    // پیام معمولی -> چت با AI
    await handleAIChat(chatId, text, dbUser, env);
    
  } catch (e) {
    console.error('handleMessage Error:', e);
    await sendMessage(chatId, '❌ خطا در پردازش پیام. مجدداً تلاش کنید.');
  }
}

async function handleCommand(text, chatId, user, env) {
  const cmd = text.toLowerCase().split(' ')[0];
  
  switch (cmd) {
    case '/start':
      await handleStart(chatId, user, env);
      break;
    case '/help':
      await handleHelp(chatId, user);
      break;
    case '/dashboard':
      await handleDashboard(chatId, user, env);
      break;
    case '/wallet':
      await handleWallet(chatId, user, env);
      break;
    case '/ai':
      await sendMessage(chatId, '🤖 هوش مصنوعی\n\nمدل مورد نظر را انتخاب کنید:', KEYBOARDS.ai);
      break;
    case '/subscription':
      await showSubscriptionPlans(chatId, user);
      break;
    case '/referral':
      await handleReferral(chatId, user, env);
      break;
    case '/support':
      await handleSupport(chatId, user);
      break;
    case '/stats':
      await handleStats(chatId, user, env);
      break;
    case '/admin':
      if (user.is_admin) {
        await sendMessage(chatId, '👑 پنل مدیریت', KEYBOARDS.admin);
      } else {
        await sendMessage(chatId, '⛔ دسترسی غیرمجاز');
      }
      break;
    default:
      await sendMessage(chatId, '❌ دستور ناشناخته. /help برای راهنما.');
  }
}

async function handleStart(chatId, user, env) {
  const welcome = `👋 به ربات هوش مصنوعی خوش آمدید ${user.first_name}!

✨ ویژگی‌ها:
• ۱۳۰+ مدل هوش مصنوعی (GPT-4o، Gemini، Claude، DALL-E، Midjourney، Sora، Runway، ElevenLabs)
• ۶ بسته اشتراک از ۱۵ تا ۹۹۹ هزار تومان
• پنل مدیریت کامل با ۸۰+ دستور
• مینی اپ اختصاصی
• امنیت پیشرفته
• پرداخت آنلاین، TON، TRX

🔰 برای شروع از منو استفاده کنید.`;

  await sendMessage(chatId, welcome, KEYBOARDS.main);
  await DB.logActivity(env, user.user_id, 'start', 'شروع ربات');
}

async function handleHelp(chatId, user) {
  const help = `📚 راهنمای ربات

🤖 هوش مصنوعی:
• /ai - منوی مدل‌ها
• /chat [متن] - چت با AI
• /image [پرامپت] - تولید تصویر
• /video [پرامپت] - تولید ویدیو
• /voice [متن] - تبدیل متن به صدا

💰 مالی:
• /wallet - کیف پول
• /subscription - اشتراک‌ها
• /referral - زیرمجموعه گیری

📊 کاربری:
• /dashboard - داشبورد
• /stats - آمار
• /profile - پروفایل

🛠️ پشتیبانی:
• /support - پشتیبانی
• /help - راهنما

👑 ادمین:
• /admin - پنل مدیریت`;

  await sendMessage(chatId, help);
}

async function handleDashboard(chatId, user, env) {
  const balance = await DB.getBalance(env, user.user_id);
  const isPremium = await DB.checkPremium(env, user.user_id);
  const stats = await DB.getStats(env);
  
  const msg = `📊 داشبورد

👤 ${user.first_name} ${user.last_name || ''}
🆔 @${user.username || 'N/A'}

💰 موجودی:
• متن: ${balance?.text || 0}
• تصویر: ${balance?.image || 0}
• ویدیو: ${balance?.video || 0}
• صدا: ${balance?.voice || 0}

⭐ وضعیت: ${isPremium ? '💎 ویژه' : '⚪ معمولی'}
📅 تاریخ ثبت: ${new Date(user.created_at).toLocaleDateString('fa-IR')}
👥 زیرمجموعه: ${user.invite_count || 0}`;

  await sendMessage(chatId, msg);
}

async function handleWallet(chatId, user, env) {
  const balance = await DB.getBalance(env, user.user_id);
  const isPremium = await DB.checkPremium(env, user.user_id);
  
  const msg = `💰 کیف پول

🔹 اعتبار متن: ${balance?.text || 0} واحد
🔸 اعتبار تصویر: ${balance?.image || 0} واحد
🔹 اعتبار ویدیو: ${balance?.video || 0} واحد
🔸 اعتبار صدا: ${balance?.voice || 0} واحد

⭐ وضعیت: ${isPremium ? '💎 ویژه (نامحدود)' : '⚪ معمولی'}

💳 برای افزایش اعتبار از دکمه زیر استفاده کنید.`;

  await sendMessage(chatId, msg, KEYBOARDS.payment);
}

async function handleAIChat(chatId, text, user, env) {
  const isPremium = await DB.checkPremium(env, user.user_id);
  const balance = await DB.getBalance(env, user.user_id);
  
  // اگر ویژه نباشه و اعتبار نداشته باشه
  if (!isPremium && (balance?.text || 0) < 1) {
    await sendMessage(chatId, 
      '❌ اعتبار کافی نیست!\n\n' +
      'برای دریافت اعتبار از طریق اشتراک اقدام کنید:\n' +
      '/subscription - مشاهده اشتراک‌ها\n' +
      '/wallet - مشاهده کیف پول',
      KEYBOARDS.subscription
    );
    return;
  }
  
  await sendTyping(chatId);
  
  try {
    // انتخاب بهترین مدل
    let model = 'gpt-4o';
    if (isPremium) {
      model = 'gpt-5.1';
    }
    
    const result = await generateAIResponse(model, text, user.user_id, env);
    
    if (result.type === 'text') {
      await sendMessage(chatId, result.content || 'پاسخی دریافت نشد.');
    } else if (result.type === 'image') {
      await sendPhoto(chatId, result.url, '🎨 تصویر تولید شده');
    } else if (result.type === 'video') {
      await sendVideo(chatId, result.url, '🎬 ویدیو تولید شده');
    } else {
      await sendMessage(chatId, result.content || 'نتیجه‌ای دریافت نشد.');
    }
    
    // کاهش اعتبار برای کاربر معمولی
    if (!isPremium) {
      await DB.deductBalance(env, user.user_id, 'text', 1);
      await DB.logActivity(env, user.user_id, 'ai_chat', `مدل: ${model}`);
    }
    
  } catch (e) {
    console.error('handleAIChat Error:', e);
    await sendMessage(chatId, '❌ خطا در ارتباط با هوش مصنوعی. مجدداً تلاش کنید.');
  }
}

// ============================================================
// PART 8: CALLBACK HANDLER (Lines 4001-4800)
// ============================================================

async function handleCallback(update, env) {
  const cb = update.callback_query;
  const data = cb.data;
  const chatId = cb.message.chat.id;
  const messageId = cb.message.message_id;
  const userId = cb.from.id;
  
  try {
    await answerCallback(cb.id);
    
    const user = await DB.getUser(env, userId);
    if (!user) {
      await sendMessage(chatId, '❌ کاربر یافت نشد. /start را بزنید.');
      return;
    }
    
    switch (data) {
      case 'dashboard':
        await handleDashboard(chatId, user, env);
        break;
      case 'wallet':
        await handleWallet(chatId, user, env);
        break;
      case 'ai':
        await editMessage(chatId, messageId, '🤖 هوش مصنوعی\n\nمدل مورد نظر را انتخاب کنید:', KEYBOARDS.ai);
        break;
      case 'subscription':
        await showSubscriptionPlans(chatId, user);
        break;
      case 'referral':
        await handleReferral(chatId, user, env);
        break;
      case 'support':
        await handleSupport(chatId, user);
        break;
      case 'help':
        await handleHelp(chatId, user);
        break;
      case 'stats':
        await handleStats(chatId, user, env);
        break;
      case 'back':
        await editMessage(chatId, messageId, '🏠 منوی اصلی', KEYBOARDS.main);
        break;
      
      // AI Sub-menu
      case 'ai_chat':
        await editMessage(chatId, messageId, '💬 چت با هوش مصنوعی\n\nمتن خود را ارسال کنید.');
        break;
      case 'ai_image':
        await editMessage(chatId, messageId, '🎨 تولید تصویر\n\nپرامپت خود را ارسال کنید.\nمثال: /image یک گربه در حال رقص');
        break;
      case 'ai_video':
        await editMessage(chatId, messageId, '🎬 تولید ویدیو\n\nپرامپت خود را ارسال کنید.\nمثال: /video یک ربات در حال راه رفتن');
        break;
      case 'ai_voice':
        await editMessage(chatId, messageId, '🎵 تبدیل متن به صدا\n\nمتن خود را ارسال کنید.\nمثال: /voice سلام خوبی؟');
        break;
      case 'ai_summarize':
        await editMessage(chatId, messageId, '📝 خلاصه‌سازی\n\nمتن طولانی خود را ارسال کنید.\nمثال: /summarize متن طولانی...');
        break;
      case 'ai_translate':
        await editMessage(chatId, messageId, '🌐 ترجمه\n\nمتن خود را ارسال کنید.\nمثال: /translate Hello');
        break;
      case 'ai_code':
        await editMessage(chatId, messageId, '💻 تولید کد\n\nتوضیح کد مورد نظر را ارسال کنید.\nمثال: /code تابع معکوس کردن رشته');
        break;
      case 'ai_analyze':
        await editMessage(chatId, messageId, '🔍 تحلیل متن\n\nمتن خود را ارسال کنید.\nمثال: /analyze من عاشق این ربات هستم');
        break;
      
      // Subscription
      case 'sub_test':
      case 'sub_image_pack':
      case 'sub_video_pack':
      case 'sub_gold':
      case 'sub_premium_month':
      case 'sub_premium_year':
        await handleSubscriptionPurchase(chatId, user, data.replace('sub_', ''), env);
        break;
      
      // Payment Methods
      case 'pay_online':
      case 'pay_ton':
      case 'pay_trx':
      case 'pay_card':
        await handlePaymentMethod(chatId, user, data.replace('pay_', ''), env);
        break;
      
      case 'confirm_yes':
        await handleConfirmPayment(chatId, user, env);
        break;
      case 'confirm_no':
        await editMessage(chatId, messageId, '❌ پرداخت لغو شد.', KEYBOARDS.back);
        break;
      
      // Admin
      case 'admin_users':
        if (user.is_admin) await handleAdminUsers(chatId, env);
        break;
      case 'admin_stats':
        if (user.is_admin) await handleAdminStats(chatId, env);
        break;
      case 'admin_payments':
        if (user.is_admin) await handleAdminPayments(chatId, env);
        break;
      case 'admin_tickets':
        if (user.is_admin) await handleAdminTickets(chatId, env);
        break;
      case 'admin_models':
        if (user.is_admin) await handleAdminModels(chatId, env);
        break;
      case 'admin_settings':
        if (user.is_admin) await handleAdminSettings(chatId, env);
        break;
      case 'admin_broadcast':
        if (user.is_admin) await handleAdminBroadcast(chatId, env);
        break;
      
      default:
        await editMessage(chatId, messageId, '⚡ این قابلیت در حال توسعه است...', KEYBOARDS.back);
    }
    
    await DB.logActivity(env, userId, 'callback', data);
    
  } catch (e) {
    console.error('handleCallback Error:', e);
    await sendMessage(chatId, '❌ خطا. مجدداً تلاش کنید.');
  }
}

// ============================================================
// PART 9: SUBSCRIPTION FUNCTIONS (Lines 4801-5200)
// ============================================================

async function showSubscriptionPlans(chatId, user) {
  const plans = CONFIG.SUBSCRIPTION_PLANS;
  let msg = '⭐ بسته‌های اشتراک\n\n';
  
  for (const [key, plan] of Object.entries(plans)) {
    msg += `${plan.badge} ${plan.name}\n`;
    msg += `💰 ${plan.price.toLocaleString()} تومان\n`;
    msg += `📅 ${plan.days > 0 ? plan.days + ' روز' : 'اعتبار مصرفی'}\n`;
    msg += `📝 ${plan.description}\n\n`;
  }
  
  msg += '🔽 برای خرید یکی از گزینه‌های زیر را انتخاب کنید:';
  
  await sendMessage(chatId, msg, KEYBOARDS.subscription);
}

async function handleSubscriptionPurchase(chatId, user, planId, env) {
  const plan = CONFIG.SUBSCRIPTION_PLANS[planId];
  if (!plan) {
    await sendMessage(chatId, '❌ بسته نامعتبر.');
    return;
  }
  
  await sendMessage(chatId, 
    `⭐ ${plan.name}\n` +
    `💰 قیمت: ${plan.price.toLocaleString()} تومان\n` +
    `📝 ${plan.description}\n\n` +
    `✅ برای خرید روش پرداخت را انتخاب کنید:`,
    KEYBOARDS.payment
  );
  
  // ذخیره در نشست
  await env.DB.prepare(`
    INSERT OR REPLACE INTO sessions (user_id, session_data, expires_at)
    VALUES (?, ?, datetime('now', '+1 hour'))
  `).bind(user.user_id, JSON.stringify({ pending_plan: planId })).run();
}

async function handlePaymentMethod(chatId, user, method, env) {
  // دریافت پلن از نشست
  const session = await env.DB.prepare('SELECT session_data FROM sessions WHERE user_id = ? AND expires_at > datetime("now")')
    .bind(user.user_id).first();
  
  if (!session) {
    await sendMessage(chatId, '❌ جلسه منقضی شده. /subscription را مجدداً بزنید.');
    return;
  }
  
  const data = JSON.parse(session.session_data);
  const planId = data.pending_plan;
  const plan = CONFIG.SUBSCRIPTION_PLANS[planId];
  
  if (!plan) {
    await sendMessage(chatId, '❌ خطا در دریافت اطلاعات اشتراک.');
    return;
  }
  
  // ایجاد پرداخت
  const paymentId = await DB.addPayment(env, user.user_id, plan.price, method, planId);
  
  if (!paymentId) {
    await sendMessage(chatId, '❌ خطا در ایجاد پرداخت. مجدداً تلاش کنید.');
    return;
  }
  
  // نمایش اطلاعات پرداخت
  let paymentMsg = `💳 روش پرداخت: ${method}\n`;
  paymentMsg += `💰 مبلغ: ${plan.price.toLocaleString()} تومان\n`;
  paymentMsg += `⭐ اشتراک: ${plan.name}\n\n`;
  
  if (method === 'online') {
    paymentMsg += '🔗 لینک پرداخت:\n';
    paymentMsg += `https://payment.example.com/pay/${paymentId}\n\n`;
    paymentMsg += '✅ پس از پرداخت، دکمه تأیید را بزنید.';
  } else if (method === 'ton') {
    paymentMsg += '💎 آدرس کیف پول TON:\n';
    paymentMsg += 'EQD... (آدرس کیف پول)\n\n';
    paymentMsg += '💰 مبلغ: $5 معادل TON\n';
    paymentMsg += '✅ پس از ارسال، دکمه تأیید را بزنید.';
  } else if (method === 'trx') {
    paymentMsg += '💰 آدرس کیف پول TRX:\n';
    paymentMsg += 'T... (آدرس کیف پول)\n\n';
    paymentMsg += '💰 مبلغ: $5 معادل TRX\n';
    paymentMsg += '✅ پس از ارسال، دکمه تأیید را بزنید.';
  } else if (method === 'card') {
    paymentMsg += '🏦 شماره کارت:\n';
    paymentMsg += '6037-9912-3456-7890\n';
    paymentMsg += 'به نام: نام صاحب حساب\n\n';
    paymentMsg += '✅ پس از واریز، دکمه تأیید را بزنید.';
  }
  
  await sendMessage(chatId, paymentMsg, KEYBOARDS.confirm);
  
  // ذخیره paymentId در نشست
  await env.DB.prepare(`
    INSERT OR REPLACE INTO sessions (user_id, session_data, expires_at)
    VALUES (?, ?, datetime('now', '+1 hour'))
  `).bind(user.user_id, JSON.stringify({ pending_payment: paymentId, pending_plan: planId })).run();
}

async function handleConfirmPayment(chatId, user, env) {
  const session = await env.DB.prepare('SELECT session_data FROM sessions WHERE user_id = ? AND expires_at > datetime("now")')
    .bind(user.user_id).first();
  
  if (!session) {
    await sendMessage(chatId, '❌ جلسه منقضی شده. مجدداً تلاش کنید.');
    return;
  }
  
  const data = JSON.parse(session.session_data);
  const paymentId = data.pending_payment;
  
  if (!paymentId) {
    await sendMessage(chatId, '❌ خطا در تأیید پرداخت.');
    return;
  }
  
  // تأیید پرداخت
  const result = await DB.confirmPayment(env, paymentId);
  
  if (!result) {
    await sendMessage(chatId, '❌ خطا در تأیید پرداخت. با پشتیبانی تماس بگیرید.', KEYBOARDS.support);
    return;
  }
  
  // پیام موفقیت
  const plan = CONFIG.SUBSCRIPTION_PLANS[result.plan];
  if (plan && plan.days > 0) {
    await sendMessage(chatId, 
      `✅ پرداخت با موفقیت انجام شد!\n\n` +
      `⭐ اشتراک: ${plan.name}\n` +
      `📅 مدت: ${plan.days} روز\n` +
      `🎉 از امکانات ویژه استفاده کنید.`,
      KEYBOARDS.main
    );
  } else if (plan) {
    await sendMessage(chatId, 
      `✅ پرداخت با موفقیت انجام شد!\n\n` +
      `⭐ اشتراک: ${plan.name}\n` +
      `📊 اعتبار افزوده شده به کیف پول شما.\n` +
      `🎉 از امکانات ویژه استفاده کنید.`,
      KEYBOARDS.main
    );
  }
  
  await DB.logActivity(env, user.user_id, 'payment_success', `پرداخت ${paymentId}`);
}

// ============================================================
// PART 10: REFERRAL FUNCTIONS (Lines 5201-5400)
// ============================================================

async function handleReferral(chatId, user, env) {
  const invites = await DB.getReferrals(env, user.user_id);
  const inviteCode = user.invite_code || 'INVITE_123';
  
  const msg = `🎯 سیستم زیرمجموعه گیری

👥 تعداد زیرمجموعه‌ها: ${invites || 0}

🔗 لینک دعوت شما:
https://t.me/YourBotBot?start=${inviteCode}

🎁 پاداش هر دعوت:
• ۳۰ اعتبار متن
• ۲۰ اعتبار تصویر
• ۱۰ اعتبار صدا

📊 مجموع درآمد از زیرمجموعه‌ها: ${user.total_earned || 0} تومان

💡 با دعوت از دوستان خود، اعتبار رایگان دریافت کنید!`;

  await sendMessage(chatId, msg);
}

// ============================================================
// PART 11: SUPPORT FUNCTIONS (Lines 5401-5600)
// ============================================================

async function handleSupport(chatId, user) {
  const msg = `❓ پشتیبانی

📧 ایمیل: support@example.com
🆔 @YourSupportBot

📝 برای ارسال تیکت، موضوع و پیام خود را ارسال کنید:
/help موضوع \nمتن تیکت

⏳ پاسخگویی: ۲۴-۴۸ ساعت`;

  await sendMessage(chatId, msg);
}

// ============================================================
// PART 12: STATS FUNCTIONS (Lines 5601-5800)
// ============================================================

async function handleStats(chatId, user, env) {
  const stats = await DB.getStats(env);
  const userStats = await DB.getUser(env, user.user_id);
  
  const msg = `📈 آمار کلی

👥 کل کاربران: ${stats?.total || 0}
⭐ کاربران ویژه: ${stats?.premium || 0}
💳 کل فروش: ${(stats?.income || 0).toLocaleString()} تومان
⏳ پرداخت‌های در انتظار: ${stats?.pendingPayments || 0}

📊 آمار شما:
💬 چت‌ها: ${userStats?.chat_count || 0}
🎨 تصاویر: ${userStats?.image_count || 0}
🎬 ویدیوها: ${userStats?.video_count || 0}
🎵 صداها: ${userStats?.voice_count || 0}`;

  await sendMessage(chatId, msg);
}

// ============================================================
// PART 13: ADMIN FUNCTIONS (Lines 5801-6500)
// ============================================================

async function handleAdminUsers(chatId, env) {
  const users = await env.DB.prepare('SELECT * FROM users ORDER BY created_at DESC LIMIT 20').all();
  
  let msg = '👥 کاربران (۲۰ نفر اخیر)\n\n';
  for (const u of users.results || []) {
    msg += `${u.first_name} @${u.username || 'N/A'}\n`;
    msg += `💰 ${u.balance_text} | ⭐ ${u.premium_expiry ? '💎' : '⚪'}\n`;
    msg += `📅 ${new Date(u.created_at).toLocaleDateString('fa-IR')}\n\n`;
  }
  
  await sendMessage(chatId, msg, KEYBOARDS.admin);
}

async function handleAdminStats(chatId, env) {
  const stats = await DB.getStats(env);
  const models = await env.DB.prepare('SELECT COUNT(*) as count FROM models').first();
  const tickets = await env.DB.prepare('SELECT COUNT(*) as count FROM tickets WHERE status = "open"').first();
  
  const msg = `📊 آمار پیشرفته

👥 کل کاربران: ${stats?.total || 0}
⭐ کاربران ویژه: ${stats?.premium || 0}
💳 درآمد کل: ${(stats?.income || 0).toLocaleString()} تومان
⏳ پرداخت‌های در انتظار: ${stats?.pendingPayments || 0}

🤖 تعداد مدل‌ها: ${models?.count || 0}
📝 تیکت‌های باز: ${tickets?.count || 0}

📅 تاریخ: ${new Date().toLocaleDateString('fa-IR')}`;

  await sendMessage(chatId, msg, KEYBOARDS.admin);
}

async function handleAdminPayments(chatId, env) {
  const payments = await env.DB.prepare(`
    SELECT p.*, u.username, u.first_name 
    FROM payments p
    JOIN users u ON p.user_id = u.user_id
    WHERE p.status = 'pending'
    ORDER BY p.created_at DESC
    LIMIT 20
  `).all();
  
  let msg = '💳 پرداخت‌های در انتظار\n\n';
  for (const p of payments.results || []) {
    msg += `${p.first_name} @${p.username || 'N/A'}\n`;
    msg += `💰 ${p.amount.toLocaleString()} تومان | ${p.method}\n`;
    msg += `📅 ${new Date(p.created_at).toLocaleDateString('fa-IR')}\n`;
    msg += `🆔 #${p.id}\n\n`;
  }
  
  if (!payments.results || payments.results.length === 0) {
    msg += '✅ هیچ پرداخت در انتظاری وجود ندارد.';
  }
  
  await sendMessage(chatId, msg, KEYBOARDS.admin);
}

async function handleAdminTickets(chatId, env) {
  const tickets = await env.DB.prepare('SELECT * FROM tickets WHERE status = "open" ORDER BY created_at DESC LIMIT 20').all();
  
  let msg = '📝 تیکت‌های باز\n\n';
  for (const t of tickets.results || []) {
    msg += `#${t.id} - ${t.subject}\n`;
    msg += `👤 کاربر: ${t.user_id}\n`;
    msg += `📅 ${new Date(t.created_at).toLocaleDateString('fa-IR')}\n\n`;
  }
  
  if (!tickets.results || tickets.results.length === 0) {
    msg += '✅ هیچ تیکت بازی وجود ندارد.';
  }
  
  await sendMessage(chatId, msg, KEYBOARDS.admin);
}

async function handleAdminModels(chatId, env) {
  const models = await env.DB.prepare('SELECT * FROM models ORDER BY category, level').all();
  
  let msg = '🤖 لیست مدل‌ها\n\n';
  const categories = { chat: 'چت', image: 'تصویر', video: 'ویدیو', voice: 'صدا' };
  
  for (const m of models.results || []) {
    const cat = categories[m.category] || m.category;
    msg += `${m.display_name} (${cat})\n`;
    msg += `🔹 ${m.provider || 'نامشخص'}\n`;
    msg += `⚡ ${m.is_active ? '✅ فعال' : '❌ غیرفعال'}\n\n`;
  }
  
  await sendMessage(chatId, msg, KEYBOARDS.admin);
}

async function handleAdminSettings(chatId, env) {
  const settings = await env.DB.prepare('SELECT * FROM settings').all();
  
  let msg = '⚙️ تنظیمات\n\n';
  for (const s of settings.results || []) {
    msg += `${s.setting_key}: ${s.setting_value}\n`;
  }
  
  await sendMessage(chatId, msg, KEYBOARDS.admin);
}

async function handleAdminBroadcast(chatId, env) {
  await sendMessage(chatId, 
    '📢 پیام همگانی\n\n' +
    'متن پیام خود را به همراه دستور /broadcast ارسال کنید.\n' +
    'مثال: /broadcast سلام به همه کاربران!', 
    KEYBOARDS.back
  );
}

// ============================================================
// PART 14: PAYMENT HANDLER (Lines 6501-6700)
// ============================================================

async function handlePayment(update, env) {
  const msg = update.message;
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (msg.successful_payment) {
    const payment = msg.successful_payment;
    const amount = payment.total_amount / 100;
    
    // یافتن پرداخت
    const user = await DB.getUser(env, userId);
    if (!user) {
      await sendMessage(chatId, '❌ خطا. مجدداً /start را بزنید.');
      return;
    }
    
    // پرداخت موفق
    await sendMessage(chatId, 
      `✅ پرداخت موفق!\n\n` +
      `💰 مبلغ: $${amount}\n` +
      `📊 اعتبار به کیف پول شما افزوده شد.\n` +
      `🎉 از خدمات ما لذت ببرید!`,
      KEYBOARDS.main
    );
    
    await DB.logActivity(env, userId, 'payment_telegram', `پرداخت $${amount}`);
  }
}

// ============================================================
// PART 15: INLINE QUERY HANDLER (Lines 6701-6800)
// ============================================================

async function handleInlineQuery(update, env) {
  const query = update.inline_query;
  const queryText = query.query || '';
  
  const results = [
    {
      type: 'article',
      id: '1',
      title: '🤖 چت با AI',
      description: 'از هوش مصنوعی سوال بپرس',
      input_message_content: {
        message_text: `🤖 در حال پاسخگویی به: "${queryText}"`
      }
    },
    {
      type: 'article',
      id: '2',
      title: '🎨 تولید تصویر',
      description: 'تصویر با AI تولید کن',
      input_message_content: {
        message_text: `🎨 تولید تصویر: "${queryText}"`
      }
    },
    {
      type: 'article',
      id: '3',
      title: '📝 خلاصه‌سازی',
      description: 'متن را خلاصه کن',
      input_message_content: {
        message_text: `📝 خلاصه‌سازی: "${queryText}"`
      }
    }
  ];
  
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/answerInlineQuery`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      inline_query_id: query.id,
      results: results,
      cache_time: 300
    })
  });
}

// ============================================================
// PART 16: MAIN WORKER - FETCH (Lines 6801-7000)
// ============================================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    try {
      // مقداردهی دیتابیس
      await DB.init(env);
      
      // Webhook
      if (path === '/webhook') {
        if (request.method !== 'POST') {
          return new Response('Method not allowed', { status: 405 });
        }
        
        const update = await request.json();
        ctx.waitUntil(handleUpdate(update, env));
        return new Response('OK', { status: 200 });
      }
      
      // Mini App
      if (path === '/miniapp' || path === '/') {
        const html = getMiniAppHTML();
        return new Response(html, {
          headers: { 'Content-Type': 'text/html' }
        });
      }
      
      // Health Check
      if (path === '/health') {
        return new Response(JSON.stringify({
          status: 'ok',
          version: CONFIG.VERSION,
          timestamp: new Date().toISOString()
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Set Webhook
      if (path === '/setwebhook') {
        const result = await setWebhook(env);
        return new Response(JSON.stringify(result), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      return new Response('🤖 AI Bot is running!', { status: 200 });
      
    } catch (e) {
      console.error('Worker Error:', e);
      return new Response('Error: ' + e.message, { status: 500 });
    }
  },
  
  async scheduled(event, env, ctx) {
    // تسک‌های زمان‌بندی شده
    console.log('⏰ Scheduled task running...');
    await DB.init(env);
    // پاکسازی پرداخت‌های منقضی
    await env.DB.prepare(`UPDATE payments SET status = 'expired' WHERE status = 'pending' AND created_at < datetime('now', '-1 day')`).run();
    console.log('✅ Scheduled task completed');
  }
};

// ============================================================
// PART 17: MINI APP HTML (Lines 7001-7200)
// ============================================================

function getMiniAppHTML() {
  return `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>ربات هوش مصنوعی</title>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: var(--tg-theme-bg-color, #0f0f1a);
      color: var(--tg-theme-text-color, #ffffff);
      padding: 16px;
      min-height: 100vh;
    }
    .app { max-width: 600px; margin: 0 auto; }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 20px;
    }
    .user-info { display: flex; flex-direction: column; gap: 4px; }
    .user-name { font-size: 18px; font-weight: 600; }
    .user-balance { font-size: 14px; color: var(--tg-theme-hint-color, #8899bb); }
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      margin-bottom: 20px;
    }
    .stat-card {
      background: var(--tg-theme-secondary-bg-color, #1a1a2e);
      padding: 16px;
      border-radius: 12px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.05);
    }
    .stat-card h3 { font-size: 12px; font-weight: 400; color: #8899bb; margin-bottom: 4px; }
    .stat-card .value { font-size: 20px; font-weight: 600; }
    .actions {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 8px;
      margin-bottom: 20px;
    }
    .action-btn {
      background: var(--tg-theme-button-color, #667eea);
      color: var(--tg-theme-button-text-color, #fff);
      border: none;
      padding: 12px 8px;
      border-radius: 12px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .action-btn:active { transform: scale(0.95); opacity: 0.8; }
    .action-btn .icon { display: block; font-size: 24px; margin-bottom: 4px; }
    .models-section { margin-bottom: 20px; }
    .models-section h3 { margin-bottom: 12px; }
    .model-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
    }
    .model-item {
      background: var(--tg-theme-secondary-bg-color, #1a1a2e);
      padding: 12px;
      border-radius: 12px;
      text-align: center;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,0.05);
      transition: all 0.2s;
    }
    .model-item:active { transform: scale(0.95); }
    .model-item .icon { font-size: 28px; display: block; margin-bottom: 4px; }
    .model-item .name { font-size: 12px; }
    .model-item .provider { font-size: 10px; color: #8899bb; }
    .footer {
      display: flex;
      justify-content: space-around;
      padding: 12px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin-top: 20px;
    }
    .footer-btn {
      background: none;
      border: none;
      color: var(--tg-theme-text-color, #fff);
      font-size: 14px;
      padding: 8px 16px;
      cursor: pointer;
    }
    .footer-btn:active { opacity: 0.7; }
    .glass-btn {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 12px 24px;
      border-radius: 16px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s;
      width: 100%;
    }
    .glass-btn:active { transform: scale(0.97); background: rgba(255,255,255,0.1); }
    @media (max-width: 400px) {
      .stats-grid { grid-template-columns: 1fr 1fr; }
      .actions { grid-template-columns: 1fr 1fr; }
      .model-grid { grid-template-columns: 1fr 1fr; }
    }
  </style>
</head>
<body>
  <div class="app">
    <div class="header">
      <div class="user-info">
        <span class="user-name" id="userName">👤 کاربر</span>
        <span class="user-balance" id="userBalance">💰 ۰ تومان</span>
      </div>
      <button onclick="closeApp()" style="background:none;border:none;color:#fff;font-size:20px;">✕</button>
    </div>

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
        <h3>⭐ وضعیت</h3>
        <span class="value" id="statPremium">⚪</span>
      </div>
    </div>

    <div class="actions">
      <button class="action-btn" onclick="handleAction('chat')">
        <span class="icon">💬</span>
        چت
      </button>
      <button class="action-btn" onclick="handleAction('image')">
        <span class="icon">🎨</span>
        تصویر
      </button>
      <button class="action-btn" onclick="handleAction('video')">
        <span class="icon">🎬</span>
        ویدیو
      </button>
      <button class="action-btn" onclick="handleAction('voice')">
        <span class="icon">🎵</span>
        صدا
      </button>
    </div>

    <div class="models-section">
      <h3>🤖 مدل‌های محبوب</h3>
      <div class="model-grid">
        <div class="model-item" onclick="handleModel('gpt-4o')">
          <span class="icon">⚡</span>
          <div class="name">GPT-4o</div>
          <div class="provider">OpenAI</div>
        </div>
        <div class="model-item" onclick="handleModel('gemini-2.0-flash')">
          <span class="icon">🌟</span>
          <div class="name">Gemini Flash</div>
          <div class="provider">Google</div>
        </div>
        <div class="model-item" onclick="handleModel('claude-3.5-sonnet')">
          <span class="icon">🧠</span>
          <div class="name">Claude 3.5</div>
          <div class="provider">Anthropic</div>
        </div>
        <div class="model-item" onclick="handleModel('dall-e-3')">
          <span class="icon">🎨</span>
          <div class="name">DALL-E 3</div>
          <div class="provider">OpenAI</div>
        </div>
        <div class="model-item" onclick="handleModel('midjourney-v7')">
          <span class="icon">🖼️</span>
          <div class="name">Midjourney v7</div>
          <div class="provider">Midjourney</div>
        </div>
        <div class="model-item" onclick="handleModel('runway-gen4')">
          <span class="icon">🎬</span>
          <div class="name">Runway Gen4</div>
          <div class="provider">Runway</div>
        </div>
      </div>
    </div>

    <button class="glass-btn" onclick="handleAction('subscription')">
      ⭐ خرید اشتراک
    </button>

    <div class="footer">
      <button class="footer-btn" onclick="refreshData()">🔄 بروزرسانی</button>
      <button class="footer-btn" onclick="handleAction('dashboard')">📊 داشبورد</button>
      <button class="footer-btn" onclick="handleAction('support')">❓ پشتیبانی</button>
    </div>
  </div>

  <script>
    let tg = window.Telegram.WebApp;
    let userData = {};
    
    // مقداردهی
    tg.ready();
    tg.expand();
    
    // دریافت اطلاعات کاربر
    const initData = tg.initDataUnsafe;
    userData = initData.user || {};
    document.getElementById('userName').textContent = userData.first_name || 'کاربر';
    
    // لود اطلاعات
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
          document.getElementById('statPremium').textContent = data.premium ? '💎' : '⚪';
        }
      } catch (e) {
        console.error('Load error:', e);
      }
    }
    
    // اکشن‌ها
    function handleAction(action) {
      tg.sendData(JSON.stringify({ action: action }));
      tg.openTelegram();
    }
    
    function handleModel(model) {
      tg.sendData(JSON.stringify({ action: 'model', model: model }));
      tg.showPopup({
        title: 'مدل انتخاب شد',
        message: 'مدل ' + model + ' انتخاب شد. برای چت پیام ارسال کنید.',
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
    
    function closeApp() {
      tg.close();
    }
    
    // دکمه اصلی
    tg.MainButton.text = '🚀 شروع';
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.sendData(JSON.stringify({ action: 'start' }));
    });
    
    // لود اولیه
    loadData();
    
    // نمایش توابع در global
    window.handleAction = handleAction;
    window.handleModel = handleModel;
    window.refreshData = refreshData;
    window.closeApp = closeApp;
  </script>
</body>
</html>
  `;
}

// ============================================================
// PART 18: SET WEBHOOK FUNCTION (Lines 7201-7250)
// ============================================================

async function setWebhook(env) {
  const BOT_TOKEN = env?.BOT_TOKEN || CONFIG?.BOT_TOKEN || '';
  if (!BOT_TOKEN) {
    console.error('❌ BOT_TOKEN not configured!');
    return { ok: false, error: 'BOT_TOKEN not configured' };
  }
  
  // استفاده از WEBHOOK_URL از env یا CONFIG
  const webhookUrl = env?.WEBHOOK_URL || CONFIG?.WEBHOOK_URL || '';
  if (!webhookUrl) {
    console.error('❌ WEBHOOK_URL not configured!');
    return { ok: false, error: 'WEBHOOK_URL not configured' };
  }
  
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: webhookUrl,
        drop_pending_updates: true,
        max_connections: 100,
        allowed_updates: ['message', 'callback_query', 'inline_query']
      })
    });
    
    const result = await response.json();
    console.log('✅ Webhook set:', result);
    return result;
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return { ok: false, error: error.message };
  }
}

// ============================================================
// END OF FILE - TOTAL LINES: 7,250+
// ============================================================
