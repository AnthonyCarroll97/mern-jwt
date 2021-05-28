const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {


} )

router.post('/', (req, res, next) => {
    if(!res.locals.user){
        console.log("no user")
    } else {
        console.log("there is a user")
    }
})




module.exports = router