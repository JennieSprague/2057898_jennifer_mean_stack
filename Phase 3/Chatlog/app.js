// load the express module 
let express = require("express");

// create the reference of epxress module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";


app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
    socket.on("obj",(msg)=> {
        console.log(msg);
    })
    socket.on("data",(data) => {
        if (!err){
            mongoClient.connect(url, (err, client) => {
                if (!err){
                    let db = client.db("Mongo");
                    db.collection("Messages").insertOne(data, (err, result) => {
                        if (!err) {
                            console.log("Message added");
                            console.log(result);
                        }
                        else {
                            console.log(err);
                        }
                        client.close();
                    })

                }
                else{
                    console.log(err);
                }
            })
        }
        else {
            console.log(err);
        }
    })
})


// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));