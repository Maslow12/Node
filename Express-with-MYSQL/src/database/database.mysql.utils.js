import connectionMySQL from "./database.mysql.js";

function queryRetreive(tableName, fields='*'){
   return new Promise((resolve, reject) => {
    try {
        const result = connectionMySQL.query(`SELECT ${fields} FROM ${tableName}`, (err,results, fields)=>{
            if(err){
                throw err
            }
            resolve(results)
        })
    } catch (error) {
        reject(error)
    } 
   })
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
        fields = fields.join(", ")
        console.log(fields)
        try {
            const sql = `INSERT INTO ${tableName} (${fields}) VALUES (?)`
            connectionMySQL.query(sql, [data],function (err, results) {
                if (err) throw err;
                resolve({"User create":data})
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

function updateDataInTable(tableName, id, data){
    const buildPatchQuery = (table, id, data) => {
        if (Object.keys(data).length === 0) return null; // Or return what you want
        let query = `UPDATE ${table} SET `;
        query += Object.keys(data).map((key) => {
            const valueToSet = typeof data[key] === 'string' ? `'${data[key]}'` : data[key];
            return `${key}=${valueToSet}`;
        }).join(', ');
        return query + ` WHERE id=${id};`;
    }
    return new Promise((resolve, reject) => {
    const sql = buildPatchQuery(tableName, id, data)
    const result = connectionMySQL.query(sql, data, function (err, data) {
    if (err) reject(err);
        console.log(data + " record(s) updated");
        console.log(data)
        resolve(data)
    });
    })
}

function deleteDataInTable(tableName, id){
    return new Promise((resolve, reject) => {
        const result = connectionMySQL.query(`DELETE FROM ${tableName} WHERE id = ${id}`, function (err, results, fields){
        if (err) reject (err);
        console.log(results)
        resolve(results)
        })
    })
}



export {
    queryRetreive,
    createTable,
    showDataTables,
    insertDataInTable,
    retreiveDatainTable,
    updateDataInTable,
    deleteDataInTable
}