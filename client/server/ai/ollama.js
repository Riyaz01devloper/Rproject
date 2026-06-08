import axios from "axios";

export default async function askOllama(prompt) {
  const res = await axios.post("http://localhost:11434/api/generate", {
    model: "llama3",
    prompt,
    stream: false,
  });

  return res.data.response;
}

