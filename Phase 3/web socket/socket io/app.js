let express = require("express");

let app = express();

let http = require("http").Server(app);

let io = require("socket.io")(http);

let responses = ["how are you","I am good, where are you from?", "have a good day","goodbye"];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "\/index.html");
})

io.on("connection", (socket) => {
    console.log("Client Connected");

    //receive message from client application
    socket.on("obj", (msg)=>{
        console.log(msg);
        
    })
    socket.on("name",(name)=>{
        console.log("Name : " + name);
        socket.emit("greeting","Hello " + name);
    })
    let i = 0;
    socket.on("msg",(msg)=>{
        console.log("Client says: " + msg);
        socket.emit("response","Server says : " + responses[i++]);
        if (i > 4) i = 0;
    })
    //send data to client
    socket.emit("obj1","Hello Client connected server...");
})

http.listen(8080, () => console.log("server running on port 8080"));