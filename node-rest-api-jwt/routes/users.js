/**
 * Created by Roman on 11.07.2018.
 */
const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
module.exports = router;