import "dotenv/config";
import z from "zod";

// validation
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  APP_PROTOCOL: z.string(),
  APP_HOST: z.string(),
  APP_PORT: z.coerce.number().int().default(3333),
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

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.log("❗ Invalid Enviroment Variables", _env.error.format());
  throw new Error("Invalid Enviroment Variables");
}

export const env = _env.data;
