angular.module('personal.about', [])
.controller('AboutController', function() {
	var AboutVm = this;
	AboutVm.skills_one = [{
		name: "JavaScript", 
		percentage: 95,
		color: "#ffd248"
	}, 
	{
		name: "TypeScript", 
		percentage: 75,
		color: "#f79622"
	}, 
	{
		name: "HTML/CSS", 
		percentage: 95,
		color: "#00a950"
	}, 
	{
		name: "Sass/LESS", 
		percentage: 75,
		color: "#aec5e6"
	}, 
	{
		name: "jQeury", 
		percentage: 85,
		color: "#ffd248"
	}, 
	{
		name: "Angular", 
		percentage: 90,
		color: "#f79622"
	}, 
	{
		name: "Angular 2", 
		percentage: 85,
		color: "#00a950"
	}, 
	{
		name: "React", 
		percentage: 75,
		color: "#aec5e6"
	}] 
	
	AboutVm.skills_two = [{
		name: "React Native", 
		percentage: 65,
		color: "#ffd248"
	}, 
	{
		name: "Backbone", 
		percentage: 65,
		color: "#f79622"
	}, 
	{
		name: "Node/Express", 
		percentage: 95,
		color: "#00a950"
	}, 
	{
		name: "MongoDB", 
		percentage: 95,
		color: "#aec5e6"
	}, 
	{
		name: "MySQL", 
		percentage: 95,
		color: "#ffd248"
	}, 
	{
		name: "Git", 
		percentage: 95,
		color: "#f79622"
	}, 
	{
		name: "Grunt/Gulp", 
		percentage: 65,
		color: "#00a950"
	}, 
	{
		name: "Mocha/Chai", 
		percentage: 65,
		color: "#aec5e6"
	}]

	$(function(){
      $(".typed").typed({
          strings: ["^1500<br>^100<br>^100<span class='blue'>const</span> myName <span class='pink'>=</span><span class='yellow'> 'Nancy Du'</span>;^500<br>^200<span class='blue'>const</span> myTitle <span class='pink'>=</span><span class='yellow'> 'Full Stack Web Developer'</span>;^500<br>^200<br>^400<span class='blue'>greet</span>(myName, myTitle);^1500"],
          typeSpeed: 30,
          callback: function() {
          	console.log("done")
          },
      });
  });
});