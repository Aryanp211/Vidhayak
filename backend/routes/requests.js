const router = require('express').Router();
const { Category } = require('@material-ui/icons');
// let Requests = require('../models/requests.model');
let CategorySchema =require('../models/category.model');
let Project = require('../models/project.model');
let Transaction = require('../models/alltransaction.model')

router.route('/').get((req, res) => {
  Project.find()
    .then(requestss => res.json(requestss))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/categories').get((req, res) => {
  console.log('aaaa')
  CategorySchema.find()
    .then(requestss => res.json(requestss))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const state_id=req.body.state_id;
  const req_Projname=req.body.req_Projname;
  const req_category = req.body.req_category;
  const req_amount= Number(req.body.req_amount);
  const req_state= req.body.req_state;
  const req_description= req.body.req_description;
  const req_date = Date(req.body.req_date);
  const req_duration = req.body.req_duration;
  const req_status= req.body.req_status;
  // const req_reqby = req.body.req_authoby;
  const newRequests = new Project({
    state_gov:{username:username,id:state_id,req_date:req_date},
    req_Projname:req_Projname, 
    req_category:req_category, 
    req_state:req_state,
    req_description:req_description, 
    req_duration:req_duration,
    req_amount:req_amount, 
    
    req_status:req_status,
    
  });

  newRequests.save()
    .then(() =>{ res.json('Requests added!')

    CategorySchema.findOne( {category_name:req_category})
    .then(res=>{
      res.category_pending+=1
      console.log('Parashar Beoda')
  res.save()
    })

  })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(requestss => res.json(requestss))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Requests deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/finder/:status').get((req,res)=>{
  var status=req.params.status
  console.log(status)
  Project.find({req_status:status})
  
.then((requestss) => res.json(requestss))
.catch(err => res.status(400).json('Error: ' + err));
});



router.route('/finderState/:q').get((req,res)=>{
  var name=req.params.q
  // var status=req.query.status
  console.log(name)
  // console.log(status)
  console.log("Idhar")
  Project.find({req_status:'Pending', req_category:name})
  
.then((requestss) => res.json(requestss))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/finderAuth/:q').get((req,res)=>{
  console.log('ffffffffffffffff')
  var name=req.params.q
  // var status=req.query.status
  console.log(name)
  // console.log(status)
  console.log("Idhar")
  Project.find({req_status:'Authorized', req_category:name})
  
.then((requestss) => res.json(requestss))
.catch(err => res.status(400).json('Error: ' + err));
});



router.route('/findAuthorized').post((req,res)=>{
    Project.find({req_status:'Authorized'})
  .then((requestss) => res.json(requestss))
  .catch(err => res.status(400).json('Error: ' + err));
  });

  
router.route('/search').post((req,res)=>{
  //const bd = req.body.bd;
  //const ed = req.body.ed;
  Project.find({req_date:{"$gte": new Date("1999")}})
.then((requestss) => res.json(requestss))
});


router.route('/update').post((req, res) => {
  const proj_id=req.body.id
  const name=req.body.data.user_firstname+' '+req.body.data.user_lastname
  console.log('name',name)
  const date=req.body.date
  const from=req.body.data
  console.log('--------------------')
  console.log(req.body)
  Project.findById(proj_id)
    .then(requestss  => {
     console.log('XXXXXXXXXXXXXXXXX')
      console.log(requestss.req_category)
      console.log('XXXXXXXXXXXXXXXXX')
      CategorySchema.findOne( {category_name:requestss.req_category})
      .then(res=>{
        res.category_amount= res.category_amountAlloc-requestss.req_amount
        res.category_pending-=1
        res.category_authorized+=1
        console.log('Amount kata')
        console.log(res.category_amount)
        requestss.req_status= "Authorized";
        requestss.central_gov.username=name;
        requestss.central_gov.id=from._id;
        
const newTransaction= new Transaction({

      category:requestss.req_category,
        project_details:{project_name:requestss.req_Projname,project_id:proj_id, project_state:requestss.req_state},
        from:{from_id:from._id,from_name:name,from_posit:'Central',from_state:requestss.req_state},
        to:{to_id:requestss.state_gov.id,to_name:requestss.state_gov.username,to_posit:'State',to_state:requestss.req_state},
        amount:requestss.req_amount,
        desc:'Central Approved Project Request',
        date:new Date()
      
        })

        newTransaction.save()
        .then(r=>console.log('yess')).catch(r=>console.log('transaction failed'))
        

    res.save().then(r=>console.log('res saved')).catch(e=>console.log('res failed'))
    requestss.save().then(r=>console.log('requestss saved')).catch(e=>console.log('requestss failed'))
   
      })
      .catch(error=>{
        console.log(error)
      })


  console.log(requestss)

      // requestss.save()
        // .then(() => res.json('Requests updated!'))
        // .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/request/:statename').post((req,res)=>{
    Project.find({req_state:{statename}})
  .then((requestss) => res.json(requestss))
  .catch(err => res.status(400).json('Error: ' + err));
  });
  


module.exports = router;