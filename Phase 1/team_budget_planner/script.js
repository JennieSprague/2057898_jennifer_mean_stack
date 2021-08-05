var newBudget = {
    clientName : null,
    projectName : null,
    budget : 03
}
var a = 0;

function addBudget() {
    var thisBudget = Object.create(newBudget);
    thisBudget.clientName = document.getElementById("client").value;
    thisBudget.projectName = document.getElementById("project").value;
    thisBudget.budget = document.getElementById("budget").value;
    
    sessionStorage.setItem(a, JSON.stringify(thisBudget));
    //var user = {'name':'John'};
    //sessionStorage.setItem('user', JSON.stringify(user));
    //var obj = JSON.parse(sessionStorage.user);
    console.log(sessionStorage.getItem(a));
    a++;
    return thisBudget;
 }