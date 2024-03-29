import { queryRetreive, insertDataInTable, updateDataInTable, deleteDataInTable}from "../database/database.mysql.utils.js";

const MODEL = "Location";

const getCompanies = (request, response) => {
    try {
        const result = queryRetreive(MODEL).then((result)=>{
            response.send(result)
        }).catch((err)=>{
            response.status(500);
            response.send(err);
        })
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

const createCompanies = (request, response) => {
    try {
        const result = insertDataInTable(MODEL, request.body.data, request.body.fields).then((result)=>{
            response.send(result)
        }).catch((err)=>{
            response.status(500)
            response.send(err)
        })
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

const updateCompanies = (request, response) => {
    try {
        if(request.params.id){
            const result = updateDataInTable(MODEL, request.params.id, request.body).then((result)=>{
                response.send(result)
            }).catch((err)=>{
                response.send(err)
            })
        }
    } catch (error) {
        response.status(500)
        response.send(error)
    }
}

const deleteCompanies = (request, response) => {
    try {
        if(request.params.id){
            const result = deleteDataInTable(MODEL, request.params.id).then((result)=>{
                response.send(result);
            }).catch((err)=>{
                response.send(err);
            })
        }
    } catch (error) {
        response.status(500)
        response.send(error)
    }
}

export const controller = {
    getCompanies,
    createCompanies,
    updateCompanies,
    deleteCompanies
}