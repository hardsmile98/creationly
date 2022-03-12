import express, { Application } from 'express'
import mongoose, { ConnectOptions } from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'
import users from './routes/users'

const app: Application = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api/v1/users', users)

const PORT = process.env.PORT || '5000'
const URL = process.env.MONGODB_URL || ''

async function start() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    app.listen(PORT, () => {
      console.log(`server start http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log('server error', error)
    process.exit(1)
  }
}

start()
