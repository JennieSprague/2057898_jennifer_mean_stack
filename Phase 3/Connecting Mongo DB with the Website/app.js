// load the express module 
//const { Socket } = require("dgram");
let express = require("express");
// create the reference of epxress module 
let app = express();
// load the http module and connect to express module with Server property
let http = require("http").Server(app);
// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

// load the module and create the reference of mongodb module 
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

// mongoClient.connect(url, (err, client) => {
//     if (!err) {
//         console.log("Connected to db");
//         io.on("connection",(socket)=> {
//             console.log("Client connected");
//             // receive the message from client application 
//             socket.on("obj",(msg)=> {
//                 console.log(msg);
//             })
//             // sending data to client 
//             socket.emit("obj1","Hello Client connected server...");

//             // add course to data base
//             // emmitted from add_course.html
//             socket.on("add",(course)=>{
//                 console.log(course);
//                 let db = client.db("Mongo");
//                 db.collection("courses").insertOne(course, (err, result) => {
//                     if (!err) {
//                         console.log(course.name);
//                         console.log("Course added");
//                         console.log(result);
//                     }
//                     else {
//                         console.log(err);
//                     }
//                     client.close();
//                 })
//             })

//             // update course from database
//             //emmitted from update_course.html
//             socket.on("update",({id, amount})=>{
//                 db.collection("Employees").updateOne({_id:id},{$set:{amount:amount}},(err,result)=> {
//                     if(!err){
//                         if(result.modifiedCount>0){
//                             console.log("Record updated successfully")
//                         }else {
//                             console.log("Record not present")
//                         }

//                     }else {
//                         console.log(err);
//                     }
//                     client.close();
//                 })
//             })
//             // sending data to client 
//             socket.emit("obj1","Hello Client connected server...");
//         })
//     }
//     else {
//         console.log(err);
//     }
// })


app.get("/", (req, res) => {
    res.sendFile(__dirname + "\/index.html");
})
app.get("/add_course", (req, res) => {
    res.sendFile(__dirname + "\/add_course.html");
})
app.get("/update_course", (req, res) => {
    res.sendFile(__dirname + "\/update_course.html");
})
app.get("/delete_course", (req, res) => {
    res.sendFile(__dirname + "\/delete_course.html");
})
app.get("/fetch_courses", (req, res) => {
    res.sendFile(__dirname + "\/fetch_courses.html");
})

io.on("connection", (socket) => {
    console.log("Client connected");
    // receive the message from client application 
    socket.on("obj", (msg) => {
        console.log(msg);
    })
    // sending data to client 
    socket.emit("obj1", "Hello Client connected server...");


    // add course to data base
    // emmitted from add_course.html
    socket.on("add", (course) => {
        console.log(course);
        mongoClient.connect(url, (err, client) => {
            if (!err) {
                let db = client.db("Mongo");
                db.collection("courses").insertOne(course, (err, result) => {
                    if (!err) {
                        console.log("Course added");
                        console.log(result);
                    }
                    else {
                        console.log(err);
                    }
                    client.close();
                })
            }
            else {
                console.log(err);
            }
        })
    })

    // update course from database
    //emmitted from update_course.html
    socket.on("update", ({ id, amount }) => {
        mongoClient.connect(url, (err, client) => {
            if (!err) {
                let db = client.db("Mongo");
                db.collection("Employees").updateOne({ _id: id }, { $set: { amount: amount } }, (err, result) => {
                    if (!err) {
                        if (result.modifiedCount > 0) {
                            console.log("Record updated successfully")
                        } else {
                            console.log("Record not present")
                        }

                    } else {
                        console.log(err);
                    }
                    client.close();
                })
            }
        })
    })
})
    //     // sending data to client 
    //     socket.emit("obj1","Hello Client connected server...");
    // })

    // please run the server using http module not express module 
    http.listen(9090, () => console.log("Server running on port number 9090"));
