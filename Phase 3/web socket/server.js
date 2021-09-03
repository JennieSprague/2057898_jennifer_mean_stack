//load express mod
let express = require("express");

//create ref of express mod
let app = express();

//load express-ws and create ref of express-ws with
//the help of express ref using IIFE (app)
let ws = require("express-ws")(app);

//http://localhost:8080
//open html page
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\/index.html");
})

app.ws("/",(socket,req)=>{
    console.log("Client connected");

    //receive message from client
    //message is pre defined property
    socket.on("message",(data)=>{
        console.log(data);
    })
    //send data to client app
    socket.send("Hello client, you are connected to socket server app");
})



app.listen(8080,()=>console.log("server running on port 8080"));