'use strict';

angular.module('categories').factory('Categories', ['$resource',
    function ($resource) {

        return $resource('categories/:categoryId', {
            categoryId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });


    }
]);
