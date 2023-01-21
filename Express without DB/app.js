const express = require('express')
const app = express()
const _PORT = process.env.PORT | 4200 // process.env.PORT Check automatically PORT in live server

//Routers

const routerUsers = require('./routing/users.js')
app.use('/users/', routerUsers)
const routerLocation = require('./routing/location.js')
app.use('/location/', routerLocation)

app.get('/', (req, res) => {
    res.send(`The server is active... Hello`);        
});

app.listen(_PORT, () => {
    console.log(`Server is active http://localhost:${_PORT}`);      
});
  
