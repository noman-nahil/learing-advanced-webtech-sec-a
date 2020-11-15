const express = require('express');
const userModel=require.main.require('./models/userModel');
const router = express.Router();

router.get('/',(req,res)=>{
    var id ={
        id:req.session.username
    } 
    console.log(id);
    if(id!=null){
        userModel.getById(id,function(results){
            var user={
                name:results.name,
                username:results.username,
                password: results.password,
                contact:results.contact,
                type:results.type,
                gender:results.gender
            };
            if(user.type==1){
                res.render('uhome/index',user);
            }
            else{

                res.redirect('/login');
            }
            
        });
    }
    else{
        res.redirect('/login');
    }
});
module.exports = router;