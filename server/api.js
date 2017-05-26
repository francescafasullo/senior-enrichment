'use strict'
const api = require('express').Router()
const models = require('../db/models');
const Campus = models.Campus;
const Student = models.Student;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then(function(campuses) {
		console.log('found campuses!');
		res.send(campuses);
	})
	.catch(next);
})

api.get('/campuses/:id', (req, res, next) => {
	Campus.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(function(campus) {
		console.log('found the right campus!');
		res.json(campus);
	})
})

api.get('/campuses/:id/students', (req, res, next) => {
	Student.findAll({
		where: {
			campusId: req.params.id
		}
	})
	.then(function(students) {
		res.send(students);
	})
	.catch(next);
})

api.get('/students', (req, res, next) => {
	Student.findAll({ include: [Campus]})
	.then(function(students) {
		console.log('found students!', students[0].campus.dataValues.name);
		res.send(students);
	})
	.catch(next);
})

api.post('/students/addStudent', (req, res, next) => {
	console.log('req body', req.body);
	const name = req.body.name;
	const email = req.body.email;
	const campusId = req.body.campusId;

	Student.create({
		name: name,
		email: email,
		campusId: campusId
	})
	.then(student => res.send(student))
	.catch(next);
});

api.delete('/students/:id', (req, res, next) => {
	Student.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function() {
		res.status(204).end();
	})
	.catch(next);
})


module.exports = api;