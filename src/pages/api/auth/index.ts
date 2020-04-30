import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import './db'
import { services } from './services'

const app = express()

app.use(bodyParser.json())

// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }))

app.use('/api', services)

app.listen()
//8000, () => console.log('Express app listening on localhost:8000'))
