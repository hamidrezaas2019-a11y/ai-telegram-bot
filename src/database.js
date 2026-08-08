export const DB = {
  async init(env) {
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY,
        balance INTEGER DEFAULT 10,
        premium_expiry TEXT
      )
    `).run();
  },

  async getUser(env, userId) {
    return await env.DB.prepare('SELECT * FROM users WHERE user_id = ?')
      .bind(userId).first();
  },

  async ensureUser(env, userId) {
    const user = await this.getUser(env, userId);
    if (!user) {
      await env.DB.prepare('INSERT INTO users (user_id) VALUES (?)')
        .bind(userId).run();
    }
    return await this.getUser(env, userId);
  },

  async deductBalance(env, userId) {
    await env.DB.prepare('UPDATE users SET balance = balance - 1 WHERE user_id = ?')
      .bind(userId).run();
  }
};
