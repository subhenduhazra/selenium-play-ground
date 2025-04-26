class Product{
    constructor(id,title, description, image, price){
        this.id=id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
    }

    render(){
        return `
            <div class="product_item" data-product-id="${this.id}" id=item-${this.id}>
                <div class="product_image" data-product-id="${this.id}" style="background-image:url('./rsc/${this.image}')"></div>
                <div class="product_rest" data-product-id="${this.id}">
                    <div class="product_title" data-product-id="${this.id}">${this.title}</div>
                    <div class="product_description" data-product-id="${this.id}">${this.description}</div>
                    <div class="product_price" data-product-id="${this.id}">Price: <b>${this.price}</b></div>
                    <div class="product_cliclables" data-product-id="${this.id}">
                        <button class="addToCartButton" data-price='${this.price}' onClick='addToCart(${this.id})'>Add To Card</button>
                    </div>
                </div>
            </div>

        `;
    }
}



class ProductContainer{
    constructor(dispayArea, arr){
        this.dispayArea = dispayArea;
        this.arr = arr || [];
    }

    render(){
        let str = "";
        for(let i=0; i<this.arr.length; i++){
            str+=new Product(this.arr[i].id,this.arr[i].title, this.arr[i].description, this.arr[i].image, this.arr[i].price).render();
        }
        this.dispayArea.innerHTML=str;
    }
    getItemById(id){
        return this.arr.filter(item=>item.id == id)[0];
    }


}

