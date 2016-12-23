angular.module('personal.about', [])
.controller('AboutController', function() {
	var AboutVm = this;
	AboutVm.skills = ["JavaScript", "TypeScript", "HTML/CSS", "Sass/LESS", "jQeury", "Angular", "Angular 2", "React", "React Native", "Backbone", "Node/Express", "MongoDB", "MySQL", "Git", "Grunt/Gulp", "Mocha/Chai"]
});