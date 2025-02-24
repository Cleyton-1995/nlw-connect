import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { getRankingRoute } from './routes/get-ranking-route'
import { subscribeToEventRoute } from './routes/subscrible-to-event-route'
import { accessInviteLinkRoute } from './routes/access-invite-link'
import { getSubscriberInvitesCountRoute } from './routes/get-subscriber-invites-count-route'
import { getSubscriberInvitesClicksRoute } from './routes/get-subscriber-invite-clicks-route'
import { getSubscriberRankingPositionRoute } from './routes/get-subscriber-ranking-position-route'

const app = fastify()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW Connect',
      version: '0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getRankingRoute)
app.register(getSubscriberInvitesCountRoute)
app.register(getSubscriberInvitesClicksRoute)
app.register(getSubscriberRankingPositionRoute)

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running!')
})
