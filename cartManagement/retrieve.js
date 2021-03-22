var totals = 0;
//create the totals to hold the total price for the items 
(function retrieve() {
    var cartList = sessionStorage.getItem("cartList");
    cartList = JSON.parse(cartList);
    // take out the item from the session
    for (var i = 0; i < cartList.length; i++) {
        if (!cartList[i]) {
        }
        else {
            insert(cartList[i]);
        }
    }
    // if the item is exist then call insert function
    document.getElementById("total").innerHTML = "Total: $ " + totals.toFixed(2);
    //display the total amount for items
})();
// using this function can make sure it start the function when table is compelete.
// get the array of datas and total input to insert method
function insert(data) {
    var table = document.getElementById("myCart");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(0);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.itemName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = "$ " + data.itemPrice;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity;
    var cell4 = newRow.insertCell(3);
    var total = (data.itemPrice * data.quantity);
    cell4.innerHTML = "$ " + total.toFixed(2);
    //insert items into table
    totals += total;
    //add price for this item to total price
}
