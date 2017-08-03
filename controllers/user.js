const {encrypt, decrypt} = require('../helpers/encrypt-decrypt');
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
	},
	getById : (req, res)=>{
		models.User.findOne({
			where: {
				id : req.params.id
			},
			include:[{
				model: models.Role
			}]
		})
		.then(response=>{
			res.status(200);
			res.json(response);
		})
		.catch(err=>{
			res.status(500);
			res.json(err);
		})
	},
	createUser : (req, res)=>{
		let finalResult = {
			id : null,
			name : '',
			username : '',
			email : '',
			phone_number : '',
			role: '',
			success : false,
			message : ''
		}
		if(req.body.name === undefined || req.body.phone_number === undefined || req.body.email === undefined || req.body.password === undefined){
			finalResult.message = 'All field is required';
			res.json(finalResult);
		}else{
			if(req.body.password.length < 6){
				finalResult.message = 'Password length must be minimum 6 characters';
				res.json(finalResult);
			}else{
				models.User.findOne({
					where: {
						email: req.body.email
					}
				})
				.then(responseFindByEmail=>{
					if(responseFindByEmail){
						finalResult.message = 'Email has used';
						res.json(finalResult);
					}else{
						let username = req.body.email.split('@');
						models.User.create({
							name: req.body.name,
					    username: username[0],
					    phone_number: req.body.phone_number,
					    password: encrypt(req.body.password),
					    email: req.body.email,
					    role_id: req.body.role_id
						})
						.then(response=>{
							models.Role.findAll({})
							.then(responseRole=>{
								let role_id = response.dataValues.role_id
								responseRole.map(valueRole=>{
									var role = ''
									if(role_id === valueRole.dataValues.id){
										role = valueRole.dataValues.type
										return role
									}
								})
								finalResult.id = response.dataValues.id;
								finalResult.name = response.dataValues.name;
								finalResult.username = response.dataValues.username;
								finalResult.email = response.dataValues.email;
								finalResult.phone_number = response.dataValues.phone_number;
								finalResult.role = role;
								finalResult.success = true;
								finalResult.message = 'New User is Created';
								res.status(200);
								res.json(finalResult);
							})
							.catch(eRole=>{
								finalResult.message = 'Error find Role';
								res.json(finalResult);
							})
						})
						.catch(err=>{
							finalResult.message = 'Error create User';
							res.status(500);
							res.json(finalResult);
						})
					}
				})
				.catch(error=>{
					finalResult.message = 'Error find User by Email';
					res.status(500);
					res.json(finalResult);
				})
			}
		}
	},
	editUser : (req, res)=>{
		let finalResult = {
			id : null,
			name : '',
			username : '',
			email : '',
			phone_number : '',
	    urlImg: '',
	    gender: '',
	    address: '',
	    city: '',
	    postal_code: '',
	    updatedAt: null,
			role: '',
			success : false,
			message : ''
		}

		models.User.findOne({
			where:{
				id:req.params.id 
			}
		})
		.then(responseFindById=>{
			models.User.updateAttributes({
				name : req.body.name || responseFindById.dataValues.name,
				username : req.body.username || responseFindById.dataValues.username,
				email : req.body.email || responseFindById.dataValues.email,
				phone_number : req.body.phone_number || responseFindById.dataValues.phone_number,
				password : encrypt(req.body.password) || responseFindById.dataValues.password,
		    urlImg: req.body.urlImg || responseFindById.dataValues.urlImg,
		    gender: req.body.gender || responseFindById.dataValues.gender,
		    address: req.body.address || responseFindById.dataValues.address,
		    city: req.body.city || responseFindById.dataValues.city,
		    postal_code: req.body.postal_code || responseFindById.dataValues.postal_code,
				role_id: req.body.role_id || responseFindById.dataValues.role_id,
				createdAt: responseFindById.dataValues.createdAt,
				updatedAt: new Date()
			}, {
				where : {
					id: req.params.id
				}
			})
			.then(response=>{
				var role = ''
				let id_role = response.dataValues.id_role
				models.Role.findAll({})
				.then(responseRole=>{
					responseRole.map(roleValue=>{
						if(roleValue.dataValues.id === Number(id_role)){
							role = roleValue.dataValues.type
							return role
						}
					})
				})
				.catch(err=>{
					finalResult.message = "Error find Role when update";
					res.json(finalResult);
				})
				finalResult.id = response.dataValues.id;
				finalResult.username = response.dataValues.username;
				finalResult.email = response.dataValues.email;
				finalResult.phone_number = response.dataValues.phone_number;
		    finalResult.urlImg = response.dataValues.urlImg;
		    finalResult.gender = response.dataValues.gender;
		    finalResult.address = response.dataValues.address;
		    finalResult.city = response.dataValues.city;
		    finalResult.postal_code = response.dataValues.postal_code;
		    finalResult.updatedAt = response.dataValues.updatedAt;
				finalResult.role = role;
				finalResult.success = true;
				finalResult.message = "User has been updated";
				res.json(finalResult);
			})
			.catch(error=>{
				finalResult.message = "User can't updated";
				res.json(finalResult);
			})
		})
	},
	deleteUser: (req, res)=>{
		let finalResult = {
			id:null,
			success : false,
			message : ''
		}
		models.Role.destroy({
			where:{
				id:req.params.id
			}
		})
		.then(response=>{
			finalResult.id = req.params.id;
			finalResult.success = true;
			finalResult.message = 'User has been Delete';
			res.status(200);
			res.json(finalResult);
		})
		.catch(err=>{
			finalResult.message = "User can't deleted";
			res.status(500);
			res.json(finalResult);
		})
	}
}