// ============================================================
// 🗄️ DATABASE SERVICE - Cloudflare D1
// ============================================================

export const DB = {

  // ============================================================
  // 📌 INIT
  // ============================================================

  async init(env) {
    if (!env?.DB) {
      throw new Error("D1 binding DB is not configured");
    }

    try {
      await env.DB.prepare("SELECT 1").run();

      // ========================================================
      // 👤 USERS
      // ========================================================

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

          invite_code TEXT UNIQUE,
          invite_count INTEGER DEFAULT 0,

          is_admin INTEGER DEFAULT 0,
          is_banned INTEGER DEFAULT 0,

          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
          last_activity TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // ========================================================
      // 📊 USAGE LOGS
      // ========================================================

      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS usage_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          model TEXT NOT NULL,
          type TEXT NOT NULL,
          prompt TEXT,
          success INTEGER DEFAULT 1,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,

          FOREIGN KEY (user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE
        )
      `).run();

      // ========================================================
      // 💳 PAYMENTS
      // ========================================================

      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS payments (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          amount INTEGER NOT NULL,
          method TEXT NOT NULL,
          plan TEXT,
          status TEXT DEFAULT 'pending',
          transaction_id TEXT,
          authority TEXT,
          receipt_photo_id TEXT,
          admin_note TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          confirmed_at TEXT,

          FOREIGN KEY (user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE
        )
      `).run();

      // ========================================================
      // 🎫 TICKETS
      // ========================================================

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

          FOREIGN KEY (user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE
        )
      `).run();

      // ========================================================
      // 🚫 USER BANS
      // ========================================================

      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS user_bans (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          reason TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,

          FOREIGN KEY (user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE
        )
      `).run();

      // ========================================================
      // 📚 CONVERSATIONS
      // برای سازگاری با novaGetHistory / novaClearHistory
      // ========================================================

      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS conversations (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          telegram_id TEXT NOT NULL,
          role TEXT NOT NULL,
          content TEXT NOT NULL,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // ========================================================
      // 📝 BOT LOGS
      // برای novaLogRequest
      // ========================================================

      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS bot_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          action TEXT,
          telegram_id TEXT,
          details TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // ========================================================
      // 🔎 INDEXES
      // ========================================================

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_usage_user_id
        ON usage_logs(user_id)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_usage_created_at
        ON usage_logs(created_at)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_payments_user_id
        ON payments(user_id)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_payments_status
        ON payments(status)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_tickets_user_id
        ON tickets(user_id)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_tickets_status
        ON tickets(status)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_bans_user_id
        ON user_bans(user_id)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_conversations_telegram_id
        ON conversations(telegram_id)
      `).run();

      await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_bot_logs_telegram_id
        ON bot_logs(telegram_id)
      `).run();

      console.log("✅ D1 database initialized");

      return true;

    } catch (error) {
      console.error("❌ Database init error:", error);
      throw error;
    }
  },


  // ============================================================
  // 👤 GET USER
  // ============================================================

  async getUser(env, userId) {
    try {
      return await env.DB
        .prepare(`
          SELECT *
          FROM users
          WHERE user_id = ?
          LIMIT 1
        `)
        .bind(String(userId))
        .first();

    } catch (error) {
      console.error("getUser Error:", error);
      return null;
    }
  },


  // ============================================================
  // 👥 GET USERS
  // ============================================================

  async getUsers(env, limit = 100, offset = 0) {
    try {
      const safeLimit = Math.max(
        1,
        Math.min(Number(limit) || 100, 500)
      );

      const safeOffset = Math.max(
        0,
        Number(offset) || 0
      );

      const result = await env.DB
        .prepare(`
          SELECT *
          FROM users
          ORDER BY created_at DESC
          LIMIT ? OFFSET ?
        `)
        .bind(safeLimit, safeOffset)
        .all();

      return result?.results || [];

    } catch (error) {
      console.error("getUsers Error:", error);
      return [];
    }
  },


  // ============================================================
  // 🆕 ENSURE USER
  // ============================================================

  async ensureUser(
    env,
    userId,
    username = null,
    firstName = null,
    lastName = null
  ) {
    try {
      let user = await this.getUser(env, userId);

      if (!user) {
        const inviteCode =
          this._generateInviteCode();

        await env.DB
          .prepare(`
            INSERT INTO users (
              user_id,
              username,
              first_name,
              last_name,
              invite_code,
              balance_text,
              balance_image,
              balance_voice,
              balance_video
            )
            VALUES (?, ?, ?, ?, ?, 10, 5, 3, 2)
          `)
          .bind(
            String(userId),
            username,
            firstName,
            lastName,
            inviteCode
          )
          .run();

        user = await this.getUser(
          env,
          userId
        );

        console.log(
          `✅ New user created: ${userId}`
        );

      } else {

        await env.DB
          .prepare(`
            UPDATE users
            SET
              username = COALESCE(?, username),
              first_name = COALESCE(?, first_name),
              last_name = COALESCE(?, last_name),
              updated_at = CURRENT_TIMESTAMP,
              last_activity = CURRENT_TIMESTAMP
            WHERE user_id = ?
          `)
          .bind(
            username,
            firstName,
            lastName,
            String(userId)
          )
          .run();

        user = await this.getUser(
          env,
          userId
        );
      }

      return user;

    } catch (error) {
      console.error("ensureUser Error:", error);
      return null;
    }
  },


  // ============================================================
  // ✏️ UPDATE USER
  // ============================================================

  async updateUser(env, userId, data) {
    try {
      if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data)
      ) {
        return false;
      }

      const allowed = [
        "username",
        "first_name",
        "last_name",
        "balance_text",
        "balance_image",
        "balance_voice",
        "balance_video",
        "premium_expiry",
        "premium_plan",
        "invite_code",
        "invite_count",
        "is_admin",
        "is_banned",
        "last_activity"
      ];

      const fields = [];
      const values = [];

      for (const key of allowed) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          fields.push(`${key} = ?`);
          values.push(data[key]);
        }
      }

      if (!fields.length) {
        return false;
      }

      fields.push(
        "updated_at = CURRENT_TIMESTAMP"
      );

      values.push(String(userId));

      await env.DB
        .prepare(`
          UPDATE users
          SET ${fields.join(", ")}
          WHERE user_id = ?
        `)
        .bind(...values)
        .run();

      return true;

    } catch (error) {
      console.error("updateUser Error:", error);
      return false;
    }
  },


  // ============================================================
  // 💰 GET BALANCE
  // ============================================================

  async getBalance(env, userId) {
    try {
      const user =
        await this.getUser(env, userId);

      if (!user) {
        return null;
      }

      return {
        text: Number(user.balance_text || 0),
        image: Number(user.balance_image || 0),
        voice: Number(user.balance_voice || 0),
        video: Number(user.balance_video || 0)
      };

    } catch (error) {
      console.error("getBalance Error:", error);
      return null;
    }
  },


  // ============================================================
  // ➕ ADD BALANCE
  // ============================================================

  async addBalance(
    env,
    userId,
    type,
    amount
  ) {
    try {
      const validTypes = [
        "text",
        "image",
        "voice",
        "video"
      ];

      if (!validTypes.includes(type)) {
        return false;
      }

      const value = Number(amount);

      if (!Number.isFinite(value) || value <= 0) {
        return false;
      }

      await env.DB
        .prepare(`
          UPDATE users
          SET balance_${type} =
              balance_${type} + ?,
              updated_at = CURRENT_TIMESTAMP
          WHERE user_id = ?
        `)
        .bind(value, String(userId))
        .run();

      return true;

    } catch (error) {
      console.error("addBalance Error:", error);
      return false;
    }
  },


  // ============================================================
  // ➖ DEDUCT BALANCE
  // ============================================================

  async deductBalance(
    env,
    userId,
    type,
    amount = 1
  ) {
    try {
      const validTypes = [
        "text",
        "image",
        "voice",
        "video"
      ];

      if (!validTypes.includes(type)) {
        return false;
      }

      const value = Number(amount);

      if (!Number.isFinite(value) || value <= 0) {
        return false;
      }

      const result = await env.DB
        .prepare(`
          UPDATE users
          SET balance_${type} =
              balance_${type} - ?,
              updated_at = CURRENT_TIMESTAMP
          WHERE user_id = ?
            AND balance_${type} >= ?
        `)
        .bind(
          value,
          String(userId),
          value
        )
        .run();

      return Number(
        result?.meta?.changes || 0
      ) > 0;

    } catch (error) {
      console.error("deductBalance Error:", error);
      return false;
    }
  },


  // ============================================================
  // ⭐ IS PREMIUM
  // ============================================================

  async isPremium(env, userId) {
    try {
      const user =
        await this.getUser(env, userId);

      if (!user?.premium_expiry) {
        return false;
      }

      return (
        new Date(user.premium_expiry) >
        new Date()
      );

    } catch (error) {
      console.error("isPremium Error:", error);
      return false;
    }
  },


  // ============================================================
  // 💎 PREMIUM INFO
  // ============================================================

  async getPremiumInfo(env, userId) {
    try {
      const user =
        await this.getUser(env, userId);

      if (!user?.premium_expiry) {
        return null;
      }

      const expiry =
        new Date(user.premium_expiry);

      const now = new Date();

      if (expiry <= now) {
        return null;
      }

      return {
        plan:
          user.premium_plan ||
          "premium",

        expiry:
          expiry.toISOString(),

        daysLeft:
          Math.ceil(
            (expiry - now) /
            (1000 * 60 * 60 * 24)
          )
      };

    } catch (error) {
      console.error("getPremiumInfo Error:", error);
      return null;
    }
  },


  // ============================================================
  // 💎 SET PREMIUM
  // ============================================================

  async setPremium(
    env,
    userId,
    plan,
    days
  ) {
    try {
      const duration =
        Number(days);

      if (
        !Number.isFinite(duration) ||
        duration <= 0
      ) {
        return null;
      }

      const expiry =
        new Date();

      expiry.setDate(
        expiry.getDate() + duration
      );

      await env.DB
        .prepare(`
          UPDATE users
          SET
            premium_expiry = ?,
            premium_plan = ?,
            updated_at = CURRENT_TIMESTAMP
          WHERE user_id = ?
        `)
        .bind(
          expiry.toISOString(),
          plan || "premium",
          String(userId)
        )
        .run();

      return expiry;

    } catch (error) {
      console.error("setPremium Error:", error);
      return null;
    }
  },


  // ============================================================
  // 📊 LOG USAGE
  // ============================================================

  async logUsage(
    env,
    userId,
    model,
    type,
    prompt = null,
    success = true
  ) {
    try {
      await env.DB
        .prepare(`
          INSERT INTO usage_logs (
            user_id,
            model,
            type,
            prompt,
            success
          )
          VALUES (?, ?, ?, ?, ?)
        `)
        .bind(
          String(userId),
          String(model || "unknown"),
          String(type || "text"),
          prompt,
          success ? 1 : 0
        )
        .run();

      return true;

    } catch (error) {
      console.error("logUsage Error:", error);
      return false;
    }
  },


  // ============================================================
  // 📋 USER LOGS
  // ============================================================

  async getUserLogs(
    env,
    userId,
    limit = 50
  ) {
    try {
      const safeLimit =
        Math.max(
          1,
          Math.min(
            Number(limit) || 50,
            500
          )
        );

      const result =
        await env.DB
          .prepare(`
            SELECT *
            FROM usage_logs
            WHERE user_id = ?
            ORDER BY created_at DESC
            LIMIT ?
          `)
          .bind(
            String(userId),
            safeLimit
          )
          .all();

      return result?.results || [];

    } catch (error) {
      console.error("getUserLogs Error:", error);
      return [];
    }
  },


  // ============================================================
  // 🚫 BAN USER
  // ============================================================

  async banUser(
    env,
    userId,
    reason = null
  ) {
    try {
      await env.DB
        .prepare(`
          UPDATE users
          SET
            is_banned = 1,
            updated_at = CURRENT_TIMESTAMP
          WHERE user_id = ?
        `)
        .bind(String(userId))
        .run();

      if (reason) {
        await env.DB
          .prepare(`
            INSERT INTO user_bans (
              user_id,
              reason
            )
            VALUES (?, ?)
          `)
          .bind(
            String(userId),
            String(reason)
          )
          .run();
      }

      return true;

    } catch (error) {
      console.error("banUser Error:", error);
      return false;
    }
  },


  // ============================================================
  // ✅ UNBAN USER
  // ============================================================

  async unbanUser(env, userId) {
    try {
      await env.DB
        .prepare(`
          UPDATE users
          SET
            is_banned = 0,
            updated_at = CURRENT_TIMESTAMP
          WHERE user_id = ?
        `)
        .bind(String(userId))
        .run();

      return true;

    } catch (error) {
      console.error("unbanUser Error:", error);
      return false;
    }
  },


  // ============================================================
  // 📈 STATS
  // ============================================================

  async getStats(env) {
    try {
      const total =
        await env.DB
          .prepare(`
            SELECT COUNT(*) AS count
            FROM users
          `)
          .first();

      const premium =
        await env.DB
          .prepare(`
            SELECT COUNT(*) AS count
            FROM users
            WHERE premium_expiry > datetime('now')
          `)
          .first();

      const banned =
        await env.DB
          .prepare(`
            SELECT COUNT(*) AS count
            FROM users
            WHERE is_banned = 1
          `)
          .first();

      const usage =
        await env.DB
          .prepare(`
            SELECT COUNT(*) AS count
            FROM usage_logs
            WHERE created_at >
              datetime('now', '-24 hours')
          `)
          .first();

      return {
        totalUsers:
          Number(total?.count || 0),

        premiumUsers:
          Number(premium?.count || 0),

        bannedUsers:
          Number(banned?.count || 0),

        usageToday:
          Number(usage?.count || 0)
      };

    } catch (error) {
      console.error("getStats Error:", error);

      return {
        totalUsers: 0,
        premiumUsers: 0,
        bannedUsers: 0,
        usageToday: 0
      };
    }
  },


  // ============================================================
  // 🔑 INVITE CODE
  // ============================================================

  _generateInviteCode() {
    const part1 =
      Math.random()
        .toString(36)
        .slice(2, 10);

    const part2 =
      Math.random()
        .toString(36)
        .slice(2, 6);

    return `${part1}${part2}`;
  },


  // ============================================================
  // 🧹 CLEANUP
  // ============================================================

  async cleanup(env) {
    try {

      await env.DB
        .prepare(`
          DELETE FROM usage_logs
          WHERE created_at <
            datetime('now', '-30 days')
        `)
        .run();

      await env.DB
        .prepare(`
          UPDATE payments
          SET status = 'expired'
          WHERE status = 'pending'
            AND created_at <
              datetime('now', '-7 days')
        `)
        .run();

      return true;

    } catch (error) {
      console.error("cleanup Error:", error);
      return false;
    }
  }
};


// ============================================================
// 📦 DEFAULT EXPORT
// ============================================================

export default DB;
