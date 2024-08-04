//Activity 1
//Task 1
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

let addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};

// Helper function to create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print linked list
function printLinkedList(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    console.log(arr.join(" -> "));
}

// Example usage:
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
printLinkedList(result);  // Output: 7 -> 0 -> 8


//Activity 2
//Task 2
let lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxLength = 0;
    
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    
    return maxLength;
};

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3


//Activity 3
//Task 3
let maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the width and height of the container
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        
        // Calculate the area
        let area = width * minHeight;
        maxArea = Math.max(maxArea, area);
        
        // Move the pointers
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// Example usage:
console.log("max area is:",maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log("max area is",maxArea([1,1])); // Output: 1


//Activity 4
//Task 4
let threeSum = function(nums) {
    let results = [];
    nums.sort((a, b) => a - b); // Sort the array
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            // Skip duplicate values for i
            continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        let target = -nums[i];
        
        while (left < right) {
            let sum = nums[left] + nums[right];
            
            if (sum === target) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left++; // Skip duplicates
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--; // Skip duplicates
                }
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return results;
};

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // Output: []


//Activity 5
//Task 5
let groupAnagrams = function(strs) {
    let map = new Map();
    
    for (let str of strs) {
        // Sort the characters in the string to create a key
        let sortedStr = str.split('').sort().join('');
        
        // Check if the key is already in the map
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the original string to the list corresponding to the sorted key
        map.get(sortedStr).push(str);
    }
    
    // Convert the map values to an array
    return Array.from(map.values());
};

// Example usage:
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // Output: [[""]]
