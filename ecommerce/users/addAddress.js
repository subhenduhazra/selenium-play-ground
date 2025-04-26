//redirect if thirdPartyLoginClient is not set 
const urlParams = new URLSearchParams(window.location.search);
const cliendId = urlParams.get('client-id');
if(!cliendId){
    document.getElementsByTagName("body")[0].innerHTML="<h1>Something wrong, contact to admin/support</h1>"
}

function addThisAddress(){
    const name = document.getElementById("address_name").value;
    if(!name){
        alert("Name can't be empty!");
        return;
    }
    const phone = document.getElementById("address_phone").value;
    if(!phone){
        alert("Phone can't be empty!");
        return;
    }
    const pincode = document.getElementById("address_pincode").value;
    if(!pincode){
        alert("Pincode can't be empty!");
        return;
    }
    const address = document.getElementById("address_address").value;
    if(!address){
        alert("Address can't be empty!");
        return;
    }
    
    const msg = {name,  phone, pincode, address}
    window.opener.postMessage(msg,'*');
    window.close('','_parent','');
}