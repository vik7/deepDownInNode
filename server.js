const http = require('http');
const Ticker = require('./Ticker');
const ticker = new Ticker();

ticker.on('tick',() => {
    console.log('tick');
});

http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Open http://localhost:9999 and u should see what ever I am writing here');
    response.end();
}).listen(9999);
