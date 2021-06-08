const router = require('express').Router();
let Faculty = require('../models/faculty.model');



router.route('/').get((req, res) => {
    Faculty.find()
        .then(faculties => res.json(faculties))
        .catch(err => res.status(400).json(`Error ${err}`));
});


router.route('/').delete((req, res) => {
    Faculty.findByIdAndDelete(req.query.id)
        .then(data => res.json(
            {
                message: "Faculty was successfully deleted", data
            }
        ))
        .catch(err => res.status(400).json(`Error ${err}`));
});


router.route('/add').post((req, res) => {
    const {
        name,
        abbreviation,
        description,
        linkToWebSite,
        image
    } = req.body;

    const newFaculty = new Faculty({
        name,
        abbreviation,
        description,
        linkToWebSite,
        image
    });

    newFaculty.save()
        .then((addedElement) => res.json(
            {
                message: "Faculty was successfully added", addedElement
            }
        ))
        .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;