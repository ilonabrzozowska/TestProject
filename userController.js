/*global angular, window */
var mainApp = angular.module("mainApp", ['ui.bootstrap']);

mainApp.filter('startFrom', function () {
    'use strict';
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});

mainApp.controller('userController', function ($scope) {
    'use strict';

    $scope.filteredUsers = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 5;
    $scope.maxSize = 5;
    $scope.numbersPerPage = [5, 10, 15, 20];

    $scope.sortType     = 'id';
    $scope.sortReverse  = false;

    $scope.numPages = function () {
        return Math.ceil($scope.users.length / $scope.numPerPage);
    };

    $scope.filter = function () {
        window.setTimeout(function () {
            $scope.numPages = function () {
                return Math.ceil($scope.filteredUsers.length / $scope.numPerPage);
            };
        }, 10);
    };

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

    $scope.generateUsers = function () {
        var i, element;
        for (i = 7; i < 1000; i += 1) {
            element = {id: i, username: "user " + i, postTitle: "Title number " + i, views: (Math.floor(Math.random() * 5000)),
                           likes: (Math.floor(Math.random() * 1000)), createdAt: "2016-01-01"};
            $scope.users.push(element);
        }
    };

    $scope.generateUsers();

    $scope.addUser = function () {
        var id = $scope.users.length + 1,
            user = {
                id: id,
                username: $scope.username,
                postTitle: $scope.postTitle,
                views: $scope.views,
                likes: $scope.likes,
                createdAt: $scope.createdAt
            };
        $scope.username = '';
        $scope.postTitle = '';
        $scope.views = '';
        $scope.likes = '';
        $scope.createdAt = '';
        try {
            $scope.users.push(user);
            window.alert("Success!");
        } catch (x) {
            window.alert("Something goes wrong :(");
        }
    };
});