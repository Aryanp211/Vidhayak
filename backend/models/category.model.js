const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category_name: 
    {type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    minlength: 3}, 

  category_amount:
    {type :Number, 
    reqired:true},
    },

{
  timestamps: true,
});

const CategorySchema = mongoose.model('CategorySchema', categorySchema);

module.exports = CategorySchema;