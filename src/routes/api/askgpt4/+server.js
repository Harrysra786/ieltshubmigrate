import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.VITE_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const _chatbot = {
    generateResponse: async (userMessage, systemMessage) => {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                { "role": "system", "content": systemMessage },
                { role: "user", content: userMessage }
            ],
        });
        if (completion && completion.data && completion.data.choices && completion.data.choices[0] && completion.data.choices[0].message) {
            return completion.data.choices[0].message.content;
        } else {
            throw new Error("Invalid response from OpenAI API");
        }
    },
};

export default _chatbot;
