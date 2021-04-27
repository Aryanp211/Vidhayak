const mongoose = require('mongoose');
// import contractor from './contractor.model';
// import Requests from './requests.model';

const Schema = mongoose.Schema;

const Requests = require('./requests.model');
const contractor = require('./contractor.model');
const totalbid = require('./totalbid.model');

// var bid= new Schema({
//     contractor_details: {type:mongoose.Types.ObjectId,ref:'contractor',default:null,sparse: true},

//     bid_amount:{type:Number,default:0,sparse: true}
    

// })

const projectSchema = new Schema({

state_gov: {  
  username:{ type: String, default:null},
  id:{type:mongoose.Types.ObjectId,ref:'user',default:null,sparse: true},
  req_date:{ type: Date, required: true },
},
  //   user_mobile:{type :Number , reqired:true},
    req_Projname:{type: String, required: true},
    req_category:{type: String,required: true},
    req_state:{type: String,required: true}, 
    req_amount:{type:Number,required: true},
    req_description :{type: String, required:true},
    req_duration:{type:String,required: true},
    req_status:{type: String, required: true },//Project Auth or not?
    
  central_gov:{  
    username:{type: String, default: null},
    id:{type:mongoose.Types.ObjectId,ref:'user',default:null,sparse: true},
  },
    // req_reqby:{type: String, default: null},

    


  // project_details: {type:mongoose.Types.ObjectId,ref:'Requests'}, 

project_status: {    //Project Complete or onGoing?
    type:String,
    // reqired:true,
    default:'Tender Not Initialised'},
                          //Tender Not Initialised,
                          // Tender Initialised, 
                          //Project Started, 
                          //Project Completed


  project_init:{ //Only for Tender initialised or not 
    type:Boolean,
    // required:true,
    default:false
},

  tender_amount:
    {type :Number, 
    // reqired:true,
    default:0
  },

    tender_date:{
      type:Date,
      default:null
    },
  
    
  total_bids:[{
    contractor_details: {type:mongoose.Types.ObjectId,ref:'contractor',default:null,sparse: true},
    bid_amount:{type:Number,default:0,sparse: true}
    }],

  contractor_Authorized:{
    contractor_details: {
      contractor_id:{type:mongoose.Types.ObjectId,ref:'contractor',default:null,sparse: true},
      contractor_name:{type: String, default:null},
      contractor_email:{type: String,default:null},
      contractor_mobile:{type :Number ,default:null},
      contractor_city:{type: String,default:null},
      contractor_state:{type: String, default:null},
      contractor_adharno:{type :Number , default:null},
      contractor_pancard:{type :Number ,default:null},
      proposal_description:{type: String,default:null},
      project_proposed_planofwork:{type: String, default:null},
      project_bidamount:{type :Number , default:null},
      project_amountused:{type :Number, default: null},
      project_duration:{type: String, default:null},
      project_estimatedenddate:{type: Date, default:null},

      contractor_requests:[{
        requests_status:{type:String,default:null},
        requests_amount:{type:Number,default:null},
        requests_date:{type:Date, default:null},
        requests_description:{type:String, default:null}
      }],


      vendor_requests:[{

      }]
      // project_transactionhistory:{type:mongoose.Types.ObjectId,ref:'contractor',default:null,sparse: true},
      

    },
    bid_amount:{type:Number,default:0,sparse: true},
  },

 
},

{                                                 
  timestamps: true,
});

const project= mongoose.model('project', projectSchema);
module.exports = project;