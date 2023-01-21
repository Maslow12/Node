const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite3');

function createTable(tableName, fields){
    db.run(`CREATE TABLE ${tableName}(${fields.join(' ,')})`,(err)=>{
        if(err){
            console.error(err)
        }
        console.log(`Table create ${tableName}`)
        return `Table create ${tableName}`
    })
    return db.close()
}

function deleteTable(tableName){
    return new Promise(function(resolve,reject){
        db.run(`DROP TABLE [ IF EXISTS ] ${tableName}`, (err)=>{
            if(err){
                reject(err)
            }
            resolve(`Table delete ${tableName}`)
        })
    })
}


function pushDataTable(tableName,fields,data){
    return new Promise( function(resolve,reject){
        values = Array(fields.length).fill('?').join(', ')
        fields = fields.join(', ')
        db.run(`INSERT INTO ${tableName}(${fields}) VALUES(${values})`, data, (err) => {
            if(err) {
                reject(err); 
            }
            resolve({"table_name":tableName,"fields":fields,"data":data,"success":true});
        })
    })
}

function updateDataTable(){
    return
}

function filterDataTable(){
    return
}

function retreiveDataTable(tableName){
    return new Promise(function (resolve,reject){
        db.all(`SELECT * FROM ${tableName}`, function (err,rows){
        if(err){
            reject(err);
        }
        resolve(JSON.stringify(rows));
        db.close()
    })})
}

function deleteDataTable(tableName, id){
    return new Promise(function(resolve,reject){
        db.all(`DELETE FROM ${tableName} WHERE id=(${id})`,function(err,rows){
            if(err){
                reject(err)
            }
            resolve(JSON.stringify(rows))
            db.close()
        })
    })
}

module.exports = {
    createTable,
    deleteTable,
    pushDataTable,
    updateDataTable,
    filterDataTable,
    retreiveDataTable,
    deleteDataTable
}