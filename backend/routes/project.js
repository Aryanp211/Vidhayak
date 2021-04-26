const router = require('express').Router();
let Central = require('../models/central.model');
let contractorSchema =require('../models/contractor.model');
let project =require('../models/project.model');
let Request= require('../models/requests.model')

// router.route('/').get((req, res) => {
//   project.find()
//     .then(centralusers => res.json(centralusers))
//     .catch(err => res.status(400).json('Error: ' + err));
// });


router.route('/').get( (req, res) => {

  let cnt=0;
  var data=[];
  var data2=[]
 project.find({project_init:true}).then((x)=>{res.json(x)
console.log(x)
})

})


router.route('/details/:id').get((req,res)=>{
  let id=req.params.id
  project.findById(id)
  .then(re=>res.json(re))
})
    // x.map(z=>{
    //   cnt=cnt+1
    //   console.log(2,data)

    //   let ele= JSON.parse(JSON.stringify(z));
    //   console.log(3,data)

    //   console.log(4,data)
    //   console.log("=============")
    //   Request.findById(z.project_details).
    //   then(y=>{
    //     // console.log(data)
    //     console.log("req ke andae aya")
    //     // console.log(y)
    //     ele.projectname=y.req_Projname;
    //     ele.projectdesc=y.req_description;
    //     ele.projectduration=y.req_duration;
    //     ele.projectstate=y.req_state;



    //     console.log("--------------------")
    //     data.push(ele);
    //     console.log("--------------------")
    //     // console.log(data)
    //     res.json(data)
    //     // data.save();

    //      })






router.route('/tenders/:statename').get((req, res) => {
  let statename=req.params.statename
  console.log("tenders in state",statename)
  let cnt=0;
  var data=[];
  var data2=[]
 project.find({project_init:true,project_status:"Tender Initialised",req_state:statename})
 .then((x)=>{res.json(x)
    // console.log(x)
})
})

router.route('/Ongoing').post((req, res) => {
  let statename=req.body.statename

  console.log("------------------------------------------------------------------------------------------------------------------")
  console.log(statename)
  console.log(" Ongoing tenders in state",statename)
  let cnt=0;
  
 project.find({project_init:false,project_status:"Project Started",req_state:statename})
  .then((x)=>{
    res.json(x)
    // x.save()
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(x)
    
    
  }
)

 
})



router.route('/terminatetender').post((req, res) => {
 let id=req.body.e
 console.log(id)
 project.findById(id).
 populate(
 {
   path:'contractor_Authorized',
   populate:{path:'contractor_details'}
 }
 )
 .then((x)=>{
    
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(x)
    x.project_status="Project Started"
    x.project_init=false
    x.save()
    // console.log(x)
    console.log("Total bids contractor details")
    // console.log(x.total_bids)

  console.log("=4=4=4=4==4=4=4=4=4=4=4==4=4=4=4==4=4=4==4=4=4=4=4==4=4=4==4=4=4=4==4=4=4=4==4=4=4==4=4")
    console.log(x.contractor_Authorized)
    console.log(x.contractor_Authorized.contractor_details.user_firstname)
    // let doc =  x.total_bids.aggregate([
    //  { $group:
    //   {
    //     _id:'$_id',
    //     minbid:{$min:'$bid_amount'}
    //   },
    // },

    //   {
    //     $project:{id:'$_id',minbid:1}
    //   }

    // ]);
    // console.log(doc)
    
    // console.log(cont,minbid)
   
})
})


router.route('/initialise').post((req,res)=>{
console.log('rajat initialise me aya hai ')
  let id=req.body.id;
  let bid=req.body.bid;
  let date=req.body.date;
  // console.log(req.body)
  // let date=Date(req.body);
  // let date=req.body.date;
  console.log('-------')
  // console.log(id,bid)
  project.findOne({_id:id})
.then((ress) =>{
  // console.log('andar')
  ress.tender_amount=bid;
  ress.tender_date=date;
  ress.project_init=true;
  ress.project_status='Tender Initialised'
  ress.save()
  .then((e)=>{
  //  console.log('init hogya');
  res.json(ress)})
  .catch(e=>console.log('Rajat _ hai'))
} )
.catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;