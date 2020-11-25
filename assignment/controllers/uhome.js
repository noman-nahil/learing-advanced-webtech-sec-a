const express = require('express');
const userModel=require.main.require('./models/userModel');
const productModel =require.main.require('./models/productModel');
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

router.get('/purchase/:id',(req,res)=>{
    //res.send(req.params.id);
    var id=req.params.id;
    productModel.getByIdUser(id,function(results){
        var product={
            id:results.id,
            title:results.title,
            description:results.description,
            //image:results.image,
            price:results.price,
            size:results.size,
            category:results.category,
            type:results.type
        }
        console.log(product)
        res.render('uhome/product',product);

    });
});
router.post('/purchase/:id',(req,res)=>{
    //console.log(req.session.username);
    if(req.body.quantity=!""){
        console.log(req.session.username);
        var order={
            username:req.session.username,
            id:req.body.id,
            title:req.body.title,
            size:req.body.size,
            category:req.body.category,
            quantity:req.body.quantity,
            amount:req.body.amount
        };
        var orderlist =[req.session.username,req.body.id,req.body.title,req.body.size,req.body.category,req.body.quantity,req.body.amount];
        req.session.cart.push(orderlist);
        //console.log(order);
    }
    else{
        console.log('failed');
    }

});

module.exports = router;