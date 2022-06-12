
const controller = require('../controllers/list.controllers');
const router = require('express').Router();


router.get('/', controller.getAll);
router.post('/', controller.createList);
router.delete('/:list_id', controller.deleteList);

module.exports = router