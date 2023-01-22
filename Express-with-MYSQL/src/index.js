import app from "./app.js";
import PORT from "./config.js";

const main = ()=>{
    app.listen(PORT.port, ()=>{
        console.log(`The server is active in http://localhost:${PORT.port}`)
    })
};

main();