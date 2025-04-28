if(!ifLoggedIn()){
    window.location="login.html?redirect="+encodeURIComponent("myaccount.html");
}
let currentLoggedInUser = getLoggedInUser();
const orders = getUser(currentLoggedInUser.email).orders;

console.log(orders)

str = `<table id="order_table"><thead><th>Order ID</th><th>Date, time</th><th>Price</th></thead><tbody>`;
for(let i=0; i<orders.length; i++){
    str+=`<tr><td><a target="_blank" href="orderDetails.html?orderId=${orders[i].orderId}">${orders[i].orderId}</a></td><td>${timestampToDate(orders[i].timestamp)}</td><td>${orders[i].totalPrice}</td></tr>`;
}
str+="</tbody></table>";

document.getElementById("order_history_disp").innerHTML = str;



function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" , "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}