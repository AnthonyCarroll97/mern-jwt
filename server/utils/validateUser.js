const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const validateUser = async (req, res, next) => {
    
    const authToken = req.headers.authtoken
    // Sets the user to the response object if a valid authentication token is present

    if(authToken) {
        try{
            // Throws an error if the passwords do not match
            const id = jwt.verify(authToken, process.env.JWT_SECRET)._id
            const user = await User.find({ _id: id })
            req.user = user
            res.locals.user = user
            res.username = user.username
        } catch(err){}
        
    }
    next()
}



module.exports = validateUser