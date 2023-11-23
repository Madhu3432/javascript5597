const firstName = ["Madhu", "Krishna"];
const surName = ["Gangireddy"];
const NewArray = [];

for (let i = 0; i < firstName.length; i++) {
    // const fullName = `${firstName[i]} ${surName}`;
    NewArray.push(`${firstName[i]} ${surName}`);
}

console.log(firstName);
console.log(NewArray);

//------------------------------------------------------------

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = new Person('Madhu', 'Gangireddy');
const person2 = new Person('Krishna', 'Gangireddy');

console.log(person1.getFullName());
console.log(person2.getFullName());







