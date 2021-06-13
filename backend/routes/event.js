const router = require('express').Router();
const eventController = require('../controllers/eventController');
const {upload} = require("../middleWare/upload");



router.get('/', eventController.getAllEvents)
// router.get('/:id', facultyController.getFaculty)
// router.delete('/:id', facultyController.deleteFaculty)
router.post('/', upload.single('image'), eventController.addEvent)
// router.put('/:id', facultyController.editFaculty)

module.exports = router;