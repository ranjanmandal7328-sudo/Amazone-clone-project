const productContainer =
document.getElementById("product-container");

const urlParams =
new URLSearchParams(window.location.search);

const productType =
urlParams.get("product");

const allProducts = {

    clothing: {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
        name: "Men T-Shirt",
        price: "₹499",
        rating: "⭐⭐⭐⭐☆ (4.2)",
        desc: "XYXX Men's Nova 100% Combed Cotton Regular Fit Polo Shirt"
    },

    watches: {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
        name: "Smart Watch",
        price: "₹1999",
        rating: "⭐⭐⭐⭐☆ (4.5)",
        desc: "Premium Smart Watch with Fitness Tracking"
    },

    raisins: {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg",
        name: "Premium Raisins",
        price: "₹199",
        rating: "⭐⭐⭐⭐☆ (4.4)",
        desc: "Natural Sun-Dried Premium Raisins Rich in Fiber & Energy"
    },
    bags: {
         img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
         name: "Stylish Backpack", 
         price: "₹899", 
         rating: "⭐⭐⭐⭐☆ (4.3)", 
         desc: "Durable and lightweight backpack for daily use" 
    },
    sofaCumBeds: { 
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", 
        name: "Sofa Cum Bed", 
        price: "₹7999", 
        rating: "⭐⭐⭐⭐☆ (4.6)", 
        desc: "Comfortable multi-purpose sofa that converts into a bed"
     },
     officeChairs: { 
        img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8", 
        name: "Office Chair", 
        price: "₹3499", 
        rating: "⭐⭐⭐⭐☆ (4.5)",
        desc: "Ergonomic office chair with comfortable back support for long work hours"
    },
    beanBags: { 
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg",
        name: "Comfort Bean Bag", 
        price: "₹1499", 
        rating: "⭐⭐⭐⭐☆ (4.4)", 
        desc: "Soft and comfortable bean bag perfect for relaxing, gaming, and lounging"
    },
    washingMachines: {
        img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
        name: "Automatic Washing Machine", 
        price: "₹15999", rating: "⭐⭐⭐⭐☆ (4.6)", 
        desc: "Fully automatic washing machine with multiple wash programs and energy saving mode"
    },
    bedsheets: { 
        img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2", 
        name: "Cotton Bedsheet Set", 
        price: "₹799", 
        rating: "⭐⭐⭐⭐☆ (4.4)", 
        desc: "Soft and breathable cotton bedsheet with pillow covers for comfortable sleep"
    },
    furniture: { 
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", 
        name: "Modern Sofa Set", 
        price: "₹14999", 
        rating: "⭐⭐⭐⭐☆ (4.6)", 
        desc: "Comfortable and stylish sofa set for living room"
    },
    figurines: { 
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg", 
        name: "Decorative Figurine & Vase Set", 
        price: "₹1299", 
        rating: "⭐⭐⭐⭐☆ (4.5)", 
        desc: "Elegant home décor figurine with stylish ceramic vase for living room decoration"
    },
    fashion: { 
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg", 
        name: "Men's Casual Outfit", 
        price: "₹999", 
        rating: "⭐⭐⭐⭐☆ (4.4)", 
        desc: "Trendy and comfortable casual wear for daily use and outings"
    }
};

function renderProduct(product){

    productContainer.innerHTML = `

        <div class="product-card">

            <img src="${product.img}">

            <h2>${product.name}</h2>

            <p>${product.rating}</p>

            <h3>${product.price}</h3>

            <p>${product.desc}</p>

            <button id="addCartBtn">
                Add To Cart
            </button>

        </div>
    `;

   document.getElementById("addCartBtn")
.addEventListener("click",()=>{

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: product.name,
        price: product.price,
        image: product.img
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    window.location.href="cart.html";

});
}

if(productType && allProducts[productType]){
    renderProduct(allProducts[productType]);
}
else{
    productContainer.innerHTML =
    "<h2>Product Not Found</h2>";
}