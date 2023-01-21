const express = require('express')

const routerLocation = express.Router()

routerLocation.get('/', (request,response)=>{
    response.send('GET METHOD');
});

routerLocation.post('/', (request,response)=>{
    response.send('POST METHOD');
});

routerLocation.put('/:id', (request,response)=>{
    response.send('PUT METHOD');
});

routerLocation.delete('/:id', (request,response)=>{
    response.send('DELETE METHOD');
});

module.exports = routerLocation;