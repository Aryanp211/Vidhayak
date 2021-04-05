const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stateSchema = new Schema({
  stateuser_name: {type: String, required: true, unique: true, trim: true, minlength: 3},
  stateuser_email:{type: String, required:true},
  stateuser_mobile:{type :Number , reqired:true},
  stateuser_password:{type: String, required:true},
 // stateuser_Gender:{type: String, required:true},
  stateuser_State:{type: String, required:true},
  stateuser_Post:{type: Date, required:true}

}, {
  timestamps: true,
});

const States = mongoose.model('States', stateSchema);

module.exports = States;