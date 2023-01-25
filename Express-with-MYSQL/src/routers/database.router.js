import { controller } from "../controllers/db.controller.js";
import express, { response } from "express"
const routerDB = express.Router()

routerDB.get('/table', controller.showAllTables);

routerDB.post('/table', controller.createDataTable);

routerDB.get('/table/data', controller.retreiveDataTable);
routerDB.post('/table/data', controller.insertDataTable);

routerDB.put('/:id', (request,response)=>{
    response.send(`PUT METHOD queryparams ${response.req.params.id}`);
});

routerDB.delete('/:id', (request,response)=>{
    response.send(`DELETE METHOD queryparams ${response.req.params.id}`);
});

export default {
    routerDB
}