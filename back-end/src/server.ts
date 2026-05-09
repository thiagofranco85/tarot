import { fastifyCors } from '@fastify/cors';
import { fastifySwagger } from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastify from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';

import { routes } from './routes/index';

const server = fastify({ logger: true });


server.register(fastifyCors, { origin: process.env.ALLOWED_ORIGIN || '*' })

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Play Cards API',
      version: '1.0.0',
    }
  },
  transform: jsonSchemaTransform
});

server.register(fastifySwaggerUi, {
  routePrefix: '/api/docs'
})

 
server.register(routes, { prefix: "/api" });

server.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
  console.log(`Server is running on port 3000`)
})

const shutdown = async () => {
  await server.close();
  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);


