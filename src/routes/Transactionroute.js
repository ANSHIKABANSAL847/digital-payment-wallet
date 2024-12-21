const express = require('express');
const { check } = require('express-validator');
const UserController = require('../controller/Usercontroller');
const router = express.Router();
const transactionController = require('../controller/Transactioncontroller');

router.post('/register', [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], UserController.registerUser);

router.post('/transaction',transactionController.makeTransaction)
router.get('/transaction/:upi_id', transactionController.getTransactionsByUpi);

module.exports = router;