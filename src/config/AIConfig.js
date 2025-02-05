import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";

const openAIApiKey = process.env.OPENAI_API_KEY;

if (!openAIApiKey) throw new Error("Missing or incorrect OpenAI API Key.")
export const llm = new ChatOpenAI({openAIApiKey, model: "gpt-4" });
export const embeddings = new OpenAIEmbeddings({ openAIApiKey });