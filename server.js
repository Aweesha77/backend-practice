const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);
const db=mongoose.connection;  //to check if connection is successful

db.on('error',(error) => console.log("error"));  
db.once('open',() => console.log("database connected successfully"));  


app.listen(3000,() =>{
    console.log("server started on port 3000")
});

app.use(express.json());

const subscribersRouter=require('./routes/subscribers');
app.use('./subscribers',subscribersRouter);

