const express = require('express');
const router = express.Router();

const Run = require('../models/Run')

router.get('/getAllRuns', (req, res, next) => {
  Run.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get('/getMyRuns', (req, res, next) => {
  Run.find({"users": req.user.id})
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/createRun", (req, res) => {
  // console.log(req.body)
  Run.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err)) 
})


router.post("/getUsersRanked", (req, res) => {
  Run.findById(req.body.id)
  .populate(`users`)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

// router.get("/getOneRun/:id", (req, res) => {
//   Run.findById(req.params.id)
//     .then(data => res.json(data))
//     .catch(err => console.log(err))
// })

router.post("/addMeRun", (req, res) => {
  // console.log(req.user.id)
  // console.log(req.body.itemid)
  Run.findByIdAndUpdate(req.body.itemid, {
    $push: { users: req.user.id }})
      .then(data => res.json(data))
      .catch(err => console.log(err))
})


module.exports = router;




// router.post('/', (req, res, next) => {
  
//   Run.find({"users": req.user.id})
//   .populate(`users`)
//   .populate({path : 'comments', populate : {path : 'author'}}) 
//     .then(response => response)

//     })