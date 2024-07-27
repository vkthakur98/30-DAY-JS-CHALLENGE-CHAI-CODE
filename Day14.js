//Activity 1
//Task 1
class Person{    
    constructor(fname,lname,age){
        this.fname = fname;
        this.age = age;
        this.lname = lname;
    }

    greet() {
       return `Hello ${this.fname}` 
    }

    set fullName(flname)
    {
        const fullName  = this.fname+" "+this.lname
    }

    get fullName()
    {
        return this.fname+" "+this.lname
    }

    set fname(fname)
    {
        this._fname  =fname
    }

    get fname()
    {
        return this._fname
    }

    set lname(lname)
    {
        this._lname = lname
    }

    get lname()
    {
        return this._lname
    }
}

let p = new Person("Vivek","Kumar",24)
console.log(p.greet())

//Task 2
Person.prototype.updateAge = function(age)
{
    this.age = age
    console.log(this.age)
}
let p2 = new Person("Vivek","Kumar",24)
p2.updateAge(30)

//Activity 2
//Task 3
class Student extends Person{
    static count = 0

    constructor(name,age,studentId){
        super(name,age)
        Student.count+=1
        console.log(`No. of students are ${Student.count}`)
   }
    studentId = 1233
    showStudentId(){
        console.log(this.studentId)
    }
}

let s = new Student("Vivek","Kumar",24)
s.showStudentId()

//Task 4
Student.prototype.greet = function()
{
    console.log(`Hi ${this.fname}, your student id is ${this.studentId}`)
}
let s2 = new Student("Vivek","Kumar",24)
s.greet()


//Activity 3
//Task 5
Person.sayHello = function(){
    console.log("hello everyone")
}
Person.sayHello()

//Task 6
s1 = new Student("Vivek","Kumar",24)
s2 = new Student("Vivek","Kumar",24)

//Activity 4
//Task 7
let p1 = new Person("Abhishek","Thakur")
console.log(p1.fullName)

//Task 8
let pr1 = new Person("James","Gosling")
console.log(pr1.fullName)

//Activty 5(Optional)
//Task 9
class Account{
    static #balance

    constructor(bal)
    {
        Account.#balance = bal
    }
    static depositMoney(amount)
    {
        Account.#balance += amount
        console.log(Account.#balance) 
    }

    static withdrawMoney(amount)
    {
        Account.#balance -= amount
        console.log(Account.#balance)
    }

    static checkBalance()
    {
        console.log(Account.#balance)
    }
}
let acc = new Account(0)

Account.depositMoney(2000)
Account.checkBalance()
Account.withdrawMoney(10)
Account.checkBalance()





