const CHAT_ID = "6660879147";
const BOT_TOKEN = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

export async function sendToTelegram(data, source = "Buyurtma") {
  const fields = [
    `📦 *Yangi buyurtma — ${source}*`,
    `👤 Ism: ${data.name || data.firstName || "—"}`,
    `👥 Familiya: ${data.surname || data.lastName || "—"}`,
    `📞 Telefon: ${data.phone || "—"}`,
    `💬 Telegram: ${data.telegram || "—"}`,
    `📍 Hudud: ${data.region || "—"}`,
    `🛠 Xizmat: ${data.service || "—"}`,
    `✍️ Xabar: ${data.message || "—"}`,
  ].join("\n");

  const response = await fetch(TELEGRAM_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: fields,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description || "Telegram xatosi");
  }

  return response.json();
}