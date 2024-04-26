import dotenv from "dotenv";
import path from "path";

console.log(path.resolve(__dirname, "../.env"));

dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log(process.env.AI_GEMINI_API_KEY);
