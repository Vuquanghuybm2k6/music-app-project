import express, { Express} from 'express'
const app: Express = express()
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3000

import * as database from './config/database'
database.connect()

import { clientRoutes } from './routes/client/index.route'
clientRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
