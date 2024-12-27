const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

// ROUTES
app.get('/', function(req,res){
    res.send("<h1>Hello from Express</h1>");
})

  app.get('/home', function(req, res){
    res.render('index', {
        companyName: "Sakura Japanese Dining"
    }); // can leave out .hbs extension
})


//   MARK: Always last
app.listen(3000, ()=>{
    console.log("Server started")
})
