import { createClient } from 'redis'

const client = createClient({ url: 'redis://localhost:6379' })

client.on('error', (err) => console.error('Redis Client Error', err))

// connect immediately when this module is imported
await client.connect()

export default client