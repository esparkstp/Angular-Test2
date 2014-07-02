
myApp.constant('apiUrl', 'http://localhost:52888/api');

myApp.service('Users', function($http, apiUrl){

    // Set up URL for Users api
    var url = apiUrl + '/users/';

    // https://docs.angularjs.org/api/ngResource/service/$http
    return {

        // Display
        getList: function (callback){
            $http({
                method: 'GET',
                url: url,
                params: ''
            }).success( function(data){
                callback(data);
            });
        },

        // Create
        createUser: function(data){
            return $http({
                method: 'POST',
                url: url,
                params: data
            })
        },

        // Edit
        editUser: function(data){
            $http({
                method: 'PUT',
                url: url,
                params: data
            })
        },

        // Delete
        // Deletes through query string...
        deleteUser: function(ID) {
            $http({
                method: 'DELETE',
                url: url + ID
            })
        }
    };
});



myApp.controller('UsersRouteCtrl', function($scope, Users){

    // Display
    Users.getList(function(data){

        // Add Collapse = true field
        _.forEach(data, function(item ) {
            item.isCollapsed = true;
        });

//        for(var i=0; i<data.length;i++)
//        {
//            data[i].isCollapsed = true;
//            console.log(data[i]);
//
//        };

        // Set up user list
        $scope.users = data;
    });

    // Add
    $scope.add = function($scope){

        // Test log
        console.log($scope.user);

        // Create new one
        Users.createUser($scope.user)
            .success(function(user) {

                // Add the user to list so it gets added to a form
                user.isCollapsed = true; // with edit form hidden
                $scope.users.push(user);
                $scope.user = {};

            })
            .error(function(data, status, headers, config) {
                console.log('Error creating user.');
            });

    };

    // Edit
    $scope.edit = function($scope, user){

        // Test log
        console.log('editing: ');
        console.log(user);

        // Create new one
        Users.editUser(user);

        // Collapse the edit form
        $scope.user.isCollapsed = true;
    };

    // Delete
    $scope.delete = function(user){

        // Test log
        console.log('deleting ' + user.ID);
        Users.deleteUser(user.ID);

        // Remove using "_"
        _.remove($scope.users, user);
    };
});