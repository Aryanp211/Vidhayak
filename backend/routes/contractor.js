const router = require('express').Router();
let Central = require('../models/central.model');
let Contractor =require('../models/contractor.model');
let Project =require('../models/project.model')


router.route('/').get((req, res) => {
  Contractor.find()
    .then(centralusers => res.json(centralusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/filetender').post((req,res)=>{
  console.log('rajat filetender me aya hai ')
    let user_id1=req.body.user_id;
    let bidamount=req.body.bidamount;
    let date=req.body.date;
    let proj_id=req.body.proj_id;
    let proposal=req.body.proposal;
    let plan=req.body.plan;

    // console.log(req.body)
    // let date=Date(req.body);
    // let date=req.body.date;
    // console.log('-------')
    // console.log(id,bid)

  (Contractor.findOne({user_id:user_id1})
  .then(resp=>{
    console.log(resp)
 
console.log(32)
    

    Project.findById(proj_id)
    .then(r=>{
console.log(37)
console.log(r.req_state)
      resp.filed_tenders.push({
        project_proposed_planofwork:plan,
        proposal_description:proposal,
        project_bidamount:bidamount,
        project_estimatedenddate:date,
        project_name:r.req_Projname,
        project_id:proj_id,
        project_state:r.req_state,
        project_category:r.req_category,
        proposal_description:r.req_description,
        project_proposed_planofwork:plan,
        project_duration: r.req_duration,
        project_estimatedenddate:date,


      }
        )


        r.total_bids.push({
          contractor_details: resp._id,
          bid_amount:bidamount
        })
        r.save()
        console.log(47)
        resp.save()
      console.log(resp)
      }
        
      )

  console.log(50)
      console.log('ggggggggggggggggggggggggg')
    // console.log(resp.save())
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
   
   
    
  }))




  
  });


module.exports = router;