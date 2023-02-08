import jwt from "jsonwebtoken"
import express from "express"
const routerAuth= express.Router()

routerAuth.post('/token', async (request, response) => {
    const token = jwt.sign({
        name: "Sebastian",
        id: "1"
    }, "secret")
    response.status(200)
    response.send(token)
})

export default {
    routerAuth
}