

var app = angular.module('sarajevo', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // home page ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })

        // explore page =================================
        .state('explore', {
            url: '/explore',
            templateUrl: 'pages/explore.html'
        })

    // attractions page =================================
        .state('explore.attractions', {
            url: '/attractions',
            templateUrl: 'pages/attractions.html'
        })

        // events page =================================
        .state('explore.events', {
            url: '/events',
            templateUrl: 'pages/events.html'
        });

});






app.controller('MainCtrl', [
'$scope',
function($scope){
$scope.name = 'Aldin';
}]);
