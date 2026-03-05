// Product Database
const productsDatabase = [
{
id:1,
name:"Apple iPhone 14 Pro (256 GB) - Deep Purple",
category:"Smartphones",
price:129999,
originalPrice:139999,
discountPercent:7,
rating:4.7,
ratingCount:12453,
reviewsCount:2891,
images:[
"https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1695048133024-6b6c7084d4d1?auto=format&fit=crop&w=800&q=80"
],
description:"Premium Apple smartphone with A16 Bionic chip."
},

{
id:2,
name:"Samsung 55-inch 4K Ultra HD Smart LED TV",
category:"Televisions",
price:54999,
originalPrice:69999,
discountPercent:21,
rating:4.5,
ratingCount:8234,
reviewsCount:1542,
images:[
"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80"
],
description:"Experience stunning 4K entertainment with Samsung Smart TV."
},

{
id:3,
name:"Nike Air Max 270 React Running Shoes",
category:"Footwear",
price:5499,
originalPrice:7999,
discountPercent:31,
rating:4.4,
ratingCount:3567,
reviewsCount:892,
images:[
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
],
description:"Comfortable running shoes with Nike React foam cushioning."
},

{
id:4,
name:"Milton Thermosteel Flip Lid Bottle, 1 Litre",
category:"Kitchenware",
price:799,
originalPrice:1199,
discountPercent:33,
rating:4.3,
ratingCount:5678,
reviewsCount:1243,
images:[
"https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80"
],
description:"Stainless steel insulated bottle for hot and cold beverages."
},

{
id:5,
name:"Bajaj 1200W Toaster Grill",
category:"Appliances",
price:1999,
originalPrice:2999,
discountPercent:33,
rating:4.2,
ratingCount:2345,
reviewsCount:567,
images:[
"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
],
description:"Perfect toaster grill for sandwiches and quick meals."
},

{
id:6,
name:"HP Pavilion Gaming Laptop (16GB RAM, 512GB SSD)",
category:"Laptops",
price:72990,
originalPrice:84990,
discountPercent:14,
rating:4.5,
ratingCount:3456,
reviewsCount:789,
images:[
"https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80"
],
description:"Powerful gaming laptop with high performance graphics."
},

{
id:7,
name:"Men's Casual Checkered Shirt",
category:"Clothing",
price:899,
originalPrice:1999,
discountPercent:55,
rating:4.1,
ratingCount:1987,
reviewsCount:432,
images:[
"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
],
description:"Stylish casual shirt made from breathable cotton."
},

{
id:8,
name:"Sony WH-1000XM4 Wireless Headphones",
category:"Audio",
price:22999,
originalPrice:29999,
discountPercent:23,
rating:4.8,
ratingCount:9876,
reviewsCount:2341,
images:[
"https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
],
description:"Industry leading noise cancelling wireless headphones."
}
];


// GET PRODUCT ID FROM URL
function getProductIdFromUrl(){
const params=new URLSearchParams(window.location.search);
const pid=parseInt(params.get("pid"));
return isNaN(pid)?1:pid;
}


// LOAD PRODUCT
function loadProduct(){

const productId=getProductIdFromUrl();

const product=productsDatabase.find(p=>p.id===productId);

if(!product){
window.location.href="home.html";
return;
}

// TITLE
document.title="Flipkart | "+product.name;

// PRODUCT NAME
document.getElementById("product-title").textContent=product.name;

// CATEGORY
document.getElementById("product-category").textContent=product.category;

// PRICE FORMAT
const formatter=new Intl.NumberFormat("en-IN",{
style:"currency",
currency:"INR",
maximumFractionDigits:0
});

document.getElementById("current-price").textContent=formatter.format(product.price);

document.getElementById("original-price").textContent=formatter.format(product.originalPrice);

document.getElementById("discount-percent").textContent=product.discountPercent+"% off";

// RATINGS
document.getElementById("rating-value").textContent=product.rating;

document.getElementById("rating-count").textContent="("+product.ratingCount+" Ratings)";

document.getElementById("reviews-count").textContent=product.reviewsCount+" Reviews";

// IMAGE
const mainImage=document.getElementById("main-image");
mainImage.src=product.images[0];

// DESCRIPTION
document.getElementById("product-description").textContent=product.description;

}


// PAGE LOAD
document.addEventListener('DOMContentLoaded', function() {

    loadProduct();

    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const buyNowBtn = document.querySelector('.buy-now-btn');
    const viewAllOffersBtn = document.querySelector('.view-all-offers');
    const loginIcon = document.querySelector('.fa-user');
    const cartIcon = document.querySelector('.fa-shopping-cart');

    // ADD TO CART → CART PAGE
    addToCartBtn.addEventListener('click', function () {
        window.location.href = "danufiles-cart.html";
    });

    // BUY NOW → CHECKOUT PAGE
    buyNowBtn.addEventListener('click', function () {
        window.location.href = "danufiles-checkout.html";
    });

    // LOGIN ICON → PROFILE PAGE
    if (loginIcon) {
        loginIcon.addEventListener('click', function () {
            window.location.href = "index.html";
        });
    }

    // CART ICON → CART PAGE
    if (cartIcon) {
        cartIcon.addEventListener('click', function () {
            window.location.href = "danufiles-cart.html";
        });
    }

    // OFFERS BUTTON
    if (viewAllOffersBtn) {
        viewAllOffersBtn.addEventListener('click', function () {
            alert("All available offers are displayed above!");
        });
    }
});