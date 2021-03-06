import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './router/index.js'
import errorMiddleware from './middlewares/errorMiddleware.js'

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log(`Server start on port: ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()