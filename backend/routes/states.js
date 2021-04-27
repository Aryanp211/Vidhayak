const router = require('express').Router();
let State = require('../models/states.model');
let Requests = require('../models/requests.model');
let Project = require('../models/project.model');
let Transaction = require('../models/alltransaction.model');



router.route('/projecttransactions').get((req, res) => {
  let proj_id=req.query.proj_id
  let projname=req.query.projname
  console.log(proj_id)
  let statename=req.query.statename
  Transaction.find({"project_details.project_id":proj_id, $or: [{"from.from_state":statename},{"to.to_state":statename}]})
    .then(transactions => {
      console.log(transactions)
      res.json(transactions)})
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/').get((req, res) => {
  State.find()
    .then(stateusers => res.json(stateusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findAuth').get((req,res)=>{
  // console.log(req.query)
  let cat=req.query.category
  // console.log(cat)
  let statename=req.query.statename
  // var status=req.query.status
  // console.log(statename)
  // console.log(cat)
  console.log("Idhar state")
  Project.find({req_status:'Authorized', req_category:cat, req_state:statename, project_init:false, project_status:'Tender Not Initialised' })
  
.then((requestss) =>{
  
  
  // console.log(requestss);
   res.json(requestss)})
.catch(err => res.status(400).json('Error: ' + err));
});



router.route('/findPending').get((req,res)=>{
  // console.log(req.query)
  // console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB')
  let cat=req.query.category
  // console.log(cat)
  let statename=req.query.statename
  // var status=req.query.status
  // console.log(statename)
  // console.log(cat)
  console.log("Idhar state")
  Project.find({req_status:'Pending', req_category:cat, req_state:statename, project_init:false, project_status:'Tender Not Initialised' })
  
.then((requestss) =>{
  
  
  // console.log(requestss)
   res.json(requestss)})
.catch(err => res.status(400).json('Error: ' + err));
});


// router.route('/update/:id').post((req, res) => {
//   const reqid=req.params.id
//   Requests.findById(req.params.id)
//     .then(requestss  => {
     
//       console.log(requestss.req_category)
//       Project.findOne( {project_details:requestss.reqid})
//       .then(res=>{
//         res.project_init=true
//       console.log('Project Status')
//       console.log(res.category_init)
    // requestss.req_status= "Authorized";

        

    // res.save()
    // requestss.save()
    // .then(r=>{
    //   console.log('saved successfully')
    // })
    //   })
    //   .catch(error=>{
    //     console.log('Errorrrrr hai!!!!')
    //   })


  // console.log(requestss)

      // requestss.save()
        // .then(() => res.json('Requests updated!'))
        // .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });
    

module.exports = router;