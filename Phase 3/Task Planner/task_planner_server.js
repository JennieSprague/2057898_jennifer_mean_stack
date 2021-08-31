// load the module 
let http = require("http");
let url = require("url");
let fs = require("fs");

let index = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Task Planner</title>
  </head>
  <body>
    <h1>Task Planner</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    <h2>Add Task</h2>
    <form action=storeTask >
        <label>Emp Id</label>
        <input type="text" name="empId"/><br/>
        <label>Task Id</label>
        <input type="text" name="taskId"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <label>Deadline</label>
        <input type="text" name="deadline"/><br/>
        <input type="submit" value="Store Task Info"/>
        <input type="reset" value="Reset"/>
      </form>
      <hr> 
      <h2>Delete Task</h2>
    <form action="deleteTask">
      <label>Task Id</label>
      <input type="text" name="taskId">
      <input type="submit" value="submit">
      <input type="reset" value="reset">
    </form>
    <hr>
    <h2>List Tasks</h2>
    <form action="listTasks">
      <input type="submit" value="List Tasks">
    </form>
    </body>
</html>
`
let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  let urlInfo = url.parse(req.url, true);
  let task_list = JSON.parse(fs.readFileSync("task_list.json").toString());
  //let urlInfo = url.parse(request.url,true);
  //true makes query considered a ref instead of a string
  //console.log(urlInfo)
  //console.log("path "+urlInfo.path)   // path :path name with query details 
  //console.log("pathName"+urlInfo.pathname)    // pathname : only path 
  if (urlInfo.path != "/favicon.ico") {
    if (urlInfo.pathname == "/storeTask") {
      let newTaskInfo = urlInfo.query;
      let empId = newTaskInfo.empId;
      let taskId = newTaskInfo.taskId;
      let task = newTaskInfo.task;
      let deadline = newTaskInfo.deadline;
      task_list.push({"empId" : empId, "taskId": taskId, "task":task, "deadline":deadline})
      fs.writeFileSync("task_list.json", JSON.stringify(task_list));
      //res.write("take action to store task, empID:" + empId);
      console.log("added taskId: " + taskId);
      res.write(index);
    } else if (urlInfo.pathname == "/listTasks") {
      res.write("take action to list tasks");
      
    } else if (urlInfo.pathname == "/deleteTask") {
      let taskInfo = urlInfo.query;
      let taskId = taskInfo.taskId;
      if (taskId != undefined){
        let ind = task_list.findIndex(elem => elem.taskId == taskId);
        console.log(ind);
        //JSON.splice(ind, 1);
        task_list.splice(ind,1);
        console.log("task deleted taskId: " + taskId);
        fs.writeFileSync("task_list.json", JSON.stringify(task_list));
        res.write(index);
      }
      //res.write("take action to delete tasks");
      else{
        console.log("Id not present");
        res.write(index);
      }
    }
    else {
      res.write(index);
    }
  }
  res.end();
});

server.listen(8080, () => console.log("Server is running on port number 8080"))