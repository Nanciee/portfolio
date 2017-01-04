angular.module('personal.projects', [])
.controller('ProjectsController', function() {
	var ProjectsVm = this;
	ProjectsVm.tech = {
		Angular: "devicon-angularjs-plain",
		Node: "devicon-nodejs-plain",
		MySQL: "devicon-mysql-plain",
		React: "devicon-react-original",
		MongoDB: "devicon-mongodb-plain"
	}
	ProjectsVm.projects = [
		{
			name: "Sushiii",
			img: "/../../asset/sushiii-small.png",
			description: "A community based portfolio for software developers where employers can view a potential hire’s previous work in a clean and comprehensive way. It supports picture upload for visually appealing display of the user's projects. Sushiii promotes a collaborative environment by offering the ability to create teams and manage members.",
			tech: ["Angular", "Node", "MySQL"],
			site: "http://sushiii.me/",
			github: "https://github.com/Nanciee/sushi"
		},
		{
			name: "Zeus Reviews",
			img: "/../../asset/zeus-small.png",
			description: "A movie and TV review website focused around a social atmosphere. Zeus Reviews allow users to voice their opinions, as well as discover their next favourite show/movie.",
			tech: ["Angular", "Node", "MongoDB"],
			site: "http://zeus-reviews.herokuapp.com/",
			github: "https://github.com/Nanciee/Zeus-Reviews"
		},
		{
			name: "Scripty + Dashreactor",
			img: "/../../asset/scripty-small.png",
			description: "A mobile application that teach users how to code, along side a web platform that allows admin to manage lessons. Scripty has a simplistic and user friendly interface that provides pleasing and painless interaction.",
			tech: ["React", "Node", "MongoDB"],
			site: undefined,
			github: "https://github.com/Nanciee/scripty"
		},
		{
			name: "Shelf.ie",
			img: "/../../asset/shelfie-small.png",
			description: "An online storefront generator for eBay users that showcases all of their sellable products in a visually appealing manner. Shelf.ie allows everyday entrepreneurs to easily manage their brand and online presence.",
			tech: ["Angular", "Node", "MongoDB"],
			site: "http://shelf-ie.heroku.com/",
			github: "https://github.com/Nanciee/Shelf.ie"
		}
	];
});