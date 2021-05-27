const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter = require('./routes/userRouter')
const cors = require('cors')
const validateUser = require('./utils/validateUser')

mongoose.connect('mongodb://localhost/users',{ useUnifiedTopology: true, useNewUrlParser: true })

app.use(express.json())
app.use(cors())

app.use(validateUser)

app.use('/users', userRouter)

app.get('/', (req,res) => {
    console.log(req.user)
    
})


app.listen(3100, () => console.log("server started on port 3100"))