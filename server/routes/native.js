const express = require('express');
const router = express.Router();

const Run = require('../models/Run')
const User = require('../models/User')


router.post('/saveSteps', (req, res, next) => { 
  console.log(req.user)
  User.findByIdAndUpdate(req.user._id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

module.exports = router;