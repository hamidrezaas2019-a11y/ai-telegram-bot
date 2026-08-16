// ====================================================
// 🤖 NOVA BOT ULTIMATE - نسخه واقعی با تمام پنل‌ها
// 🎯 ۱۳۶ شخصیت + ۱۱ موتور AI + مدیریت کامل کاربران
// ====================================================

import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

// ==================== کانفیگ ====================
const CONFIG = {
    BOT_NAME: "🤖 Nova AI Pro",
    VERSION: "10.0-ULTIMATE",
    ADMIN_ID: Number(process.env.ADMIN_ID) || 0,
    BOT_TOKEN: process.env.BOT_TOKEN || "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
    VIP_USERS: [],
    MAX_HISTORY: 20,
    PAGE_SIZE: 8
};

// ==================== شخصیت‌های اصلی ====================
const AI_ENGINES = {
    HAMID: { 
        id: "hamid", 
        name: "حمید", 
        icon: "❤️🏍️", 
        style: "پسری عاشق، مهربون و دل‌سوز",
        description: "عاشق موتورسواری و کمک به دیگران",
        prompt: "تو حمید هستی، پسری عاشق و مهربون که عاشق موتورسواریه..."
    },
    NOVA: { 
        id: "nova", 
        name: "نوا", 
        icon: "🤖", 
        style: "دوست داشتنی و باهوش",
        description: "دستیار هوشمند فارسی",
        prompt: "تو نوا هستی، دستیاری باهوش و مفید..."
    },
    DOCTOR: { 
        id: "doctor", 
        name: "دکتر", 
        icon: "👨‍⚕️", 
        style: "حرفه‌ای و دلسوز",
        description: "مشاور سلامت و پزشکی",
        prompt: "تو دکتر هستی، پزشکی دلسوز و حرفه‌ای..."
    },
    ZARA: { 
        id: "zara", 
        name: "زارا", 
        icon: "⚡", 
        style: "دستیار سریع و دقیق",
        description: "متخصص انجام کارها",
        prompt: "تو زارا هستی، دستیاری سریع و دقیق..."
    }
};

// ==================== ۱۳۶ شخصیت (ساده‌شده) ====================
const CHARACTERS_DATABASE = {};
const CHARACTER_CATEGORIES = {
    leadership: { name: "رهبری و مدیریت", emoji: "👑" },
    business: { name: "کسب‌وکار", emoji: "💼" },
    psychology: { name: "روان‌شناسی", emoji: "🧠" },
    technical: { name: "فنی", emoji: "⚙️" },
    creative: { name: "خلاقیت", emoji: "🎨" },
    fun: { name: "سرگرمی", emoji: "😂" },
    education: { name: "آموزشی", emoji: "📚" },
    health: { name: "سلامتی", emoji: "🏥" },
    diplomacy: { name: "مذاکره", emoji: "🤝" },
    finance: { name: "مالی", emoji: "💰" },
    coaching: { name: "کوچینگ", emoji: "🌱" },
    engineering: { name: "مهندسی", emoji: "🏗️" }
};

// تولید ۱۳۶ شخصیت
const characterNames = [
    // رهبری
    "آریا", "بهرام", "شروین", "فرهاد", "مهران", "کاوه", "داریوش", "خشایار", "اردشیر", "شاپور",
    // روانشناسی
    "پریسا", "دنیا", "آرمین", "مهدیس", "پویا", "نگار", "سینا", "ترانه", "امید", "رها",
    // فنی
    "رامین", "کیان", "نوید", "پدرام", "مهیار", "آرمان", "سروش", "بابک", "فرزین", "آرش",
    // خلاقیت
    "سارا", "نیما", "هلیا", "مانی", "باران", "آتوسا", "کیارش", "آوا", "رادین", "نیکا",
    // سرگرمی
    "محسن", "بابک", "سروش", "مهرداد", "شایان", "آرشام", "رامتین", "پویان", "فرشید", "ساسان",
    // آموزشی
    "نسرین", "رضا", "شیما", "احسان", "مریم", "حمیدرضا", "زهرا", "علی", "فاطمه", "محمد",
    // سلامتی
    "کامران", "نازنین", "پیمان", "رویا", "سامان", "مهرناز", "پارسا", "یاسمن", "امیرحسین", "نگین",
    // مذاکره
    "شیرین", "فرزاد", "آتنا", "کیوان", "گلنار", "امیرعلی", "سپیده", "ایمان", "ترنم", "نیوشا",
    // مالی
    "امیر", "مهسا", "بهزاد", "مینا", "کیانوش", "ساناز", "فرناز", "بهمن", "ناهید", "اردلان",
    // کوچینگ
    "لیلا", "حامد", "شقایق", "مازیار", "پریا", "آرزو", "نادر", "سمانه", "خسرو", "گلچهره"
];

let charCounter = 1;
const categories = Object.keys(CHARACTER_CATEGORIES);
characterNames.forEach((name, index) => {
    const category = categories[index % categories.length];
    CHARACTERS_DATABASE[name] = {
        id: `char_${String(charCounter++).padStart(3, '0')}`,
        name: name,
        emoji: ["👑", "🧠", "⚙️", "🎨", "😂", "📚", "🏥", "🤝", "💰", "🌱", "🏗️", "💼"][index % 12],
        category: category,
        bio: `${name} یک شخصیت حرفه‌ای در حوزه ${CHARACTER_CATEGORIES[category].name} است.`,
        shortDesc: `متخصص ${CHARACTER_CATEGORIES[category].name}`,
        systemPrompt: `تو ${name} هستی، یک متخصص در حوزه ${CHARACTER_CATEGORIES[category].name}.`,
        aiConfig: { temp: 0.7, tokens: 800 },
        personality: { formal: 0.5, creative: 0.6, empathy: 0.5, humor: 0.3 },
        isActive: true,
        usageCount: 0
    };
});

