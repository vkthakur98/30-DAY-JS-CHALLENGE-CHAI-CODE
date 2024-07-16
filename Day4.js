// // Activity 1
// // Task 1
for(let i =1;i<=10;i++)
{
    console.log(i)
}

// //Task 2
let num = 5;
for(let i =1;i<=10;i++)
{
    console.log(num+" x "+i+" = "+num*i)
}

// Activity 2
// Task 3
let sum = 0;
let i = 0;
while(i<=10)
{
    sum += i; 
    i++
}
console.log(sum)

//Task 4
let j = 10;
while(j>=1)
{
    console.log(j)
    j--    
}

//Activity 3
//Task 5
let k = 1
do{
    console.log(k)
    k++
}
while(k<=5)

//Task 6
let fact = 1;
let fnum = 5;
do{
    fact=fact*fnum--
}
while(fnum>=1)
console.log(fact)


// //Activity 4
// //Task 7

let result = '';
for (let i = 1; i <= 5; i++) {
   for (let j = 1; j <= i; j++) {
      result += "*";
   }
   result += "\n";
}
console.log(result);

// //Activity 5
// //Task 8

for(let i=1;i<=10;i++)
{
   if(i==5)
   {
      continue;
   }
   console.log(i)
}

// //Task 9

for(let i=1;i<=10;i++)
   {
      if(i==7)
      {
         break;
      }
      console.log(i)
   }




