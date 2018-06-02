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

         .state('spring', {
            url: '/spring',
            templateUrl: 'pages/seasons/spring.html'
        })

        .state('summer', {
            url: '/summer',
            templateUrl: 'pages/seasons/summer.html'
        })

           .state('winter', {
            url: '/winter',
            templateUrl: 'pages/seasons/winter.html'
        })

           .state('autumn', {
            url: '/autumn',
            templateUrl: 'pages/seasons/autumn.html'
        })


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

          .state('explore.automotive', {
            url: '/automotive',
            templateUrl: 'pages/explore/automotive.html'
        })

           .state('explore.hotel', {
            url: '/hotel',
            templateUrl: 'pages/explore/hotel.html'
        })

            .state('explore.spa', {
            url: '/spa',
            templateUrl: 'pages/explore/spa.html'
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

          .state('explore.shopping', {
            url: '/shopping',
            templateUrl: 'pages/shopping.html'
        })

           .state('explore.coffee', {
            url: '/coffee',
            templateUrl: 'pages/explore/coffee.html'
        })

           .state('about', {
            url: '/about',
            templateUrl: 'pages/about.html'
        })



        // nightlife page =================================
        .state('explore.nightlife', {
            url: '/nightlife',
            templateUrl: 'pages/nightlife.html'
        });
});




app.controller('MainCtrl', function ($scope){

    $scope.name = "aldin";

});
