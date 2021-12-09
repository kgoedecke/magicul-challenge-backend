import 'dotenv/config'

import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { createConnection } from 'typeorm'

import routes from './routes'
import { config } from './typeorm/config/ormconfig'

export const app = express()
createConnection(config)

app.use(cors())
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('combined'))
app.use('/', routes)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
