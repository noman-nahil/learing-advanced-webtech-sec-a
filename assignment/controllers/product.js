const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('product.js');
});
module.exports = router;