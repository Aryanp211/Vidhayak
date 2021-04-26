const router = require('express').Router();
let State = require('../models/states.model');
let Requests = require('../models/requests.model');
let Project = require('../models/project.model');
let Transaction = require('../models/alltransaction.model')

router.route('/').get((req, res) => {
  State.find()
    .then(stateusers => res.json(stateusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getTransaction').post((req,res)=>{
    let proj_id=req.body.proj_id;
    
})
    

module.exports = router;