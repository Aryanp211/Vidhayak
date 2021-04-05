const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const centralSchema = new Schema({
  centraluser_name: {type: String, required: true, unique: true, trim: true, minlength: 3},
  centraluser_email:{type: String, required:true},
  centraluser_mobile:{type :Number , reqired:true},
  centraluser_password:{type: String, required:true},
  //centraluser_Gender:{type: String, required:true},
 // centraluser_State:{type: String, required:true},
  centraluser_Post:{type: Date, required:true}

}, {
  timestamps: true,
});

const Central = mongoose.model('Central', centralSchema);

module.exports = Central;