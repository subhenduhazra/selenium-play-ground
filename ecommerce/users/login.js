//redirect to dashboard if logged in
if(ifLoggedIn()){
    locateToDashboard();
}

//redirect path
const urlParams = new URLSearchParams(window.location.search);
const redirectUrl = urlParams.get('redirect');

function logError(msg){
    alert("Failed to login! "+msg);
}

function login(){
    if(!validateEmail()){
        logError("email is empty")
    }else if(!validatePasswordEmpty()){
        logError("password is empty");
    }else{
        const email = document.getElementById("user-email").value.trim();
        const password = document.getElementById("password").value.trim();

        const currentUser = getUser(email);
        if(currentUser){
            if(currentUser.email == email && currentUser.password == password){
                loginUser(currentUser);
                //redirect or move to dash
                if(redirectUrl){
                    window.location = redirectUrl;
                }else{
                    locateToDashboard();
                }
            } else{
                logError("Incorrect email or password.");
            }
        }else{
            logError("Incorrect email or password.");
        }
    }
}

function validateEmail(){
    return document.getElementById("user-email").value.trim().length > 0;
}
function validatePasswordEmpty(){
    return document.getElementById("password").value.trim().length > 0;
}

function thirdPartyLogin(){
    window.open("thirdPartyLogin.html","_blank","height=550,width=750,top=50,left=50");
}
