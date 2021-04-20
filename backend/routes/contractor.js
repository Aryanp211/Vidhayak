const router = require('express').Router();
let Central = require('../models/central.model');
let contractorSchema =require('../models/contractor.model');

router.route('/').get((req, res) => {
  contractorSchema.find()
    .then(centralusers => res.json(centralusers))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;