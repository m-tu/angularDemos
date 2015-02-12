angular
	.module('dirCom')
	.directive('directiveOne', directiveOne);

//directiveOne.$inject = [''];

function directiveOne() {
  return {
	restrict: 'A',
	templateUrl: 'directive.One.html',
	controllerAs: 'dirOneCtrl',
	controller: function ($scope) {
	  console.log('Hello directive One');

	  var vm = this;
	  vm.name = "One"

	}
  };
}