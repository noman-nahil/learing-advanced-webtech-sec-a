const express = require('express');
const productModel = require('../models/productModel');
const router = express.Router();

router.get('/',(req,res)=>{

    productModel.getAll(function(results){
        res.render('home/index', {users:results})
    });
});
module.exports = router;