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
                loginAndRedirect(currentUser, redirectUrl); //call
            } else{
                logError("Incorrect email or password.");
            }
        }else{
            logError("Incorrect email or password.");
        }
    }
}

function loginAndRedirect(currentUser, redirectUrl){
    loginUser(currentUser);
    //redirect or move to dash
    if(redirectUrl){
        window.location = redirectUrl;
    }else{
        locateToDashboard();
    }
}

function validateEmail(){
    return document.getElementById("user-email").value.trim().length > 0;
}
function validatePasswordEmpty(){
    return document.getElementById("password").value.trim().length > 0;
}

function thirdPartyLogin(){
    window.open("thirdPartyLogin.html?client-id=eCommerce","_blank","height=550,width=750,top=50,left=50");
}

///event from thirparty popup
window.addEventListener("message",(e)=>{
    console.log(e);
    const data = e?.data;
    handleThirdPartylogin(data);
})

function handleThirdPartylogin(data){
    if(!data || data.loginStatus == "fail" || !data.email || data.email.trim().length == 0 ){
        logError("Third party login failed")
        return;
    }
    const thpEmail = data.email;
    const userWithThp = getUser(thpEmail);
    if(userWithThp && userWithThp.email == thpEmail){
        loginAndRedirect(userWithThp, redirectUrl);
    }else{
        users.push({email:thpEmail, name:data.name});
        saveAllUsers(users);
    }
}
