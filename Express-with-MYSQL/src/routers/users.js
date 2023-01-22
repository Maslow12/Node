const express = require('express')
const dbConnection = require('../db_connection')
const routerUsers = express.Router()
const MODEL = 'User'

routerUsers.get('/', (request,response)=>{
    dbConnection.retreiveDataTable(MODEL).then(
        rows=>response.json(JSON.parse(rows)
    )).catch(err=>response.send('Error'))
});

routerUsers.post('/', (request,response)=>{
    try{
        if(request.body){
            tableName = request.body.table_name;
            fields = request.body.fields;
            data = request.body.data;
            dbConnection.pushDataTable(tableName,fields,data).then(res=>response.json(res)).catch(err=>request.send(err))
        }
    }catch(err){
        return response.send("Error")
    }
});

routerUsers.put('/:id', (request,response)=>{
    response.send(`PUT METHOD queryparams ${response.req.params.id}`);
});

routerUsers.delete('/:id', (request,response)=>{
    response.send(`DELETE METHOD queryparams ${response.req.params.id}`);
});

module.exports = routerUsers;