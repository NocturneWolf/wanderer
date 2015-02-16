angular.module("wandererApp", [])
.controller('wandererController', function ($scope) {
  $scope.gametitle = "Test Game";

  $scope.pc = {
    'name': "P.C. Name",
    'gender': "male",
    'species': "wolf",
    'health': 100,
    'score': 0
  };

  $scope.responses = [
    {
      'text': "Hi, welcome to the Wanderer engine! This is an experimental adventure game engine made by a very fluffy, silly and derpy person. The goal of this engine is to simulate old Sierra-style adventure games in a text-based format, but with a modern, response and interactive interface. Heck, this list will update with responses you've typed below even! Go on, give it a try! (Also, I promise this'll become a lot more interesting. Really.)",
      'byPlayer': false
    }
  ];

  $scope.addPlayerResponse = function () {
    $scope.responses.unshift({
      'text': $scope.responseText,
      'byPlayer': true
    });
    $scope.responseText = "";
  };
});
