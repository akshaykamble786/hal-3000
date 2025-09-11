import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serve } from 'bun'
import 'dotenv/config'
import statsRouter from './routes/stats-routes.js'

const app = new Hono()

app.use('*', cors())
app.get('/', (c) => c.text('Backend is running 🚀'))
app.route('/stats', statsRouter)

serve({ fetch: app.fetch, port: 4000 })