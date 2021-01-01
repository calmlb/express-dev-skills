let devSkillsImports = require('../models/devSkillsModel.js');

function index(req, res, next) {
    res.render('skills-index.ejs', {devSkills: devSkillsImports.devSkills});
  }

  function detail(req, res, next) {
    let devSkills_obj = devSkillsImports.getOne(req.params.id)
    // res.send("you typed: " + req.params.id + " and your object " + "is " + obj.skills)
    res.render('skills-details.ejs', {devSkills_obj})
}

module.exports = {
    index,
    detail
}