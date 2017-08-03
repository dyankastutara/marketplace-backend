'use strict';

const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
	accessAll : (req, res, next) =>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'superadmin' || decoded.role.toLowerCase() == 'admin' || decoded.role.toLowerCase() == 'user'){
      next()
    }else{
      res.json({
      	access : false,
      	message : "Access is denied"
      })
    }
	},
	accessSuperAdmin : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'superadmin'){
      next()
    }else{
      res.json({
      	access : false,
      	message : "Access is denied"
      })
    }
	},
  accessSuperAdminAndAdmin : (req, res, next)=>{
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'superadmin' || decoded.role.toLowerCase() == 'admin'){
      next()
    }else{
      res.json({
        access : false,
        message : "Access is denied"
      })
    }
  },
	accessAdmin : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'admin'){
      next()
    }else{
      res.json({
      	access : false,
      	message : "Access is denied"
      })
    }
	},
	accessAdminUser : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'admin' || decoded.role.toLowerCase() == 'user'){
      next()
    }else{
      res.json({
      	access : false,
      	message : "Access is denied"
      })
    }
	},
	accessUser : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'user'){
      next()
    }else{
      res.json({
      	access : false,
      	message : "Access is denied"
      })
    }
	}
}