// load the module and create the reference of mongodb module 
console.log("add course js reached");
let mongoClient = require("mongodb").MongoClient;
//url Details
let url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("Connected to db");
        add_course = () => {
            let db = client.db("Mongo");
            let course_id = document.getElementById("add_id");
            let course_name = document.getElementById("add_name");
            let course_description = document.getElementById("add_desc");
            let course_amount = document.getElementById("add_amount");
            let course = { _id: course_id, name: course_name, description: course_description, amount: course_amount };
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

    }
    else {
        console.log(err);
    }
})