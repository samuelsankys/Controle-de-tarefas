
const controller = require('../controllers/activities.controllers');
const router = require('express').Router();


router.get('/:list_id', controller.getActivitiesList);
router.post('/:list_id/activity', controller.createActivity);

module.exports = router;