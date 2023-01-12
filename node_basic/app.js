const http = require('http');
const route = require('./route')  //not a global module
// const server = http.createServer(route); // in case of sinlge function 
console.log(route.someText);
const server = http.createServer(route.handler);


// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     const url = req.url;
//     const method = req.method;

// });
server.listen(3000)
