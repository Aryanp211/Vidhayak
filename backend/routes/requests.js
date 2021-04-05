const router = require('express').Router();
let Requests = require('../models/requests.model');

router.route('/').get((req, res) => {
  Requests.find()
    .then(requestss => res.json(requestss))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const req_Projname=req.body.req_Projname;
  const req_category = req.body.req_category;
  const req_amount= Number(req.body.req_amount);
  const req_state= req.body.req_state;
  const req_description= req.body.req_description;
  const req_date = Date(req.body.req_date);
  const req_duration = req.body.req_duration;
  const req_status= req.body.req_status;
  const req_authoby = req.body.req_authoby;
  const newRequests = new Requests({username,req_Projname, req_category, req_state,req_description, req_duration,req_amount, req_date,req_status,req_authoby});

  newRequests.save()
    .then(() => res.json('Requests added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Requests.findById(req.params.id)
    .then(requestss => res.json(requestss))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Requests.findByIdAndDelete(req.params.id)
    .then(() => res.json('Requests deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/finder/:status').get((req,res)=>{
  var status=req.params.status
  console.log(status)
  Requests.find({req_status:status})
  
.then((requestss) => res.json(requestss))
.catch(err => res.status(400).json('Error: ' + err));
});



router.route('/finderState/:q').get((req,res)=>{
  var name=req.params.q
  // var status=req.query.status
  console.log(name)
  // console.log(status)
  console.log("Idhar")
  Requests.find({req_status:'Pending', req_category:name})
  
.then((requestss) => res.json(requestss))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/finderAuth/:q').get((req,res)=>{
  var name=req.params.q
  // var status=req.query.status
  console.log(name)
  // console.log(status)
  console.log("Idhar")
  Requests.find({req_status:'Authorized', req_category:name})
  
.then((requestss) => res.json(requestss))
.catch(err => res.status(400).json('Error: ' + err));
});



router.route('/findAuthorized').post((req,res)=>{
    Requests.find({req_status:'Authorized'})
  .then((requestss) => res.json(requestss))
  .catch(err => res.status(400).json('Error: ' + err));
  });

  
router.route('/search').post((req,res)=>{
  //const bd = req.body.bd;
  //const ed = req.body.ed;
  Requests.find({req_date:{"$gte": new Date("1999")}})
.then((requestss) => res.json(requestss))
});


router.route('/update/:id').post((req, res) => {
  Requests.findById(req.params.id)
    .then(requestss  => {

  requestss.req_status= "Authorized";

  
      requestss.save()
        .then(() => res.json('Requests updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/find').post((req,res)=>{
    const name = req.body.requests_crime_type;
    
    Crimetype.find({Crime_name:name})
  .then((crime) => {
    crime.Crime_count=crime.Crime_count+1;
    crime.save()
    .then(() => res.json('Crimecount updated!'))
    .catch(err => res.status(400).json('cant update count: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/request/:statename').post((req,res)=>{
    Requests.find({req_state:{statename}})
  .then((requestss) => res.json(requestss))
  .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;