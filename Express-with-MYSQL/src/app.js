import express from "express";
import morgan from "morgan";
import routerDBconnection from "./routers/db.connection.js"

const app = express();

// Settings

// Middlewares

app.use(express.json());
app.use(morgan("dev"))


// Routes

const routerExample = express.Router()

routerExample.get('/', (request,response)=>{
    response.send("Connect")
});

app.get('/', (req, res) => {
  res.send(`The server is active... Hello`);        
})

app.set('db/', routerDBconnection)

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});



export default app;