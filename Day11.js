//Activity 1
//Task 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise resolved");
    }, 2000);
  });

promise.then((resp)=>console.log(resp))


//Task 2
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise rejected")
    },2000)
})

try{
promise2.then((resp)=>console.log(resp))
.catch((err)=>{
    console.log(err)
})
}
catch(err){
    console.log(err)
}

//Activity 2
//Task 3

const user = {name:"Vivek",profession:"Software Developer",skills:["Javascript","HTML","CSS"]}
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(user)
    },5000)
})

promise3.then((data)=>{
    return data.skills
}).then((data)=>{
    return data
}).then((data)=>{
    console.log(data[0])})

//Activity 3    
//Task 4
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Recieved data from server")
    },2000)
})
const getData = async ()=>{
    let ServerData = await promise4;
    console.log(ServerData)
}
getData()

//Task 5
const promise5 = new Promise((resolve,reject)=>{
 setTimeout(()=>{reject("Request rejected by the server")},2000)  
})

const getData2 = async ()=>{
    try{
        let ServerData = await promise5;
        console.log(ServerData)
    }
    catch(e)
    {
        console.log("Rejected by the server",e)
    }      
}
getData2()

//Activity 4
//Task 6
fetch("https://api.github.com/users/vkthakur98")
.then((resp)=>{
    console.log(resp)
}).catch((e)=>console.log(e))


// //Task 7
const fetchApi = async ()=>{
    try{
        let data = await fetch("https://api.github.com/users/vkthakur98")
        console.log(data)   
    }
    catch(e)
    {
        console.log(e)
    }
}
fetchApi() 

//Activity 5
//Task 8
const Prom1 = Promise.resolve("Promise resolved");
const Prom2 = Promise.resolve("Promise resolved 2");
const Prom3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Promise resolved resp resolved');
});

Promise.all([Prom1, Prom2, Prom3]).then((values) => {
  console.log(values);
});

//Task 9
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'p1 is resolved');
  })
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'p2 is resolved');
  });
  
  Promise.race([p1,p2]).then((value) => {
    console.log(value);
      });
    