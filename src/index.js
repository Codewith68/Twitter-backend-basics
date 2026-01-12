import express from 'express';
import morgan from 'morgan';
// import path from 'path';
import 'ejs';
import {PORT} from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
//create a new express app or object
const app=express();

app.set('view engine','ejs'); //set the view engine to ejs
app.use(morgan('combined')); //middleware to log requests
app.use(express.json()); //middleware to parse json body
app.use(express.text()); //middleware to parse text body
app.use(express.urlencoded({extended:true})); //middleware to parse urlencoded body
app.set('views',import.meta.dirname+'/views')
app.use('/api',apiRouter); //use the api router for /api route

//define a route handler for the /ping route with multiple middlewares
function mid1(req,res,next){
    console.log("mid1");
    next();
}
function mid2(req,res,next){
    console.log("mid2");
    next();
}
function mid3(req,res,next){
    console.log("mid3");
    next();
}
app.get('/ping',[mid1,mid2,mid3],(req,res)=>{
    console.log('req.query:',req.query);
    return res.json({
        message:'pong',
    })
});
app.get('/',(req,res)=>{
    res.render('home', {miri:'debbu'});
});



app.use((req,res)=>{
    return res.status(404).json({
        message:'route not found'
    });
});
// define a PORT and attach it to the express app 
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
