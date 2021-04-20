const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const contractorSchema = new Schema({
    // contractor_id: 
    // {type:mongoose., 
    // required: true,  
    // unique: true,
    // trim: true, 
    // minlength: 3}, 
  
    contractor_name: 
    {type: String, 
    required: true,  
    trim: true, 
    minlength: 3, sparse:true}, 

  contractor_password:
    {type :String, 
    reqired:true, sparse:true},
},

 

{
  timestamps: true,
});

const contractor = mongoose.model('contractor', contractorSchema);

module.exports = contractor;