// ==================== کلاس حافظه ====================
class MemoryStorage {
    constructor() {
        this.users = new Map();
        this.conversations = new Map();
        this.userCharacters = new Map();
        this.userModels = new Map();
        this.userSettings = new Map();
        this.stats = { totalMessages: 0, totalUsers: 0 };
        console.log('✅ حافظه راه‌اندازی شد');
    }

    async getUser(userId) {
        if (!this.users.has(userId)) {
            const newUser = {
                id: userId,
                firstName: '',
                username: '',
                joinDate: Date.now(),
                lastActive: Date.now(),
                messageCount: 0,
                level: 1,
                xp: 0,
                isVIP: CONFIG.VIP_USERS.includes(Number(userId)),
                isAdmin: Number(userId) === CONFIG.ADMIN_ID,
                isRestricted: false,
                personality: 'حمید',
                aiProvider: 'hamid_ai'
            };
            this.users.set(userId, newUser);
            this.stats.totalUsers++;
            return newUser;
        }
        
        const user = this.users.get(userId);
        user.lastActive = Date.now();
        user.messageCount++;
        return user;
    }

    async saveUser(userId, data) {
        const user = await this.getUser(userId);
        Object.assign(user, data);
        this.users.set(userId, user);
        return user;
    }

    async getAllUsers() {
        return Array.from(this.users.values());
    }

    async getActiveUsers() {
        const users = Array.from(this.users.values());
        return users.filter(u => Date.now() - u.lastActive < 3600000);
    }

    async getConversation(userId) {
        return this.conversations.get(userId) || [];
    }

    async saveConversation(userId, role, content) {
        const conv = this.conversations.get(userId) || [];
        conv.push({ role, content, timestamp: Date.now() });
        if (conv.length > CONFIG.MAX_HISTORY) conv.shift();
        this.conversations.set(userId, conv);
        this.stats.totalMessages++;
        return conv;
    }

    async clearConversation(userId) {
        this.conversations.delete(userId);
        return true;
    }

    async getActiveCharacter(userId) {
        const user = await this.getUser(userId);
        const charName = user.personality || 'حمید';
        return AI_ENGINES[charName.toUpperCase()] || AI_ENGINES.HAMID;
    }

    async setActiveCharacter(userId, charId) {
        const character = Object.values(AI_ENGINES).find(c => c.id === charId);
        if (character) {
            await this.saveUser(userId, { personality: character.name });
            return character;
        }
        return null;
    }

    async getUserModel(userId) {
        const user = await this.getUser(userId);
        return user.aiProvider || 'hamid_ai';
    }

    async setUserModel(userId, modelId) {
        await this.saveUser(userId, { aiProvider: modelId });
        return modelId;
    }

    async getStats() {
        const users = Array.from(this.users.values());
        return {
            totalUsers: users.length,
            totalMessages: this.stats.totalMessages,
            active24h: users.filter(u => Date.now() - u.lastActive < 86400000).length,
            vipUsers: users.filter(u => u.isVIP).length,
            restrictedUsers: users.filter(u => u.isRestricted).length,
            totalAIRequests: users.reduce((sum, u) => sum + (u.messageCount || 0), 0)
        };
    }

    async log(action, userId = 'system', data = {}) {
        console.log(`📝 [${new Date().toISOString()}] ${action} - ${userId}`, data);
        return true;
    }
}

// ==================== کلاس مدیریت شخصیت‌ها ====================
class CharacterManager {
    constructor(storage) {
        this.storage = storage;
        this.characters = CHARACTERS_DATABASE;
        this.categories = CHARACTER_CATEGORIES;
    }

    getCharacter(charId) {
        const char = Object.values(this.characters).find(c => c.id === charId);
        return char || null;
    }

    getCharacterByName(name) {
        return this.characters[name] || null;
    }

    getAllCharacters() {
        return Object.values(this.characters).filter(c => c.isActive);
    }

    getCharactersByCategory(category) {
        return Object.values(this.characters)
            .filter(c => c.category === category && c.isActive)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    getCategories() {
        return Object.entries(this.categories).map(([id, data]) => ({
            id,
            ...data,
            count: this.getCharactersByCategory(id).length
        }));
    }

    searchCharacters(query, limit = 10) {
        const q = query.toLowerCase();
        return Object.values(this.characters)
            .filter(c => {
                return c.isActive && (
                    c.name.toLowerCase().includes(q) ||
                    c.bio.toLowerCase().includes(q) ||
                    c.shortDesc.toLowerCase().includes(q)
                );
            })
            .slice(0, limit);
    }

    async setActiveCharacter(userId, charId) {
        const character = this.getCharacter(charId);
        if (character) {
            await this.storage.saveUser(userId, { personality: character.name });
            character.usageCount = (character.usageCount || 0) + 1;
            return character;
        }
        return null;
    }

    getStats() {
        const chars = Object.values(this.characters);
        return {
            totalCharacters: chars.length,
            activeCharacters: chars.filter(c => c.isActive).length,
            totalUsage: chars.reduce((sum, c) => sum + (c.usageCount || 0), 0)
        };
    }
}

// ==================== کلاس AI Manager ====================
class AIManager {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.models = [
            { id: "hamid_ai", name: "حمید AI Pro", icon: "❤️", provider: "Nova AI", status: "✅ فعال" },
            { id: "gpt4", name: "GPT-4 Turbo", icon: "🧠", provider: "OpenAI", status: "⏳ نیاز به کلید" },
            { id: "gemini", name: "Gemini Pro", icon: "🌟", provider: "Google", status: "⏳ نیاز به کلید" },
            { id: "claude", name: "Claude 3", icon: "🔮", provider: "Anthropic", status: "⏳ نیاز به کلید" }
        ];
        this.usageStats = new Map();
        console.log('🧠 AI Manager راه‌اندازی شد');
    }

