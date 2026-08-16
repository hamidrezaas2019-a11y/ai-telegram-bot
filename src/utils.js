// ============================================================
// 📨 TELEGRAM SERVICE
// src/utils.js
// ============================================================

export const Telegram = {

  // ============================================================
  // 🔐 CONFIG
  // ============================================================

  getToken(env) {
    const token = env?.BOT_TOKEN;

    if (!token) {
      throw new Error("BOT_TOKEN not configured");
    }

    return String(token).trim();
  },

  getBaseUrl(env) {
    return `https://api.telegram.org/bot${this.getToken(env)}`;
  },


  // ============================================================
  // 📨 SEND MESSAGE
  // ============================================================

  async sendMessage(env, chatId, text, options = {}) {

    const payload = {
      chat_id: chatId,
      text: String(text ?? ""),
      parse_mode: options.parseMode || "HTML",
      disable_web_page_preview:
        options.disablePreview !== false,
      disable_notification:
        options.disableNotification || false,
      protect_content:
        options.protectContent || false
    };

    if (options.replyToMessageId) {
      payload.reply_to_message_id =
        options.replyToMessageId;
    }

    if (options.replyMarkup) {
      payload.reply_markup =
        options.replyMarkup;
    }

    const response = await fetch(
      `${this.getBaseUrl(env)}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error(
        data.description || "Telegram sendMessage failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 🖼️ SEND PHOTO
  // ============================================================

  async sendPhoto(
    env,
    chatId,
    photo,
    caption = "",
    options = {}
  ) {

    const formData = new FormData();

    formData.append(
      "chat_id",
      String(chatId)
    );

    formData.append(
      "photo",
      photo
    );

    if (caption) {
      formData.append(
        "caption",
        caption
      );
    }

    formData.append(
      "parse_mode",
      options.parseMode || "HTML"
    );

    if (options.replyMarkup) {
      formData.append(
        "reply_markup",
        JSON.stringify(options.replyMarkup)
      );
    }

    if (options.disableNotification) {
      formData.append(
        "disable_notification",
        "true"
      );
    }

    if (options.protectContent) {
      formData.append(
        "protect_content",
        "true"
      );
    }

    if (options.hasSpoiler) {
      formData.append(
        "has_spoiler",
        "true"
      );
    }

    const response = await fetch(
      `${this.getBaseUrl(env)}/sendPhoto`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error(
        data.description || "Telegram sendPhoto failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 🎬 SEND VIDEO
  // ============================================================

  async sendVideo(
    env,
    chatId,
    video,
    caption = "",
    options = {}
  ) {

    const formData = new FormData();

    formData.append(
      "chat_id",
      String(chatId)
    );

    formData.append(
      "video",
      video
    );

    if (caption) {
      formData.append(
        "caption",
        caption
      );
    }

    formData.append(
      "parse_mode",
      options.parseMode || "HTML"
    );

    if (options.duration) {
      formData.append(
        "duration",
        String(options.duration)
      );
    }

    if (options.width) {
      formData.append(
        "width",
        String(options.width)
      );
    }

    if (options.height) {
      formData.append(
        "height",
        String(options.height)
      );
    }

    if (options.supportsStreaming) {
      formData.append(
        "supports_streaming",
        "true"
      );
    }

    if (options.replyMarkup) {
      formData.append(
        "reply_markup",
        JSON.stringify(options.replyMarkup)
      );
    }

    const response = await fetch(
      `${this.getBaseUrl(env)}/sendVideo`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error(
        data.description || "Telegram sendVideo failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 🎵 SEND VOICE
  // ============================================================

  async sendVoice(
    env,
    chatId,
    voice,
    caption = "",
    options = {}
  ) {

    const formData = new FormData();

    formData.append(
      "chat_id",
      String(chatId)
    );

    formData.append(
      "voice",
      voice
    );

    if (caption) {
      formData.append(
        "caption",
        caption
      );
    }

    formData.append(
      "parse_mode",
      options.parseMode || "HTML"
    );

    if (options.duration) {
      formData.append(
        "duration",
        String(options.duration)
      );
    }

    if (options.replyMarkup) {
      formData.append(
        "reply_markup",
        JSON.stringify(options.replyMarkup)
      );
    }

    const response = await fetch(
      `${this.getBaseUrl(env)}/sendVoice`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error(
        data.description || "Telegram sendVoice failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 📄 SEND DOCUMENT
  // ============================================================

  async sendDocument(
    env,
    chatId,
    document,
    caption = "",
    options = {}
  ) {

    const formData = new FormData();

    formData.append(
      "chat_id",
      String(chatId)
    );

    formData.append(
      "document",
      document
    );

    if (caption) {
      formData.append(
        "caption",
        caption
      );
    }

    formData.append(
      "parse_mode",
      options.parseMode || "HTML"
    );

    if (options.replyMarkup) {
      formData.append(
        "reply_markup",
        JSON.stringify(options.replyMarkup)
      );
    }

    const response = await fetch(
      `${this.getBaseUrl(env)}/sendDocument`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error(
        data.description || "Telegram sendDocument failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 🎯 CHAT ACTION
  // ============================================================

  async sendChatAction(
    env,
    chatId,
    action = "typing"
  ) {

    try {

      const response = await fetch(
        `${this.getBaseUrl(env)}/sendChatAction`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            chat_id: chatId,
            action
          })
        }
      );

      const data =
        await response.json();

      if (!data.ok) {
        throw new Error(
          data.description ||
          "Telegram chat action failed"
        );
      }

      return data.result;

    } catch (error) {

      console.error(
        "sendChatAction Error:",
        error
      );

      return false;
    }
  },


  // ============================================================
  // ✏️ EDIT MESSAGE
  // ============================================================

  async editMessage(
    env,
    chatId,
    messageId,
    text,
    options = {}
  ) {

    const payload = {
      chat_id: chatId,
      message_id: messageId,
      text: String(text ?? ""),
      parse_mode:
        options.parseMode || "HTML",
      disable_web_page_preview:
        options.disablePreview !== false
    };

    if (options.replyMarkup) {
      payload.reply_markup =
        options.replyMarkup;
    }

    const response = await fetch(
      `${this.getBaseUrl(env)}/editMessageText`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const data =
      await response.json();

    if (!data.ok) {
      throw new Error(
        data.description ||
        "Telegram editMessage failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 🗑️ DELETE MESSAGE
  // ============================================================

  async deleteMessage(
    env,
    chatId,
    messageId
  ) {

    const response = await fetch(
      `${this.getBaseUrl(env)}/deleteMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId
        })
      }
    );

    const data =
      await response.json();

    if (!data.ok) {
      throw new Error(
        data.description ||
        "Telegram deleteMessage failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 📊 CALLBACK QUERY
  // ============================================================

  async answerCallback(
    env,
    callbackId,
    text = "",
    showAlert = false
  ) {

    const response = await fetch(
      `${this.getBaseUrl(env)}/answerCallbackQuery`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          callback_query_id:
            callbackId,
          text,
          show_alert:
            showAlert
        })
      }
    );

    const data =
      await response.json();

    if (!data.ok) {
      throw new Error(
        data.description ||
        "Telegram callback failed"
      );
    }

    return data.result;
  },


  // ============================================================
  // 📋 KEYBOARD
  // ============================================================

  sendKeyboard(
    buttons = [],
    options = {}
  ) {

    const keyboard = {
      inline_keyboard: []
    };

    const max =
      Math.max(
        1,
        Number(
          options.maxButtonsPerRow || 3
        )
      );

    let row = [];

    for (const btn of buttons) {

      if (
        btn.newRow &&
        row.length
      ) {
        keyboard.inline_keyboard.push(
          row
        );

        row = [];
      }

      const button = {
        text: String(
          btn.text ?? ""
        )
      };

      if (btn.callbackData) {
        button.callback_data =
          btn.callbackData;
      }

      if (btn.url) {
        button.url =
          btn.url;
      }

      if (btn.webApp) {
        button.web_app =
          btn.webApp;
      }

      row.push(button);

      if (row.length >= max) {

        keyboard.inline_keyboard.push(
          row
        );

        row = [];
      }
    }

    if (row.length) {
      keyboard.inline_keyboard.push(
        row
      );
    }

    return keyboard;
  },


  // ============================================================
  // 🔗 INLINE KEYBOARD
  // ============================================================

  sendInlineKeyboard(buttons) {
    return this.sendKeyboard(buttons);
  }
};


