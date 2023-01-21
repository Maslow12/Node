const http = require('http')
const port = 3000
const server = http.createServer((request,response)=>{
    response.end(`Is active the server ${port}`)
})

server.listen((port),()=>{
    console.log(`The server is active http://localhost:${port}`)
})