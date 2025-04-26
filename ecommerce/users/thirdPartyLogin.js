//redirect if thirdPartyLoginClient is not set 
const urlParams = new URLSearchParams(window.location.search);
const cliendId = urlParams.get('client-id');
if(!cliendId){
    document.getElementsByTagName("body")[0].innerHTML="<h1>Something wrong, contact to admin/support</h1>"
}

function thirdParty_popup_Login(){
    const name = document.getElementById("thirdPartyLogin_name").value;
    if(!name){
        alert("Name can't be empty!");
        return;
    }

    const email = document.getElementById("thirdPartyLogin_email").value;
    if(!email){
        alert("Email can't be empty!");
        return;
    }

    let msg = {};
    if(email == "parna@tcs.com" || email == "pragati@tcs.com"){
        msg = {loginStatus:'fail'};
    }else{
        msg = {loginStatus:'success',name, email};
    }
    window.opener.postMessage(msg,'*');
    window.close('','_parent','');
}