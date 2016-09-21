/*global angular */
var mainApp = angular.module("mainApp", ['ui.bootstrap']);
mainApp.controller('userController', function ($scope) {
    'use strict';

    $scope.filteredUsers = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 5;
    $scope.maxSize = 5;
    $scope.numbersPerPage = [5, 10, 15, 20];

    $scope.numPages = function () {
        return Math.ceil($scope.todos.length / $scope.numPerPage);
    };
    $scope.numPages = function () {
        return Math.ceil($scope.users.length / $scope.numPerPage);
    };

    $scope.$watch('currentPage + numPerPage', function () {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage), end = begin + $scope.numPerPage;

        $scope.filteredUsers = $scope.users.slice(begin, end);
    });

    $scope.users = [
        {
            id: 1,
            username: "Johnny5",
            postTitle: "My new car",
            views: 1001,
            likes: 464,
            createdAt: "2014-05-02"
        },
        {
            id: 2,
            username: "Johnohm",
            postTitle: "Best journey",
            views: 5432,
            likes: 535,
            createdAt: "2015-03-02"
        },
        {
            id: 3,
            username: "Lady10",
            postTitle: "Sport",
            views: 105,
            likes: 15,
            createdAt: "2014-02-02"
        },
        {
            id: 4,
            username: "Braddy",
            postTitle: "Famous actors",
            views: 1265,
            likes: 548,
            createdAt: "2016-05-03"
        },
        {
            id: 5,
            username: "Ohm",
            postTitle: "Sport",
            views: 156,
            likes: 75,
            createdAt: "2014-01-10"
        },
        {
            id: 6,
            username: "Kowalsky92",
            postTitle: "Books",
            views: 15145,
            likes: 8654,
            createdAt: "2016-10-09"
        }
    ];
});