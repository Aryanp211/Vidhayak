const router = require('express').Router();
let State = require('../models/states.model');
let User= require('../models/user.model');
let Contractor = require('../models/contractor.model');

router.route('/').post((req, res) => {
// console.log(req)
const user_email=req.body.user_email;
const user_password=req.body.user_password;
const user_posit=req.body.user_posit;
const user_state=req.body.user_state;

if (user_state===null){

    User.findOne({user_email:user_email,user_password:user_password,user_posit:user_posit})
    .then(r=>{
        console.log(r)
    
        res.json(r)
    }
    ).catch(()=>res.json('not logged in'))

}
else{
User.findOne({user_email:user_email,user_password:user_password,user_posit:user_posit,user_state:user_state})
.then(r=>{
    console.log(r)

    res.json(r)
}
).catch(()=>res.json('not logged in'))}
//   State.find()
    // .then(stateusers => res.json(stateusers))
    // .catch(err => res.status(400).json('Error: ' + err));
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
    const user_posit='Contractor'
    const newRequests = new User({ user_email,user_password, user_firstname,user_lastname,user_dob,user_mobile,user_gender,user_address,user_city,user_company,user_zipcode,user_state,user_adhaar,user_pan,user_posit});
  
    newRequests.save()
      .then((r) =>{ res.json('Requests added!')

      const newContractor= new Contractor({user_id:r._id,user_email: user_email,user_password:user_password, user_firstname:user_firstname, user_lastname:user_lastname,  user_dob:user_dob, user_mobile:user_mobile, user_gender:user_gender,user_address:user_address,user_city:user_city,user_company:user_company, user_zipcode: user_zipcode, user_state:user_state,user_adhaar:user_adhaar,user_pan:user_pan});
        newContractor.save()

      }) .catch(err => res.status(400).json('Error: ' + err));



  
    // newContractor.save()
     
  });



    

module.exports = router;