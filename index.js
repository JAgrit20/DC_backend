import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import sampleRoute from './routes/sampleRoute.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/', sampleRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))
