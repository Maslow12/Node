import express, { response } from "express"
import { controller } from "../controllers/location.controller.js"
const routerLocations = express.Router()

routerLocations.get('/', controller.getLocations);

routerLocations.post('/', controller.createLocations);

routerLocations.put('/:id', controller.updateLocations);

routerLocations.delete('/:id', controller.deleteLocations);

export default {
    routerLocations
}