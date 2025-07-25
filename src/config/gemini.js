// const apiKey = "AIzaSyDYoGpPsQBn8fzfpFOtzio0sI9HpzpRBII"


import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";



const apiKey = "AIzaSyDYoGpPsQBn8fzfpFOtzio0sI9HpzpRBII";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function runChat(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response
    console.log(response.text())
    return response.text();
}

export default runChat;