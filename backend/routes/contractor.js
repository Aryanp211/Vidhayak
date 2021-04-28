const router = require('express').Router();
let Central = require('../models/central.model');
let Contractor =require('../models/contractor.model');
let Project =require('../models/project.model')
const mongoose = require('mongoose');
// router.route('/').get((req, res) => {
//   Contractor.find()
//     .then(centralusers => res.json(centralusers))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/filedtenders/:id').get(async(req, res) => {
  console.log("-----------------=----------------=---------------=--------=")
  console.log(1)
  let x= await Contractor.findOne({user_id:req.params.id})
    console.log(2)

     for( zz of x.filed_tenders){
       console.log(3)
       console.log(zz.project_id)
      const projectdetails= await Project.findById(zz.project_id);
    console.log(4)
   // console.log(projectdetails)

    if(projectdetails===null){
        zz.bid_status='Ongoing'
    }

    else 
    {
      console.log(typeof(x._id))
      console.log(typeof(projectdetails.contractor_Authorized.contractor_details.contractor_id) ) 
      if(projectdetails.project_status=='Project Started' && JSON.stringify(projectdetails.contractor_Authorized.contractor_details.contractor_id)==JSON.stringify(x._id))
      { 
        console.log('helo ,');
        zz.bid_status='Tender Won';
    }
    else if(projectdetails.project_status=='Project Started' && projectdetails.contractor_Authorized.contractor_details.contractor_id!=x._id){
      console.log('pagal hao kya be');
      zz.bid_status='Tender Lost';
    }
    else{
      zz.bid_status='Ongoing';
    }
  }
  //  console.log(zz)
    }



  res.json(x)
 })



 router.route('/ContractorRequest').post((req,res)=>{
 let project_id=req.body.project_id
  let date=req.body.date
  console.log('##############')
  
  let project_name=req.body.project_name
  let request_amount=req.body.request_amount
  let contractor_id=req.body.contractor_id
  let contractor_firstname=req.body.user_firstname
  let contractor_lastname=req.body.user_lastname
  let description=req.body.description

  Project.findById(project_id)
  .then(res=>{
    let details={requests_status:'Pending',requests_amount:request_amount,requests_date:date, requests_description:description}
    res.contractor_Authorized.contractor_details.contractor_requests.push(details)
    res.save()

  })

});


router.route('/vendorrequest').post((req,res)=>{
  let projectid=req.body.projectid;
  let name=req.body.firstname+" "+req.body.lastname
  let mobile=req.body.mobile
  let jobtitle=req.body.jobtitle
  let reason=req.body.reason
  let amount=req.body.amount
  let adhaar=req.body.adhaar
  let pan=req.body.pan
  let date=req.body.date



 
   Project.findById(mongoose.Types.ObjectId(req.body.projectid))
   .then(res=>{
     console.log(res)
     let details={
      projectid:projectid,
      name:name,
      mobile:mobile,
      jobtitle:jobtitle,
      reason:reason,
      amount:amount,
      adhaar:adhaar,
      pan:pan,
      date:date
     }
     res.contractor_Authorized.contractor_details.vendor_requests.push(details)
     res.save()
   })
 
 });





router.route('/filetender').post((req,res)=>{ //to post: to file tender
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
    // console.log(resp)
 
// console.log(32)
    
    let name=resp.user_firstname+' '+resp.user_lastname
    Project.findById(proj_id)
    .then(r=>{
// console.log(37)
// console.log(r.req_state)
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
        project_proposed_planofwork:proposal,
        project_duration: r.req_duration,
        project_estimatedenddate:date,



      }
        )
        if(r.contractor_Authorized.bid_amount===0){
          r.contractor_Authorized.bid_amount=bidamount,
          r.contractor_Authorized.contractor_details.contractor_id=resp._id
          r.contractor_Authorized.contractor_details.contractor_name=name,
          r.contractor_Authorized.contractor_details.contractor_email=resp.user_email,
          r.contractor_Authorized.contractor_details.contractor_mobile=resp.user_mobile,
          r.contractor_Authorized.contractor_details.contractor_city=resp.user_city,
          r.contractor_Authorized.contractor_details.contractor_state=resp.user_state,
          r.contractor_Authorized.contractor_details.contractor_adharno=resp.user_adharno,
          r.contractor_Authorized.contractor_details.contractor_pancard=resp.user_pancard,
          r.contractor_Authorized.contractor_details.proposal_description=proposal,
          r.contractor_Authorized.contractor_details.project_proposed_planofwork=plan,
          r.contractor_Authorized.contractor_details.project_bidamount=bidamount,
          r.contractor_Authorized.contractor_details.project_duration=r.req_duration,
          r.contractor_Authorized.contractor_details.project_estimatedenddate=date
          // project_id=proj_id
        }
        else{
          if(r.contractor_Authorized.bid_amount>bidamount){
            r.contractor_Authorized.bid_amount=bidamount,
            r.contractor_Authorized.contractor_details.contractor_id=resp._id
            r.contractor_Authorized.contractor_details.contractor_name=name,
            r.contractor_Authorized.contractor_details.contractor_email=resp.user_email,
            r.contractor_Authorized.contractor_details.contractor_mobile=resp.user_mobile,
            r.contractor_Authorized.contractor_details.contractor_city=resp.user_city,
            r.contractor_Authorized.contractor_details.contractor_state=resp.user_state,
            r.contractor_Authorized.contractor_details.contractor_adharno=resp.user_adharno,
            r.contractor_Authorized.contractor_details.contractor_pancard=resp.user_pancard,
            r.contractor_Authorized.contractor_details.proposal_description=proposal,
            r.contractor_Authorized.contractor_details.project_proposed_planofwork=plan,
            r.contractor_Authorized.contractor_details.project_bidamount=bidamount,
            r.contractor_Authorized.contractor_details.project_duration=r.req_duration,
            r.contractor_Authorized.contractor_details.project_estimatedenddate=date
            // project_id=proj_id
          }

        }

        r.total_bids.push({
          contractor_details: resp._id,
          bid_amount:bidamount
        })
        r.save()
        // console.log(47)
        resp.save()
      // console.log(resp)
      }
        
      )

  // console.log(50)
  //     console.log('ggggggggggggggggggggggggg')
  //   // console.log(resp.save())
  //   console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
   
   
    
  }))




  
  });







module.exports = router;