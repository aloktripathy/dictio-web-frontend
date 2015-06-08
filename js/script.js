var app = angular.module('myApp', []).
    controller('HelloController', function($scope){
        $scope.HelloTo = {}
        $scope.HelloTo.title = 'Angular JS'
    });

$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();
});