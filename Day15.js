//Activity 1
//Task 1
function parentFunction()
{
    let outer_val = 20
    function childFunction()
    {
        console.log(outer_val)
    }
    childFunction()
}
parentFunction()

//Task 2
function parentCounter()
{
    return function childCounter()
    {
       let count = 0;
       function incrementCount()
       {
            count +=1 
            console.log(count)
       }

       function showCount()
       {
            console.log(count)
       }

       incrementCount()
       incrementCount()
       incrementCount()
       showCount()
     }
    
}
const func = parentCounter();
func()


//Activity 2
// Task 3

function generateId()
{
    let ID = ((Math.random())*100)
    console.log(ID)
    function storeLastId()
    {
        let lastId = ID
        console.log("lastId was ",lastId)
            ++lastId
        console.log("latest id is ",lastId)
    }
    storeLastId()
    return ID;
}
console.log(generateId())
console.log(generateId())

//Task 4
function yourName(name)
{
    this.name = name;
    return function hello()
    {
        console.log(`hello ${name}`)
    }
}

let greet = yourName("Vivek")
greet()

//Activity 3
//Task 5
let funarr = []
for(let i = 0; i<5; i++)
    {
    fname()
   function fname()
    {
        function me()
        {
            console.log("called closure"+i)
        }
        console.log("called function"+i)
        me()
    }
    funarr.push(fname)
}
console.log(funarr)

function manageItems() {
    const items = [];
  
    return {
      add: (item) => {
        items.push(item);
      },
  
      remove: (item) => {
        const pos = items.indexOf(item);
        if (pos !== -1) {
          items.splice(pos, 1);
        }
      },
  
      listItems: () => {
        return items.join(", ");
      },
    };
  }
  const myItemList = manageItems();
  myItemList.add(23);
  myItemList.add(10);
  myItemList.add(9);
  console.log(myItemList.listItems());
  myItemList.remove(10);
  console.log(myItemList.listItems());
  console.groupEnd();

//Activity 5
//Task 7
function findSum(arg)
{ 
  let sum = 0;
    for(let  i = 0; i<=arg; i++)
    {
       sum += i;
    }
    return sum;
}

function memoize(func){
  let cache = {}
  return function(arg)
  {
      if(arg in cache)
      {
        return cache[arg]
      }
      else{
        let r = func(arg)
        cache[arg] = r
        console.log(cache)
        return r;
      }
  }
}

let find = memoize(findSum)
console.time()
console.log(find(20))
console.timeEnd()

console.time()
console.log(find(40))
console.timeEnd()

console.time()
console.log(find(20))
console.timeEnd()

console.time()
console.log(find(40))
console.timeEnd()

//Task 8

function findFactorial(arg)
{
    fact = 1;
    fnum = arg;
     while(fnum>=1)
    {
      fact = fact*fnum
      fnum--
    }
    return fact
}

function memoizeFact(func){
  let cache = {}
  return function(arg)
  {
      if(arg in cache)
      {
        return cache[arg]
      }
      else{
        let r = func(arg)
        cache[arg] = r
        console.log(cache)
        return r;
      }
  }
}

const fFact = memoizeFact(findFactorial)
console.time()
console.log("Factorial is :",fFact(5))
console.timeEnd()

console.time()
console.log("Factorial is :",fFact(5))
console.timeEnd()

console.time()
console.log("Factorial is :",fFact(20))
console.timeEnd()

console.time()
console.log("Factorial is :",fFact(20))
console.timeEnd()

console.time()
console.log("Factorial is :",fFact(20))
console.timeEnd()





