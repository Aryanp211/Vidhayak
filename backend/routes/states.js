const router = require('express').Router();
let State = require('../models/states.model');
let Requests = require('../models/requests.model');
let Project = require('../models/project.model');
let Transaction = require('../models/alltransaction.model');




router.route('/transaction/:statename').get((req, res) => {
  var statename=req.params.statename
  
  console.log(statename)
  
  Transaction.find({ $or: [{"from.from_state":statename},{"to.to_state":statename}]})
    .then(transactions => {
      console.log(transactions)
      res.json(transactions)})
    .catch(err => res.status(400).json('Error: ' + err));
});

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
  console.log("pending data idhar aaega")
  Project.find({req_status:'Pending', req_category:cat, req_state:statename, project_init:false, project_status:'Tender Not Initialised' })
.then((requestss) =>{
  console.log(requestss)
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
    
router.route('/ApproveContractorRequest').post((req,res)=>{
  console.log('inside route')
  let proj_id=req.body.proj_id
  let request_id=req.body.request_id;
  
  Project.findById(proj_id)
  .then(resp=>{
    let rre= resp.contractor_Authorized.contractor_details.contractor_requests.find(x=>x._id==request_id)
    
      console.log(rre)
      rre.requests_status='Authorized'
      resp.contractor_Authorized.contractor_project_account=resp.contractor_Authorized.contractor_project_account+rre.requests_amount
      resp.state_projectaccount=resp.state_projectaccount-rre.requests_amount
      const newTransaction= new Transaction({

        category:resp.req_category,
          project_details:{project_name:resp.req_Projname,project_id:resp._id, project_state:resp.req_state},
         
          from:{
            from_id:resp.state_gov.id,
            from_name:resp.state_gov.username,
            from_posit:'State',
            from_state:resp.req_state},
         
          to:{
            to_id:resp.contractor_Authorized.contractor_details.contractor_id,
            to_name:resp.contractor_Authorized.contractor_details.contractor_name,
            to_posit:'Contractor',
            to_state:resp.contractor_Authorized.contractor_details.contractor_state},


          amount:rre.requests_amount,
          desc:rre.requests_description,
          date:new Date(),
        
          })
      
          resp.save()
          newTransaction.save()
          .then(r=>console.log('yess')).catch(r=>console.log('transaction failed'))
    
  })
  
  })


module.exports = router;