//check if logged in
if(!ifLoggedIn()){
    window.location = "casualLanding.html"
}

let currentLoggedInUser = getLoggedInUser();
const addressBook = getUser(currentLoggedInUser.email).address;

let ap = new ProductContainer(document.getElementById("productDisplayArea"),productList);
// ap.render();

//let cart = new Cart(document.getElementById("checkout_cartDisplayArea"));

function addToCart(itemId){
    cart.addToCart(ap.getItemById(itemId),1);
    console.log("added");
}

function revomeFromCart(itemId){
    cart.removeFromCart(ap.getItemById(itemId),1);
    console.log("removed");
}

const cart = new Cart();

const adc_shipping = new AddressContainer(document.getElementById("shippingAddress_dispArea"), addressBook,  "shippingAddress");
adc_shipping.renderSelectableAddress();

const adc_billing = new AddressContainer(document.getElementById("billingAddress_dispArea"), addressBook,  "billingAddress");
adc_billing.renderSelectableAddress();

function makePaymentBtnClick(){
    const shippingAddressId = getShippingAddress();
    if(shippingAddressId == undefined){
        alert("Please select Shipping Address");
        return;
    }
    const shippingAddress = addressBook.filter(add => add.id == shippingAddressId)[0];
    // console.log(shippingAddress);

    const billingAddressId = getBillingAddress();
    if(billingAddressId == undefined){
        alert("Please select Billing Address");
        return;
    }
    const billingAddress = addressBook.filter(add => add.id == billingAddressId)[0];
    // console.log(billingAddress)
    //remove any previous temp_order
    localStorage.removeItem("current_order_info");
    const current_order_info = {
        shippingAddress,
        billingAddress,
        cart:cart.arr,
        totalPrice:cart.calculateAndDisplayTotal(),
        orderId:"NA",
        timestamp:"NA",
        paymentMethod:"NA",
        transactionId:"NA"
    }
    localStorage.setItem("current_order_info",JSON.stringify(current_order_info));
    window.location = "paymentPage.html";
}
function getShippingAddress(){
    const shippingAddresses = document.querySelectorAll(".addrss_select_radio[name=shippingAddress]");
    for(let i=0; i<shippingAddresses.length; i++){
        if(shippingAddresses[i].checked){
            console.log(shippingAddresses[i].value);
            return shippingAddresses[i].value;
        }
    }

    return undefined;
}

function getBillingAddress(){
    const billingAddresses = document.querySelectorAll(".addrss_select_radio[name=billingAddress]");
    for(let i=0; i<billingAddresses.length; i++){
        if(billingAddresses[i].checked){
            console.log(billingAddresses[i].value);
            return billingAddresses[i].value;
        }
    }

    return undefined;
}
