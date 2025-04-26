//check if logged in
if(!ifLoggedIn()){
    window.location = "casualLanding.html"
}
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
if(!productId){
    document.getElementsByTagName("body")[0].innerHTML="<h1>What are you looking for?</h1><h3>Page Not found.</h3>"
}

let ap = new ProductContainer(document.getElementById("productDisplayArea"),productList);
// ap.render();

let cart = new Cart(document.getElementById("cartDisplayArea"));


function addToCart(itemId){
    cart.addToCart(ap.getItemById(itemId),1);
    console.log("added");
}

function revomeFromCart(itemId){
    cart.removeFromCart(ap.getItemById(itemId),1);
    console.log("removed");
}

function checkOutBtnClick(){
    window.location="checkout.html";
}

function renderProductDetails(productId){
    const product = ap.getItemById(productId);
    //setting title
    document.getElementById("details_header").innerHTML = product.title;

    //setting image
    document.getElementById("details_image").style="background-image:url('./rsc/"+product.image+"')";

    //price
    document.getElementById("detaild_price").innerHTML = product.price;

    //desc
    document.getElementById("details_description").innerHTML = product.description;

    //specs
    str=`
        <div class="lineItems"><div>Product Title:</div><div id="spec_pTitle">${product.specification.productTitle}</div></div>
        <div class="lineItems"><div>Weight:</div><div id="spec_weight">${product.specification.weight}</div></div>
        <div class="lineItems"><div>Colour:</div><div id="spec_color">${product.specification.color}</div></div>
        <div class="lineItems"><div>Material:</div><div id="spec_material">${product.specification.material}</div></div>
        <div class="lineItems"><div>Warranty:</div><div id="spec_warranty">${product.specification.warranty}</div></div>
        <div class="lineItems"><div>Dimensions:</div><div id="spec_dimensions">${product.specification.dimensions}</div></div>
        <div class="lineItems"><div>Model Number:</div><div id="spec_modelNumber">${product.specification.modelNumber}</div></div>
        <div class="lineItems"><div>Battery Included:</div><div id="spec_batteryIncluded">${product.specification.batteryIncluded}</div></div>
        <div class="lineItems"><div>Country Of Origin:</div><div id="spec_countryOfOrigin">${product.specification.countryOfOrigin}</div></div>
    `;
    document.getElementById("details_spec").innerHTML=str;
}
renderProductDetails(productId);

function details_addToCart(){
    addToCart(productId);
}