const router = require('express').Router();
const facultyController = require('../controllers/facultyController');


router.get('/all', facultyController.getAllFaculties)
router.get('/', facultyController.getFaculty)
router.delete('/:id', facultyController.deleteFaculty)
router.post('/', facultyController.addFaculty)

module.exports = router;