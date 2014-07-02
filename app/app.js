
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);

// UI-Router
myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    //
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
        .state('state1', {
            url: "/SunIsShining",
            templateUrl: "partials/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "partials/state1.list.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "partials/state2.list.html",
            controller: function ($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        })
        .state('accordion', {
            url: "/accordion",
            templateUrl: "partials/accordion.html"
        })
        .state('alert', {
            url: "alert",
            templateUrl: "partials/alert.html"
        })
        .state('buttons', {
            url: "/buttons",
            templateUrl: "partials/buttons.html"
        })
        .state('collapse',{
            url: '/collapse',
            templateUrl: "partials/collapse.html"
        })
        .state('users', {
            url: '/users',
            templateUrl: "partials/users.html"
        });
});

// Accordion
myApp.controller('accordionDemoCtrl', function ($scope){

        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function(){
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
);

// Alert
myApp.controller('alertDemoCtrl', function($scope){

        $scope.alerts = [
            {
                type: 'danger', message: 'oh snap!'
            },
            {
                type: 'success', message: 'Well done!'
            }
        ];

        $scope.addAlert = function(){
            $scope.alerts.push({message: 'Another alert!!1'});
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    }
);

// Button
myApp.controller('buttonsDemoCtrl', function($scope) {

        $scope.test = "123";
        $scope.test2 = "abc";
        $scope.singleModel = 0;


        $scope.radioModel = 'Middle';

        $scope.checkModel = {

            left: false,
            middle: true,
            right: false
        };
    }
);

//// Test Directive
//myApp.directive("myFirstDirective", function(){
//
//
//    return {
//        restrict: 'A',
//        scope: {
//            data: '=myFirstDirective',
//            firstParam: '=firstParam'
//        },
//        link: function(scope, element, attrs ) {
//            console.log(scope.data);
//        }
//    }
//
//});

//User Information
myApp.controller('userListCtrl', function(){

    this.users = [
        {
            FirstName: 'Bart',
            LastName: 'Simpson',
            PhoneNumber: '513-123-4567'
        },
        {
            FirstName: 'Lisa',
            LastName: 'Simpson',
            PhoneNumber: '513-123-0000'
        },
        {
            FirstName: 'Bat',
            LastName: 'Man',
            PhoneNumber: '000-7770'
        }];
});


//Print User Information
myApp.directive("userInformation", function(){
    return {
        restrict: 'E',
        templateUrl: "partials/user-information.html"
    };
});


var ListOfUsers = [
        {
            FirstName: 'Bart',
            LastName: 'Simpson',
            PhoneNumber: '513-123-4567'
        },
        {
            FirstName: 'Lisa',
            LastName: 'Simpson',
            PhoneNumber: '513-123-0000'
        },
        {
            FirstName: 'Bat',
            LastName: 'Man',
            PhoneNumber: '000-7770'
        }];


//Print User Information v2
myApp.directive("userInformationV2", function(){
    return {
        restrict: 'E',
        templateUrl: "partials/user-information-v2.html"
    };
});





