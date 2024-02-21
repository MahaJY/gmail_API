const express= require('express');
const db =require('./config/db')
const bodyParser = require('body-parser');
const employeeroute = require('./routes/routes')
require('dotenv')

const app = express();
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());
app.use('/api',employeeroute)


const PORT= 7000;
db().then(()=>
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
}));