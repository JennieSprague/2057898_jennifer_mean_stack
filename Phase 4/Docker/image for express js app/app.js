let express = require("express");
let app = express();

app.get("/simpleMsg",(req,res) => {
    res.send("welcome to express using docker")
})

app.get("/user/:name",(req,res) => {
    let name = req.params.name;
    res.send("Welcome " + name);
})

app.listen(9090,()=>console.log("running on port 9090"));