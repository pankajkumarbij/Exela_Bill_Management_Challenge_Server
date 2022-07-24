const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  billDate: {
    type: String,
  },
  paidDate :{ 
    type: String,
  },
  unitConsumed :{ 
    type: String,
  },
  amount :{ 
    type: String,
  },
},
{
  timestamps: true
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;