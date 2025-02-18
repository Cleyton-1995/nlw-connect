import z from "zod";

import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
export const SubscribleToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscription",
    {
      schema: {
        summary: "Subscribes someone to the event",
        tags: ["Subscription"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string().email(),
          }),
        },
      },
    },
    async (request, replay) => {
      const { name, email } = request.body;

      return replay.status(201).send({
        name,
        email,
      });
    }
  );
};
