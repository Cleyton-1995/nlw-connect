import { z } from 'zod'

import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { subscribleToEvent } from '../functions/subscrible-to-event'
export const SubscribleToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscription',
    {
      schema: {
        summary: 'Subscribes someone to the event',
        tags: ['Subscription'],
        body: z.object({
          name: z.string(),
          email: z.string(),
          referrer: z.string().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body

      const { subscriberId } = await subscribleToEvent({
        name,
        email,
        referrerId: referrer,
      })

      return reply.status(201).send({
        subscriberId,
      })
    }
  )
}
