var express = require('express');
var router = express.Router();

let devSkillsImport = require('../models/skill-model')
let devSkillsCtrlImport = require('../controllers/skills-ctrl')

/* GET skills listing. */    
    
router.get('/', devSkillsCtrlImport.indexCtrl );
router.get('/:id', devSkillsCtrlImport.detail)
    
module.exports = router;




