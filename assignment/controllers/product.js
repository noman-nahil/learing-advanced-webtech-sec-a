const express   = require('express');
const userModel =require.main.require('./models/userModel');
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
module.exports = router;