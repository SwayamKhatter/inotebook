const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get all the notes using: GET "/api/auth/getallnotes". Login required
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
router.post("/addnote", fetchuser, [
    body('description', 'Description must be at least 3 characters').isLength({ min: 3 }),
    body('title', 'Enter a valid Tittle').isLength({ min: 3 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: Update an existing note using: PUT "/api/auth/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async(req, res)=>{
    const {title, description, tag} = req.body;
    try{
        const newNote = {};
        if(title) {newNote.title = title};
        if(description) {newNote.description = description};
        if(tag) {newNote.tag = tag};
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")};
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
        res.json({note});
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing note using: DELETE "/api/auth/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async(req, res)=>{
    try{
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")};
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({"Success": "Note has been deleted", note: note});
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router