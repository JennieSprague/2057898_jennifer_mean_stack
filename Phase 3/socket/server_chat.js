//load the mod
let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})
//create server ref
let server = net.createServer();
//function get call if any client sends a request to
//server using port number
server.on("connection",(socket)=>{
    console.log("client connected");
    //recieve client data, inside connection
    //using socket
    socket.on("data",(msg)=>{
        console.log(msg.toString());
    })
    //send data to client application
    socket.write("Hello Client, you have connected!"); 
    r1.on("line",(input)=>{
        socket.write(`Server says : ${input}`);
    })
});
server.listen(8080,()=>console.log("running on port 8080"));