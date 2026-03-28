import express, { Express} from 'express'
const app: Express = express()
import dotenv from 'dotenv'
import path from 'path'
import { systemConfig } from './config/system'
import * as database from './config/database'
import { clientRoutes } from './routes/client/index.route'
import { adminRoutes } from './routes/admin/index.route'

dotenv.config()
const port = process.env.PORT || 3000
database.connect()

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))

// Tiny MCE
app.use('/tinymce', express.static(path.join(__dirname,'node_modules','tinymce')))
// End Tiny MCE

clientRoutes(app)
adminRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
