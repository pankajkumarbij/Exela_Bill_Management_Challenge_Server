const Bill = require('../models/bill');

const billController={

  BillPost(req, res){
    const billDate = req.body.billDate;
    const paidDate = req.body.paidDate;
    const unitConsumed = req.body.unitConsumed;
    const amount = req.body.amount;
    var newBill = new Bill({billDate,paidDate,unitConsumed,amount})
    newBill.save()
    .then(bill => {
      var message={
        success:"Successfully Saved!"
      };
      res.json(message);
    })
    .catch(err => {
      var message = {
        error:"Something went wrong!"
      };
      res.json(message);
    })
  },

  BillGet(req, res){
    Bill.find({}, function(err, bills){
      if(err){
        console.log(err);
      }
      else {
        res.json(bills);
      }
    });
  },

  BillGetById(req, res){
      Bill.find({'_id':req.params.id}, function(err, bill){
          if(err){
              console.log(err);
          }
          else {
              res.json(bill);
          }
      });
  },

  BillDeleteById(req, res){
    Bill.findOneAndRemove({'_id':req.params.id})
    .then((bill) => {
      if(bill){
        var message = { 
          success: "Bill Sucessfully Deleted" 
        };
        res.json(message);
      }else{
        var message = { 
          error: "Bill not found" 
        };
        res.json(message);
      }
    }).catch(err => {
      console.log(err);
      var message = { success: false, err: err };
      res.json(message);
    })
  },

  BillEditById(req, res){
    var bill_update = {
      billDate : req.body.billDate,
      paidDate : req.body.paidDate,
      unitConsumed : req.body.unitConsumed,
      amount : req.body.amount,
    }
    Bill.findOneAndUpdate({'_id':req.params.id}, bill_update)
    .then((bill) => {
      if(bill){
        var message = { 
          success: "Bill Sucessfully Updated" 
        };
        res.json(message);
      }else{
        var message = { 
          error: "Bill not found" 
        };
        res.json(message);
      }
    }).catch(err => {
      console.log(err);
      var message = {error:"Something went wrong!", success: false, err: err };
      res.json(message);
    })
  },
    
}
module.exports = billController;