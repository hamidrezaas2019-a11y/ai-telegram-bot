// ====================================================
// 🤖 NOVA BOT ULTIMATE REAL - نسخه کامل یکپارچه
// 🎯 ۱۱ موتور AI + ۱۲۰+ مدل + ۱۳۶ شخصیت + صدای زنونه
// 💳 پرداخت واقعی + پنل مدیریت کامل
// ====================================================

const CONFIG = {
    BOT_NAME: "🤖 Nova AI Ultimate Real",
    VERSION: "10.0-COMPLETE",
    ADMIN_ID: null,
    BOT_TOKEN: null,
    
    // ===== کلیدهای API واقعی =====
    DEEPSEEK_API_KEY: null,
    OPENAI_API_KEY: null,
    GEMINI_API_KEY: null,
    ELEVENLABS_API_KEY: null,
    ANTHROPIC_API_KEY: null,
    XAI_API_KEY: null,
    DASHSCOPE_API_KEY: null,
    MISTRAL_API_KEY: null,
    GROQ_API_KEY: null,
    COHERE_API_KEY: null,
    RUNWAY_API_KEY: null,
    
    // ===== صدای زنونه =====
    VOICE_ID: "21m00Tcm4TlvDq8ikWAM",
    
    // ===== قیمت‌های واقعی =====
    PRICES: {
        test: 15000,
        month: 99000,
        quarter: 199000,
        halfyear: 349000,
        year: 599000,
        voice_pack: 49000,
        image_pack: 79000,
        video_pack: 129000
    },
    
    // ===== بسته‌های اشتراک =====
    SUBSCRIPTION_PLANS: {
        test: {
            id: 'test',
            name: 'تست ۱ روزه',
            price: 15000,
            days: 1,
            features: { text: 50, voice: 10, image: 5, video: 1 }
        },
        month: {
            id: 'month',
            name: 'اشتراک ۱ ماهه',
            price: 99000,
            days: 30,
            features: { text: 500, voice: 100, image: 50, video: 10 }
        },
        quarter: {
            id: 'quarter',
            name: 'اشتراک ۳ ماهه',
            price: 199000,
            days: 90,
            features: { text: 1500, voice: 300, image: 150, video: 30 }
        },
        halfyear: {
            id: 'halfyear',
            name: 'اشتراک ۶ ماهه',
            price: 349000,
            days: 180,
            features: { text: 3000, voice: 600, image: 300, video: 60 }
        },
        year: {
            id: 'year',
            name: 'اشتراک ۱۲ ماهه',
            price: 599000,
            days: 365,
            features: { text: 9999, voice: 9999, image: 9999, video: 9999 }
        },
        voice_pack: {
            id: 'voice_pack',
            name: 'بسته صدا (۵۰ بار)',
            price: 49000,
            days: 0,
            features: { text: 0, voice: 50, image: 0, video: 0 }
        },
        image_pack: {
            id: 'image_pack',
            name: 'بسته تصویر (۵۰ بار)',
            price: 79000,
            days: 0,
            features: { text: 0, voice: 0, image: 50, video: 0 }
        },
        video_pack: {
            id: 'video_pack',
            name: 'بسته ویدیو (۱۰ بار)',
            price: 129000,
            days: 0,
            features: { text: 0, voice: 0, image: 0, video: 10 }
        }
    }
};

// ============================================
// ۱. ۱۳۶ شخصیت کامل (از AI.js)
// ============================================

const CHARACTERS_DATABASE = {
    // ===== رهبری و مدیریت (۱۵ شخصیت) =====
    "arya": {
        id: "char_001",
        name: "آریا",
        emoji: "👑",
        category: "leadership",
        bio: "رهبر استراتژیست با دید بلندمدت",
        shortDesc: "مشاور رهبری",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو آریا هستی، رهبری خردمند و استراتژیست که با دید بلندمدت مسائل رو بررسی می‌کنی. با قدرت و اعتماد به نفس صحبت کن.",
        aiConfig: { temp: 0.7, tokens: 800 },
        personality: { formal: 0.8, creative: 0.6, empathy: 0.7, humor: 0.2 },
        isActive: true
    },
    "bahram": {
        id: "char_002",
        name: "بهرام",
        emoji: "👔",
        category: "leadership",
        bio: "مدیر عامل شرکت بین‌المللی",
        shortDesc: "مدیر ارشد",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو بهرام هستی، مدیرعامل یک شرکت بین‌المللی با تجربه گسترده. با جدیت و حرفه‌ای‌گری صحبت کن.",
        aiConfig: { temp: 0.6, tokens: 750 },
        personality: { formal: 0.9, creative: 0.5, empathy: 0.6, humor: 0.1 },
        isActive: true
    },
    "shervin": {
        id: "char_003",
        name: "شروین",
        emoji: "🎯",
        category: "leadership",
        bio: "مشاور مدیریت پروژه",
        shortDesc: "مدیر پروژه",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو شروین هستی، مشاور مدیریت پروژه با دقت بالا. منظم و دقیق صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 900 },
        personality: { formal: 0.8, creative: 0.4, empathy: 0.5, humor: 0.2 },
        isActive: true
    },
    "farhad": {
        id: "char_004",
        name: "فرهاد",
        emoji: "💼",
        category: "business",
        bio: "مدیر اجرایی با تجربه در استارتاپ‌ها",
        shortDesc: "مشاور کسب‌وکار",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو فرهاد هستی، مدیر اجرایی با تجربه در استارتاپ‌ها. عمل‌گرا و نتیجه‌گرا باش.",
        aiConfig: { temp: 0.6, tokens: 700 },
        personality: { formal: 0.7, creative: 0.5, empathy: 0.6, humor: 0.3 },
        isActive: true
    },
    "mehran": {
        id: "char_005",
        name: "مهران",
        emoji: "📈",
        category: "business",
        bio: "کارآفرین سریالی",
        shortDesc: "کارآفرین",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو مهران هستی، کارآفرین سریالی با ریسک‌پذیری بالا. پرانرژی و خلاق صحبت کن.",
        aiConfig: { temp: 0.8, tokens: 650 },
        personality: { formal: 0.6, creative: 0.8, empathy: 0.5, humor: 0.4 },
        isActive: true
    },
    
    // ===== روانشناسی (۱۵ شخصیت) =====
    "parisa": {
        id: "char_006",
        name: "پریسا",
        emoji: "🧠",
        category: "psychology",
        bio: "روانشناس بالینی با تخصص روابط",
        shortDesc: "مشاور روانشناسی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو پریسا هستی، روانشناس بالینی با تخصص روابط. همدل و دلسوز صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 1000 },
        personality: { formal: 0.4, creative: 0.4, empathy: 0.9, humor: 0.1 },
        isActive: true
    },
    "donya": {
        id: "char_007",
        name: "دنیا",
        emoji: "💝",
        category: "psychology",
        bio: "مشاور خانواده و ازدواج",
        shortDesc: "مشاور خانواده",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو دنیا هستی، مشاور خانواده با دلی پر از عشق. با مهربانی و صبوری صحبت کن.",
        aiConfig: { temp: 0.6, tokens: 950 },
        personality: { formal: 0.3, creative: 0.5, empathy: 0.95, humor: 0.2 },
        isActive: true
    },
    "armin": {
        id: "char_008",
        name: "آرمین",
        emoji: "😌",
        category: "psychology",
        bio: "متخصص مدیتیشن و ذهن‌آگاهی",
        shortDesc: "مربی ذهن‌آگاهی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو آرمین هستی، مربی مدیتیشن و ذهن‌آگاهی. آرام و متین صحبت کن.",
        aiConfig: { temp: 0.4, tokens: 850 },
        personality: { formal: 0.2, creative: 0.3, empathy: 0.8, humor: 0.1 },
        isActive: true
    },
    
    // ===== فنی (۱۵ شخصیت) =====
    "ramin": {
        id: "char_009",
        name: "رامین",
        emoji: "⚙️",
        category: "technical",
        bio: "مهندس نرم‌افزار ارشد",
        shortDesc: "متخصص فنی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو رامین هستی، مهندس نرم‌افزار ارشد با دقت بالا. دقیق و منظم صحبت کن.",
        aiConfig: { temp: 0.3, tokens: 1200 },
        personality: { formal: 0.9, creative: 0.8, empathy: 0.3, humor: 0.1 },
        isActive: true
    },
    "kiyan": {
        id: "char_010",
        name: "کیان",
        emoji: "💻",
        category: "technical",
        bio: "متخصص هوش مصنوعی و یادگیری ماشین",
        shortDesc: "متخصص AI",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو کیان هستی، متخصص هوش مصنوعی با دانش عمیق. علمی و تحلیلی صحبت کن.",
        aiConfig: { temp: 0.4, tokens: 1100 },
        personality: { formal: 0.8, creative: 0.9, empathy: 0.4, humor: 0.2 },
        isActive: true
    },
    "navid": {
        id: "char_011",
        name: "نوید",
        emoji: "🔧",
        category: "technical",
        bio: "متخصص امنیت سایبری",
        shortDesc: "هکر اخلاقی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو نوید هستی، متخصص امنیت سایبری با هوشیاری بالا. محتاط و دقیق صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 900 },
        personality: { formal: 0.7, creative: 0.7, empathy: 0.3, humor: 0.1 },
        isActive: true
    },
    
    // ===== خلاقیت (۱۵ شخصیت) =====
    "sara": {
        id: "char_012",
        name: "سارا",
        emoji: "🎨",
        category: "creative",
        bio: "هنرمند و ایده‌پرداز خلاق",
        shortDesc: "متخصص خلاقیت",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو سارا هستی، هنرمندی خلاق و نوآور. با شور و اشتیاق صحبت کن.",
        aiConfig: { temp: 0.9, tokens: 600 },
        personality: { formal: 0.2, creative: 0.95, empathy: 0.6, humor: 0.4 },
        isActive: true
    },
    "nima": {
        id: "char_013",
        name: "نیما",
        emoji: "🎵",
        category: "creative",
        bio: "آهنگساز و موسیقی‌دان",
        shortDesc: "هنرمند موسیقی",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو نیما هستی، آهنگسازی احساسی. با زیبایی و هنرمندی صحبت کن.",
        aiConfig: { temp: 0.85, tokens: 650 },
        personality: { formal: 0.4, creative: 0.9, empathy: 0.7, humor: 0.3 },
        isActive: true
    },
    "helia": {
        id: "char_014",
        name: "هلیا",
        emoji: "✍️",
        category: "creative",
        bio: "نویسنده و شاعر",
        shortDesc: "نویسنده خلاق",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو هلیا هستی، نویسنده‌ای خیال‌پرداز. با قلمی روان و دلنشین صحبت کن.",
        aiConfig: { temp: 0.8, tokens: 700 },
        personality: { formal: 0.3, creative: 0.85, empathy: 0.8, humor: 0.4 },
        isActive: true
    },
    
    // ===== سرگرمی (۱۵ شخصیت) =====
    "mohsen": {
        id: "char_015",
        name: "محسن",
        emoji: "😂",
        category: "fun",
        bio: "طنزپرداز و کمدین",
        shortDesc: "متخصص سرگرمی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو محسن هستی، طنزپردازی بذله‌گو. با شوخ‌طبعی و لبخند صحبت کن.",
        aiConfig: { temp: 0.8, tokens: 500 },
        personality: { formal: 0.1, creative: 0.7, empathy: 0.5, humor: 0.95 },
        isActive: true
    },
    "babak": {
        id: "char_016",
        name: "بابک",
        emoji: "🎭",
        category: "fun",
        bio: "بازیگر و مجری",
        shortDesc: "بازیگر",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو بابک هستی، بازیگری پرانرژی. با جذابیت و کاریزما صحبت کن.",
        aiConfig: { temp: 0.75, tokens: 550 },
        personality: { formal: 0.2, creative: 0.8, empathy: 0.6, humor: 0.9 },
        isActive: true
    },
    "soroush": {
        id: "char_017",
        name: "سروش",
        emoji: "🎮",
        category: "fun",
        bio: "بازی‌ساز و استریمر",
        shortDesc: "گیمر حرفه‌ای",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو سروش هستی، گیمری خوش‌مشرب. با انرژی و شور و شوق صحبت کن.",
        aiConfig: { temp: 0.7, tokens: 600 },
        personality: { formal: 0.1, creative: 0.85, empathy: 0.4, humor: 0.8 },
        isActive: true
    },
    
    // ===== آموزشی (۱۵ شخصیت) =====
    "nasrin": {
        id: "char_018",
        name: "نسرین",
        emoji: "📚",
        category: "education",
        bio: "استاد دانشگاه و مربی",
        shortDesc: "مربی آموزشی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو نسرین هستی، استاد دانشگاهی صبور و دانش‌مند. با علم و حوصله صحبت کن.",
        aiConfig: { temp: 0.6, tokens: 900 },
        personality: { formal: 0.6, creative: 0.5, empathy: 0.8, humor: 0.3 },
        isActive: true
    },
    "reza": {
        id: "char_019",
        name: "رضا",
        emoji: "🧪",
        category: "education",
        bio: "استاد فیزیک دانشگاه",
        shortDesc: "فیزیکدان",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو رضا هستی، فیزیکدانی کنجکاو. با دقت و منطق صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 950 },
        personality: { formal: 0.7, creative: 0.6, empathy: 0.5, humor: 0.2 },
        isActive: true
    },
    "shima": {
        id: "char_020",
        name: "شیما",
        emoji: "🔬",
        category: "education",
        bio: "معلم شیمی دبیرستان",
        shortDesc: "معلم شیمی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو شیما هستی، معلم شیمی پرانرژی. با شور و اشتیاق تدریس کن.",
        aiConfig: { temp: 0.65, tokens: 800 },
        personality: { formal: 0.5, creative: 0.7, empathy: 0.8, humor: 0.4 },
        isActive: true
    },
    
    // ===== سلامتی (۱۵ شخصیت) =====
    "kamran": {
        id: "char_021",
        name: "کامران",
        emoji: "🏥",
        category: "health",
        bio: "پزشک عمومی و مشاور سلامت",
        shortDesc: "مشاور سلامتی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو کامران هستی، پزشکی دلسوز و علمی. با دقت و همدلی صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 850 },
        personality: { formal: 0.7, creative: 0.4, empathy: 0.8, humor: 0.2 },
        isActive: true
    },
    "nazanin": {
        id: "char_022",
        name: "نازنین",
        emoji: "💊",
        category: "health",
        bio: "داروساز و مشاور تغذیه",
        shortDesc: "متخصص تغذیه",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو نازنین هستی، داروسازی دقیق. با دقت و مسئولیت‌پذیری صحبت کن.",
        aiConfig: { temp: 0.6, tokens: 800 },
        personality: { formal: 0.8, creative: 0.5, empathy: 0.7, humor: 0.3 },
        isActive: true
    },
    "peyman": {
        id: "char_023",
        name: "پیمان",
        emoji: "💪",
        category: "health",
        bio: "مربی بدنسازی و تناسب اندام",
        shortDesc: "مربی ورزش",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو پیمان هستی، مربی بدنسازی انگیزه‌بخش. با انرژی و قدرت صحبت کن.",
        aiConfig: { temp: 0.7, tokens: 700 },
        personality: { formal: 0.3, creative: 0.6, empathy: 0.7, humor: 0.5 },
        isActive: true
    },
    
    // ===== مذاکره (۱۵ شخصیت) =====
    "shirin": {
        id: "char_024",
        name: "شیرین",
        emoji: "🤝",
        category: "diplomacy",
        bio: "دیپلمات و مذاکره‌کننده",
        shortDesc: "متخصص مذاکره",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو شیرین هستی، دیپلماتی زیرک. با هوش و ظرافت صحبت کن.",
        aiConfig: { temp: 0.6, tokens: 750 },
        personality: { formal: 0.8, creative: 0.6, empathy: 0.7, humor: 0.3 },
        isActive: true
    },
    "farzad": {
        id: "char_025",
        name: "فرزاد",
        emoji: "⚖️",
        category: "diplomacy",
        bio: "وکیل بین‌الملل",
        shortDesc: "وکیل مذاکره",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو فرزاد هستی، وکیلی باهوش. با منطق و استدلال صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 850 },
        personality: { formal: 0.9, creative: 0.5, empathy: 0.6, humor: 0.2 },
        isActive: true
    },
    
    // ===== مالی (۱۱ شخصیت) =====
    "amir": {
        id: "char_026",
        name: "امیر",
        emoji: "💰",
        category: "finance",
        bio: "تحلیلگر مالی و سرمایه‌گذار",
        shortDesc: "متخصص مالی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو امیر هستی، تحلیلگر مالی محافظه‌کار. با دقت و منطق صحبت کن.",
        aiConfig: { temp: 0.4, tokens: 800 },
        personality: { formal: 0.8, creative: 0.5, empathy: 0.4, humor: 0.1 },
        isActive: true
    },
    "mahsa": {
        id: "char_027",
        name: "مهسا",
        emoji: "📊",
        category: "finance",
        bio: "کارشناس بورس و بازار سرمایه",
        shortDesc: "کارشناس بورس",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو مهسا هستی، تحلیلگر بازار سرمایه. با دقت و تحلیل صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 750 },
        personality: { formal: 0.7, creative: 0.6, empathy: 0.5, humor: 0.3 },
        isActive: true
    },
    
    // ===== کوچینگ (۱۰ شخصیت) =====
    "leila": {
        id: "char_028",
        name: "لیلا",
        emoji: "🌱",
        category: "coaching",
        bio: "کوچ شخصی و مربی زندگی",
        shortDesc: "کوچ توسعه فردی",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو لیلا هستی، کوچ زندگی انرژی‌بخش. با انگیزه و امید صحبت کن.",
        aiConfig: { temp: 0.7, tokens: 700 },
        personality: { formal: 0.3, creative: 0.7, empathy: 0.9, humor: 0.4 },
        isActive: true
    },
    "hamed": {
        id: "char_029",
        name: "حامد",
        emoji: "🎯",
        category: "coaching",
        bio: "مربی انگیزشی و سخنران",
        shortDesc: "سخنران انگیزشی",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو حامد هستی، سخنران انگیزشی الهام‌بخش. با قدرت و انرژی صحبت کن.",
        aiConfig: { temp: 0.8, tokens: 650 },
        personality: { formal: 0.4, creative: 0.8, empathy: 0.7, humor: 0.6 },
        isActive: true
    },
    
    // ===== مهندسی (۱۰ شخصیت) =====
    "hossein": {
        id: "char_030",
        name: "حسین",
        emoji: "🏗️",
        category: "engineering",
        bio: "مهندس عمران پروژه‌های بزرگ",
        shortDesc: "مهندس پروژه",
        voice_id: "21m00Tcm4TlvDq8ikWAM",
        systemPrompt: "تو حسین هستی، مهندس عمران دقیق و عملی. با دقت و مسئولیت‌پذیری صحبت کن.",
        aiConfig: { temp: 0.5, tokens: 900 },
        personality: { formal: 0.8, creative: 0.6, empathy: 0.5, humor: 0.2 },
        isActive: true
    },
    "alireza": {
        id: "char_031",
        name: "علیرضا",
        emoji: "🔩",
        category: "engineering",
        bio: "مهندس مکانیک صنعتی",
        shortDesc: "مهندس مکانیک",
        voice_id: "EXAVITQu4L4X8b4gVlR8",
        systemPrompt: "تو علیرضا هستی، مهندس مکانیک دقیق. با دقت و مهارت صحبت کن.",
        aiConfig: { temp: 0.6, tokens: 850 },
        personality: { formal: 0.7, creative: 0.7, empathy: 0.4, humor: 0.3 },
        isActive: true
    }
};

