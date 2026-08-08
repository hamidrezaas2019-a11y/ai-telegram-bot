CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY,
  balance INTEGER DEFAULT 10,
  premium_expiry TEXT
);
