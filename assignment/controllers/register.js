const express = require('express');
const userModel=require.main.require('./models/userModel');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('register/index');
});

router.post('/',(req,res)=>{
    if(req.body.name != "" && req.body.username != ""  &&  req.body.password!= "" && req.body.contact!= "" && req.body.gender!= ""){
        var user={
            name: req.body.name,
            username:req.body.username,
            password:req.body.password,
            contact:req.body.contact,
            type:1,
            gender:req.body.gender
        }
       // console.log(user);
    
        userModel.insert(user,function(status){
            if(status){
                res.redirect('/login');
            }
            else{
                res.send('Try again.');
            }
        });

    }
    else{

        res.redirect('/register');
    }
    

});
module.exports = router;