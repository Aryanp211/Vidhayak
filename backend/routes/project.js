const router = require('express').Router();
let Central = require('../models/central.model');
let contractorSchema =require('../models/contractor.model');
let project =require('../models/project.model');

router.route('/').get((req, res) => {
  project.find()
    .then(centralusers => res.json(centralusers))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/initialise').post((req,res)=>{
console.log('rajat initialise me aya hai ')
  let id=req.body.id;
  let bid=req.body.bid;
  let date=req.body.date;
  console.log(req.body)
  // let date=Date(req.body);
  // let date=req.body.date;
  console.log('-------')
  console.log(id,bid)
  project.findOne({project_details:id})
.then((res) =>{
  console.log('andar')
  res.tender_amount=bid;
  res.tender_date=date;
  res.project_init=true;
  res.save()
  .then(e=>console.log('Proj Init hogya'))
  .catch(e=>console.log('Rajat _ hai'))
} )
.catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;