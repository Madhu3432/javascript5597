// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "johndoe@example.com"
};


console.log(person.firstName);
console.log(person.age);


person.age = 31;
console.log(person.age);


person.city = "New York";
console.log(person.city);


delete person.email;
console.log(person.email);


for (let key in person) {
    console.log(key + ": " + person[key]);
}
