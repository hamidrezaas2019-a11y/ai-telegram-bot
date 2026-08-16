-- ============================================================
-- 📦 NOVA AI PRO
-- COMPLETE D1 DATABASE SCHEMA
-- Migration: 001_init.sql
-- ============================================================

PRAGMA foreign_keys = ON;

-- ============================================================
-- 👤 USERS
-- ============================================================

CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,

    username TEXT,
    first_name TEXT,
    last_name TEXT,
    phone TEXT,

    balance_text INTEGER NOT NULL DEFAULT 10,
    balance_image INTEGER NOT NULL DEFAULT 5,
    balance_voice INTEGER NOT NULL DEFAULT 3,
    balance_video INTEGER NOT NULL DEFAULT 2,

    premium_expiry TEXT,
    premium_plan TEXT,

    invite_code TEXT UNIQUE,
    invite_count INTEGER NOT NULL DEFAULT 0,
    total_earned INTEGER NOT NULL DEFAULT 0,

    is_admin INTEGER NOT NULL DEFAULT 0,
    is_banned INTEGER NOT NULL DEFAULT 0,
    kyc_verified INTEGER NOT NULL DEFAULT 0,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_activity TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 🤖 AI MODELS
-- ============================================================

CREATE TABLE IF NOT EXISTS models (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    model_id TEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,

    category TEXT NOT NULL,
    provider TEXT,

    cost_text INTEGER NOT NULL DEFAULT 1,
    cost_image INTEGER NOT NULL DEFAULT 1,
    cost_voice INTEGER NOT NULL DEFAULT 1,
    cost_video INTEGER NOT NULL DEFAULT 1,

    is_active INTEGER NOT NULL DEFAULT 1,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 📊 USAGE LOGS
-- ============================================================

CREATE TABLE IF NOT EXISTS usage_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,

    model_id TEXT NOT NULL,
    type TEXT NOT NULL,

    prompt TEXT,

    success INTEGER NOT NULL DEFAULT 1,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- ============================================================
-- 💳 PAYMENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,

    amount INTEGER NOT NULL,
    method TEXT NOT NULL,

    plan TEXT,

    status TEXT NOT NULL DEFAULT 'pending',

    transaction_id TEXT,
    authority TEXT,

    receipt_photo_id TEXT,
    admin_note TEXT,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    confirmed_at TEXT,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- ============================================================
-- 👥 REFERRALS
-- ============================================================

CREATE TABLE IF NOT EXISTS referrals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    inviter_id INTEGER NOT NULL,
    invited_id INTEGER NOT NULL,

    bonus_text INTEGER NOT NULL DEFAULT 0,
    bonus_image INTEGER NOT NULL DEFAULT 0,
    bonus_voice INTEGER NOT NULL DEFAULT 0,
    bonus_video INTEGER NOT NULL DEFAULT 0,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (inviter_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (invited_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    UNIQUE(invited_id)
);

-- ============================================================
-- 🚫 USER BANS
-- مورد نیاز src/database.js
-- ============================================================

CREATE TABLE IF NOT EXISTS user_bans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,

    reason TEXT,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- ============================================================
-- 🎫 SUPPORT TICKETS
-- ============================================================

CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,

    subject TEXT NOT NULL,
    message TEXT NOT NULL,

    status TEXT NOT NULL DEFAULT 'open',

    admin_response TEXT,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    closed_at TEXT,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- ============================================================
-- ⚙️ SETTINGS
-- ============================================================

CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    key TEXT UNIQUE NOT NULL,
    value TEXT,

    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 💬 CONVERSATIONS
-- مورد نیاز novaGetHistory()
-- ============================================================

CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    telegram_id TEXT NOT NULL,

    role TEXT NOT NULL,
    content TEXT NOT NULL,

    model_id TEXT,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 📈 REQUEST LOGS
-- برای API / Health / Admin
-- ============================================================

CREATE TABLE IF NOT EXISTS request_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    telegram_id TEXT,

    request_id TEXT,

    method TEXT,
    path TEXT,

    status INTEGER,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 📊 INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_users_username
ON users(username);

CREATE INDEX IF NOT EXISTS idx_users_admin
ON users(is_admin);

CREATE INDEX IF NOT EXISTS idx_users_banned
ON users(is_banned);

CREATE INDEX IF NOT EXISTS idx_users_premium
ON users(premium_expiry);

CREATE INDEX IF NOT EXISTS idx_usage_user_id
ON usage_logs(user_id);

CREATE INDEX IF NOT EXISTS idx_usage_model_id
ON usage_logs(model_id);

CREATE INDEX IF NOT EXISTS idx_usage_created_at
ON usage_logs(created_at);

CREATE INDEX IF NOT EXISTS idx_payments_user_id
ON payments(user_id);

CREATE INDEX IF NOT EXISTS idx_payments_status
ON payments(status);

CREATE INDEX IF NOT EXISTS idx_payments_created_at
ON payments(created_at);

CREATE INDEX IF NOT EXISTS idx_referrals_inviter
ON referrals(inviter_id);

CREATE INDEX IF NOT EXISTS idx_referrals_invited
ON referrals(invited_id);

CREATE INDEX IF NOT EXISTS idx_user_bans_user_id
ON user_bans(user_id);

CREATE INDEX IF NOT EXISTS idx_tickets_user_id
ON tickets(user_id);

CREATE INDEX IF NOT EXISTS idx_tickets_status
ON tickets(status);

CREATE INDEX IF NOT EXISTS idx_conversations_telegram_id
ON conversations(telegram_id);

CREATE INDEX IF NOT EXISTS idx_conversations_created_at
ON conversations(created_at);

CREATE INDEX IF NOT EXISTS idx_request_logs_telegram_id
ON request_logs(telegram_id);

CREATE INDEX IF NOT EXISTS idx_request_logs_created_at
ON request_logs(created_at);

-- ============================================================
-- 🤖 DEFAULT AI MODELS
-- ============================================================

INSERT OR IGNORE INTO models
(
    model_id,
    display_name,
    category,
    provider,
    cost_text,
    is_active
)
VALUES
(
    'gemini-2.0-flash',
    'Gemini 2.0 Flash',
    'chat',
    'google',
    1,
    1
),

(
    'gpt-4o-mini',
    'GPT-4o Mini',
    'chat',
    'openai',
    1,
    1
),

(
    'gpt-4o',
    'GPT-4o',
    'chat',
    'openai',
    2,
    1
),

(
    'claude-3.5-sonnet',
    'Claude 3.5 Sonnet',
    'chat',
    'anthropic',
    2,
    1
),

(
    'deepseek-v3',
    'DeepSeek V3',
    'chat',
    'deepseek',
    1,
    1
),

(
    'grok',
    'Grok',
    'chat',
    'xai',
    2,
    1
),

(
    'dall-e-3',
    'DALL-E 3',
    'image',
    'openai',
    0,
    1
);

-- ============================================================
-- ⚙️ DEFAULT SETTINGS
-- ============================================================

INSERT OR IGNORE INTO settings
(
    key,
    value
)
VALUES
(
    'welcome_text',
    '👋 به Nova AI Pro خوش آمدید!'
),

(
    'referral_bonus_text',
    '30'
),

(
    'referral_bonus_image',
    '20'
),

(
    'referral_bonus_voice',
    '10'
),

(
    'referral_bonus_video',
    '5'
),

(
    'maintenance_mode',
    'false'
),

(
    'default_model',
    'gemini-2.0-flash'
),

(
    'max_history',
    '10'
);

-- ============================================================
-- ✅ END OF MIGRATION
-- ============================================================
