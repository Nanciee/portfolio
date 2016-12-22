var skills = ["JavaScript", "TypeScript", "HTML/CSS", "Sass/LESS", "jQeury", "Angular", "Angular 2", "React", "React Native", "Backbone", "Node/Express", "MongoDB", "MySQL", "Git", "Grunt/Gulp", "Mocha/Chai"]

angular.module('personal', [
  'ui.router'
])
.controller('personalController', function() {
})

.config(function($stateProvider, $urlRouterProvider) {

  // var accountState = {
  //   name: 'account',
  //   url: '/account',
  //   templateUrl: 'app/account/account.html',
  //   controller: 'AccountController',
  //   controllerAs: 'AccountVm',
  //   authenticate: true
  // };

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'app/about/about.html'
  };

  var projectsState = {
    name: 'projects',
    url: '/projects',
    templateUrl: 'app/projects/projects.html'
  };

  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'app/contact/contact.html'
  };

  $stateProvider.state(aboutState);
  $stateProvider.state(projectsState);
  $stateProvider.state(contactState);

  $urlRouterProvider.otherwise('/');
});