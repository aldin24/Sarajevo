/*global angular */
var app = angular.module('sarajevo', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // home page ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })

        .state('home.muzeji', {
            url: '/mousems',
            templateUrl: 'pages/muzeji.html'
        })

        .state('home.attractions', {
            url: '/attractions',
            templateUrl: 'pages/attractions.html'
        })
        .state('home.nightlife', {
            url: '/nightlife',
            templateUrl: 'pages/nightlife.html'
        })
        .state('home.dinning', {
            url: '/dinning',
            templateUrl: 'pages/dinning.html'
        })

          .state('home.shopping', {
            url: '/shopping',
            templateUrl: 'pages/shopping.html'
        })

        .state('home.close', {
            url: '/home',
            templateUrl: 'pages/close.html'
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




app.controller('MainCtrl', function ($scope){


});
