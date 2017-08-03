const chai = require('chai');
const chaiHttp = require('chai-http');
const {encrypt, decrypt} = require('../helpers/encrypt-decrypt')

require('dotenv').config();
const DatabaseCleaner = require('database-cleaner');
const databaseCleaner = new DatabaseCleaner('postgresql');

const models = require('../models')
const server = require('../app');

const should = chai.should();
chai.use(chaiHttp);

describe('Auth Test',()=>{
	describe('Login - Test login with admin access',()=>{
		it('Should be return all field Admin when Admin trying to login',(done)=>{
			chai.request(server)
			.post('/auth/login')
			.send({
				username: 'admin',
				password: encrypt('admin')
			})
			.end((err, res)=>{
				if(err){
					res.should.have.status(500);
					done(err);
				}else{
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.have.property('id');
					res.body.should.have.property('name');
					res.body.should.have.property('username');
					res.body.should.have.property('email');
					res.body.should.have.property('gender');
					res.body.should.have.property('address');
					res.body.should.have.property('city');
					res.body.should.have.property('postal_code');
					res.body.should.have.property('createdAt');
					res.body.should.have.property('updatedAt');
					res.body.should.have.property('role');
					res.body.should.have.property('message');
					res.body.should.have.property('success');
					res.body.should.have.property('token')
					done();
				}
			});
		});
	});
});