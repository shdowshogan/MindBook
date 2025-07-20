const express = require("express");
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/",[
    body('name','Enter a valid name').isLength({min:3}), 
    body('email','enter a valid email').isEmail(), 
    body('password','Paddword must atleast 8 characters').isLength({min:8}), 
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
  res.send(req.body)
});

module.exports = router;
