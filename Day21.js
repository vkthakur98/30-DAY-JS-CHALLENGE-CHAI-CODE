//Activity 1
//Task 1

function findTwoSum(arr, target) {
    // Create a copy of the original array and sort it
    const arr2 = arr.slice().sort((a, b) => a - b);

    let p1 = 0;
    let p2 = arr2.length - 1;

    while (p1 < p2) {
        const sum = arr2[p1] + arr2[p2];

        if (sum === target) {
            return [arr.indexOf(arr2[p1]), arr.indexOf(arr2[p2])];
        } else if (sum > target) {
            p2--; // Move the second pointer to the left
        } else {
            p1++; // Move the first pointer to the right
        }
    }

    // Return null if no valid pair is found
    return null;
}

// Example usage
const arr = [2, 7, 11, 15];
const target = 18;
console.log(findTwoSum(arr, target)); // Output: [0, 1]


//Activity 2
//Task 2
function reverse(x) {
    // Define the 32-bit signed integer bounds
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    // Determine the sign of the input
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let reversed = 0;

    while (x !== 0) {
        // Get the last digit
        const digit = x % 10;
        x = Math.floor(x / 10);

        // Check for overflow before updating reversed
        if (reversed > (INT_MAX - digit) / 10) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return sign * reversed;
}

// Example usage
console.log(reverse(123));    // Output: 321
console.log(reverse(-123));   // Output: -321
console.log(reverse(120));    // Output: 21


//Activity 3
//Task 3
function isPalindromeNumber(num) {
    // Handle edge cases
    if (num < 0) return false; // Negative numbers are not palindromes
    if (num === 0) return true; // Zero is a palindrome
    
    // Initialize variables
    let originalNum = num;
    let reversedNum = 0;
    
    // Reverse the number
    while (num > 0) {
        let digit = num % 10; // Get the last digit
        reversedNum = reversedNum * 10 + digit; // Append digit to reversedNum
        num = Math.floor(num / 10); // Remove the last digit from num
    }
    
    // Compare the reversed number with the original number
    return originalNum === reversedNum;
}

console.log(isPalindromeNumber(-121))//fasle
console.log(isPalindromeNumber(121))//true
console.log(isPalindromeNumber(125))//false


//Activity 4
//Task 4
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes from either list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list
function printList(list) {
    let current = list;
    while (current !== null) {
        process.stdout.write(current.val + ' -> ');
        current = current.next;
    }
    console.log('null');
}

// Example usage:
let list1 = arrayToList([1, 3, 5]);
let list2 = arrayToList([2, 4, 6]);

let mergedList = mergeTwoLists(list1, list2);
printList(mergedList);



//Activity 5
//Task 5

function balancedBracket(str) {
    let brackets = [];
    let bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            brackets.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (brackets.length === 0 || brackets.pop() !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return brackets.length === 0;
}

// Example usage:
console.log(balancedBracket("(){}[]")); // true
console.log(balancedBracket("([{}])")); // true
console.log(balancedBracket("(]")); // false
console.log(balancedBracket("({[)]}")); // false
console.log(balancedBracket(")(")); // false
