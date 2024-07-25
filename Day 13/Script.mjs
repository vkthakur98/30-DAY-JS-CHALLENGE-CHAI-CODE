//Activity 1
//Task 1
import addNumbers from "./Task1.mjs";
let sum = addNumbers(20,30)
console.log(sum)

//Task 2
import p from "./Task2.mjs";
let all_details  = p.getAllDetails()
let name_age = p.getNameAge()
console.log(all_details)
console.log(name_age)

//Task 3
import { addNumbers as adds,substracNumbers,divideNumbers,multiplyNumbers } from "./Task3.mjs";
let subs = substracNumbers(5,22)
let mul = multiplyNumbers(5,22)
let div = divideNumbers(5,22)
let add = adds(5,22)
console.table([subs,mul,div,add])

//Task 4
import dFunction from "./Task4.mjs"
let s = dFunction()
console.log(s)

//Task 5
import * as object from "./Task5.mjs"
let date = object.readDate()
console.log(date)
let m = object.pi
console.log(m)
let mpi = object.multiplyPi()
console.log(mpi)


//Task 6