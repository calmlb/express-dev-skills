let devSkills = [
    {id: "0", skill: "HTML", level: "noob"},
    {id: "1", skill: "CSS", level: "noob"},
    {id: "2", skill: "JS", level: "newb"},
    {id: "3", skill: "Node.js", level: "n00b"},
    {id: "4", skill: "Express", level: "n00beritis"},
    {id: "5", skill: "MongoDB", level: "level 0"},
  ]

  function getName(incoming_id) {
    for (let current_skill of devSkills) {
        if (current_skill.id == incoming_id) {
            return current_skill.name
        }
    }
}

module.exports = {
    devSkills,
    getName,
}