import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import postRoutes from './routes/posts.js'


const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

const COONECTION_URL = 'mongodb+srv://chido:fusion14@cluster0.lkdak.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(COONECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
.catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)