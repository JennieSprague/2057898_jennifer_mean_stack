// load the module and create the reference of mongodb module 
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";

mongoClient.connect(url, (err, client)=>{
    if (!err) {
        console.log("Connected to db");
        let db = client.db("Mongo");
        let id = document.getElementById("delete_id");
        
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