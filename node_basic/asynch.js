//asynchronous code 

const fetchData = callback => {
    setTimeout(() => {
        callback('Done');
    }, 1500) //1.5 second 
}

setTimeout(() => {
    console.log('timer is done!')
    fetchData(text => {
        console.log(text)
    })
}, 2000);  //2 second

// setTimeout(() => {
//     console.log('timer is done!')
// }, 2000);  //2 second

console.log('hello')
console.log('hi')


