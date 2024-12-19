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


let num1 = 10;
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
console.log(a > b);
console.log(b > a);


let age = 23;
console.log(age >= 18)

let age = 13;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


let marks = 92
if (marks >= 90) {
    console.log("You are in A+ grade");
} else if (marks >= 75) {
    console.log("You are in A grade");
} else if (marks >= 50) {
    console.log("You are in B grade");
} else if (marks >= 33) {
    console.log("You just Pass");
} else { "You are Fail" }



let day = 55;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrrseday");
        break;
    default:
        console.log("Invalid Day");
        
}


for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
  }

for(let i = 1; i <= 10; i++){
    console.log((i));
    
}
  
for (let i = 1; i <= 22; ++i){
    console.log("Number is : ", i);
    
}


let i = 1;
while (i <= 5) {
    console.log("Number", i);
    i++;
}

let l = 1;
while(l <= 22 ){
    console.log("number ", l);
    l++;   
}

let i = 1;
do {
    console.log("number:", i);
    i++
}while(i<=5)

let num = -5;
if (num > 0){
    console.log("+ve number");
}else if(num < 0){
    console.log("-ve number");
}else{"number is 0"}


let month = 5;
switch (month) {
    case 1:
        console.log("january"); 
        break;
    case 2:
        console.log("Fanuary"); 
        break;
    case 3:
        console.log("Manuary"); 
        break;
    case 4:
        console.log("Aanuary"); 
        break;
    case 5:
        console.log("May"); 
        break;
    case 6:
        console.log("juneary"); 
        break;
    default:
        console.log("Invalid Month");       
        break;
}

let i = 1, sum = 0;
while(i <= 100){
    sum += i;
    i++
}
console.log(sum);

let i = 5;
do{
    console.log(i);
    i--;
}while(i>=1)




function greet (name) {
    return "Hello " + name;
}
console.log(greet("Amit"));


const add = function(a, b){
    return a + b;
}
console.log(add(50, 10));



const multiply = (a,b) => a*b;
console.log(multiply(5, 40));


