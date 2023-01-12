const arr = ['sport', 'cooking', 1]

// for (let hobby of arr){
//     console.log(hobby);
// }

console.log(arr.map(hobby => 'hobby: ' + hobby));
arr.push('programming');
console.log(arr);

// spread operator  {...person}, [...arr]
const coppied =  [...arr] /// add element to new arrya in to copied spread operator work for object and array 
console.log(coppied);

//rest operator 
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4, 5, 6))




