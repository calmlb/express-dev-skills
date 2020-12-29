let express = require('express')
let tododb = require("./views/todos/todos.js")

let path = require('path') // import path lib
let app = express()

let groceries = [
    {type: "grains", name: "bread"},
    {type: "fruit", name: "banana"},
    {type: "dairy", name: "milk", name: "cheese"},
  ]

app.set("view engine", "ejs") // set view engines
// tells express where to find our ejs view files
app.set('Task4', path.join(__dirname, 'Task4'));

//get request for home folder and renders home page
app.get("/home", function(req,res) {
    res.render("home.ejs")
})
//get request for home folder and renders products on page
app.get("/home/Task4", function(req,res) {
    res.render("products.ejs", {groceries})
})

app.get("/home/Task4", function(req,res) {
    res.render("home.ejs")
})







app.get('/todos', function(req,res) {
    res.render('todos/todos.ejs', {
        todos: tododb.todos})
})

app.get("/home", function(req,res) {
    res.render("home.ejs")
})

app.get("/school", function(req,res) {
    res.render("school.ejs")
})

app.get("/home", function(req,res) {
    res.render("form.ejs")
})

app.post("/handle_form", function(req, res) {
    res.render("test.ejs")
})

// mounting a route
app.listen(3000, function() {
    console.log("Listening on port 3000")
})


  