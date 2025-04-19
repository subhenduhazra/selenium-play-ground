if(!ifLoggedIn()){
    window.location="login.html?redirect="+encodeURIComponent("myaccount.html");
}

function populateMyAccount(){
    let currentLoggedInUser = getLoggedInUser();
    document.getElementById("disp_name").innerText = currentLoggedInUser.name;
    document.getElementById("disp_email").innerText = currentLoggedInUser.email;
    document.getElementById("disp_gender").innerText = currentLoggedInUser.gender;
    document.getElementById("disp_dob").innerText = currentLoggedInUser.dob;

}
populateMyAccount();

function logout(){
    logOutUser();
    console.log("logged out..");
    window.location="message.html?heading=Logged out!&message="+encodeURIComponent("You are logged out!, <a id='login_link' href='login.html'>Log in</a>");

}