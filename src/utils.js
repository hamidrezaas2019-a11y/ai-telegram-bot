export async function sendTelegram(env, chatId, text) {
  const token = env.BOT_TOKEN || CONFIG.BOT_TOKEN;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    })
  });
}
