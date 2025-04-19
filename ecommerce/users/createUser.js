//redirect to dashboard if logged in
if(ifLoggedIn()){
    locateToDashboard();
}

function createUser(){
    validate();
}
function logError(msg){
    alert("Failed to create user! "+msg);
}
function validate(){
    if(!validateName()){
        logError("Name is empty");
    }else if(!validateEmail()){
        logError("email is empty")
    }else if(!validatePasswordEmpty()){
        logError("password is empty");
    }else if(!validatePasswordLength()){
        logError("password length should be 8 or more character");
    }else if(!validateConfirmPassword()){
        logError("password and confirm password not matched")
    }else if(!validate18Years()){
        logError("you are not 18 years old");
    }else if(!validateDOB()){
        logError("DOB is empty or invalid");
    }else if(!validateDOBwith18years()){
        logError("according to your DOB you are not 18");
    }else{
        const email = document.getElementById("user-email").value.trim();
        const password = document.getElementById("password").value.trim();
        const name = document.getElementById("name").value.trim();
        let gender = "Unknown";
        if(document.getElementById("gender-male").checked){
            gender="male"
        }
        if(document.getElementById("gender-female").checked){
            gender="female"
        }

        const dob = document.getElementById("user-dob").value;

        users.push({email, password, name, gender, dob});
        saveAllUsers(users);
        alert("User created successfully")
        window.location="message.html?heading=Success!&message="+encodeURIComponent("User Created!, <a id='login_link' href='login.html'>Log in</a>");

    }
}
function validateName(){
    return document.getElementById("name").value.trim().length > 0;
}
function validateEmail(){
    return document.getElementById("user-email").value.trim().length > 0;
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
function validate18Years(){
    return document.getElementById("adult-confirm").checked;
}
function validateDOB(){
    return document.getElementById("user-dob").value;
}
function validateDOBwith18years(){
   
    let record=document.getElementById('user-dob').value.trim();
    let dob = new Date(record);
    return is18(dob, new Date());
}

function is18(start, end) {
    if (end.getFullYear() - start.getFullYear() == 18) {
        if (end.getUTCMonth() == start.getUTCMonth()) {
        return end.getUTCDate() >= start.getUTCDate();
        }
        return end.getUTCMonth() > start.getUTCMonth();
    }
    return end.getFullYear() - 18 > start.getFullYear();
}