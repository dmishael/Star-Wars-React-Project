const express = require("express");
const router = express.Router();

//Tag Model

const Tag = require("../../models/Tag");
const Planet = require("../../models/Planet");
const Vehicle = require("../../models/Vehicle");
const Person = require("../../models/People");

router.get("/tags", (req, res) => {
  Tag.find().then(tags => res.send(tags));
});

router.post("/person/:objectId/tag", (req, res) => {
  const personId = req.params.objectId;
  console.log("person Id", personId);
  Person.findOne({ id: personId }).then(person => {
    console.log("post", person);
    Tag.create(req.body)
    .then(newTag => {
      console.log(newTag);
      person.tags.push(newTag);
      person.save();
      res.send(newTag);
    });
  });
  Person.findById(personId).then(person => {
    res.send(person);
  });
});

router.delete("/tag/:id", (req, res) => {
  Tag.findById(req.params.id)
    .then(tag => tag.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//Vehicle Model

router.get("/vehicle/:id", (req, res) => {
  Vehicle.findById(req.params.id)
    .populate("tags")
    .then(vehicle => {
      res.send(vehicle);
    });
});

router.get("/vehicles", (req, res) => {
  Vehicle.find()
    .populate("tags")
    .then(vehicle => res.json(vehicle));
});

//People Model

// desc Get all planets

router.post("/newperson", (req, res) => {
  const person = new Person({
    name: req.body.name,
    gender: req.body.gender,
    homeworld: req.body.homeworld,
    id: req.body.id
  });
  person.save().then(person => res.send(person));
});

router.get("/people", (req, res) => {
  Person.find({})
    .populate("vehicles")
    .populate("tags")
    .then(people => res.json(people));
});

router.get("/people/:id", (req, res) => {
  Person.findById(req.params.id)
    .populate("vehicles")
    .populate("tags")
    .then(people => res.json(people));
});

//Planet Model

// desc Get all planets
router.get("/planet", (req, res) => {
  Planet.find({})
    .populate("residents")
    .populate("tags")
    .then(planets => res.json(planets));
});

router.get("/planet/:id", (req, res) => {
  Planet.findById(req.params.id)
    .populate("residents")
    .populate("tags")
    .then(planets => res.json(planets));
});

module.exports = router;
