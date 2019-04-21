const express = require('express');
const router = express.Router();

//Tag Model


const Tag = require('../../models/Tag');


router.get('/tags', (req, res) => {
    Tag.find() 
    .then(tags => res.send(tags))
})

router.post('/tag', (req, res) => {
    const newTag = new Tag({
        name: req.body.name,
        message: req.body.message
    })
    newTag.save().then(tag => res.send(tag))
})

router.delete('/tag/:id', (req, res) => {
    Tag.findById(req.params.id)
    .then(tag => tag.remove().then(() => res.json({success: true})))
    .catch(err=>res.status(404).json({success: false}))
})

//Vehicle Model

const Vehicle = require("../../models/Vehicle");

router.get('/vehicle/:id', (req, res) => {
    Vehicle.findById(req.params.id)
        .populate('tags').then(vehicle => 
            {res.send(vehicle)})})

router.get('/vehicles', (req, res) => {
    Vehicle.find().populate('tags')
        .then((vehicle) => res.json(vehicle))
})



//People Model

const People = require('../../models/People')

// desc Get all planets

router.post("/newperson", (req, res) => {
  const person = new People({
    name: req.body.name
  });
  person.save().then(person => res.send(person));
});


router.get('/people', (req, res) => {
    People.find({}).populate('vehicles').populate('tags')
        .then(people => res.json(people))
})

router.get('/people/:id', (req, res) => {
    People.findById(req.params.id).populate('vehicles').populate('tags')
        .then(people => res.json(people))
    })


//Planet Model

const Planet = require('../../models/Planet')

// desc Get all planets
router.get('/planet', (req, res) => {
    Planet.find({}).populate('residents').populate('tags')
        .then(planets => res.json(planets))
})

    router.get('/planet/:id', (req, res) => {
        Planet.findById(req.params.id).populate('residents').populate('tags')
            .then(planets => res.json(planets))
    })


module.exports = router 