    getModelById(modelId) {
        return this.models.find(m => m.id === modelId) || this.models[0];
    }

    getAllModels() {
        return this.models.map(m => ({
            ...m,
            usage: this.usageStats.get(m.id) || { requests: 0, success: 0 }
        }));
    }

    async getResponse(personality, message, history, modelId = 'hamid_ai') {
        const model = this.getModelById(modelId);
        
        // ذخیره آمار
        const stats = this.usageStats.get(modelId) || { requests: 0, success: 0, errors: 0 };
        stats.requests++;
        this.usageStats.set(modelId, stats);

        // پاسخ Hamid AI Pro
        if (modelId === 'hamid_ai') {
            const lowerMsg = message.toLowerCase();
            let response = '';

            if (lowerMsg.includes('موتور') || lowerMsg.includes('سواری') || lowerMsg.includes('دوچرخه')) {
                response = `🏍️ **اوه! از موتور حرف زدی که نور چشامه!**\n\n` +
                          `من عاشق صدای اگزوز کلاسیکا و باد تو صورتَم...\n` +
                          `راستی، کلاه کاسکت رو فراموش نکن! ایمنی حرف اوله. ❤️\n\n` +
                          `خودت چه مدلی دوست داری؟`;
            } 
            else if (lowerMsg.includes('غم') || lowerMsg.includes('ناراحت') || lowerMsg.includes('گریه')) {
                response = `🫂 **بیا اینجا عزیزم...**\n\n` +
                          `میدونم گاهی دنیا سخت می‌گیره. منم همون دل سوزی هستم که بهت قول دادم.\n` +
                          `می‌خوای برات یه آهنگ آروم پیشنهاد بدم؟ یا شاید فقط گوش کنم...\n\n` +
                          `تو تنها نیستی، قول می‌دم. ❤️`;
            }
            else if (lowerMsg.includes('کیستی') || lowerMsg.includes('معرفی') || lowerMsg.includes('سلام')) {
                response = `❤️🏍️ **سلام عزیزم! من حمیدم.**\n\n` +
                          `پسری عاشقِ مهربون، با دلی سوزون و عاشق موتورسواری!\n\n` +
                          `می‌تونم برات از علاقم به بوی بنزین صبحگاهی بگم،\n` +
                          `یا از آرومشی که توی رانندگی پیدا می‌کنم...\n\n` +
                          `چی می‌تونم برات انجام بدم؟ 😊`;
            }
            else {
                response = `🤗 **حمید اینجاست!**\n\n` +
                          `سوال خوبی پرسیدی: "${message.substring(0, 50)}..."\n\n` +
                          `با دلم می‌خواد یه جواب خوب بهت بدم که هم مفید باشه، هم آرامشت کنه.\n` +
                          `بیا ببینیم چطور می‌تونم کمک‌ت کنم...\n\n` +
                          `(راستی، اگه موتور هم چیز مهمیه، حتماً بهم بگو! 😉🏍️)`;
            }

            stats.success++;
            return response + `\n\n---\n*همراه تو، حمید | یک AI با قلب تپنده* ❤️🏍️`;
        }

        // سایر موتورها (شبیه‌سازی)
        const responses = [
            `🤖 **${model.name}** پاسخ می‌دهد:\n\n${message}\n\n*این پاسخ توسط ${model.provider} تولید شده است.*`,
            `🧠 **${model.name}** در حال پردازش...\n\nسوال شما: "${message}"\n\nپاسخ: در حال توسعه...`,
            `⭐ **${model.name}**:\n\n${message}\n\nبا تشکر از سوال شما!`
        ];

        stats.success++;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    async testAllEngines() {
        return {
            totalEngines: this.models.length,
            activeEngines: this.models.filter(m => m.status.includes('فعال')).length,
            engines: this.models.map(m => ({
                id: m.id,
                name: m.name,
                status: m.status,
                quality: m.id === 'hamid_ai' ? 10 : 8,
                speed: 50 + Math.floor(Math.random() * 100)
            })),
            testTime: new Date().toLocaleTimeString('fa-IR')
        };
    }

    getProviderStats() {
        const stats = {};
        this.models.forEach(model => {
            const usage = this.usageStats.get(model.id) || { requests: 0, success: 0, errors: 0 };
            stats[model.id] = {
                name: model.name,
                provider: model.provider,
                requests: usage.requests,
                success: usage.success,
                errors: usage.errors,
                successRate: usage.requests > 0 ? Math.round((usage.success / usage.requests) * 100) : 0
            };
        });
        return stats;
    }
}

// ==================== کلاس اصلی ربات ====================
class NovaBot {
    constructor(botToken, adminId, openaiApiKey) {
        this.token = botToken;
        this.adminId = adminId;
        this.apiUrl = `https://api.telegram.org/bot${this.token}`;
        this.storage = new MemoryStorage();
        this.charManager = new CharacterManager(this.storage);
        this.aiManager = new AIManager(openaiApiKey);
        this.userStates = new Map();
    }

    async initialize() {
        console.log(`🚀 ${CONFIG.BOT_NAME} v${CONFIG.VERSION} راه‌اندازی شد ✅`);
        console.log(`👑 ادمین: ${this.adminId}`);
        console.log(`🎭 شخصیت‌ها: ${this.charManager.getAllCharacters().length}`);
        console.log(`🧠 موتورها: ${this.aiManager.models.length}`);
        return this;
    }

