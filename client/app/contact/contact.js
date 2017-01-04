angular.module('personal.contact', [])
.controller('ContactController', function($http) {
	var ContactVm = this;
	ContactVm.sender = "";
	ContactVm.message = "";
  ContactVm.overlay = false;
	ContactVm.email = function() {
		$http({
      method: 'POST',
      url: '/sayHello',
      data: {
      	sender: ContactVm.sender,
      	message: ContactVm.message
      }
    })
    .then(function(resp){
      ContactVm.overlay = true;
    });
	}
});