const { TrendingUpTwoTone } = require('@material-ui/icons');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const contractorSchema = new Schema({
  user_id:{type:String, required:true},
  user_firstname: {type: String, required: true, trim: true, minlength: 2},
  user_lastname: {type: String, required: true, trim: true, minlength: 2},
  user_gender:{type: String, required: true},
  user_dob:{type: Date, required:true},
  user_address:{type: String, required:true},
  user_email:{type: String, required:true},
  user_mobile:{type :Number , reqired:true},
  user_password:{type: String, required:true},
  user_company:{type: String, required:true},
  user_city:{type: String, required:true},
  user_zipcode:{type: String, required:true},
  user_state:{type: String, required:true},
  user_adharno:{type :Number , reqired:true},
  user_pancard:{type :Number , reqired:true},
  filed_tenders:[{
    project_id:{type:String,default:null},
    project_name:{type: String,default:null},
    project_state:{type: String,default:null},
    project_category:{type: String, default:null},
    proposal_description:{type: String,default:null},
    project_proposed_planofwork:{type: String, default:null},
    project_bidamount:{type :Number , default:null},
    project_duration:{type: String, default:null},
    project_estimatedenddate:{type: Date, default:null},

    bid_status:{type:String,required:true,default:"Ongoing"},

    project_amountused:{type :Number , reqired:true,default:null},
    project_amountallocated:{type :Number , reqired:true,default:null},
    
    project_transactionhistory_contractor:[{
        fromid:{type:String,required:true,default:null},
        fromname:{type:String,required:true,default:null},
        toid:{type:String,required:true,default:null},
        toname:{type:String,required:true,default:null},
        transaction_desc:{type:String,required:true,default:null},
        transaction_amt:{type :Number , reqired:true,default:null},
        transaction_date:{type: Date, required:true,default:null},
        //transaction number 
    }]
  }],

},

 

{
  timestamps: true,
});

const contractor = mongoose.model('contractor', contractorSchema);

module.exports = contractor;