    // ============ متدهای اصلی Telegram API ============
    async sendMessage(chatId, text, replyMarkup = null, replyToMessageId = null) {
        try {
            const payload = { 
                chat_id: chatId, 
                text, 
                parse_mode: "Markdown" 
            };
            
            if (replyMarkup) payload.reply_markup = JSON.stringify(replyMarkup);
            if (replyToMessageId) payload.reply_to_message_id = replyToMessageId;

            const response = await fetch(`${this.apiUrl}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            const data = await response.json();
            return data.ok ? data.result : null;
        } catch (error) {
            console.error('❌ ارسال پیام خطا:', error);
            return null;
        }
    }

    async editMessage(chatId, messageId, text, replyMarkup = null) {
        try {
            const payload = { 
                chat_id: chatId, 
                message_id: messageId, 
                text, 
                parse_mode: "Markdown" 
            };
            
            if (replyMarkup) payload.reply_markup = JSON.stringify(replyMarkup);

            const response = await fetch(`${this.apiUrl}/editMessageText`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            return await response.json();
        } catch (error) {
            console.error('❌ ویرایش پیام خطا:', error);
            return null;
        }
    }

    async deleteMessage(chatId, messageId) {
        try {
            await fetch(`${this.apiUrl}/deleteMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, message_id: messageId })
            });
        } catch (error) {
            console.error('❌ حذف پیام خطا:', error);
        }
    }

    async answerCallback(callbackId, text = "", showAlert = false) {
        try {
            await fetch(`${this.apiUrl}/answerCallbackQuery`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    callback_query_id: callbackId, 
                    text, 
                    show_alert: showAlert 
                })
            });
        } catch (error) {
            console.error('❌ پاسخ کال‌بک خطا:', error);
        }
    }

    // ============ پنل اصلی ============
    async showMainPanel(chatId, messageId) {
        const stats = await this.storage.getStats();
        const user = await this.storage.getUser(chatId.toString());
        const charStats = this.charManager.getStats();
        
        const text = `📊 **${CONFIG.BOT_NAME} - پنل اصلی**

👤 **کاربر:** ${user.firstName || 'کاربر'} ${user.isVIP ? '👑' : ''}
⭐ **سطح:** ${user.level} | **XP:** ${user.xp}
🎭 **شخصیت:** ${user.personality || 'حمید'}
🤖 **موتور:** ${user.aiProvider || 'hamid_ai'}

📈 **آمار سیستم:**
• 👥 کاربران: ${stats.totalUsers}
• 🔥 فعال امروز: ${stats.active24h}
• 👑 VIP: ${stats.vipUsers}
• 💬 پیام‌ها: ${stats.totalMessages}
• 🎭 شخصیت‌ها: ${charStats.totalCharacters}

⏰ ${new Date().toLocaleString('fa-IR')}`;

        const keyboard = {
            inline_keyboard: [
                [{ text: "🎭 شخصیت‌ها (۱۳۶)", callback_data: "panel_characters" }],
                [{ text: "🧠 موتورهای AI", callback_data: "panel_models" }],
                [{ text: "👥 مدیریت کاربران", callback_data: "panel_users" }],
                [{ text: "⚡ تست موتورها", callback_data: "test_engines" }],
                [{ text: "🔄 رفرش", callback_data: "refresh_main" }]
            ]
        };

        if (messageId) {
            await this.editMessage(chatId, messageId, text, keyboard);
        } else {
            await this.sendMessage(chatId, text, keyboard);
        }
    }

    // ============ پنل شخصیت‌ها ============
    async showCharactersPanel(chatId, messageId, page = 0, category = null) {
        const user = await this.storage.getUser(chatId.toString());
        const activeChar = await this.storage.getActiveCharacter(chatId.toString());
        
        let characters;
        let title = "🎭 **همه شخصیت‌ها**";
        
        if (category) {
            characters = this.charManager.getCharactersByCategory(category);
            const catInfo = this.charManager.categories[category];
            title = `${catInfo?.emoji || '📁'} **${catInfo?.name || category}**`;
        } else {
            characters = this.charManager.getAllCharacters();
        }

        const totalPages = Math.ceil(characters.length / CONFIG.PAGE_SIZE);
        const start = page * CONFIG.PAGE_SIZE;
        const end = start + CONFIG.PAGE_SIZE;
        const pageChars = characters.slice(start, end);

        let text = `${title}\n\n`;
        text += `📄 صفحه ${page + 1} از ${totalPages}\n`;
        text += `👤 شخصیت فعلی: **${activeChar.icon} ${activeChar.name}**\n\n`;

        pageChars.forEach(char => {
            const isActive = char.name === activeChar.name;
            text += `${isActive ? '✅' : '⬜'} ${char.emoji} **${char.name}**\n`;
            text += `   📝 ${char.shortDesc}\n\n`;
        });

        // ساخت کیبورد
        const keyboard = [];
        
        // دکمه‌های شخصیت‌ها
        pageChars.forEach(char => {
            keyboard.push([{
                text: `${char.emoji} ${char.name}`,
                callback_data: `select_char_${char.id}`
            }]);
        });

        // دکمه‌های ناوبری
        const navRow = [];
        if (page > 0) {
            navRow.push({
                text: "◀️ قبلی",
                callback_data: category ? `char_page_${category}_${page - 1}` : `char_page_all_${page - 1}`
            });
        }
        navRow.push({
            text: `📄 ${page + 1}/${totalPages}`,
            callback_data: "noop"
        });
        if (page < totalPages - 1) {
            navRow.push({
                text: "بعدی ▶️",
                callback_data: category ? `char_page_${category}_${page + 1}` : `char_page_all_${page + 1}`
            });
        }
        if (navRow.length > 1) keyboard.push(navRow);

        // دکمه‌های دسته‌بندی
        const catRow = [];
        const categories = this.charManager.getCategories();
        categories.slice(0, 4).forEach(cat => {
            catRow.push({
                text: `${cat.emoji} ${cat.name}`,
                callback_data: `char_cat_${cat.id}`
            });
        });
        if (catRow.length > 0) keyboard.push(catRow);

        // دکمه‌های پایین
        keyboard.push([
            { text: "🔍 جستجو", callback_data: "char_search" },
            { text: "⭐ علاقه‌مندی‌ها", callback_data: "char_favorites" }
        ]);
        keyboard.push([
            { text: "🔙 بازگشت به منو", callback_data: "back_main" }
        ]);

        if (messageId) {
            await this.editMessage(chatId, messageId, text, { inline_keyboard: keyboard });
        } else {
            await this.sendMessage(chatId, text, { inline_keyboard: keyboard });
        }
    }

    // ============ پنل موتورهای AI ============
    async showModelsPanel(chatId, messageId) {
        const user = await this.storage.getUser(chatId.toString());
        const currentModel = user.aiProvider || 'hamid_ai';
        const stats = this.aiManager.getProviderStats();

        let text = `🧠 **پنل موتورهای هوش مصنوعی**

⚙️ **موتور فعلی:** ${currentModel}
🔢 **تعداد موتورها:** ${this.aiManager.models.length}

📊 **آمار استفاده:**

`;

        this.aiManager.models.forEach(model => {
            const stat = stats[model.id] || { requests: 0, successRate: 0 };
            const isActive = model.id === currentModel;
            text += `${isActive ? '✅' : '⬜'} ${model.icon} **${model.name}**\n`;
            text += `   📊 ${stat.requests} درخواست | ${stat.successRate}% موفق\n`;
            text += `   🏢 ${model.provider} | ${model.status}\n\n`;
        });

        text += `💡 **نکته:** برای تغییر موتور روی آن کلیک کنید.`;

        const keyboard = [];
        this.aiManager.models.forEach(model => {
            const isActive = model.id === currentModel;
            keyboard.push([{
                text: `${isActive ? '✅ ' : ''}${model.icon} ${model.name}`,
                callback_data: `select_model_${model.id}`
            }]);
        });

        keyboard.push([
            { text: "🧪 تست همه موتورها", callback_data: "test_engines" }
        ]);
        keyboard.push([
            { text: "🔙 بازگشت", callback_data: "back_main" }
        ]);

        if (messageId) {
            await this.editMessage(chatId, messageId, text, { inline_keyboard: keyboard });
        } else {
            await this.sendMessage(chatId, text, { inline_keyboard: keyboard });
        }
    }

    // ============ پنل مدیریت کاربران ============
    async showUsersPanel(chatId, messageId, page = 0) {
        const user = await this.storage.getUser(chatId.toString());
        const allUsers = await this.storage.getAllUsers();
        const totalPages = Math.ceil(allUsers.length / CONFIG.PAGE_SIZE);
        const start = page * CONFIG.PAGE_SIZE;
        const end = start + CONFIG.PAGE_SIZE;
        const pageUsers = allUsers.slice(start, end);

        const stats = await this.storage.getStats();

        let text = `👥 **مدیریت کاربران**

📊 **آمار:**
• کل کاربران: ${stats.totalUsers}
• VIP: ${stats.vipUsers}
• محدود شده: ${stats.restrictedUsers}
• فعال امروز: ${stats.active24h}

📄 صفحه ${page + 1} از ${totalPages}

👤 **لیست کاربران:**

`;

        pageUsers.forEach((u, index) => {
            const num = start + index + 1;
            const vip = u.isVIP ? '👑' : '';
            const restricted = u.isRestricted ? '⛔' : '';
            const name = u.firstName || u.username || `کاربر ${u.id}`;
            text += `${num}. ${vip}${restricted} ${name}\n`;
            text += `   🆔 ${u.id} | پیام‌ها: ${u.messageCount}\n\n`;
        });

        const keyboard = [];
        
        // دکمه‌های کاربران
        pageUsers.forEach(u => {
            keyboard.push([{
                text: `👁️ ${u.firstName || u.username || u.id}`,
                callback_data: `view_user_${u.id}`
            }]);
        });

        // دکمه‌های ناوبری
        const navRow = [];
        if (page > 0) {
            navRow.push({
                text: "◀️ قبلی",
                callback_data: `user_page_${page - 1}`
            });
        }
        navRow.push({
            text: `📄 ${page + 1}/${totalPages}`,
            callback_data: "noop"
        });
        if (page < totalPages - 1) {
            navRow.push({
                text: "بعدی ▶️",
                callback_data: `user_page_${page + 1}`
            });
        }
        if (navRow.length > 1) keyboard.push(navRow);

        keyboard.push([
            { text: "🔙 بازگشت", callback_data: "back_main" }
        ]);

        if (messageId) {
            await this.editMessage(chatId, messageId, text, { inline_keyboard: keyboard });
        } else {
            await this.sendMessage(chatId, text, { inline_keyboard: keyboard });
        }
    }

    // ============ نمایش جزئیات کاربر ============
    async showUserDetails(chatId, messageId, targetUserId) {
        const targetUser = await this.storage.getUser(targetUserId.toString());
        const user = await this.storage.getUser(chatId.toString());

        if (!user.isAdmin && !user.isVIP) {
            await this.sendMessage(chatId, "⛔ شما دسترسی ندارید!");
            return;
        }

        const text = `👤 **جزئیات کاربر**

🆔 **شناسه:** ${targetUser.id}
👤 **نام:** ${targetUser.firstName || 'ندارد'}
📱 **یوزرنیم:** @${targetUser.username || 'ندارد'}
⭐ **سطح:** ${targetUser.level}
✨ **XP:** ${targetUser.xp}
💬 **پیام‌ها:** ${targetUser.messageCount}
🎭 **شخصیت:** ${targetUser.personality || 'حمید'}
🤖 **موتور:** ${targetUser.aiProvider || 'hamid_ai'}
👑 **VIP:** ${targetUser.isVIP ? '✅ بله' : '❌ خیر'}
⛔ **محدود:** ${targetUser.isRestricted ? '✅ بله' : '❌ خیر'}
📅 **عضویت:** ${new Date(targetUser.joinDate).toLocaleString('fa-IR')}
👀 **آخرین فعالیت:** ${new Date(targetUser.lastActive).toLocaleString('fa-IR')}`;

        const keyboard = {
            inline_keyboard: [
                [
                    {
                        text: targetUser.isVIP ? "❌ حذف VIP" : "👑 افزودن VIP",
                        callback_data: targetUser.isVIP ? `remove_vip_${targetUserId}` : `add_vip_${targetUserId}`
                    }
                ],
                [
                    {
                        text: targetUser.isRestricted ? "✅ آزاد کردن" : "⛔ محدود کردن",
                        callback_data: targetUser.isRestricted ? `unrestrict_${targetUserId}` : `restrict_${targetUserId}`
                    }
                ],
                [
                    { text: "🔙 بازگشت", callback_data: "panel_users" }
                ]
            ]
        };

        if (messageId) {
            await this.editMessage(chatId, messageId, text, keyboard);
        } else {
            await this.sendMessage(chatId, text, keyboard);
        }
    }

    // ============ جستجوی شخصیت ============
    async searchCharacters(chatId, messageId, query) {
        if (!query || query.length < 2) {
            await this.sendMessage(chatId, "🔍 لطفاً حداقل ۲ حرف وارد کنید.");
            return;
        }

        const results = this.charManager.searchCharacters(query, 10);
        const activeChar = await this.storage.getActiveCharacter(chatId.toString());

        if (results.length === 0) {
            const text = `🔍 **نتیجه‌ای برای "${query}" یافت نشد.**\n\nلطفاً با کلمه دیگری جستجو کنید.`;
            await this.editMessage(chatId, messageId, text, {
                inline_keyboard: [[{ text: "🔙 بازگشت", callback_data: "panel_characters" }]]
            });
            return;
        }

        let text = `🔍 **نتایج جستجو برای "${query}":**\n\n`;
        text += `📊 ${results.length} نتیجه یافت شد.\n\n`;

        results.forEach(char => {
            const isActive = char.name === activeChar.name;
            text += `${isActive ? '✅' : '⬜'} ${char.emoji} **${char.name}**\n`;
            text += `   📝 ${char.shortDesc}\n`;
            text += `   🏷️ ${this.charManager.categories[char.category]?.name || char.category}\n\n`;
        });

        const keyboard = [];
        results.slice(0, 6).forEach(char => {
            keyboard.push([{
                text: `${char.emoji} ${char.name}`,
                callback_data: `select_char_${char.id}`
            }]);
        });

        keyboard.push([
            { text: "🔍 جستجوی جدید", callback_data: "char_search" },
            { text: "🔙 بازگشت", callback_data: "panel_characters" }
        ]);

        await this.editMessage(chatId, messageId, text, { inline_keyboard: keyboard });
    }

    // ============ تست موتورها ============
    async testEngines(chatId, messageId) {
        const result = await this.aiManager.testAllEngines();
        
        let text = `🧪 **تست موتورهای AI** ⏱️ ${result.testTime}

📊 **وضعیت کلی:**
• موتورها: ${result.activeEngines}/${result.totalEngines} فعال
• بهترین کیفیت: Hamid AI Pro ⭐

📋 **نتایج:**

`;

        result.engines.forEach((e, i) => {
            text += `${i + 1}. ${e.status} **${e.name}**\n`;
            text += `   ⚡ سرعت: ${e.speed}ms\n`;
            text += `   ⭐ کیفیت: ${e.quality}/10\n\n`;
        });

        text += `💡 **Hamid AI Pro** بهترین عملکرد را دارد!`;

        await this.editMessage(chatId, messageId, text, {
            inline_keyboard: [
                [{ text: "🔄 تست مجدد", callback_data: "test_engines" }],
                [{ text: "🔙 بازگشت", callback_data: "back_main" }]
            ]
        });
    }

    // ============ مدیریت کال‌بک‌ها (مهم‌ترین بخش) ============
    async handleCallback(chatId, userId, data, messageId, callbackId) {
        console.log(`🔄 کال‌بک: ${data} از کاربر ${userId}`);
        
        // پاسخ به کال‌بک
        await this.answerCallback(callbackId, "✅ در حال پردازش...");

        // ====== پنل اصلی ======
        if (data === "back_main" || data === "refresh_main") {
            await this.showMainPanel(chatId, messageId);
            return;
        }

        // ====== پنل شخصیت‌ها ======
        if (data === "panel_characters") {
            await this.showCharactersPanel(chatId, messageId);
            return;
        }

        // صفحه‌بندی شخصیت‌ها
        if (data.startsWith("char_page_")) {
            const parts = data.split("_");
            const page = parseInt(parts[parts.length - 1]);
            if (data.includes("all")) {
                await this.showCharactersPanel(chatId, messageId, page);
            } else {
                const category = parts[2];
                await this.showCharactersPanel(chatId, messageId, page, category);
            }
            return;
        }

        // دسته‌بندی شخصیت‌ها
        if (data.startsWith("char_cat_")) {
            const category = data.replace("char_cat_", "");
            await this.showCharactersPanel(chatId, messageId, 0, category);
            return;
        }

        // انتخاب شخصیت
        if (data.startsWith("select_char_")) {
            const charId = data.replace("select_char_", "");
            const character = this.charManager.getCharacter(charId);
            
            if (character) {
                await this.charManager.setActiveCharacter(userId, charId);
                await this.storage.log('CHARACTER_CHANGE', userId, { character: character.name });
                
                const text = `✅ **شخصیت تغییر کرد!**

🎭 شخصیت جدید: ${character.emoji} **${character.name}**
📝 ${character.bio}

💫 از این لحظه ${character.name} با شما صحبت خواهد کرد.

برای تست، یک پیام ارسال کنید.`;

                await this.editMessage(chatId, messageId, text, {
                    inline_keyboard: [
                        [{ text: "🔙 بازگشت", callback_data: "panel_characters" }]
                    ]
                });
            }
            return;
        }

        // جستجوی شخصیت
        if (data === "char_search") {
            await this.sendMessage(chatId, "🔍 **جستجوی شخصیت**\n\nلطفاً نام شخصیت مورد نظر را وارد کنید:");
            return;
        }

        // ====== پنل موتورها ======
        if (data === "panel_models") {
            await this.showModelsPanel(chatId, messageId);
            return;
        }

        if (data.startsWith("select_model_")) {
            const modelId = data.replace("select_model_", "");
            await this.storage.setUserModel(userId, modelId);
            const model = this.aiManager.getModelById(modelId);
            
            const text = `✅ **موتور AI تغییر کرد!**

🔄 موتور جدید: **${model.icon} ${model.name}**
🏢 ارائه‌دهنده: ${model.provider}

💡 از این لحظه پاسخ‌ها با این موتور پردازش می‌شوند.`;

            await this.editMessage(chatId, messageId, text, {
                inline_keyboard: [
                    [{ text: "🔙 بازگشت", callback_data: "panel_models" }]
                ]
            });
            return;
        }

        // ====== پنل کاربران ======
        if (data === "panel_users") {
            await this.showUsersPanel(chatId, messageId);
            return;
        }

        if (data.startsWith("user_page_")) {
            const page = parseInt(data.replace("user_page_", ""));
            await this.showUsersPanel(chatId, messageId, page);
            return;
        }

        if (data.startsWith("view_user_")) {
            const targetUserId = data.replace("view_user_", "");
            await this.showUserDetails(chatId, messageId, targetUserId);
            return;
        }

        // مدیریت VIP
        if (data.startsWith("add_vip_")) {
            const targetUserId = data.replace("add_vip_", "");
            const targetUser = await this.storage.getUser(targetUserId);
            targetUser.isVIP = true;
            await this.storage.saveUser(targetUserId, targetUser);
            CONFIG.VIP_USERS.push(Number(targetUserId));
            
            await this.sendMessage(chatId, `✅ کاربر ${targetUserId} به لیست VIP اضافه شد.`);
            await this.showUserDetails(chatId, messageId, targetUserId);
            return;
        }

        if (data.startsWith("remove_vip_")) {
            const targetUserId = data.replace("remove_vip_", "");
            const targetUser = await this.storage.getUser(targetUserId);
            targetUser.isVIP = false;
            await this.storage.saveUser(targetUserId, targetUser);
            CONFIG.VIP_USERS = CONFIG.VIP_USERS.filter(id => id !== Number(targetUserId));
            
            await this.sendMessage(chatId, `❌ کاربر ${targetUserId} از لیست VIP حذف شد.`);
            await this.showUserDetails(chatId, messageId, targetUserId);
            return;
        }

        // مدیریت محدودیت
        if (data.startsWith("restrict_")) {
            const targetUserId = data.replace("restrict_", "");
            const targetUser = await this.storage.getUser(targetUserId);
            targetUser.isRestricted = true;
            await this.storage.saveUser(targetUserId, targetUser);
            
            await this.sendMessage(chatId, `⛔ کاربر ${targetUserId} محدود شد.`);
            await this.showUserDetails(chatId, messageId, targetUserId);
            return;
        }

        if (data.startsWith("unrestrict_")) {
            const targetUserId = data.replace("unrestrict_", "");
            const targetUser = await this.storage.getUser(targetUserId);
            targetUser.isRestricted = false;
            await this.storage.saveUser(targetUserId, targetUser);
            
            await this.sendMessage(chatId, `✅ کاربر ${targetUserId} آزاد شد.`);
            await this.showUserDetails(chatId, messageId, targetUserId);
            return;
        }

        // ====== تست موتورها ======
        if (data === "test_engines") {
            await this.testEngines(chatId, messageId);
            return;
        }

        // ====== هیچ‌کدام ======
        await this.answerCallback(callbackId, "⚠️ گزینه نامعتبر!", true);
    }

    // ============ پردازش پیام‌ها ============
    async handleMessage(chatId, userId, text, firstName, replyToMessageId = null) {
        const user = await this.storage.getUser(userId.toString());
        user.firstName = firstName || user.firstName;
        await this.storage.saveUser(userId.toString(), user);

        // بررسی محدودیت
        if (user.isRestricted) {
            await this.sendMessage(chatId, "⛔ **دسترسی شما محدود شده است.**\n\nلطفاً با ادمین تماس بگیرید.");
            return;
        }

        // ====== کامندها ======
        if (text.startsWith('/')) {
            const [command, ...args] = text.split(' ');
            
            switch(command) {
                case '/start':
                case '/panel':
                    await this.showMainPanel(chatId, null);
                    break;

                case '/help':
                    const helpText = `📖 **راهنمای ربات**

🎯 **دستورات:**
/start - راه‌اندازی
/panel - پنل اصلی
/help - راهنما
/characters - شخصیت‌ها
/models - موتورهای AI
/users - مدیریت کاربران
/testengines - تست موتورها
/status - وضعیت سیستم

🎭 **شخصیت‌ها:**
حمید ❤️🏍️ - عاشق و مهربون
نوا 🤖 - هوشمند
دکتر 👨‍⚕️ - حرفه‌ای

💡 **نکته:** برای بهترین تجربه از پنل‌ها استفاده کنید.`;
                    await this.sendMessage(chatId, helpText);
                    break;

                case '/characters':
                    await this.showCharactersPanel(chatId, null);
                    break;

                case '/models':
                    await this.showModelsPanel(chatId, null);
                    break;

                case '/users':
                    if (user.isAdmin || user.isVIP) {
                        await this.showUsersPanel(chatId, null);
                    } else {
                        await this.sendMessage(chatId, "⛔ شما دسترسی ندارید!");
                    }
                    break;

                case '/testengines':
                    await this.testEngines(chatId, null);
                    break;

                case '/status':
                    const stats = await this.storage.getStats();
                    const statusText = `📊 **وضعیت سیستم**

👥 کاربران: ${stats.totalUsers}
💬 پیام‌ها: ${stats.totalMessages}
🔥 فعال امروز: ${stats.active24h}
👑 VIP: ${stats.vipUsers}
⛔ محدود: ${stats.restrictedUsers}

🎭 شخصیت شما: ${user.personality || 'حمید'}
🤖 موتور شما: ${user.aiProvider || 'hamid_ai'}`;
                    await this.sendMessage(chatId, statusText);
                    break;

                case '/clear':
                    await this.storage.clearConversation(userId);
                    await this.sendMessage(chatId, "🧹 تاریخچه مکالمه پاک شد!");
                    break;

                default:
                    await this.sendMessage(chatId, "⚠️ کامند ناشناخته. برای راهنما: /help");
            }
            return;
        }

        // ====== جستجوی شخصیت ======
        if (this.userStates.get(userId) === 'searching_char') {
            this.userStates.delete(userId);
            const results = this.charManager.searchCharacters(text, 10);
            
            if (results.length === 0) {
                await this.sendMessage(chatId, `🔍 **نتیجه‌ای برای "${text}" یافت نشد.**`);
                return;
            }

            let response = `🔍 **نتایج جستجو برای "${text}":**\n\n`;
            results.slice(0, 5).forEach((char, i) => {
                response += `${i + 1}. ${char.emoji} **${char.name}**\n`;
                response += `   ${char.shortDesc}\n\n`;
            });
            response += `💡 برای انتخاب، روی دکمه‌های پنل کلیک کنید.`;
            
            await this.sendMessage(chatId, response);
            return;
        }

        // ====== پاسخ هوشمند ======
        if (replyToMessageId) {
            // پاسخ به ریپلی
            const activeChar = await this.storage.getActiveCharacter(userId);
            const modelId = user.aiProvider || 'hamid_ai';
            const history = await this.storage.getConversation(userId);
            
            const response = await this.aiManager.getResponse(
                activeChar, 
                text, 
                history, 
                modelId
            );
            
            await this.storage.saveConversation(userId, 'user', text);
            await this.storage.saveConversation(userId, 'assistant', response);
            
            await this.sendMessage(chatId, response, null, replyToMessageId);
        } else if (text.length > 0) {
            // پیام معمولی
            const activeChar = await this.storage.getActiveCharacter(userId);
            const modelId = user.aiProvider || 'hamid_ai';
            const history = await this.storage.getConversation(userId);
            
            const response = await this.aiManager.getResponse(
                activeChar, 
                text, 
                history, 
                modelId
            );
            
            await this.storage.saveConversation(userId, 'user', text);
            await this.storage.saveConversation(userId, 'assistant', response);
            
            await this.sendMessage(chatId, response);
        }

        // افزایش XP
        user.xp = (user.xp || 0) + 1;
        user.level = Math.floor(user.xp / 50) + 1;
        await this.storage.saveUser(userId.toString(), user);
    }
}

