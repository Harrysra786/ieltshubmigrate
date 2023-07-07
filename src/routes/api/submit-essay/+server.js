import { sendMessageToSavedMessages } from '../../../lib/telegramService';
import _chatbot from '../askgpt4/+server';

export async function POST(event) {
  const body = await event.request.json();
  const { nameInput, textInput } = body;

  try {
    // Send user's message to Telegram
    await sendMessageToSavedMessages(nameInput, textInput);

    // Process GPT-4 response in the background
    processGpt4Response(nameInput, textInput);

    return new Response(JSON.stringify({ message: 'Writing Task submitted successfully! You should receive a detailed feedback within the next 24 hours.' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.toString() }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function processGpt4Response(nameInput, textInput) {
  try {
    console.log('Calling GPT-4 API...');
    const [response1, response2] = await Promise.all([
      _chatbot.generateResponse(textInput, 'Define this word in one sentence'),
      _chatbot.generateResponse(textInput, 'Give two antonyms of this word.'),
    ]);

    console.log('Received responses from GPT-4 API:', response1, response2);

    if (response1 && response2) {
      await Promise.all([
        sendMessageToSavedMessages(nameInput, response1),
        sendMessageToSavedMessages(nameInput, response2),
      ]);
    } else {
      console.error('Error processing the essay with GPT-4. Please try again.');
    }
  } catch (error) {
    console.error('Error in processGpt4Response:', error.message);
  }
}
