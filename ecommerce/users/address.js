class Address{
    constructor(id, name, phone, address, pincode, groupName){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.pincode = pincode;
        this.selectableGroupName = groupName || "Default_Group";
    }
    render(){
        return `
            <div class="address" id="${this.id}">
                <div><span class="address_field">Name:</span><span>${this.name}</span></div>
                <div><span class="address_field">Phone:</span><span>${this.phone}</span></div>
                <div>
                    <div class="address_field">Address:</div>
                    <div>${this.address}</div>
                    <div><span class="address_field">Pincode:</span><span>${this.pincode}</span></div>
                </div>
                <div class="remove_addressBtn_cont"><button onclick="removeAddress(${this.id})" class="removeAddressBtn">Remove</button></div>
            </div>
        `;
    }
    renderSimple(){
        return `
            <div class="address">
                <div><span class="address_field">Name:</span><span>${this.name}</span></div>
                <div><span class="address_field">Phone:</span><span>${this.phone}</span></div>
                <div>
                    <div class="address_field">Address:</div>
                    <div>${this.address}</div>
                    <div><span class="address_field">Pincode:</span><span>${this.pincode}</span></div>
                </div>
            </div>
        `;
    }
    renderSelectableAddress(){
        return `
            <div class="selectable_address" id="${this.id}">
                <div>
                    <input type="radio" class="addrss_select_radio" name="${this.selectableGroupName}" value="${this.id}">
                </div>
                <div>
                    <div><span class="address_field">Name:</span><span>${this.name}</span></div>
                    <div><span class="address_field">Phone:</span><span>${this.phone}</span></div>
                    <div>
                        <div class="address_field">Address:</div>
                        <div>${this.address}</div>
                        <div><span class="address_field">Pincode:</span><span>${this.pincode}</span></div>
                    </div>
                </div>
                
            </div>
        `;
    }
}

class AddressContainer{
    constructor(displayArea, arr, groupName){
        this.displayArea = displayArea;
        this.arr = arr || [];
        this.selectableGroupName = groupName || "Default_Group";
    }
    render(){
        
        let str = "";
        if(this.arr.length == 0){
            str = "<div class='noAddessDiv'>No Address Found</div>"
        }else{
            for(let i=0; i<this.arr.length; i++){
                str+=new Address(this.arr[i].id,this.arr[i].name, this.arr[i].phone, this.arr[i].address, this.arr[i].pincode).render();
            }
        }
        
        this.displayArea.innerHTML=str;
    }
    renderSelectableAddress(){
        let str = "";
        if(this.arr.length == 0){
            str = "<div class='noAddessDiv'>No Address Found</div>"
        }else{
            for(let i=0; i<this.arr.length; i++){
                str+=new Address(this.arr[i].id,this.arr[i].name, this.arr[i].phone, this.arr[i].address, this.arr[i].pincode, this.selectableGroupName).renderSelectableAddress();
            }
        }
        
        this.displayArea.innerHTML=str;
    }
    getAddressById(id){
        return this.arr.filter(item=>item.id == id)[0];
    }
    addAddress(address){
        let id=0;
        if(this.arr.length>0){
            id = this.arr[this.arr.length - 1].id + 1;
        }
        this.arr.push(new Address(id,address.name, address.phone, address.address, address.pincode));
        this.render();
    }
    removeAddress(id){
        for(let i=0; i<this.arr.length; i++){
            if(id == this.arr[i].id){
                this.arr.splice(i,1);
            }
        }
        this.render();
    }
    
}