// ============================================================
// 📨 SIMPLE SEND
// ============================================================

export async function sendTelegram(
  env,
  chatId,
  text,
  options = {}
) {
  return Telegram.sendMessage(
    env,
    chatId,
    text,
    options
  );
}


// ============================================================
// 🎯 SEND WITH KEYBOARD
// ============================================================

export async function sendTelegramWithKeyboard(
  env,
  chatId,
  text,
  buttons,
  options = {}
) {

  const keyboard =
    Telegram.sendKeyboard(
      buttons,
      options
    );

  return Telegram.sendMessage(
    env,
    chatId,
    text,
    {
      ...options,
      replyMarkup: keyboard
    }
  );
}


// ============================================================
// 🎯 SEND WITH TYPING
// ============================================================

export async function sendTelegramWithTyping(
  env,
  chatId,
  text,
  options = {}
) {

  await Telegram.sendChatAction(
    env,
    chatId,
    "typing"
  );

  return Telegram.sendMessage(
    env,
    chatId,
    text,
    options
  );
}


// ============================================================
// 📄 LONG MESSAGE
// ============================================================

export async function sendLongTelegram(
  env,
  chatId,
  text,
  options = {}
) {

  const maxLength = 4000;

  const value =
    String(text ?? "");

  if (value.length <= maxLength) {
    return sendTelegram(
      env,
      chatId,
      value,
      options
    );
  }

  const chunks = [];

  let current = "";

  const paragraphs =
    value.split(/\n\n+/);

  for (const paragraph of paragraphs) {

    const part =
      paragraph.trim();

    if (!part) continue;

    if (
      current.length +
      part.length +
      2 <=
      maxLength
    ) {

      current +=
        current
          ? `\n\n${part}`
          : part;

      continue;
    }

    if (current) {
      chunks.push(current);
      current = "";
    }

    // پاراگراف خیلی بزرگ است
    for (
      let i = 0;
      i < part.length;
      i += maxLength
    ) {
      chunks.push(
        part.slice(
          i,
          i + maxLength
        )
      );
    }
  }

  if (current) {
    chunks.push(current);
  }

  const results = [];

  for (
    let i = 0;
    i < chunks.length;
    i++
  ) {

    const prefix =
      chunks.length > 1
        ? `📄 بخش ${i + 1}/${chunks.length}:\n\n`
        : "";

    results.push(
      await sendTelegram(
        env,
        chatId,
        prefix + chunks[i],
        options
      )
    );
  }

  return results;
};


// ============================================================
// 📦 DEFAULT EXPORT
// ============================================================

export default Telegram;
