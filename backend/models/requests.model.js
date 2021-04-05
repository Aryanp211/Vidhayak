const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  username:{ type: String, required: true },
//   user_mobile:{type :Number , reqired:true},
  req_Projname:{type: String, required: true},
  req_category:{type: String,required: true},
  req_state:{type: String,required: true},
  req_amount:{type:Number,required: true},
  req_description :{type: String, required:true},
  req_duration:{type:String,required: true},
  req_status:{type: String, required: true },
  req_date:{ type: Date, required: true },
  req_authoby:{type: String, required: true}
}, 
{
  timestamps: true,
});

const Requests = mongoose.model('Request', requestSchema);

module.exports = Requests;