const express = require('express')
const APP = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')

//Middleware
APP.use(express.json());

APP.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
