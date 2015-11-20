/**
 * Created by Kaitlin on 11/17/2015.
 */

// Create app
var myApp = angular.module('myApp', ['ui.router']);

// Configure app

// Config route provider
myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url:'/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
        .state('design', {
            url:'/design',
            templateUrl: 'templates/design.html',
            controller: 'DesignController'
        })

        .state('webdev', {
            url:'/webdev',
            templateUrl: 'templates/webdev.html',
            controller: 'WebdevController'
        })

        .state('resume', {
            url:'/resume',
            templateUrl: 'templates/resume.html',
            controller: 'ResumeController'
        })

        .state('contact', {
            url:'/contact',
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })
})

    .controller('HomeController', function($scope){
        $scope.number = 11
    })

    .controller('DesignController', function($scope){
        $scope.about = "lulz"
    })

    .controller('WebdevController', function($scope){
        $scope.url = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxQsAjBs4XP8pRpolc0sccO7TP_VyPme985MFZrtFVH8hB5ueGBA"
    })

    .controller('ResumeController', function($scope,$http){
        $http.get('json/classes.json').success(function(data) {
            $scope.url = data;
        })
    })

    .controller('ContactController', function($scope){
        $scope.url = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxQsAjBs4XP8pRpolc0sccO7TP_VyPme985MFZrtFVH8hB5ueGBA"
    });