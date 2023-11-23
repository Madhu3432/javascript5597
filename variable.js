// let name,adde,pin;
// name="madhu"
// //adde="nlr"
// pin=520014
// //console.log(name,adde,pin);

//--------------------------------------------------------
// const firstname='lorem write\'using html and css and js'
// console.log(firstname);

//---------------------------------

// const firstnumber = 1456;
// let scondnumber = 78910;
// let thirdnumber = 78945;

// let add = firstnumber + thirdnumber;
// let sub = firstnumber - thirdnumber;
// let multi = firstnumber * thirdnumber;
// let div = firstnumber / thirdnumber; 

// console.log(add);
// console.log(sub);
// console.log(multi);
// console.log(div);

//------------------------------------------------

// const num = "10"
// const num1 = 20
// const result = num*num1
// console.log(result);

//----------------------------------------------------

// const fruiteslist = ["banna","apple","mango","orange",5,false,true,15];
// console.log(fruiteslist);


// console.log(fruiteslist[5])
// fruiteslist[5]="nami"
// console.log(fruiteslist);

//------------------------------------------------------------------


// function hello() {
//   console.log ("hi how are you");
//   console.log ("i am good");
// }
// hello();


//-----------------------------------------------------------



// let madhu="Madhu"
// let mam="mama"
// let bon="NAN"

// function greet(name){
//   console.log("hello"+" "+name);
// }  
// greet(madhu)
// greet("mam")
// greet("bon")

//========================================


// function greet(frutits,quality){
//   console.log("good student" +" " + frutits + " " + quality)
// }
// greet("apple","number one quality")

//========================================================
// const wellhight =25
// function cal(value){
//  // console.log("print cm"+value*2.14+"cm")
//  const namevalue = value * 2.14
//   return value*2.14
// }
// const sum = cal(50)
// const sum1 = cal(wellhight)

// const add = [sum, sum1]
// console.log(add)

//=======================================================
//arrays,funtions and objects
//experssions-anthor way to define a funtion
//creat a var,assign to funtion(not a value),use variable

//  function reduse(nan,nan1){
//   return nan+nan1
//  }
//  const python = reduse(10,20)
//  const python1 = reduse(30,40)

//  const addd = function reduse(nan,nan1){
//   return nan+nan1
//  }

// //  const python3 = addd()


//  const result =[python,python1,addd(100,200)]
//  console.log(result)

//  ==========================================================

// array,funtions and obj
// obj-key/value pairs,methods
// dot notation

const person = {
  Name: "madhu",
  age: 25,
  educaton: true,
  frnds: ["madhu", "naveen"],


  Mane: 10,
  greeting() {
    console.log("hi madhu");
  }
}
// console.log(person);
person.greeting()


// ------------------------------------------------------------

//loops
//while loop
// it means repeately run a block of code while condition is true
// var amount = 30
// while (amount > 10) {
//   console.log("go to shopping" + amount + "apple store")
//   amount--
// }

// // do while 
// // code block first,second condition
// // runs at least one

// var money = 0
// do {
//   console.log("go to" + " " + money + " " + "bye the vegtabules");
//   money++
// } while (money < 10)


//for loop
//initialization,condition,increment/decrement

// var num
// for (num = 10; num <= 0; num--) {
//   console.log("thid" + num);
// }

// var i
// for (i = 0; i <= 10; i++) {
//   console.log("object" + i);
// }

//========================================

// var crickter = ["bat", "ball", "wicket"]
// var match = ["rohit", "rahane", "msd"]
// var ground = crickter.concat(match)
// console.log(ground);
//===========================================

// const player = ["sachin", "dhoni", "rayudu"]
// let roll = "batman"
// const newArray = [];

// for (let i = 0; i < player.length; i++) {
//   newArray.push(`${player[i]} ${roll}`)
// }
// console.log(player)
// console.log(newArray)

// const firstName = ["Madhu", "Krishna"];
// const surName = ["Gangireddy"];
// const NewArray = [];

// for (let i = 0; i < firstName.length; i++) {
//   // const fullName = `${firstName[i]} ${surName}`;
//   NewArray.push(`${firstName[i]} ${surName}`);
// }


//  console.log(firstName);
// console.log(NewArray);


// Define a constructor function for creating Person objects
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Add a method to the Person prototype
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}


// Create instances of the Person object
const person1 = new Person('Madhu', 'Gangireddy');
const person2 = new Person('Krishna', 'Gangireddy');

// Access and display the full names using the getter method
console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Alice Smith




