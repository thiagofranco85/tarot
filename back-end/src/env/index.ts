import dotenv from "dotenv";
import path from "path";
import z from "zod";

// validation
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  /*
  APP_PROTOCOL: z.string().optional(),
  APP_HOST: z.string().optional(),
  APP_PORT: z.coerce.number().int().default(3333),
  */
  AI_GEMINI_API_KEY: z.string(),
  /*
  DB_USER: z.string(),
  DB_HOST: z.string(),
  DB_NAME: z.string(),
  DB_PORT: z.coerce.number().int().default(3306),
  DB_PASSWORD: z.string().default(""),
  DB_CLIENT: z.string().default("mysql"),
  DB_URL: z.string(),
  CRYPTO_SECRET: z.string(),
  */
});

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.log("❗ Invalid Enviroment Variables", _env.error.format());
  throw new Error("Invalid Enviroment Variables");
}

export const env = _env.data;
