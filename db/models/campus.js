'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');
const Student = require('./student.js');

module.exports = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'https://c1.staticflickr.com/6/5542/12072737396_eda5c5f789_b.jpg'
	}
}, {
	hooks: {
		beforeDestroy: function(campus) {
			return Student.destroy({
				where: {
					campusId: campus.id
				}
			})
		}
	}
})