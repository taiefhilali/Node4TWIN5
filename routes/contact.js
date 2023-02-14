const express=require('express');
const contact = require('../models/contact.js');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.json({message : 'hello'});
});


router.post('/',(req,res,next)=>{
    var Contact = new contact({fullName:req.body.contactName , phone: req.body.contactPhone});
    Contact.save((err,newContact)=>{
        if(err){
            console.log(`there is an error ${err}`);
        }else{
          res.json(newContact);
        }
    })
})

router.get('/all',(req,res,next)=>{
    
})

module.exports=router;