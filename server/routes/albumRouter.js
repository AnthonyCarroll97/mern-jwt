const express = require('express')
const Album = require('../models/Album')
const router = express.Router()

router.get('/', (req, res, next) => {


} )

router.post('/', async (req, res, next) => {
    const { title, artist, genre } = req.body
    if(!res.user){
        // send error if a non logged in user has tried to post an album
        res.status(401).send("You must be logged in to post an album")
    } else {
        const newAlbum = new Album({
            title: title,
            artist: artist,
            genre: genre,
            userId: res.user._id
        })
        const savedAlbum = await newAlbum.save()
        res.status(201).json({ message: "album created"})
    }
})




module.exports = router