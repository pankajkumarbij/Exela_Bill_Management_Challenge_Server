const express = require('express');
const router = express.Router();
const billController = require('../controllers/bill');

router.post('/addBill', billController.BillPost);

router.get('/bills', billController.BillGet);

router.get('/bill/:id', billController.BillGetById);

router.delete('/deleteBill/:id', billController.BillDeleteById);

router.put('/editBill/:id', billController.BillEditById);

module.exports = router;