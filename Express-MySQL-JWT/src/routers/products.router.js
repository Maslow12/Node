import express from "express"
import { controller } from "../controllers/product.controller.js"
const routerProducts = express.Router()

routerProducts.get('/', controller.getProducts);

routerProducts.post('/', controller.createProducts);

routerProducts.put('/:id', controller.updateProducts);

routerProducts.delete('/:id', controller.deleteProducts);

export default {
    routerProducts
}