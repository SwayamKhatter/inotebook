const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult}= require('express-validator');

router.get('/', [
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 5}),
], async(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
    let user =User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    req.json(user)
    } catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router