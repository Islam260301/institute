const router = require('express').Router();
const facultyController = require('../controllers/facultyController');


router.get('/', facultyController.getAllFaculties)
router.get('/:id', facultyController.getFaculty)
router.delete('/:id', facultyController.deleteFaculty)
router.post('/', facultyController.addFaculty)
router.put('/:id', facultyController.editFaculty)

module.exports = router;