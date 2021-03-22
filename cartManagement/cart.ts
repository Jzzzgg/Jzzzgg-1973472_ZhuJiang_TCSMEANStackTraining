interface Icart{
    itemName:string;
    itemPrice:number;
    quantity : number;
}

// Created the interface to set the rule of items

const items : string[] = ["Apple", "Peach" , "Banana", "Keyboard", "Mouse", "Headphone", "Bike", "Car", "Yacht"];
const prices : number[] = [1.3 , 3, 2.2 , 60, 39.99, 200.99, 180, 24999.99, 49999.99];
let quantityList : number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let cartList : any = [];

//Create the array of item you want to display;



(function setItem() : void{
    for(var i = 0; i < items.length; i++){
        document.getElementById(`name${i+1}`).innerHTML = items[i];
        document.getElementById(`price${i+1}`).innerHTML = prices[i].toString();
    }
})();



// This function will run at beginning to place the item's name and price


function addToCart(order : number) : void{
    var cartObj : Icart = {
        itemName: items[order-1],
        quantity : quantityList[order-1] + 1,
        itemPrice: prices[order-1]
    }
    // Create the object

    
    
    quantityList[order-1] =  quantityList[order-1]+1;
    //Increase quanitity number by each click   
    const total: number = prices[order-1] * quantityList[order-1];
    //calculated total price for this item
    document.getElementById(`price${order}`).innerHTML = `${quantityList[order-1]} *  ${prices[order-1]} = ${total.toFixed(2)}`;

    checkCart(document.getElementById(`name${order}`).innerHTML,);
    // call check Cart function
    cartList.push(cartObj);
    // push to Array
    console.log(cartObj)
    
    const cartSize =  document.getElementById("cartSize");
    cartSize.innerHTML = `Cart Size: ${cartList.length}`;
    cartSize.classList.add("nav-link");
    // Output the cart Size
}
function checkCart(thisName : string) : void{
    for(var item in cartList){
        if(cartList[item].itemName === thisName){
            delete cartList[item];
        }
    }
    // delete the old item and add new item quantity
}

function submit(){
    sessionStorage.setItem("cartList",JSON.stringify(cartList));
}
//store in the session storage


function add1(){ addToCart(1); }
function add2(){ addToCart(2); }
function add3(){ addToCart(3); }
function add4(){ addToCart(4); }
function add5(){ addToCart(5); }
function add6(){ addToCart(6); }
function add7(){ addToCart(7); }
function add8(){ addToCart(8); }
function add9(){ addToCart(9); }
// onclick function for buttons