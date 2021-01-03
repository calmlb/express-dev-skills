let devSkillsImports = require('../models/devSkillsModel.js');

function index(req, res, next) {
    res.render('skills-index.ejs', {devSkills: devSkillsImports.devSkills});
  }

function detail(req, res, next) {
    let devSkills_obj = devSkillsImports.getOne(req.params.id)
    // res.send("you typed: " + req.params.id + " and your object " + "is " + obj.skills)
    res.render('skills-details.ejs', {devSkills_obj})
}

function edit(req,res) {
  let skill_to_edit = devSkillsImports.getOne(req.params.id)
    res.render('edit.ejs', {skill_to_edit})
}

function deleteOne(req, res) {
  devSkillsImports.deleteSkill(req.params.id);
  console.log(devSkillsImports.getAll())
  res.send('thank you')
}

function create(req, res) {
  console.log(req.body)
  devSkillsImports.addStuffToArray(req.body.userskill)
  console.log(devSkillsImports.getAll)
     res.redirect('/skills')
}

function newSkill(req, res) {
  res.render('new.ejs')
}

module.exports = {
    index,
    detail,
    // newSkill : newSkill -- Long form, but it's nice because it shows the key:value pair
    newSkill, // <-- shorthand if function name and key name are the same
    create,
    deleteOne: deleteOne,
    edit
  }