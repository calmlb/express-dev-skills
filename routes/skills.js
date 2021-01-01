var express = require('express');
var router = express.Router();
let devSkillsController = require('../controllers/devSkillsController.js');

/* GET users listing. */
router.get('/', devSkillsController.index);

router.get('/:id', devSkillsController.detail);

module.exports = router;