// Activity 1
// Task 1
document.getElementById("sid").innerText = "Some value"

// //Task 2
document.getElementsByClassName("sclass")[0].style.backgroundColor = "red"

//Activity 2
//Task 3
let div = document.createElement("div");
div.innerHTML = "Some Content"
document.body.append(div)

//Task 4
let list = document.createElement("li")
list.innerHTML = "List Item"
document.getElementsByTagName("ul")[0].append(list)

//Activity 3
//Task 5
let element = document.querySelector(".element");
document.body.removeChild(element)

// //Task 6
let div_elems = document.getElementsByClassName("div_elem")[0]
div_elems.removeChild(div_elems.lastElementChild)

// //Activity 4
// //Task 7
document.getElementsByTagName("img")[0].src = "https://i.ytimg.com/vi/Hr5iLG7sUa0/hqdefault.jpg"

// //Task 8
document.getElementById("element").classList.add("new_class")
document.getElementById("element").classList.remove("old_class")

// //Activity 5
// //Task 9
let btn = document.querySelector("#change-btn");
let p = document.querySelector("#para")
btn.addEventListener("click",()=>{
    p.innerText = "New Text"
})

//Task 10
let div_black = document.getElementById("div-black")
div_black.addEventListener("mouseover",function(){
    this.style.border="5px solid yellow"
})






