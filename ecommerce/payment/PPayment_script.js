//redirect if thirdPartyLoginClient is not set 
const urlParams = new URLSearchParams(window.location.search);
const cliendId = urlParams.get('client-id');
const payAmount = urlParams.get('pay-amount');
if(!cliendId){
    document.getElementsByTagName("body")[0].innerHTML="<h1>Something wrong, contact to admin/support</h1>"
}

if(!payAmount){
    document.getElementsByTagName("body")[0].innerHTML="<h1>Something wrong, contact to admin/support</h1>"
    msg = {paymentStatus:"failed"}
    window.opener.postMessage(msg,'*')
    setTimeout(()=>{
        window.close('','_parent','');
    },2000);
}

document.getElementById("pay-button").innerHTML="Pay amount "+payAmount.trim();

const form = document.getElementById('payment-form');
const message = document.getElementById('message');
const tabButtons = document.querySelectorAll('.tab-button');
const formHeading = document.getElementById('form-heading');
const cardNumberInput = document.getElementById('card-number');
const expiryInput = document.getElementById('expiry');

let paymentMethod = "Credit Card";

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        if (this.dataset.target === 'credit') {
            formHeading.textContent = 'Credit Card Payment';
            paymentMethod = "Credit Card"
        } else {
            formHeading.textContent = 'Debit Card Payment';
            paymentMethod = "Debit Card"
        }

        form.reset();
        message.textContent = '';

        form.classList.remove('fade');
        void form.offsetWidth;
        form.classList.add('fade');
    });
});

form.classList.add('fade');

// Auto-format Card Number
cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '').substring(0, 16); // Remove non-digits, limit to 16
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formattedValue;
});

// Auto-format Expiry
expiryInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '').substring(0, 4); // Remove non-digits, limit to 4
    if (value.length >= 3) {
        e.target.value = value.substring(0,2) + '/' + value.substring(2);
    } else {
        e.target.value = value;
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('card-name').value.trim();
    const number = cardNumberInput.value.replace(/\s+/g, '');
    const expiry = expiryInput.value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    
    if (name === '' || number.length < 13 || expiry.length !== 5 || cvv.length < 3) {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields correctly!';
        return;
    }
    
    if (!/^\d+$/.test(number)) {
        message.style.color = 'red';
        message.textContent = 'Invalid card number!';
        return;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        message.style.color = 'red';
        message.textContent = 'Invalid expiry date!';
        return;
    }
    
    if (!/^\d{3,4}$/.test(cvv)) {
        message.style.color = 'red';
        message.textContent = 'Invalid CVV!';
        return;
    }
    document.getElementById("pay-button").innerHTML="Processing payment ...";
    document.getElementById("pay-button").disabled = true;
    setTimeout(()=>{
        
        if(number == "4000000000000000" && expiry == "01/30" && cvv == "123"){
            console.log("success");
            message.style.color = 'green';
            message.textContent = `Payment Successful via ${formHeading.textContent.split(' ')[0]} Card!`;
            document.getElementById("pay-button").innerHTML="Done :)";
            document.getElementById("pay-button").style.backgroundColor = "green";

            const msg = {paymentStatus:"success", transactionId:"PPTRN"+Date.now(), paymentMethod}
            window.opener.postMessage(msg,'*');

        }else{
            message.style.color = 'red';
            message.textContent = `Payment Failed!`;
            document.getElementById("pay-button").innerHTML="Failed :(";
            document.getElementById("pay-button").style.backgroundColor = "red";
            const msg = {paymentStatus:"failed"};
            window.opener.postMessage(msg,'*');
            console.log("failed")
        }

        setTimeout(()=>{
            window.close('','_parent','');
        },1500);
        
    },5000)

    
});
