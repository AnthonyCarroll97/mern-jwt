const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const validateUser = require('./utils/validateUser')
require('dotenv').config()

// Routers
const userRouter = require('./routes/userRouter')
const albumRouter = require('./routes/albumRouter')

mongoose.connect(`mongodb+srv://Anthony:${process.env.MONGO_PASSWORD}@mern-jwt.s7vcb.mongodb.net/mern-jwt?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => console.log(error))
db.once('connected', () => console.log("connected to database"))


app.use(express.json())
app.use(cors())

// validate user function to be called on every request, will set a user to the response if the user is logged in
app.use(validateUser)

app.use('/albums', albumRouter)
app.use('/users', userRouter)

app.get('/', (req,res) => {
    console.log(res.locals.user)
    res.send(res.locals.user)
    
})


app.listen(3100, () => console.log("server started on port 3100"))