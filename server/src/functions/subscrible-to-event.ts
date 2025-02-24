import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { schema } from '../drizzle/schema'
import { redis } from '../redis/client'

interface SubscribleToEventParams {
  name: string
  email: string
  referrerId?: string | null
}

export async function subscribleToEvent({
  name,
  email,
  referrerId,
}: SubscribleToEventParams) {
  const subscribers = await db
    .select()
    .from(schema.subscriptions)
    .where(eq(schema.subscriptions.email, email))

  if (subscribers.length > 0) {
    return { subscribeId: subscribers[0].id }
  }

  const [{ subscriberId }] = await db
    .insert(schema.subscriptions)
    .values({
      name,
      email,
    })
    .returning({
      subscriberId: schema.subscriptions.id,
    })

  if (referrerId) {
    await redis.zincrby('referral:ranking', 1, referrerId)
  }

  return {
    subscriberId,
  }
}