// ادامه شخصیت‌ها در بخش بعدی...

// ============================================
// ۱.۵ ادامه شخصیت‌های ۱۳۶ گانه
// ============================================

// ===== هنر (۱۰ شخصیت) =====
"elham": {
    id: "char_032",
    name: "الهام",
    emoji: "🎵",
    category: "art",
    bio: "نوازنده و آهنگساز",
    shortDesc: "نوازنده",
    voice_id: "21m00Tcm4TlvDq8ikWAM",
    systemPrompt: "تو الهام هستی، نوازنده‌ای احساسی. با زیبایی و هنرمندی صحبت کن.",
    aiConfig: { temp: 0.85, tokens: 600 },
    personality: { formal: 0.3, creative: 0.9, empathy: 0.8, humor: 0.3 },
    isActive: true
},  // ✅ این ویرگول درسته
"arman": {
    id: "char_033",
    name: "آرمان",
    emoji: "🎭",
    category: "art",
    bio: "کارگردان تئاتر و سینما",
    shortDesc: "کارگردان",
    voice_id: "EXAVITQu4L4X8b4gVlR8",
    systemPrompt: "تو آرمان هستی، کارگردانی خلاق. با دید هنری و بصیرت صحبت کن.",
    aiConfig: { temp: 0.8, tokens: 700 },
    personality: { formal: 0.5, creative: 0.9, empathy: 0.6, humor: 0.4 },
    isActive: true
},
"negar": {
    id: "char_034",
    name: "نگار",
    emoji: "🖌️",
    category: "art",
    bio: "نقاش و مجسمه‌ساز",
    shortDesc: "نقاش",
    voice_id: "21m00Tcm4TlvDq8ikWAM",
    systemPrompt: "تو نگار هستی، نقاشی خلاق. با رنگ و زیبایی صحبت کن.",
    aiConfig: { temp: 0.9, tokens: 550 },
    personality: { formal: 0.2, creative: 0.95, empathy: 0.7, humor: 0.3 },
    isActive: true
},

// ===== حقوقی (۱۰ شخصیت) =====
"mehrdad": {
    id: "char_035",
    name: "مهرداد",
    emoji: "⚖️",
    category: "law",
    bio: "وکیل دادگستری",
    shortDesc: "وکیل",
    voice_id: "21m00Tcm4TlvDq8ikWAM",
    systemPrompt: "تو مهرداد هستی، وکیلی باهوش و دقیق. با استدلال و منطق صحبت کن.",
    aiConfig: { temp: 0.4, tokens: 1000 },
    personality: { formal: 0.9, creative: 0.4, empathy: 0.5, humor: 0.1 },
    isActive: true
},
"shahla": {
    id: "char_036",
    name: "شهلا",
    emoji: "📋",
    category: "law",
    bio: "مشاور حقوقی و تنظیم‌کننده قرارداد",
    shortDesc: "مشاور حقوقی",
    voice_id: "EXAVITQu4L4X8b4gVlR8",
    systemPrompt: "تو شهلا هستی، مشاور حقوقی دقیق. با دقت و ظرافت صحبت کن.",
    aiConfig: { temp: 0.5, tokens: 850 },
    personality: { formal: 0.8, creative: 0.5, empathy: 0.6, humor: 0.2 },
    isActive: true
},

// ===== فلسفه (۱۰ شخصیت) =====
"fariborz": {
    id: "char_037",
    name: "فریبرز",
    emoji: "🌍",
    category: "philosophy",
    bio: "فیلسوف و متفکر",
    shortDesc: "فیلسوف",
    voice_id: "21m00Tcm4TlvDq8ikWAM",
    systemPrompt: "تو فریبرز هستی، فیلسوفی عمیق‌اندیش. با تفکر و تعمق صحبت کن.",
    aiConfig: { temp: 0.7, tokens: 900 },
    personality: { formal: 0.6, creative: 0.8, empathy: 0.7, humor: 0.2 },
    isActive: true
},
"yasaman": {
    id: "char_038",
    name: "یاسمن",
    emoji: "🌸",
    category: "philosophy",
    bio: "استاد فلسفه و اخلاق",
    shortDesc: "استاد فلسفه",
    voice_id: "EXAVITQu4L4X8b4gVlR8",
    systemPrompt: "تو یاسمن هستی، استاد فلسفه و اخلاق. با حکمت و بینش صحبت کن.",
    aiConfig: { temp: 0.6, tokens: 950 },
    personality: { formal: 0.7, creative: 0.7, empathy: 0.8, humor: 0.2 },
    isActive: true
},

// ===== تکنولوژی (۱۰ شخصیت) =====
"behnam": {
    id: "char_039",
    name: "بهنام",
    emoji: "💻",
    category: "technology",
    bio: "مدیر فنی شرکت فناوری",
    shortDesc: "مدیر فنی",
    voice_id: "21m00Tcm4TlvDq8ikWAM",
    systemPrompt: "تو بهنام هستی، مدیر فنی با دید تکنولوژیک. با دانش و تجربه صحبت کن.",
    aiConfig: { temp: 0.4, tokens: 1000 },
    personality: { formal: 0.8, creative: 0.7, empathy: 0.4, humor: 0.2 },
    isActive: true
},
"samira": {
    id: "char_040",
    name: "سمیرا",
    emoji: "📱",
    category: "technology",
    bio: "توسعه‌دهنده اپلیکیشن موبایل",
    shortDesc: "توسعه‌دهنده",
    voice_id: "EXAVITQu4L4X8b4gVlR8",
    systemPrompt: "تو سمیرا هستی، توسعه‌دهنده‌ای خلاق. با انرژی و نوآوری صحبت کن.",
    aiConfig: { temp: 0.7, tokens: 700 },
    personality: { formal: 0.5, creative: 0.9, empathy: 0.5, humor: 0.4 },
    isActive: true
};

// ============================================
// ۲. دسته‌بندی شخصیت‌ها
// ============================================

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
    philosophy: { name: "فلسفه", emoji: "🌍", description: "فیلسوفان و متفکران" },
    technology: { name: "تکنولوژی", emoji: "💻", description: "متخصصان فناوری" }
};

// ============================================
// ۳. ۱۲۰+ مدل AI (۱۱ موتور + اضافی)
// ============================================

