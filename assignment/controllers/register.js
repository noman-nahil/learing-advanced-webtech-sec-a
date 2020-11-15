const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('register.js');
});
module.exports = router;