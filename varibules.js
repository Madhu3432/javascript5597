

let userName = "Madhu"
var userAge = 25
const isLoggedIn = true

console.log("userName",userName);
console.log("userAge",userAge);
console.log("isLoggedIn",isLoggedIn);

if(userAge >= 30){
    console.log(userName + " is on aaa adult ");
}
    
else{
    console.log(userName + " is not adult ");
}

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

let a = 1;
while(a<5)
{
    console.log(" a = " + a);
    a++;
}


let b = 10;
do
{
    console.log("b =" + b);
    b--;

}
while(b>1);

for(c=1;c<10;c++)
{
  
    if(c==5){
        console.log("continue statement occured");
        continue;
    }
    if(c==8){
        console.log("break statement occured");
        break;
    }
    console.log(c)
}




