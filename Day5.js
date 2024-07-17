//Activity 1
//Task 1

function checkEvenOdd(num)
{
    if(num%2==0)
    {
        return `${num} is even number`
    }
    else{
        return `${num} is odd number`
    }
}

let eresult = checkEvenOdd(20)
console.log(eresult)

//Task 2

function findSquare(num)
{
    return num*num
}
let sresult = findSquare(4)
console.log(sresult)

// Activity 2
//Task3
const findMax = function(a,b){
     if(a>b)
     {
        return a;
     }
     else{
        return b;
     }
}
let max = findMax(10,50)
console.log(max)

// // Task4
const concatenateStrings = function(str1,str2)
{
    return str1+str2;
}
let newString = concatenateStrings("Hello","There")
console.log(newString)

// //Activity 3
// //Task 5

const addTwoNumbers = (num1,num2)=>{
    return num1+num2;
}
let sum = addTwoNumbers(2,2)
console.log(sum)

// //Task 6
const checkForChar = (str,char)=>{
    for(let i = 0;i<=str.length;i++)
    {
        if(str[i]==char)
        {
            return true
        }
    }
}

let cresult = checkForChar("Vivek","i")
console.log(cresult)

// //Activity 4
// //Task 7

function fiindProduct(a,b=2)
{   
    return a*b
}
let product = fiindProduct(50,10)
console.log(product)

// // // Task 8
function greetSomeone(name,age=18)
{
    return `Hello ${name}, You are ${age} years old`
}

let greetmsg = greetSomeone("Vivek",24)
console.log(greetmsg)

//Activiy 5
//Task 9


function func()
{
    console.log("I was called")
    return ""
}

function funca(n)
{
    console.log(n*100)
    return n*100
}

function funcb(arg)
{
    console.log(arg)
    return ""
}

function highOnCode(fn,not)
{
    let i = 0;
    while(i<not)
        {
            fn()
            i++
        }
        return ""   
}

let sout = highOnCode(func,5)
console.log(sout);

//Task 10

function highOnCode2(fn1,fn2,num)
{
    let result = fn1(num) 
    fn2(result)
    return ""
}

let result = highOnCode2(funca,funcb,5)
console.log(result)
