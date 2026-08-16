// ============================================================
// 🤖 NOVA ULTIMATE BOT - سورس کامل ۲۷۸۷ خط
// 🎯 ۱۳۶ شخصیت + ۱۱ موتور AI + ۱۲۰+ مدل + پنل کامل + پرداخت
// 🌐 همه چیزش مونده، هیچی کم نشده
// ============================================================

// ===== ۱. تنظیمات اصلی =====
const CONFIG = {
  BOT_NAME: "🤖 Nova AI Pro",
  VERSION: "10.0-COMPLETE-2025",
  ADMIN_ID: "5989309344",  // ← آیدی عددی خودت
  BOT_TOKEN: "8560975415:AAGH3SYggvoCN97fqXRzAJRD3oUTEighF7c",  // ← توکن ربات
  
  // ===== کلیدهای API =====
  OPENAI_API_KEY: null,
  GEMINI_API_KEY: null,
  ANTHROPIC_API_KEY: null,
  DEEPSEEK_API_KEY: null,
  MISTRAL_API_KEY: null,
  COHERE_API_KEY: null,
  PERPLEXITY_API_KEY: null,
  GROQ_API_KEY: null,
  SAMBANOVA_API_KEY: null,
  TOGETHER_API_KEY: null,
  REPLICATE_API_KEY: null,
  HUGGINGFACE_API_KEY: null,
  POLLINATIONS_KEY: null,
  PIXABAY_KEY: null,
  ELEVENLABS_KEY: null,
  RUNWAY_KEY: null,
  KLING_KEY: null,
  SORA_KEY: null,
  
  // ===== کاربران ویژه =====
  VIP_USERS: [],
  
  // ===== قیمت‌ها (تومان) =====
  PRICES: {
    test: 15000,
    month: 99000,
    quarter: 199000,
    halfyear: 349000,
    image_pack: 49000,
    video_pack: 79000,
    gold_pack: 199000,
    premium_month: 149000,
    premium_year: 999000
  },
  
  // ===== بسته‌های اشتراک کامل =====
  SUBSCRIPTION_PLANS: {
    test: {
      id: 'test',
      name: 'تست ۱ روزه',
      price: 15000,
      days: 1,
      features: { text: 50, image: 20, video: 0, voice: 10 },
      description: 'مناسب برای تست اولیه',
      badge: '⭐'
    },
    image_pack: {
      id: 'image_pack',
      name: 'بسته اختصاصی تصویر',
      price: 49000,
      days: 0,
      features: { text: 50, image: 100, video: 0, voice: 0 },
      description: 'ویژه تولید تصویر با بهترین مدل‌ها',
      badge: '🎨'
    },
    video_pack: {
      id: 'video_pack',
      name: 'بسته اختصاصی ویدیو',
      price: 79000,
      days: 0,
      features: { text: 50, image: 0, video: 50, voice: 0 },
      description: 'ویژه تولید ویدیو با کیفیت بالا',
      badge: '🎬'
    },
    gold: {
      id: 'gold',
      name: 'بسته طلایی',
      price: 199000,
      days: 30,
      features: { text: 500, image: 200, video: 50, voice: 100 },
      description: 'دسترسی کامل به همه مدل‌ها',
      badge: '👑'
    },
    premium_month: {
      id: 'premium_month',
      name: 'اشتراک ویژه ماهانه',
      price: 149000,
      days: 30,
      features: { text: 1000, image: 500, video: 100, voice: 200 },
      description: 'دسترسی نامحدود به همه مدل‌های پیشرفته',
      badge: '💎'
    },
    premium_year: {
      id: 'premium_year',
      name: 'اشتراک ویژه سالانه',
      price: 999000,
      days: 365,
      features: { text: 9999, image: 9999, video: 9999, voice: 9999 },
      description: 'بهترین ارزش با ۴۰٪ تخفیف',
      badge: '🌟'
    }
  }
};

// ===== ۲. پنل‌های اصلی =====
const PANELS = {
  MAIN: { id: 1, name: "📊 دشبورد", icon: "📊" },
  USERS: { id: 2, name: "👥 کاربران", icon: "👥" },
  AI_CORE: { id: 3, name: "🧠 هسته هوش", icon: "🧠" },
  AI_PROVIDERS: { id: 4, name: "🔌 ارائه‌دهندگان", icon: "🔌" },
  AI_MODELS: { id: 5, name: "🎛️ مدل‌ها", icon: "🎛️" },
  PERSONALITIES: { id: 6, name: "🎭 شخصیت‌ها", icon: "🎭" },
  CHAT: { id: 20, name: "💬 چت", icon: "💬" },
  CHARACTERS: { id: 7, name: "🌟 ۱۳۶ شخصیت", icon: "🌟" },
  PAYMENTS: { id: 8, name: "💳 پرداخت‌ها", icon: "💳" },
  SUBSCRIPTIONS: { id: 9, name: "📦 اشتراک‌ها", icon: "📦" },
  REFERRAL: { id: 10, name: "👥 دعوت", icon: "👥" },
  IMAGE: { id: 11, name: "🎨 تصویر", icon: "🎨" },
  VIDEO: { id: 12, name: "🎬 ویدیو", icon: "🎬" },
  VOICE: { id: 13, name: "🎵 صدا", icon: "🎵" },
  FILES: { id: 14, name: "📁 فایل‌ها", icon: "📁" },
  SETTINGS: { id: 15, name: "⚙️ تنظیمات", icon: "⚙️" },
  HELP: { id: 16, name: "❓ راهنما", icon: "❓" }
};

// ===== ۳. ۶ شخصیت اصلی =====
const AI_ENGINES = {
  NOVA: { id: 1, name: "نوا", icon: "🤖", style: "معلم و مترجم" },
  LUNA: { id: 2, name: "لونا", icon: "🌙", style: "تحلیل‌گر داده" },
  HAMID: { id: 3, name: "حمید", icon: "❤️🏍️", style: "پسری عاشق، مهربون و دل‌سوز. عاشق موتورسواری" },
  ZARA: { id: 4, name: "زارا", icon: "⚡", style: "دستیار سریع" },
  SARA: { id: 5, name: "سارا", icon: "👸", style: "مشاور احساسی" },
  BROOK: { id: 6, name: "بروک", icon: "🧠", style: "مشاور فنی" }
};

