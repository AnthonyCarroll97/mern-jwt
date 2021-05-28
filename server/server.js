const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter = require('./routes/userRouter')
const cors = require('cors')
const validateUser = require('./utils/validateUser')
require('dotenv').config()

mongoose.connect(`mongodb+srv://Anthony:${process.env.MONGO_PASSWORD}@mern-jwt.s7vcb.mongodb.net/mern-jwt?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection

db.on('error', () => console.log(error))
db.once('connected', () => console.log("connected to database"))

app.use(express.json())
app.use(cors())

app.use(validateUser)

app.use('/users', userRouter)

app.get('/', (req,res) => {
    console.log(res.locals.user)
    res.send(res.locals.user)
    
})


app.listen(3100, () => console.log("server started on port 3100"))