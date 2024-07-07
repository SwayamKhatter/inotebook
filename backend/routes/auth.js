const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');


// ROUTE1: Create a User using: POST "/api/auth/createuser". No login required
// router.post('/createuser', [
//     body('name', 'Enter a valid name').isLength({min: 3}),
//     body('email', 'Enter a valid email').isEmail(),
//     body('password', 'Password must be atleast 5 characters').isLength({min: 5}),
// ], async(req, res)=>{
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()});
//     }

//     try{
//     let user = await User.findOne({email: req.body.email});
//     if(user){
//         return res.status(400).json({error: "Sorry a user with this email already exists"})
//     }

//     const salt = await bcrypt.genSalt(10);
//     const secPassword = await bcrypt.hash(req.body.password, salt);
//     user= User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: secPassword
//     });

//     const data = {
//         user:{
//             id: user.id
//         }
//     }
//     const authToken = await jwt.sign(data, 'dd');

//     res.json({authToken});
    
//     } catch(error){
//         console.error(error.message);
//         res.status(500).send("Some error occured");
//     }

// })
// ROUTE 1: Create a user using: POST "/api/auth/createuser".
router.post("/create", [
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
], async (req, res) => {
    // Validation Using express-validator if any error then return bad request
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    try {
        // check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }   // create a new user in our database
        const saltRounds = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, saltRounds)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        });
        const data = {
            user: {
                id: user.id
            }
        }


        const authToken = jwt.sign(data, 'andro');

        res.json({ authToken })
    } catch (error) {
        // returnig unformated errors
        console.error(error.message);
        res.status(500).send("Sonthing went Wrong");
    }

});


// ROUTE2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken});
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async(req, res)=>{
    try{
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router