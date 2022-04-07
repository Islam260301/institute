const router = require('express').Router();
const positionController = require('../controllers/positionController');



router.get('/', positionController.getPosition);
router.post('/', positionController.addPosition);

module.exports = router;