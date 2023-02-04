import { controller } from "../controllers/db.controller.js";
import express, { response } from "express"
const routerDB = express.Router()

// Tables
routerDB.get('/table', controller.showAllTables);
routerDB.post('/table', controller.createDataTable);

// Tables Data
routerDB.get('/table/data', controller.retreiveDataTable);
routerDB.post('/table/data', controller.insertDataTable);

export default {
    routerDB
}