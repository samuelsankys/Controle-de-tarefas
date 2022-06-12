
const controller = require('../controllers/activities.controllers');
const router = require('express').Router();


router.get('/:list_id', controller.getActivitiesList);

module.exports = router;