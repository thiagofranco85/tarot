import { fastifyCors } from '@fastify/cors';
import fastify from "fastify";
import { routes } from './routes/index';

const server = fastify({ logger: true });


server.register(fastifyCors, { origin: '*' })

server.listen({ port: 3000, host: '127.0.0.1' }).then(() => {
  console.log('Server is running on port 3000')
})

server.register(routes, { prefix: "/api" });


