// load the module and create the reference of mongodb module 
let mongoClient = require("mongodb").MongoClient;
//url Details
let url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("Connected to db");
        let db = client.db("Mongo");
        let id = document.getElementById("update_id");
        let amount = document.getElementById("update_amount");
        
        db.collection("Employees").updateOne({_id:id},{$set:{amount:amount}},(err,result)=> {
            if(!err){
                    if(result.modifiedCount>0){
                        console.log("Record updated successfully")
                    }else {
                        console.log("Record not present")
                    }
                   
            }else {
                    console.log(err);
            }
            client.close();
        })
        
    }
    else {
        console.log(err);
    }
})