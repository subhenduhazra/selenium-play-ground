//check if logged in
if(!ifLoggedIn()){
    window.location = "casualLanding.html"
}


let ap = new ProductContainer(document.getElementById("productDisplayArea"),productList);
ap.render();

let cart = new Cart(document.getElementById("cartDisplayArea"));


function addToCart(itemId){
    cart.addToCart(ap.getItemById(itemId),1);
    console.log("added");
}

function revomeFromCart(itemId){
    cart.removeFromCart(ap.getItemById(itemId),1);
    console.log("removed");
}

function searchItem(){
    let searchBox = document.getElementById("searchItemBox");
    if(searchBox.value.trim().size == 0){
        ap.arr = productList;
    }else{
        ap.arr = productList.filter(item=> item.title.toLowerCase().includes(searchBox.value.trim().toLowerCase()));
    }
    ap.render();
    ap.arr = productList;
}

document.querySelectorAll(".product_item").forEach(elm => elm.addEventListener("click", (e)=>{
    if(e.target.tagName.toLowerCase() != "button"){
        const productId = e.target.getAttribute("data-product-id");
        window.open("productDetails.html?productId="+encodeURIComponent(productId),"_blank");
    }
}));

function checkOutBtnClick(){
    window.location="checkout.html";
}