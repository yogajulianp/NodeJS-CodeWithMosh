const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //res.send('Selamat anda telah berhasil membuat server dengan express');
    res.render('index',{title:'Aplikasi Express saya', message: 'Hallo selamat datang di HOME'});
});

module.exports = router;