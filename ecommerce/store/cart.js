class CartItem{
    constructor(item, qty){
        this.item = item;
        this.qty = qty;
    }
    render(){
        return `
            <div class="cartItem">
                <div class="cartNotInteractable">
                    <div class="cartItemTitle">${this.item.title}</div>
                    <div class="cartItemPrice">Price/qty: ${this.item.price}</div>
                </div>
                <div class="cartInteractable">
                    <button class="removeButton" onClick="revomeFromCart(${this.item.id})">-</button>
                    <div class="qtyDisplay">${this.qty}</div>
                    <button class="addButton" onClick="addToCart(${this.item.id})">+</button>
                </div>
            </div>
        `;
    }
}

class Cart{
    constructor(displayArea){
        this.arr = [];
        this.displayArea =  displayArea;
        const cartItems = localStorage.getItem("user_cart");
        // console.log(cartItems);
        if(cartItems){
            const cartArr = JSON.parse(cartItems);
            for(let i = 0; i<cartArr.length; i++){
                this.addToCart(cartArr[i].item, cartArr[i].qty);
            }
            this.renderCart();
        }
        // console.log(this.arr)
    }
    addToCart(item, qty){
        let found = false;
        for(let i=0; i<this.arr.length; i++){
            if(item.id == this.arr[i].item.id){
                found = true;
                this.arr[i].qty += qty;
            }
        }

        if(!found){
            this.arr.push(new CartItem(item,qty));
        }
        this.renderCart();
    }

    removeFromCart(item, qty){
        let found = false;
        for(let i=0; i<this.arr.length; i++){
            if(item.id == this.arr[i].item.id){
                found = true;
                this.arr[i].qty -= qty;
                if(this.arr[i].qty === 0){
                    this.arr.splice(i,1);
                }
            }
        }
        this.renderCart();
    }

    renderCart(){
        if(!this.displayArea){
            console.log("No where to render ... ");
            return;
        }
        let str="";
        for(let i=0; i<this.arr.length; i++){
            str+=this.arr[i].render();
        }
        this.displayArea.innerHTML = str;
        this.save();
        this.calculateAndDisplayTotal();
    }
    calculateAndDisplayTotal(){
        let total=0;
        for(let i=0; i<this.arr.length; i++){
            total+=this.arr[i].item.price * this.arr[i].qty;
        }
        if(document.getElementById("totalCartValue"))
            document.getElementById("totalCartValue").innerText=total;
        return total;
    }

    save(){
        localStorage.setItem("user_cart",JSON.stringify(this.arr));
    }
}