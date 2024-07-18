//Activity 1
//Task 1
let arr = [1,2,3,4,5]
console.log(arr)

//Task 2
console.log(`First index of array is ${arr[0]}`)
console.log(`Last index of array is ${arr[4]}`)

// Activity 2
// Task 3
arr.push(6)
console.log(arr)

//Task 4
arr.pop()
console.log(arr)

//Task 5
arr.shift()
console.log(arr)

//Task 6
arr.unshift(0)
console.log(arr)

//Activity 3
//Task 7
let narr = arr.map((elem)=>{return elem*2}
)
console.log(narr)

//Task 8
let sarr = arr.filter((elem)=>{if(elem%2===0){return elem}})
console.log(sarr)

// Task 9
const ival = 0;
const sum = arr.reduce(
  (acc,curval) => acc + curval
);
console.log(sum);

//Activity 4
// Task 10
for(let i = 0; i<arr.length; i++)
{
    console.log(arr[i])
}

// Task 11
arr.forEach((elem)=>{
    console.log(elem)
})

// Activity 5
// Task 12
let twoDArr = [];
let arr_elem = 0
for (let i = 0; i < 5; i++) {
    twoDArr[i] = [];
    for (let j = 0; j < 5; j++) {
        twoDArr[i][j] = arr_elem++;
    }
}
console.log(twoDArr);

// Task 13

console.log(twoDArr[1][1])