let productList = [
    {
      "id": "1",
      "title": "Pentonic 0.7mm Ball Point Pen",
      "image": "pen.webp",
      "description": "Pentonic Ball Pen Tumbler Pack. Ink Color: Blue, Body Color : Black, Tip Size: 0.7 mm, Click-Off Mechanism, 50 Pieces Pens.",
      "price": "275",
      "specification": {
        "productTitle": "Pentonic 0.7mm Ball Point Pen",
        "weight": "207 grams",
        "color": "Red",
        "material": "Synthetic",
        "warranty": "2 year(s)",
        "Dimensions": "30x8x8 cm",
        "modelNumber": "MOD-1759",
        "batteryIncluded": "Yes",
        "countryOfOrigin": "Germany"
      }
    },
    {
      "id": "2",
      "title": "Lavie Sport Sprinter Daypack Unisex Casual Bag",
      "image": "bag.webp",
      "description": "This 1.5C Sprinter Daypack features one spacious compartment and one small front pocket for easy acccess",
      "price": "1974",
      "specification": {
        "productTitle": "Lavie Sport Sprinter Daypack Unisex Casual Bag",
        "weight": "2252 grams",
        "color": "Black",
        "material": "Synthetic",
        "warranty": "2 year(s)",
        "Dimensions": "19x22x8 cm",
        "modelNumber": "MOD-8041",
        "batteryIncluded": "No",
        "countryOfOrigin": "USA"
      }
    },
    {
      "id": "3",
      "title": "Nikon Store COOLPIX P950 Digital Camera",
      "image": "coolpix.jpeg",
      "description": "COOLPIX P950 offers 16. 0 Megapixels of resolution;COOLPIX P950 features an 83X optical zoom/166X Dynamic Fine Zoom",
      "price": "15467",
      "specification": {
        "productTitle": "Nikon Store COOLPIX P950 Digital Camera",
        "weight": "124 grams",
        "color": "White",
        "material": "Synthetic",
        "warranty": "1 year(s)",
        "Dimensions": "20x29x10 cm",
        "modelNumber": "MOD-9298",
        "batteryIncluded": "Yes",
        "countryOfOrigin": "China"
      }
    },
    {
      "id": "4",
      "title": "W830 Compact Camera with 8x Optical Zoom",
      "image": "cybershot.png",
      "description": "Effortlessly capture the beauty in every scene with W830 Cyber-shot\u2122. A high-resolution 20.1 MP image sensor works with built-in autofocus to ensure sharp",
      "price": "13467",
      "specification": {
        "productTitle": "W830 Compact Camera with 8x Optical Zoom",
        "weight": "2849 grams",
        "color": "Silver",
        "material": "Aluminium",
        "warranty": "2 year(s)",
        "Dimensions": "25x10x6 cm",
        "modelNumber": "MOD-1214",
        "batteryIncluded": "No",
        "countryOfOrigin": "China"
      }
    },
    {
      "id": "5",
      "title": "Apple iPad (10th Generation): with A14 Bionic chip",
      "image": "ipad.jpg",
      "description": "Colourfully reimagined and more versatile than ever, iPad is great for the things you do every day.",
      "price": "41253",
      "specification": {
        "productTitle": "Apple iPad (10th Generation): with A14 Bionic chip",
        "weight": "2428 grams",
        "color": "Black",
        "material": "Plastic",
        "warranty": "3 year(s)",
        "dimensions": "26x10x6 cm",
        "modelNumber": "MOD-6024",
        "batteryIncluded": "No",
        "countryOfOrigin": "Germany"
      }
    },
    {
      "id": "6",
      "title": "iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip",
      "image": "iphone.jpg",
      "description": "BUILT FOR APPLE INTELLIGENCE \u2014 Personal, private, powerful. Write, express yourself and get things done effortlessly.",
      "price": "65473",
      "specification": {
        "productTitle": "iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip",
        "weight": "1219 grams",
        "color": "Black",
        "material": "Aluminium",
        "warranty": "1 year(s)",
        "Dimensions": "28x29x3 cm",
        "modelNumber": "MOD-5782",
        "batteryIncluded": "No",
        "countryOfOrigin": "China"
      }
    },
    {
      "id": "7",
      "title": "Nikon Coolpix L830 point and shot camera with 34x optical zoom",
      "image": "L830.jpg",
      "description": "The Nikon Coolpix L830 is a point-and-shoot camera with a 16-megapixel BSI CMOS sensor, a 34x optical zoom lens, and the ability to record Full HD 1080p video.",
      "price": "12905",
      "specification": {
        "productTitle": "Nikon Coolpix L830 point and shot camera with 34x optical zoom",
        "weight": "1431 grams",
        "color": "Black",
        "material": "Plastic",
        "warranty": "1 year(s)",
        "Dimensions": "12x9x2 cm",
        "modelNumber": "MOD-3627",
        "batteryIncluded": "Yes",
        "countryOfOrigin": "Vietnam"
      }
    },
    {
      "id": "8",
      "title": "Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display",
      "image": "macbook.jpeg",
      "description": "STRIKINGLY THIN DESIGN \u2013 The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It\u2019s the ultra-capable laptop that lets you work, play or create just about anything \u2014 anywhere.",
      "price": "83451",
      "specification": {
        "productTitle": "Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display",
        "weight": "2283 grams",
        "color": "Red",
        "material": "Aluminium",
        "warranty": "3 year(s)",
        "Dimensions": "18x14x4 cm",
        "modelNumber": "MOD-7293",
        "batteryIncluded": "No",
        "countryOfOrigin": "USA"
      }
    },
    {
      "id": "9",
      "title": "Prestige 750 Watts Iris Plus Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)",
      "image": "mixer.webp",
      "description": "CAPACITY of JARS: Wet Grinding Jar: 1.5L, Dry Grinding Jar: 1L, Juicer Jar: 1.5L and Chutney Jar: 300ml, grinds tough ingredients with ease.",
      "price": "3562",
      "specification": {
        "productTitle": "Prestige 750 Watts Iris Plus Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)",
        "weight": "1154 grams",
        "color": "Red",
        "material": "Metal",
        "warranty": "2 year(s)",
        "Dimensions": "27x17x4 cm",
        "modelNumber": "MOD-2641",
        "batteryIncluded": "No",
        "countryOfOrigin": "Vietnam"
      }
    },
    {
      "id": "10",
      "title": "SanDisk Cruzer Blade 128GB, USB 2.0, Flash Drive, Pendrive",
      "image": "penDrive.jpeg",
      "description": "Compact design for maximum portability",
      "price": "666",
      "specification": {
        "productTitle": "SanDisk Cruzer Blade 128GB, USB 2.0, Flash Drive, Pendrive",
        "weight": "1237 grams",
        "color": "White",
        "material": "Metal",
        "warranty": "3 year(s)",
        "Dimensions": "28x29x9 cm",
        "modelNumber": "MOD-3528",
        "batteryIncluded": "Yes",
        "countryOfOrigin": "Vietnam"
      }
    },
    {
      "id": "11",
      "title": "MSI GeForce RTX 3050 Ventus 2X 8G OC 8GB GDDR6 128-bit Gaming pci_e Graphic Card",
      "image": "rtx2080.png",
      "description": "GeForce RTX 3050 VENTUS 2X 8G OC, 2560 CUDA cores, 12GB GDDR6X , 128-bit Memory Bus, 1807 MHz Boost GPU Boost Clock",
      "price": "21923",
      "specification": {
        "productTitle": "MSI GeForce RTX 3050 Ventus 2X 8G OC 8GB GDDR6 128-bit Gaming pci_e Graphic Card",
        "weight": "1176 grams",
        "color": "Blue",
        "material": "Aluminium",
        "warranty": "1 year(s)",
        "Dimensions": "20x6x6 cm",
        "modelNumber": "MOD-6234",
        "batteryIncluded": "No",
        "countryOfOrigin": "China"
      }
    },
    {
      "id": "12",
      "title": "Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
      "image": "samsung_l24U.jpg",
      "description": "Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8\") flat display. It's an absolute marvel of design.",
      "price": "91325",
      "specification": {
        "productTitle": "Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
        "weight": "1230 grams",
        "color": "White",
        "material": "Metal",
        "warranty": "2 year(s)",
        "Dimensions": "26x13x7 cm",
        "modelNumber": "MOD-4300",
        "batteryIncluded": "No",
        "countryOfOrigin": "China"
      }
    },
    {
      "id": "13",
      "title": "Samsung T7 1TB, Portable SSD, up to 1050MB/s, USB 3.2 Gen2",
      "image": "ssd.png",
      "description": "Interface: USB 3.2 Gen 2 (Up to 10Gbps). Backwards compatible. The host device and connection cable must support USB 3.2 Gen 2 to reach the maximum speed.",
      "price": "9789",
      "specification": {
        "productTitle": "Samsung T7 1TB, Portable SSD, up to 1050MB/s, USB 3.2 Gen2",
        "weight": "2047 grams",
        "color": "Silver",
        "material": "Aluminium",
        "warranty": "2 year(s)",
        "Dimensions": "10x15x8 cm",
        "modelNumber": "MOD-5087",
        "batteryIncluded": "No",
        "countryOfOrigin": "India"
      }
    },
    {
      "id": "14",
      "title": "Lenovo ThinkPad E14 AMD Ryzen 7 7730U 14",
      "image": "thinkpad.jpg",
      "description": "Processor: AMD Ryzen 7 7730U processor | 8 Cores | 16 Threads | Speed Upto 4.5 Ghz | 16 MB L3 Cache | Memory: 16GB DDR4-3200 MHz, dual-channel capable upgradable upto 40GB | Storage: 512GB SSD M.2",
      "price": "67599",
      "specification": {
        "productTitle": "Lenovo ThinkPad E14 AMD Ryzen 7 7730U 14",
        "weight": "840 grams",
        "color": "Black",
        "material": "Metal",
        "warranty": "1 year(s)",
        "Dimensions": "24x5x3 cm",
        "modelNumber": "MOD-7120",
        "batteryIncluded": "Yes",
        "countryOfOrigin": "Germany"
      }
    },
    {
      "id": "15",
      "title": "ASUS Zenbook 14, Intel Core Ultra 7, 16GB RAM, 1TB SSD",
      "image": "zenbook.webp",
      "description": "Display : 14\" inch 3K (2880 x 1800) OLED 16:10 aspect ratio 120Hz, 500nits HDR peak brightness, Glossy display, Keyboard : Backlit Chiclet Keyboard",
      "price": "87599",
      "specification": {
        "productTitle": "ASUS Zenbook 14, Intel Core Ultra 7, 16GB RAM, 1TB SSD",
        "weight": "1378 grams",
        "color": "Red",
        "material": "Plastic",
        "warranty": "2 year(s)",
        "Dimensions": "28x14x6 cm",
        "modelNumber": "MOD-5718",
        "batteryIncluded": "Yes",
        "countryOfOrigin": "Vietnam"
      }
    }
  ];