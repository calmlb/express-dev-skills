let devSkillsImports = require('../models/skill-model')
let devSkills = devSkillsImports.devSkills
let getName = devSkillsImports.getName 

function indexCtrl (req, res, next) {
    res.render('skills.ejs', {devSkills});
  }

function detail (req,res) {
    let myskill = getName(req.params.id)
    res.render('skills.ejs' + req.params)
}

module.exports = {
    indexCtrl,
    detail,
  }