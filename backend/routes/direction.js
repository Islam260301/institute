const router = require('express').Router();let Direction = require('../models/direction.model');router.route('/').get((req, res) => {    Direction.findById()        .then(Directions => res.json(Directions))        .catch(err => res.status(400).json(`Error ${err}`));});router.route('/add').post((req, res) => {    const {        name,        abbreviation,        description,        linkToWebSite,        image    } = req.body;    const newFaculty = new Faculty({        name,        abbreviation,        description,        linkToWebSite,        image    });    newFaculty.save()        .then(() => res.json('Faculty added'))        .catch(err => res.status(400).json(`Error ${err}`));});module.exports = router;