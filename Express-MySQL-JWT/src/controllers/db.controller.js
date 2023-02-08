import { createTable , showDataTables, insertDataInTable, retreiveDatainTable } from "../database/database.mysql.utils.js";

const createDataTable = (request, response) => {
    try {
        if(request.body){
            const tableName = request.body.table_name
            var fields = request.body.fields
            fields = fields.join(", ")
            const result = createTable(tableName,fields)
            console.log(result)
            response.json(`TABLE NAME ${tableName} fields ${fields}`);
        }
    } catch (err) {
        response.status(500);
        response.send(err.message);
    }
};

const showAllTables = (request, response) => {
    const result = showDataTables().then((result)=>{
        response.status(200)
        return response.send(result)
    }).catch((err)=>{
        response.status(500)
        return response.send(err)
    })
}

const insertDataTable = (request,response)=>{
    try{
        if(request.body){
            const tableName = request.body.table_name
            const data = request.body.data
            const fields = request.body.fields
            const result = insertDataInTable(tableName, data, fields).then((result)=>{
                console.log(result)
                response.status(200)
                response.send(result)
            }).catch((err)=>{
                console.log(err)
                response.status(500)
                response.send(err)
            })
        }
    }catch(err){
        throw err
    }
}

const retreiveDataTable = (request,response)=>{
    try{
        if(request.query.table_name){
            const tableName = request.query.table_name
            const result = retreiveDatainTable(tableName).then((result)=>{
                console.log(result)
                response.status(200)
                response.send(result[0])
            }).catch((err)=>{if(err) throw err})
        }else{
            response.send('Error you need table name create in MySql')
        } 
    } catch (error) {
        console.log(err)
        response.status(500)
        response.send(err)
    }
}

export const controller = {
    createDataTable,
    showAllTables,
    insertDataTable, 
    retreiveDataTable
}