const express = require('express');
const productModel = require('../models/productModel');
const userModel=require.main.require('./models/userModel');
const router = express.Router();

router.get('/',(req,res)=>{
    var id ={
        id:req.session.username
    } 
    console.log(id);
    if(id!=null){
        userModel.getById(id,function(results){

            var admin={
                id:results.id,
                name:results.name,
                username:results.username,
                password: results.password,
                contact:results.contact,
                type:results.type,
                gender:results.gender
            };
            if(admin.type==0){
               // res.session.id=admin.id;
                res.render('ahome/index',admin);
            }
            else{

                res.redirect('/login');
            }
            //console.log(admin.type);
        });
    }
    else{
        res.redirect('/login');
    }
    
});
router.get('/productlist',(req,res)=>{
    productModel.getAll(function(results){
        res.render('ahome/productlist', {users:results})
    });
});

module.exports = router;