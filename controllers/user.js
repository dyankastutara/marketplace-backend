const {encrypt} = require('../helpers/encrypt-decrypt');
const models = require('../models');

module.exports = {
	getAll : (req, res)=>{
		models.User.findAll({
			include:[{
				model: models.Role
			}]
		})
		.then(response=>{
			res.status(200);
			res.json(response)
		})
		.catch(err=>{
			res.status(500);
			res.json(err);
		})
	}
}