function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ counter.count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			this.count = 0;
		},
		require: "counter",
		controllerAs: "counter",
		link: function (scope, element, attrs, ctrl) {
			element.on("click", function(){
				ctrl.count += 1;
				scope.$apply();
			});
			scope.$on('$destroy', function(){
				element.off();
			})
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);