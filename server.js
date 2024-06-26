const express = require('express');
const app = express();
const db = require('./db');

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Stores in req.body;

app.get('/', function(req,res){
    res.send("Hello, Welcome to my hotel");
})

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    // Listening message
    console.log("Currently listening on port 3000");
})
