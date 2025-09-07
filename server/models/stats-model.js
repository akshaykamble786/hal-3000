import client from "../redis-client"

export async function getStats(username) {
  // check Redis first
  const cached = await client.get(username)
  if (cached) {
    return { source: 'cache', data: JSON.parse(cached) }
  }

  // fetch from Parse.bot (or Mongo later)
  const res = await fetch(`https://api.parse.bot/v1/letterboxd/${username}`)
  if (!res.ok) throw new Error('Failed to fetch stats')

  const stats = await res.json()

  // cache for 1h
  await client.set(username, JSON.stringify(stats), { EX: 3600 })

  return { source: 'parsebot', data: stats }
}