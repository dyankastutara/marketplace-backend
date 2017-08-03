const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authorizationHelper = require('../helpers/authorization');

/* GET users listing. */
router.get('/', authorizationHelper.accessSuperAdminAndAdmin, userController.getAll);
router.get('/:id', authorizationHelper.accessAll, userController.getById);
router.post('/', authorizationHelper.accessSuperAdmin, userController.createUser);
router.put('/:id', authorizationHelper.accessAll, userController.editUser);

module.exports = router;
