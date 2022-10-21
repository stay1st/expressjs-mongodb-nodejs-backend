require('dotenv').config({ path: 'DATABASE_URL' })
const express = require('express')
const app = express()
app.listen(3000, () => console.log('Server Started'))
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('localhost:3000/subscribers', subscribersRouter)
app.listen(3000, () => console.log('Server Started'))