import { app } from "./app";
import { env } from "./env";

const start = async () => {
  try {
    await app
      .listen({
        host: env.APP_HOST,
        port: env.APP_PORT,
      })
      .then(() =>
        console.log(
          `🚀 HTTP Server Running at ${env.APP_PROTOCOL}://${env.APP_HOST}:${env.APP_PORT}`
        )
      );
  } catch (err) {
    console.log("Error starting server:", err);
    process.exit(1);
  }
};

start();
