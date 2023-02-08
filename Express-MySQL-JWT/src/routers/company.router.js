import express, { response } from "express"
import { controller } from "../controllers/company.controller.js"
const routerCompanies = express.Router()

routerCompanies.get('/', controller.getCompanies);

routerCompanies.post('/', controller.createCompanies);

routerCompanies.put('/:id', controller.updateCompanies);

routerCompanies.delete('/:id', controller.deleteCompanies);

export default {
    routerCompanies
}