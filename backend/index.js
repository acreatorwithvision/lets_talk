const dotenv=require('dotenv');
//Load Environment Variables from .env file
//This MUST be before any file that needs process.env
dotenv.config();

const app=require('./src/app');

const PORT=process.env.PORT || 3000;

const server=app.listen(PORT, 
    console.log(' Server is running in development mode on port '+PORT));



//handle unhandled promise rejections

process.on('unhandledRejection',(err,promise)=>{
    console.log('Error: ${err.message}');
    server.close(()=>process.exit(1));
});