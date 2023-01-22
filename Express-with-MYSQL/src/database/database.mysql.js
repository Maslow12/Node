import mysql from "promise-mysql"
import config from "../config"

const connectionMySQL = mysql.createConnection({
    host: "localhost",
    database: "db-root",
    user: "root",
    password: "sebas27605"
})


const getConnection = ()=>{
    return connectionMySQL
}

module.exports = {
    getConnection,
}