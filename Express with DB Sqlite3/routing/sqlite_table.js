const express = require('express')
const db = new sqlite3.Database('db.sqlite3');
const routerTable = express.Router()

routerTable.post('/', (request,response)=>{
    try{
        tableName = request.body.table_name;
        fields = request.body.field;
        data = dbConnection.createTable(tableName, fields);
    }catch(e){
        return console.error(e);
    }
    return response.send(data);
});

routerTable.delete('/', (request,response)=>{
    try{
        if(request.query){
            tableName = request.query.tableName
            db
        }
    }catch(e){
        return 
    }
})

module.exports = routerTable;
