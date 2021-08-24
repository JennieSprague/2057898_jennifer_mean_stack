var http = require('http');
var fs = require('fs');
var url = require('url');
let obj = require("readline");

//create server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q);
    var filename = "." + q.pathname + ".html";
    if (filename == './.html') {filename='./index.html'}
    filename
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        console.log("...Incoming Request " + req.url)
        return res.end();
    })
}).listen(8080)

let record = JSON.parse(fs.readFileSync("record.json").toString());
//Date and Time
let ts = Date.now();
console.log(Math.floor(ts/1000));
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
console.log(year + "-" + month + "-" + date);
console.log("Server listening on Port 8080") 

// User Input
var r1 = obj.createInterface({
    input:process.stdin,        // standard input device keyboards 
    output:process.stdout       // standard output device console 
});
r1.question("Enter first name",(firstname)=> {
    r1.question("Enter last name",(lastname)=> {
        r1.question("Enter gender",(gender)=> {
            r1.question("Enter email",(email)=>{
                console.log("Name is "+firstname + " " + lastname);
                console.log("Gender is "+gender);
                console.log("Email is "+email);
                record.push({"firstname":firstname,"lastname":lastname,"gender":gender,"email":email});
                fs.writeFileSync("record.json",JSON.stringify(record));
                r1.close();
            })
        })
    })
})