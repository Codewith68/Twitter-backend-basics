import express from 'express';
import morgan from 'morgan';
// import path from 'path';
import 'ejs';
//create a new express app or object
const app=express();

app.set('view engine','ejs'); //set the view engine to ejs
app.use(morgan('combined')); //middleware to log requests
app.use(express.json()); //middleware to parse json body
app.use(express.text()); //middleware to parse text body
app.use(express.urlencoded({extended:true})); //middleware to parse urlencoded body
app.set('views',import.meta.dirname+'/views')
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
app.post('/tweets/:tweetId/comments/:commentId',(req,res)=>{
    console.log('req.params:',req.params);
    console.log('req.body:',req.body); 
    return res.json({
        message:'comment created',
    })
});


app.use((req,res)=>{
    return res.status(404).json({
        message:'route not found'
    });
});
// define a PORT and attacth it to the express app 
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
