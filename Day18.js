//Activity 1
//Task 1

let arr = [ 64, 34, 25, 12, 22, 11, 90 ];
let n = arr.length;
// function bubbleSort()
// {
//     let i, j, temp;
//     let changed;
//     for (i = 0; i < n - 1; i++) 
//     {
//         changed = false;
//         for (j = 0; j < n - 1; j++) 
//         {
//             if (arr[j] > arr[j + 1]) 
//             {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 changed = true;
//             }
//         }
//         if (changed == false)
//         break;
//     }
//     for(let i = 0; i<n; i++){
//         console.log(arr[i])
//     }   
// }
// bubbleSort();

//Task 2
function selectionSort()
{
    let i, j, min;
    for (i = 0; i < n-1; i++)
    {
        min = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min])
            min= j;
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    for(let i =0;i<n;i++)
    {
        console.log(arr[i])
    }
}
selectionSort()

//Task 3
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {        
        if (arr[j] < pivot) {
               i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

let Arr = [10, 7, 8, 9, 1, 5]
let N = Arr.length
quickSort(Arr, 0, N - 1);
console.log("Sorted array:");
console.log(Arr.join(" "));

//Activity 2
//Task 4
let arr2 = [29,33,23,44]
let target=23
function linearSearch()
{
    for(let i = 0;i<arr2.length ; i++)
    {
        if(arr2[i]==target)
        {
            console.log("value found at "+i+"")
        }
    }
}
linearSearch()

//Task 5

let barr = [2, 3, 4, 10, 40]
key = 10;
function binarySearch()
{
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);
        if (barr[mid] == key)
            return mid;
        if (barr[mid] > key)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

result = binarySearch();
if (result == -1)
    console.log("Element not found")
else
 {
 console.log("Element found at index"+ result);
    }

//Activity 3
//Task 6
let str = 'Chai aur code'
let counts = {}
for(let i = 0;i< str.length;i++){
  let ch = str.charAt(i)
  if(!counts[ch]){
    counts[ch] =1;
  }
  else{
    counts[ch]+=1
  }
}
console.log(
    "Result:",counts)

//Task 7
function checkChar(str, i, j)
{
    let visited = [];

    for(let k = i; k <= j; k++)
    {
        if (visited[str.charAt(k) ] == true)
            return false;
            
        visited[str.charAt(k)] = true;
    }
    return true;
}

function findSubStr(str)
{
    let n = str.length;
    let res = 0; 
    
    for(let i = 0; i < n; i++)
        for(let j = i; j < n; j++)
            if (checkChar(str, i, j))
                res = Math.max(res, j - i + 1);
                
    return res;
}
    let str2 = "I am learing from chai aur code";
    let len = findSubStr(str2); 
    console.log(`The length of longest non-repeating character substring is ${len}`);

