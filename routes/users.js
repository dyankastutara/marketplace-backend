const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authorizationHelper = require('../helpers/authorization');

/* GET users listing. */
router.get('/', authorizationHelper.accessSuperAdminAndAdmin, userController.getAll);

module.exports = router;
