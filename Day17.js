// Activity 1:
// Task 1:
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2:
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove() {
        if (!this.head) {
            return null;
        }

        if (this.head === this.tail) {
            const removeNode = this.head;
            this.head = null;
            this.tail = null;
            return removeNode.value;
        }
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }

        const removedNode = this.tail;
        this.tail = currentNode;
        this.tail.next = null;
        return removedNode.value;
    }

    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.display()

console.log(`Remove`, list.remove())
list.display()

// Task 3:
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(' '));
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();

console.log('Top element:', stack.peek());
console.log('Popped element:', stack.pop());
stack.display();

// Task 4:
function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log('Original String:', originalString);
console.log('Reversed String:', reversedString); 

// Activity 3:
// Task 5:
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(' '));
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); 

console.log('Front element:', queue.front()); 
console.log('Dequeued element:', queue.dequeue()); 
queue.display();

// Task 6:
class PrintJob {
    constructor(name, pages) {
        this.name = name;
        this.pages = pages;
    }

    display() {
        return `Print Job: ${this.name}, Pages: ${this.pages}`;
    }
}

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addPrintJob(name, pages) {
        const printJob = new PrintJob(name, pages);
        this.queue.enqueue(printJob);
        console.log(`Added: ${printJob.display()}`);
    }

    processNextJob() {
        if (this.queue.isEmpty()) {
            console.log('No print jobs in the queue.');
            return;
        }
        const nextJob = this.queue.dequeue();
        console.log(`Processing: ${nextJob.display()}`);
    }

    displayQueue() {
        if (this.queue.isEmpty()) {
            console.log('No print jobs in the queue.');
            return;
        }
        console.log('Print Queue:');
        this.queue.items.forEach(job => console.log(job.display()));
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob('Document1', 5);
printerQueue.addPrintJob('Document2', 10);
printerQueue.addPrintJob('Document3', 3);
printerQueue.displayQueue();

printerQueue.processNextJob();
printerQueue.displayQueue();

printerQueue.processNextJob();
printerQueue.processNextJob();
printerQueue.processNextJob();

// Activity 4:
// Task 7:
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Task 8:
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

console.log('In-order traversal:');
tree.inOrderTraversal();

// Activity 5:
// Task 9:
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); 
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        const result = [];

        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    shortestPath(startVertex, endVertex) {
        const visited = new Set();
        const queue = [[startVertex]];
        
        if (startVertex === endVertex) {
            return [startVertex];
        }

        visited.add(startVertex);

        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);

                    if (neighbor === endVertex) {
                        return newPath;
                    }

                    visited.add(neighbor);
                }
            }
        }

        return null; 
    }
}

// Task 10:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log('BFS from A:', graph.bfs('A'));
 
const path = graph.shortestPath('A', 'E');
console.log('Shortest path from A to E:', path); 