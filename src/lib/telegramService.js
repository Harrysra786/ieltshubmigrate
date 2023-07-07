const TELEGRAM_API_URL = "https://api.telegram.org";
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;

async function getChatId() {
  const chat_id = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!chat_id) {
    throw new Error("No chat_id found. Please set the VITE_TELEGRAM_CHAT_ID environment variable.");
  }

  return chat_id;
}

export const sendMessageToSavedMessages = async (name, text) => {
  const chat_id = await getChatId();
  const message = `Name: ${name}\n\nText: ${text}`;
  const url = `${TELEGRAM_API_URL}/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

  const response = await fetch(url, {
    method: "POST",
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.description || "Failed to send message to Telegram";
    throw new Error(errorMessage);
  }
};
