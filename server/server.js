const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter = require('./routes/userRouter')
const cors = require('cors')
mongoose.connect('mongodb://localhost/users',{useUnifiedTopology: true, useNewUrlParser: true})

app.use(express.json())
app.use(cors())


app.use('/users', userRouter)

app.get('/', (req,res) => {
    const authToken = req.headers.authToken
    if(authToken){
        console.log("auth")
        res.send("authorised")
    }else {
        console.log("no auth")
        res.send("not authorised")
    }
    
})


app.listen(5000, () => console.log("app started on port 5000"))