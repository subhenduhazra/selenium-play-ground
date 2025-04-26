//check if logged in
if(!ifLoggedIn()){
    window.location = "casualLanding.html"
}
let currentLoggedInUser = getLoggedInUser();
const orders = getUser(currentLoggedInUser.email).orders;
console.log("cu",currentLoggedInUser);
console.log(orders)

let ap = new ProductContainer(document.getElementById("productDisplayArea"),productList);
// ap.render();

let cart = new Cart();

let tmpOrder = JSON.parse(localStorage.getItem("current_order_info"));
console.log(tmpOrder);

const shipAddrRender = new Address(tmpOrder.shippingAddress.id, tmpOrder.shippingAddress.name, tmpOrder.shippingAddress.phone, tmpOrder.shippingAddress.address, tmpOrder.shippingAddress.pincode)
const billAddrRender = new Address(tmpOrder.billingAddress.id, tmpOrder.billingAddress.name, tmpOrder.billingAddress.phone, tmpOrder.billingAddress.address, tmpOrder.billingAddress.pincode)

document.getElementById("shipping-address-display").innerHTML = shipAddrRender.renderSimple();
document.getElementById("billing-address-display").innerHTML = billAddrRender.renderSimple();

const payAmount = tmpOrder.totalPrice;
document.getElementById("pay-amount").innerHTML = payAmount;

function ppaymentPay(){
    document.getElementById("ppayment-button").disabled = true;
    window.open("../payment/PPayment.html?client-id=eCommerce&pay-amount="+payAmount,"_blank","height=700,width=550,top=50,left=50")
}

window.addEventListener("message",(e)=>{
    const paymentStatus = e?.data.paymentStatus;
    console.log(e.data)
    if(paymentStatus == "success"){
        tmpOrder.orderId = "ECORD"+Date.now();
        tmpOrder.timestamp = Date.now();
        tmpOrder.paymentMethod = e.data.paymentMethod;
        tmpOrder.transactionId = e.data.transactionId;

        //put order to user
        orders.push(tmpOrder);

        saveAllUsers(users)

        //clear tmporder
        localStorage.removeItem("current_order_info");

        //clearCart
        localStorage.removeItem("user_cart");

        //redirect to thank page
        window.location="../users/orderDetails.html?newlyCreated=yes&orderId="+tmpOrder.orderId;

    }else{
        document.getElementById("ppayment-button").disabled = false;
    }
})
