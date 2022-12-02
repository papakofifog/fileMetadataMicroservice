require('dotenv').config();
const express= require('express');
const app= express();
const cors= require('cors');
const errorHandler= require('./middlewares/errorHandlers/errorHandler');



app.use('/api',require('./routes/uploadRoutes'))

//Middleware to assist with front end
app.use(cors())
app.use('/public',express.static(__dirname+'/public'))
app.get('/',(req,res,next)=>{
    try{
        res.sendFile(__dirname+'/view/index.html')
    }catch(err){
        next(err)
    }
})


// Middleware to handle Errors
app.use(errorHandler)


// connect to the database
//connectToFiles();

// setup the port the application will listen on
const listener= app.listen(process.env.PORT, ()=>{
    console.log(`Your app is listening on http://localhost:${process.env.PORT}`)
})


