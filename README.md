# 🤖 ربات هوش مصنوعی ساده

یک ربات تلگرام ساده با قابلیت‌های:
- چت با Gemini
- ساخت تصویر با DALL-E

## 🚀 نصب و راه‌اندازی

```bash
# ۱. نصب وابستگی‌ها
npm install

# ۲. ایجاد دیتابیس
npx wrangler d1 create ai_bot_db

# ۳. کپی کردن database_id در wrangler.json

# ۴. اجرای migration
npm run db:init

# ۵. دیپلوی
npm run deploy

# ۶. تنظیم Webhook
npm run webhook:set
