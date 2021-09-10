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
                db.collection("courses").updateOne({ _id: id }, { $set: { amount: amount } }, (err, result) => {
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

    // delete course from data base
    // emmitted from delete_course.html
    socket.on("delete", (id) => {
        console.log(id);
        mongoClient.connect(url, (err, client) => {
            if (!err) {
                let db = client.db("Mongo");
                db.collection("courses").deleteOne({ _id: id }, (err, result) => {
                    if (!err) {
                        if (result.deletedCount > 0) {
                            console.log("Record deleted successfully")
                        } else {
                            console.log("Record not present")
                        }
                    } else {
                        console.log(err)
                    }
                    client.close();
                })
            }
            else {
                console.log(err);
            }
        })
    })

    // fetch all courses from database
    socket.on("fetch", ({courses, table}) =>{
        console.log("fetching in app");
        mongoClient.connect(url,(err,client)=> {
            if(!err){
                console.log("Connected")
                let db = client.db("Mongo");
                //let cursor = db.collection("Employees").find();
                // retrieve document with condition 
                // let newDiv = document.createElement("div");
                // let table = document.createElement("table");
                // let header = document.createElement("th");
                // let data = document.createElement("td");
                //let table = document.getElementById("cart_table")
                
                //let tbody = document.createElement("tbody");
                //table.appendChild(tbody);
                let cursor = db.collection("courses").find();
                cursor.forEach(doc=> {
                    //console.log("Name "+doc.name+" Salary "+doc.salary);
                    console.log(doc);
                    socket.emit("doc",doc);
                    // let row = document.createElement("tr");
                    // let cell = document.createElement("td");
                    // socket.emit("td_tr",)
                    // cell.textContent = doc._id;
                    // row.appendChild(cell);
                    // cell.textContent = doc.name;
                    // row.appendChild(cell);
                    // cell.textContent = doc.description;
                    // row.appendChild(cell);
                    // cell.textContent = doc.amount;
                    // row.appendChild(cell);
                    // tbody.appendChild(row);
                    client.close();
                })
                console.log("Cursor" + cursor);
                //socket.emit("course_list", newDiv);
                
            }else {
                console.log(err);
            }
        })
    })
})
    // please run the server using http module not express module 
    http.listen(9090, () => console.log("Server running on port number 9090"));
