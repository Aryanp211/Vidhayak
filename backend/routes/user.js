const router = require('express').Router();
let State = require('../models/states.model');
let User= require('../models/user.model')

router.route('/').get((req, res) => {
  State.find()
    .then(stateusers => res.json(stateusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const user_email=req.body.user_email;
    const user_password=req.body.user_password;
    const user_firstname=req.body.user_firstname;
    const user_lastname=req.body.user_lastname;
    const user_dob=req.body.user_dob;
    const user_mobile=req.body.user_mobilenumber;
    const user_gender=req.body.user_gender;
    const user_address=req.body.user_address;
    const user_city=req.body.user_city;
    const user_company=req.body.user_company;
    const user_zipcode=req.body.user_zipcode;
    const user_state=req.body.user_state;
    const user_adhaar=req.body.user_adhaar;
    const user_pan=req.body.user_pan;
    const newRequests = new User({ user_email,user_password, user_firstname,user_lastname,user_dob,user_mobile,user_gender,user_address,user_city,user_company,user_zipcode,user_state,user_adhaar,user_pan});
  
    newRequests.save()
      .then(() =>{ res.json('Requests added!')
      })
  
    
      .catch(err => res.status(400).json('Error: ' + err));
  });



    

module.exports = router;