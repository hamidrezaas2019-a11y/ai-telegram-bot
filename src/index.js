import { CONFIG } from './config.js';
import { DB } from './database.js';
import { AI } from './ai.js';
import { sendTelegram } from './utils.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/webhook') {
      const body = await request.json();
      const msg = body.message;
      if (!msg) return new Response('OK');
      
      const userId = msg.from.id;
      const chatId = msg.chat.id;
      const text = msg.text || '';
      
      await DB.ensureUser(env, userId);
      
      if (text === '/start') {
        await sendTelegram(env, chatId, '🤖 سلام! به ربات خوش اومدی!\n/chat - چت با AI\n/image - ساخت تصویر');
        return new Response('OK');
      }
      
      if (text === '/chat') {
        await sendTelegram(env, chatId, '📝 سوالت رو بپرس:');
        return new Response('OK');
      }
      
      if (text.startsWith('/image')) {
        const prompt = text.replace('/image', '').trim();
        if (!prompt) {
          await sendTelegram(env, chatId, '🎨 لطفا توضیح بده: /image یک گربه');
          return new Response('OK');
        }
        await sendTelegram(env, chatId, '🎨 در حال ساخت...');
        const imageUrl = await AI.image(prompt, env);
        await sendTelegram(env, chatId, imageUrl || '❌ خطا');
        return new Response('OK');
      }
      
      const balance = (await DB.getUser(env, userId))?.balance || 0;
      if (balance <= 0) {
        await sendTelegram(env, chatId, '❌ موجودی تموم شد!');
        return new Response('OK');
      }
      
      await DB.deductBalance(env, userId);
      const response = await AI.chat(text, env);
      await sendTelegram(env, chatId, response);
      
      return new Response('OK');
    }
    
    if (url.pathname === '/set-webhook') {
      const webhookUrl = `https://${request.headers.get('host')}/webhook`;
      const token = env.BOT_TOKEN || CONFIG.BOT_TOKEN;
      const res = await fetch(
        `https://api.telegram.org/bot${token}/setWebhook?url=${webhookUrl}`
      );
      return new Response(await res.text());
    }
    
    return new Response('Not found', { status: 404 });
  }
};
