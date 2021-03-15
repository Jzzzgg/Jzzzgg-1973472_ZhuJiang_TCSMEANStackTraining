(function retriveFromSession(){
    var sum = 0;
    var total = sessionStorage.getItem("total")
    total  = JSON.parse("[" + total + "]")
    total.forEach(element => {
        sum = sum + element;
    });
    var proString = sessionStorage.getItem("projectInfo")
    var array = []
    array  = JSON.parse("[" + proString + "]")
    for(var i=0;i<array.length; i++){
        insert(array[i],sum)
    }

    // using this function can make sure it start the function when table is compelete.
    // get the arry of datas and total input to insert method
})();
function insert(data,sum){ 
    document.getElementById("totalContainer").innerHTML = sum;
    var table = document.getElementById("List");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(0)
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.client;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.project;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cost;

    //insert data and total to current position.

}