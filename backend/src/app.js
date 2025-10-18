const express=require('express');

//Route files
const messageRoutes=require('./routes/messages');

const app=express();

//body parser middleware

app.use(express.json());

//mount routers
app.use('/api/messages',messageRoutes);

module.exports=app;