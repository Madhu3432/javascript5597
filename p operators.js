const num1=10
const num2=20
console.log(num1 == num2); 

const num1=10
const num2=20
const string1="10"
const string2="20"
 console.log(num1!==string1)
 console.log(num1!=string1)
 console.log(num1===string1)
 console.log(num1==string1)


------------------------------------------------------------------------







var names = new Array("madhu","ram","krishna");
names.unshift("kiwi");
names.shift()
console.log(names);
console.log(" array in first element " + names [0]);
names[1]="www";
console.log(names);


--------------------------------------


function person (name,age,city,greet){
    this.name = name,
    this.age = age,
    this.city = city,
      this.greet = function greet() {
        
          return ("hellow");
          
        }
}

const person1 = new person("loki",25,"delhi;");
const person2 = new person("madhu",22,"hyderabad");
const person3 = new person("vamsi",20,"banglore");

person2.greet = function(){
    return("hii ra")
}
  
person3.greet = function(){
    return("bye ra")
}


console.log(person1.name,person1.age,person1.city,person1.greet());
console.log(person2.name,person2.age,person2.city,person2.greet());
console.log(person3.name,person3.age,person3.city,person3.greet());