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
		res.json(campus);
	})
	.catch(next);
})

api.post('/addCampus', (req, res, next) => {
	console.log(req.body);
	const name = req.body.name;
	const imageUrl = req.body.imageUrl;

	Campus.create({
		name: name,
		imageUrl: imageUrl
	})
	.then(campus => res.send(campus))
	.catch(next);
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

api.delete('/campuses/:id', (req, res, next) => {
	Campus.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function() {
		res.status(204).end();
	})
	.catch(next);
})


api.get('/students', (req, res, next) => {
	Student.findAll({ include: [Campus]})
	.then(function(students) {
		res.send(students);
	})
	.catch(next);
})

api.post('/addStudent', (req, res, next) => {
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

api.get('/students/:id', (req, res, next) => {
	Student.findById(req.params.id, { include: [Campus]})
	.then(function(student) {
		res.send(student);
	})
	.catch(next);
})

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