import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import z from "zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors);
app.post(
  "/subscription",
  {
    schema: {
      body: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
      response: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
    },
  },
  async (request, replay) => {
    const { name, email } = request.body;

    return replay.status(201).send({
      name,
      email,
    });
  }
),
  app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running!");
  });
