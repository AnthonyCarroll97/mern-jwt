const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const router = express.Router()


// Register a new user
router.post('/register', async(req, res,next) => {
    const { username, password, password2, email } = req.body
    // Check if user exists
    const user = await User.findOne({ email: email })
    // Return if email is already in use
    if(user) { 
        res.status(400).json({ error: "That email adress is already in use" })
        return
    }
    // Check if both passwords match
    if(password != password2) {
        res.status(401).json({ error: "passwords do not match" })
        return
    } 

    const newUser = new User({ username, email, password })
    // Hash the users password
    const hashedPassword = bcrypt.hashSync(newUser.password, 10)
    newUser.password = hashedPassword
    const savedUser = await newUser.save(err => err ? console.log(err) : null)
    res.status(201).json(savedUser)

})
// User Login
router.post('/login', async (req, res) => {
    const {email, password} = req.body
    // Find user by email
    const user = await User.findOne({ email })
    if(!user)  return res.status(400).json({ error: "email invalid" })
    const isValid = bcrypt.compareSync(password, user.password)
    if(isValid){
        // User is found
        const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET)
        // Allow header to get past cors
        res.set('Access-Control-Expose-Headers', 'authToken')
        res.status(200).header('authToken', token).send()
    } else{

        res.status(400).json({ error: "passwords do not match" })
    }

    

})

router.get('/', (req, res) => {
    res.json({ blah: "users" })
})
module.exports = router