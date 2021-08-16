const express = require('express')
const APP = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

//Middleware
APP.use(express.json());

//MONGODB
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0onkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` 

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})

//cors
const whitelist =['http://localhost3000']

// controllers
const bookmarkController = require('./controller/bookmark.js')
APP.use('/bookmark', bookmarkController)

APP.get('/', (req, res) => {
    // res.send('hi')
    res.redirect('/bookmark')
})

APP.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
