//load mod
let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})
//connect server program using IP(127.0.0.1) and port number
let client = net.createConnection(8080,"localhost",()=>{
    //send data to server
    client.write("Hello Server, I am a client");
    //client.write("second message");
    //receive data from server app, outside or inside connection
    //using client
    client.on("data",(msg)=>{
        console.log(msg.toString())
    })
    r1.on("line",(input)=>{
        client.write(`Client says : ${input}`);
    })
});

