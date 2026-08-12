// ============================================================
// 🗄️ DATABASE - نسخه کامل و امن
// ============================================================

export const DB = {
  // ============================================================
  // 📌 INIT - ایجاد جداول با migration
  // ============================================================
  async init(env) {
    try {
      // بررسی اتصال
      await env.DB.prepare('SELECT 1').run();
      console.log('✅ Database connected');

      // جداول اصلی
      await env.DB.prepare(`
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
        )
      `).run();

      // جدول استفاده
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS usage_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          model TEXT NOT NULL,
          type TEXT NOT NULL,
          prompt TEXT,
          success INTEGER DEFAULT 1,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(user_id)
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
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          confirmed_at TEXT,
          FOREIGN KEY (user_id) REFERENCES users(user_id)
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
          closed_at TEXT,
          FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
      `).run();

      // ایندکس‌ها برای بهبود performance
      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_users_user_id ON users(user_id)
      `).run();
      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_usage_user_id ON usage_logs(user_id)
      `).run();
      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id)
      `).run();
      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status)
      `).run();
      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_tickets_user_id ON tickets(user_id)
      `).run();
      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status)
      `).run();

      console.log('✅ Database tables created successfully');
      return true;

    } catch (error) {
      console.error('❌ Database init error:', error);
      throw error;
    }
  },

  // ============================================================
  // 👤 USER METHODS
  // ============================================================

  // دریافت کاربر
  async getUser(env, userId) {
    try {
      return await env.DB.prepare('SELECT * FROM users WHERE user_id = ?')
        .bind(userId).first();
    } catch (error) {
      console.error('getUser Error:', error);
      return null;
    }
  },

  // دریافت چند کاربر
  async getUsers(env, limit = 100, offset = 0) {
    try {
      const result = await env.DB.prepare(
        'SELECT * FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?'
      ).bind(limit, offset).all();
      return result.results || [];
    } catch (error) {
      console.error('getUsers Error:', error);
      return [];
    }
  },

  // ایجاد یا بروزرسانی کاربر
  async ensureUser(env, userId, username = null, firstName = null, lastName = null) {
    try {
      let user = await this.getUser(env, userId);
      
      if (!user) {
        const inviteCode = this._generateInviteCode();
        await env.DB.prepare(`
          INSERT INTO users (
            user_id, username, first_name, last_name, invite_code,
            balance_text, balance_image, balance_voice, balance_video
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          userId,
          username,
          firstName,
          lastName,
          inviteCode,
          10,  // balance_text
          5,   // balance_image
          3,   // balance_voice
          2    // balance_video
        ).run();
        
        user = await this.getUser(env, userId);
        console.log(`✅ New user created: ${userId}`);
      } else {
        // بروزرسانی اطلاعات در صورت تغییر
        if (username && user.username !== username) {
          await env.DB.prepare(
            'UPDATE users SET username = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?'
          ).bind(username, userId).run();
        }
        if (firstName && user.first_name !== firstName) {
          await env.DB.prepare(
            'UPDATE users SET first_name = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?'
          ).bind(firstName, userId).run();
        }
        // بروزرسانی last_activity
        await env.DB.prepare(
          'UPDATE users SET last_activity = CURRENT_TIMESTAMP WHERE user_id = ?'
        ).bind(userId).run();
      }
      
      return user;

    } catch (error) {
      console.error('ensureUser Error:', error);
      return null;
    }
  },

  // بروزرسانی کاربر
  async updateUser(env, userId, data) {
    try {
      const fields = Object.keys(data);
      const values = Object.values(data);
      const setClause = fields.map(f => `${f} = ?`).join(', ');
      
      await env.DB.prepare(
        `UPDATE users SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`
      ).bind(...values, userId).run();
      
      return true;
    } catch (error) {
      console.error('updateUser Error:', error);
      return false;
    }
  },

  // ============================================================
  // 💰 BALANCE METHODS
  // ============================================================

  // دریافت موجودی
  async getBalance(env, userId) {
    try {
      const user = await this.getUser(env, userId);
      if (!user) return null;
      
      return {
        text: user.balance_text || 0,
        image: user.balance_image || 0,
        voice: user.balance_voice || 0,
        video: user.balance_video || 0
      };
    } catch (error) {
      console.error('getBalance Error:', error);
      return null;
    }
  },

  // اضافه کردن موجودی
  async addBalance(env, userId, type, amount) {
    try {
      const validTypes = ['text', 'image', 'voice', 'video'];
      if (!validTypes.includes(type)) {
        throw new Error(`Invalid balance type: ${type}`);
      }
      
      await env.DB.prepare(
        `UPDATE users SET balance_${type} = balance_${type} + ? WHERE user_id = ?`
      ).bind(amount, userId).run();
      
      return true;
    } catch (error) {
      console.error('addBalance Error:', error);
      return false;
    }
  },

  // کسر موجودی
  async deductBalance(env, userId, type, amount = 1) {
    try {
      const balance = await this.getBalance(env, userId);
      if (!balance) return false;
      if (balance[type] < amount) return false;
      
      await env.DB.prepare(
        `UPDATE users SET balance_${type} = balance_${type} - ? WHERE user_id = ?`
      ).bind(amount, userId).run();
      
      return true;
    } catch (error) {
      console.error('deductBalance Error:', error);
      return false;
    }
  },

  // ============================================================
  // ⭐ PREMIUM METHODS
  // ============================================================

  // بررسی وضعیت ویژه
  async isPremium(env, userId) {
    try {
      const user = await this.getUser(env, userId);
      if (!user || !user.premium_expiry) return false;
      
      const expiry = new Date(user.premium_expiry);
      return expiry > new Date();
    } catch (error) {
      console.error('isPremium Error:', error);
      return false;
    }
  },

  // دریافت اطلاعات ویژه
  async getPremiumInfo(env, userId) {
    try {
      const user = await this.getUser(env, userId);
      if (!user || !user.premium_expiry) return null;
      
      const expiry = new Date(user.premium_expiry);
      const now = new Date();
      
      if (expiry <= now) return null;
      
      return {
        plan: user.premium_plan || 'premium',
        expiry: expiry,
        daysLeft: Math.ceil((expiry - now) / (1000 * 60 * 60 * 24))
      };
    } catch (error) {
      console.error('getPremiumInfo Error:', error);
      return null;
    }
  },

  // تنظیم ویژه
  async setPremium(env, userId, plan, days) {
    try {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + days);
      
      await env.DB.prepare(
        'UPDATE users SET premium_expiry = ?, premium_plan = ? WHERE user_id = ?'
      ).bind(expiry.toISOString(), plan, userId).run();
      
      return expiry;
    } catch (error) {
      console.error('setPremium Error:', error);
      return null;
    }
  },

  // ============================================================
  // 📊 LOG METHODS
  // ============================================================

  // لاگ استفاده
  async logUsage(env, userId, model, type, prompt = null, success = true) {
    try {
      await env.DB.prepare(`
        INSERT INTO usage_logs (user_id, model, type, prompt, success)
        VALUES (?, ?, ?, ?, ?)
      `).bind(userId, model, type, prompt, success ? 1 : 0).run();
      
      return true;
    } catch (error) {
      console.error('logUsage Error:', error);
      return false;
    }
  },

  // دریافت لاگ‌های کاربر
  async getUserLogs(env, userId, limit = 50) {
    try {
      const result = await env.DB.prepare(
        'SELECT * FROM usage_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT ?'
      ).bind(userId, limit).all();
      return result.results || [];
    } catch (error) {
      console.error('getUserLogs Error:', error);
      return [];
    }
  },

  // ============================================================
  // 👑 ADMIN METHODS
  // ============================================================

  // مسدود کردن کاربر
  async banUser(env, userId, reason = null) {
    try {
      await env.DB.prepare(
        'UPDATE users SET is_banned = 1 WHERE user_id = ?'
      ).bind(userId).run();
      
      if (reason) {
        await env.DB.prepare(
          'INSERT INTO user_bans (user_id, reason) VALUES (?, ?)'
        ).bind(userId, reason).run();
      }
      
      return true;
    } catch (error) {
      console.error('banUser Error:', error);
      return false;
    }
  },

  // رفع مسدودیت
  async unbanUser(env, userId) {
    try {
      await env.DB.prepare(
        'UPDATE users SET is_banned = 0 WHERE user_id = ?'
      ).bind(userId).run();
      return true;
    } catch (error) {
      console.error('unbanUser Error:', error);
      return false;
    }
  },

  // ============================================================
  // 📈 STATS METHODS
  // ============================================================

  // آمار کلی
  async getStats(env) {
    try {
      const total = await env.DB.prepare('SELECT COUNT(*) as count FROM users').first();
      const premium = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM users WHERE premium_expiry > datetime('now')"
      ).first();
      const banned = await env.DB.prepare(
        'SELECT COUNT(*) as count FROM users WHERE is_banned = 1'
      ).first();
      const usage = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM usage_logs WHERE created_at > datetime('now', '-24 hours')"
      ).first();

      return {
        totalUsers: total?.count || 0,
        premiumUsers: premium?.count || 0,
        bannedUsers: banned?.count || 0,
        usageToday: usage?.count || 0
      };
    } catch (error) {
      console.error('getStats Error:', error);
      return { totalUsers: 0, premiumUsers: 0, bannedUsers: 0, usageToday: 0 };
    }
  },

  // ============================================================
  // 🛠️ UTILITY METHODS
  // ============================================================

  // تولید کد دعوت
  _generateInviteCode() {
    return Math.random().toString(36).substring(2, 10) +
           Math.random().toString(36).substring(2, 6);
  },

  // Cleanup - حذف داده‌های قدیمی
  async cleanup(env) {
    try {
      // حذف لاگ‌های قدیمی (بیش از ۳۰ روز)
      await env.DB.prepare(
        "DELETE FROM usage_logs WHERE created_at < datetime('now', '-30 days')"
      ).run();
      
      // حذف پرداخت‌های منقضی شده
      await env.DB.prepare(
        "UPDATE payments SET status = 'expired' WHERE status = 'pending' AND created_at < datetime('now', '-7 days')"
      ).run();
      
      return true;
    } catch (error) {
      console.error('cleanup Error:', error);
      return false;
    }
  }
};

export default DB;
