'use strict';

const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
	accessSuperAdmin : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'superadmin'){
      next()
    }else{
      res.send("You Can't access this routes")
    }
	},
	accessAdmin : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'admin'){
      next()
    }else{
      res.send("You Can't access this routes")
    }
	},
	accessAdminUser : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'admin' || decoded.role.toLowerCase() == 'user'){
      next()
    }else{
      res.send("You Can't access this routes")
    }
	},
	accessUser : (req, res, next)=>{
		const token = req.headers.token;
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if(decoded.role.toLowerCase() == 'user'){
      next()
    }else{
      res.send("You Can't access this routes")
    }
	}
}