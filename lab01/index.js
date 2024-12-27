const express = require('express');
const app = express();


// ROUTES
app.get('/', function(req,res){
    res.send("<h1>Hello from Express</h1>");
})

app.get('/hello/:name', (req,res)=>{
    let name = req.params.name;
    res.send("Hi, " + name);
  })



//   MARK: Always last
app.listen(3000, ()=>{
    console.log("Server started")
})
