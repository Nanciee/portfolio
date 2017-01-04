angular.module('personal.about', [])
.controller('AboutController', function($document, $window) {
	var AboutVm = this;
	AboutVm.loaded = false;
	AboutVm.skills_one = [{
		id: "s1",
		name: "JavaScript", 
		percentage: 95,
		color: "#ffd248"
	}, 
	{
		id: "s2",
		name: "TypeScript", 
		percentage: 75,
		color: "#F79622"
	}, 
	{
		id: "s3",
		name: "HTML/CSS", 
		percentage: 95,
		color: "#48A9A6"
	}, 
	{
		id: "s4",
		name: "Sass/LESS", 
		percentage: 75,
		color: "#2E86AB"
	}, 
	{
		id: "s5",
		name: "jQeury", 
		percentage: 85,
		color: "#D46271"
	}, 
	{
		id: "s6",
		name: "Angular", 
		percentage: 90,
		color: "#6AB083"
	}, 
	{
		id: "s7",
		name: "Angular 2", 
		percentage: 85,
		color: "#A4DD80"
	}, 
	{
		id: "s8",
		name: "React", 
		percentage: 75,
		color: "#F6B277"
	}] 
	
	AboutVm.skills_two = [{
		id: "s9",
		name: "React Native", 
		percentage: 65,
		color: "#aec5e6"
	}, 
	{
		id: "s10",
		name: "Backbone", 
		percentage: 65,
		color: "#6EA4BF"
	}, 
	{
		id: "s11",
		name: "Node/Express", 
		percentage: 95,
		color: "#EF767A"
	}, 
	{
		id: "s12",
		name: "MongoDB", 
		percentage: 95,
		color: "#FFBA49"
	}, 
	{
		id: "s13",
		name: "MySQL", 
		percentage: 95,
		color: "#A1CF6B"
	}, 
	{
		id: "s14",
		name: "Git", 
		percentage: 95,
		color: "#FFE066"
	}, 
	{
		id: "s15",
		name: "Grunt/Gulp", 
		percentage: 65,
		color: "#63CCCA"
	}, 
	{
		id: "s16",
		name: "Mocha/Chai", 
		percentage: 65,
		color: "#397367"
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

  AboutVm.percentage = function(skills) {
  	for(var i = 0; i < AboutVm.skills_two.length; i++){
		  var progress = new ProgressBar.Line("#" + AboutVm.skills_two[i].id, {
			  strokeWidth: 4,
			  easing: 'easeInOut',
			  duration: 2000,
			  color: AboutVm.skills_two[i].color,
			  trailColor: '#8e8e8e',
			  trailWidth: 1,
			  svgStyle: {width: '100%', height: '100%'}
			});

			progress.animate(AboutVm.skills_two[i].percentage * 0.01);
		}

		for(var i = 0; i < AboutVm.skills_one.length; i++){
		  var progress = new ProgressBar.Line("#" + AboutVm.skills_one[i].id, {
			  strokeWidth: 4,
			  easing: 'easeInOut',
			  duration: 2000,
			  color: AboutVm.skills_one[i].color,
			  trailColor: '#8e8e8e',
			  trailWidth: 1,
			  svgStyle: {width: '100%', height: '100%'},
			});

			progress.animate(AboutVm.skills_one[i].percentage * 0.01);
		}
	}

	$document.on('scroll', function() {
    if($window.scrollY/$document.height() > 0.45 && !AboutVm.loaded) {
    	AboutVm.loaded = true;
    	AboutVm.percentage();
    }
	});
});