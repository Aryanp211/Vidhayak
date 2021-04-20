const mongoose = require('mongoose');
// import contractor from './contractor.model';
// import Requests from './requests.model';

const Schema = mongoose.Schema;
const contractor = require('./contractor.model');


const totalbid= new Schema({
    contractor_details: {type:mongoose.Types.ObjectId,ref:'contractor',default:null,sparse: true},

    bid_amount:{type:Number,default:0,sparse: true}
    

},

{                                                 
    timestamps: true,
  });

  module.exports= mongoose.model('totalbid', totalbid);
//  = totalbid;