//redirect to dashboard if logged in
if(ifLoggedIn()){
    locateToDashboard();
}
function forgotPassword(){
    const email = document.getElementById("user-email").value.trim();
    if(!email){
        alert("Email filed is blank!");
        return;
    }
    const user = getUser(email);
    if(user && user.email){
        window.location = "resetPassword.html?email="+user.email;
    }else{
        alert("Email not found!")
    }
}