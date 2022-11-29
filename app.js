import db from './db/dbconfig.js'
import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json({ping: 'pong'})
  })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })