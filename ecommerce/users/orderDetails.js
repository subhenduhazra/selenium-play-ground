if(!ifLoggedIn()){
    window.location="login.html?redirect="+encodeURIComponent("myaccount.html");
}
let currentLoggedInUser = getLoggedInUser();
const orders = getUser(currentLoggedInUser.email).orders;

const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');
if(!orderId){
    window.location="message.html?heading=Error!&message="+encodeURIComponent("Order ID not provied");
}

console.log(orders)

const newlyCreated = urlParams.get("newlyCreated");
if(newlyCreated == "yes"){
    document.getElementById("newlyCtreatedTanks").style.display = "block";
}else{
    document.getElementById("newlyCtreatedTanks").style.display = "none";
}

const curOrder  = orders.filter(ord => ord.orderId == orderId)[0];

const shippingAddr = curOrder.shippingAddress;
const shippingAddress = new Address(shippingAddr.id, shippingAddr.name, shippingAddr.phone, shippingAddr.address, shippingAddr.pincode);

const billingAddr = curOrder.billingAddress;
const billingAddress = new Address(billingAddr.id, billingAddr.name, billingAddr.phone, billingAddr.address, billingAddr.pincode);

const cart = curOrder.cart;
let cartItems = "";
for(let i=0; i<cart.length; i++){
    cartItems+=(new CartItem(cart[i].item, cart[i].qty)).renderSimple();
}

document.getElementById("disp_orderId").innerHTML=curOrder.orderId;
document.getElementById("disp_time").innerHTML=timestampToDate(curOrder.timestamp);
document.getElementById("disp_items").innerHTML=cartItems;
document.getElementById("disp_totalPrice").innerHTML=curOrder.totalPrice;
document.getElementById("disp_paymentMethod").innerHTML=curOrder.paymentMethod;
document.getElementById("disp_transactionId").innerHTML=curOrder.transactionId;
document.getElementById("disp_shippingAddress").innerHTML= shippingAddress.renderSimple();
document.getElementById("disp_billingAddress").innerHTML=billingAddress.renderSimple();
console.log(curOrder);

function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" , "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

function printButtonAction(){
    window.print();
}

