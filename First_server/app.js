const http = require('http')
const port = 3000
const server = http.createServer((request,response)=>{
    response.end(`First intance to server ${port}`)
})

server.listen(port,()=>{
    console.log(`Server is active. https://localhost:${port}`)
})