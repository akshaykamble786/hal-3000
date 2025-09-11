import client from "../redis-client"

export async function getStats(username) {
  const cached = await client.get(username)
  if (cached) {
    return { source: 'cache', data: JSON.parse(cached) }
  }

  const res = await fetch(`https://api.parse.bot/v1/letterboxd/${username}`)
  if (!res.ok) throw new Error('Failed to fetch stats')

  const stats = await res.json()

  await client.set(username, JSON.stringify(stats), { EX: 3600 })

  return { source: 'parsebot', data: stats }
}