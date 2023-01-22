import express from "express"
const routerDBconnection = express.Router()

routerDBconnection.get('', (request,response)=>{
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'host',
    user     : 'root',
    password : 'sebas27605'
    });

    connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
    });
    response.send('Connect')
});

export default {
    routerDBconnection
}