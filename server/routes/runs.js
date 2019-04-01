const express = require('express');
const router = express.Router();

const Run = require('../models/Run')

router.get("/", (req, res) => {
  res.json({msg:"Pepe"});
})


router.get('/getAllRuns', (req, res, next) => {
  Run.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/createRun", (req, res) => {
  console.log(req.body)
  Run.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})



router.get("/getOneRun/:id", (req, res) => {
  Run.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})



module.exports = router;