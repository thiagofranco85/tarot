import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {
  app.get("/", async (_, reply) => {
    reply.send(JSON.stringify({ hello: "world" }));
  });
}
