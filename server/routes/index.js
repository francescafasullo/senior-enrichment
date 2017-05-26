const router = require('express').Router();
const models = require('../../db/models');
const Campus = models.Campus;

router.get('/', function(req, res, next) {
	res.render('index');
})

router.get('/campuses', function(req, res, next) {
	Campus.findAll()
	.then(campuses => res.json(campuses))
	.catch(next);
	})
})

router.get('/campuses/:campusId', function(req, res, next) {
	res.send('hello');
})

router.get('/students', function(req, res, next) {
	//all students
})

router.get('/students/:studentId', function(req, res, next) {
	//single student
})

router.post('/campuses', function(req, res, next) {
	//new campus
})

router.post('/students', function(req, res, next) {
	//new student
})

router.put('/campuses/:campusId', function(req, res, next) {
	//update campus
})

router.put('/students/:studentId', function(req, res, next) {
	//update student
})

router.delete('/campuses/:campusId', function(req, res, next) {
	//delete campus
})

router.delete('/students/:studentId', function(req, res, next) {
	//delete student
})

module.exports = router;