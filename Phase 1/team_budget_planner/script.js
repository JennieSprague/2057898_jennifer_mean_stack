var newBudget = {
    clientName : null,
    projectName : null,
    budget : 03
}

function addBudget() {
    var thisBudget = Object.create(newBudget);
    thisBudget.clientName = document.getElementById("client");
    thisBudget.projectName = document.getElementById("project");
    thisBudget.budget = document.getElementById("budget");
    

    //var user = {'name':'John'};
    //sessionStorage.setItem('user', JSON.stringify(user));
    //var obj = JSON.parse(sessionStorage.user);

    return thisBudget;
 }