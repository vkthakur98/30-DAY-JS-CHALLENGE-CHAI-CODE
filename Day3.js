// Activity 1
//Task 1
let num = 25

if(num>0)
{
    console.log(num+" is a positive number")
}

else if(num<0)
    {
    console.log(num+" is a negative number")
}

else{
    console.log(num+" is equals to 0")
}

// //Task 2
let personAge = 20

if(personAge>=18)
{
    console.log("This person is eligible to vote")
}
else{
    console.log("This person is not eligible to vote")
}

//Activity 2
//Task 3
let num1 = 65;
let num2 = 86;
let num3 = 152;

if(num1>num2)
{
    if(num1>num3)
    {
        console.log(num1+" is greatest number")
    }
}

else if(num2>num3)
{
    console.log(num2+" is greatest number" )
}

else if(num3>num1)
{
    if(num3>num2)
    {
        console.log(num3+" is greatest number")
    }
}

//Activity 3
//Task 4
switch (1) {
    case 1:
      console.log("It's sunday enjoy")
      break;
    case 2:
      console.log("Monday")
      break;
    case 3:
       console.log("Tuesday")
      break;
    case 4:
      console.log("Wednesday")
      break;
    case 5:
      console.log("Thursday")
      break;
    case 6:
      console.log("Friday")
      break;
    case 7:
      console.log("Saturday")
  }

//Task 5
let marks = 57
switch (true) {
    case (marks <= 20):
        console.log("F");
        break;
    case (marks <= 40):
        console.log("D");
        break;
    case (marks <= 60):
        console.log("C");
        break;
    case (marks <= 80):
        console.log("B");
        break;
    case (marks <= 100):
        console.log("A");
        break;
}

//Activity 4
//Task 6
let n_num = 53
n_num%2==0?console.log(n_num+" is an even number"):console.log(n_num+" is an odd number")

//Activity 5
//Task 7
let cyear = 2024
 if ((cyear % 4 == 0 ) && (cyear % 100 != 0 ) || (cyear % 400 == 0 )) {
        console.log(cyear+' is a leap year');
    } 
    else {
        console.log(cyear+' is not a leap year');
    }


