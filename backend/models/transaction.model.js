const mongoose = require('mongoose');
// import contractor from './contractor.model';
// import Requests from './requests.model';
// 
const Schema = mongoose.Schema;
const contractor = require('./contractor.model');

const Requests = require('./requests.model');
// const contractor = require('./contractor.model');
const project =require('./project.model');

const user = require('./user.model');


const transaction= new Schema({
    project_id:{type:mongoose.Types.ObjectId,ref:'project',default:null,sparse: true},
    from: {type:mongoose.Types.ObjectId,ref:'user',default:null,sparse: true},
    to: {type:mongoose.Types.ObjectId,ref:'user',default:null,sparse: true},
    amount: {type:Number,default:null},
    desc:{type:String, default:null}
},

{                                                 
    timestamps: true,
  });

  module.exports= mongoose.model('transaction', transaction);
//  = totalbid;