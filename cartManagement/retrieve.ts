let totals : number = 0;
//create the totals to hold the total price for the items 

(function retrieve(){
    let cartList = sessionStorage.getItem("cartList")
    cartList  = JSON.parse( cartList )
    // take out the item from the session

    for(let i=0;i < cartList.length ; i++){
        if(!cartList[i]){
            
        }
        else{
            insert(cartList[i]);
        }

    }
    // if the item is exist then call insert function


    document.getElementById("total").innerHTML = `Total: $ ${totals.toFixed(2)}`;

    //display the total amount for items
})();

// using this function can make sure it start the function when table is compelete.
    // get the array of datas and total input to insert method
function insert(data){ 

        let table = document.getElementById("myCart");
        let body = table.getElementsByTagName("tbody")[0];
        let newRow = body.insertRow(0)
        let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.itemName;
        let cell2 = newRow.insertCell(1);
        cell2.innerHTML = `$ ${data.itemPrice}`;
        let cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.quantity;
        let cell4 = newRow.insertCell(3);
        let total : number = (data.itemPrice * data.quantity)
        cell4.innerHTML = `$ ${total.toFixed(2)}`;

        //insert items into table

        totals += total;

        //add price for this item to total price


}
