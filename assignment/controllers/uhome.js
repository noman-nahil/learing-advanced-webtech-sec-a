const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('uhome.js');
});
module.exports = router;