const router = require('express').Router();
let State = require('../models/states.model');

router.route('/').get((req, res) => {
  State.find()
    .then(stateusers => res.json(stateusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const stateuser_name = req.body.stateuser_name;
  const stateuser_email = req.body.stateuser_email;
  const stateuser_mobile= Number(req.body.stateuser_mobile);
  const stateuser_password= req.body.stateuser_password;
  //const stateuser_Gender= req.body.stateuser_Gender;
  //const stateuser_DoB = req.body.stateuser_DoB;
  const stateuser_State=req.body.stateuser_State;
  const stateuser_Post=req.body.stateuser_Post;
  const newState = new State({stateuser_name, stateuser_email, stateuser_mobile, stateuser_password, stateuser_State, stateuser_Post});

  newState.save()
    .then(() => res.json('State user added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  State.findById(req.params.id)
    .then(stateusers => res.json(stateusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  State.findByIdAndDelete(req.params.id)
    .then(() => res.json('State deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req,res)=>{
  const name = req.body.stateuser_name;
  State.find({stateuser_name:name})
.then((stateusers) => res.json(stateusers))
});
// router.route('/search').post((req,res)=>{
//   //const bd = req.body.bd;
//   //const ed = req.body.ed;
//   State.find({stateuser_DoB:{"$gte": new Date("1999")}})
// .then((stateusers) => res.json(stateusers))
// });
router.route('/update/:id').post((req, res) => {
  State.findById(req.params.id)
    .then(stateusers  => {
  stateusers.stateuser_name = req.body.stateusername;
  stateusers.stateuser_email = req.body.stateuser_email;
  stateusers.stateuser_mobile= Number(req.body.stateuser_mobile);
  stateusers.stateuser_password= req.body.stateuser_password;
  stateusers.stateuser_State=req.body.stateuser_State;
  stateusers.stateuser_Post=req.body.stateuser_Post;
  
      stateusers.save()
        .then(() => res.json('State updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;