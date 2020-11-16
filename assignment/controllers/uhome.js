const express = require('express');
const userModel=require.main.require('./models/userModel');
const productModel = require('../models/productModel');
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
router.get('/productlist',(req,res)=>{
    productModel.getAll(function(results){
        res.render('uhome/productlist', {users:results})
    });
});
module.exports = router;