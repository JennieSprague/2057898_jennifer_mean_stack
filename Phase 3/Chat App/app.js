// load the express module 
const { Socket } = require("dgram");
let express = require("express");
// create the reference of epxress module 
let app = express();
// load the http module and connect to express module with Server property
let http = require("http").Server(app);
// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

let ws = require("express-ws")(app);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\/index.html");
})

// io.on("connection",(socket)=> {
//     console.log("Client connected");
//     // receive the message from client application 
//     socket.on("obj",(msg)=> {
//         console.log(msg);
//     })
//     // sending data to client 
//     socket.emit("obj1","Hello Client connected server...");
// })
app.ws("/",(socket,req)=>{
    console.log("Client connected");

    socket.on("message",(msg)=>{
        console.log(msg);
    });
    socket.send("Hello Client, you are connected to the socket server app");
})

// please run the server using http module not express module 
// http.listen(9090,()=>console.log("Server running on port number 9090"));
app.listen(9090,()=>console.log("Server running on port number 9090"));