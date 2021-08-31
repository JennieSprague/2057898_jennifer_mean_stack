import {Task} from "./task";

function storeTask(){
    let tasks = JSON.parse(fs.readFileSync("task_list.json").toString());
    let task = new Task();
    task.empId = empId;

}