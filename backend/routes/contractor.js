const router = require('express').Router();
let Central = require('../models/central.model');
let Contractor =require('../models/contractor.model');
let Project =require('../models/project.model')
const mongoose = require('mongoose');
let Transaction=require('../models/alltransaction.model');
// router.route('/').get((req, res) => {
//   Contractor.find()
//     .then(centralusers => res.json(centralusers))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/transaction/:contractor_id').get((req, res) => {

  let contractor_id=req.params.contractor_id
  console.log(contractor_id)
  // let statename=req.query.statename
  Contractor.findOne({"user_id":contractor_id}).
  then(c=>{
    Transaction.find({ $or: [{"from.from_id":c._id},{"to.to_id":c._id}]})
    .then(transactions => {
      console.log(transactions)
      res.json(transactions)})
    .catch(err => res.status(400).json('Error: ' + err));
  })
  
});

router.route('/projecttransactions').get((req, res) => {
  let proj_id=req.query.proj_id
  let projname=req.query.projname
  let contractor_id=req.query.contractor_id
  console.log(proj_id)
  let statename=req.query.statename
  Transaction.find({"project_details.project_id":proj_id, $or: [{"from.from_id":contractor_id},{"to.to_id":contractor_id}]})
    .then(transactions => {
      console.log(transactions)
      res.json(transactions)})
    .catch(err => res.status(400).json('Error: ' + err));
});

















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
      // console.log('pagal hao kya be');
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
  console.log(req.body)
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
    res.contractor_Authorized.contractor_total_amount_requested_state+=request_amount
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


 router.route('/settlepayment').post((req,res)=>{
  let vendor_id=req.body.vendor_id
  let details=req.body.details



 
   Project.findById(details._id)
   .then(res=>{
    console.log("******************************************")
    console.log(res.contractor_Authorized.contractor_details.vendor_requests)
    console.log(vendor_id)
   var v= res.contractor_Authorized.contractor_details.vendor_requests.find(x=>x._id==vendor_id)
  
      v.payment_status='Settled'
      let amountpaid=v.amount
      let reason=v.reason
      let date=new Date()
      let jobtitle=v.jobtitle
      res.contractor_Authorized.contractor_amountused+=amountpaid
      res.contractor_Authorized.contractor_project_account=res.contractor_Authorized.contractor_project_account-amountpaid
      const newTransaction= new Transaction({

        category:res.req_category,
          project_details:{project_name:res.req_Projname,project_id:res._id, project_state:res.req_state},
         
          from:{
            from_id:res.contractor_Authorized.contractor_details.contractor_id,
            from_name:res.contractor_Authorized.contractor_details.contractor_name,
            from_posit:'Contractor',
            from_state:res.contractor_Authorized.contractor_details.contractor_state},
         
          to:{
            to_id:v._id,
            to_name:v.name,
            to_posit:'Vendors',
            to_state:res.req_state},


          amount:amountpaid,
          desc:reason,
          date:date
        
          })
          res.save()
          newTransaction.save()
          .then(r=>console.log('yess')).catch(r=>console.log('transaction failed'))
    
   })

 
 });


router.route('/filetender').post((req,res)=>{ //to post: to file tender
  // console.log('rajat filetender me aya hai ')
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