import { fastifyCors } from './../node_modules/@fastify/cors/types/index.d';
import fastify from "fastify";

const app = fastify()

app.register(fastifyCors)
app.get("/hello", () => {
   return "Hello world"
})

app.listen({port: 3333}).then(() => {
   console.log("HTTP server running!")
})