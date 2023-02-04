import express, { response } from "express"
import { controller } from "../controllers/product.controller.js"
const routerUsers = express.Router()

routerUsers.get('/', controller.getProducts);

routerUsers.post('/', controller.createProducts);

routerUsers.put('/:id', controller.updateProducts);

routerUsers.delete('/:id', controller.deleteProducts);

export default {
    routerUsers
}