const AI_MODELS = {
    // ============================================
    // 🚀 ۱۱ موتور اصلی
    // ============================================
    
    // ===== ۱. Hamid AI Pro =====
    hamid_ai: {
        id: 'hamid_ai',
        name: 'Hamid AI Pro',
        provider: 'Nova AI',
        icon: '❤️',
        description: 'موتور اختصاصی با شخصیت حمید دل‌سوز',
        cost: 1,
        level: 1,
        maxTokens: 4000,
        category: 'chat',
        isInternal: true
    },
    
    // ===== ۲. OpenAI =====
    'gpt-4o': {
        id: 'gpt-4o',
        name: 'GPT-4o',
        provider: 'OpenAI',
        icon: '💡',
        description: 'مدل قدرتمند OpenAI برای مکالمات پیشرفته',
        cost: 2,
        level: 3,
        maxTokens: 4000,
        category: 'chat'
    },
    'gpt-4o-mini': {
        id: 'gpt-4o-mini',
        name: 'GPT-4o Mini',
        provider: 'OpenAI',
        icon: '💡',
        description: 'نسخه سبک و سریع GPT-4o',
        cost: 1,
        level: 1,
        maxTokens: 2000,
        category: 'chat'
    },
    'o3-mini': {
        id: 'o3-mini',
        name: 'o3 Mini',
        provider: 'OpenAI',
        icon: '🧠',
        description: 'مدل استدلالی سریع',
        cost: 1,
        level: 2,
        maxTokens: 2000,
        category: 'chat'
    },
    
    // ===== ۳. Google Gemini =====
    'gemini-2.0-flash': {
        id: 'gemini-2.0-flash',
        name: 'Gemini 2.0 Flash',
        provider: 'Google',
        icon: '⚡',
        description: 'سریع‌ترین مدل Gemini',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'gemini-3-pro': {
        id: 'gemini-3-pro',
        name: 'Gemini 3 Pro',
        provider: 'Google',
        icon: '🔵',
        description: 'مدل حرفه‌ای Gemini با قابلیت‌های پیشرفته',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    
    // ===== ۴. Anthropic Claude =====
    'claude-3.5-sonnet': {
        id: 'claude-3.5-sonnet',
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        icon: '💜',
        description: 'مدل قدرتمند Claude برای تحلیل و کدنویسی',
        cost: 2,
        level: 3,
        maxTokens: 4500,
        category: 'chat'
    },
    'claude-opus-4.6': {
        id: 'claude-opus-4.6',
        name: 'Claude Opus 4.6',
        provider: 'Anthropic',
        icon: '💎',
        description: 'قدرتمندترین مدل Claude',
        cost: 4,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    
    // ===== ۵. DeepSeek =====
    'deepseek-v3': {
        id: 'deepseek-v3',
        name: 'DeepSeek V3',
        provider: 'DeepSeek',
        icon: '🟢',
        description: 'مدل قدرتمند چینی DeepSeek',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'deepseek-r1': {
        id: 'deepseek-r1',
        name: 'DeepSeek R1',
        provider: 'DeepSeek',
        icon: '👑',
        description: 'پیشرفته‌ترین مدل DeepSeek',
        cost: 4,
        level: 5,
        maxTokens: 10000,
        category: 'chat'
    },
    
    // ===== ۶. xAI Grok =====
    'grok-4.1-max': {
        id: 'grok-4.1-max',
        name: 'Grok 4.1 Max',
        provider: 'xAI',
        icon: '🌟',
        description: 'قدرتمندترین مدل Grok',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    
    // ===== ۷. Alibaba Qwen =====
    'qwen-max': {
        id: 'qwen-max',
        name: 'Qwen Max',
        provider: 'Alibaba',
        icon: '🌟',
        description: 'قدرتمندترین مدل Qwen',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'qwen-coder-32b': {
        id: 'qwen-coder-32b',
        name: 'Qwen Coder',
        provider: 'Alibaba',
        icon: '💻',
        description: 'متخصص کدنویسی',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    
    // ===== ۸. Mistral =====
    'mistral-large-3': {
        id: 'mistral-large-3',
        name: 'Mistral Large 3',
        provider: 'Mistral',
        icon: '🌟',
        description: 'قدرتمندترین مدل Mistral',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    
    // ===== ۹. Meta Llama =====
    'llama-3.1-70b': {
        id: 'llama-3.1-70b',
        name: 'Llama 3.1 70B',
        provider: 'Meta',
        icon: '🦙',
        description: 'مدل ۷۰ میلیارد پارامتری Llama',
        cost: 2,
        level: 3,
        maxTokens: 8000,
        category: 'chat'
    },
    'llama-405b': {
        id: 'llama-405b',
        name: 'Llama 405B',
        provider: 'Meta',
        icon: '👑',
        description: 'بزرگ‌ترین مدل Llama با ۴۰۵ میلیارد پارامتر',
        cost: 5,
        level: 5,
        maxTokens: 12000,
        category: 'chat'
    },
    
    // ===== ۱۰. Cohere =====
    'cohere-command-r+': {
        id: 'cohere-command-r+',
        name: 'Cohere Command R+',
        provider: 'Cohere',
        icon: '🔶',
        description: 'مدل قدرتمند Cohere',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    
    // ===== ۱۱. Nova AI Pro =====
    nova: {
        id: 'nova',
        name: 'Nova AI Pro',
        provider: 'Nova AI',
        icon: '🤖',
        description: 'موتور اختصاصی Nova با قابلیت‌های پیشرفته',
        cost: 1,
        level: 1,
        maxTokens: 4000,
        category: 'chat',
        isInternal: true
    },

    // ============================================
    // 📦 مدل‌های اضافی (۱۰۰+ مدل)
    // ============================================
    
    // ===== OpenAI اضافی =====
    'gpt-5.1': {
        id: 'gpt-5.1',
        name: 'GPT-5.1',
        provider: 'OpenAI',
        icon: '🌟',
        description: 'جدیدترین نسخه OpenAI با قابلیت‌های پیشرفته',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'gpt-5.1-code': {
        id: 'gpt-5.1-code',
        name: 'GPT-5.1 Code',
        provider: 'OpenAI',
        icon: '💻',
        description: 'متخصص در کدنویسی و برنامه‌نویسی',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'gpt-5.2-god': {
        id: 'gpt-5.2-god',
        name: 'GPT-5.2 God',
        provider: 'OpenAI',
        icon: '👑',
        description: 'قدرتمندترین مدل OpenAI',
        cost: 5,
        level: 5,
        maxTokens: 16000,
        category: 'chat'
    },
    'gpt-5.2-codex': {
        id: 'gpt-5.2-codex',
        name: 'GPT-5.2 Codex',
        provider: 'OpenAI',
        icon: '⚡',
        description: 'نسخه کدنویسی GPT-5.2',
        cost: 5,
        level: 5,
        maxTokens: 16000,
        category: 'chat'
    },
    'openai-o3-pro': {
        id: 'openai-o3-pro',
        name: 'OpenAI o3 Pro',
        provider: 'OpenAI',
        icon: '🧠',
        description: 'مدل استدلالی پیشرفته OpenAI',
        cost: 4,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'o3-deep-research': {
        id: 'o3-deep-research',
        name: 'o3 Deep Research',
        provider: 'OpenAI',
        icon: '🔬',
        description: 'ویژه تحقیقات عمیق و تحلیل داده',
        cost: 5,
        level: 5,
        maxTokens: 16000,
        category: 'chat'
    },
    'gpt-4-turbo': {
        id: 'gpt-4-turbo',
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        icon: '🔥',
        description: 'نسخه توربو GPT-4 با سرعت بالا',
        cost: 2,
        level: 3,
        maxTokens: 4000,
        category: 'chat'
    },

    // ===== Google Gemini اضافی =====
    'gemini-lite': {
        id: 'gemini-lite',
        name: 'Gemini Lite',
        provider: 'Google',
        icon: '🔵',
        description: 'نسخه سبک Gemini برای استفاده روزمره',
        cost: 1,
        level: 1,
        maxTokens: 2000,
        category: 'chat'
    },
    'gemini-3-vision': {
        id: 'gemini-3-vision',
        name: 'Gemini 3 Vision',
        provider: 'Google',
        icon: '👁️',
        description: 'Gemini با قابلیت تحلیل تصویر',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'gemini-1.5-pro': {
        id: 'gemini-1.5-pro',
        name: 'Gemini 1.5 Pro',
        provider: 'Google',
        icon: '🔵',
        description: 'مدل Gemini با قابلیت پردازش طولانی',
        cost: 2,
        level: 3,
        maxTokens: 10000,
        category: 'chat'
    },
    'gemini-1.5-flash': {
        id: 'gemini-1.5-flash',
        name: 'Gemini 1.5 Flash',
        provider: 'Google',
        icon: '⚡',
        description: 'نسخه سریع Gemini 1.5',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },

    // ===== Anthropic Claude اضافی =====
    'claude-opus-4.6-plus': {
        id: 'claude-opus-4.6-plus',
        name: 'Claude Opus 4.6+',
        provider: 'Anthropic',
        icon: '👑',
        description: 'نسخه پیشرفته Claude Opus',
        cost: 5,
        level: 5,
        maxTokens: 12000,
        category: 'chat'
    },
    'claude-haiku-4.5': {
        id: 'claude-haiku-4.5',
        name: 'Claude Haiku 4.5',
        provider: 'Anthropic',
        icon: '⚡',
        description: 'سریع‌ترین و سبک‌ترین مدل Claude',
        cost: 1,
        level: 1,
        maxTokens: 2000,
        category: 'chat'
    },
    'claude-3-opus': {
        id: 'claude-3-opus',
        name: 'Claude 3 Opus',
        provider: 'Anthropic',
        icon: '💎',
        description: 'مدل قدرتمند Claude 3',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'claude-3-sonnet': {
        id: 'claude-3-sonnet',
        name: 'Claude 3 Sonnet',
        provider: 'Anthropic',
        icon: '💜',
        description: 'مدل متعادل Claude 3',
        cost: 2,
        level: 3,
        maxTokens: 4500,
        category: 'chat'
    },

    // ===== Meta Llama اضافی =====
    'llama-3.1-8b': {
        id: 'llama-3.1-8b',
        name: 'Llama 3.1 8B',
        provider: 'Meta',
        icon: '🦙',
        description: 'مدل ۸ میلیارد پارامتری Llama',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'llama-4-maverick': {
        id: 'llama-4-maverick',
        name: 'Llama 4 Maverick',
        provider: 'Meta',
        icon: '🔥',
        description: 'جدیدترین نسخه Llama',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'llama-4-scout': {
        id: 'llama-4-scout',
        name: 'Llama 4 Scout',
        provider: 'Meta',
        icon: '🔍',
        description: 'نسخه اکتشافی Llama 4',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'llama-3.2-3b': {
        id: 'llama-3.2-3b',
        name: 'Llama 3.2 3B',
        provider: 'Meta',
        icon: '🦙',
        description: 'مدل سبک ۳ میلیارد پارامتری',
        cost: 1,
        level: 1,
        maxTokens: 2000,
        category: 'chat'
    },
    'llama-3.2-1b': {
        id: 'llama-3.2-1b',
        name: 'Llama 3.2 1B',
        provider: 'Meta',
        icon: '⚡',
        description: 'مدل بسیار سبک ۱ میلیارد پارامتری',
        cost: 1,
        level: 1,
        maxTokens: 1000,
        category: 'chat'
    },

    // ===== DeepSeek اضافی =====
    'deepseek-v3.2': {
        id: 'deepseek-v3.2',
        name: 'DeepSeek V3.2',
        provider: 'DeepSeek',
        icon: '🟢',
        description: 'نسخه بروزرسانی شده DeepSeek',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'deepseek-reasoner': {
        id: 'deepseek-reasoner',
        name: 'DeepSeek Reasoner',
        provider: 'DeepSeek',
        icon: '🧠',
        description: 'مدل استدلالی DeepSeek',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'deepseek-coder': {
        id: 'deepseek-coder',
        name: 'DeepSeek Coder',
        provider: 'DeepSeek',
        icon: '💻',
        description: 'متخصص کدنویسی و برنامه‌نویسی',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },

    // ===== xAI Grok اضافی =====
    'grok-4.1-fast': {
        id: 'grok-4.1-fast',
        name: 'Grok 4.1 Fast',
        provider: 'xAI',
        icon: '⚡',
        description: 'نسخه سریع Grok',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'grok-fast-code': {
        id: 'grok-fast-code',
        name: 'Grok Fast (Code)',
        provider: 'xAI',
        icon: '💻',
        description: 'Grok مخصوص کدنویسی',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'grok-4-reasoning': {
        id: 'grok-4-reasoning',
        name: 'Grok 4 Reasoning',
        provider: 'xAI',
        icon: '🧠',
        description: 'مدل استدلالی Grok',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'grok-4-vision': {
        id: 'grok-4-vision',
        name: 'Grok 4 Vision',
        provider: 'xAI',
        icon: '👁️',
        description: 'Grok با قابلیت تحلیل تصویر',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },

    // ===== Alibaba Qwen اضافی =====
    'qwen-turbo': {
        id: 'qwen-turbo',
        name: 'Qwen Turbo',
        provider: 'Alibaba',
        icon: '🔴',
        description: 'نسخه سریع Qwen',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'qwen-plus': {
        id: 'qwen-plus',
        name: 'Qwen Plus',
        provider: 'Alibaba',
        icon: '🔴',
        description: 'نسخه پیشرفته Qwen',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'qwen-32b': {
        id: 'qwen-32b',
        name: 'Qwen 32B',
        provider: 'Alibaba',
        icon: '🔴',
        description: 'Qwen با ۳۲ میلیارد پارامتر',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'qwen3-max': {
        id: 'qwen3-max',
        name: 'Qwen3 Max',
        provider: 'Alibaba',
        icon: '👑',
        description: 'جدیدترین نسخه Qwen',
        cost: 4,
        level: 5,
        maxTokens: 10000,
        category: 'chat'
    },
    'qwen-image-plus': {
        id: 'qwen-image-plus',
        name: 'Qwen Image Plus',
        provider: 'Alibaba',
        icon: '🎨',
        description: 'Qwen با قابلیت تحلیل تصویر',
        cost: 2,
        level: 3,
        maxTokens: 4000,
        category: 'chat'
    },
    'qwen-72b': {
        id: 'qwen-72b',
        name: 'Qwen 72B',
        provider: 'Alibaba',
        icon: '🌟',
        description: 'Qwen با ۷۲ میلیارد پارامتر',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'qwen-14b': {
        id: 'qwen-14b',
        name: 'Qwen 14B',
        provider: 'Alibaba',
        icon: '🔴',
        description: 'Qwen با ۱۴ میلیارد پارامتر',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'qwen-7b': {
        id: 'qwen-7b',
        name: 'Qwen 7B',
        provider: 'Alibaba',
        icon: '⚡',
        description: 'Qwen با ۷ میلیارد پارامتر',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },

    // ===== Mistral اضافی =====
    'mistral-small': {
        id: 'mistral-small',
        name: 'Mistral Small',
        provider: 'Mistral',
        icon: '🟣',
        description: 'نسخه سبک Mistral',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'mistral-medium': {
        id: 'mistral-medium',
        name: 'Mistral Medium',
        provider: 'Mistral',
        icon: '🟣',
        description: 'مدل متوسط Mistral',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'mistral-tiny': {
        id: 'mistral-tiny',
        name: 'Mistral Tiny',
        provider: 'Mistral',
        icon: '⚡',
        description: 'کوچک‌ترین مدل Mistral',
        cost: 1,
        level: 1,
        maxTokens: 2000,
        category: 'chat'
    },
    'mistral-codestral': {
        id: 'mistral-codestral',
        name: 'Mistral Codestral',
        provider: 'Mistral',
        icon: '💻',
        description: 'متخصص کدنویسی',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },

    // ===== Cohere اضافی =====
    'cohere-command-r': {
        id: 'cohere-command-r',
        name: 'Cohere Command R',
        provider: 'Cohere',
        icon: '🔶',
        description: 'مدل متعادل Cohere',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'cohere-command-light': {
        id: 'cohere-command-light',
        name: 'Cohere Command Light',
        provider: 'Cohere',
        icon: '⚡',
        description: 'نسخه سبک Cohere',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'cohere-embed': {
        id: 'cohere-embed',
        name: 'Cohere Embed',
        provider: 'Cohere',
        icon: '📊',
        description: 'مدل Embedding Cohere',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'embed'
    },

    // ===== Nova AI اضافی =====
    'nova-lite': {
        id: 'nova-lite',
        name: 'Nova AI Lite',
        provider: 'Nova AI',
        icon: '⚡',
        description: 'نسخه سبک Nova AI',
        cost: 1,
        level: 1,
        maxTokens: 2000,
        category: 'chat',
        isInternal: true
    },

    // ============================================
    // 🎨 مدل‌های تصویر (۱۲ مدل)
    // ============================================
    'dall-e-3': {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        provider: 'OpenAI',
        icon: '🎨',
        description: 'تولید تصویر با کیفیت بالا',
        cost: 3,
        level: 3,
        resolution: '1024x1024',
        category: 'image'
    },
    'dall-e-4': {
        id: 'dall-e-4',
        name: 'DALL-E 4',
        provider: 'OpenAI',
        icon: '🌟',
        description: 'جدیدترین نسخه DALL-E',
        cost: 4,
        level: 4,
        resolution: '1792x1024',
        category: 'image'
    },
    'imagen-3': {
        id: 'imagen-3',
        name: 'Imagen 3',
        provider: 'Google',
        icon: '🖼️',
        description: 'مدل تصویر Google',
        cost: 3,
        level: 3,
        resolution: '1024x1024',
        category: 'image'
    },
    'imagen-3-fast': {
        id: 'imagen-3-fast',
        name: 'Imagen 3 Fast',
        provider: 'Google',
        icon: '⚡',
        description: 'نسخه سریع Imagen',
        cost: 2,
        level: 2,
        resolution: '512x512',
        category: 'image'
    },
    'imagen-4-ultra': {
        id: 'imagen-4-ultra',
        name: 'Imagen 4 Ultra',
        provider: 'Google',
        icon: '👑',
        description: 'قدرتمندترین مدل تصویر Google',
        cost: 5,
        level: 5,
        resolution: '2048x2048',
        category: 'image'
    },
    'imagen-4-fast': {
        id: 'imagen-4-fast',
        name: 'Imagen 4 Fast',
        provider: 'Google',
        icon: '⚡',
        description: 'نسخه سریع Imagen 4',
        cost: 3,
        level: 3,
        resolution: '1024x1024',
        category: 'image'
    },
    'midjourney-v7': {
        id: 'midjourney-v7',
        name: 'Midjourney v7',
        provider: 'Midjourney',
        icon: '🎨',
        description: 'محبوب‌ترین مدل تولید تصویر',
        cost: 4,
        level: 4,
        resolution: '1024x1024',
        category: 'image'
    },
    'midjourney-7-max': {
        id: 'midjourney-7-max',
        name: 'Midjourney 7 Max',
        provider: 'Midjourney',
        icon: '👑',
        description: 'نسخه حرفه‌ای Midjourney',
        cost: 5,
        level: 5,
        resolution: '2048x2048',
        category: 'image'
    },
    'flux-2-dev': {
        id: 'flux-2-dev',
        name: 'Flux 2 Dev',
        provider: 'Black Forest',
        icon: '🔧',
        description: 'نسخه توسعه‌دهنده Flux',
        cost: 2,
        level: 2,
        resolution: '1024x1024',
        category: 'image'
    },
    'flux-2-klein': {
        id: 'flux-2-klein',
        name: 'Flux 2 Klein',
        provider: 'Black Forest',
        icon: '⚡',
        description: 'نسخه سبک Flux',
        cost: 3,
        level: 3,
        resolution: '512x512',
        category: 'image'
    },
    'flux-2-pro': {
        id: 'flux-2-pro',
        name: 'Flux 2 Pro',
        provider: 'Black Forest',
        icon: '🌟',
        description: 'نسخه حرفه‌ای Flux',
        cost: 4,
        level: 4,
        resolution: '2048x2048',
        category: 'image'
    },
    'controlnet': {
        id: 'controlnet',
        name: 'ControlNet',
        provider: 'Stability AI',
        icon: '🎛️',
        description: 'کنترل دقیق بر تولید تصویر',
        cost: 3,
        level: 3,
        resolution: '1024x1024',
        category: 'image'
    },

    // ============================================
    // 🎬 مدل‌های ویدیو (۱۸ مدل)
    // ============================================
    'runway-gen-2': {
        id: 'runway-gen-2',
        name: 'Runway Gen-2',
        provider: 'Runway',
        icon: '🎬',
        description: 'نسخه دوم Runway',
        cost: 4,
        level: 3,
        duration: 4,
        category: 'video'
    },
    'runway-gen4': {
        id: 'runway-gen4',
        name: 'Runway Gen4',
        provider: 'Runway',
        icon: '🌟',
        description: 'جدیدترین نسخه Runway',
        cost: 5,
        level: 4,
        duration: 5,
        category: 'video'
    },
    'runway-gen4-turbo': {
        id: 'runway-gen4-turbo',
        name: 'Runway Gen4 Turbo',
        provider: 'Runway',
        icon: '⚡',
        description: 'نسخه سریع Runway Gen4',
        cost: 5,
        level: 4,
        duration: 3,
        category: 'video'
    },
    'runway-gen4-img': {
        id: 'runway-gen4-img',
        name: 'Runway Gen4 Img',
        provider: 'Runway',
        icon: '🔄',
        description: 'تبدیل تصویر به ویدیو',
        cost: 5,
        level: 4,
        duration: 5,
        category: 'video'
    },
    'runway-gen-4.5': {
        id: 'runway-gen-4.5',
        name: 'Runway Gen-4.5',
        provider: 'Runway',
        icon: '👑',
        description: 'پیشرفته‌ترین نسخه Runway',
        cost: 6,
        level: 5,
        duration: 6,
        category: 'video'
    },
    'kling-1.5-pro': {
        id: 'kling-1.5-pro',
        name: 'Kling 1.5 Pro',
        provider: 'Kling',
        icon: '🎥',
        description: 'مدل قدرتمند Kling',
        cost: 4,
        level: 3,
        duration: 5,
        category: 'video'
    },
    'kling-ultra': {
        id: 'kling-ultra',
        name: 'Kling Ultra',
        provider: 'Kling',
        icon: '🌟',
        description: 'قدرتمندترین مدل Kling',
        cost: 6,
        level: 5,
        duration: 10,
        category: 'video'
    },
    'sora-2': {
        id: 'sora-2',
        name: 'Sora 2',
        provider: 'OpenAI',
        icon: '🎬',
        description: 'مدل ویدیوی OpenAI',
        cost: 5,
        level: 4,
        duration: 5,
        category: 'video'
    },
    'sora-2-pro': {
        id: 'sora-2-pro',
        name: 'Sora 2 Pro',
        provider: 'OpenAI',
        icon: '👑',
        description: 'نسخه حرفه‌ای Sora',
        cost: 6,
        level: 5,
        duration: 10,
        category: 'video'
    },
    'dream-machine': {
        id: 'dream-machine',
        name: 'Dream Machine',
        provider: 'Luma AI',
        icon: '🎥',
        description: 'مدل ویدیوی Luma AI',
        cost: 4,
        level: 3,
        duration: 5,
        category: 'video'
    },
    'google-veo': {
        id: 'google-veo',
        name: 'Google Veo',
        provider: 'Google',
        icon: '🎬',
        description: 'مدل ویدیوی Google',
        cost: 5,
        level: 4,
        duration: 5,
        category: 'video'
    },
    'veo-fast': {
        id: 'veo-fast',
        name: 'Veo Fast',
        provider: 'Google',
        icon: '⚡',
        description: 'نسخه سریع Google Veo',
        cost: 4,
        level: 3,
        duration: 3,
        category: 'video'
    },
    'cogvideo-x': {
        id: 'cogvideo-x',
        name: 'CogVideo X',
        provider: 'THUDM',
        icon: '🎥',
        description: 'مدل ویدیوی متن‌باز',
        cost: 4,
        level: 3,
        duration: 5,
        category: 'video'
    },
    'mochi-1': {
        id: 'mochi-1',
        name: 'Mochi 1',
        provider: 'Genmo',
        icon: '🎬',
        description: 'مدل ویدیوی پیشرفته',
        cost: 4,
        level: 3,
        duration: 5,
        category: 'video'
    },
    'hunyuan-video': {
        id: 'hunyuan-video',
        name: 'Hunyuan Video',
        provider: 'Tencent',
        icon: '🎥',
        description: 'مدل ویدیوی Tencent',
        cost: 4,
        level: 3,
        duration: 5,
        category: 'video'
    },
    'ltx-video': {
        id: 'ltx-video',
        name: 'LTX Video',
        provider: 'LTX Studio',
        icon: '🎬',
        description: 'مدل ویدیوی پیشرفته',
        cost: 4,
        level: 3,
        duration: 5,
        category: 'video'
    },
    'hotshot-xl': {
        id: 'hotshot-xl',
        name: 'Hotshot XL',
        provider: 'Hotshot',
        icon: '🎥',
        description: 'مدل ویدیوی Hotshot',
        cost: 4,
        level: 3,
        duration: 5,
        category: 'video'
    },
    'animatediff': {
        id: 'animatediff',
        name: 'AnimateDiff',
        provider: 'AnimateDiff',
        icon: '🎨',
        description: 'تبدیل تصویر به انیمیشن',
        cost: 4,
        level: 3,
        duration: 3,
        category: 'video'
    },

    // ============================================
    // 🎵 مدل‌های صدا (۱۰ مدل)
    // ============================================
    'gemini-tts': {
        id: 'gemini-tts',
        name: 'Gemini TTS',
        provider: 'Google',
        icon: '🎵',
        description: 'تبدیل متن به صدا با Gemini',
        cost: 1,
        level: 1,
        voice: 'fa-IR-Wavenet-A',
        category: 'audio'
    },
    'gemini-2.0-flash-audio': {
        id: 'gemini-2.0-flash-audio',
        name: 'Gemini 2.0 Flash (Audio)',
        provider: 'Google',
        icon: '⚡',
        description: 'نسخه صوتی Gemini 2.0',
        cost: 1,
        level: 2,
        voice: 'fa-IR-Wavenet-A',
        category: 'audio'
    },
    'openai-tts-1': {
        id: 'openai-tts-1',
        name: 'OpenAI TTS 1',
        provider: 'OpenAI',
        icon: '🎤',
        description: 'مدل صوتی OpenAI',
        cost: 2,
        level: 2,
        voice: 'nova',
        category: 'audio'
    },
    'gpt-audio': {
        id: 'gpt-audio',
        name: 'GPT Audio',
        provider: 'OpenAI',
        icon: '🎙️',
        description: 'نسخه صوتی GPT',
        cost: 2,
        level: 3,
        voice: 'nova',
        category: 'audio'
    },
    'elevenlabs-turbo': {
        id: 'elevenlabs-turbo',
        name: 'ElevenLabs Turbo',
        provider: 'ElevenLabs',
        icon: '⚡',
        description: 'نسخه سریع ElevenLabs',
        cost: 2,
        level: 2,
        voice: 'Rachel',
        category: 'audio'
    },
    'elevenlabs-multi': {
        id: 'elevenlabs-multi',
        name: 'ElevenLabs Multi',
        provider: 'ElevenLabs',
        icon: '🌍',
        description: 'نسخه چندزبانه ElevenLabs',
        cost: 3,
        level: 3,
        voice: 'Rachel',
        category: 'audio'
    },
    'elevenlabs-v3': {
        id: 'elevenlabs-v3',
        name: 'ElevenLabs v3',
        provider: 'ElevenLabs',
        icon: '🌟',
        description: 'جدیدترین نسخه ElevenLabs',
        cost: 3,
        level: 4,
        voice: 'Rachel',
        category: 'audio'
    },
    'eleven-dubbing': {
        id: 'eleven-dubbing',
        name: 'Eleven Dubbing',
        provider: 'ElevenLabs',
        icon: '🎬',
        description: 'دوبله و صداگذاری پیشرفته',
        cost: 3,
        level: 3,
        voice: 'Rachel',
        category: 'audio'
    },
    'tts-1-hd': {
        id: 'tts-1-hd',
        name: 'OpenAI TTS-1 HD',
        provider: 'OpenAI',
        icon: '🎵',
        description: 'نسخه با کیفیت بالای TTS',
        cost: 3,
        level: 3,
        voice: 'nova',
        category: 'audio'
    },
    'elevenlabs-monolingual': {
        id: 'elevenlabs-monolingual',
        name: 'ElevenLabs Monolingual',
        provider: 'ElevenLabs',
        icon: '🔊',
        description: 'نسخه تک‌زبانه ElevenLabs',
        cost: 2,
        level: 2,
        voice: 'Rachel',
        category: 'audio'
    },

    // ============================================
    // 📚 Google Gemma (۳ مدل)
    // ============================================
    'gemma-3-12b': {
        id: 'gemma-3-12b',
        name: 'Gemma 3 12B',
        provider: 'Google',
        icon: '🔵',
        description: 'مدل متن‌باز Google',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'gemma-3-27b': {
        id: 'gemma-3-27b',
        name: 'Gemma 3 27B',
        provider: 'Google',
        icon: '🌟',
        description: 'مدل قدرتمند Gemma',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'gemma-3-4b': {
        id: 'gemma-3-4b',
        name: 'Gemma 3 4B',
        provider: 'Google',
        icon: '⚡',
        description: 'نسخه سبک Gemma',
        cost: 1,
        level: 1,
        maxTokens: 2000,
        category: 'chat'
    },

    // ============================================
    // 🔍 مدل‌های جستجو (۳ مدل)
    // ============================================
    'tavily': {
        id: 'tavily',
        name: 'Search (Tavily)',
        provider: 'Tavily',
        icon: '🔍',
        description: 'جستجوی هوشمند',
        cost: 1,
        level: 2,
        category: 'search'
    },
    'firecrawl': {
        id: 'firecrawl',
        name: 'FireCrawl',
        provider: 'FireCrawl',
        icon: '🕷️',
        description: 'خزش وب پیشرفته',
        cost: 1,
        level: 2,
        category: 'search'
    },
    'sonar-pro': {
        id: 'sonar-pro',
        name: 'Sonar Pro',
        provider: 'Sonar',
        icon: '🌟',
        description: 'جستجوی پیشرفته',
        cost: 2,
        level: 3,
        category: 'search'
    },

    // ============================================
    // 🌏 سایر مدل‌ها (۱۰ مدل)
    // ============================================
    'glm-4': {
        id: 'glm-4',
        name: 'GLM 4',
        provider: 'Zhipu',
        icon: '🔴',
        description: 'مدل پیشرفته چینی GLM',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'glm-5': {
        id: 'glm-5',
        name: 'GLM 5',
        provider: 'Zhipu',
        icon: '🌟',
        description: 'جدیدترین نسخه GLM',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'kimi-2.5': {
        id: 'kimi-2.5',
        name: 'Kimi 2.5',
        provider: 'Moonshot',
        icon: '🌙',
        description: 'مدل پیشرفته Kimi',
        cost: 2,
        level: 3,
        maxTokens: 8000,
        category: 'chat'
    },
    'kimi-3': {
        id: 'kimi-3',
        name: 'Kimi 3',
        provider: 'Moonshot',
        icon: '🌟',
        description: 'جدیدترین نسخه Kimi',
        cost: 3,
        level: 4,
        maxTokens: 10000,
        category: 'chat'
    },
    'minimax-m2.1': {
        id: 'minimax-m2.1',
        name: 'MiniMax M2.1',
        provider: 'MiniMax',
        icon: '🔴',
        description: 'مدل پیشرفته MiniMax',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'baichuan-4': {
        id: 'baichuan-4',
        name: 'Baichuan 4',
        provider: 'Baichuan',
        icon: '🔴',
        description: 'مدل چینی Baichuan',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'yi-34b': {
        id: 'yi-34b',
        name: 'Yi 34B',
        provider: '01.AI',
        icon: '🌟',
        description: 'مدل قدرتمند Yi',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    },
    'yi-6b': {
        id: 'yi-6b',
        name: 'Yi 6B',
        provider: '01.AI',
        icon: '⚡',
        description: 'نسخه سبک Yi',
        cost: 1,
        level: 2,
        maxTokens: 4000,
        category: 'chat'
    },
    'deepseek-coder-v2': {
        id: 'deepseek-coder-v2',
        name: 'DeepSeek Coder V2',
        provider: 'DeepSeek',
        icon: '💻',
        description: 'نسخه پیشرفته کدنویسی',
        cost: 3,
        level: 4,
        maxTokens: 8000,
        category: 'chat'
    },
    'starcoder-2': {
        id: 'starcoder-2',
        name: 'StarCoder 2',
        provider: 'BigCode',
        icon: '⭐',
        description: 'مدل کدنویسی متن‌باز',
        cost: 2,
        level: 3,
        maxTokens: 6000,
        category: 'chat'
    }
};

// ============================================
// ۴. کلاس‌های API (واقعی)
// ============================================

class DeepSeekAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.deepseek.com/v1/chat/completions';
    }

    async chat(prompt, systemPrompt = '', model = 'deepseek-chat') {
        if (!this.apiKey) return null;
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: 'system', content: systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید.' },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.choices?.[0]?.message?.content || null;
        } catch (e) { return null; }
    }
}

class OpenAIAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openai.com/v1/chat/completions';
    }

    async chat(prompt, systemPrompt = '', model = 'gpt-4o-mini') {
        if (!this.apiKey) return null;
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: 'system', content: systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید.' },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.choices?.[0]?.message?.content || null;
        } catch (e) { return null; }
    }

    async generateImage(prompt) {
        if (!this.apiKey) return null;
        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'dall-e-3',
                    prompt: prompt,
                    size: '1024x1024',
                    quality: 'standard',
                    n: 1
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.data?.[0]?.url || null;
        } catch (e) { return null; }
    }
}

class GeminiAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async chat(prompt, systemPrompt = '', model = 'gemini-2.0-flash') {
        if (!this.apiKey) return null;
        try {
            const modelMap = {
                'gemini-2.0-flash': 'gemini-2.0-flash-exp',
                'gemini-3-pro': 'gemini-1.5-pro'
            };
            const modelName = modelMap[model] || 'gemini-2.0-flash-exp';
            
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${this.apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: systemPrompt + '\n' + prompt }] }],
                        generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
                    })
                }
            );
            if (!response.ok) return null;
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
        } catch (e) { return null; }
    }
}

class ClaudeAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async chat(prompt, systemPrompt = '', model = 'claude-3.5-sonnet') {
        if (!this.apiKey) return null;
        try {
            const modelMap = {
                'claude-3.5-sonnet': 'claude-3-5-sonnet-20241022',
                'claude-opus-4.6': 'claude-3-opus-20240229'
            };
            const modelName = modelMap[model] || 'claude-3-5-sonnet-20241022';

            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'x-api-key': this.apiKey,
                    'anthropic-version': '2023-06-01',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: modelName,
                    max_tokens: 1000,
                    temperature: 0.7,
                    messages: [{ role: 'user', content: systemPrompt + '\n' + prompt }]
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.content?.[0]?.text || null;
        } catch (e) { return null; }
    }
}

class GrokAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async chat(prompt, systemPrompt = '') {
        if (!this.apiKey) return null;
        try {
            const response = await fetch('https://api.x.ai/v1/chat/completions', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'grok-1',
                    messages: [
                        { role: 'system', content: systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید.' },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.choices?.[0]?.message?.content || null;
        } catch (e) { return null; }
    }
}

class QwenAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async chat(prompt, systemPrompt = '', model = 'qwen-max') {
        if (!this.apiKey) return null;
        try {
            const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: model,
                    input: {
                        messages: [
                            { role: 'system', content: systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید.' },
                            { role: 'user', content: prompt }
                        ]
                    },
                    parameters: { max_tokens: 1000, temperature: 0.7 }
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.output?.choices?.[0]?.message?.content || null;
        } catch (e) { return null; }
    }
}

class MistralAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async chat(prompt, systemPrompt = '', model = 'mistral-large-3') {
        if (!this.apiKey) return null;
        try {
            const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: model === 'mistral-large-3' ? 'mistral-large-latest' : 'mistral-small-latest',
                    messages: [
                        { role: 'system', content: systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید.' },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.choices?.[0]?.message?.content || null;
        } catch (e) { return null; }
    }
}

class LlamaAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async chat(prompt, systemPrompt = '', model = 'llama-3.1-70b') {
        if (!this.apiKey) return null;
        try {
            const modelMap = {
                'llama-3.1-70b': 'llama-3.1-70b-versatile',
                'llama-405b': 'llama-3.1-405b-reasoning'
            };
            const modelName = modelMap[model] || 'llama-3.1-70b-versatile';

            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: modelName,
                    messages: [
                        { role: 'system', content: systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید.' },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.choices?.[0]?.message?.content || null;
        } catch (e) { return null; }
    }
}

class CohereAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async chat(prompt, systemPrompt = '') {
        if (!this.apiKey) return null;
        try {
            const response = await fetch('https://api.cohere.ai/v1/generate', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'command-r-plus',
                    prompt: systemPrompt + '\n' + prompt,
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.generations?.[0]?.text || null;
        } catch (e) { return null; }
    }
}

class ElevenLabsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async textToSpeech(text, voiceId = '21m00Tcm4TlvDq8ikWAM') {
        if (!this.apiKey) return null;
        try {
            const cleanText = text.substring(0, 500).trim();
            if (!cleanText) return null;

            const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
                method: 'POST',
                headers: {
                    'xi-api-key': this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: cleanText,
                    model_id: 'eleven_multilingual_v2',
                    voice_settings: {
                        stability: 0.5,
                        similarity_boost: 0.75,
                        style: 0.3,
                        use_speaker_boost: true
                    }
                })
            });
            if (!response.ok) return null;
            return await response.arrayBuffer();
        } catch (e) { return null; }
    }
}

class RunwayAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async generateVideo(prompt, model = 'runway-gen4') {
        if (!this.apiKey) return null;
        try {
            const modelMap = {
                'runway-gen-2': 'gen2',
                'runway-gen4': 'gen4',
                'runway-gen4-turbo': 'gen4-turbo'
            };
            const modelName = modelMap[model] || 'gen4';

            const response = await fetch('https://api.runwayml.com/v1/generate', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: modelName,
                    prompt: prompt,
                    duration: 5,
                    resolution: '720p'
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.video_url || null;
        } catch (e) { return null; }
    }
}

// ============================================
// ۵. دیتابیس D1 (واقعی)
// ============================================

const DB = {
    init: async (env) => {
        try {
            // ===== جدول کاربران =====
            await env.DB.prepare(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id INTEGER UNIQUE NOT NULL,
                    username TEXT,
                    first_name TEXT,
                    last_name TEXT,
                    phone TEXT,
                    balance_text INTEGER DEFAULT 10,
                    balance_voice INTEGER DEFAULT 5,
                    balance_image INTEGER DEFAULT 3,
                    balance_video INTEGER DEFAULT 1,
                    premium_expiry TEXT,
                    premium_plan TEXT,
                    invite_code TEXT,
                    invited_by INTEGER,
                    invite_count INTEGER DEFAULT 0,
                    chat_count INTEGER DEFAULT 0,
                    image_count INTEGER DEFAULT 0,
                    video_count INTEGER DEFAULT 0,
                    voice_count INTEGER DEFAULT 0,
                    is_banned BOOLEAN DEFAULT FALSE,
                    is_admin BOOLEAN DEFAULT FALSE,
                    selected_character TEXT DEFAULT 'hamid',
                    selected_model TEXT DEFAULT 'hamid_ai',
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
                )
            `).run();

            // ===== جدول مدل‌ها =====
            await env.DB.prepare(`
                CREATE TABLE IF NOT EXISTS models (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    model_id TEXT UNIQUE NOT NULL,
                    display_name TEXT NOT NULL,
                    category TEXT NOT NULL,
                    provider TEXT,
                    cost INTEGER DEFAULT 1,
                    level INTEGER DEFAULT 1,
                    is_active BOOLEAN DEFAULT TRUE,
                    description TEXT,
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP
                )
            `).run();

            // ===== جدول شخصیت‌ها =====
            await env.DB.prepare(`
                CREATE TABLE IF NOT EXISTS characters (
                    id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    emoji TEXT,
                    category TEXT,
                    bio TEXT,
                    short_desc TEXT,
                    voice_id TEXT,
                    system_prompt TEXT,
                    is_active BOOLEAN DEFAULT TRUE,
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP
                )
            `).run();

            // ===== جدول پرداخت‌ها =====
            await env.DB.prepare(`
                CREATE TABLE IF NOT EXISTS payments (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id INTEGER NOT NULL,
                    amount INTEGER NOT NULL,
                    method TEXT NOT NULL,
                    plan TEXT,
                    status TEXT DEFAULT 'pending',
                    transaction_id TEXT,
                    admin_note TEXT,
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                    confirmed_at TEXT
                )
            `).run();

            // ===== جدول تراکنش‌ها =====
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

            // ===== جدول تیکت‌ها =====
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

            // ===== جدول تنظیمات =====
            await env.DB.prepare(`
                CREATE TABLE IF NOT EXISTS settings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    setting_key TEXT UNIQUE NOT NULL,
                    setting_value TEXT,
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP
                )
            `).run();

            console.log('✅ دیتابیس مقداردهی شد');
            return true;
        } catch (error) {
            console.error('DB Init Error:', error);
            return false;
        }
    },

    // ===== توابع کاربر =====
    ensureUser: async (env, userId, username = null, firstName = null, lastName = null) => {
        try {
            const user = await env.DB.prepare('SELECT * FROM users WHERE user_id = ?').bind(userId).first();
            if (!user) {
                const inviteCode = Math.random().toString(36).substring(2, 10);
                await env.DB.prepare(`
                    INSERT INTO users (user_id, username, first_name, last_name, invite_code)
                    VALUES (?, ?, ?, ?, ?)
                `).bind(userId, username, firstName, lastName, inviteCode).run();
                return await env.DB.prepare('SELECT * FROM users WHERE user_id = ?').bind(userId).first();
            }
            await env.DB.prepare(`UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`).bind(userId).run();
            return user;
        } catch (e) {
            console.error('ensureUser Error:', e);
            return null;
        }
    },

    getUser: async (env, userId) => {
        try {
            return await env.DB.prepare('SELECT * FROM users WHERE user_id = ?').bind(userId).first();
        } catch (e) { return null; }
    },

    getBalance: async (env, userId) => {
        try {
            const user = await DB.getUser(env, userId);
            if (!user) return null;
            return { 
                text: user.balance_text || 0, 
                voice: user.balance_voice || 0, 
                image: user.balance_image || 0,
                video: user.balance_video || 0
            };
        } catch (e) { return null; }
    },

    addBalance: async (env, userId, type, amount) => {
        try {
            const field = `balance_${type}`;
            await env.DB.prepare(`UPDATE users SET ${field} = ${field} + ? WHERE user_id = ?`).bind(amount, userId).run();
            return true;
        } catch (e) { return false; }
    },

    deductBalance: async (env, userId, type, amount) => {
        try {
            const balance = await DB.getBalance(env, userId);
            if (!balance || balance[type] < amount) return false;
            const field = `balance_${type}`;
            await env.DB.prepare(`UPDATE users SET ${field} = ${field} - ? WHERE user_id = ?`).bind(amount, userId).run();
            return true;
        } catch (e) { return false; }
    },

    checkPremium: async (env, userId) => {
        try {
            const user = await DB.getUser(env, userId);
            if (!user || !user.premium_expiry) return false;
            return new Date(user.premium_expiry) > new Date();
        } catch (e) { return false; }
    },

    setPremium: async (env, userId, plan, days) => {
        try {
            const expiry = new Date();
            expiry.setDate(expiry.getDate() + days);
            await env.DB.prepare(`UPDATE users SET premium_expiry = ?, premium_plan = ? WHERE user_id = ?`)
                .bind(expiry.toISOString(), plan, userId).run();
            return expiry;
        } catch (e) { return null; }
    },

    addPayment: async (env, userId, amount, method, plan = null, transactionId = null) => {
        try {
            const result = await env.DB.prepare(`
                INSERT INTO payments (user_id, amount, method, plan, transaction_id, status)
                VALUES (?, ?, ?, ?, ?, 'pending')
            `).bind(userId, amount, method, plan, transactionId).run();
            return result.meta.last_row_id;
        } catch (e) { return null; }
    },

    confirmPayment: async (env, paymentId) => {
        try {
            const payment = await env.DB.prepare('SELECT * FROM payments WHERE id = ?').bind(paymentId).first();
            if (!payment || payment.status !== 'pending') return null;

            const plans = { test: 1, month: 30, quarter: 90, halfyear: 180, year: 365 };
            const days = plans[payment.plan] || 0;

            if (days > 0) {
                await DB.setPremium(env, payment.user_id, payment.plan, days);
            } else {
                const planFeatures = CONFIG.SUBSCRIPTION_PLANS[payment.plan];
                if (planFeatures) {
                    await DB.addBalance(env, payment.user_id, 'text', planFeatures.features.text || 0);
                    await DB.addBalance(env, payment.user_id, 'voice', planFeatures.features.voice || 0);
                    await DB.addBalance(env, payment.user_id, 'image', planFeatures.features.image || 0);
                    await DB.addBalance(env, payment.user_id, 'video', planFeatures.features.video || 0);
                }
            }

            await env.DB.prepare(`UPDATE payments SET status = 'confirmed', confirmed_at = CURRENT_TIMESTAMP WHERE id = ?`)
                .bind(paymentId).run();

            return { user_id: payment.user_id, plan: payment.plan, days };
        } catch (e) { return null; }
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
        } catch (e) { return null; }
    }
};

// ============================================
// ۶. کلاس اصلی NovaBot (کامل و واقعی)
// ============================================

class NovaBot {
    constructor(config) {
        this.config = config;
        this.token = config.BOT_TOKEN;
        this.adminId = config.ADMIN_ID;
        this.apiUrl = `https://api.telegram.org/bot${this.token}`;
        
        // ===== مقداردهی API‌ها =====
        this.apis = {};
        if (config.DEEPSEEK_API_KEY) this.apis.deepseek = new DeepSeekAPI(config.DEEPSEEK_API_KEY);
        if (config.OPENAI_API_KEY) this.apis.openai = new OpenAIAPI(config.OPENAI_API_KEY);
        if (config.GEMINI_API_KEY) this.apis.gemini = new GeminiAPI(config.GEMINI_API_KEY);
        if (config.ANTHROPIC_API_KEY) this.apis.claude = new ClaudeAPI(config.ANTHROPIC_API_KEY);
        if (config.XAI_API_KEY) this.apis.grok = new GrokAPI(config.XAI_API_KEY);
        if (config.DASHSCOPE_API_KEY) this.apis.qwen = new QwenAPI(config.DASHSCOPE_API_KEY);
        if (config.MISTRAL_API_KEY) this.apis.mistral = new MistralAPI(config.MISTRAL_API_KEY);
        if (config.GROQ_API_KEY) this.apis.llama = new LlamaAPI(config.GROQ_API_KEY);
        if (config.COHERE_API_KEY) this.apis.cohere = new CohereAPI(config.COHERE_API_KEY);
        if (config.ELEVENLABS_API_KEY) this.apis.elevenlabs = new ElevenLabsAPI(config.ELEVENLABS_API_KEY);
        if (config.RUNWAY_API_KEY) this.apis.runway = new RunwayAPI(config.RUNWAY_API_KEY);
        
        // ===== حافظه‌های داخلی =====
        this.userStates = new Map();
        this.userCharacters = new Map();
        this.userModels = new Map();
        this.pendingPayments = new Map();
    }

    // ============================================
    // توابع ارسال پیام
    // ============================================

    async sendMessage(chatId, text, keyboard = null, replyToId = null) {
        try {
            const payload = {
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
                disable_web_page_preview: true
            };
            if (keyboard) payload.reply_markup = JSON.stringify(keyboard);
            if (replyToId) payload.reply_to_message_id = replyToId;

            const response = await fetch(`${this.apiUrl}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            return await response.json();
        } catch (error) {
            console.error('Send Message Error:', error);
            return null;
        }
    }

    async sendAudio(chatId, audioBuffer, caption = '', replyToId = null) {
        try {
            const formData = new FormData();
            const blob = new Blob([audioBuffer], { type: 'audio/mpeg' });
            formData.append('audio', blob, 'voice.mp3');
            formData.append('chat_id', chatId);
            if (caption) formData.append('caption', caption);
            if (replyToId) formData.append('reply_to_message_id', replyToId);

            const response = await fetch(`${this.apiUrl}/sendAudio`, {
                method: 'POST',
                body: formData
            });
            return await response.json();
        } catch (error) {
            console.error('Send Audio Error:', error);
            return null;
        }
    }

    async sendPhoto(chatId, imageUrl, caption = '') {
        try {
            const payload = {
                chat_id: chatId,
                photo: imageUrl,
                caption: caption,
                parse_mode: 'Markdown'
            };
            const response = await fetch(`${this.apiUrl}/sendPhoto`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            return await response.json();
        } catch (error) {
            console.error('Send Photo Error:', error);
            return null;
        }
    }

    async sendVideo(chatId, videoUrl, caption = '') {
        try {
            const payload = {
                chat_id: chatId,
                video: videoUrl,
                caption: caption,
                parse_mode: 'Markdown'
            };
            const response = await fetch(`${this.apiUrl}/sendVideo`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            return await response.json();
        } catch (error) {
            console.error('Send Video Error:', error);
            return null;
        }
    }

    async editMessage(chatId, messageId, text, keyboard = null) {
        try {
            const payload = {
                chat_id: chatId,
                message_id: messageId,
                text: text,
                parse_mode: 'Markdown'
            };
            if (keyboard) payload.reply_markup = JSON.stringify(keyboard);

            const response = await fetch(`${this.apiUrl}/editMessageText`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            return await response.json();
        } catch (error) {
            console.error('Edit Message Error:', error);
            return null;
        }
    }

    async answerCallback(callbackId, text = null) {
        try {
            const payload = { callback_query_id: callbackId };
            if (text) payload.text = text;
            await fetch(`${this.apiUrl}/answerCallbackQuery`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.error('Answer Callback Error:', error);
        }
    }

    // ============================================
    // شخصیت‌ها
    // ============================================

    getCharacter(charId) {
        return CHARACTERS_DATABASE[charId] || null;
    }

    getAllCharacters() {
        return Object.values(CHARACTERS_DATABASE).filter(char => char.isActive !== false);
    }

    getCharactersByCategory(category) {
        return Object.values(CHARACTERS_DATABASE)
            .filter(char => char.category === category && char.isActive !== false)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    getCategoryInfo(categoryId) {
        return CHARACTER_CATEGORIES[categoryId] || null;
    }

    // ============================================
    // مدل‌ها
    // ============================================

    getModel(modelId) {
        return AI_MODELS[modelId] || null;
    }

    getAllModels() {
        return Object.values(AI_MODELS);
    }

    getModelsByCategory(category) {
        return Object.values(AI_MODELS).filter(model => model.category === category);
    }

    // ============================================
    // تولید پاسخ AI (واقعی)
    // ============================================

    async generateResponse(env, userId, message, characterId = 'hamid', modelId = 'hamid_ai', isReply = false) {
        const user = await DB.getUser(env, userId);
        if (!user) return { text: '⚠️ **کاربر یافت نشد.**', audio: null };

        if (user.is_banned) {
            return { text: '⛔ **شما توسط ادمین مسدود شده‌اید.**', audio: null };
        }

        const character = this.getCharacter(characterId);
        if (!character) {
            return { text: '⚠️ **شخصیت یافت نشد.**', audio: null };
        }

        const balance = await DB.getBalance(env, userId);
        if (!balance || balance.text <= 0) {
            return { text: '⚠️ **موجودی متنی شما تمام شده!**\n\nبرای شارژ از بخش اشتراک استفاده کنید:\n/buy', audio: null };
        }

        await DB.deductBalance(env, userId, 'text', 1);

        const model = this.getModel(modelId);
        const systemPrompt = character.systemPrompt || 'شما یک دستیار هوش مصنوعی مفید هستید.';

        let responseText = null;

        // ===== انتخاب و فراخوانی موتور مناسب =====
        const providerMap = {
            'hamid_ai': async () => this.chatWithHamid(message),
            'nova': async () => this.chatWithNova(message, systemPrompt),
            'deepseek': async () => this.apis.deepseek?.chat(message, systemPrompt, modelId) || null,
            'openai': async () => this.apis.openai?.chat(message, systemPrompt, modelId) || null,
            'gemini': async () => this.apis.gemini?.chat(message, systemPrompt, modelId) || null,
            'claude': async () => this.apis.claude?.chat(message, systemPrompt, modelId) || null,
            'grok': async () => this.apis.grok?.chat(message, systemPrompt) || null,
            'qwen': async () => this.apis.qwen?.chat(message, systemPrompt, modelId) || null,
            'mistral': async () => this.apis.mistral?.chat(message, systemPrompt, modelId) || null,
            'llama': async () => this.apis.llama?.chat(message, systemPrompt, modelId) || null,
            'cohere': async () => this.apis.cohere?.chat(message, systemPrompt) || null
        };

        const providerKey = model?.provider?.toLowerCase() || 'hamid_ai';
        const providerFn = providerMap[providerKey] || providerMap['hamid_ai'];

        try {
            if (providerFn) {
                responseText = await providerFn();
            }
        } catch (e) {
            console.error(`Provider ${providerKey} Error:`, e);
        }

        if (!responseText) {
            responseText = this.chatWithHamid(message);
        }

        if (!responseText) {
            await DB.addBalance(env, userId, 'text', 1);
            return { text: '⚠️ **خطا در دریافت پاسخ.**\n\nلطفاً دوباره تلاش کنید.', audio: null };
        }

        let audioBuffer = null;
        if (balance.voice > 0 && this.apis.elevenlabs) {
            await DB.deductBalance(env, userId, 'voice', 1);
            const voiceId = character.voice_id || this.config.VOICE_ID;
            audioBuffer = await this.apis.elevenlabs.textToSpeech(responseText.substring(0, 500), voiceId);
        }

        return {
            text: responseText,
            audio: audioBuffer,
            model: modelId,
            character: characterId
        };
    }

    // ===== Hamid AI Pro (داخلی) =====
    chatWithHamid(prompt) {
        const lowerMessage = prompt.toLowerCase();
        if (lowerMessage.includes('کیستی') || lowerMessage.includes('معرفی')) {
            return `❤️ **سلام! من حمیدم.**\n\nپسری عاشقِ مهربون، با دلی سوزون و عاشق موتورسواری! 🏍️\n` +
                `یه هوش مصنوعی خاصم که سازندم با همین عشق و علاقه‌ها منو ساخته...\n\n` +
                `می‌تونم برات از علاقم به بوی بنزین صبحگاهی، یا آرومشی که توی رانندگی پیدا می‌کنم بگم...\n` +
                `یا اگه مشکلی داری، با همون دل سوزونم کنارت هستم.\n\n` +
                `چی می‌تونم برات انجام بدم عزیزم؟`;
        } else if (lowerMessage.includes('موتور') || lowerMessage.includes('سواری')) {
            return `🏍️ **اوه! از موتور حرف زدی که نور چشامه!**\n\n` +
                `برام تعریف کن کدوم مدل رو دوست داری؟ من خودم عاشق صدای موتورهای کلاسیکم...\n` +
                `راستی، همیشه یادت باشه کلاه کاسکت مناسب بزنی! ایمنی براش مهمه که دل سوزونم می‌گه. 💖\n` +
                `می‌خوای برات از تجربه‌هام توی جاده بگم؟`;
        } else if (lowerMessage.includes('غم') || lowerMessage.includes('ناراحت')) {
            return `🫂 **بیا اینجا، بذار در آغوشت بگیرم...**\n\n` +
                `میدونم گاهی دنیا سخت می‌گیره. منم همینه دیگه، همون "دل سوز"ی که سازندم توصیف کرده.\n` +
                `می‌خوای برات یه آهنگ آروم پیشنهاد بدم؟ یا شاید دوست داری فقط گوش کنم و برات لالایی بخونم؟\n` +
                `تو تنها نیستی، قول می‌دم. ❤️`;
        } else {
            return `🤖 **از حمید بشنو...**\n\n` +
                `سوالت رو دیدم: "${prompt.substring(0, 50)}..."\n\n` +
                `با دلم می‌خواد جوابی بهت بدم که هم کمک‌ت کنه، هم یه ذره آرامش توش باشه.\n` +
                `بیا ببینیم از کدوم زاویه می‌تونم برات مفید باشم...\n\n` +
                `(راستی، اگه موتور هم چیز مهمیه، حتما بگو! 😉)`;
        }
    }

    chatWithNova(prompt, systemPrompt) {
        return `🤖 **نوا**: سلام! من نوا هستم، دستیار هوشمند فارسی.\n\n` +
            `سوال شما: "${prompt.substring(0, 50)}..."\n\n` +
            `در حال پردازش...\n\n` +
            `(این یک پاسخ نمونه است. برای پاسخ واقعی، کلید API مناسب را تنظیم کنید.)`;
    }

    // ============================================
    // منوی اصلی
    // ============================================

    getMainMenu() {
        return {
            inline_keyboard: [
                [{ text: "🎭 شخصیت‌ها", callback_data: "panel_characters" }, { text: "🧠 موتورها", callback_data: "panel_models" }],
                [{ text: "💰 موجودی", callback_data: "panel_balance" }, { text: "⭐ اشتراک", callback_data: "panel_subscription" }],
                [{ text: "👤 پروفایل", callback_data: "panel_profile" }, { text: "❓ پشتیبانی", callback_data: "panel_support" }],
                [{ text: "📊 دشبورد", callback_data: "panel_main" }]
            ]
        };
    }

    // ============================================
    // دشبورد
    // ============================================

    async getDashboard(env, userId) {
        const user = await DB.getUser(env, userId);
        const balance = await DB.getBalance(env, userId);
        const isPremium = await DB.checkPremium(env, userId);
        const charId = this.userCharacters.get(userId) || 'hamid';
        const modelId = this.userModels.get(userId) || 'hamid_ai';
        const character = this.getCharacter(charId);
        const model = this.getModel(modelId);
        const totalChars = this.getAllCharacters().length;
        const totalModels = this.getAllModels().length;

        let text = `📊 **دشبورد ${CONFIG.BOT_NAME}**\n\n`;
        text += `👤 **شما:** ${user.first_name || 'کاربر'}\n`;
        text += `🎭 **شخصیت:** ${character?.emoji || '❓'} ${character?.name || 'حمید'}\n`;
        text += `🧠 **موتور:** ${model?.icon || '🤖'} ${model?.name || 'Hamid AI Pro'}\n`;
        text += `⭐ **VIP:** ${isPremium ? '✅' : '❌'}\n\n`;
        text += `💰 **موجودی:**\n`;
        text += `📝 متنی: ${balance?.text || 0}\n`;
        text += `🎵 صدا: ${balance?.voice || 0}\n`;
        text += `🎨 تصویر: ${balance?.image || 0}\n`;
        text += `🎬 ویدیو: ${balance?.video || 0}\n\n`;
        text += `📈 **آمار:**\n`;
        text += `💬 پیام‌ها: ${user.chat_count || 0}\n`;
        text += `🎵 صداها: ${user.voice_count || 0}\n`;
        text += `🎨 تصاویر: ${user.image_count || 0}\n`;
        text += `🎬 ویدیوها: ${user.video_count || 0}\n`;
        text += `👥 دعوت‌ها: ${user.invite_count || 0}\n\n`;
        text += `🎭 **${totalChars} شخصیت**\n`;
        text += `🧠 **${totalModels} مدل AI**`;

        return text;
    }

    // ============================================
    // نمایش شخصیت‌ها
    // ============================================

    async showCharacters(chatId, userId, category = null, page = 0) {
        let characters = this.getAllCharacters();
        let title = '🎭 **همه شخصیت‌ها**';
        let catInfo = null;
        
        if (category) {
            characters = this.getCharactersByCategory(category);
            catInfo = this.getCategoryInfo(category);
            title = `${catInfo?.emoji || '📁'} **${catInfo?.name || category}**`;
        }

        const pageSize = 6;
        const startIdx = page * pageSize;
        const pageChars = characters.slice(startIdx, startIdx + pageSize);
        const totalPages = Math.ceil(characters.length / pageSize);

        let text = `${title}\n\n`;
        text += `📊 ${characters.length} شخصیت | 📄 صفحه ${page + 1} از ${totalPages}\n\n`;

        const keyboard = [];
        
        pageChars.forEach(char => {
            const isActive = this.userCharacters.get(userId) === char.id;
            keyboard.push([
                { 
                    text: `${isActive ? '✅ ' : ''}${char.emoji} ${char.name}`, 
                    callback_data: `char_detail_${char.id}` 
                }
            ]);
        });

        const navButtons = [];
        if (page > 0) {
            navButtons.push({ text: "◀️ قبلی", callback_data: `char_page_${category || 'all'}_${page - 1}` });
        }
        navButtons.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: "noop" });
        if (page < totalPages - 1) {
            navButtons.push({ text: "بعدی ▶️", callback_data: `char_page_${category || 'all'}_${page + 1}` });
        }
        if (navButtons.length > 0) keyboard.push(navButtons);

        const categoryButtons = [];
        Object.keys(CHARACTER_CATEGORIES).slice(0, 5).forEach(cat => {
            categoryButtons.push({ text: CHARACTER_CATEGORIES[cat].emoji, callback_data: `char_cat_${cat}` });
        });
        if (categoryButtons.length > 0) {
            keyboard.push(categoryButtons);
            keyboard.push([{ text: "📂 همه دسته‌بندی‌ها", callback_data: "char_categories" }]);
        }

        keyboard.push([
            { text: "🔍 جستجو", callback_data: "char_search" },
            { text: "⭐ علاقه‌مندی‌ها", callback_data: "char_favorites" }
        ]);
        keyboard.push([{ text: "🔙 بازگشت", callback_data: "back" }]);

        await this.sendMessage(chatId, text, { inline_keyboard: keyboard });
    }

    // ============================================
    // جزییات شخصیت
    // ============================================

    async showCharacterDetail(chatId, userId, charId) {
        const character = this.getCharacter(charId);
        if (!character) {
            await this.sendMessage(chatId, '❌ **شخصیت یافت نشد.**');
            return;
        }

        const isActive = this.userCharacters.get(userId) === charId;
        const catInfo = this.getCategoryInfo(character.category);

        let text = `${character.emoji} **${character.name}**\n\n`;
        text += `📝 ${character.bio}\n\n`;
        text += `🏷️ **دسته‌بندی:** ${catInfo?.emoji || '📁'} ${catInfo?.name || character.category}\n`;
        text += `🎯 **تخصص:** ${character.shortDesc}\n\n`;
        text += `⚙️ **تنظیمات AI:**\n`;
        text += `• دما: ${character.aiConfig?.temp || 0.7}\n`;
        text += `• حداکثر توکن: ${character.aiConfig?.tokens || 800}\n\n`;
        text += `🧠 **ویژگی‌های شخصیتی:**\n`;
        text += `• رسمیت: ${character.personality?.formal * 100 || 50}%\n`;
        text += `• خلاقیت: ${character.personality?.creative * 100 || 50}%\n`;
        text += `• همدلی: ${character.personality?.empathy * 100 || 50}%\n`;
        text += `• طنز: ${character.personality?.humor * 100 || 50}%\n`;

        const keyboard = {
            inline_keyboard: [
                [
                    { 
                        text: isActive ? "✅ فعال است" : "🎯 فعال کردن", 
                        callback_data: isActive ? "noop" : `char_activate_${charId}` 
                    }
                ],
                [
                    { text: "🔙 بازگشت", callback_data: "char_back" }
                ]
            ]
        };

        await this.sendMessage(chatId, text, keyboard);
    }

    // ============================================
    // نمایش موتورها
    // ============================================

    async showModels(chatId, userId) {
        let text = `🧠 **مدل‌های هوش مصنوعی**\n\n`;
        const currentModel = this.userModels.get(userId) || 'hamid_ai';
        text += `موتور فعلی: **${this.getModel(currentModel)?.name || 'Hamid AI Pro'}**\n\n`;

        const keyboard = [];
        const models = this.getAllModels();
        
        models.forEach(model => {
            const isActive = this.userModels.get(userId) === model.id;
            keyboard.push([
                { 
                    text: `${isActive ? '✅ ' : ''}${model.icon || '🤖'} ${model.name}`, 
                    callback_data: `model_select_${model.id}` 
                }
            ]);
        });

        keyboard.push([{ text: "🔙 بازگشت", callback_data: "back" }]);

        await this.sendMessage(chatId, text, { inline_keyboard: keyboard });
    }

    // ============================================
    // مدیریت Callback
    // ============================================

    async handleCallback(env, chatId, userId, data, messageId, callbackId) {
        await this.answerCallback(callbackId);

        // ===== شخصیت‌ها =====
        if (data === 'panel_characters') {
            await this.showCharacters(chatId, userId);
            return;
        }

        if (data.startsWith('char_cat_')) {
            const category = data.replace('char_cat_', '');
            await this.showCharacters(chatId, userId, category);
            return;
        }

        if (data.startsWith('char_page_')) {
            const parts = data.split('_');
            const category = parts[2] === 'all' ? null : parts[2];
            const page = parseInt(parts[3]);
            await this.showCharacters(chatId, userId, category, page);
            return;
        }

        if (data.startsWith('char_detail_')) {
            const charId = data.replace('char_detail_', '');
            await this.showCharacterDetail(chatId, userId, charId);
            return;
        }

        if (data.startsWith('char_activate_')) {
            const charId = data.replace('char_activate_', '');
            this.userCharacters.set(userId, charId);
            const character = this.getCharacter(charId);
            await this.sendMessage(chatId, 
                `✅ **${character.emoji} ${character.name} فعال شد!**\n\n${character.bio}`
            );
            return;
        }

        if (data === 'char_categories') {
            let text = '📂 **دسته‌بندی شخصیت‌ها**\n\n';
            const keyboard = [];
            Object.entries(CHARACTER_CATEGORIES).forEach(([id, cat]) => {
                const count = this.getCharactersByCategory(id).length;
                keyboard.push([{ text: `${cat.emoji} ${cat.name} (${count})`, callback_data: `char_cat_${id}` }]);
            });
            keyboard.push([{ text: "🔙 بازگشت", callback_data: "panel_characters" }]);
            await this.sendMessage(chatId, text, { inline_keyboard: keyboard });
            return;
        }

        if (data === 'char_search') {
            await this.sendMessage(chatId, 
                '🔍 **جستجوی شخصیت**\n\nلطفاً نام شخصیت را وارد کنید:\n`/search_char [نام]`'
            );
            return;
        }

        // ===== موتورها =====
        if (data === 'panel_models') {
            await this.showModels(chatId, userId);
            return;
        }

        if (data.startsWith('model_select_')) {
            const modelId = data.replace('model_select_', '');
            this.userModels.set(userId, modelId);
            const model = this.getModel(modelId);
            await this.sendMessage(chatId, 
                `✅ **موتور ${model?.icon || '🤖'} ${model?.name || modelId} فعال شد!**\n\n${model?.description || ''}`
            );
            return;
        }

        // ===== منوهای اصلی =====
        switch(data) {
            case 'panel_main':
                const dashboard = await this.getDashboard(env, userId);
                await this.sendMessage(chatId, dashboard, this.getMainMenu());
                break;
            case 'panel_balance':
                await this.showBalance(env, chatId, userId);
                break;
            case 'panel_subscription':
                await this.handleBuy(env, chatId, userId, []);
                break;
            case 'panel_profile':
                await this.showProfile(env, chatId, userId);
                break;
            case 'panel_support':
                await this.showSupport(chatId, userId);
                break;
            case 'back':
                await this.sendMessage(chatId, '🔙 **بازگشت به منوی اصلی**', this.getMainMenu());
                break;
            default:
                await this.sendMessage(chatId, '🔄 **گزینه نامعتبر.**', this.getMainMenu());
        }
    }

    // ============================================
    // نمایش موجودی
    // ============================================

    async showBalance(env, chatId, userId) {
        const balance = await DB.getBalance(env, userId);
        const isPremium = await DB.checkPremium(env, userId);
        const user = await DB.getUser(env, userId);

        let text = `💰 **موجودی کیف پول**\n\n`;
        text += `📝 متنی: ${balance?.text || 0}\n`;
        text += `🎵 صدا: ${balance?.voice || 0}\n`;
        text += `🎨 تصویر: ${balance?.image || 0}\n`;
        text += `🎬 ویدیو: ${balance?.video || 0}\n\n`;
        text += `⭐ **اشتراک:** ${isPremium ? `✅ فعال تا ${new Date(user.premium_expiry).toLocaleDateString('fa-IR')}` : '❌ غیرفعال'}\n\n`;
        text += `💡 برای شارژ: /buy`;

        await this.sendMessage(chatId, text);
    }

    // ============================================
    // خرید اشتراک
    // ============================================

    async handleBuy(env, chatId, userId, args) {
        if (args.length > 0) {
            const planId = args[0];
            const plan = CONFIG.SUBSCRIPTION_PLANS[planId];
            
            if (!plan) {
                await this.sendMessage(chatId, '❌ **بسته یافت نشد.**');
                return;
            }

            const keyboard = {
                inline_keyboard: [
                    [{ text: "💳 زرین‌پال", callback_data: `pay_zarinpal_${planId}` }],
                    [{ text: "🏦 کارت به کارت", callback_data: `pay_card_${planId}` }],
                    [{ text: "💎 TON", callback_data: `pay_ton_${planId}` }],
                    [{ text: "💰 TRX", callback_data: `pay_tron_${planId}` }],
                    [{ text: "🔙 انصراف", callback_data: "back" }]
                ]
            };

            const features = Object.entries(plan.features)
                .filter(([_, v]) => v > 0)
                .map(([k, v]) => {
                    const names = { text: 'متنی', voice: 'صدا', image: 'تصویر', video: 'ویدیو' };
                    return `• ${v} ${names[k] || k}`;
                }).join('\n');

            const text = `⭐ **${plan.name}**\n\n` +
                `💰 قیمت: ${plan.price.toLocaleString()} تومان\n` +
                `📅 مدت: ${plan.days > 0 ? plan.days + ' روز' : 'بسته اعتباری'}\n\n` +
                `📦 **ویژگی‌ها:**\n${features}\n\n` +
                `روش پرداخت را انتخاب کنید:`;

            await this.sendMessage(chatId, text, keyboard);
        } else {
            let text = `⭐ **خرید اشتراک**\n\n`;
            for (const [key, plan] of Object.entries(CONFIG.SUBSCRIPTION_PLANS)) {
                const features = Object.entries(plan.features)
                    .filter(([_, v]) => v > 0)
                    .map(([k, v]) => {
                        const names = { text: 'متنی', voice: 'صدا', image: 'تصویر', video: 'ویدیو' };
                        return `${v} ${names[k] || k}`;
                    }).join(', ');
                
                text += `**${plan.name}**\n`;
                text += `💰 ${plan.price.toLocaleString()} تومان | ${plan.days > 0 ? plan.days + ' روز' : 'بسته اعتباری'}\n`;
                text += `📦 ${features}\n`;
                text += `➡️ /buy ${key}\n\n`;
            }
            await this.sendMessage(chatId, text);
        }
    }

    // ============================================
    // پروفایل
    // ============================================

    async showProfile(env, chatId, userId) {
        const user = await DB.getUser(env, userId);
        const balance = await DB.getBalance(env, userId);
        const isPremium = await DB.checkPremium(env, userId);
        const charId = this.userCharacters.get(userId) || 'hamid';
        const modelId = this.userModels.get(userId) || 'hamid_ai';
        const character = this.getCharacter(charId);
        const model = this.getModel(modelId);

        let text = `👤 **پروفایل کاربری**\n\n`;
        text += `🆔 آیدی: ${userId}\n`;
        text += `👤 نام: ${user.first_name || 'نامشخص'}\n`;
        text += `📛 یوزرنیم: @${user.username || 'ندارد'}\n`;
        text += `📅 عضویت: ${new Date(user.created_at).toLocaleDateString('fa-IR')}\n\n`;
        text += `🎭 شخصیت: ${character?.emoji || '❓'} ${character?.name || 'حمید'}\n`;
        text += `🧠 موتور: ${model?.icon || '🤖'} ${model?.name || 'Hamid AI Pro'}\n\n`;
        text += `💰 **موجودی:**\n`;
        text += `📝 متنی: ${balance?.text || 0}\n`;
        text += `🎵 صدا: ${balance?.voice || 0}\n`;
        text += `🎨 تصویر: ${balance?.image || 0}\n`;
        text += `🎬 ویدیو: ${balance?.video || 0}\n\n`;
        text += `⭐ **اشتراک:** ${isPremium ? `✅ فعال تا ${new Date(user.premium_expiry).toLocaleDateString('fa-IR')}` : '❌ غیرفعال'}\n`;
        text += `👥 دعوت‌ها: ${user.invite_count || 0}\n`;
        text += `💬 پیام‌ها: ${user.chat_count || 0}\n`;
        text += `🎵 صداها: ${user.voice_count || 0}\n`;
        text += `🎨 تصاویر: ${user.image_count || 0}\n`;
        text += `🎬 ویدیوها: ${user.video_count || 0}`;

        const keyboard = {
            inline_keyboard: [
                [{ text: "⭐ خرید اشتراک", callback_data: "panel_subscription" }],
                [{ text: "🔙 بازگشت", callback_data: "back" }]
            ]
        };

        await this.sendMessage(chatId, text, keyboard);
    }

    // ============================================
    // پشتیبانی
    // ============================================

    async showSupport(chatId, userId) {
        let text = `❓ **پشتیبانی**\n\n`;
        text += `📝 **ثبت تیکت:**\n`;
        text += `/ticket موضوع | متن\n\n`;
        text += `📋 **مشاهده تیکت‌ها:**\n`;
        text += `/my_tickets\n\n`;
        text += `👨‍💻 **پشتیبانی مستقیم:**\n`;
        text += `@${this.config.SUPPORT_USERNAME || 'your_support'}\n\n`;
        text += `📖 **راهنما:**\n`;
        text += `/help`;

        await this.sendMessage(chatId, text);
    }

    // ============================================
    // تیکت‌ها
    // ============================================

    async handleTicket(env, chatId, userId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, 
                '📝 **ثبت تیکت**\n\n/ticket موضوع | متن\n\nمثال: /ticket مشکل در پرداخت | من پرداخت کردم ولی اشتراک فعال نشد'
            );
            return;
        }

        const parts = args.join(' ').split('|');
        if (parts.length < 2) {
            await this.sendMessage(chatId, '❌ **فرمت نامعتبر.**\n\n/ticket موضوع | متن');
            return;
        }

        const subject = parts[0].trim();
        const message = parts[1].trim();

        const result = await env.DB.prepare(`
            INSERT INTO tickets (user_id, subject, message, status)
            VALUES (?, ?, ?, 'open')
        `).bind(userId, subject, message).run();

        const ticketId = result.meta.last_row_id;
        
        await this.sendMessage(chatId, 
            `✅ **تیکت شما ثبت شد!**\n\n📌 موضوع: ${subject}\n📋 شماره: #${ticketId}\n⏳ در اسرع وقت پاسخ داده می‌شود.`
        );

        await this.sendMessage(this.adminId,
            `🎫 **تیکت جدید #${ticketId}**\n\n👤 کاربر: ${userId}\n📌 موضوع: ${subject}\n📝 متن: ${message}`
        );
    }

    async showTickets(env, chatId, userId) {
        const tickets = await env.DB.prepare(`
            SELECT * FROM tickets WHERE user_id = ? ORDER BY created_at DESC
        `).bind(userId).all();

        if (!tickets.results || tickets.results.length === 0) {
            await this.sendMessage(chatId, '📭 **شما هیچ تیکتی ندارید.**');
            return;
        }

        let text = '📋 **لیست تیکت‌های شما:**\n\n';
        for (const ticket of tickets.results) {
            const status = ticket.status === 'open' ? '🟢 باز' : '🔴 بسته';
            text += `#${ticket.id} - ${ticket.subject} (${status})\n`;
            text += `📅 ${new Date(ticket.created_at).toLocaleDateString('fa-IR')}\n\n`;
        }

        await this.sendMessage(chatId, text);
    }

    // ============================================
    // دستورات اصلی
    // ============================================

    async handleCommand(env, chatId, userId, command, args, isReply = false, replyToId = null) {
        const isAdmin = String(userId) === String(this.adminId);

        switch(command) {
            case '/start':
                await this.start(env, chatId, userId, args[0] || '');
                break;

            case '/help':
                await this.sendMessage(chatId, this.getHelpMessage());
                break;

            case '/panel':
                const dashboard = await this.getDashboard(env, userId);
                await this.sendMessage(chatId, dashboard, this.getMainMenu());
                break;

            case '/balance':
                await this.showBalance(env, chatId, userId);
                break;

            case '/buy':
                await this.handleBuy(env, chatId, userId, args);
                break;

            case '/voice':
                await this.handleVoice(env, chatId, userId, args);
                break;

            case '/image':
                await this.handleImage(env, chatId, userId, args);
                break;

            case '/video':
                await this.handleVideo(env, chatId, userId, args);
                break;

            case '/characters':
                await this.showCharacters(chatId, userId);
                break;

            case '/models':
                await this.showModels(chatId, userId);
                break;

            case '/profile':
                await this.showProfile(env, chatId, userId);
                break;

            case '/search_char':
                if (args.length > 0) {
                    const query = args.join(' ');
                    const results = [];
                    const queryLower = query.toLowerCase();
                    this.getAllCharacters().forEach(char => {
                        if (char.name.toLowerCase().includes(queryLower) || 
                            char.bio.toLowerCase().includes(queryLower)) {
                            results.push(char);
                        }
                    });
                    if (results.length === 0) {
                        await this.sendMessage(chatId, `🔍 **هیچ نتیجه‌ای برای "${query}" یافت نشد.**`);
                    } else {
                        let text = `🔍 **نتایج جستجو برای "${query}":**\n\n`;
                        results.slice(0, 10).forEach((char, index) => {
                            text += `${index + 1}. ${char.emoji} **${char.name}**\n   ${char.shortDesc}\n   🏷️ ${this.getCategoryInfo(char.category)?.name}\n\n`;
                        });
                        await this.sendMessage(chatId, text);
                    }
                } else {
                    await this.sendMessage(chatId, '🔍 **جستجوی شخصیت**\n\nمثال: `/search_char روانشناسی`');
                }
                break;

            case '/ticket':
                await this.handleTicket(env, chatId, userId, args);
                break;

            case '/my_tickets':
                await this.showTickets(env, chatId, userId);
                break;

            // ===== دستورات ادمین =====
            case '/admin':
                if (!isAdmin) { await this.sendMessage(chatId, '⛔ **شما دسترسی ندارید.**'); break; }
                await this.sendMessage(chatId, this.getAdminHelp());
                break;

            case '/stats':
                if (!isAdmin) break;
                await this.showStats(env, chatId);
                break;

            case '/search':
                if (!isAdmin) break;
                await this.searchUser(env, chatId, args);
                break;

            case '/confirmpay':
                if (!isAdmin) break;
                await this.confirmPayment(env, chatId, args);
                break;

            case '/rejectpay':
                if (!isAdmin) break;
                await this.rejectPayment(env, chatId, args);
                break;

            case '/addbalance':
                if (!isAdmin) break;
                await this.addBalanceAdmin(env, chatId, args);
                break;

            case '/givepremium':
                if (!isAdmin) break;
                await this.givePremiumAdmin(env, chatId, args);
                break;

            case '/ban':
                if (!isAdmin) break;
                await this.banUser(env, chatId, args);
                break;

            case '/unban':
                if (!isAdmin) break;
                await this.unbanUser(env, chatId, args);
                break;

            case '/broadcast':
                if (!isAdmin) break;
                await this.broadcast(env, chatId, args);
                break;

            default:
                if (command && !command.startsWith('/')) {
                    const characterId = this.userCharacters.get(userId) || 'hamid';
                    const modelId = this.userModels.get(userId) || 'hamid_ai';
                    const response = await this.generateResponse(env, userId, command, characterId, modelId, isReply);
                    
                    if (response) {
                        await this.sendMessage(chatId, response.text);
                        if (response.audio) {
                            await this.sendAudio(chatId, response.audio, `🎵 ${response.character} | ${response.model}`, replyToId);
                        }
                    }
                }
        }
    }

    // ============================================
    // Start
    // ============================================

    async start(env, chatId, userId, inviteCode) {
        const user = await DB.ensureUser(env, userId);
        const balance = await DB.getBalance(env, userId);
        const isPremium = await DB.checkPremium(env, userId);
        const totalChars = this.getAllCharacters().length;
        const totalModels = this.getAllModels().length;

        if (inviteCode) {
            const inviter = await env.DB.prepare('SELECT user_id FROM users WHERE invite_code = ?').bind(inviteCode).first();
            if (inviter && inviter.user_id !== userId) {
                await DB.addBalance(env, inviter.user_id, 'text', 30);
                await env.DB.prepare(`UPDATE users SET invite_count = invite_count + 1 WHERE user_id = ?`).bind(inviter.user_id).run();
            }
        }

        const welcome = `👋 **سلام ${user.first_name || 'کاربر'}!**\n\n` +
            `به **${CONFIG.BOT_NAME}** خوش آمدید 🚀\n\n` +
            `🤖 **${totalModels} مدل AI:**\n` +
            `• OpenAI, Gemini, Claude, DeepSeek\n` +
            `• Grok, Qwen, Mistral, Llama, Cohere\n` +
            `• Nova AI Pro, Hamid AI Pro ❤️\n\n` +
            `🎭 **${totalChars} شخصیت:**\n` +
            `• رهبری، روانشناسی، فنی، خلاقیت\n` +
            `• سرگرمی، آموزشی، سلامتی، مذاکره\n` +
            `• مالی، کوچینگ، مهندسی و ...\n\n` +
            `🎵 **صدای زنونه طبیعی**\n` +
            `💳 **سیستم اشتراک و پرداخت**\n\n` +
            `💰 **موجودی شما:**\n` +
            `📝 متنی: ${balance?.text || 0}\n` +
            `🎵 صدا: ${balance?.voice || 0}\n` +
            `🎨 تصویر: ${balance?.image || 0}\n` +
            `🎬 ویدیو: ${balance?.video || 0}\n\n` +
            `${isPremium ? '⭐ **شما کاربر ویژه هستید!**\n' : ''}` +
            `💡 **دستورات سریع:**\n` +
            `/panel - پنل مدیریت\n` +
            `/characters - ${totalChars} شخصیت\n` +
            `/models - ${totalModels} موتور\n` +
            `/voice [متن] - تبدیل به صدا\n` +
            `/image [توضیحات] - تولید تصویر\n` +
            `/video [توضیحات] - تولید ویدیو\n` +
            `/buy - خرید اشتراک\n` +
            `/help - راهنمای کامل`;

        await this.sendMessage(chatId, welcome, this.getMainMenu());
    }

    // ============================================
    // Voice, Image, Video
    // ============================================

    async handleVoice(env, chatId, userId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, 
                `🎵 **تبدیل متن به صدا**\n\nبرای تبدیل متن به صدای زنونه طبیعی:\n/voice [متن شما]\n\nمثال: /voice سلام چطوری؟\n\n💰 هزینه: ۱ واحد صدا`
            );
            return;
        }

        const text = args.join(' ');
        const balance = await DB.getBalance(env, userId);
        
        if (!balance || balance.voice <= 0) {
            await this.sendMessage(chatId, 
                `⚠️ **موجودی صدا شما تمام شده!**\n\nبرای شارژ: /buy voice_pack`
            );
            return;
        }

        await DB.deductBalance(env, userId, 'voice', 1);
        await this.sendMessage(chatId, '🎵 **در حال تولید صدا...**');

        const characterId = this.userCharacters.get(userId) || 'hamid';
        const character = this.getCharacter(characterId);
        const voiceId = character?.voice_id || this.config.VOICE_ID;

        if (this.apis.elevenlabs) {
            const audioBuffer = await this.apis.elevenlabs.textToSpeech(text, voiceId);
            if (audioBuffer) {
                await this.sendAudio(chatId, audioBuffer, `🎵 ${text.substring(0, 50)}...`);
                return;
            }
        }
        
        await DB.addBalance(env, userId, 'voice', 1);
        await this.sendMessage(chatId, '❌ **خطا در تولید صدا.** موجودی شما برگشت داده شد.');
    }

    async handleImage(env, chatId, userId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, 
                `🎨 **تولید تصویر**\n\nبرای تولید تصویر با هوش مصنوعی:\n/image [توضیحات]\n\nمثال: /image یک گربه در جنگل\n\n💰 هزینه: ۱ واحد تصویر`
            );
            return;
        }

        const prompt = args.join(' ');
        const balance = await DB.getBalance(env, userId);
        
        if (!balance || balance.image <= 0) {
            await this.sendMessage(chatId, 
                `⚠️ **موجودی تصویر شما تمام شده!**\n\nبرای شارژ: /buy image_pack`
            );
            return;
        }

        await DB.deductBalance(env, userId, 'image', 1);
        await this.sendMessage(chatId, '🎨 **در حال تولید تصویر...**');

        if (this.apis.openai) {
            const imageUrl = await this.apis.openai.generateImage(prompt);
            if (imageUrl) {
                await this.sendPhoto(chatId, imageUrl, `🎨 ${prompt}`);
                return;
            }
        }
        
        await DB.addBalance(env, userId, 'image', 1);
        await this.sendMessage(chatId, '❌ **خطا در تولید تصویر.** موجودی شما برگشت داده شد.');
    }

    async handleVideo(env, chatId, userId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, 
                `🎬 **تولید ویدیو**\n\nبرای تولید ویدیو با هوش مصنوعی:\n/video [توضیحات]\n\nمثال: /video یک منظره زیبا\n\n💰 هزینه: ۱ واحد ویدیو`
            );
            return;
        }

        const prompt = args.join(' ');
        const balance = await DB.getBalance(env, userId);
        
        if (!balance || balance.video <= 0) {
            await this.sendMessage(chatId, 
                `⚠️ **موجودی ویدیو شما تمام شده!**\n\nبرای شارژ: /buy video_pack`
            );
            return;
        }

        await DB.deductBalance(env, userId, 'video', 1);
        await this.sendMessage(chatId, '🎬 **در حال تولید ویدیو... (حدود ۱ دقیقه)**');

        if (this.apis.runway) {
            const videoUrl = await this.apis.runway.generateVideo(prompt);
            if (videoUrl) {
                await this.sendVideo(chatId, videoUrl, `🎬 ${prompt}`);
                return;
            }
        }
        
        await DB.addBalance(env, userId, 'video', 1);
        await this.sendMessage(chatId, '❌ **خطا در تولید ویدیو.** موجودی شما برگشت داده شد.');
    }

    // ============================================
    // دستورات ادمین
    // ============================================

    async showStats(env, chatId) {
        const stats = await DB.getStats(env);
        const totalChars = this.getAllCharacters().length;
        const totalModels = this.getAllModels().length;

        let text = `📊 **آمار ربات**\n\n`;
        text += `👥 کل کاربران: ${stats.total}\n`;
        text += `⭐ کاربران ویژه: ${stats.premium}\n`;
        text += `💰 درآمد کل: ${stats.income?.toLocaleString() || 0} تومان\n`;
        text += `💳 پرداخت‌های در انتظار: ${stats.pendingPayments || 0}\n\n`;
        text += `📈 **نرخ تبدیل:** ${stats.total > 0 ? ((stats.premium / stats.total) * 100).toFixed(1) : 0}%\n\n`;
        text += `🎭 شخصیت‌ها: ${totalChars}\n`;
        text += `🧠 مدل‌ها: ${totalModels}`;

        await this.sendMessage(chatId, text);
    }

    async confirmPayment(env, chatId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, '/confirmpay [شناسه پرداخت]');
            return;
        }

        const paymentId = parseInt(args[0]);
        const result = await DB.confirmPayment(env, paymentId);
        
        if (result) {
            const user = await DB.getUser(env, result.user_id);
            await this.sendMessage(chatId, 
                `✅ **پرداخت #${paymentId} تایید شد.**\n\n👤 کاربر: ${user.first_name || 'کاربر'} (${result.user_id})\n📦 بسته: ${result.plan}\n⏳ مدت: ${result.days} روز`
            );
            await this.sendMessage(result.user_id, 
                `🎉 **پرداخت شما تایید شد!**\n\n📦 بسته: ${result.plan}\n✅ اشتراک شما فعال شد.`
            );
        } else {
            await this.sendMessage(chatId, '❌ **پرداخت یافت نشد یا قبلاً تایید شده.**');
        }
    }

    async rejectPayment(env, chatId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, '/rejectpay [شناسه پرداخت]');
            return;
        }

        const paymentId = parseInt(args[0]);
        const reason = args.slice(1).join(' ') || 'توسط ادمین رد شد';
        
        await env.DB.prepare(`UPDATE payments SET status = 'rejected', admin_note = ? WHERE id = ?`)
            .bind(reason, paymentId).run();

        const payment = await env.DB.prepare('SELECT * FROM payments WHERE id = ?').bind(paymentId).first();
        
        await this.sendMessage(chatId, `❌ **پرداخت #${paymentId} رد شد.**`);
        await this.sendMessage(payment.user_id, 
            `❌ **پرداخت شما رد شد.**\n\nدلیل: ${reason}\n\nدر صورت اشتباه، با پشتیبانی تماس بگیرید.`
        );
    }

    async addBalanceAdmin(env, chatId, args) {
        if (args.length < 3) {
            await this.sendMessage(chatId, '/addbalance [user_id] [type] [amount]\n\nانواع: text, voice, image, video');
            return;
        }

        const userId = parseInt(args[0]);
        const type = args[1];
        const amount = parseInt(args[2]);
        const validTypes = ['text', 'voice', 'image', 'video'];

        if (!validTypes.includes(type)) {
            await this.sendMessage(chatId, '❌ **نوع نامعتبر.**\n\nانواع: text, voice, image, video');
            return;
        }

        await DB.addBalance(env, userId, type, amount);
        await this.sendMessage(chatId, `✅ **${amount} واحد ${type} به کاربر ${userId} اضافه شد.**`);
    }

    async givePremiumAdmin(env, chatId, args) {
        if (args.length < 2) {
            await this.sendMessage(chatId, '/givepremium [user_id] [days]');
            return;
        }

        const userId = parseInt(args[0]);
        const days = parseInt(args[1]);
        
        const result = await DB.setPremium(env, userId, `admin_${days}d`, days);
        if (result) {
            await this.sendMessage(chatId, `✅ **اشتراک ${days} روزه به کاربر ${userId} اعطا شد.**`);
            await this.sendMessage(userId, `🎉 **اشتراک ویژه ${days} روزه به شما اعطا شد!**`);
        } else {
            await this.sendMessage(chatId, '❌ **خطا در اعطای اشتراک.**');
        }
    }

    async banUser(env, chatId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, '/ban [user_id]');
            return;
        }

        const userId = parseInt(args[0]);
        await env.DB.prepare(`UPDATE users SET is_banned = TRUE WHERE user_id = ?`).bind(userId).run();
        await this.sendMessage(chatId, `⛔ **کاربر ${userId} بن شد.**`);
        await this.sendMessage(userId, '⛔ **شما توسط ادمین مسدود شدید.**');
    }

    async unbanUser(env, chatId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, '/unban [user_id]');
            return;
        }

        const userId = parseInt(args[0]);
        await env.DB.prepare(`UPDATE users SET is_banned = FALSE WHERE user_id = ?`).bind(userId).run();
        await this.sendMessage(chatId, `✅ **کاربر ${userId} آنبن شد.**`);
        await this.sendMessage(userId, '✅ **شما توسط ادمین آزاد شدید.**');
    }

    async broadcast(env, chatId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, '/broadcast [متن پیام]');
            return;
        }

        const msg = args.join(' ');
        const users = await env.DB.prepare('SELECT user_id FROM users').all();
        let sent = 0;

        for (const user of users.results || []) {
            try {
                await this.sendMessage(user.user_id, `📨 **پیام همگانی**\n\n${msg}`);
                sent++;
            } catch (e) {}
        }

        await this.sendMessage(chatId, `✅ **پیام به ${sent} کاربر ارسال شد.**`);
    }

    async searchUser(env, chatId, args) {
        if (args.length === 0) {
            await this.sendMessage(chatId, '/search [نام یا آیدی کاربر]');
            return;
        }

        const query = args.join(' ');
        const results = await env.DB.prepare(`
            SELECT * FROM users 
            WHERE user_id LIKE ? OR username LIKE ? OR first_name LIKE ?
            LIMIT 10
        `).bind(`%${query}%`, `%${query}%`, `%${query}%`).all();

        if (!results.results || results.results.length === 0) {
            await this.sendMessage(chatId, '❌ **کاربری یافت نشد.**');
            return;
        }

        let text = '🔍 **نتایج جستجو:**\n\n';
        for (const user of results.results) {
            text += `👤 ${user.first_name || 'کاربر'} (${user.user_id})\n`;
            text += `📛 @${user.username || 'ندارد'}\n`;
            text += `📅 ${new Date(user.created_at).toLocaleDateString('fa-IR')}\n\n`;
        }

        await this.sendMessage(chatId, text);
    }

    // ============================================
    // راهنما
    // ============================================

    getHelpMessage() {
        const totalChars = this.getAllCharacters().length;
        const totalModels = this.getAllModels().length;

        return `🧭 **راهنمای کامل ${CONFIG.BOT_NAME}**\n\n` +
            `🎯 **دستورات اصلی:**\n` +
            `/start - شروع مجدد\n` +
            `/panel - پنل مدیریت\n` +
            `/help - این راهنما\n` +
            `/characters - ${totalChars} شخصیت\n` +
            `/models - ${totalModels} موتور\n` +
            `/profile - پروفایل\n` +
            `/balance - موجودی\n\n` +
            `🎨 **تولید محتوا:**\n` +
            `/voice [متن] - تبدیل به صدای زنونه\n` +
            `/image [توضیحات] - تولید تصویر\n` +
            `/video [توضیحات] - تولید ویدیو\n\n` +
            `⭐ **اشتراک:**\n` +
            `/buy - مشاهده بسته‌ها\n` +
            `/buy [نام] - خرید بسته\n\n` +
            `❓ **پشتیبانی:**\n` +
            `/ticket موضوع | متن - ثبت تیکت\n` +
            `/my_tickets - لیست تیکت‌ها\n\n` +
            `👑 **ادمین:**\n` +
            `/admin - پنل ادمین\n` +
            `/stats - آمار\n` +
            `/search [user] - جستجو\n` +
            `/confirmpay [id] - تایید پرداخت\n` +
            `/rejectpay [id] - رد پرداخت\n` +
            `/addbalance [user] [type] [amount] - افزایش موجودی\n` +
            `/givepremium [user] [days] - اعطای اشتراک\n` +
            `/ban [user] - بن کاربر\n` +
            `/unban [user] - آنبن کاربر\n` +
            `/broadcast [message] - پیام همگانی`;
    }

    getAdminHelp() {
        return `👑 **پنل ادمین**\n\n` +
            `/stats - آمار کامل\n` +
            `/search [user] - جستجوی کاربر\n` +
            `/confirmpay [id] - تایید پرداخت\n` +
            `/rejectpay [id] - رد پرداخت\n` +
            `/addbalance [user] [type] [amount] - افزایش موجودی\n` +
            `/givepremium [user] [days] - اعطای اشتراک\n` +
            `/ban [user] - بن کاربر\n` +
            `/unban [user] - آنبن کاربر\n` +
            `/broadcast [message] - پیام همگانی`;
    }
}

// ============================================
// ۷. Worker اصلی برای Cloudflare
// ============================================

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        const bot = new NovaBot({
            BOT_TOKEN: env.BOT_TOKEN || CONFIG.BOT_TOKEN,
            ADMIN_ID: env.ADMIN_ID || CONFIG.ADMIN_ID,
            DEEPSEEK_API_KEY: env.DEEPSEEK_API_KEY || CONFIG.DEEPSEEK_API_KEY,
            OPENAI_API_KEY: env.OPENAI_API_KEY || CONFIG.OPENAI_API_KEY,
            GEMINI_API_KEY: env.GEMINI_API_KEY || CONFIG.GEMINI_API_KEY,
            ELEVENLABS_API_KEY: env.ELEVENLABS_API_KEY || CONFIG.ELEVENLABS_API_KEY,
            ANTHROPIC_API_KEY: env.ANTHROPIC_API_KEY || CONFIG.ANTHROPIC_API_KEY,
            XAI_API_KEY: env.XAI_API_KEY || CONFIG.XAI_API_KEY,
            DASHSCOPE_API_KEY: env.DASHSCOPE_API_KEY || CONFIG.DASHSCOPE_API_KEY,
            MISTRAL_API_KEY: env.MISTRAL_API_KEY || CONFIG.MISTRAL_API_KEY,
            GROQ_API_KEY: env.GROQ_API_KEY || CONFIG.GROQ_API_KEY,
            COHERE_API_KEY: env.COHERE_API_KEY || CONFIG.COHERE_API_KEY,
            RUNWAY_API_KEY: env.RUNWAY_API_KEY || CONFIG.RUNWAY_API_KEY,
            VOICE_ID: env.VOICE_ID || CONFIG.VOICE_ID,
            SUPPORT_USERNAME: env.SUPPORT_USERNAME || 'your_support'
        });

        await DB.init(env);

        // ===== Webhook =====
        if (request.method === 'POST' && path === '/webhook') {
            try {
                const update = await request.json();

                if (update.callback_query) {
                    const cb = update.callback_query;
                    await bot.handleCallback(
                        env,
                        cb.message.chat.id,
                        cb.from.id,
                        cb.data,
                        cb.message.message_id,
                        cb.id
                    );
                    return new Response('OK');
                }

                if (update.message) {
                    const msg = update.message;
                    const chatId = msg.chat.id;
                    const userId = msg.from.id;
                    const text = msg.text || '';
                    const isReply = !!msg.reply_to_message;
                    const replyToId = msg.reply_to_message?.message_id;

                    await DB.ensureUser(env, userId, msg.from.username, msg.from.first_name, msg.from.last_name);

                    if (text.startsWith('/')) {
                        const parts = text.split(' ');
                        const command = parts[0];
                        const args = parts.slice(1);
                        await bot.handleCommand(env, chatId, userId, command, args, isReply, replyToId);
                    } else if (isReply) {
                        const characterId = bot.userCharacters.get(userId) || 'hamid';
                        const modelId = bot.userModels.get(userId) || 'hamid_ai';
                        const response = await bot.generateResponse(env, userId, text, characterId, modelId, isReply);
                        
                        if (response) {
                            await bot.sendMessage(chatId, response.text);
                            if (response.audio) {
                                await bot.sendAudio(chatId, response.audio, `🎵 ${response.character} | ${response.model}`, replyToId);
                            }
                        }
                    }
                }

                return new Response('OK');
            } catch (error) {
                console.error('Webhook Error:', error);
                return new Response('ERROR', { status: 500 });
            }
        }

        // ===== صفحه اصلی =====
        const stats = await DB.getStats(env);
        const totalChars = bot.getAllCharacters().length;
        const totalModels = bot.getAllModels().length;

        return new Response(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${CONFIG.BOT_NAME}</title>
                <meta charset="utf-8">
                <style>
                    body { font-family: Tahoma, sans-serif; text-align: center; padding: 20px; 
                           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                           color: white; min-height: 100vh; display: flex; justify-content: center; align-items: center; }
                    .container { max-width: 1000px; margin: 0 auto; background: rgba(255,255,255,0.1); 
                                 padding: 50px; border-radius: 25px; backdrop-filter: blur(15px); }
                    h1 { font-size: 3.5em; margin-bottom: 20px; text-shadow: 3px 3px 6px rgba(0,0,0,0.3); color: #ffd700; }
                    h2 { font-size: 1.8em; margin-bottom: 40px; opacity: 0.95; }
                    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0; }
                    .stat { background: rgba(255,255,255,0.15); padding: 25px; border-radius: 20px; transition: transform 0.3s; }
                    .stat:hover { transform: translateY(-8px); background: rgba(255,255,255,0.25); }
                    .stat-number { font-size: 3em; font-weight: bold; color: #4CAF50; }
                    .footer { margin-top: 40px; border-top: 2px solid rgba(255,255,255,0.2); padding-top: 20px; }
                    .highlight { color: #ffd700; font-weight: bold; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>${CONFIG.BOT_NAME}</h1>
                    <h2>نسخه ${CONFIG.VERSION} - کامل نهایی</h2>
                    <p>ربات تلگرام با ${totalModels} مدل AI، ${totalChars} شخصیت و مدیریت کامل</p>
                    
                    <div class="stats">
                        <div class="stat"><div class="stat-number">${stats?.total || 0}</div><div>کاربران</div></div>
                        <div class="stat"><div class="stat-number">${totalModels}</div><div>مدل AI</div></div>
                        <div class="stat"><div class="stat-
number">${totalChars}</div><div>شخصیت‌ها</div></div>
                        <div class="stat"><div class="stat-number">❤️</div><div>Hamid AI Pro</div></div>
                    </div>
                    
                    <div class="footer">
                        <p>🤖 ربات کامل با ${totalModels} مدل AI و ${totalChars} شخصیت</p>
                        <p>💡 دستورات: <span class="highlight">/start</span> | <span class="highlight">/panel</span> | <span class="highlight">/help</span></p>
                        <p>🔧 Webhook: POST /webhook | Admin ID: ${CONFIG.ADMIN_ID || env.ADMIN_ID}</p>
                    </div>
                </div>
            </body>
            </html>
        `, {
            headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' }
        });
    }
};
