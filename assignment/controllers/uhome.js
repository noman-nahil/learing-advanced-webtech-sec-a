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
    console.log(req.body.quantity);
    var quantity=req.body.quantity;
    var size=req.body.size;
    console.log(size);

    if(req.body.quantity=!""){
        console.log(req.session.username);
        /*var order={
            username:req.session.username,
            id:req.body.id,
            title:req.body.title,
           
            category:req.body.category,
            quantity:quantity,
            amount:req.body.amount
        };*/
        //console.log(order);
        var orderlist =[
            req.session.username,
            req.body.id,
            req.body.title,
            size,
            req.body.category,
            quantity,
            req.body.amount];
        req.session.cart.push(orderlist);
        console.log(req.session.cart);
        res.redirect('/uhome/productlist');
        
    }
    else{
        console.log('failed');
    }

});
router.get('/cartlist',(req,res)=>{
    res.render('uhome/cartlist',{users:req.session.cart});

});
router.post('/cartlist',(req,res)=>{
    console.log('Traking start');
    req.session.cart.forEach(element => {
        console.log(element);
    var element={
        username:element[0],
        id:element[1],
        title:element[2],
        size:element[3],
        category:element[4],
        quantity:element[5],
        amount:element[6]

    }
    console.log(element);
        userModel.insertProduct(element,function(results){});
    
    });
   
   console.log('Traking End');

});
router.get('/remove',(req,res)=>{
        //console.log(req.query.pid);
        var pid = req.query.pid;
        res.render('uhome/remove',{
            serial:req.session.cart[pid][0],
            id:req.session.cart[pid][1],
            title:req.session.cart[pid][2],
            size:req.session.cart[pid][3],
            quantity:req.session.cart[pid][5],
            amount:req.session.cart[pid][6]

        });

});
router.post('/remove',(req,res)=>{
    var pid = req.query.pid;
    req.session.cart.splice(pid,1);
    res.redirect('/uhome/cartlist');
});

module.exports = router;