const {Pool}=require('pg');

//create a new connection pool
//The 'pg' module will automatically read the DB_USER, DB_HOST , DB_DATABASE, DB_PASSWORD, and DB_PORT

const pool=new Pool();

//Test the connection 
pool.connect((err,client,release)=>{
    if(err){
        return console.error('Error acquiring client for connection',err.stack);
    }
    console.log('Successfully connected to the PostgreSQL database');
    //Release the client back to the pool
    client.release();
});

module.exports={
    query: (text, params) => pool.query(text, params),
};