angular.module('personal', [
  'personal.about',
  'personal.projects',
  'personal.contact',
  'ui.router'
])
.controller('personalController', function() {
})

.config(function($stateProvider, $urlRouterProvider) {

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'app/about/about.html',
    controller: 'AboutController',
    controllerAs: 'AboutVm',
  };

  var projectsState = {
    name: 'projects',
    url: '/projects',
    templateUrl: 'app/projects/projects.html',
    controller: 'ProjectsController',
    controllerAs: 'ProjectsVm',
  };

  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'app/contact/contact.html',
    controller: 'ContactController',
    controllerAs: 'ContactVm'
  };

  $stateProvider.state(aboutState);
  $stateProvider.state(projectsState);
  $stateProvider.state(contactState);

  $urlRouterProvider.otherwise('/about');
});