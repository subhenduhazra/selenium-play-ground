//redirect to dashboard if logged in
if(ifLoggedIn()){
    locateToDashboard();
}

const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
const currentUser = getUser(email);
if(!currentUser){
    window.location="message.html?heading=Error!&message="+encodeURIComponent("User Not Found");
}else{
    document.getElementById("user-email").value = email;
}

function logError(msg){
    alert("Failed to reset password! "+msg);
}
function resetPassword(){
    if(!validatePasswordEmpty()){
        logError("password is empty");
    }else if(!validatePasswordLength()){
        logError("password length should be 8 or more character");
    }else if(!validateConfirmPassword()){
        logError("password and confirm password not matched")
    }else{
        const password = document.getElementById("password").value.trim();
        let updatedUser = {...currentUser};
        updatedUser.password = password;
        updateUser(currentUser.email, updatedUser);
        window.location="message.html?heading=Success!&message="+encodeURIComponent("Password changed, <a id='login_link' href='login.html'>Log in</a>");
    }
}

function validatePasswordEmpty(){
    return document.getElementById("password").value.trim().length > 0;
}
function validatePasswordLength(){
    return document.getElementById("password").value.trim().length >=8
}
function validateConfirmPassword(){
    return document.getElementById("password").value.trim() === document.getElementById("confirm-password").value.trim();
}

