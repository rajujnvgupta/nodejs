const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>enter message </title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end()
    }
    if(url === '/message' && method === "POST"){ 
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);  //blocking code as because of synchronous code
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');  // redirecting to location '/'
                return res.end();
            });  //non-blocking code as because of asynchronous code

        });


    }
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> my first page </title><head>')
    res.write('<head><h1> myasdf first page </h1><head>')
    res.write('</html>');
    res.end(); 
};

module.exports = requestHandler; //in case of single export
module.exports = {  //multiple export 
    handler: requestHandler, 
    someText: 'some hard code text'
};
