import { getStats } from "../models/stats-model"

export async function statsController(c) {
  const username = c.req.param('username')
  try {
    const result = await getStats(username)
    return c.json(result)
  } catch (err) {
    console.error(err)
    return c.json({ error: err.message }, 500)
  }
}