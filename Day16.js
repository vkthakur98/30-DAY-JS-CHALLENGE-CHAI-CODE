//Activity 1
//Task 1

function findFactorial(arg) { 
	if ( arg==0 || arg==1 ) { 
		return 1; 
	} else { 
		return arg * factorial(arg - 1); 
	} 
} 

//Task 2
// Javascript program for Fibonacci Series using Space Optimized Method

function fibSeries(arg)
{
    let x = 0, y = 1, z, j;
    if( arg == 0)
        return x;
    for(i = 2; i <= arg; i++)
    {
    z = x + y;
    x = y;
    y = z;
    }
    return z;
}
console.log(fibSeries(7))
//0,1,1,2,3,5,8,13

//Activity 2
//Task 3
function findSum(arr, n) { 
    if (n <= 0) 
        return 0; 
    return (findSum(arr, n - 1) + arr[n - 1]); 
} 

let arr = [1, 2, 3, 4, 5]; 
let n = arr.length; 
console.log(findSum(arr, n))

//Task 4

function findMax(arr,n)
{
    if(n==1)
    return arr[0]
    return(findMax()) 
}
 
function findMaxRec(Arr, noe) 
{ 
	if (noe == 1) 
		return Arr[0]; 
		
	return Math.max(Arr[noe - 1], 
		findMaxRec(Arr, noe - 1)); 
} 
 
let Arr = [ 1, 4, 45, 6, -50, 10, 2 ]; 
let noe = Arr.length; 
console.log(findMaxRec(Arr, noe))

//Activity 3
//Task 5
		function reverse(str, len) 
        {
			if (len == str.length) {
				return;
			}
			reverse(str, len + 1);
			console.log(str[len]);

		}
		let a = "Vivek";
		reverse(a, 0);
	
//Task 6
	function isPalRec( str , s , e) {
		if (s == e)
			return true;

		if ((str.charAt(s)) != (str.charAt(e)))
			return false;

		if (s < e + 1)
			return isPalRec(str, s + 1, e - 1);

		return true;
	}

	function isPalindrome( str) {
		var n = str.length;
		if (n == 0)
			return true;

		return isPalRec(str, 0, n - 1);
	}
	
		var str = "CURE";

		if (isPalindrome(str))
			console.log("Yes");
		else
			console.log("No");

 
//Activity 4
//Task 7
function binarySearchRecur(arr, x)
{
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

arr = new Array(2, 3, 4, 10, 40);
x = 10;
n = arr.length;
result = binarySearchRecur(arr, x);
if (result == -1)
    console.log("Element not found")
    else
    {
        console.log("Element found at index "
                    + result);
    }




