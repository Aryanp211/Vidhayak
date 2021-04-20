const router = require('express').Router();
let State = require('../models/states.model');
let Requests = require('../models/requests.model');

router.route('/').get((req, res) => {
  State.find()
    .then(stateusers => res.json(stateusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findAuth').get((req,res)=>{
  console.log(req.params)
  var cat=req.params.category
  console.log(cat)
  var statename=req.params.statename
  // var status=req.query.status
  console.log(statename)
  console.log(cat)
  console.log("Idhar state")
  Requests.find({req_status:'Authorized', req_category:cat, req_state:statename})
  
.then((requestss) => res.json(requestss))
.catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;