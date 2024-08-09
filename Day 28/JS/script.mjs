import products from "../products.json" with { type: "json" }
let local_cart_products = localStorage.getItem("cart_items")
let cart_products;

if(local_cart_products===null)
{
    localStorage.setItem("cart_items",JSON.stringify([]))
    localStorage.setItem("total",0) 
}
else
{
   cart_products = JSON.parse(local_cart_products)
}
console.log(cart_products)

function saveToLocalStorage()
{
    localStorage.setItem("cart_items",JSON.stringify(cart_products))
}

function addToCart(name,image,price)
{
    let cart_item  = {}
    cart_item.p_name=name;
    cart_item.p_image=image;
    cart_item.p_price = price;
    cart_item.p_qty = 1;
    cart_products.push(cart_item)
    saveToLocalStorage()
    console.log(cart_products)
    cart_btn.innerHTML = "Cart("+cart_products.length+")"
    let sum=0;
    for(let i = 0 ;i<cart_products.length;i++)
        {
            let amt = cart_products[i].p_price.slice(1,cart_products[i].p_price.length)
            sum += parseInt(amt)
        }
    total_amount.innerHTML = "₹"+sum;
    localStorage.setItem("total",sum)

}

function showCartProducts(node_name)
{
    document.getElementsByClassName(node_name)[0].innerHTML = null;
    cart_btn.innerHTML = "Cart("+cart_products.length+")"
   for(let i =0; i<cart_products.length ;i++)
    {
        let cart_item = document.createElement("div")
        cart_item.classList.add("cart-item")
        let cart_item_details = document.createElement("div")
        cart_item_details.classList.add("cart-item-details")
        let img = document.createElement("img")
        img.src =cart_products[i].p_image
        let name_price = document.createElement("div")
        name_price.classList.add("name-price")
        let price = document.createElement("span")
        price.innerHTML = cart_products[i].p_price;
        let p_name = document.createElement("p")
        p_name.innerHTML = cart_products[i].p_name
        name_price.appendChild(p_name)
        name_price.appendChild(price)
        let count_btn_rem_btn = document.createElement("div")
        count_btn_rem_btn.classList.add("count-btn-rem-btn")
        let count_inc_dec = document.createElement("div")
        count_inc_dec.classList.add("count-inc-dec")
        let inc_btn = document.createElement("button")
        inc_btn.innerHTML = "+"
        let count_input = document.createElement("input")
        count_input.value =cart_products[i].p_qty
        let dec_btn = document.createElement("button")
        dec_btn.innerHTML = "-"
        inc_btn.addEventListener("click",()=>{
           let x =  ++count_input.value;
           cart_products[i].p_qty = x; 
           saveToLocalStorage()  
        })
        dec_btn.addEventListener("click",()=>{
            let x =  --count_input.value;
            cart_products[i].p_qty = x;
            saveToLocalStorage()
        })
        let delte_btn = document.createElement("button")
        delte_btn.classList.add("cart-item-rem-btn")
        delte_btn.addEventListener("click",()=>{
            document.getElementsByClassName("cart-item")[i].style.display="none"
            cart_products.splice(i,1)
            saveToLocalStorage()
        })
        let icon = document.createElement("i")
        icon.setAttribute("style","margin-left:5px")
        icon.classList.add("fa","fa-trash")
        let span = document.createElement("span")
        span.innerHTML = "Delete"
        delte_btn.appendChild(span)
        delte_btn.appendChild(icon)
        count_inc_dec.appendChild(dec_btn)
        count_inc_dec.appendChild(count_input)
        count_inc_dec.appendChild(inc_btn)
        count_btn_rem_btn.appendChild(count_inc_dec)
        count_btn_rem_btn.appendChild(delte_btn)
        cart_item_details.appendChild(name_price)
        cart_item_details.appendChild(count_btn_rem_btn)
        cart_item.appendChild(img)
        cart_item.appendChild(cart_item_details)
        let br = document.createElement("br")
        document.getElementsByClassName(node_name)[0].appendChild(cart_item)
        document.getElementsByClassName(node_name)[0].appendChild(br)
    } 
}

showCartProducts("all-cart-items");

function createFeaturedProductCards()
{
    for(let i =0; i<3; i++)
    {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("Id","product_img"+i)
        let h3 = document.createElement("h3")
        h3.setAttribute("Id","product_name"+i)
        h3.innerHTML = products[i].product_name
        let p = document.createElement("p") 
        p.innerHTML = products[i].product_price
        p.setAttribute("Id","product_price"+i)
        let button = document.createElement("button")
        button.innerHTML = "Add to cart"
        button.addEventListener("click",()=>{
            let name = document.getElementById("product_name"+i).innerHTML
            let price = document.getElementById("product_price"+i).innerHTML
            let image = document.getElementById("product_img"+i).src
            addToCart(name,image,price)
        })
        img.src = products[i].product_image
        div.classList.add("product-item")
        button.classList.add("btn")
        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(button)
        document.getElementsByClassName("product-grid")[0].appendChild(div)
    }
}

function createAllProductCards()
{
    for(let i =0; i<products.length; i++)
    {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("Id","all_product_img"+i)
        let h3 = document.createElement("h3")
        h3.setAttribute("Id","all_product_name"+i)
        h3.innerHTML = products[i].product_name
        let p = document.createElement("p") 
        p.innerHTML = products[i].product_price
        p.setAttribute("Id","all_product_price"+i)
        let button = document.createElement("button")
        button.innerHTML = "Add to cart"
        img.src = products[i].product_image
        div.classList.add("product")
        button.classList.add("btn","btn-2")
        button.addEventListener("click",()=>{
            let name = document.getElementById("all_product_name"+i).innerHTML
            let price = document.getElementById("all_product_price"+i).innerHTML
            let image = document.getElementById("all_product_img"+i).src
            addToCart(name,image,price)
        })
        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(button)
        document.getElementsByClassName("all-products")[0].appendChild(div)
    }
}

createFeaturedProductCards()
createAllProductCards()

const shopping_cart_overlay = document.getElementsByClassName("shopping-cart-overlay")[0]

function openCart()
{
   shopping_cart_overlay.style.display="flex"
   showCartProducts("all-cart-items")     
}

cart_btn.addEventListener("click",()=>{
    openCart()
})

proceed_btn.addEventListener("click",()=>{
    location.href = "checkout.html"
})

document.getElementsByClassName("scrollLR")[1].addEventListener("click",()=>{
    document.getElementsByClassName("all-products")[0].scrollLeft += 500
})

document.getElementsByClassName("scrollLR")[0].addEventListener("click",()=>{
    document.getElementsByClassName("all-products")[0].scrollLeft -= 500
})

window.addEventListener("click",(e)=>{
    if(e.target==shopping_cart_overlay)
    {
        shopping_cart_overlay.style.display="none"
    }
})