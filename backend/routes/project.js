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


router.route('/').get(async (req, res) => {

  let cnt=0;
  var data=[];
  var data2=[]
 project.find({project_init:true}).then((x)=>{res.json(x)
console.log(x)
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

})



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
  project.findOne({_id:id})
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