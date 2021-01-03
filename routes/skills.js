var express = require('express');
var router = express.Router();
let devSkillsController = require('../controllers/devSkillsController.js');

/* GET users listing. */
router.get('/', devSkillsController.index);
router.get('/new', devSkillsController.newSkill)
router.post('/', devSkillsController.create) 
router.delete('/:id', devSkillsController.deleteOne)
router.get('/id/edit', devSkillsController.edit)

// router.get('/new', function(req,res) {
//     res.render('new.ejs')
// })

// router.post('/create', function(req,res) {
//     res.send(req.body)
// })

router.get('/:id', devSkillsController.detail);
    


module.exports = router;