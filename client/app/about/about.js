angular.module('personal.about', [])
.controller('AboutController', function() {
	var AboutVm = this;
	AboutVm.skills = [["JavaScript", 95], ["TypeScript", 75], ["HTML/CSS", 95], ["Sass/LESS", 75], ["jQeury", 85], ["Angular", 90], ["Angular 2", 85], ["React", 75], ["React Native", 65], ["Backbone", 65], ["Node/Express", 95], ["MongoDB", 95], ["MySQL", 95], ["Git", 95], ["Grunt/Gulp", 65], ["Mocha/Chai", 65]]
});