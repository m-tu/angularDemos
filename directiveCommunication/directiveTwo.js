angular
	.module('dirCom')
	.directive('directiveTwo', directiveTwo);

function directiveTwo() {
  return {
	restrict: 'A',
	templateUrl: 'directive.Two.html',
	controllerAs: 'dirTwoCtrl',
	controller: function ($scope) {
	  console.log('Hello directive Two');

	  var vm = this;
	  vm.name = 'Two'


	}
  };
}