//Activity 1
//Task 1
const str = "Javascript is good programming language, Javascript is high level language"
const regex1 = /Javascript/g
let r = str.match(regex1)
console.log(r)

//Task 2
const str2 = "Its time to multiply  2 with 30"
const regex2 = /\d/g
let r2 = str2.match(regex2)
console.log(r2)

//Activity 2
//Task 3
const str3 = "You can do anything in your life if you are consistent, So be consistent"
const regex3 = /\b[A-Z][a-z]*/g
let r3 = str3.match(regex3)
console.log(r3)

//Task 4
const str4 = "These are the numbers 332 so we can call it these are numbers 443 43243 323"
const regex4 = /\d+/g
let r4 = str4.match(regex4)
console.log(r4)

//Activity 3
//Task 5
const ex = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const r5 = ex.match(regex5);
console.log(r5);

//Task 6
const email = "vivekthakur@gmail.com";
const regex6 = /([^@]+)@([^@]+)/;
const r6 = email.match(regex6);
console.log(r6); 

//Activity 4
//Task 7
const str5 = "This is not a word it is a sentence"
const regex7 = /^\w+/;
const r7 = str5.match(regex7);
console.log(r7);  

//Task 8
const str6 = "Javascript is the funny language";
const regex8 = /\w+$/;
const r8 = str6.match(regex8);
console.log(r8);

//Activity 5
//Task 9
const pwd = "Passw0rd!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValidPwd = regex9.test(pwd);
console.log(isValidPwd?"This is a valid password":"This is not a valid password"); 
// Output: true or false


//Task 10
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
const isValidURL = regex10.test(url);
console.log(isValidURL?"This is a valid url":"This is not a valid url");  
