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

})

    .controller('HomeController', function($scope, $http){
        $http.get('json/profile.json').success(function(data) {
            $scope.profile = data;
        })
    })

    .controller('DesignController', function($scope, $http){
        $http.get('json/furmata.json').success(function(data) {
            $scope.furmata = data;
        });
        $http.get('json/infographic.json').success(function(data) {
            $scope.info = data;
        });
    })

    .controller('WebdevController', function($scope, $http){
        $http.get('json/websites.json').success(function(data) {
            $scope.websites = data;
        })
    })

    .controller('ResumeController', function($scope,$http){
        $http.get('json/courses.json').success(function(data) {
            $scope.courses = data;
        })
    });