import express from "express";
import morgan from "morgan";
import mysql from "mysql"
import routerUsers  from "./routers/users.js"
import routerDB from "./routers/database.router.js";

const app = express();

// Settings

// Middlewares

app.use(express.json());
app.use(morgan("dev"))

// Routes

app.get('/', (req, res) => {
  res.send(`The server is active... Hello`);        
})

app.get('/db/check/', (request,response)=>{
  var connection = mysql.createConnection({
    host     : config.HOST,
    user     : config.USER_DB,
    password :  config.PASSWORD,
    database : config.DATABASE,
    port: config.PORT_DB
  });
   connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return response.send('Connection Refuse...');
    }
    console.log('connected as id ' + connection.threadId);
    return response.send('Connect accept...', ' pool', connection.threadId)
    });
})

app.use("/api/user", routerUsers.routerUsers);

app.use("/db", routerDB.routerDB);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;