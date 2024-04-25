import fastify from "fastify";

const server: FastifyInstance = fastify({ logger: true });

const options: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
};

server.get("/", options, async (request, reply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await server.listen(3000);
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
