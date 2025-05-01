//check if logged in
if(!ifLoggedIn()){
    window.location = "casualLanding.html"
}


let ap = new ProductContainer(document.getElementById("productDisplayArea"),productList);
// ap.render();

let cart = new Cart(document.getElementById("checkout_cartDisplayArea"));

function addToCart(itemId){
    cart.addToCart(ap.getItemById(itemId),1);
    console.log("added");
}

function revomeFromCart(itemId){
    cart.removeFromCart(ap.getItemById(itemId),1);
    console.log("removed");
}

function checkOutBtnClick(){
    if(document.getElementById("totalCartValue").innerText.trim()=="0"){
        alert("cart is empty")
        return
    }
    window.location="selectAddress.html";
}
