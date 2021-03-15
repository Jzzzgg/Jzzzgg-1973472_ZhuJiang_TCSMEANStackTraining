var projects = [];
var total = [];
function storeInSession(){
    // if(sessionStorage.getItem("projectInfo") != null){
    //     console.log("Remove")
    //     var proString = sessionStorage.getItem("projectInfo")
    //     var array = []
    //     array  = JSON.parse("[" + proString + "]")
    //     for(var i=0;i<array.length; i++){
    //         projects.push(JSON.stringify(array[i]))
    //         console.log(projects)
    //         }
    //    }

    // this code is try to get value when it click other page and back to add page, to get the old data from session. provded session refresh after click on link



    sessionStorage.setItem("total",total)
    sessionStorage.setItem("projectInfo",projects)

    // add to session
}

function onFormSubmit(){
    var obj = {}; // empty object
    obj.client = document.getElementById("client").value;
    obj.project = document.getElementById("project").value;
    obj.cost = document.getElementById("cost").value;
    projects.push(JSON.stringify(obj));
    total.push(obj.cost)
    storeInSession();
    reset();
    // when you click on the add, it will collect the datas and transform to string. Push string to array called projects
    
}
function reset(){
    document.getElementById("client").value = '';
    document.getElementById("project").value = '';
    document.getElementById("cost").value = '';

    // reset function
}