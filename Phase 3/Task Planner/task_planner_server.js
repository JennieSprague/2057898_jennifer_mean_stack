// load the module 
let http  = require("http");
let url = require("url");
let fs = require("fs");
//let plan = require("./")
let planner = 'text_planner.html'
let server = http.createServer((req,res)=> {
    //res.writeHead(200, {'Content-Type': 'text/html'});

    let urlInfo = url.parse(req.url,true);
    
    fs.readFile('task_planner.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    //res.end();
});

server.listen(8080,()=>console.log("Server is running on port number 8080"))