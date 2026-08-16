-- ============================================================
-- 📦 COMPLETE DATABASE SCHEMA
-- ============================================================

-- 👤 Users Table
CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY,
  username TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  balance_text INTEGER DEFAULT 10,
  balance_image INTEGER DEFAULT 5,
  balance_voice INTEGER DEFAULT 3,
  balance_video INTEGER DEFAULT 2,
  premium_expiry TEXT,
  premium_plan TEXT,
  invite_code TEXT,
  invite_count INTEGER DEFAULT 0,
  total_earned INTEGER DEFAULT 0,
  is_admin INTEGER DEFAULT 0,
  is_banned INTEGER DEFAULT 0,
  kyc_verified INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  last_activity TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 🤖 Models Table
CREATE TABLE IF NOT EXISTS models (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  model_id TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  category TEXT NOT NULL,
  provider TEXT,
  cost_text INTEGER DEFAULT 1,
  cost_image INTEGER DEFAULT 1,
  cost_voice INTEGER DEFAULT 1,
  cost_video INTEGER DEFAULT 1,
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 📊 Usage Logs
CREATE TABLE IF NOT EXISTS usage_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  model_id TEXT NOT NULL,
  type TEXT NOT NULL,
  prompt TEXT,
  success INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 💳 Payments
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
  confirmed_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 👥 Referrals
CREATE TABLE IF NOT EXISTS referrals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  inviter_id INTEGER NOT NULL,
  invited_id INTEGER NOT NULL,
  bonus_text INTEGER DEFAULT 0,
  bonus_image INTEGER DEFAULT 0,
  bonus_voice INTEGER DEFAULT 0,
  bonus_video INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (inviter_id) REFERENCES users(user_id),
  FOREIGN KEY (invited_id) REFERENCES users(user_id),
  UNIQUE(invited_id)
);

-- 🎫 Tickets
CREATE TABLE IF NOT EXISTS tickets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'open',
  admin_response TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  closed_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- ⚙️ Settings
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 📊 Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_users_user_id ON users(user_id);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_usage_user_id ON usage_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_model_id ON usage_logs(model_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_referrals_inviter ON referrals(inviter_id);
CREATE INDEX IF NOT EXISTS idx_tickets_user_id ON tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status);

-- ============================================================
-- 🔧 Default Settings
-- ============================================================
INSERT OR IGNORE INTO settings (key, value) VALUES 
  ('welcome_text', '👋 به ربات هوش مصنوعی خوش آمدید!'),
  ('referral_bonus_text', '30'),
  ('referral_bonus_image', '20'),
  ('referral_bonus_voice', '10'),
  ('referral_bonus_video', '5'),
  ('maintenance_mode', 'false'),
  ('default_model', 'gemini-2.0-flash'),
  ('max_history', '10');
