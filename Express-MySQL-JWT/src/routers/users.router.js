import express, { response } from "express"
import { controller } from "../controllers/user.controller.js";
const routerUsers = express.Router()

routerUsers.get('/', controller.getUsers);

routerUsers.post('/', controller.createUsers);

routerUsers.put('/:id', controller.updateUsers);

routerUsers.delete('/:id', controller.deleteUsers);

export default {
    routerUsers
}