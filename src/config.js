// ============================================================
// 🔐 CONFIGURATION - تنظیمات اصلی ربات
// ============================================================

export const CONFIG = {
  // ===== توکن ربات تلگرام =====
  BOT_TOKEN: "8560975415:AAGH3SYggvoCN97fqXRzAJRD3oUTEighF7c",
  
  // ===== آیدی ادمین =====
  ADMIN_ID: "5989309344",
  
  // ===== کلیدهای API =====
  GEMINI_API_KEY: "AQ.Ab8RN6Jq1ydoS7lxlzo3-CsaAiny8len92cCoHt00_uaSZD9zg",
  OPENAI_API_KEY: "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",
  
  // ===== کلیدهای اختیاری =====
  // CLAUDE_API_KEY: "",
  // DEEPSEEK_API_KEY: "",
  // GROK_API_KEY: "",
  // ELEVENLABS_API_KEY: "",
  // PIXABAY_KEY: "",
  // RUNWAY_KEY: "",
  
  // ===== تنظیمات ربات =====
  BOT_NAME: "🤖 Nova AI Pro",
  VERSION: "10.0-COMPLETE-2025",
  MAX_HISTORY: 10,
  DEFAULT_MODEL: "gemini-2.0-flash",
  
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
  
  // ===== بسته‌های اشتراک =====
  SUBSCRIPTION_PLANS: {
    test: {
      id: 'test',
      name: 'تست ۱ روزه',
      price: 15000,
      days: 1,
      features: { text: 50, image: 20, video: 0, voice: 10 },
      badge: '⭐'
    },
    image_pack: {
      id: 'image_pack',
      name: 'بسته تصویر',
      price: 49000,
      days: 0,
      features: { text: 50, image: 100, video: 0, voice: 0 },
      badge: '🎨'
    },
    video_pack: {
      id: 'video_pack',
      name: 'بسته ویدیو',
      price: 79000,
      days: 0,
      features: { text: 50, image: 0, video: 50, voice: 0 },
      badge: '🎬'
    },
    gold: {
      id: 'gold',
      name: 'بسته طلایی',
      price: 199000,
      days: 30,
      features: { text: 500, image: 200, video: 50, voice: 100 },
      badge: '👑'
    },
    premium_month: {
      id: 'premium_month',
      name: 'اشتراک ویژه ماهانه',
      price: 149000,
      days: 30,
      features: { text: 1000, image: 500, video: 100, voice: 200 },
      badge: '💎'
    },
    premium_year: {
      id: 'premium_year',
      name: 'اشتراک ویژه سالانه',
      price: 999000,
      days: 365,
      features: { text: 9999, image: 9999, video: 9999, voice: 9999 },
      badge: '🌟'
    }
  }
};

export default CONFIG;
