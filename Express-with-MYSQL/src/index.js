import app from "./app.js";

const PORT = process.env.PORT || 4200

const main = ()=>{
    app.listen(PORT, ()=>{
        console.log(`The server is active in http://localhost:${PORT}`)
    })
};

main();