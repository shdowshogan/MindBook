const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt  = require('bcryptjs')
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'ronitlovesdipti';

// CREATE a User using: POST "/api/auth/". Doesn't require Auth
router.post("/createuser", [
    // Add validation for the incoming request body
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }

        // Create a new user
        const salt  = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password,salt) 
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken  = jwt.sign(data,JWT_SECRET);
        console.log(authtoken)
        res.json({authtoken});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
});

module.exports = router;
