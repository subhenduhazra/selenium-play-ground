const globalUsers = [
    {
        email:"ruchi@gmail.com",
        password:"Ruchi123",
        name:"Ruchismita Das",
        gender:"female",
        dob:"1996-11-16",
        address:[],
        orders:[]
    }
]
function saveAllUsers(users){
 localStorage.setItem("global_users",JSON.stringify(users));  
 console.log("saved..") 
}
function getAllUsers(){
    return JSON.parse(localStorage.getItem("global_users"));
}

function loadAllUsers(){
    if(!localStorage.getItem("global_users")){
        localStorage.setItem("global_users",JSON.stringify(globalUsers));  
    }
}

function clearStorage(){
    localStorage.removeItem("global_users");
}

loadAllUsers();