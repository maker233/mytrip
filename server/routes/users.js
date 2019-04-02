require('dotenv').config();
const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
// const axios = require("axios");
 
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


// CRUD Usuarios ---------------------------------



router.get("/delete/:id", (req, res, next) => {

    User.findByIdAndRemove(req.params.id)
        .then(user => {
            console.log("He borrado el usuario " + user);
            req.session.destroy();
            // res.redirect("/not-found");
        })
        .catch(err => {
            console.log('Error deleting an user', err);
            next();
        });
});


router.post("/updateUser", (req, res, next) => {
    const { name, username, password, bio, photo } = req.body;
    console.log(req.user._id);
    User.update({ _id: req.user._id }, { $set: { name, username, password, bio, photo } })
        .then(user => res.status(200).json(theUser))
        .catch(err => {
            console.log('Error while updating an user', err);
            next();
        });
});



module.exports = router;