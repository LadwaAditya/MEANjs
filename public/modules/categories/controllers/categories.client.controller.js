'use strict';

angular.module('categories').controller('CategoriesController', ['$scope','$location',
	function($scope,$location) {

		// Create new Category
		$scope.create = function() {
			// Redirect after save
			$location.path('categories');

			// Clear form fields
			$scope.name = '';
		};

		// Find a list of Categories
		$scope.find = function() {
			// hard coded data
			$scope.categories = [{
				'name': 'Beverages',
				'description': 'Soft drinks, coffees, teas, beers, and ales'
			},
				{
					'name': 'Condiments',
					'description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
				}];
		};
	}
]);
