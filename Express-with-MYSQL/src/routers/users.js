import express, { response } from "express"
import { controller } from "../controllers/user.controller.js";
const routerUsers = express.Router()

routerUsers.get('/', controller.getUsers);

routerUsers.post('/', (request,response)=>{
    return response.send("Active")
});

routerUsers.put('/:id', (request,response)=>{
    response.send(`PUT METHOD queryparams ${response.req.params.id}`);
});

routerUsers.delete('/:id', (request,response)=>{
    response.send(`DELETE METHOD queryparams ${response.req.params.id}`);
});

export default {
    routerUsers
}