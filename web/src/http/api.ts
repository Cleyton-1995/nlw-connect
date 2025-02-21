/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * NLW Connect
 * OpenAPI spec version: 0.0.1
 */
export type PostSubscriptionBody = {
  name: string;
  email: string;
  /** @nullable */
  referrer?: string | null;
};

export type PostSubscription201 = {
  subscriberId: string;
};

/**
 * @nullable
 */
export type GetInvitesSubscriberId302 = typeof GetInvitesSubscriberId302[keyof typeof GetInvitesSubscriberId302] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetInvitesSubscriberId302 = {
  null: 'null',
} as const;

export type GetSubscriberSubscriberIdRankingClicks200 = {
  count: number;
};

export type GetSubscriberSubscriberIdRankingCount200 = {
  count: number;
};

export type GetSubscriberSubscriberIdRankingPosition200 = {
  /** @nullable */
  position: number | null;
};

export type GetRanking200RankingItem = {
  id: string;
  name: string;
  score: number;
};

export type GetRanking200 = {
  ranking: GetRanking200RankingItem[];
};



/**
 * @summary Subscribes someone to the event
 */
export const getPostSubscriptionUrl = () => {


  return `http://localhost:3333/subscription`
}

export const postSubscription = async (postSubscriptionBody: PostSubscriptionBody, options?: RequestInit): Promise<PostSubscription201> => {
  
  const res = await fetch(getPostSubscriptionUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postSubscriptionBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PostSubscription201 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Access invite link and redirects user
 */
export const getGetInvitesSubscriberIdUrl = (subscriberId: string,) => {


  return `http://localhost:3333/invites/${subscriberId}`
}

export const getInvitesSubscriberId = async (subscriberId: string, options?: RequestInit): Promise<unknown> => {
  
  const res = await fetch(getGetInvitesSubscriberIdUrl(subscriberId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: unknown = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Get subscriber invites clicks count
 */
export const getGetSubscriberSubscriberIdRankingClicksUrl = (subscriberId: string,) => {


  return `http://localhost:3333/subscriber/${subscriberId}/ranking/clicks`
}

export const getSubscriberSubscriberIdRankingClicks = async (subscriberId: string, options?: RequestInit): Promise<GetSubscriberSubscriberIdRankingClicks200> => {
  
  const res = await fetch(getGetSubscriberSubscriberIdRankingClicksUrl(subscriberId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSubscriberSubscriberIdRankingClicks200 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Get subscriber invites count
 */
export const getGetSubscriberSubscriberIdRankingCountUrl = (subscriberId: string,) => {


  return `http://localhost:3333/subscriber/${subscriberId}/ranking/count`
}

export const getSubscriberSubscriberIdRankingCount = async (subscriberId: string, options?: RequestInit): Promise<GetSubscriberSubscriberIdRankingCount200> => {
  
  const res = await fetch(getGetSubscriberSubscriberIdRankingCountUrl(subscriberId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSubscriberSubscriberIdRankingCount200 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Get subscriber ranking position
 */
export const getGetSubscriberSubscriberIdRankingPositionUrl = (subscriberId: string,) => {


  return `http://localhost:3333/subscriber/${subscriberId}/ranking/position`
}

export const getSubscriberSubscriberIdRankingPosition = async (subscriberId: string, options?: RequestInit): Promise<GetSubscriberSubscriberIdRankingPosition200> => {
  
  const res = await fetch(getGetSubscriberSubscriberIdRankingPositionUrl(subscriberId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSubscriberSubscriberIdRankingPosition200 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Get ranking
 */
export const getGetRankingUrl = () => {


  return `http://localhost:3333/ranking`
}

export const getRanking = async ( options?: RequestInit): Promise<GetRanking200> => {
  
  const res = await fetch(getGetRankingUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetRanking200 = body ? JSON.parse(body) : {}

  return data
}



