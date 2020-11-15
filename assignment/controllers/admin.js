const express = require('express');
const userModel=require.main.require('./models/userModel');
const router = express.Router();

router.get('/',(req,res)=>{
    //console.log(req.session.username);
});
router.get('/edit',(req,res)=>{
    //console.log(req.session.username);
    var id ={
        id:req.session.username
    } 
    console.log(id);
    if(id!=null){
        userModel.getById(id,function(results){

            var admin={
                name:results.name,
                username:results.username,
                password: results.password,
                contact:results.contact,
                type:results.type,
                gender:results.gender
            };
            if(admin.type==0){
                res.render('admin/edit',admin);
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
router.post('/edit',(req,res)=>{
    
       var id=req.session.username;
     console.log(id);
    var user={
        name:req.body.name,
       // username:req.body.username,
        password:req.body.password,
        contact:req.body.contact,
        id:id
    };
    console.log(user);
    userModel.update(user,function(status){
        if(status){
            var id=req.session.username;
            userModel.getById(id,function(results){
                /*var user={
                    name:results.name,
                    username:results.username,
                    password:results.password,
                    contact:results.contact,
                    gender:results.gender
                };*/
                //res.render('ahome/index',user);
                res.redirect('/ahome');
            });
        }
        else{
            res.redirect('/login');
        }
    });

});

module.exports = router;