import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import studentRouter from './routes/studentRoute.js'
import recordingRouter from './routes/recordingRoute.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'

import fs from 'fs'
import https from 'https'
// var https = require('https');

dotenv.config()

connectDB()

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/student', studentRouter)
app.use('/recording', recordingRouter)

app.use(notFound)
app.use(errorHandler)

// const PORT = process.env.PORT || 8000

// app.listen(PORT, console.log(`Server is running on port ${PORT}`))

var credentials = {
  key: fs.readFileSync('privkey_dcwebsite.pem'),
  cert: fs.readFileSync('fullchain_dcwebsite.pem'),
}

var httpsServer = https.createServer(credentials, app)
httpsServer.listen(8000)
