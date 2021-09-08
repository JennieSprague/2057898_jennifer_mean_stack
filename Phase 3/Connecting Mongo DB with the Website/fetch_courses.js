// load the module and create the reference of mongodb module 
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";

mongoClient.connect(url, (err, client)=>{
    if (!err){
        console.log("Connected to db");
        let db = client.db("courses");
    }
    else{
        console.log(err);
    }
})