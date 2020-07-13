var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header

   // HTTP Status: 200 : OK

   // Content Type: text/plain

   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as 'Stay safe and remember social distancing.'

   response.end('Stay safe and remember social distancing.')

}).listen(3000)

// Console will print the message

console.log('Server running')