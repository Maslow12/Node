import express, { response } from "express"
import { controller } from "../controllers/location.controller.js"
const routerUsers = express.Router()

routerUsers.get('/', controller.getLocations);

routerUsers.post('/', controller.createLocations);

routerUsers.put('/:id', controller.updateLocations);

routerUsers.delete('/:id', controller.deleteLocations);

export default {
    routerUsers
}