const express=require('express');

require('./config/db.js');
//Route files
const messageRoutes=require('./routes/messages');

const app=express();

//body parser middleware

app.use(express.json());

//mount routers
app.use('/api/messages',messageRoutes);

module.exports=app;