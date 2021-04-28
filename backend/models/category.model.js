const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category_name: 
    {type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    minlength: 3}, 

  category_amount: //Category Amount LEFT
    {type :Number, 
    
    default:0
  },

  category_amountAlloc: //Amount Allocated by Centre
    {type :Number, 
   
    default:0,
  },

  category_pending:
    {type :Number, 
   
    default:0,},

  category_authorized:
    {type :Number, 
      default:0,},
    },

{
  timestamps: true,
});

const CategorySchema = mongoose.model('CategorySchema', categorySchema);

module.exports = CategorySchema;