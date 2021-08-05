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
    //var myArr = JSON.parse(thisBudget);
    //console.log(myArr);
    entries.push(thisBudget);
    console.log(entries);
    sessionStorage.setItem(sessionStorage.length, JSON.stringify(thisBudget));
    //var user = {'name':'John'};
    //sessionStorage.setItem('user', JSON.stringify(user));
    //var obj = JSON.parse(sessionStorage.user);
    var myArr = JSON.parse(sessionStorage.getItem(sessionStorage.length-1));
    console.log(myArr);
    //a++;
    print_arr();
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
 /*function print_arr(){
    for (var i = 0; i < sessionStorage.length; i++){
        var myArr = (sessionStorage.getItem(i)).split(',',3);
        var myClientName = myArr[0].split(':\"');
        var myProjectName = myArr[1].split(':\"');
        var myBudget = myArr[2].split(':\"');
        console.log(myClientName[1]+ "," + myProjectName[1] + "," + myBudget[1]);
        var myParse = JSON.parse(myArr);
        console.log(myParse);
     }
 }
 */

 function Clear(){
     document.getElementById("client").value = "";
     document.getElementById("project").value = "";
     document.getElementById("budget").value = "";
 }
 
