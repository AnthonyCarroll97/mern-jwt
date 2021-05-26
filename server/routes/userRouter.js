const express = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    // Find user by email
    const user = await User.findOne({ email })
    if(!user) res.status(400).json({ error: "email invalid" })
    if(user.password != password) res.status(400).json({ error: "wrong password" })


    // User is found
    const token = jwt.sign({ _id: user.id }, 'verysecretstring')
    // Allow header to get past cors
    res.set('Access-Control-Expose-Headers', 'authToken')
    res.header('authToken', token).send()

})

router.get('/', (req, res) => {
    res.json({blah: "users"})
})
module.exports = router