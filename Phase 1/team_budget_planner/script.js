var newBudget = {
    clientName : null,
    projectName : null,
    budget : 0
}
var a = 0;
let entries = [];

function addBudget() {
    var thisBudget = Object.create(newBudget);
    thisBudget.clientName = document.getElementById("client").value;
    thisBudget.projectName = document.getElementById("project").value;
    thisBudget.budget = document.getElementById("budget").value;
    entries.push(thisBudget);
    console.log(entries);
    sessionStorage.setItem(sessionStorage.length, JSON.stringify(thisBudget));
    //var user = {'name':'John'};
    //sessionStorage.setItem('user', JSON.stringify(user));
    //var obj = JSON.parse(sessionStorage.user);
    var myArr = JSON.parse(sessionStorage.getItem(sessionStorage.length-1));
    console.log(myArr);
    //a++;
    print_session();
    return thisBudget;
 }

 //traverse through session storage
function print_session(){
    for (var i = 0; i < sessionStorage.length; i++){
        var myArr = JSON.parse(sessionStorage.getItem(i));
        console.log(myArr);
    }
}

 sessionStorage.length


 function Clear(){
     document.getElementById("client").value = "";
     document.getElementById("project").value = "";
     document.getElementById("budget").value = "";
 }
 
 function create_table(){
    let table_refer = document.getElementById('budget_table');
    for (var i = 0; i < sessionStorage.length; i++){
        var myArr = JSON.parse(sessionStorage.getItem(i));
        var client = myArr.clientName;
        var project = myArr.projectName;
        var budget = myArr.budget;
        //var num_rows = table_refer.rows.length;
        var curr_row = table_refer.insertRow(-1);
        curr_row.insertCell(0).innerHTML = client;
        curr_row.insertCell(1).innerHTML = project;
        curr_row.insertCell(2).innerHTML = budget;
    }
 }
