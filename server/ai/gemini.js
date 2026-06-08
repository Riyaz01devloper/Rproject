// import axios from "axios";

// export default async function askOllama(prompt) {
//   const res = await axios.post("http://localhost:11434/api/generate", {
//     model: "llama3",
//     prompt,
//     stream: false,
//   });

//   return res.data.response;
// }
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function gemini(prompt) {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"
  });

  const result = await model.generateContent(prompt);

  const response = await result.response;

  return response.text();
}
