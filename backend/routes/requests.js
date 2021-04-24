const router = require('express').Router();
const { Category } = require('@material-ui/icons');
// let Requests = require('../models/requests.model');
let CategorySchema =require('../models/category.model');
let Project = require('../models/project.model');

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
  const req_Projname=req.body.req_Projname;
  const req_category = req.body.req_category;
  const req_amount= Number(req.body.req_amount);
  const req_state= req.body.req_state;
  const req_description= req.body.req_description;
  const req_date = Date(req.body.req_date);
  const req_duration = req.body.req_duration;
  const req_status= req.body.req_status;
  const req_authoby = req.body.req_authoby;
  const newRequests = new Project({username:username,req_Projname:req_Projname, req_category:req_category, req_state:req_state,req_description:req_description, req_duration:req_duration,req_amount:req_amount, req_date:req_date,req_status:req_status,req_authoby:req_authoby});

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


router.route('/update/:id').post((req, res) => {
  const reqid=req.params.id
  Project.findById(req.params.id)
    .then(requestss  => {
     
      console.log(requestss.req_category)
      CategorySchema.findOne( {category_name:requestss.req_category})
      .then(res=>{
        res.category_amount= res.category_amountAlloc-requestss.req_amount
        res.category_pending-=1
        res.category_authorized+=1
      console.log('Amount kata')
      console.log(res.category_amount)
    requestss.req_status= "Authorized";
    

        

    res.save()
    requestss.save()
   
      })
      .catch(error=>{
        console.log('Errorrrrr!!!!')
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