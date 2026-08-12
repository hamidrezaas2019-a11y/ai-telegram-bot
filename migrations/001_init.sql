-- ============================================================
-- 📦 INITIAL DATABASE SCHEMA
-- ============================================================

-- 👤 Users Table
CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY,
  username TEXT,
  first_name TEXT,
  last_name TEXT,
  balance_text INTEGER DEFAULT 10,
  balance_image INTEGER DEFAULT 5,
  balance_voice INTEGER DEFAULT 3,
  balance_video INTEGER DEFAULT 2,
  premium_expiry TEXT,
  premium_plan TEXT,
  invite_code TEXT,
  invite_count INTEGER DEFAULT 0,
  is_admin INTEGER DEFAULT 0,
  is_banned INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  last_activity TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 📊 Usage Logs
CREATE TABLE IF NOT EXISTS usage_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  model TEXT NOT NULL,
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
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  confirmed_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
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

-- ============================================================
-- 📊 Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_users_user_id ON users(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_user_id ON usage_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_tickets_user_id ON tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status);
