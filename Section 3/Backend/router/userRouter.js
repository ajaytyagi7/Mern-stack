const express = require('express');

const Model= require('../model/userModel');



const router=express.Router();

router.get('/add',(req,res) => {
    res.send('Add responce from user Router');
});
router.get('/getall',(req,res) => {
    res.send('getall responce from user Router');
});
router.get('/delete',(req,res) => {
    res.send('delete responce from user Router');
});
router.get('/update',(req,res) => {
    res.send('update responce from user Router');
}); 




module.exports=router;