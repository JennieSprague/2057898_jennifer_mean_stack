//load mod
let net = require("net");
//connect server program using IP(127.0.0.1) and port number
let client = net.createConnection(8080,"localhost",()=>{
    //send data to server
    client.write("Hello Server, I am a client");
    client.write("second message");
});

//receive data from server app, outside connection
//using client
client.on("data",(msg)=>{
    console.log(msg.toString())
})