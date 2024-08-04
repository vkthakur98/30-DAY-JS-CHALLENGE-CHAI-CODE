//Activity 1
//Task 1

let findMedian = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        // Ensure nums1 is the smaller array
        [nums1, nums2] = [nums2, nums1];
    }
    
    let m = nums1.length;
    let n = nums2.length;
    let imin = 0;
    let imax = m;
    let halfLen = Math.floor((m + n + 1) / 2);
    
    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;
        
        if (i < m && nums2[j - 1] > nums1[i]) {
            // i is too small
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            // i is too big
            imax = i - 1;
        } else {
            // i is perfect
            let maxLeft = 0;
            if (i === 0) maxLeft = nums2[j - 1];
            else if (j === 0) maxLeft = nums1[i - 1];
            else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            
            if ((m + n) % 2 === 1) return maxLeft;
            
            let minRight = 0;
            if (i === m) minRight = nums2[j];
            else if (j === n) minRight = nums1[i];
            else minRight = Math.min(nums1[i], nums2[j]);
            
            return (maxLeft + minRight) / 2.0;
        }
    }
    
    throw new Error("Input arrays are not sorted correctly.");
};

// Example usage:
console.log(findMedian([1, 3], [2])); // Output: 2.0
console.log(findMedian([1, 2], [3, 4])); // Output: 2.5

//Activity 2
//Task 2
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this._heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const minNode = this.heap[0];
        const lastNode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this._heapifyDown(0);
        }
        return minNode;
    }

    _heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index].val < this.heap[parentIndex].val) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this._heapifyUp(parentIndex);
        }
    }

    _heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallest].val) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallest].val) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._heapifyDown(smallest);
        }
    }
}

var mergeKLists = function(lists) {
    const minHeap = new MinHeap();
    let dummy = new ListNode();
    let current = dummy;

    // Initialize the heap with the head nodes of each list
    for (const list of lists) {
        if (list) {
            minHeap.insert(list);
        }
    }

    // Extract the smallest node from the heap and add its next node to the heap
    while (minHeap.heap.length > 0) {
        const node = minHeap.extractMin();
        current.next = node;
        current = current.next;
        if (node.next) {
            minHeap.insert(node.next);
        }
    }

    return dummy.next;
};

// Example usage:
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));
const lists = [list1, list2, list3];
console.log(mergeKLists(lists)); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6


//Activity 3
//Task 3
let trappingWater = function(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let watertrappingWaterped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                watertrappingWaterped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                watertrappingWaterped += rightMax - height[right];
            }
            right--;
        }
    }

    return watertrappingWaterped;
};

// Example usage:
console.log(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trappingWater([4,2,0,3,2,5])); // Output: 9

//Activity 4
//Task 4

var nQueens = function(n) {
    const results = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    };
    
    const solve = (row) => {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    };
    
    solve(0);
    return results;
};

// Example usage:
console.log(nQueens(4)); // Output: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]

//Activity 5
//Task 5
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];  // The queue holds tuples of (currentWord, currentLevel)
    let visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();
        
        if (currentWord === endWord) return level;

        for (let i = 0; i < currentWord.length; i++) {
            const originalChar = currentWord[i];
            for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
                const newChar = String.fromCharCode(charCode);
                if (newChar === originalChar) continue;

                const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }

    return 0;
};

// Example usage:
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0
