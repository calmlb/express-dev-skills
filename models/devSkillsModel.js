let devSkills = [
    {id: "0", skill: 'HTML', level: "noob" },
    {id: "1", skill: 'CSS', level: "noob"},
    {id: "2", skill: 'JS', level: "newb"},
    {id: "3", skill: 'Node.js', level: "n00b"},
    {id: "4", skill: 'Express', level: "n00beritis"},
    {id: "5", skill: 'MongoDB', level: "level 0"},

]

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

module.exports = {
    getOne,
    devSkills
}