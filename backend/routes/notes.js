const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1: Fetch all notes using: GET "/api/notes/fetchallnotes". Require Auth
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add a note using: POST "/api/notes/addnote". Require Auth
router.post("/addnote",fetchuser,
  [
    body("title", "Title should be greater than 3 chars!").isLength({ min: 3 }),
    body("description", "Description should be greater than 5 chars!").isLength(
      { min: 5 }
    ),
  ],
  async (req, res) => {

    try {
      const {title,description,tag} = req.body;
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const note = new Note({
        title,description,tag,user:req.user.id
      })
      const savedNote = await note.save()
  
      res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
