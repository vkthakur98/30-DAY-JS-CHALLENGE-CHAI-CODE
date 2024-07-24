//Activity 1
//Task 1
function throwError(msg)
{
    throw Error(msg)
}
throwError("Error occured")

//Task 2
function divide(a,b)
{
    if(b===0)
    {
        throwError("Cannot divide by zero")
    }
    return a/b;
}
let x = divide(6,0)
console.log(x)


//Activity 2
// Task 3
try {
    const s = 20;
    s = 40;
} 
catch (error) {
    console.log(error)
}
finally
{
    console.log("variable declared")
}

//Activity 3
//Task 4
class MyError extends Error 
{ 
    constructor(msg) { 
        super(msg); 
    } 
} 
  
function divideTwo(a,b)
{
    try { 
        if(b===0)
        {
            throw new MyError("Erro:-Can't divide by zero")
        }
        return a/b
    } 
    catch (err) { 
        console.error(err); 
    }
}
// divideTwo(3,0)

//Task 5
function getString(str)
{
        try{
            if(!str)
            {
                throw Error("String is empty")
            }
            console.log(`Your string is ${str}`)
        }
        catch(err)
        {
            console.log(err)
        }
        finally{
            return(`Your string was defined`)
        }
}

let msg = getString("Server")
console.log(msg);

//Activity 4
//Task 6

const promise = new Promise((res,rej)=>{
    if(Math.round(Math.random()*10)%2==0)
    {
        res("Promise resolved")
    }

    else
    {
        rej("Promise rejected")
    }
})

promise.then((res)=>{
    console.log(res)
})
.catch((e)=>{
    console.log(e)
})

//Task 7
async function handlePromise()
{
    try{
        let res = await promise
        console.log(res)    
    }
    catch(e){
        console.log(e)
    }
}
handlePromise();

// Activity 5
//Task 8
fetch("https//api.github.com/users/vkthakur98")
.then((res)=>{
    console.log(res)
})
.catch((e)=>{
    console.log("Invalid URL")
})


//Task 9
const getApi = async ()=>{
    try{
        await fetch("https//api.github.com/users/vkthakur98")
    }
    catch(e)
    {
        console.log("Invalid URL")
    }
}
getApi()