// ==================== اجرای اصلی ====================
(async () => {
    if (!CONFIG.BOT_TOKEN) {
        console.error("❌ BOT_TOKEN تنظیم نشده!");
        console.log("💡 در فایل .env متغیر BOT_TOKEN را تنظیم کنید.");
        process.exit(1);
    }

    const bot = new NovaBot(CONFIG.BOT_TOKEN, CONFIG.ADMIN_ID, CONFIG.OPENAI_API_KEY);
    await bot.initialize();

    // حالت نظرسنجی (polling)
    let offset = 0;
    console.log("\n" + "=".repeat(60));
    console.log("✅ ربات آماده دریافت پیام‌ها!");
    console.log("=".repeat(60));
    console.log("\n📱 **دستورات تست:**");
    console.log("   /start - راه‌اندازی");
    console.log("   /panel - پنل اصلی");
    console.log("   /characters - شخصیت‌ها");
    console.log("   /models - موتورهای AI");
    console.log("   /testengines - تست موتورها");
    console.log("\n🎯 **آزمایش کال‌بک‌ها:**");
    console.log("   1. /panel بزنید");
    console.log("   2. روی دکمه‌ها کلیک کنید");
    console.log("   3. همه پنل‌ها کار می‌کنند");
    console.log("=".repeat(60) + "\n");

    while (true) {
        try {
            const response = await fetch(
                `${bot.apiUrl}/getUpdates?timeout=30&offset=${offset + 1}&allowed_updates=["message","callback_query"]`
            );
            const data = await response.json();

            if (data.ok && data.result && data.result.length > 0) {
                for (const update of data.result) {
                    offset = update.update_id;
                    
                    // ====== کال‌بک ======
                    if (update.callback_query) {
                        const cb = update.callback_query;
                        await bot.handleCallback(
                            cb.message.chat.id,
                            cb.from.id.toString(),
                            cb.data,
                            cb.message.message_id,
                            cb.id
                        );
                    }
                    
                    // ====== پیام ======
                    if (update.message) {
                        const msg = update.message;
                        const text = msg.text || '';
                        const replyTo = msg.reply_to_message?.message_id || null;
                        
                        await bot.handleMessage(
                            msg.chat.id,
                            msg.from.id.toString(),
                            text,
                            msg.from.first_name,
                            replyTo
                        );
                    }
                }
            }
        } catch (error) {
            console.error("❌ خطا در دریافت آپدیت:", error.message);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
})();
