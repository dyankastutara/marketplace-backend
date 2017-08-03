const jwt = require('jsonwebtoken');

const models = require('../models');
const {encrypt, decrypt} = require('../helpers/encrypt-decrypt');
require('dotenv').config()

module.exports = {
	register : (req, res) => {
		let finalResult = {
			id : null,
			name : '',
			username : '',
			email : '',
			phone_number : '',
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
					    role_id: 3
						})
						.then(response=>{
							finalResult.id = response.dataValues.id;
							finalResult.name = response.dataValues.name;
							finalResult.username = response.dataValues.username;
							finalResult.email = response.dataValues.email;
							finalResult.phone_number = response.dataValues.phone_number;
							finalResult.success = true;
							finalResult.message = 'New User is Created';
							res.status(200);
							res.json(finalResult);
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
	login : (req, res)=>{
		let finalResult = {
			id : null,
			name : '',
			username : '',
			email : '',
			urlImg : '',
			gender : '',
			address : '',
			city : '',
			province : '',
			state : '',
			postal_code : '',
			createdAt : '',
			updatedAt : '',
			role : '',
			token : '',
			success : false,
			message : ''
		}

		if(req.body.email === undefined || req.body.password === undefined){
			finalResult.message = 'Email or Password is required';
			res.json(finalResult);
		}else{
			const email = req.body.email;
			models.User.findOne({
				where : {
					email : email
				}
			})
			.then(response =>{
				if(response !== null){
					if(req.body.password === decrypt(response.dataValues.password)){
						let role_id = response.dataValues.role_id;
						models.Role.findAll({})
						.then(responseRole=>{
							let role = '';
							responseRole.map(roleValue=>{
								if(role_id === roleValue.dataValues.id){
									role = roleValue.dataValues.type;
									return role
								}
							})
							let token = jwt.sign({
								id : response.dataValues.id,
								name : response.dataValues.name,
								username : response.dataValues.username,
								email : response.dataValues.email,
								urlImg : response.dataValues.urlImg,
								gender : response.dataValues.gender,
								address : response.dataValues.address,
								city : response.dataValues.city,
								province : response.dataValues.province,
								state : response.dataValues.state,
								postal_code : response.dataValues.postal_code,
								createdAt :response.dataValues.createdAt,
								updatedAt :response.dataValues.updatedAt,
								role : role
							}, process.env.SECRET_TOKEN);

							finalResult.id = response.dataValues.id,
							finalResult.name = response.dataValues.name,
							finalResult.username = response.dataValues.username,
							finalResult.email = response.dataValues.email,
							finalResult.urlImg = response.dataValues.urlImg,
							finalResult.gender = response.dataValues.gender,
							finalResult.address = response.dataValues.address,
							finalResult.city = response.dataValues.city,
							finalResult.province = response.dataValues.province,
							finalResult.state = response.dataValues.state,
							finalResult.postal_code = response.dataValues.postal_code,
							finalResult.createdAt = response.dataValues.createdAt,
							finalResult.updatedAt = response.dataValues.updatedAt,
							finalResult.role = role,
							finalResult.token = token,
							finalResult.success = true,
							finalResult.message = 'Login Success'
							res.json(finalResult);
						})
						.catch(err=>{
							finalResult.message = 'Error for find Role'
							res.status(500);
							res.json(finalResult);
						})
					} else {
						finalResult.message = 'Password is Wrong';
						res.json(finalResult);
					}
				} else {
					finalResult.message = 'Username not found';
					res.json(finalResult);
				}
			})
			.catch(error=>{
				finalResult.message = 'Error for find User'
				res.status(500);
			})
		}
	}
}