'use strict';

/**
 * Module dependencies.
 */
 var should = require('should'),
 mongoose = require('mongoose'),
 User = mongoose.model('User'),
 Notification = mongoose.model('Notification');
 var request = require('superagent');
 
/**
 * Globals
 */
 var user, notification;

/**
 * Unit tests
 */
 describe('Notification Model Unit Tests:', function() {
 	beforeEach(function(done) {
 		user = new User({
 			firstName: 'Full',
 			lastName: 'Name',
 			displayName: 'Full Name',
 			email: 'test@test.com',
 			username: 'username',
 			password: 'password'
 		});

 		user.save(function() { 
 			notification = new Notification({
				// Add model fields
				// ...
			});

 			done();
 		});
 	});

 	describe('Method Save', function() {
 		it('should be able to save without problems', function(done) {
 			return notification.save(function(err) {
 				should.not.exist(err);
 				done();
 			});
 		});
 	});

 	describe('Get notifications for the logged in user', function(){
 		it('should respond with json', function(done){
 			request.get('http://localhost:3000/api/notifications')
 			.end(function(response){
 				response.status.should.equal(200);
 				response.should.have.header('Content-Type','/json');
 			});
 			done();
 		});
 		// it('should have title field', function(done){
 		// 	request.get.('http://localhost:3000/api/notifications')
 		// 	.end(function(response){
 		// 		response.status.should.equal(200);
 		// 		response.body.should.have.property('title');
 		// 	});
 		// 	done();
 		// });
 	});



 	afterEach(function(done) { 
 		Notification.remove().exec();
 		User.remove().exec();

 		done();
 	});
 });