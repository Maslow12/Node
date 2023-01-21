const express = require('express')

const routerUsers = express.Router()

routerUsers.get('/', (request,response)=>{
    response.send('GET METHOD');
});

routerUsers.post('/', (request,response)=>{
    response.send('POST METHOD');
});

routerUsers.put('/:id', (request,response)=>{
    response.send(`PUT METHOD queryparams ${response.req.params.id}`);
});

routerUsers.delete('/:id', (request,response)=>{
    response.send(`DELETE METHOD queryparams ${response.req.params.id}`);
});

module.exports = routerUsers;