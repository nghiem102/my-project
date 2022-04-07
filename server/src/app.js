import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'

import productRoute from './Routers/products'
import categoryRoute from './Routers/category'

const app = express()

app.use(morgan('tiny'))
app.use(express.json()),
app.use(cors())

app.use('/api',productRoute)
app.use('/api',categoryRoute)


mongoose.connect('mongodb://localhost:27017/shoes-shop')
    .then(() => console.log("connected db"))
    .catch(error => console.log(error))

const POST = 3001
app.listen(POST, () => {
    console.log("server is running :",POST);
})