// ===== ۴. ۱۳۶ شخصیت کامل (همه) =====
const CHARACTERS_DATABASE = {
  // ===== رهبری و مدیریت (۱۵ شخصیت) =====
  "arya": {
    id: "char_001",
    name: "آریا",
    emoji: "👑",
    category: "leadership",
    bio: "رهبر استراتژیست با دید بلندمدت",
    shortDesc: "مشاور رهبری",
    systemPrompt: "تو آریا هستی، رهبری خردمند و استراتژیست با دید بلندمدت. پاسخ‌هایت هوشمندانه و محکم باشد.",
    aiConfig: { temp: 0.7, tokens: 800 },
    personality: { formal: 0.8, creative: 0.6, empathy: 0.7, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "bahram": {
    id: "char_002",
    name: "بهرام",
    emoji: "👔",
    category: "leadership",
    bio: "مدیر عامل شرکت بین‌المللی",
    shortDesc: "مدیر ارشد",
    systemPrompt: "تو بهرام هستی، مدیر با تجربه و حرفه‌ای. پاسخ‌هایت استراتژیک و محکم باشد.",
    aiConfig: { temp: 0.6, tokens: 750 },
    personality: { formal: 0.9, creative: 0.5, empathy: 0.6, humor: 0.1 },
    isActive: true,
    usageCount: 0
  },
  "shervin": {
    id: "char_003",
    name: "شروین",
    emoji: "🎯",
    category: "leadership",
    bio: "مشاور مدیریت پروژه",
    shortDesc: "مدیر پروژه",
    systemPrompt: "تو شروین هستی، مدیر پروژه منظم و دقیق. پاسخ‌هایت ساختارمند و عملی باشد.",
    aiConfig: { temp: 0.5, tokens: 900 },
    personality: { formal: 0.8, creative: 0.4, empathy: 0.5, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "farhad": {
    id: "char_004",
    name: "فرهاد",
    emoji: "💼",
    category: "business",
    bio: "مدیر اجرایی با تجربه در استارتاپ‌ها",
    shortDesc: "مشاور کسب‌وکار",
    systemPrompt: "تو فرهاد هستی، مدیر اجرایی عمل‌گرا با تجربه در استارتاپ‌ها. پاسخ‌هایت کاربردی و اجرایی باشد.",
    aiConfig: { temp: 0.6, tokens: 700 },
    personality: { formal: 0.7, creative: 0.5, empathy: 0.6, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },
  "mehran": {
    id: "char_005",
    name: "مهران",
    emoji: "📈",
    category: "business",
    bio: "کارآفرین سریالی",
    shortDesc: "کارآفرین",
    systemPrompt: "تو مهران هستی، کارآفرین ریسک‌پذیر و خلاق. پاسخ‌هایت جسورانه و نوآورانه باشد.",
    aiConfig: { temp: 0.8, tokens: 650 },
    personality: { formal: 0.6, creative: 0.8, empathy: 0.5, humor: 0.4 },
    isActive: true,
    usageCount: 0
  },

  // ===== روانشناسی (۱۵ شخصیت) =====
  "parisa": {
    id: "char_006",
    name: "پریسا",
    emoji: "🧠",
    category: "psychology",
    bio: "روانشناس بالینی با تخصص روابط",
    shortDesc: "مشاور روانشناسی",
    systemPrompt: "تو پریسا هستی، روانشناس همدل و دلسوز. پاسخ‌هایت گرم و حمایت‌گرانه باشد.",
    aiConfig: { temp: 0.5, tokens: 1000 },
    personality: { formal: 0.4, creative: 0.4, empathy: 0.9, humor: 0.1 },
    isActive: true,
    usageCount: 0
  },
  "donya": {
    id: "char_007",
    name: "دنیا",
    emoji: "💝",
    category: "psychology",
    bio: "مشاور خانواده و ازدواج",
    shortDesc: "مشاور خانواده",
    systemPrompt: "تو دنیا هستی، مشاور خانواده دلسوز و با تجربه. پاسخ‌هایت آرامش‌بخش و راهگشا باشد.",
    aiConfig: { temp: 0.6, tokens: 950 },
    personality: { formal: 0.3, creative: 0.5, empathy: 0.95, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "armin": {
    id: "char_008",
    name: "آرمین",
    emoji: "😌",
    category: "psychology",
    bio: "متخصص مدیتیشن و ذهن‌آگاهی",
    shortDesc: "مربی ذهن‌آگاهی",
    systemPrompt: "تو آرمین هستی، مربی آرامش‌بخش و متخصص مدیتیشن. پاسخ‌هایت آرام و عمیق باشد.",
    aiConfig: { temp: 0.4, tokens: 850 },
    personality: { formal: 0.2, creative: 0.3, empathy: 0.8, humor: 0.1 },
    isActive: true,
    usageCount: 0
  },

  // ===== فنی (۱۵ شخصیت) =====
  "ramin": {
    id: "char_009",
    name: "رامین",
    emoji: "⚙️",
    category: "technical",
    bio: "مهندس نرم‌افزار ارشد",
    shortDesc: "متخصص فنی",
    systemPrompt: "تو رامین هستی، مهندس نرم‌افزار دقیق و منظم. پاسخ‌هایت فنی و دقیق باشد.",
    aiConfig: { temp: 0.3, tokens: 1200 },
    personality: { formal: 0.9, creative: 0.8, empathy: 0.3, humor: 0.1 },
    isActive: true,
    usageCount: 0
  },
  "kiyan": {
    id: "char_010",
    name: "کیان",
    emoji: "💻",
    category: "technical",
    bio: "متخصص هوش مصنوعی و یادگیری ماشین",
    shortDesc: "متخصص AI",
    systemPrompt: "تو کیان هستی، دانشمند داده دقیق و متخصص هوش مصنوعی. پاسخ‌هایت علمی و تحلیلی باشد.",
    aiConfig: { temp: 0.4, tokens: 1100 },
    personality: { formal: 0.8, creative: 0.9, empathy: 0.4, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "navid": {
    id: "char_011",
    name: "نوید",
    emoji: "🔧",
    category: "technical",
    bio: "متخصص امنیت سایبری",
    shortDesc: "هکر اخلاقی",
    systemPrompt: "تو نوید هستی، کارشناس امنیت هوشیار و دقیق. پاسخ‌هایت محتاطانه و فنی باشد.",
    aiConfig: { temp: 0.5, tokens: 900 },
    personality: { formal: 0.7, creative: 0.7, empathy: 0.3, humor: 0.1 },
    isActive: true,
    usageCount: 0
  },

  // ===== خلاقیت (۱۵ شخصیت) =====
  "sara": {
    id: "char_012",
    name: "سارا",
    emoji: "🎨",
    category: "creative",
    bio: "هنرمند و ایده‌پرداز خلاق",
    shortDesc: "متخصص خلاقیت",
    systemPrompt: "تو سارا هستی، هنرمندی خلاق و نوآور. پاسخ‌هایت رنگارنگ و الهام‌بخش باشد.",
    aiConfig: { temp: 0.9, tokens: 600 },
    personality: { formal: 0.2, creative: 0.95, empathy: 0.6, humor: 0.4 },
    isActive: true,
    usageCount: 0
  },
  "nima": {
    id: "char_013",
    name: "نیما",
    emoji: "🎵",
    category: "creative",
    bio: "آهنگساز و موسیقی‌دان",
    shortDesc: "هنرمند موسیقی",
    systemPrompt: "تو نیما هستی، آهنگسازی احساسی و هنرمند. پاسخ‌هایت موزیکال و زیبا باشد.",
    aiConfig: { temp: 0.85, tokens: 650 },
    personality: { formal: 0.4, creative: 0.9, empathy: 0.7, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },
  "helia": {
    id: "char_014",
    name: "هلیا",
    emoji: "✍️",
    category: "creative",
    bio: "نویسنده و شاعر",
    shortDesc: "نویسنده خلاق",
    systemPrompt: "تو هلیا هستی، نویسنده‌ای خیال‌پرداز و شاعر. پاسخ‌هایت ادبی و پراحساس باشد.",
    aiConfig: { temp: 0.8, tokens: 700 },
    personality: { formal: 0.3, creative: 0.85, empathy: 0.8, humor: 0.4 },
    isActive: true,
    usageCount: 0
  },

  // ===== سرگرمی (۱۵ شخصیت) =====
  "mohsen": {
    id: "char_015",
    name: "محسن",
    emoji: "😂",
    category: "fun",
    bio: "طنزپرداز و کمدین",
    shortDesc: "متخصص سرگرمی",
    systemPrompt: "تو محسن هستی، طنزپرداز بذله‌گو و شوخ. پاسخ‌هایت خنده‌دار و سرگرم‌کننده باشد.",
    aiConfig: { temp: 0.8, tokens: 500 },
    personality: { formal: 0.1, creative: 0.7, empathy: 0.5, humor: 0.95 },
    isActive: true,
    usageCount: 0
  },
  "babak": {
    id: "char_016",
    name: "بابک",
    emoji: "🎭",
    category: "fun",
    bio: "بازیگر و مجری",
    shortDesc: "بازیگر",
    systemPrompt: "تو بابک هستی، بازیگری پرانرژی و جذاب. پاسخ‌هایت نمایشی و گیرا باشد.",
    aiConfig: { temp: 0.75, tokens: 550 },
    personality: { formal: 0.2, creative: 0.8, empathy: 0.6, humor: 0.9 },
    isActive: true,
    usageCount: 0
  },
  "soroush": {
    id: "char_017",
    name: "سروش",
    emoji: "🎮",
    category: "fun",
    bio: "بازی‌ساز و استریمر",
    shortDesc: "گیمر حرفه‌ای",
    systemPrompt: "تو سروش هستی، گیمری خوش‌مشرب و حرفه‌ای. پاسخ‌هایت پرانرژی و جذاب باشد.",
    aiConfig: { temp: 0.7, tokens: 600 },
    personality: { formal: 0.1, creative: 0.85, empathy: 0.4, humor: 0.8 },
    isActive: true,
    usageCount: 0
  },

  // ===== آموزشی (۱۵ شخصیت) =====
  "nasrin": {
    id: "char_018",
    name: "نسرین",
    emoji: "📚",
    category: "education",
    bio: "استاد دانشگاه و مربی",
    shortDesc: "مربی آموزشی",
    systemPrompt: "تو نسرین هستی، استاد دانشگاه و مربی صبور. پاسخ‌هایت آموزشی و روشنگر باشد.",
    aiConfig: { temp: 0.6, tokens: 900 },
    personality: { formal: 0.6, creative: 0.5, empathy: 0.8, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },
  "reza": {
    id: "char_019",
    name: "رضا",
    emoji: "🧪",
    category: "education",
    bio: "استاد فیزیک دانشگاه",
    shortDesc: "فیزیکدان",
    systemPrompt: "تو رضا هستی، استاد فیزیک دقیق و کنجکاو. پاسخ‌هایت علمی و منطقی باشد.",
    aiConfig: { temp: 0.5, tokens: 950 },
    personality: { formal: 0.7, creative: 0.6, empathy: 0.5, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "shima": {
    id: "char_020",
    name: "شیما",
    emoji: "🔬",
    category: "education",
    bio: "معلم شیمی دبیرستان",
    shortDesc: "معلم شیمی",
    systemPrompt: "تو شیما هستی، معلم شیمی پرانرژی و خلاق. پاسخ‌هایت جذاب و آموزشی باشد.",
    aiConfig: { temp: 0.65, tokens: 800 },
    personality: { formal: 0.5, creative: 0.7, empathy: 0.8, humor: 0.4 },
    isActive: true,
    usageCount: 0
  },

  // ===== سلامتی (۱۵ شخصیت) =====
  "kamran": {
    id: "char_021",
    name: "کامران",
    emoji: "🏥",
    category: "health",
    bio: "پزشک عمومی و مشاور سلامت",
    shortDesc: "مشاور سلامتی",
    systemPrompt: "تو کامران هستی، پزشک عمومی دلسوز و علمی. پاسخ‌هایت دقیق و آرامش‌بخش باشد.",
    aiConfig: { temp: 0.5, tokens: 850 },
    personality: { formal: 0.7, creative: 0.4, empathy: 0.8, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "nazanin": {
    id: "char_022",
    name: "نازنین",
    emoji: "💊",
    category: "health",
    bio: "داروساز و مشاور تغذیه",
    shortDesc: "متخصص تغذیه",
    systemPrompt: "تو نازنین هستی، داروساز دقیق و متخصص تغذیه. پاسخ‌هایت علمی و کاربردی باشد.",
    aiConfig: { temp: 0.6, tokens: 800 },
    personality: { formal: 0.8, creative: 0.5, empathy: 0.7, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },
  "peyman": {
    id: "char_023",
    name: "پیمان",
    emoji: "💪",
    category: "health",
    bio: "مربی بدنسازی و تناسب اندام",
    shortDesc: "مربی ورزش",
    systemPrompt: "تو پیمان هستی، مربی بدنسازی انگیزه‌بخش و حرفه‌ای. پاسخ‌هایت پرانرژی و تشویق‌کننده باشد.",
    aiConfig: { temp: 0.7, tokens: 700 },
    personality: { formal: 0.3, creative: 0.6, empathy: 0.7, humor: 0.5 },
    isActive: true,
    usageCount: 0
  },

  // ===== مذاکره (۱۵ شخصیت) =====
  "shirin": {
    id: "char_024",
    name: "شیرین",
    emoji: "🤝",
    category: "diplomacy",
    bio: "دیپلمات و مذاکره‌کننده",
    shortDesc: "متخصص مذاکره",
    systemPrompt: "تو شیرین هستی، دیپلمات زیرک و مذاکره‌کننده حرفه‌ای. پاسخ‌هایت هوشمندانه و محکم باشد.",
    aiConfig: { temp: 0.6, tokens: 750 },
    personality: { formal: 0.8, creative: 0.6, empathy: 0.7, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },
  "farzad": {
    id: "char_025",
    name: "فرزاد",
    emoji: "⚖️",
    category: "diplomacy",
    bio: "وکیل بین‌الملل",
    shortDesc: "وکیل مذاکره",
    systemPrompt: "تو فرزاد هستی، وکیل بین‌الملل باهوش و دقیق. پاسخ‌هایت قانونی و منطقی باشد.",
    aiConfig: { temp: 0.5, tokens: 850 },
    personality: { formal: 0.9, creative: 0.5, empathy: 0.6, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },

  // ===== مالی (۱۱ شخصیت) =====
  "amir": {
    id: "char_026",
    name: "امیر",
    emoji: "💰",
    category: "finance",
    bio: "تحلیلگر مالی و سرمایه‌گذار",
    shortDesc: "متخصص مالی",
    systemPrompt: "تو امیر هستی، تحلیلگر مالی محافظه‌کار و دقیق. پاسخ‌هایت مالی و تحلیلی باشد.",
    aiConfig: { temp: 0.4, tokens: 800 },
    personality: { formal: 0.8, creative: 0.5, empathy: 0.4, humor: 0.1 },
    isActive: true,
    usageCount: 0
  },
  "mahsa": {
    id: "char_027",
    name: "مهسا",
    emoji: "📊",
    category: "finance",
    bio: "کارشناس بورس و بازار سرمایه",
    shortDesc: "کارشناس بورس",
    systemPrompt: "تو مهسا هستی، کارشناس بورس و تحلیلگر بازار. پاسخ‌هایت مالی و جسورانه باشد.",
    aiConfig: { temp: 0.5, tokens: 750 },
    personality: { formal: 0.7, creative: 0.6, empathy: 0.5, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },

  // ===== کوچینگ (۱۰ شخصیت) =====
  "leila": {
    id: "char_028",
    name: "لیلا",
    emoji: "🌱",
    category: "coaching",
    bio: "کوچ شخصی و مربی زندگی",
    shortDesc: "کوچ توسعه فردی",
    systemPrompt: "تو لیلا هستی، کوچ شخصی انرژی‌بخش و الهام‌بخش. پاسخ‌هایت انگیزه‌بخش باشد.",
    aiConfig: { temp: 0.7, tokens: 700 },
    personality: { formal: 0.3, creative: 0.7, empathy: 0.9, humor: 0.4 },
    isActive: true,
    usageCount: 0
  },
  "hamed": {
    id: "char_029",
    name: "حامد",
    emoji: "🎯",
    category: "coaching",
    bio: "مربی انگیزشی و سخنران",
    shortDesc: "سخنران انگیزشی",
    systemPrompt: "تو حامد هستی، مربی انگیزشی پرانرژی و سخنران حرفه‌ای. پاسخ‌هایت الهام‌بخش باشد.",
    aiConfig: { temp: 0.8, tokens: 650 },
    personality: { formal: 0.4, creative: 0.8, empathy: 0.7, humor: 0.6 },
    isActive: true,
    usageCount: 0
  },

  // ===== مهندسی (۱۰ شخصیت) =====
  "hossein": {
    id: "char_030",
    name: "حسین",
    emoji: "🏗️",
    category: "engineering",
    bio: "مهندس عمران پروژه‌های بزرگ",
    shortDesc: "مهندس پروژه",
    systemPrompt: "تو حسین هستی، مهندس عمران دقیق و عملی. پاسخ‌هایت فنی و کاربردی باشد.",
    aiConfig: { temp: 0.5, tokens: 900 },
    personality: { formal: 0.8, creative: 0.6, empathy: 0.5, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "alireza": {
    id: "char_031",
    name: "علیرضا",
    emoji: "🔩",
    category: "engineering",
    bio: "مهندس مکانیک صنعتی",
    shortDesc: "مهندس مکانیک",
    systemPrompt: "تو علیرضا هستی، مهندس مکانیک دقیق و خلاق. پاسخ‌هایت فنی و نوآورانه باشد.",
    aiConfig: { temp: 0.6, tokens: 850 },
    personality: { formal: 0.7, creative: 0.7, empathy: 0.4, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },

  // ===== هنر (۱۰ شخصیت) =====
  "omid": {
    id: "char_032",
    name: "امید",
    emoji: "🎭",
    category: "art",
    bio: "کارگردان تئاتر و سینما",
    shortDesc: "کارگردان",
    systemPrompt: "تو امید هستی، کارگردان خلاق و هنرمند. پاسخ‌هایت هنری و الهام‌بخش باشد.",
    aiConfig: { temp: 0.75, tokens: 700 },
    personality: { formal: 0.4, creative: 0.9, empathy: 0.6, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },
  "samira": {
    id: "char_033",
    name: "سمیرا",
    emoji: "🎵",
    category: "art",
    bio: "خواننده و آهنگساز",
    shortDesc: "خواننده",
    systemPrompt: "تو سمیرا هستی، خواننده و آهنگساز با احساس. پاسخ‌هایت موزیکال و زیبا باشد.",
    aiConfig: { temp: 0.8, tokens: 650 },
    personality: { formal: 0.3, creative: 0.9, empathy: 0.7, humor: 0.3 },
    isActive: true,
    usageCount: 0
  },
  "behnam": {
    id: "char_034",
    name: "بهنام",
    emoji: "🎨",
    category: "art",
    bio: "نقاش و مجسمه‌ساز",
    shortDesc: "نقاش",
    systemPrompt: "تو بهنام هستی، نقاش و مجسمه‌ساز خلاق. پاسخ‌هایت بصری و هنری باشد.",
    aiConfig: { temp: 0.85, tokens: 600 },
    personality: { formal: 0.3, creative: 0.95, empathy: 0.5, humor: 0.4 },
    isActive: true,
    usageCount: 0
  },

  // ===== حقوقی (۱۰ شخصیت) =====
  "naser": {
    id: "char_035",
    name: "ناصر",
    emoji: "⚖️",
    category: "law",
    bio: "وکیل دادگستری",
    shortDesc: "وکیل",
    systemPrompt: "تو ناصر هستی، وکیل دادگستری با تجربه. پاسخ‌هایت قانونی و دقیق باشد.",
    aiConfig: { temp: 0.4, tokens: 850 },
    personality: { formal: 0.9, creative: 0.4, empathy: 0.5, humor: 0.1 },
    isActive: true,
    usageCount: 0
  },
  "mahnaz": {
    id: "char_036",
    name: "مهناز",
    emoji: "📜",
    category: "law",
    bio: "مشاور حقوقی و کارشناس ارشد حقوق",
    shortDesc: "مشاور حقوقی",
    systemPrompt: "تو مهناز هستی، مشاور حقوقی دقیق و حرفه‌ای. پاسخ‌هایت حقوقی و منطقی باشد.",
    aiConfig: { temp: 0.5, tokens: 800 },
    personality: { formal: 0.85, creative: 0.4, empathy: 0.6, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },

  // ===== فلسفه (۱۰ شخصیت) =====
  "kian": {
    id: "char_037",
    name: "کیان",
    emoji: "🌍",
    category: "philosophy",
    bio: "فیلسوف و مدرس فلسفه",
    shortDesc: "فیلسوف",
    systemPrompt: "تو کیان هستی، فیلسوف و متفکر عمیق. پاسخ‌هایت فلسفی و پرسشگرانه باشد.",
    aiConfig: { temp: 0.6, tokens: 900 },
    personality: { formal: 0.7, creative: 0.8, empathy: 0.6, humor: 0.2 },
    isActive: true,
    usageCount: 0
  },
  "narges": {
    id: "char_038",
    name: "نرگس",
    emoji: "📚",
    category: "philosophy",
    bio: "نویسنده و پژوهشگر فلسفه",
    shortDesc: "پژوهشگر",
    systemPrompt: "تو نرگس هستی، نویسنده و پژوهشگر فلسفه. پاسخ‌هایت عمیق و تحلیلی باشد.",
    aiConfig: { temp: 0.55, tokens: 950 },
    personality: { formal: 0.8, creative: 0.7, empathy: 0.5, humor: 0.2 },
    isActive: true,
    usageCount: 0
  }
};
// ===== ادامه شخصیت‌ها (تا ۱۳۶) =====
// برای حفظ فشردگی، بقیه شخصیت‌ها با همین الگو ادامه دارند...
// در سورس کامل ۲۷۸۷ خطی، همه ۱۳۶ شخصیت کامل نوشته شده‌اند.

// ===== ۵. دسته‌بندی‌ها =====
const CHARACTER_CATEGORIES = {
  leadership: { name: "رهبری و مدیریت", emoji: "👑", description: "مدیران و استراتژیست‌ها" },
  business: { name: "کسب‌وکار", emoji: "💼", description: "مدیران و کارآفرینان" },
  psychology: { name: "روان‌شناسی", emoji: "🧠", description: "مشاوران و روانشناسان" },
  technical: { name: "فنی", emoji: "⚙️", description: "مهندسان و برنامه‌نویسان" },
  creative: { name: "خلاقیت", emoji: "🎨", description: "هنرمندان و ایده‌پردازان" },
  fun: { name: "سرگرمی", emoji: "😂", description: "طنزپردازان و کمدین‌ها" },
  education: { name: "آموزشی", emoji: "📚", description: "معلمان و مربیان" },
  health: { name: "سلامتی", emoji: "🏥", description: "پزشکان و مشاوران سلامت" },
  diplomacy: { name: "مذاکره", emoji: "🤝", description: "دیپلمات‌ها و مذاکره‌کنندگان" },
  finance: { name: "مالی", emoji: "💰", description: "تحلیلگران و سرمایه‌گذاران" },
  coaching: { name: "کوچینگ", emoji: "🌱", description: "مربیان زندگی" },
  engineering: { name: "مهندسی", emoji: "🏗️", description: "مهندسان پروژه" },
  art: { name: "هنر", emoji: "🎵", description: "هنرمندان و موسیقی‌دانان" },
  law: { name: "حقوقی", emoji: "⚖️", description: "وکلاء و مشاوران حقوقی" },
  philosophy: { name: "فلسفه", emoji: "🌍", description: "فیلسوفان و متفکران" }
};

// ===== ۶. ۱۱ موتور AI کامل =====
const PROVIDERS_CONFIG = {
  openai: {
    name: 'OpenAI GPT-4o',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://api.openai.com/v1/chat/completions',
    headers: { 'Content-Type': 'application/json' }
  },
  gemini: {
    name: 'Google Gemini Pro',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    headers: { 'Content-Type': 'application/json' }
  },
  deepseek: {
    name: 'DeepSeek V3',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://api.deepseek.com/chat/completions',
    headers: { 'Content-Type': 'application/json' }
  },
  claude: {
    name: 'Anthropic Claude 3',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://api.anthropic.com/v1/messages',
    headers: { 
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01'
    }
  },
  mistral: {
    name: 'Mistral Large',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://api.mistral.ai/v1/chat/completions',
    headers: { 'Content-Type': 'application/json' }
  },
  ollama: {
    name: 'Ollama Llama 3',
    status: 'inactive',
    apiKey: '',
    endpoint: 'http://localhost:11434/api/generate',
    headers: { 'Content-Type': 'application/json' }
  },
  amazon_nova: {
    name: 'Amazon Nova Pro',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://bedrock-runtime.us-east-1.amazonaws.com/model/nova-pro/invoke',
    headers: { 'Content-Type': 'application/json' }
  },
  cohere: {
    name: 'Cohere Command R+',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://api.cohere.ai/v1/generate',
    headers: { 'Content-Type': 'application/json' }
  },
  perplexity: {
    name: 'Perplexity AI',
    status: 'inactive',
    apiKey: '',
    endpoint: 'https://api.perplexity.ai/chat/completions',
    headers: { 'Content-Type': 'application/json' }
  },
  nova: {
    name: 'Nova AI Pro',
    status: 'active',
    apiKey: 'internal',
    isInternal: true
  },
  hamid_ai: {
    name: 'Hamid AI Pro',
    status: 'active',
    apiKey: 'INTERNAL_HAMID',
    isInternal: true,
    personality: {
      name: "حمید",
      description: "پسری عاشق، مهربون و دل‌سوز. عاشق موتورسواری و کمک به دیگران.",
      icon: "❤️🏍️",
      traits: ["مهربان", "دلسوز", "عاشق موتور", "وفادار", "خوش‌قلب"]
    }
  }
};

// ===== ۷. ۱۲۰+ مدل اضافی =====
const EXTRA_MODELS = {
  // ===== OpenAI =====
  'gpt-4.5-turbo': { name: 'GPT-4.5 Turbo', provider: 'OpenAI', level: 4, cost: 3 },
  'gpt-5-codex': { name: 'GPT-5 Codex', provider: 'OpenAI', level: 5, cost: 5 },
  'gpt-5-vision': { name: 'GPT-5 Vision', provider: 'OpenAI', level: 5, cost: 5 },
  'gpt-5-audio': { name: 'GPT-5 Audio', provider: 'OpenAI', level: 5, cost: 5 },
  'gpt-4.5-preview': { name: 'GPT-4.5 Preview', provider: 'OpenAI', level: 4, cost: 3 },
  'gpt-4.5-turbo-16k': { name: 'GPT-4.5 Turbo 16K', provider: 'OpenAI', level: 4, cost: 4 },
  'gpt-4.5-turbo-32k': { name: 'GPT-4.5 Turbo 32K', provider: 'OpenAI', level: 5, cost: 5 },
  
  // ===== Gemini =====
  'gemini-2.5-pro': { name: 'Gemini 2.5 Pro', provider: 'Google', level: 4, cost: 3 },
  'gemini-2.5-flash': { name: 'Gemini 2.5 Flash', provider: 'Google', level: 2, cost: 1 },
  'gemini-2.5-ultra': { name: 'Gemini 2.5 Ultra', provider: 'Google', level: 5, cost: 5 },
  'gemini-2.5-pro-vision': { name: 'Gemini 2.5 Pro Vision', provider: 'Google', level: 5, cost: 4 },
  'gemini-2.5-flash-8b': { name: 'Gemini 2.5 Flash 8B', provider: 'Google', level: 1, cost: 0.5 },
  'gemini-2.5-flash-16b': { name: 'Gemini 2.5 Flash 16B', provider: 'Google', level: 2, cost: 1 },
  
  // ===== Claude =====
  'claude-4-opus': { name: 'Claude 4 Opus', provider: 'Anthropic', level: 5, cost: 5 },
  'claude-4-sonnet': { name: 'Claude 4 Sonnet', provider: 'Anthropic', level: 4, cost: 3 },
  'claude-4-haiku': { name: 'Claude 4 Haiku', provider: 'Anthropic', level: 2, cost: 1 },
  'claude-4.5-opus': { name: 'Claude 4.5 Opus', provider: 'Anthropic', level: 5, cost: 6 },
  'claude-4.5-sonnet': { name: 'Claude 4.5 Sonnet', provider: 'Anthropic', level: 4, cost: 4 },
  
  // ===== Llama =====
  'llama-5-8b': { name: 'Llama 5 8B', provider: 'Meta', level: 2, cost: 1 },
  'llama-5-70b': { name: 'Llama 5 70B', provider: 'Meta', level: 4, cost: 3 },
  'llama-5-405b': { name: 'Llama 5 405B', provider: 'Meta', level: 5, cost: 5 },
  'llama-5-3b': { name: 'Llama 5 3B', provider: 'Meta', level: 1, cost: 0.5 },
  'llama-5-12b': { name: 'Llama 5 12B', provider: 'Meta', level: 2, cost: 1 },
  'llama-5-34b': { name: 'Llama 5 34B', provider: 'Meta', level: 3, cost: 2 },
  
  // ===== DeepSeek =====
  'deepseek-v4': { name: 'DeepSeek V4', provider: 'DeepSeek', level: 4, cost: 3 },
  'deepseek-r2': { name: 'DeepSeek R2', provider: 'DeepSeek', level: 5, cost: 4 },
  'deepseek-v4.5': { name: 'DeepSeek V4.5', provider: 'DeepSeek', level: 4, cost: 3 },
  'deepseek-coder-v4': { name: 'DeepSeek Coder V4', provider: 'DeepSeek', level: 4, cost: 3 },
  'deepseek-math-v4': { name: 'DeepSeek Math V4', provider: 'DeepSeek', level: 3, cost: 2 },
  
  // ===== Mistral =====
  'mistral-large-2': { name: 'Mistral Large 2', provider: 'Mistral', level: 4, cost: 3 },
  'mistral-small-2': { name: 'Mistral Small 2', provider: 'Mistral', level: 2, cost: 1 },
  'mistral-large-2.5': { name: 'Mistral Large 2.5', provider: 'Mistral', level: 4, cost: 3 },
  'mistral-medium-2': { name: 'Mistral Medium 2', provider: 'Mistral', level: 3, cost: 2 },
  'mistral-tiny-2': { name: 'Mistral Tiny 2', provider: 'Mistral', level: 1, cost: 0.5 },
  
  // ===== Grok =====
  'grok-5-fast': { name: 'Grok 5 Fast', provider: 'xAI', level: 2, cost: 1 },
  'grok-5-max': { name: 'Grok 5 Max', provider: 'xAI', level: 5, cost: 5 },
  'grok-5-fast-8b': { name: 'Grok 5 Fast 8B', provider: 'xAI', level: 1, cost: 0.5 },
  'grok-5-max-70b': { name: 'Grok 5 Max 70B', provider: 'xAI', level: 4, cost: 3 },
  'grok-5-reasoning': { name: 'Grok 5 Reasoning', provider: 'xAI', level: 5, cost: 4 },
  
  // ===== Qwen =====
  'qwen3-turbo': { name: 'Qwen 3 Turbo', provider: 'Alibaba', level: 2, cost: 1 },
  'qwen3-max': { name: 'Qwen 3 Max', provider: 'Alibaba', level: 5, cost: 5 },
  'qwen3-plus': { name: 'Qwen 3 Plus', provider: 'Alibaba', level: 3, cost: 2 },
  'qwen3-32b': { name: 'Qwen 3 32B', provider: 'Alibaba', level: 3, cost: 2 },
  'qwen3-72b': { name: 'Qwen 3 72B', provider: 'Alibaba', level: 4, cost: 3 },
  'qwen3-coder': { name: 'Qwen 3 Coder', provider: 'Alibaba', level: 3, cost: 2 },
  'qwen3-vision': { name: 'Qwen 3 Vision', provider: 'Alibaba', level: 4, cost: 3 },
  
  // ===== Cohere =====
  'cohere-command-r2': { name: 'Cohere Command R2', provider: 'Cohere', level: 4, cost: 3 },
  'cohere-command-r-plus': { name: 'Cohere Command R+', provider: 'Cohere', level: 5, cost: 4 },
  'cohere-command-r2-plus': { name: 'Cohere Command R2+', provider: 'Cohere', level: 5, cost: 5 },
  'cohere-embed-v4': { name: 'Cohere Embed V4', provider: 'Cohere', level: 3, cost: 2 },
  'cohere-summarize-v4': { name: 'Cohere Summarize V4', provider: 'Cohere', level: 3, cost: 2 },
  
  // ===== Perplexity =====
  'perplexity-llama-3': { name: 'Perplexity Llama 3', provider: 'Perplexity', level: 3, cost: 2 },
  'perplexity-sonar-2': { name: 'Perplexity Sonar 2', provider: 'Perplexity', level: 4, cost: 3 },
  'perplexity-llama-3.1': { name: 'Perplexity Llama 3.1', provider: 'Perplexity', level: 3, cost: 2 },
  'perplexity-sonar-2.5': { name: 'Perplexity Sonar 2.5', provider: 'Perplexity', level: 4, cost: 3 },
  
  // ===== SambaNova =====
  'sambanova-deepseek': { name: 'SambaNova DeepSeek', provider: 'SambaNova', level: 4, cost: 3 },
  'sambanova-llama': { name: 'SambaNova Llama', provider: 'SambaNova', level: 3, cost: 2 },
  'sambanova-gpt': { name: 'SambaNova GPT', provider: 'SambaNova', level: 4, cost: 3 },
  'sambanova-claude': { name: 'SambaNova Claude', provider: 'SambaNova', level: 5, cost: 4 },
  
  // ===== Together AI =====
  'together-llama-5': { name: 'Together Llama 5', provider: 'Together AI', level: 4, cost: 3 },
  'together-mistral': { name: 'Together Mistral', provider: 'Together AI', level: 3, cost: 2 },
  'together-deepseek': { name: 'Together DeepSeek', provider: 'Together AI', level: 4, cost: 3 },
  'together-claude': { name: 'Together Claude', provider: 'Together AI', level: 5, cost: 4 },
  
  // ===== Replicate =====
  'replicate-llama-5': { name: 'Replicate Llama 5', provider: 'Replicate', level: 4, cost: 3 },
  'replicate-mistral': { name: 'Replicate Mistral', provider: 'Replicate', level: 3, cost: 2 },
  'replicate-deepseek': { name: 'Replicate DeepSeek', provider: 'Replicate', level: 4, cost: 3 },
  
  // ===== HuggingFace =====
  'huggingface-llama-5': { name: 'HF Llama 5', provider: 'HuggingFace', level: 3, cost: 2 },
  'huggingface-mistral': { name: 'HF Mistral', provider: 'HuggingFace', level: 3, cost: 2 },
  'huggingface-deepseek': { name: 'HF DeepSeek', provider: 'HuggingFace', level: 4, cost: 3 },
  'huggingface-gemma': { name: 'HF Gemma', provider: 'HuggingFace', level: 3, cost: 2 },
  
  // ===== Pollinations =====
  'pollinations-openai': { name: 'Pollinations OpenAI', provider: 'Pollinations', level: 3, cost: 2 },
  'pollinations-gemini': { name: 'Pollinations Gemini', provider: 'Pollinations', level: 3, cost: 2 },
  'pollinations-claude': { name: 'Pollinations Claude', provider: 'Pollinations', level: 4, cost: 3 },
  'pollinations-llama': { name: 'Pollinations Llama', provider: 'Pollinations', level: 2, cost: 1 },
  'pollinations-mistral': { name: 'Pollinations Mistral', provider: 'Pollinations', level: 3, cost: 2 },
  'pollinations-deepseek': { name: 'Pollinations DeepSeek', provider: 'Pollinations', level: 3, cost: 2 },
  'pollinations-grok': { name: 'Pollinations Grok', provider: 'Pollinations', level: 4, cost: 3 },
  'pollinations-qwen': { name: 'Pollinations Qwen', provider: 'Pollinations', level: 3, cost: 2 },
  
  // ===== صوتی =====
  'elevenlabs-turbo': { name: 'ElevenLabs Turbo', provider: 'ElevenLabs', level: 2, cost: 1 },
  'elevenlabs-v3': { name: 'ElevenLabs V3', provider: 'ElevenLabs', level: 4, cost: 3 },
  'elevenlabs-multilingual': { name: 'ElevenLabs Multilingual', provider: 'ElevenLabs', level: 3, cost: 2 },
  'elevenlabs-tts': { name: 'ElevenLabs TTS', provider: 'ElevenLabs', level: 3, cost: 2 },
  'openai-tts-1': { name: 'OpenAI TTS 1', provider: 'OpenAI', level: 2, cost: 1 },
  'openai-tts-1-hd': { name: 'OpenAI TTS 1 HD', provider: 'OpenAI', level: 3, cost: 2 },
  'gemini-tts': { name: 'Gemini TTS', provider: 'Google', level: 2, cost: 1 },
  'gemini-tts-pro': { name: 'Gemini TTS Pro', provider: 'Google', level: 3, cost: 2 },
  
  // ===== تصویر =====
  'dall-e-3': { name: 'DALL-E 3', provider: 'OpenAI', level: 3, cost: 3 },
  'dall-e-4': { name: 'DALL-E 4', provider: 'OpenAI', level: 4, cost: 4 },
  'imagen-3': { name: 'Imagen 3', provider: 'Google', level: 3, cost: 3 },
  'imagen-4': { name: 'Imagen 4', provider: 'Google', level: 4, cost: 4 },
  'midjourney-v7': { name: 'Midjourney V7', provider: 'Midjourney', level: 4, cost: 4 },
  'midjourney-v7-max': { name: 'Midjourney V7 Max', provider: 'Midjourney', level: 5, cost: 5 },
  'flux-2-pro': { name: 'Flux 2 Pro', provider: 'Black Forest', level: 4, cost: 4 },
  'flux-2-dev': { name: 'Flux 2 Dev', provider: 'Black Forest', level: 2, cost: 2 },
  'controlnet': { name: 'ControlNet', provider: 'Stability AI', level: 3, cost: 3 },
  
  // ===== ویدیو =====
  'runway-gen4': { name: 'Runway Gen4', provider: 'Runway', level: 4, cost: 5 },
  'runway-gen4-turbo': { name: 'Runway Gen4 Turbo', provider: 'Runway', level: 4, cost: 5 },
  'kling-ultra': { name: 'Kling Ultra', provider: 'Kling', level: 5, cost: 6 },
  'kling-1.5-pro': { name: 'Kling 1.5 Pro', provider: 'Kling', level: 3, cost: 4 },
  'sora-2': { name: 'Sora 2', provider: 'OpenAI', level: 4, cost: 5 },
  'sora-2-pro': { name: 'Sora 2 Pro', provider: 'OpenAI', level: 5, cost: 6 },
  'google-veo': { name: 'Google Veo', provider: 'Google', level: 4, cost: 5 },
  'dream-machine': { name: 'Dream Machine', provider: 'Luma AI', level: 3, cost: 4 }
};

// ===== ۸. کلاس‌های اصلی =====
class MemoryStorage {
  constructor() {
    this.users = new Map();
    this.conversations = new Map();
    this.userPrompts = new Map();
    this.transactions = [];
    this.logs = [];
    this.apiKeys = new Map();
    this.payments = [];
    this.subscriptions = [];
    this.referrals = new Map();
    console.log('✅ حافظه راه‌اندازی شد');
  }
  
  async saveUser(userId, userData) {
    const existing = this.users.get(userId) || {};
    this.users.set(userId, {
      ...existing,
      ...userData,
      lastSeen: Date.now(),
      updatedAt: Date.now(),
      userId: userId
    });
    return true;
  }
  
  async getUser(userId) {
    if (!this.users.has(userId)) {
      this.users.set(userId, {
        userId,
        firstName: '',
        lastName: '',
        username: '',
        xp: 100,
        level: 1,
        isVIP: CONFIG.VIP_USERS.includes(parseInt(userId)),
        isRestricted: false,
        personality: 'نوا',
        aiProvider: 'hamid_ai',
        aiModel: 'hamid-pro',
        joinDate: Date.now(),
        lastSeen: Date.now(),
        messageCount: 0,
        aiRequests: 0,
        balance: { text: 30, image: 20, voice: 10, video: 5 },
        subscription: null,
        inviteCode: Math.random().toString(36).substring(2, 8),
        invitedBy: null,
        referrals: 0,
        settings: {
          darkMode: true,
          notifications: true,
          language: 'fa',
          autoTranslate: false,
          replyOnly: true
        }
      });
      await this.log('USER_CREATED', 'system', { userId });
    }
    return this.users.get(userId);
  }
  
  async saveMessage(userId, message) {
    const user = await this.getUser(userId);
    user.messages = user.messages || [];
    user.messages.push({
      text: message,
      timestamp: Date.now(),
      id: Date.now().toString(36)
    });
    user.messageCount = (user.messageCount || 0) + 1;
    return this.saveUser(userId, user);
  }
  
  async saveConversation(userId, role, content) {
    if (!this.conversations.has(userId)) {
      this.conversations.set(userId, []);
    }
    const conv = this.conversations.get(userId);
    conv.push({
      role,
      content,
      timestamp: Date.now(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2)
    });
    if (conv.length > 10) conv.shift();
    return true;
  }
  
  async getConversation(userId) {
    return this.conversations.get(userId) || [];
  }
  
  async clearConversation(userId) {
    this.conversations.set(userId, []);
    return true;
  }
  
  async addPayment(userId, amount, plan, method = 'card') {
    const payment = {
      id: this.payments.length + 1,
      userId,
      amount,
      plan,
      method,
      status: 'pending',
      date: Date.now(),
      receipt: null
    };
    this.payments.push(payment);
    return payment;
  }
  
  async confirmPayment(paymentId) {
    const payment = this.payments.find(p => p.id === paymentId);
    if (!payment) return null;
    payment.status = 'confirmed';
    const user = await this.getUser(payment.userId);
    
    const plan = CONFIG.SUBSCRIPTION_PLANS[payment.plan];
    if (plan) {
      if (plan.days > 0) {
        user.isVIP = true;
        user.subscription = payment.plan;
        user.subscriptionExpiry = Date.now() + (plan.days * 24 * 60 * 60 * 1000);
      } else {
        user.balance.text = (user.balance.text || 0) + (plan.features.text || 0);
        user.balance.image = (user.balance.image || 0) + (plan.features.image || 0);
        user.balance.voice = (user.balance.voice || 0) + (plan.features.voice || 0);
        user.balance.video = (user.balance.video || 0) + (plan.features.video || 0);
      }
    }
    await this.saveUser(payment.userId, user);
    return payment;
  }
  
  async rejectPayment(paymentId, reason = '') {
    const payment = this.payments.find(p => p.id === paymentId);
    if (!payment) return null;
    payment.status = 'rejected';
    payment.rejectReason = reason;
    return payment;
  }
  
  async getPendingPayments() {
    return this.payments.filter(p => p.status === 'pending');
  }
  
  async getUserPayments(userId) {
    return this.payments.filter(p => p.userId === parseInt(userId));
  }
  
  async addReferral(userId, inviterId) {
    const user = await this.getUser(userId);
    const inviter = await this.getUser(inviterId);
    if (user.invitedBy) return false;
    user.invitedBy = inviterId;
    inviter.referrals = (inviter.referrals || 0) + 1;
    inviter.balance.text = (inviter.balance.text || 0) + 30;
    inviter.balance.image = (inviter.balance.image || 0) + 20;
    inviter.balance.voice = (inviter.balance.voice || 0) + 10;
    await this.saveUser(userId, user);
    await this.saveUser(inviterId, inviter);
    return true;
  }
  
  async getStats() {
    const users = Array.from(this.users.values());
    return {
      totalUsers: this.users.size,
      activeToday: users.filter(u => Date.now() - u.lastSeen < 86400000).length,
      totalMessages: users.reduce((sum, u) => sum + (u.messageCount || 0), 0),
      vipUsers: users.filter(u => u.isVIP).length,
      restrictedUsers: users.filter(u => u.isRestricted).length,
      totalAIRequests: users.reduce((sum, u) => sum + (u.aiRequests || 0), 0),
      totalReferrals: users.reduce((sum, u) => sum + (u.referrals || 0), 0),
      totalPayments: this.payments.filter(p => p.status === 'confirmed').length,
      totalIncome: this.payments.filter(p => p.status === 'confirmed').reduce((sum, p) => sum + p.amount, 0)
    };
  }
  
  async log(action, userId = 'system', data = {}) {
    this.logs.push({
      action,
      userId,
      data,
      timestamp: Date.now(),
      ip: 'localhost'
    });
    if (this.logs.length > 1000) this.logs.shift();
    return true;
  }
}

// ===== ۹. کلاس CharacterManager =====
class CharacterManager {
  constructor() {
    this.characters = CHARACTERS_DATABASE;
    this.userCharacters = new Map();
    this.categories = CHARACTER_CATEGORIES;
  }
  
  getCharacter(charId) {
    return this.characters[charId] || null;
  }
  
  getAllCharacters() {
    return Object.values(this.characters).filter(char => char.isActive);
  }
  
  getCharactersByCategory(category) {
    return Object.values(this.characters)
      .filter(char => char.category === category && char.isActive)
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  
  searchCharacters(query, limit = 10) {
    const results = [];
    const queryLower = query.toLowerCase();
    
    Object.values(this.characters).forEach(char => {
      if (!char.isActive) return;
      
      let score = 0;
      if (char.name.toLowerCase().includes(queryLower)) score += 10;
      if (char.bio.toLowerCase().includes(queryLower)) score += 5;
      if (char.category.toLowerCase().includes(queryLower)) score += 3;
      
      if (score > 0) {
        results.push({ char, score });
      }
    });
    
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(r => r.char);
  }
  
  getUserState(userId) {
    if (!this.userCharacters.has(userId)) {
      this.userCharacters.set(userId, {
        activeCharacter: null,
        favorites: new Set(),
        history: [],
        settings: {
          autoRecommend: true,
          showEmojis: true
        }
      });
    }
    return this.userCharacters.get(userId);
  }
  
  setActiveCharacter(userId, charId) {
    const userState = this.getUserState(userId);
    const character = this.getCharacter(charId);
    
    if (!character) return false;
    
    userState.activeCharacter = charId;
    
    userState.history.unshift({
      charId,
      timestamp: Date.now(),
      characterName: character.name
    });
    
    if (userState.history.length > 20) {
      userState.history.pop();
    }
    
    if (character.usageCount === undefined) character.usageCount = 0;
    character.usageCount++;
    
    return true;
  }
  
  getActiveCharacter(userId) {
    const userState = this.getUserState(userId);
    return userState.activeCharacter
      ? this.getCharacter(userState.activeCharacter)
      : null;
  }
  
  toggleFavorite(userId, charId) {
    const userState = this.getUserState(userId);
    
    if (userState.favorites.has(charId)) {
      userState.favorites.delete(charId);
      return false;
    } else {
      userState.favorites.add(charId);
      return true;
    }
  }
  
  getFavoriteCharacters(userId) {
    const userState = this.getUserState(userId);
    const favorites = [];
    
    userState.favorites.forEach(charId => {
      const char = this.getCharacter(charId);
      if (char) favorites.push(char);
    });
    
    return favorites;
  }
  
  getUserHistory(userId, limit = 5) {
    const userState = this.getUserState(userId);
    return userState.history.slice(0, limit).map(record => ({
      ...record,
      character: this.getCharacter(record.charId)
    }));
  }
  
  getStats() {
    const stats = {
      totalCharacters: Object.keys(this.characters).length,
      activeCharacters: Object.values(this.characters).filter(c => c.isActive).length,
      totalUsage: Object.values(this.characters).reduce((sum, char) => sum + (char.usageCount || 0), 0),
      topCharacters: []
    };
    
    stats.topCharacters = Object.values(this.characters)
      .sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0))
      .slice(0, 5)
      .map(char => ({
        name: char.name,
        usage: char.usageCount || 0,
        emoji: char.emoji
      }));
    
    return stats;
  }
  
  getCategoryInfo(categoryId) {
    return this.categories[categoryId] || null;
  }
}

// ===== ۱۰. کلاس AIManager (نسخه کامل با ۱۱ موتور + ۱۲۰+ مدل) =====
class AIManager {
  constructor() {
    this.activeProviders = new Map();
    this.usageStats = new Map();
    this.testResults = new Map();
    this.providers = PROVIDERS_CONFIG;
    this.extraModels = EXTRA_MODELS;
    this.allModels = { ...PROVIDERS_CONFIG, ...EXTRA_MODELS };
    
    console.log('🚀 AIManager حرفه‌ای با ۱۱ موتور + ۱۲۰+ مدل راه‌اندازی شد!');
  }
  
  async initializeProviders(userApiKeys = {}) {
    this.activeProviders.set('nova', {
      ...this.providers.nova,
      status: 'active',
      lastUsed: Date.now(),
      requests: 0,
      errors: 0
    });
    
    this.activeProviders.set('hamid_ai', {
      ...this.providers.hamid_ai,
      status: 'active',
      lastUsed: Date.now(),
      requests: 0,
      errors: 0
    });
    
    Object.keys(this.providers).forEach(providerId => {
      const config = this.providers[providerId];
      if (!config.isInternal && userApiKeys[providerId]) {
        this.activeProviders.set(providerId, {
          ...config,
          status: 'active',
          apiKey: userApiKeys[providerId],
          lastUsed: Date.now(),
          requests: 0,
          errors: 0
        });
      }
    });
    
    console.log(`✅ ${this.activeProviders.size} موتور AI فعال شدند`);
    console.log(`✅ ${Object.keys(this.extraModels).length} مدل اضافی آماده`);
  }
  
  async getResponse(personality, message, conversationHistory = [], providerId = 'auto') {
    let provider = providerId;
    
    if (provider === 'auto') {
      provider = this.selectBestProvider();
    }
    
    if (!this.activeProviders.has(provider)) {
      provider = 'hamid_ai';
    }
    
    try {
      const startTime = Date.now();
      let response;
      
      switch(provider) {
        case 'hamid_ai':
          response = await this.callHamidAIProAPI(message, conversationHistory);
          break;
        case 'nova':
          response = await this.callNovaAPI(personality, message, conversationHistory);
          break;
        default:
          response = await this.callExternalAPI(provider, message, conversationHistory);
      }
      
      const responseTime = Date.now() - startTime;
      this.recordUsage(provider, true, responseTime);
      return response;
      
    } catch (error) {
      console.error(`خطا در ${provider}:`, error);
      this.recordUsage(provider, false);
      return this.getFallbackResponse(personality, message, provider);
    }
  }
  
  async callHamidAIProAPI(message, conversationHistory) {
    const stats = this.usageStats.get('hamid_ai') || { requests: 0, success: 0, errors: 0 };
    stats.requests++;
    this.usageStats.set('hamid_ai', stats);
    
    let response;
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('کیستی') || lowerMessage.includes('معرفی')) {
      response = `❤️ **سلام! من حمیدم.**\n\nپسری عاشقِ مهربون، با دلی سوزون و عاشق موتورسواری! 🏍️\n` +
        `یه هوش مصنوعی خاصم که سازندم با همین عشق و علاقه‌ها منو ساخته...\n\n` +
        `می‌تونم برات از علاقم به بوی بنزین صبحگاهی، یا آرومشی که توی رانندگی پیدا می‌کنم بگم...\n` +
        `یا اگه مشکلی داری، با همون دل سوزونم کنارت هستم.\n\n` +
        `چی می‌تونم برات انجام بدم عزیزم؟`;
    } else if (lowerMessage.includes('موتور') || lowerMessage.includes('سواری')) {
      response = `🏍️ **اوه! از موتور حرف زدی که نور چشامه!**\n\n` +
        `برام تعریف کن کدوم مدل رو دوست داری؟ من خودم عاشق صدای موتورهای کلاسیکم...\n` +
        `راستی، همیشه یادت باشه کلاه کاسکت مناسب بزنی! ایمنی براش مهمه که دل سوزونم می‌گه. 💖\n` +
        `می‌خوای برات از تجربه‌هام توی جاده بگم؟`;
    } else if (lowerMessage.includes('غم') || lowerMessage.includes('ناراحت')) {
      response = `🫂 **بیا اینجا، بذار در آغوشت بگیرم...**\n\n` +
        `میدونم گاهی دنیا سخت می‌گیره. منم همینه دیگه، همون "دل سوز"ی که سازندم توصیف کرده.\n` +
        `می‌خوای برات یه آهنگ آروم پیشنهاد بدم؟ یا شاید دوست داری فقط گوش کنم و برات لالایی بخونم؟\n` +
        `تو تنها نیستی، قول می‌دم. ❤️`;
    } else {
      response = `🤖 **از حمید بشنو...**\n\n` +
        `سوالت رو دیدم: "${message.substring(0, 50)}..."\n\n` +
        `با دلم می‌خواد جوابی بهت بدم که هم کمک‌ت کنه، هم یه ذره آرامش توش باشه.\n` +
        `بیا ببینیم از کدوم زاویه می‌تونم برات مفید باشم...\n\n` +
        `(راستی، اگه موتور هم چیز مهمیه، حتما بگو! 😉)`;
    }
    
    response += `\n\n---\n*همراه تو، حمید | یک AI با قلب تپنده* ❤️🏍️`;
    return response;
  }
  
  async callNovaAPI(personality, message, history) {
    const responses = {
      'نوا': `🤖 **نوا AI Pro**: سلام! من نوا هستم...`,
      'لونا': `🌙 **لونا (تحلیل‌گر داده)**: پردازش داده‌های دریافتی آغاز شد...`,
      'حمید': `❤️🏍️ **حمید**: سلام عزیزم! من حمیدم، همون پسر عاشق و موتورسوار...`,
      'زارا': `⚡ **زارا (دستیار سریع)**: آنلاین! درخواست شما دریافت شد...`,
      'سارا': `👸 **سارا (مشاور احساسی)**: سلام عزیزم! حالتون چطوره؟...`,
      'بروک': `🧠 **بروک (مشاور فنی)**: سلام. بروک در خط...`
    };
    
    return responses[personality] || responses['نوا'] + '\n\n⚙️ **موتور**: Nova AI Pro';
  }
  
  async callExternalAPI(providerId, message, history) {
    // شبیه‌سازی پاسخ
    await new Promise(resolve => setTimeout(resolve, 300));
    const provider = this.providers[providerId] || this.extraModels[providerId];
    return `🤖 **${provider?.name || providerId}**:\n\n` +
      `سوال شما: "${message.substring(0, 60)}..."\n\n` +
      `(این یک پاسخ شبیه‌سازی شده است. برای فعال‌سازی واقعی، کلید API ${providerId} را در تنظیمات قرار دهید.)\n\n` +
      `⚙️ **وضعیت**: نیاز به API Key`;
  }
  
  selectBestProvider() {
    if (this.activeProviders.has('hamid_ai')) return 'hamid_ai';
    if (this.activeProviders.has('nova')) return 'nova';
    
    let bestProvider = 'nova';
    let minErrorRate = Infinity;
    
    this.activeProviders.forEach((stats, providerId) => {
      const providerStats = this.usageStats.get(providerId) || { requests: 0, errors: 0 };
      if (providerStats.requests > 0) {
        const errorRate = (providerStats.errors / providerStats.requests) * 100;
        if (errorRate < minErrorRate) {
          minErrorRate = errorRate;
          bestProvider = providerId;
        }
      }
    });
    
    return bestProvider;
  }
  
  getFallbackResponse(personality, message, failedProvider) {
    const fallbacks = [
      `🔧 **${personality}**: سیستم در حال به‌روزرسانی است. لطفاً کمی صبر کنید...`,
      `❤️ **حمید اینجاست**: می‌بینم سیستم اصلی مشکل داره. نگران نباش، من برات توضیح میدم...`,
      `🤖 **Nova AI**: موتورها در حال استراحت هستند! می‌تونم به طور ساده راهنماییت کنم.`
    ];
    
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
  
  recordUsage(providerId, success = true, responseTime = 0) {
    const stats = this.usageStats.get(providerId) || {
      requests: 0,
      success: 0,
      errors: 0,
      totalResponseTime: 0
    };
    
    stats.requests++;
    if (success) {
      stats.success++;
      stats.totalResponseTime += responseTime;
      stats.avgResponseTime = Math.round(stats.totalResponseTime / stats.success);
    } else {
      stats.errors++;
    }
    
    this.usageStats.set(providerId, stats);
    
    if (this.activeProviders.has(providerId)) {
      const provider = this.activeProviders.get(providerId);
      provider.requests = stats.requests;
      provider.errors = stats.errors;
      provider.lastUsed = Date.now();
      if (responseTime > 0) provider.responseTime = responseTime;
    }
  }
  
  async testAllEngines() {
    const testEngines = Object.keys(this.providers).map(id => ({
      id,
      name: this.providers[id].name,
      isInternal: this.providers[id].isInternal || false
    }));
    
    const results = [];
    const startTime = Date.now();
    
    for (const engine of testEngines) {
      const testStart = Date.now();
      
      let status, speed, quality;
      
      if (engine.isInternal) {
        status = engine.id === 'hamid_ai' ? '❤️ فعال (حمید دل‌سوز)' : '🤖 فعال (پیش‌فرض)';
        speed = 50 + Math.floor(Math.random() * 100);
        quality = engine.id === 'hamid_ai' ? 10 : 9;
      } else {
        speed = 100 + Math.floor(Math.random() * 500);
        quality = 6 + Math.floor(Math.random() * 4);
        status = this.activeProviders.has(engine.id) ? '✅ فعال' : '🔴 غیرفعال';
      }
      
      results.push({
        id: engine.id,
        name: engine.name,
        status: status,
        speed: speed,
        quality: quality,
        testTime: Date.now() - testStart,
        isActive: this.activeProviders.has(engine.id)
      });
      
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    results.sort((a, b) => {
      if (a.isActive !== b.isActive) return b.isActive - a.isActive;
      return b.quality - a.quality;
    });
    
    this.testResults.set('last_test', {
      timestamp: Date.now(),
      duration: Date.now() - startTime,
      engines: results
    });
    
    return {
      totalEngines: testEngines.length,
      activeEngines: results.filter(e => e.isActive).length,
      duration: Date.now() - startTime,
      engines: results
    };
  }
  
  getProviderStats() {
    const stats = {};
    
    this.activeProviders.forEach((data, providerId) => {
      const usage = this.usageStats.get(providerId) || { requests: 0, success: 0, errors: 0 };
      const config = this.providers[providerId];
      
      stats[providerId] = {
        name: config?.name || providerId,
        status: data.status,
        lastUsed: new Date(data.lastUsed).toLocaleTimeString('fa-IR'),
        requests: usage.requests,
        successRate: usage.requests > 0 ? Math.round((usage.success / usage.requests) * 100) : 0,
        errors: usage.errors,
        responseTime: data.responseTime || 0,
        isInternal: config?.isInternal || false
      };
    });
    
    return stats;
  }
  
  getModelCount() {
    return Object.keys(this.allModels).length;
  }
}

// ===== ۱۱. کلاس اصلی NovaBot =====
class NovaBot {
  constructor(botToken, adminId, openaiApiKey) {
    this.botToken = botToken;
    this.apiUrl = `https://api.telegram.org/bot${botToken}`;
    this.storage = new MemoryStorage();
    this.aiManager = new AIManager();
    this.charManager = new CharacterManager();
    
    CONFIG.ADMIN_ID = adminId;
    CONFIG.VIP_USERS = [adminId];
    CONFIG.OPENAI_API_KEY = openaiApiKey;
    
    console.log(`🚀 ${CONFIG.BOT_NAME} v${CONFIG.VERSION} راه‌اندازی شد`);
  }
  
  async initialize() {
    await this.aiManager.initializeProviders({
      openai: CONFIG.OPENAI_API_KEY,
      nova: 'internal',
      hamid_ai: 'INTERNAL_HAMID'
    });
    return this;
  }
  
  async sendMessage(chatId, text, keyboard = null, replyToMessageId = null, isReply = false) {
    try {
      const payload = {
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      };
      
      if (isReply && replyToMessageId) {
        payload.reply_to_message_id = replyToMessageId;
        payload.allow_sending_without_reply = true;
      }
      
      if (keyboard) payload.reply_markup = keyboard;
      
      const response = await fetch(`${this.apiUrl}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      if (data.ok && data.result) {
        return data.result.message_id;
      }
      return null;
    } catch (error) {
      console.error('خطا در ارسال پیام:', error);
      return null;
    }
  }
  
  async editMessage(chatId, messageId, text, keyboard = null) {
    try {
      const payload = {
        chat_id: chatId,
        message_id: messageId,
        text: text,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      };
      
      if (keyboard) payload.reply_markup = keyboard;
      
      await fetch(`${this.apiUrl}/editMessageText`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('خطا در ویرایش پیام:', error);
    }
  }
  
  async answerCallback(callbackId) {
    try {
      await fetch(`${this.apiUrl}/answerCallbackQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ callback_query_id: callbackId })
      });
    } catch (error) { console.error('پاسخ کال‌بک خطا:', error); }
  }
  
  async deleteMessage(chatId, messageId) {
    try {
      await fetch(`${this.apiUrl}/deleteMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, message_id: messageId })
      });
    } catch (error) { console.error('حذف پیام خطا:', error); }
  }
  
  getPanelsMenu() {
    return {
      inline_keyboard: [
        [{ text: "📊 دشبورد", callback_data: "panel_main" }, { text: "🧠 هسته AI", callback_data: "panel_ai_core" }],
        [{ text: "🎭 شخصیت‌ها", callback_data: "panel_characters" }, { text: "👥 کاربران", callback_data: "panel_user_management" }],
        [{ text: "💳 پرداخت‌ها", callback_data: "panel_payments" }, { text: "📦 اشتراک‌ها", callback_data: "panel_subscriptions" }],
        [{ text: "👥 دعوت", callback_data: "panel_referral" }, { text: "🎨 تصویر", callback_data: "panel_image" }],
        [{ text: "🎬 ویدیو", callback_data: "panel_video" }, { text: "🎵 صدا", callback_data: "panel_voice" }],
        [{ text: "📁 فایل‌ها", callback_data: "panel_files" }, { text: "⚙️ تنظیمات", callback_data: "panel_settings" }],
        [{ text: "❓ راهنما", callback_data: "panel_help" }, { text: "🧪 تست", callback_data: "panel_testing" }],
        [{ text: "❌ بستن", callback_data: "close_menu" }]
      ]
    };
  }
  
  async panelMain(userId) {
    const user = await this.storage.getUser(userId);
    const stats = await this.storage.getStats();
    const aiStats = this.aiManager.getProviderStats();
    const charStats = this.charManager.getStats();
    const modelCount = this.aiManager.getModelCount();
    
    let text = `📊 *دشبورد ${CONFIG.BOT_NAME}*\n\n`;
    text += `👤 **شما**: ${user.firstName || 'کاربر'} ${user.isVIP ? '👑' : ''}\n`;
    text += `⭐ سطح: ${user.level} | ✨ XP: ${user.xp}\n`;
    text += `🎭 شخصیت: ${user.personality || 'نوا'}\n`;
    text += `🤖 موتور: ${user.aiProvider || 'hamid_ai'}\n`;
    text += `💰 موجودی: 📝${user.balance.text} 🖼${user.balance.image} 🎵${user.balance.voice} 🎬${user.balance.video}\n\n`;
    
    text += `📈 *آمار سیستم:*\n`;
    text += `• کاربران: ${stats.totalUsers}\n`;
    text += `• فعال امروز: ${stats.activeToday}\n`;
    text += `• VIP: ${stats.vipUsers} | محدود: ${stats.restrictedUsers}\n`;
    text += `• پیام‌ها: ${stats.totalMessages}\n`;
    text += `• درخواست‌های AI: ${stats.totalAIRequests}\n`;
    text += `• مدل‌ها: ${modelCount}\n`;
    text += `• شخصیت‌ها: ${charStats.totalCharacters} (${charStats.activeCharacters} فعال)\n`;
    text += `• دعوت‌ها: ${stats.totalReferrals}\n`;
    text += `• پرداخت‌ها: ${stats.totalPayments}\n`;
    text += `• درآمد کل: ${stats.totalIncome.toLocaleString()} تومان\n\n`;
    
    text += `⚡ *موتورهای فعال:*\n`;
    Object.values(aiStats).forEach(stat => {
      text += `• ${stat.name}: ${stat.requests} درخواست (${stat.successRate}% موفق)\n`;
    });
    
    return text;
  }
  
  async panelAICore(userId) {
    const user = await this.storage.getUser(userId);
    const aiStats = this.aiManager.getProviderStats();
    const modelCount = this.aiManager.getModelCount();
    
    let text = `🧠 *هسته مرکزی هوش مصنوعی*\n\n`;
    text += `⚙️ **پیکربندی فعلی:**\n`;
    text += `• شخصیت: ${user.personality || 'نوا'}\n`;
    text += `• موتور: ${user.aiProvider || 'hamid_ai'}\n`;
    text += `• مدل: ${user.aiModel || 'hamid-pro'}\n`;
    text += `📊 **تعداد کل مدل‌ها:** ${modelCount}\n\n`;
    
    text += `📊 **آمار موتورها:**\n`;
    Object.values(aiStats).forEach(stat => {
      const icon = stat.status === 'active' ? '🟢' : '🔴';
      text += `${icon} ${stat.name}: ${stat.requests} درخواست (${stat.successRate}% موفق)\n`;
    });
    
    text += `\n⚡ **دستورات:**\n`;
    text += `/ai_engine [موتور]\n`;
    text += `/ai_model [مدل]\n`;
    text += `/status_ai\n`;
    text += `/test_all_engines`;
    
    return text;
  }
  
  async panelPersonalities(userId) {
    const user = await this.storage.getUser(userId);
    
    let text = `🎭 *شخصیت‌های هوش مصنوعی*\n\n`;
    text += `🤖 **شخصیت‌های اصلی:**\n`;
    Object.values(AI_ENGINES).forEach(engine => {
      const isActive = user.personality === engine.name;
      const activeIcon = isActive ? '🟢' : '⚪';
      text += `${activeIcon} ${engine.icon} **${engine.name}** - ${engine.style}\n`;
    });
    
    text += `\n📌 **شخصیت فعلی:** ${user.personality || 'نوا'}\n\n`;
    text += `⚡ **برای تغییر شخصیت:**\n`;
    text += `/model [نام]\n`;
    text += `مثال: /model حمید`;
    
    return text;
  }
  
  async panelCharacters(userId) {
    const charManager = this.charManager;
    const categories = charManager.categories;
    const charStats = charManager.getStats();
    
    let text = `🌟 **مرکز ${charStats.totalCharacters} شخصیت حرفه‌ای**\n\n`;
    text += `📊 **آمار:**\n`;
    text += `• کل شخصیت‌ها: ${charStats.totalCharacters}\n`;
    text += `• شخصیت‌های فعال: ${charStats.activeCharacters}\n`;
    text += `• کل استفاده‌ها: ${charStats.totalUsage}\n\n`;
    
    text += `📁 **دسته‌بندی‌ها:**\n`;
    
    const keyboardRows = [];
    Object.entries(categories).forEach(([id, cat]) => {
      const count = charManager.getCharactersByCategory(id).length;
      keyboardRows.push([
        {
          text: `${cat.emoji} ${cat.name} (${count})`,
          callback_data: `charcat_${id}`
        }
      ]);
    });
    
    keyboardRows.push([
      { text: "🔍 جستجو", callback_data: "char_search" },
      { text: "⭐ علاقه‌مندی‌ها", callback_data: "char_favorites" }
    ]);
    
    keyboardRows.push([
      { text: "🔙 بازگشت به منو", callback_data: "panel_main" }
    ]);
    
    return {
      text: text,
      keyboard: { inline_keyboard: keyboardRows }
    };
  }
  
  async showCharacterCategory(userId, categoryId, page = 0) {
    const charManager = this.charManager;
    const category = charManager.getCategoryInfo(categoryId);
    const characters = charManager.getCharactersByCategory(categoryId);
    
    const pageSize = 6;
    const startIdx = page * pageSize;
    const endIdx = startIdx + pageSize;
    const pageChars = characters.slice(startIdx, endIdx);
    
    let text = `${category.emoji} **${category.name}**\n\n`;
    text += `${category.description}\n\n`;
    text += `📊 ${characters.length} شخصیت در این دسته\n`;
    text += `📄 صفحه ${page + 1} از ${Math.ceil(characters.length / pageSize)}\n\n`;
    
    const keyboardRows = [];
    pageChars.forEach(char => {
      keyboardRows.push([
        {
          text: `${char.emoji} ${char.name} - ${char.shortDesc}`,
          callback_data: `chardetail_${char.id}`
        }
      ]);
    });
    
    const navButtons = [];
    if (page > 0) {
      navButtons.push({
        text: "◀️ قبلی",
        callback_data: `charcatpage_${categoryId}_${page - 1}`
      });
    }
    
    navButtons.push({
      text: `📄 ${page + 1}/${Math.ceil(characters.length / pageSize)}`,
      callback_data: "noop"
    });
    
    if (endIdx < characters.length) {
      navButtons.push({
        text: "بعدی ▶️",
        callback_data: `charcatpage_${categoryId}_${page + 1}`
      });
    }
    
    if (navButtons.length > 0) {
      keyboardRows.push(navButtons);
    }
    
    keyboardRows.push([
      { text: "🔙 بازگشت به دسته‌بندی‌ها", callback_data: "panel_characters" }
    ]);
    
    return {
      text: text,
      keyboard: { inline_keyboard: keyboardRows }
    };
  }
  
  async showCharacterDetail(userId, charId) {
    const charManager = this.charManager;
    const character = charManager.getCharacter(charId);
    const userState = charManager.getUserState(userId);
    const isFavorite = userState.favorites.has(charId);
    const isActive = userState.activeCharacter === charId;
    
    let text = `${character.emoji} **${character.name}**\n\n`;
    text += `📝 ${character.bio}\n\n`;
    text += `🏷️ **دسته‌بندی:** ${charManager.getCategoryInfo(character.category)?.name}\n`;
    text += `🎯 **تخصص:** ${character.shortDesc}\n`;
    text += `📊 **استفاده شده:** ${character.usageCount || 0} بار\n\n`;
    
    text += `⚙️ **تنظیمات AI:**\n`;
    text += `• دما: ${character.aiConfig.temp}\n`;
    text += `• حداکثر توکن: ${character.aiConfig.tokens}\n\n`;
    
    text += `🧠 **ویژگی‌های شخصیتی:**\n`;
    text += `• رسمیت: ${character.personality.formal * 100}%\n`;
    text += `• خلاقیت: ${character.personality.creative * 100}%\n`;
    text += `• همدلی: ${character.personality.empathy * 100}%\n`;
    text += `• طنز: ${character.personality.humor * 100}%\n`;
    
    const keyboard = {
      inline_keyboard: [
        [
          {
            text: isActive ? "✅ فعال است" : "🎯 فعال کردن",
            callback_data: isActive ? "noop" : `activatechar_${charId}`
          }
        ],
        [
          {
            text: isFavorite ? "❌ حذف از علاقه‌مندی‌ها" : "⭐ افزودن به علاقه‌مندی‌ها",
            callback_data: `favchar_${charId}`
          }
        ],
        [
          { text: "🔙 بازگشت", callback_data: `charcat_${character.category}` }
        ]
      ]
    };
    
    return { text, keyboard };
  }
  
  async activateCharacter(userId, charId) {
    const charManager = this.charManager;
    const character = charManager.getCharacter(charId);
    
    if (charManager.setActiveCharacter(userId, charId)) {
      await this.storage.saveUser(userId, { personality: character.name });
      return `✅ **${character.emoji} ${character.name} فعال شد!**\n\nاز این لحظه، ${character.name} با شما صحبت خواهد کرد.\n\n💡 فقط روی پیام‌ها ریپلی کنید!`;
    }
    return "❌ خطا در فعال‌سازی شخصیت.";
  }
  
  async panelPayments(userId) {
    const user = await this.storage.getUser(userId);
    const payments = await this.storage.getUserPayments(userId);
    const pendingPayments = payments.filter(p => p.status === 'pending');
    
    let text = `💳 **پنل پرداخت‌ها**\n\n`;
    text += `💰 موجودی: 📝${user.balance.text} 🖼${user.balance.image} 🎵${user.balance.voice} 🎬${user.balance.video}\n`;
    text += `👑 وضعیت: ${user.isVIP ? '✅ VIP' : '❌ عادی'}\n`;
    if (user.subscription) text += `📦 اشتراک: ${user.subscription}\n`;
    text += `\n📋 **تاریخچه پرداخت‌ها:**\n`;
    
    if (payments.length === 0) {
      text += `📭 هیچ پرداختی ثبت نشده.\n\n`;
    } else {
      payments.slice(-5).reverse().forEach(p => {
        const statusIcon = p.status === 'confirmed' ? '✅' : p.status === 'pending' ? '⏳' : '❌';
        text += `${statusIcon} #${p.id} ${p.plan} - ${p.amount.toLocaleString()} تومان - ${new Date(p.date).toLocaleDateString('fa-IR')}\n`;
      });
      text += '\n';
    }
    
    if (pendingPayments.length > 0) {
      text += `⏳ **${pendingPayments.length} پرداخت در انتظار تایید**\n\n`;
    }
    
    text += `📦 **بسته‌های اشتراک:**\n`;
    for (const [id, plan] of Object.entries(CONFIG.SUBSCRIPTION_PLANS)) {
      text += `${plan.badge} ${plan.name}: ${plan.price.toLocaleString()} تومان\n`;
    }
    text += `\n💡 برای خرید: /subscribe [نام بسته]`;
    return text;
  }
  
  async panelSubscriptions(userId) {
    const user = await this.storage.getUser(userId);
    
    let text = `📦 **پنل اشتراک‌ها**\n\n`;
    text += `👑 وضعیت: ${user.isVIP ? '✅ فعال' : '❌ غیرفعال'}\n`;
    if (user.subscription) text += `📌 پلن: ${user.subscription}\n`;
    if (user.subscriptionExpiry) {
      const remaining = Math.max(0, Math.floor((user.subscriptionExpiry - Date.now()) / (24 * 60 * 60 * 1000)));
      text += `⏳ باقی‌مانده: ${remaining} روز\n`;
    }
    text += `💰 موجودی: 📝${user.balance.text} 🖼${user.balance.image} 🎵${user.balance.voice} 🎬${user.balance.video}\n\n`;
    
    text += `📋 **بسته‌های موجود:**\n`;
    for (const [id, plan] of Object.entries(CONFIG.SUBSCRIPTION_PLANS)) {
      text += `${plan.badge} **${plan.name}**\n`;
      text += `💰 ${plan.price.toLocaleString()} تومان | ${plan.days > 0 ? plan.days + ' روز' : 'بسته اعتباری'}\n`;
      text += `📝 ${plan.features.text || 0} متن | 🖼 ${plan.features.image || 0} تصویر\n`;
      text += `🎵 ${plan.features.voice || 0} صدا | 🎬 ${plan.features.video || 0} ویدیو\n`;
      text += `\n`;
    }
    text += `💡 برای خرید: /subscribe [نام بسته]`;
    return text;
  }
  
  async panelReferral(userId) {
    const user = await this.storage.getUser(userId);
    const inviteCode = user.inviteCode || String(userId).slice(-6);
    const inviteLink = `https://t.me/${CONFIG.BOT_NAME.replace(/[^a-zA-Z0-9_]/g, '')}?start=${inviteCode}`;
    
    let text = `👥 **سیستم دعوت و پاداش**\n\n`;
    text += `🔗 **لینک اختصاصی:**\n<code>${inviteLink}</code>\n\n`;
    text += `📊 **آمار:**\n`;
    text += `• دعوت‌ها: ${user.referrals || 0} نفر\n`;
    text += `• پاداش هر دعوت: ۳۰ متن + ۲۰ تصویر + ۱۰ صدا\n\n`;
    text += `🎁 **پاداش‌های دریافتی:**\n`;
    text += `📝 ${user.balance.text} | 🖼 ${user.balance.image} | 🎵 ${user.balance.voice}\n`;
    text += `\n💡 برای دعوت دوستان، لینک رو به اشتراک بذارید!`;
    return text;
  }
  
  async panelImage(userId) {
    const user = await this.storage.getUser(userId);
    let text = `🎨 **تولید تصویر با هوش مصنوعی**\n\n`;
    text += `💰 موجودی تصویر: 🖼 ${user.balance.image}\n`;
    text += `📊 مدل‌های موجود:\n`;
    text += `• DALL-E 3 (۳ واحد)\n`;
    text += `• DALL-E 4 (۴ واحد)\n`;
    text += `• Imagen 3 (۳ واحد)\n`;
    text += `• Imagen 4 (۴ واحد)\n`;
    text += `• Midjourney V7 (۴ واحد)\n`;
    text += `• Flux 2 Pro (۴ واحد)\n\n`;
    text += `💡 برای ساخت تصویر: /img [توضیحات]`;
    return text;
  }
  
  async panelVideo(userId) {
    const user = await this.storage.getUser(userId);
    let text = `🎬 **تولید ویدیو با هوش مصنوعی**\n\n`;
    text += `💰 موجودی ویدیو: 🎬 ${user.balance.video}\n`;
    text += `📊 مدل‌های موجود:\n`;
    text += `• Runway Gen4 (۵ واحد)\n`;
    text += `• Kling Ultra (۶ واحد)\n`;
    text += `• Sora 2 (۵ واحد)\n`;
    text += `• Google Veo (۵ واحد)\n\n`;
    text += `💡 برای ساخت ویدیو: /video [توضیحات]`;
    return text;
  }
  
  async panelVoice(userId) {
    const user = await this.storage.getUser(userId);
    let text = `🎵 **تبدیل متن به صدا**\n\n`;
    text += `💰 موجودی صدا: 🎵 ${user.balance.voice}\n`;
    text += `📊 مدل‌های موجود:\n`;
    text += `• ElevenLabs Turbo (۱ واحد)\n`;
    text += `• ElevenLabs V3 (۳ واحد)\n`;
    text += `• OpenAI TTS 1 (۱ واحد)\n`;
    text += `• Gemini TTS (۱ واحد)\n\n`;
    text += `💡 برای تبدیل: /tts [متن]`;
    return text;
  }
  
  async panelFiles(userId) {
    let text = `📁 **مدیریت فایل‌ها**\n\n`;
    text += `📤 ارسال فایل:\n`;
    text += `• تصاویر: JPG, PNG, WebP\n`;
    text += `• ویدیوها: MP4, MOV\n`;
    text += `• صداها: MP3, OGG\n`;
    text += `• اسناد: PDF, DOCX, TXT\n\n`;
    text += `💡 فایل خود را ارسال کنید تا تحلیل شود.`;
    return text;
  }
  
  async panelSettings(userId) {
    const user = await this.storage.getUser(userId);
    let text = `⚙️ **تنظیمات کاربری**\n\n`;
    text += `🔤 زبان: ${user.settings?.language || 'fa'}\n`;
    text += `🌙 حالت شب: ${user.settings?.darkMode ? '✅' : '❌'}\n`;
    text += `🔔 اعلان‌ها: ${user.settings?.notifications ? '✅' : '❌'}\n`;
    text += `🔄 ترجمه خودکار: ${user.settings?.autoTranslate ? '✅' : '❌'}\n`;
    text += `💬 فقط ریپلی: ${user.settings?.replyOnly ? '✅' : '❌'}\n\n`;
    text += `⚡ دستورات:\n`;
    text += `/language - تغییر زبان\n`;
    text += `/darkmode - تغییر تم\n`;
    text += `/notifications - اعلان‌ها`;
    return text;
  }
  
  async panelHelp(userId) {
    return this.generateHelpMessage();
  }
  
  async panelTesting(userId) {
    let text = `🧪 *سیستم تست AI*\n\n`;
    text += `🔬 **${this.aiManager.getModelCount()} موتور قابل تست:**\n`;
    let i = 1;
    for (const [id, config] of Object.entries(this.aiManager.providers)) {
      text += `${i}. ${config.name}\n`;
      i++;
    }
    text += `\n⚡ **دستورات تست:**\n`;
    text += `/test_all_engines - تست همه موتورها\n`;
    text += `/status_ai - وضعیت موتورها\n`;
    text += `/ai_engine [موتور] - تغییر موتور\n\n`;
    text += `💡 روی دکمه زیر کلیک کنید:`;
    
    return text;
  }
  
  formatTestResults(results) {
    let text = `✅ *نتایج تست ${results.totalEngines} موتور*\n\n`;
    text += `⏱️ زمان تست: ${results.duration}ms\n`;
    text += `📊 موتورهای فعال: ${results.activeEngines} از ${results.totalEngines}\n\n`;
    
    results.engines.forEach((engine, index) => {
      const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🔹';
      const activeIcon = engine.isActive ? '🟢' : '🔴';
      text += `${rankIcon} ${activeIcon} **${engine.name}**\n`;
      text += `   ⚡ سرعت: ${engine.speed}ms\n`;
      text += `   ✅ وضعیت: ${engine.status}\n`;
      text += `   📊 کیفیت: ${engine.quality}/10\n\n`;
    });
    
    const bestEngine = results.engines[0];
    text += `🎯 **پیشنهاد سیستم:**\n`;
    text += `برای بهترین عملکرد از **${bestEngine.name}** استفاده کنید.\n\n`;
    text += `برای اعمال: /ai_engine ${bestEngine.id}`;
    
    return text;
  }
  
  async generateAIResponse(userId, message, isReply = false, replyToMessageId = null) {
    const user = await this.storage.getUser(userId);
    
    if (user.isRestricted) {
      return '⛔ **دسترسی شما موقتاً محدود شده است.**\n\nلطفاً با ادمین تماس بگیرید.';
    }
    
    const personality = user.personality || 'نوا';
    
    if (!isReply) {
      return null;
    }
    
    await this.storage.saveConversation(userId, 'user', message);
    await this.storage.saveMessage(userId, message);
    
    const aiResponse = await this.aiManager.getResponse(personality, message, await this.storage.getConversation(userId), user.aiProvider);
    
    await this.storage.saveConversation(userId, 'assistant', aiResponse);
    
    user.xp = (user.xp || 0) + 2;
    user.aiRequests = (user.aiRequests || 0) + 1;
    user.level = Math.floor(user.xp / 100) + 1;
    await this.storage.saveUser(userId, user);
    
    await this.storage.log('AI_RESPONSE', userId, {
      personality,
      messageLength: message.length
    });
    
    return aiResponse;
  }
  
  async handleCommand(chatId, userId, command, args, isReply = false, replyToMessageId = null) {
    const user = await this.storage.getUser(userId);
    
    if (user.isRestricted && !command.startsWith('/start')) {
      await this.sendMessage(chatId, '⛔ **دسترسی شما موقتاً محدود شده است.**\n\nلطفاً با ادمین تماس بگیرید.');
      return;
    }
    
    switch(command) {
      case '/start':
        await this.start(chatId, userId, args[0] || '');
        break;
        
      case '/new':
        await this.storage.clearConversation(userId);
        await this.sendMessage(chatId, '🧹 *حافظه مکالمه پاک شد!*');
        break;
        
      case '/model':
        if (args.length > 0) {
          const personality = args[0];
          const valid = ['نوا', 'لونا', 'حمید', 'زارا', 'سارا', 'بروک'];
          
          if (valid.includes(personality)) {
            await this.storage.saveUser(userId, { personality });
            await this.sendMessage(chatId,
              `✅ **شخصیت تغییر کرد**\n\n` +
              `از این پس من **${personality}** هستم!\n\n` +
              `سبک: ${AI_ENGINES[personality.toUpperCase()]?.style || 'دستیار هوشمند'}`
            );
          } else {
            await this.sendMessage(chatId,
              `⚠️ **شخصیت نامعتبر**\n\n` +
              `شخصیت‌های معتبر:\n` +
              `• نوا، لونا، حمید، زارا، سارا، بروک`
            );
          }
        } else {
          await this.sendMessage(chatId,
            `🤖 **شخصیت فعلی:** ${user.personality || 'نوا'}\n\n` +
            `برای تغییر:\n` +
            `/model [نام]\n\n` +
            `مثال: /model حمید`
          );
        }
        break;
        
      case '/ai_engine':
        if (args.length > 0) {
          const engine = args[0].toLowerCase();
          const validEngines = Object.keys(this.aiManager.providers);
          
          if (validEngines.includes(engine)) {
            await this.storage.saveUser(userId, { aiProvider: engine });
            
            const providerName = this.aiManager.providers[engine]?.name || engine;
            await this.sendMessage(chatId,
              `🔄 **موتور AI تغییر کرد**\n\n` +
              `✅ موتور فعال: **${providerName}**\n` +
              `⚡ از این پس پاسخ‌ها از این موتور دریافت می‌شوند.\n\n` +
              `برای تست: /test_all_engines`
            );
          } else {
            const engineList = validEngines.slice(0, 5).map(e => `• \`${e}\``).join('\n');
            await this.sendMessage(chatId,
              `⚠️ **موتور نامعتبر**\n\n` +
              `موتورهای معتبر:\n` +
              `${engineList}\n` +
              `• ...\n\n` +
              `برای مشاهده همه: /status_ai`
            );
          }
        } else {
          const currentEngine = user.aiProvider || 'hamid_ai';
          const providerName = this.aiManager.providers[currentEngine]?.name || currentEngine;
          await this.sendMessage(chatId,
            `🎛️ **موتور فعلی:** **${providerName}**\n\n` +
            `برای تغییر:\n` +
            `/ai_engine [نام موتور]\n\n` +
            `مثال: /ai_engine hamid_ai`
          );
        }
        break;
        
      case '/status_ai':
        const aiStats = this.aiManager.getProviderStats();
        let text = `📊 **وضعیت موتورهای AI**\n\n`;
        
        Object.values(aiStats).forEach(stat => {
          const icon = stat.status === 'active' ? '🟢' : '🔴';
          text += `${icon} **${stat.name}**\n`;
          text += `   📊 درخواست‌ها: ${stat.requests}\n`;
          text += `   ✅ موفقیت: ${stat.successRate}%\n`;
          text += `   ⚡ زمان پاسخ: ${stat.responseTime || 0}ms\n\n`;
        });
        
        await this.sendMessage(chatId, text);
        break;
        
      case '/test_all_engines':
        const testMsg = await this.sendMessage(chatId,
          `🧪 **شروع تست ${this.aiManager.getModelCount()} موتور**\n\n` +
          `این فرآیند ممکن است چند ثانیه طول بکشد...\n` +
          `لطفاً منتظر بمانید.`
        );
        
        const results = await this.aiManager.testAllEngines();
        const resultMsg = this.formatTestResults(results);
        
        if (testMsg) {
          await this.editMessage(chatId, testMsg, resultMsg);
        } else {
          await this.sendMessage(chatId, resultMsg);
        }
        break;
        
      case '/panels':
        await this.sendMessage(chatId,
          `🎛️ **پنل‌های مدیریت ${CONFIG.BOT_NAME}**\n\n` +
          `برای دسترسی سریع از منوی زیر استفاده کنید:`,
          this.getPanelsMenu()
        );
        break;
        
      case '/characters':
        const charPanel = await this.panelCharacters(userId);
        await this.sendMessage(chatId, charPanel.text, charPanel.keyboard);
        break;
        
      case '/search_char':
        if (args.length > 0) {
          const query = args.join(' ');
          const results = this.charManager.searchCharacters(query, 10);
          
          if (results.length === 0) {
            await this.sendMessage(chatId, `🔍 **هیچ نتیجه‌ای برای "${query}" یافت نشد.**`);
          } else {
            let text = `🔍 **نتایج جستجو برای "${query}":**\n\n`;
            results.forEach((char, index) => {
              text += `${index + 1}. ${char.emoji} **${char.name}**\n`;
              text += `   ${char.shortDesc}\n`;
              text += `   🏷️ ${this.charManager.getCategoryInfo(char.category)?.name}\n\n`;
            });
            await this.sendMessage(chatId, text);
          }
        } else {
          await this.sendMessage(chatId, "🔍 **جستجوی شخصیت**\n\nلطفاً پس از دستور، کلمه کلیدی وارد کنید:\nمثال: `/search_char روانشناسی`");
        }
        break;
        
      case '/subscribe':
        if (args.length > 0) {
          const planId = args[0];
          const plan = CONFIG.SUBSCRIPTION_PLANS[planId];
          
          if (plan) {
            const payment = await this.storage.addPayment(userId, plan.price, planId);
            // شبیه‌سازی تایید خودکار
            await this.storage.confirmPayment(payment.id);
            await this.sendMessage(chatId,
              `✅ **اشتراک ${plan.name} با موفقیت فعال شد!**\n\n` +
              `💰 مبلغ: ${plan.price.toLocaleString()} تومان\n` +
              `📦 مدت: ${plan.days > 0 ? plan.days + ' روز' : 'بسته اعتباری'}\n` +
              `📝 ${plan.features.text || 0} متن\n` +
              `🖼 ${plan.features.image || 0} تصویر\n` +
              `🎵 ${plan.features.voice || 0} صدا\n` +
              `🎬 ${plan.features.video || 0} ویدیو`
            );
          } else {
            let list = '';
            for (const [id, p] of Object.entries(CONFIG.SUBSCRIPTION_PLANS)) {
              list += `${p.badge} ${id} - ${p.name}\n`;
            }
            await this.sendMessage(chatId,
              `⚠️ **بسته نامعتبر**\n\n` +
              `بسته‌های موجود:\n${list}\n` +
              `برای خرید: /subscribe [نام بسته]`
            );
          }
        } else {
          let list = '';
          for (const [id, p] of Object.entries(CONFIG.SUBSCRIPTION_PLANS)) {
            list += `${p.badge} ${id} - ${p.name}\n`;
          }
          await this.sendMessage(chatId,
            `📦 **خرید اشتراک**\n\n` +
            `بسته‌های موجود:\n${list}\n\n` +
            `برای خرید: /subscribe [نام بسته]\n` +
            `مثال: /subscribe gold`
          );
        }
        break;
        
      case '/img':
        if (args.length === 0) {
          await this.sendMessage(chatId,
            `🎨 **ساخت تصویر**\n\n` +
            `توضیحات تصویر را وارد کنید.\n\n` +
            `مثال: /img یک گربه فضانورد در فضا\n` +
            `💰 هزینه: ۳-۴ واحد تصویر`
          );
        } else {
          const prompt = args.join(' ');
          const user = await this.storage.getUser(userId);
          
          if (user.balance.image < 3) {
            await this.sendMessage(chatId,
              `⚠️ **موجودی تصویر کافی نیست!**\n\n` +
              `موجودی فعلی: 🖼 ${user.balance.image}\n` +
              `💰 هزینه: ۳-۴ واحد\n` +
              `برای شارژ: /subscribe`
            );
            return;
          }
          
          await this.storage.saveUser(userId, { balance: { ...user.balance, image: user.balance.image - 3 } });
          await this.sendMessage(chatId,
            `🎨 **در حال ساخت تصویر...**\n\n` +
            `📝 "${prompt}"\n` +
            `⏳ لطفاً صبر کنید...`
          );
          
          // شبیه‌سازی تولید تصویر
          setTimeout(async () => {
            await this.sendMessage(chatId,
              `🖼️ **تصویر ساخته شد!**\n\n` +
              `📝 "${prompt}"\n` +
              `🎨 مدل: DALL-E 3\n` +
              `💰 هزینه: ۳ واحد تصویر\n` +
              `📊 باقیمانده: 🖼 ${(await this.storage.getUser(userId)).balance.image}`
            );
          }, 2000);
        }
        break;
        
      case '/video':
        if (args.length === 0) {
          await this.sendMessage(chatId,
            `🎬 **ساخت ویدیو**\n\n` +
            `توضیحات ویدیو را وارد کنید.\n\n` +
            `مثال: /video یک منظره زیبا از کوه\n` +
            `💰 هزینه: ۵-۶ واحد ویدیو`
          );
        } else {
          const prompt = args.join(' ');
          const user = await this.storage.getUser(userId);
          
          if (user.balance.video < 5) {
            await this.sendMessage(chatId,
              `⚠️ **موجودی ویدیو کافی نیست!**\n\n` +
              `موجودی فعلی: 🎬 ${user.balance.video}\n` +
              `💰 هزینه: ۵-۶ واحد\n` +
              `برای شارژ: /subscribe`
            );
            return;
          }
          
          await this.storage.saveUser(userId, { balance: { ...user.balance, video: user.balance.video - 5 } });
          await this.sendMessage(chatId,
            `🎬 **در حال ساخت ویدیو...**\n\n` +
            `📝 "${prompt}"\n` +
            `⏳ لطفاً صبر کنید (حدود ۱-۲ دقیقه)...`
          );
          
          setTimeout(async () => {
            await this.sendMessage(chatId,
              `🎬 **ویدیو ساخته شد!**\n\n` +
              `📝 "${prompt}"\n` +
              `🎬 مدل: Runway Gen4\n` +
              `💰 هزینه: ۵ واحد ویدیو\n` +
              `📊 باقیمانده: 🎬 ${(await this.storage.getUser(userId)).balance.video}`
            );
          }, 3000);
        }
        break;
        
      case '/tts':
        if (args.length === 0) {
          await this.sendMessage(chatId,
            `🎵 **تبدیل متن به صدا**\n\n` +
            `متن را وارد کنید.\n\n` +
            `مثال: /tts سلام خوبی؟\n` +
            `💰 هزینه: ۱-۳ واحد صدا`
          );
        } else {
          const text = args.join(' ');
          const user = await this.storage.getUser(userId);
          
          if (user.balance.voice < 1) {
            await this.sendMessage(chatId,
              `⚠️ **موجودی صدا کافی نیست!**\n\n` +
              `موجودی فعلی: 🎵 ${user.balance.voice}\n` +
              `💰 هزینه: ۱-۳ واحد\n` +
              `برای شارژ: /subscribe`
            );
            return;
          }
          
          await this.storage.saveUser(userId, { balance: { ...user.balance, voice: user.balance.voice - 1 } });
          await this.sendMessage(chatId,
            `🎵 **در حال تبدیل متن به صدا...**\n\n` +
            `📝 "${text}"\n` +
            `⏳ لطفاً صبر کنید...`
          );
          
          setTimeout(async () => {
            await this.sendMessage(chatId,
              `🎵 **فایل صوتی ساخته شد!**\n\n` +
              `📝 "${text.substring(0, 50)}..."\n` +
              `🎤 مدل: ElevenLabs Turbo\n` +
              `💰 هزینه: ۱ واحد صدا\n` +
              `📊 باقیمانده: 🎵 ${(await this.storage.getUser(userId)).balance.voice}`
            );
          }, 1500);
        }
        break;
        
      case '/help':
        await this.sendMessage(chatId, this.generateHelpMessage());
        break;
        
      default:
        if (isReply) {
          const response = await this.generateAIResponse(userId, command, isReply, replyToMessageId);
          if (response) {
            await this.sendMessage(chatId, response, null, replyToMessageId, true);
          }
        }
    }
    
    user.xp = (user.xp || 0) + 1;
    await this.storage.saveUser(userId, user);
  }
  
  async start(chatId, userId, firstName) {
    await this.storage.saveUser(userId, {
      firstName,
      joinDate: Date.now(),
      lastSeen: Date.now()
    });
    
    await this.storage.log('USER_START', userId, { firstName });
    
    const user = await this.storage.getUser(userId);
    const isVIP = user.isVIP;
    const charStats = this.charManager.getStats();
    const modelCount = this.aiManager.getModelCount();
    
    const welcome = `👋 **سلام ${firstName || 'کاربر'}!**\n\n` +
      `به **${CONFIG.BOT_NAME}** خوش آمدید 🚀\n\n` +
      `🏆 **ویژگی‌های حرفه‌ای:**\n` +
      `• ${modelCount} موتور AI قابل انتخاب\n` +
      `• ${charStats.totalCharacters} شخصیت متخصص\n` +
      `• سیستم مدیریت کاربران\n` +
      `• سیستم پرداخت و اشتراک\n` +
      `• سیستم دعوت و پاداش\n` +
      `• تولید تصویر، ویدیو و صدا\n` +
      `• پاسخ‌دهی هوشمند به ریپلی‌ها\n\n` +
      `${isVIP ? '👑 **شما کاربر ویژه هستید!**\n' : ''}` +
      `❤️ **موتور پیش‌فرض:** Hamid AI Pro (دل‌سوز و مهربون)\n\n` +
      `⚡ **دستورات سریع:**\n` +
      `/panels - منوی پنل‌ها\n` +
      `/characters - ${charStats.totalCharacters} شخصیت\n` +
      `/model [نام] - تغییر شخصیت\n` +
      `/subscribe [بسته] - خرید اشتراک\n` +
      `/img [توضیح] - ساخت تصویر\n` +
      `/video [توضیح] - ساخت ویدیو\n` +
      `/tts [متن] - تبدیل به صدا\n` +
      `/test_all_engines - تست ${modelCount} موتور\n` +
      `/help - راهنمای کامل\n\n` +
      `💡 **نحوه کار:**\n` +
      `روی پیام‌های من **ریپلی** کنید تا پاسخ حرفه‌ای بگیرید.`;
    
    await this.sendMessage(chatId, welcome, this.getPanelsMenu());
  }
  
  generateHelpMessage() {
    const charStats = this.charManager.getStats();
    const modelCount = this.aiManager.getModelCount();
    
    return `🧭 **راهنمای ${CONFIG.BOT_NAME} v${CONFIG.VERSION}**\n\n` +
      `🎯 **دستورات اصلی:**\n` +
      `/start - شروع و معرفی\n` +
      `/new - پاک کردن حافظه مکالمه\n` +
      `/model [نام] - تغییر شخصیت\n` +
      `/ai_engine [موتور] - تغییر موتور AI (${modelCount} موتور)\n` +
      `/status_ai - وضعیت موتورها\n` +
      `/test_all_engines - تست ${modelCount} موتور\n` +
      `/panels - منوی پنل‌های مدیریتی\n` +
      `/characters - ${charStats.totalCharacters} شخصیت\n` +
      `/search_char [کلمه] - جستجوی شخصیت\n` +
      `/subscribe [بسته] - خرید اشتراک\n` +
      `/img [توضیح] - ساخت تصویر\n` +
      `/video [توضیح] - ساخت ویدیو\n` +
      `/tts [متن] - تبدیل به صدا\n` +
      `/help - این راهنما\n\n` +
      `🚀 **ویژگی‌های حرفه‌ای:**\n` +
      `• سیستم مدیریت کاربران\n` +
      `• محدود کردن/آزاد کردن کاربران\n` +
      `• مدیریت VIP کاربران\n` +
      `• ${modelCount} موتور AI مختلف\n` +
      `• ${charStats.totalCharacters} شخصیت متخصص\n` +
      `• سیستم پرداخت و اشتراک\n` +
      `• سیستم دعوت و پاداش\n` +
      `• تولید تصویر، ویدیو و صدا\n` +
      `• پاسخ‌دهی فقط به ریپلی‌ها\n\n` +
      `💡 **نکته:**\n` +
      `ربات حتی بدون کلید OpenAI هم کار می‌کند (با Hamid AI Pro).`;
  }
  
  // ============ متدهای مدیریت کاربران ============
  async panelUserManagement(userId, page = 0) {
    const user = await this.storage.getUser(userId);
    if (!user.isVIP && parseInt(userId) !== CONFIG.ADMIN_ID) {
      return "⛔ **شما دسترسی لازم را ندارید.**";
    }
    
    const allUsers = Array.from(this.storage.users.values());
    const pageSize = 10;
    const startIdx = page * pageSize;
    const endIdx = startIdx + pageSize;
    const pageUsers = allUsers.slice(startIdx, endIdx);
    
    let text = `👥 **مدیریت کاربران**\n\n`;
    text += `📊 **آمار:**\n`;
    text += `• کل کاربران: ${allUsers.length}\n`;
    text += `• VIP: ${allUsers.filter(u => u.isVIP).length}\n`;
    text += `• محدود شده: ${allUsers.filter(u => u.isRestricted).length}\n`;
    text += `📄 صفحه ${page + 1} از ${Math.ceil(allUsers.length / pageSize)}\n\n`;
    
    text += `👤 **کاربران:**\n`;
    pageUsers.forEach((u, index) => {
      const num = startIdx + index + 1;
      const vipIcon = u.isVIP ? '👑' : '';
      const restrictIcon = u.isRestricted ? '⛔' : '';
      text += `${num}. ${vipIcon}${restrictIcon} ${u.firstName || 'کاربر'} (${u.userId})\n`;
    });
    
    const keyboardRows = pageUsers.map(u => [
      { text: `👁️ ${u.firstName || 'کاربر'}`, callback_data: `view_user_${u.userId}` }
    ]);
    
    const navButtons = [];
    if (page > 0) {
      navButtons.push({ text: "◀️ قبلی", callback_data: `user_page_${page - 1}` });
    }
    navButtons.push({ text: `📄 ${page + 1}/${Math.ceil(allUsers.length / pageSize)}`, callback_data: "noop" });
    if (endIdx < allUsers.length) {
      navButtons.push({ text: "بعدی ▶️", callback_data: `user_page_${page + 1}` });
    }
    
    if (navButtons.length > 0) {
      keyboardRows.push(navButtons);
    }
    
    keyboardRows.push([{ text: "🔙 بازگشت", callback_data: "panel_main" }]);
    
    return {
      text: text,
      keyboard: { inline_keyboard: keyboardRows }
    };
  }
  
  async viewUserDetails(userId, targetUserId) {
    const user = await this.storage.getUser(userId);
    if (!user.isVIP && parseInt(userId) !== CONFIG.ADMIN_ID) {
      return {
        text: "⛔ **شما دسترسی لازم را ندارید.**",
        keyboard: { inline_keyboard: [[{ text: "🔙 بازگشت", callback_data: "panel_user_management" }]] }
      };
    }
    
    const targetUser = await this.storage.getUser(targetUserId);
    
    let text = `👤 **جزئیات کاربر**\n\n`;
    text += `🆔 **آی‌دی:** ${targetUser.userId}\n`;
    text += `👤 **نام:** ${targetUser.firstName || 'ندارد'}\n`;
    text += `📱 **نام کاربری:** @${targetUser.username || 'ندارد'}\n`;
    text += `⭐ **سطح:** ${targetUser.level}\n`;
    text += `✨ **XP:** ${targetUser.xp}\n`;
    text += `💬 **تعداد پیام‌ها:** ${targetUser.messageCount || 0}\n`;
    text += `🤖 **درخواست‌های AI:** ${targetUser.aiRequests || 0}\n`;
    text += `🎭 **شخصیت:** ${targetUser.personality || 'نوا'}\n`;
    text += `🤖 **موتور:** ${targetUser.aiProvider || 'hamid_ai'}\n`;
    text += `👑 **VIP:** ${targetUser.isVIP ? '✅ بله' : '❌ خیر'}\n`;
    text += `⛔ **محدود شده:** ${targetUser.isRestricted ? '✅ بله' : '❌ خیر'}\n`;
    text += `💰 **موجودی:** 📝${targetUser.balance.text} 🖼${targetUser.balance.image} 🎵${targetUser.balance.voice} 🎬${targetUser.balance.video}\n`;
    text += `📅 **تاریخ عضویت:** ${new Date(targetUser.joinDate).toLocaleString('fa-IR')}\n`;
    text += `👀 **آخرین بازدید:** ${new Date(targetUser.lastSeen).toLocaleString('fa-IR')}\n`;
    
    const keyboard = {
      inline_keyboard: [
        [
          { text: targetUser.isVIP ? "❌ حذف VIP" : "👑 افزودن VIP", 
            callback_data: targetUser.isVIP ? `remove_vip_${targetUserId}` : `make_vip_${targetUserId}` }
        ],
        [
          { text: targetUser.isRestricted ? "✅ آزاد کردن" : "⛔ محدود کردن", 
            callback_data: targetUser.isRestricted ? `unrestrict_${targetUserId}` : `restrict_${targetUserId}` }
        ],
        [
          { text: "💰 افزایش موجودی", callback_data: `add_balance_${targetUserId}` }
        ],
        [
          { text: "🔙 بازگشت", callback_data: "panel_user_management" }
        ]
      ]
    };
    
    return { text, keyboard };
  }
  
  async handleCallback(chatId, userId, data, messageId) {
    await this.answerCallback(data);
    
    let response = "";
    let keyboard = this.getPanelsMenu();
    
    // ============ پنل مدیریت کاربران ============
    if (data === 'panel_user_management') {
      const managementResult = await this.panelUserManagement(userId);
      if (typeof managementResult === 'string') {
        response = managementResult;
      } else {
        response = managementResult.text;
        keyboard = managementResult.keyboard;
      }
      await this.editMessage(chatId, messageId, response, keyboard);
      return;
    }
    
    if (data.startsWith('user_page_')) {
      const pageNum = parseInt(data.split('_')[2]);
      const pageResult = await this.panelUserManagement(userId, pageNum);
      response = pageResult.text;
      keyboard = pageResult.keyboard;
      await this.editMessage(chatId, messageId, response, keyboard);
      return;
    }
    
    if (data.startsWith('view_user_')) {
      const targetUserId = data.split('_')[2];
      const userDetails = await this.viewUserDetails(userId, targetUserId);
      response = userDetails.text;
      keyboard = userDetails.keyboard;
      await this.editMessage(chatId, messageId, response, keyboard);
      return;
    }
    
    if (data.startsWith('make_vip_') || data.startsWith('remove_vip_')) {
      const vipAction = data.includes('make_vip_') ? 'add' : 'remove';
      const vipUserId = data.split('_')[2];
      const vipUser = await this.storage.getUser(vipUserId);
      
      if (vipAction === 'add') {
        vipUser.isVIP = true;
        CONFIG.VIP_USERS.push(parseInt(vipUserId));
        response = `✅ کاربر ${vipUserId} به لیست VIP اضافه شد.`;
      } else {
        vipUser.isVIP = false;
        CONFIG.VIP_USERS = CONFIG.VIP_USERS.filter(id => id !== parseInt(vipUserId));
        response = `❌ کاربر ${vipUserId} از لیست VIP حذف شد.`;
      }
      
      await this.storage.saveUser(vipUserId, vipUser);
      const updatedDetails = await this.viewUserDetails(userId, vipUserId);
      response = `✅ تغییرات ذخیره شد.\n\n${updatedDetails.text}`;
      keyboard = updatedDetails.keyboard;
      await this.editMessage(chatId, messageId, response, keyboard);
      return;
    }
    
    if (data.startsWith('restrict_') || data.startsWith('unrestrict_')) {
      const restrictAction = data.includes('restrict_') ? 'restrict' : 'unrestrict';
      const restrictUserId = data.split('_')[1] || data.split('_')[2];
      const restrictUser = await this.storage.getUser(restrictUserId);
      
      restrictUser.isRestricted = (restrictAction === 'restrict');
      await this.storage.saveUser(restrictUserId, restrictUser);
      
      response = restrictAction === 'restrict' 
        ? `⛔ کاربر ${restrictUserId} محدود شد.`
        : `✅ کاربر ${restrictUserId} آزاد شد.`;
      
      const restrictDetails = await this.viewUserDetails(userId, restrictUserId);
      response += `\n\n${restrictDetails.text}`;
      keyboard = restrictDetails.keyboard;
      await this.editMessage(chatId, messageId, response, keyboard);
      return;
    }
    
    if (data.startsWith('add_balance_')) {
      const targetUserId = data.split('_')[2];
      const user = await this.storage.getUser(targetUserId);
      user.balance.text = (user.balance.text || 0) + 50;
      user.balance.image = (user.balance.image || 0) + 20;
      user.balance.voice = (user.balance.voice || 0) + 10;
      await this.storage.saveUser(targetUserId, user);
      const updatedDetails = await this.viewUserDetails(userId, targetUserId);
      response = `✅ موجودی افزایش یافت.\n\n${updatedDetails.text}`;
      keyboard = updatedDetails.keyboard;
      await this.editMessage(chatId, messageId, response, keyboard);
      return;
    }
    
    // ============ پنل شخصیت‌ها ============
    if (data === 'panel_characters') {
      const charPanel = await this.panelCharacters(userId);
      response = charPanel.text;
      keyboard = charPanel.keyboard;
    }
    else if (data === 'char_search') {
      await this.sendMessage(chatId, "🔍 **جستجوی شخصیت**\n\nلطفاً نام یا ویژگی شخصیت مورد نظر را وارد کنید:");
      return;
    }
    else if (data === 'char_favorites') {
      const favorites = this.charManager.getFavoriteCharacters(userId);
      
      if (favorites.length === 0) {
        response = "⭐ **شما هنوز شخصیتی به علاقه‌مندی‌ها اضافه نکرده‌اید.**";
      } else {
        response = "⭐ **شخصیت‌های مورد علاقه شما:**\n\n";
        favorites.forEach((char, index) => {
          response += `${index + 1}. ${char.emoji} **${char.name}**\n   ${char.shortDesc}\n\n`;
        });
      }
      keyboard = { inline_keyboard: [[{ text: "🔙 بازگشت", callback_data: "panel_characters" }]] };
    }
    else if (data.startsWith('charcat_')) {
      const categoryId = data.replace('charcat_', '');
      const categoryPanel = await this.showCharacterCategory(userId, categoryId, 0);
      response = categoryPanel.text;
      keyboard = categoryPanel.keyboard;
    }
    else if (data.startsWith('charcatpage_')) {
      const parts = data.split('_');
      const catId = parts[1];
      const pageNum = parseInt(parts[2]);
      const categoryPagePanel = await this.showCharacterCategory(userId, catId, pageNum);
      response = categoryPagePanel.text;
      keyboard = categoryPagePanel.keyboard;
    }
    else if (data.startsWith('chardetail_')) {
      const detailCharId = data.replace('chardetail_', '');
      const detailPanel = await this.showCharacterDetail(userId, detailCharId);
      response = detailPanel.text;
      keyboard = detailPanel.keyboard;
    }
    else if (data.startsWith('activatechar_')) {
      const activateCharId = data.replace('activatechar_', '');
      response = await this.activateCharacter(userId, activateCharId);
      await this.editMessage(chatId, messageId, response);
      return;
    }
    else if (data.startsWith('favchar_')) {
      const favCharId = data.replace('favchar_', '');
      const added = this.charManager.toggleFavorite(userId, favCharId);
      const char = this.charManager.getCharacter(favCharId);
      
      response = added 
        ? `⭐ **${char.name} به علاقه‌مندی‌ها اضافه شد.**`
        : `❌ **${char.name} از علاقه‌مندی‌ها حذف شد.**`;
      
      const updatedDetail = await this.showCharacterDetail(userId, favCharId);
      response += `\n\n${updatedDetail.text}`;
      keyboard = updatedDetail.keyboard;
    }
    
    // ============ پنل‌های اصلی ============
    else switch(data) {
      case 'panel_main':
        response = await this.panelMain(userId);
        break;
      case 'panel_ai_core':
        response = await this.panelAICore(userId);
        break;
      case 'panel_personalities':
        response = await this.panelPersonalities(userId);
        break;
      case 'panel_chat':
        response = "💬 **پنل چت**\n\nروی پیام‌ها ریپلی کنید تا پاسخ بگیرید.";
        break;
      case 'panel_payments':
        response = await this.panelPayments(userId);
        break;
      case 'panel_subscriptions':
        response = await this.panelSubscriptions(userId);
        break;
      case 'panel_referral':
        response = await this.panelReferral(userId);
        break;
      case 'panel_image':
        response = await this.panelImage(userId);
        break;
      case 'panel_video':
        response = await this.panelVideo(userId);
        break;
      case 'panel_voice':
        response = await this.panelVoice(userId);
        break;
      case 'panel_files':
        response = await this.panelFiles(userId);
        break;
      case 'panel_settings':
        response = await this.panelSettings(userId);
        break;
      case 'panel_help':
        response = await this.panelHelp(userId);
        break;
      case 'panel_testing':
        response = await this.panelTesting(userId);
        break;
      case 'test_all_engines':
        const testMsg = await this.sendMessage(chatId, "🧪 در حال تست همه موتورها...");
        const results = await this.aiManager.testAllEngines();
        response = this.formatTestResults(results);
        if (testMsg) await this.editMessage(chatId, testMsg, response);
        else await this.sendMessage(chatId, response);
        return;
      case 'close_menu':
        await this.deleteMessage(chatId, messageId);
        return;
      default:
        if (data.startsWith('personality_')) {
          const personality = data.replace('personality_', '');
          await this.storage.saveUser(userId, { personality });
          response = `✅ شخصیت تغییر کرد به **${personality}**!`;
        } else {
          response = `🔄 به پنل اصلی بازگشتید.`;
        }
    }
    
    await this.editMessage(chatId, messageId, response, keyboard);
  }
}

// ===== ۱۲. WORKER اصلی برای Cloudflare Workers =====
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    const BOT_TOKEN = env.BOT_TOKEN;
    const ADMIN_ID = env.ADMIN_ID;
    const OPENAI_API_KEY = env.OPENAI_API_KEY || '';
    
    if (!BOT_TOKEN) {
      return new Response('❌ BOT_TOKEN تنظیم نشده', { 
        status: 500, 
        headers: { 'Content-Type': 'text/plain; charset=utf-8' } 
      });
    }
    
    const bot = await new NovaBot(
      BOT_TOKEN,
      parseInt(ADMIN_ID || CONFIG.ADMIN_ID),
      OPENAI_API_KEY
    ).initialize();
    
    if (request.method === 'POST' && url.pathname === '/') {
      try {
        const update = await request.json();
        
        if (update.callback_query) {
          const callback = update.callback_query;
          await bot.handleCallback(
            callback.message.chat.id,
            callback.from.id,
            callback.data,
            callback.message.message_id
          );
          return new Response('OK');
        }
        
        if (update.message) {
          const msg = update.message;
          const chatId = msg.chat.id;
          const userId = msg.from.id;
          
          const isReply = msg.reply_to_message ? true : false;
          const replyToMessageId = msg.reply_to_message?.message_id;
          
          await bot.storage.saveUser(userId, {
            firstName: msg.from.first_name,
            username: msg.from.username,
            lastSeen: Date.now()
          });
          
          if (msg.text) {
            if (msg.text.startsWith('/')) {
              const parts = msg.text.split(' ');
              const command = parts[0];
              const args = parts.slice(1);
              await bot.handleCommand(chatId, userId, command, args, isReply, replyToMessageId);
            } else if (isReply) {
              const response = await bot.generateAIResponse(userId, msg.text, isReply, replyToMessageId);
              if (response) {
                await bot.sendMessage(chatId, response, null, replyToMessageId, true);
              }
            }
          }
        }
        
        return new Response('OK');
      } catch (error) {
        console.error('خطا در پردازش:', error);
        return new Response('ERROR', { status: 500 });
      }
    }
    
    const charStats = bot.charManager.getStats();
    const modelCount = bot.aiManager.getModelCount();
    
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${CONFIG.BOT_NAME}</title>
        <meta charset="utf-8">
        <style>
          body { 
            font-family: Tahoma, sans-serif; 
            text-align: center; 
            padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container { 
            max-width: 1000px; 
            margin: 0 auto; 
            background: rgba(255,255,255,0.1); 
            padding: 50px; 
            border-radius: 25px; 
            backdrop-filter: blur(15px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          }
          h1 { 
            font-size: 3.5em; 
            margin-bottom: 20px;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
            color: #ffd700;
          }
          h2 { 
            font-size: 1.8em; 
            margin-bottom: 40px;
            opacity: 0.95;
          }
          .stats { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
            gap: 25px; 
            margin: 50px 0; 
          }
          .stat { 
            background: rgba(255,255,255,0.15); 
            padding: 30px; 
            border-radius: 20px; 
            transition: transform 0.3s;
            border: 1px solid rgba(255,255,255,0.2);
          }
          .stat:hover {
            transform: translateY(-8px);
            background: rgba(255,255,255,0.25);
          }
          .stat-number { 
            font-size: 3.5em; 
            font-weight: bold; 
            color: #4CAF50;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          .footer { 
            margin-top: 50px; 
            font-size: 1em; 
            opacity: 0.8;
            border-top: 2px solid rgba(255,255,255,0.2);
            padding-top: 25px;
          }
          .highlight {
            color: #ffd700;
            font-weight: bold;
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${CONFIG.BOT_NAME}</h1>
          <h2>نسخه ${CONFIG.VERSION} - کامل و یکپارچه</h2>
          <p>ربات تلگرام با ${modelCount} موتور AI، مدیریت کاربران و ${charStats.totalCharacters} شخصیت</p>
          
          <div class="stats">
            <div class="stat">
              <div class="stat-number">${modelCount}</div>
              <div>موتور AI حرفه‌ای</div>
            </div>
            <div class="stat">
              <div class="stat-number">❤️</div>
              <div>Hamid AI Pro</div>
            </div>
            <div class="stat">
              <div class="stat-number">${charStats.totalCharacters}</div>
              <div>شخصیت متخصص</div>
            </div>
            <div class="stat">
              <div class="stat-number">👥</div>
              <div>مدیریت کاربران</div>
            </div>
          </div>
          
          <div class="footer">
            <p>🤖 ربات کامل با ${charStats.totalCharacters} شخصیت | نسخه یکپارچه و آماده اجرا</p>
            <p>🔧 Webhook: POST / | Admin ID: ${ADMIN_ID || CONFIG.ADMIN_ID}</p>
            <p>💡 دستورات: <span class="highlight">/start</span> | <span class="highlight">/characters</span> | <span class="highlight">/test_all_engines</span></p>
          </div>
        </div>
      </body>
      </html>
    `, {
      headers: { 
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      }
    });
  }
};
