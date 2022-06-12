
const controller = require('../controllers/activities.controllers');
const router = require('express').Router();


router.get('/:list_id', controller.getActivitiesList);
router.post('/:list_id/activity', controller.createActivity);
router.put('/:list_id/activity/:activity_id', controller.updateActivity);
router.delete('/:list_id/activity/:activity_id', controller.deleteActivity);

module.exports = router;