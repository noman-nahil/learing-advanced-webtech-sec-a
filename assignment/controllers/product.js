const express   = require('express');
const userModel =require.main.require('./models/userModel');
const productModel =require.main.require('./models/productModel');
const router    = express.Router();

router.get('/',(req,res)=>{
    res.send('product.js');
});
router.get('/add',(req,res)=>{
    var id ={
        id:req.session.username
    } 
    console.log(id);
    if(id!=null){
        userModel.getById(id,function(results){

            var admin={
                type:results.type,
            };
            if(admin.type==0){
               // res.session.id=admin.id;
               res.render('product/add.ejs');
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
router.post('/add',(req,res)=>{
    var product={
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
        size:req.body.size,
        category:req.body.category,
        type:req.body.type,
        price:req.body.price
    }
    productModel.insert(product,function(status){
        if(status){
            res.redirect('/ahome/productlist')
            //console.log('Insert successfully');
            /*productModel.getAll(function(results){
                res.render('ahome/productlist', {users:results})
            });*/
        }
        else{
            console.log('Opps!!! something wrong');
        }

    });

});
router.get('/edit',(req,res)=>{
    console.log(req.query.pid);
    var id={
        id:req.query.pid
    } 
    productModel.getById(id,function(results){
        var product={
            title:results.title,
            description:results.description,
            image:results.image,
            size:results.size,
            category:results.category,
            type:results.type
        }
        res.render('product/edit',product);

    });

});
router.post('/edit',(req,res)=>{

       var id=req.query.pid;
 
    var product={
        title:req.body.title,
        description:req.body.description,
        size:req.body.size,
        category:req.body.category,
        type:req.body.type,
        id:id
    }
    productModel.update(product,function(status){
        if(status){
            res.redirect('/ahome/productlist')
        }
        else{
            console.log('Opps!!! something wrong');
        }
    });


});
router.get('/delete',(req,res)=>{
    var id={
        id:req.query.pid
    } 
    productModel.getById(id,function(results){
        var product={
            title:results.title,
            description:results.description,
            image:results.image,
            size:results.size,
            category:results.category
        }
        res.render('product/delete',product);

    });

});
router.post('/delete',(req,res)=>{
    var id ={
        id:req.query.pid
    }
    console.log(id);
    productModel.delete(id,function(status){
        if(status){
            productModel.getAll(function(results){
                res.render('ahome/productlist', {users:results})
            });
        }
        else{
            console.log('Opps!!! something wrong');
        }
    });

});
module.exports = router;