//Activity 1
//Task 1
let str = "This is a string"
localStorage.setItem("String",str)
let result = localStorage.getItem("String")
console.log((result))

//Task 2
let obj = {
    name:"Vivek",
    age:25,
    profession:"Frontend Developer"
}
let obj_data = JSON.stringify(obj)
localStorage.setItem("Object",obj_data)
console.log(JSON.parse(localStorage.getItem("Object")))

//Activity 2
//Task 3
let input = document.getElementsByClassName("input")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userData = []
    for(let i =0 ; i<input.length;i++)
    {
        localStorage.setItem(i,input[i].value)
        userData[i] = localStorage.getItem(i)
    }
    document.write(userData)
})

//Task 4
console.log(localStorage)
localStorage.removeItem("Object")
console.log(localStorage)

//Activity 3
//Task 5
let str2 = "This data is from the session storage"
sessionStorage.setItem("Object",str2)
let r = sessionStorage.getItem("Object")
console.log(r)

//Task 6
sessionStorage.setItem("Userdata",obj_data)
console.log(JSON.parse(sessionStorage.getItem("Userdata")))

//Activity 4
//Task 7
let inputs = document.getElementsByClassName("input")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userData = []
    for(let i =0 ; i<inputs.length;i++)
    {
        sessionStorage.setItem(i,inputs[i].value)
        userData[i] = sessionStorage.getItem(i)
    }
    document.write("Data from the session storage",userData)
})

//Task 8
console.log(sessionStorage)
sessionStorage.removeItem("Object")
console.log(sessionStorage)

//Activity 5
//Task 9
function saveData(key,value)
{
   localStorage.setItem(key,value)
   sessionStorage.setItem(key,value) 
}
saveData("Name","Vivek")
console.log(localStorage.getItem("Name"))
console.log(sessionStorage.getItem("Name"))

//Task 10
localStorage.clear()
console.log(localStorage)
sessionStorage.clear()
console.log(sessionStorage)