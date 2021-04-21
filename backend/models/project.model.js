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
  project_details: {type:mongoose.Types.ObjectId,ref:'Requests'}, 

  project_status:
    {type :Boolean, 
    reqired:true,
    default:false},

project_init:{
    type:Boolean,
    // required:true,
    default:false
},

  tender_amount:
    {type :Number, 
    reqired:true},

    tender_date:{
      type:Date,
      default:null
    },

  total_bids:[{
    contractor_details: {type:mongoose.Types.ObjectId,ref:'contractor',default:null,sparse: true},
    bid_amount:{type:Number,default:0,sparse: true}
    }],

  contractor_Authorized:{contractor_details: {type:mongoose.Types.ObjectId,ref:'contractor',default:null,sparse: true},
  bid_amount:{type:Number,default:0,sparse: true},
  }},

{                                                 
  timestamps: true,
});

const project= mongoose.model('project', projectSchema);
module.exports = project;
//  module.exports=mongoose.model("bid", bid);