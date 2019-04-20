const express = require('express')
const router = express.Router()

//Planet Model

const Planet = require('../../models/Planet')

// desc Get all planets
router.get('/', (req, res) => {
    Planet.find()
        .then(planets => res.json(planets))
})


//Tag Model

const Tag = require('../../models/Tag')


router.get('/', (req, res) => {
    Tag.find() 
    .then(tags => res.json(tags))
})

router.post('/', (req, res) => {
    const newTag = new Tag({
        name: req.body.name
    })
    newTag.save().then(tag => res.json(tag))
})

router.delete('/:id', (req, res) => {
    Tag.findById(req.params.id)
    .then(tag => tag.remove().then(() => res.json({success: true})))
    .catch(err=>res.status(404).json({success: false}))
})






module.exports = router 