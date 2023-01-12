const person = {
    name: 'raju',
    age: 29,
    greet() {
        console.log('inside function of object '+ this.name);  // to access properties of object 
    },
    greet1: function() {
        console.log('inside function 2 of object '+ this.name);  // to access properties of object 
    },
    greet2: () => {
        console.log('inside function 3 of object '+ this.name);  // global scope not person object 
    },
};

person.greet();
person.greet1();
person.greet2();
// console.log(person);
// console.log(person.age);