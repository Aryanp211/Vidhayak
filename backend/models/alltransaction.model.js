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


const transactionSchema= new Schema({
    category:{type:String,default:null},

    project_details:{
      project_name:{type:String,default:null},
    project_id:{type:mongoose.Types.ObjectId,ref:'project',default:null,sparse: true},
    },
    
    from: {
          from_id:{type:mongoose.Types.ObjectId,ref:'user',default:null,sparse: true},
          from_name:{type:String,default:null},
          from_state:{type:String,default:null},
          from_posit:{type:String,default:null},
            
    },

    to: {
      to_id:{type:mongoose.Types.ObjectId,ref:'user',default:null,sparse: true},
      to_name:{type:String,default:null},
      to_state:{type:String,default:null},
      to_posit:{type:String,default:null},
        },


    amount:{type:Number,default:0},

    date:{type:Date,default:null},
    desc:{type:String, default:null}
},

{                                                 
    timestamps: true,
  });

  module.exports= mongoose.model('alltransaction', transactionSchema);
//  = totalbid;