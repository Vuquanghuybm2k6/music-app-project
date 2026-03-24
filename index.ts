import express, { Express} from 'express'
const app: Express = express()
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3000

import * as database from './config/database'
database.connect()

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))
import { clientRoutes } from './routes/client/index.route'
clientRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
