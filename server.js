const express = require("express");
const app = express();
const port = 8080;

const logDateTime= (req,res,next)=>{
    req.dateTime=new Date();
    console.log(new Date());
    next();
};

const requireJsonContent = () => {
    return (req, res, next) => {
    if(req.headers['content-type'] !== 'application/json') {
    res.status(400).send('Server requires application/json');
    } else {
    next();
    }}}

app.use(logDateTime);

/*app.get('/' ,middle, (req,res,next)=>{
    res.send (`Hello :)  ${req.dateTime}`);
});*/


app.listen(port ,()=>console.log(`server is running on port:${port}`));