const person = {
    name: 'raju',
    age: 29,
    greet() {
        console.log('inside function of object '+ this.name);  // to access properties of object 
    }
};


//object destructuring 
const printName = (personData) => {
    console.log(personData.name)
}
printName(person)
// person.greet();

const printName1 = ({name, age}) => {
    console.log(name, age)
}
printName1(person)

const { name, age} = person;

console.log(name, age)

// array distructuring
const hobbies = ['sport', 'cooking', 'cricket'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)