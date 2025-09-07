import { Hono } from 'hono'
import { statsController } from '../controllers/stats-controller'

const statsRouter = new Hono()

statsRouter.get('/:username', statsController)

export default statsRouter