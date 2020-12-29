let express = require('express')

let path = require('path') // import path lib
let app = express()

let groceries = [
    {type: "grains", name: "bread"},
    {type: "fruit", name: "banana"},
    {type: "dairy", name: "milk", name: "cheese"},
  ]

app.set("view engine", "ejs") // set view engines
// tells express where to find our ejs view files
app.set('views', path.join(__dirname, 'views'));

//get request for home folder and renders home page
app.get("/home", function(req,res) {
    res.send("welcome to amazon")
})
//get request for home folder and renders products on page
app.get("/Task4", function(req,res) {
    res.render("home.ejs")
})
//get request for dynamic product listing
app.get("/home/productList", function(req,res) {
    
    res.render("dynamic.ejs", {groceries})
})


// mounting a route
app.listen(3000, function() {
    console.log("Listening on port 3000")
})


  