let length = 10; 
let height = 15
let area = (height * length);
console.log("Area of rectangle =", area);

let a = 25;
let b = 4;
let remainder = 25 % 4;
console.log("remainder when 25 is divided by 4 is: ", remainder);

let num = 25;
let remainder = num % 4;
console.log("Remainder is:", remainder);


let  num1 = 10;
let num2 = ++num1
console.log(num2);

let x = 30;
x += 20;
console.log("updated value  of x =", x);


let h = 50;
h -= 15;
console.log(h);

let y = 10, t = "10"
console.log(y === t);
console.log(y == t);

let a = 20, b = 29
console.log( a > b);
console.log( b > a);


let age = 23;
console.log(age >= 18)

let age = 13;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


let marks = 92
if (marks >= 90){
    console.log("You are in A+ grade");   
}else if(marks >= 75) {
    console.log("You are in A grade");     
} else if(marks >= 50) {
    console.log("You are in B grade");   
}else if(marks >= 33) {
    console.log("You just Pass");
}else{"You are Fail"}