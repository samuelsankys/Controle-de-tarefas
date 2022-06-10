
const controller = require('../controllers/list.controllers');
const router = require('express').Router();


router.get('/', controller.getAll);

module.exports = router