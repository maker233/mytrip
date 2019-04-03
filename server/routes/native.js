const express = require('express');
const router = express.Router();

const Run = require('../models/Run')
const User = require('../models/User')


router.post('/saveSteps', (req, res, next) => { 
  // console.log("Voy a guardar los pasos de: ", req.body.steps)
  
  User.findByIdAndUpdate(req.user._id, {
    $set: { stepstoday: req.body.steps }})
      .then(data => res.json(data))
      .catch(err => console.log(err))
})


module.exports = router;