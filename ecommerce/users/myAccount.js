if(!ifLoggedIn()){
    window.location="login.html?redirect="+encodeURIComponent("myaccount.html");
}
let currentLoggedInUser = getLoggedInUser();
const addressBook = getUser(currentLoggedInUser.email).address;
console.log(addressBook);
const adc = new AddressContainer(document.getElementById("address_cont"), addressBook);
adc.render();

function populateMyAccount(){
    document.getElementById("disp_name").innerText = currentLoggedInUser.name;
    document.getElementById("disp_email").innerText = currentLoggedInUser.email;
    document.getElementById("disp_gender").innerText = currentLoggedInUser.gender;
    document.getElementById("disp_dob").innerText = currentLoggedInUser.dob;

}
populateMyAccount();

function addAddress(){
    window.open("addAddress.html?client-id=eCommerce","_blank","height=550,width=750,top=50,left=50");
}

function removeAddress(id){
    adc.removeAddress(id);
    saveAllUsers(users)
}


window.addEventListener("message",(e)=>{
    console.log(e);
    const data = e?.data;
    addAddressData(data);
})

function addAddressData(data){
    adc.addAddress(data);
    saveAllUsers(users)
}

function logout(){
    logOutUser();
    console.log("logged out..");
    window.location="message.html?heading=Logged out!&message="+encodeURIComponent("You are logged out!, <a id='login_link' href='login.html'>Log in</a>");

}