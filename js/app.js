var app = angular.module('sarajevo', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // home page ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })

        // stay page =================================
        .state('stay', {
            url: '/stay',
            templateUrl: 'pages/stay.html'
        })

        .state('stay.luxury', {
            url: '/luxury',
            templateUrl: 'pages/stay/luxury.html'
        })

        .state('stay.hip', {
            url: '/hip',
            templateUrl: 'pages/stay/hip.html'
        })

        .state('stay.budget', {
            url: '/budget',
            templateUrl: 'pages/stay/budget.html'
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
        })

        // dinning page =================================
        .state('explore.dinning', {
            url: '/dinning',
            templateUrl: 'pages/dinning.html'
        })

        // nightlife page =================================
        .state('explore.nightlife', {
            url: '/nightlife',
            templateUrl: 'pages/nightlife.html'
        });
});






app.controller('MainCtrl', [
'$scope',
function ($scope) {
        $scope.name = 'Aldin';
}]);



