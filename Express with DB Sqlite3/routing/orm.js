const express = require('express')
const dbConnection = require('../db_connection')
const routerORM = express.Router()

routerORM.get('/', (request,response)=>{
    try{
        if(request.query){
            dbConnection.retreiveDataTable(request.query.table).then(
                rows=>response.json(JSON.parse(rows)
                )).catch(err=>response.send('Error: You need Spec the Query to table'))
        }
        else{
            return response.send('Error: You need Spec the Query to table')
        }
    }catch(e){
        return response.send('Error: You need Spec the Query to table')
    }
})

routerORM.post('/', (request,response)=>{
    try{
        tableName = request.body.table_name;
        fields = request.body.fields;
        data = request.body.data;
        data = dbConnection.pushDataTable(tableName, fields, data);
    }catch(e){
        return console.error(e);
    }
    return response.send(data);
});

module.exports = routerORM;