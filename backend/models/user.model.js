const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_firstname: {type: String, required: true, trim: true, minlength: 2},
  user_lasttname: {type: String, required: true, trim: true, minlength: 2},
  user_gender:{type: String, required: true},
  user_dob:{type: Date, required:true},
  user_address:{type: String, required:true},
  user_email:{type: String, required:true},
  user_mobile:{type :Number , reqired:true},
  user_password:{type: String, required:true},
  user_company:{type: String, required:true},
  user_city:{type: String, required:true},
  user_zipcode:{type: Number, required:true},
  user_state:{type: String, required:true},
  user_adharno:{type :Number , reqired:true},
  user_pancard:{type :Number , reqired:true},

}, {
  timestamps: true,
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;