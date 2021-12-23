import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import studentRouter from './routes/studentRoute.js'
import recordingRouter from './routes/recordingRoute.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))
