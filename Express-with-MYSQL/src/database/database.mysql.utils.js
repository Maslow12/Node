import connectionMySQL from "./database.mysql.js";

function queryRetreive(tableName, fields='*'){
    try {
        const result = connectionMySQL.query(`SELECT ${fields} FROM ${tableName}`, (err,results, fields)=>{
            if(err){
                throw err
            }
            console.log(results[0].solution)
            return results[0].solution
        })
    } catch (error) {
        console.log(error)
        return
    } 
}

function createTable(tableName, fields=null){
    if(fields){
        fields = `(${fields})`
        var sql = `CREATE TABLE ${tableName} ${fields}`;
    }else{
        var sql = `CREATE TABLE ${tableName}`;
    }
    connectionMySQL.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
}

function showDataTables(){
    return new Promise((resolve, reject) => {
        try {
            connectionMySQL.query("SHOW TABLES", function (err, results) {
                if (err) throw err;
                resolve(results[0])
            });
        } catch (err) {
            reject(err)
        }
    })
}

function insertDataInTable(tableName, data, fields){
    return new Promise((resolve, reject) => {
        //data = data.join(", ")
        fields = fields.join(", ")
        console.log(fields)
        try {
            const sql = `INSERT INTO ${tableName} (${fields}) VALUES (?)`
            connectionMySQL.query(sql, [data],function (err, results) {
                if (err) throw err;
                console.log(results)
                resolve(results[0])
            });
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

function retreiveDatainTable(tableName){
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM ${tableName}`;
            connectionMySQL.query(sql, function (err, data, fields) {
                if (err) throw err;
                console.log(data)
                console.log(fields)
                resolve(data)
            })
        } catch (err) {
            reject(err)
        }
    })
}

export {
    queryRetreive,
    createTable,
    showDataTables,
    insertDataInTable,
    retreiveDatainTable
}