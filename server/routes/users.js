require('dotenv').config();
const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const axios = require("axios");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


// RENDER Vistas --------------------------------


//Router.get("/profile", (req, res, next) => res.render("user/profile", { errorMessage: `` }));
router.get("/places/:id", (req, res, next) => {
    console.log(typeof req.params.id)
    let myId = req.params.id;
    axios.get(`https://api.foursquare.com/v2/venues/${myId}?client_id=${process.env.CLIENTID}&client_secret=${process.env.SECRET}&v=20120609`) //&v=20120609
        .then(response => {
            //console.log(`Response from the API is: `, response.data);
            res.render("user/places", { venue: response.data.response.venue, JSONvenue: JSON.stringify(response.data.response.venue.location) });
        })
        .catch(err => {
            console.log(err)
            next(err)
        });
   
});


router.post("/dashboard", (req, res, next) => {
    axios.get(`https://api.foursquare.com/v2/venues/search?client_id=${process.env.CLIENTID}&client_secret=${process.env.SECRET}&v=20190202&limit=50&near=${req.body.place}&radius=${req.body.RADIUS}&categoryId=${req.body.filter}`) //&v=20120609
        .then(response => {
            // console.log(`Response from the API is: `, response.data.response.venues);
            res.json(response.data.response.venues);
        })
        .catch(err => next(err));
});


router.get("/profile/:id", (req, res, next) => {
    console.log(req.params.id);
    User.findById(req.params.id)
        .then(user => {

            res.render("user/profile", { user });
        })
        .catch(err => {
            console.log('Error while finding a celebrity to edit', err);
            next();
        });
});

// CRUD Usuarios ---------------------------------

router.get("/delete/:id", (req, res, next) => {

    User.findByIdAndRemove(req.params.id)
        .then(user => {
            console.log("He borrado el usuario " + user);
            req.session.destroy();
            res.redirect("/not-found");
        })
        .catch(err => {
            console.log('Error deleting an user', err);
            next();
        });
});


router.post("/profile/:id", (req, res, next) => {
    const { name, username, password } = req.body;
    console.log(req.body);
    User.update({ _id: req.params.id }, { $set: { name, username, password } })
        .then(user => res.redirect(`${req.params.id}`))
        .catch(err => {
            console.log('Error while updating an user', err);
            next();
        });
});

router.post("/profile/bio/:id", (req, res, next) => {
    const { bio } = req.body;
    console.log(req.body);
    User.update({ _id: req.params.id }, { $set: { bio } })
        .then(user => res.redirect(`../${req.params.id}`))
        .catch(err => {
            console.log('Error while updating an user', err);
            next();
        });
});

module.exports = Router;