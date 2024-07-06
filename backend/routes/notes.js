const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get all the notes using: GET "/api/auth/getuser". Login required
router.get('/getallnotes', fetchuser, async (req, res)=>{
    try{
        const notes = await Note.find({user: req.user.id});
        res.json(notes)
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new note using: POST "/api/auth/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({min: 3}),
    body('discription', 'Discription must be atleast 5 characters').isLength({min: 5}),
], async(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
        const {title, discription, tag} = req.body;
        const note = new Note({
            title, discription, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router