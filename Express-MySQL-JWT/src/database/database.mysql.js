import mysql from "mysql"
import { _config as config} from "../config.js"

const connectionMySQL = mysql.createConnection({
    host: config.HOST,
    database: config.DATABASE,
    user: config.USER_DB,
    password: config.PASSWORD
})

connectionMySQL.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    }
        console.log('connected as id ' + connectionMySQL.threadId);
    });

export default connectionMySQL