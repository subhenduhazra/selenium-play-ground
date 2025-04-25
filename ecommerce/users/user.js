const users = getAllUsers();
console.log(users);

function getUser(email){
    for(let i = 0; i<users.length; i++){
        if(users[i].email == email){
            return users[i];
        }
    }
}
function updateUser(email, user){
    for(let i = 0; i<users.length; i++){
        if(users[i].email == email){
            users[i] = user;
        }
    }
    saveAllUsers(users);
}

function loginUser(user){
    localStorage.setItem("logged_in_user",JSON.stringify(user));
}

function logOutUser(){
    localStorage.removeItem("logged_in_user");
    localStorage.removeItem("user_cart");
}

function getLoggedInUser(){
    return JSON.parse(localStorage.getItem("logged_in_user"));
}

function ifLoggedIn(){
    return getLoggedInUser() ? true : false;
}

function locateToDashboard(){
    window.location="myAccount.html";
}