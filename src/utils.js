// ============================================================
// 📨 TELEGRAM SERVICE - نسخه کامل
// ============================================================

export const Telegram = {
  // ============================================================
  // 📌 CONFIG
  // ============================================================
  getToken(env) {
    return env.BOT_TOKEN || CONFIG?.BOT_TOKEN;
  },

  getBaseUrl(env) {
    return `https://api.telegram.org/bot${this.getToken(env)}`;
  },

  // ============================================================
  // 📨 SEND MESSAGE
  // ============================================================
  async sendMessage(env, chatId, text, options = {}) {
    try {
      const token = this.getToken(env);
      if (!token) throw new Error('BOT_TOKEN not configured');

      const url = `${this.getBaseUrl(env)}/sendMessage`;
      
      const payload = {
        chat_id: chatId,
        text: text,
        parse_mode: options.parseMode || 'HTML',
        disable_web_page_preview: options.disablePreview !== false,
        disable_notification: options.disableNotification || false,
        protect_content: options.protectContent || false,
      };

      if (options.replyToMessageId) {
        payload.reply_to_message_id = options.replyToMessageId;
      }

      if (options.replyMarkup) {
        payload.reply_markup = JSON.stringify(options.replyMarkup);
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (!data.ok) {
        throw new Error(data.description || 'Unknown error');
      }

      return data.result;

    } catch (error) {
      console.error('sendMessage Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 🖼️ SEND PHOTO
  // ============================================================
  async sendPhoto(env, chatId, photo, caption = '', options = {}) {
    try {
      const url = `${this.getBaseUrl(env)}/sendPhoto`;
      
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('photo', photo);
      if (caption) formData.append('caption', caption);
      formData.append('parse_mode', options.parseMode || 'HTML');
      
      if (options.replyMarkup) {
        formData.append('reply_markup', JSON.stringify(options.replyMarkup));
      }
      if (options.disableNotification) {
        formData.append('disable_notification', 'true');
      }
      if (options.protectContent) {
        formData.append('protect_content', 'true');
      }
      if (options.hasSpoiler) {
        formData.append('has_spoiler', 'true');
      }

      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('sendPhoto Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 🎬 SEND VIDEO
  // ============================================================
  async sendVideo(env, chatId, video, caption = '', options = {}) {
    try {
      const url = `${this.getBaseUrl(env)}/sendVideo`;
      
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('video', video);
      if (caption) formData.append('caption', caption);
      formData.append('parse_mode', options.parseMode || 'HTML');
      
      if (options.duration) formData.append('duration', options.duration);
      if (options.width) formData.append('width', options.width);
      if (options.height) formData.append('height', options.height);
      if (options.thumb) formData.append('thumb', options.thumb);
      if (options.supportsStreaming) {
        formData.append('supports_streaming', 'true');
      }
      if (options.replyMarkup) {
        formData.append('reply_markup', JSON.stringify(options.replyMarkup));
      }

      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('sendVideo Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 🎵 SEND VOICE
  // ============================================================
  async sendVoice(env, chatId, voice, caption = '', options = {}) {
    try {
      const url = `${this.getBaseUrl(env)}/sendVoice`;
      
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('voice', voice);
      if (caption) formData.append('caption', caption);
      formData.append('parse_mode', options.parseMode || 'HTML');
      
      if (options.duration) formData.append('duration', options.duration);
      if (options.replyMarkup) {
        formData.append('reply_markup', JSON.stringify(options.replyMarkup));
      }

      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('sendVoice Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 📄 SEND DOCUMENT
  // ============================================================
  async sendDocument(env, chatId, document, caption = '', options = {}) {
    try {
      const url = `${this.getBaseUrl(env)}/sendDocument`;
      
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('document', document);
      if (caption) formData.append('caption', caption);
      formData.append('parse_mode', options.parseMode || 'HTML');
      
      if (options.thumb) formData.append('thumb', options.thumb);
      if (options.replyMarkup) {
        formData.append('reply_markup', JSON.stringify(options.replyMarkup));
      }

      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('sendDocument Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 🎯 SEND CHAT ACTION (Typing, Uploading, etc.)
  // ============================================================
  async sendChatAction(env, chatId, action = 'typing') {
    try {
      const url = `${this.getBaseUrl(env)}/sendChatAction`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          action: action
        })
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('sendChatAction Error:', error);
      // عدم خطا برای این تابع
    }
  },

  // ============================================================
  // ✏️ EDIT MESSAGE
  // ============================================================
  async editMessage(env, chatId, messageId, text, options = {}) {
    try {
      const url = `${this.getBaseUrl(env)}/editMessageText`;
      
      const payload = {
        chat_id: chatId,
        message_id: messageId,
        text: text,
        parse_mode: options.parseMode || 'HTML',
        disable_web_page_preview: options.disablePreview !== false,
      };

      if (options.replyMarkup) {
        payload.reply_markup = JSON.stringify(options.replyMarkup);
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('editMessage Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 🗑️ DELETE MESSAGE
  // ============================================================
  async deleteMessage(env, chatId, messageId) {
    try {
      const url = `${this.getBaseUrl(env)}/deleteMessage`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId
        })
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('deleteMessage Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 📊 ANSWER CALLBACK
  // ============================================================
  async answerCallback(env, callbackId, text = '', showAlert = false) {
    try {
      const url = `${this.getBaseUrl(env)}/answerCallbackQuery`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          callback_query_id: callbackId,
          text: text,
          show_alert: showAlert
        })
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
      return data.result;

    } catch (error) {
      console.error('answerCallback Error:', error);
      throw error;
    }
  },

  // ============================================================
  // 📋 SEND KEYBOARD
  // ============================================================
  sendKeyboard(buttons, options = {}) {
    const keyboard = {
      inline_keyboard: []
    };

    let row = [];
    for (const btn of buttons) {
      if (btn.newRow && row.length > 0) {
        keyboard.inline_keyboard.push([...row]);
        row = [];
        continue;
      }
      
      row.push({
        text: btn.text,
        callback_data: btn.callbackData,
        url: btn.url,
        web_app: btn.webApp
      });

      if (row.length >= (options.maxButtonsPerRow || 3)) {
        keyboard.inline_keyboard.push([...row]);
        row = [];
      }
    }
    
    if (row.length > 0) {
      keyboard.inline_keyboard.push(row);
    }

    return keyboard;
  },

  // ============================================================
  // 🔗 SEND INLINE KEYBOARD
  // ============================================================
  sendInlineKeyboard(buttons) {
    return this.sendKeyboard(buttons);
  }
};

// ============================================================
// 📨 تابع ساده برای ارسال پیام (همانند کد شما)
// ============================================================

export async function sendTelegram(env, chatId, text, options = {}) {
  return await Telegram.sendMessage(env, chatId, text, options);
}

// ============================================================
// 🎯 تابع‌های کمکی
// ============================================================

// ارسال پیام با کیبورد
export async function sendTelegramWithKeyboard(env, chatId, text, buttons, options = {}) {
  const keyboard = Telegram.sendKeyboard(buttons);
  return await Telegram.sendMessage(env, chatId, text, {
    ...options,
    replyMarkup: keyboard
  });
}

// ارسال پیام با تایپ کردن
export async function sendTelegramWithTyping(env, chatId, text, options = {}) {
  await Telegram.sendChatAction(env, chatId, 'typing');
  return await Telegram.sendMessage(env, chatId, text, options);
}

// ارسال پیام طولانی (شکسته شده)
export async function sendLongTelegram(env, chatId, text, options = {}) {
  const maxLength = 4000;
  const chunks = [];
  
  // شکستن متن به بخش‌های کوچکتر
  if (text.length <= maxLength) {
    return await sendTelegram(env, chatId, text, options);
  }

  // شکستن بر اساس پاراگراف
  const paragraphs = text.split('\n\n');
  let currentChunk = '';
  
  for (const p of paragraphs) {
    if (currentChunk.length + p.length + 2 > maxLength) {
      if (currentChunk) chunks.push(currentChunk);
      currentChunk = p;
    } else {
      currentChunk += (currentChunk ? '\n\n' : '') + p;
    }
  }
  if (currentChunk) chunks.push(currentChunk);

  // ارسال هر بخش
  const results = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const prefix = chunks.length > 1 ? `📄 بخش ${i+1}/${chunks.length}:\n\n` : '';
    const result = await sendTelegram(env, chatId, prefix + chunk, options);
    results.push(result);
  }
  
  return results;
}

export default Telegram;
