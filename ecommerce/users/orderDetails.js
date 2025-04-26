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


console.log(curOrder);
