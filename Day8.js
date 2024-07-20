//Activity 1
//Task 1
let person_name = "Vivek"
let person_age = 24
console.log(`Person name is ${person_name} and age is ${person_age}`)

//Task 2
const multiline = `This is multiline
using template literal`

//Activity 2

//Task 3
let arr = [12,23,44,28]
let [a,b] = arr;
console.log(a)
console.log(b)

//Task 4
let Book = {
    title:"Rich dad poor dad",
    author:"Robert T. Kiyosaki and Sharon Lechter.",
    year:1997,
}

let {title,author} = Book
console.log(title,author)

//Activity 3
//Task 5
let arr1 = ["Laptop","Mobiles","Cameras"]
let arr2 =  ["Mics",...arr1]

console.log(arr1)
console.log(arr2)

//Task 6
function addAll(...args)
{
    let sum = 0;
    for(let i = 0;i < args.length; i++)
    {
        sum = sum+args[i]
    }
    return sum;
}

let sum = addAll(1,2,3,4,5)
console.log(sum)

//Activity 4
//Task 7
function findProduct(val1,val2 = 1)
{   
    return val1*val2;
}
let product = findProduct(20)
console.log(product)
product = findProduct(20,2)
console.log(product)


//Activity 5
//Task 8
let name = "Vivek"
let age = 24
let profession = "Frontend Developer"
function showDetails()
{
    return(`Name : ${this.name} and age : ${this.age} and profession:${this.profession}`)
}

let obj = {
    name,
    age,
    profession,
    showDetails
}
console.log(obj)

//Task 9
let yname = "Name"
let yage  = "Age"
let yprofession  = "Profession"

let person = {
    [yname]:"Sameer",
    [yage]:24,
    [yprofession]:"Developer"
}

console.log(person)