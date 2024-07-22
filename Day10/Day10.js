//Activity 1
//Task 1
let change_btn = document.querySelector("#change-btn")
let p1 = document.querySelector("#p1")
change_btn.addEventListener("click",()=>{
    p1.textContent= "paragraph changed"
})

//Task 2
let img = document.querySelector("#img1")
let flag = true
img.addEventListener("dblclick",(e)=>{
    if(flag)
    {
        e.target.style.opacity = "0"
        flag = false
    }
    else{
        e.target.style.opacity = "1"
        flag = true
    }
})

//Activity 2
//Task 3
let div1 = document.querySelector("#div1")
div1.addEventListener("mouseover",(e)=>{
    e.target.style.backgroundColor = "forestgreen"
})

//Task 4
div1.addEventListener("mouseout",(e)=>{
    e.target.style.backgroundColor = "black"
})

//Activity 3
//Task 5
let input_Text1 = document.querySelector("#text1")
input_Text1.addEventListener("keydown",(e)=>{
    let keypressed = e.keyCode
    console.log(String.fromCharCode(keypressed))
})

//Task 6
let input_Text2 = document.querySelector("#text2")
let p2 = document.querySelector("#p2").innerHTML
input_Text2.addEventListener("keyup",(e)=>{
    e.target.value = p2;
})

//Activity 4
//Task 7
let formdata = Array.from(document.getElementsByClassName("formdata"))
form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    for(let i =0;i<formdata.length;i++)
    {
        console.log(formdata[i].value)
    }  
})

//Task 8
select1.addEventListener("change",(e)=>{
    p3.innerHTML = e.target.value    
})


//Activity 5
//Task 9
ul1.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI")
        {
            console.log(e.target.innerHTML)
        }   
})


//Task 10
div_area.addEventListener("click",(e)=>{
    if(e.target.tagName !== "DIV")
    {
        console.log("It was click on ",e.target.tagName)
    }
    else{
        console.log("Parent clicked")
    }
})

addelembtn.addEventListener("click",(e)=>{
    let elemname = ename.value
    let element = document.createElement(elemname)
    element.innerHTML = "This is a dynamically added element"
    div_area.append(element)
})
