import {queryRetreive}from "../database/database.mysql.utils.js";

const MODEL = "User";

const getUsers = (request, response) => {
    try {
        const result = queryRetreive(MODEL)
        console.log(result)
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

export const controller = {
    getUsers
}