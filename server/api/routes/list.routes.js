
const controller = require('../controllers/list.controllers');
const router = require('express').Router();


router.get('/', controller.getAll);
router.get('/:list_id', controller.getList);
router.post('/', controller.createList);
router.delete('/:list_id', controller.deleteList);
router.put('/:list_id', controller.updatedList);

module.exports = router