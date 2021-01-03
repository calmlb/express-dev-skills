const devSkills = [
    {id: "0", skill: 'HTML', level: "noob" },
    {id: "1", skill: 'CSS', level: "noob"},
    {id: "2", skill: 'JS', level: "newb"},
    {id: "3", skill: 'Node.js', level: "n00b"},
    {id: "4", skill: 'Express', level: "n00beritis"},
    {id: "5", skill: 'MongoDB', level: "level 0"},

]

function deleteSkill(id) {
    const idx = devSkills.findIndex(skill => skill.id === parseInt(id));
        devSkills.splice(idx, 1);
}


function addStuffToArray(incoming_skill) {
    let obj = {}
    obj.id = Math.floor(Math.random() * 1000000);
    obj.skill = incoming_skill
    obj.level = ""
    devSkills.push(obj)
}

function getOne (id) {
    // accepts an incoming id and returns the object   
    // return devSkills.find(devSkills=> skill.id == parseInt(id));
    // or could use a for statement
    for (let item of devSkills) {
        if (item.id == id) {
            return item
        }
    }
}

function getAll() {
    return devSkills;
}

module.exports = {
    getOne,
    devSkills,
    addStuffToArray,
    getAll, 
    deleteSkill
}