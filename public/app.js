var app =angular.module('poliApp', []);

app.controller('MainController', function($scope, $http){
  $scope.progressive = [];
  $scope.conservative = [];
  $scope.allCandidates = [];

 $scope.candidates = function(){
   console.log('Get me my candidates!')
   $http.get('/progressive').then(function(response){
     $scope.progressive = response.data;
   });
   $http.get('/conservative').then(function(response){
     $scope.conservative = response.data;
   });
}


$scope.winner = function(){
  console.log('Winner, winner chicken dinner!')
  $http.get('/allCandidates').then(function(response){
    $scope.allCandidates = response.data;
    shuffleArray($scope.allCandidates);
    $scope.winner= $scope.allCandidates[0];
    // $scope.allCandidates.shift();
    console.log($scope.allCandidates);
    console.log($scope.winner);
  })
}
})

// Shuffle array function
function shuffleArray(array) {
    var i = 0;
    var j = 0;
    var temp = null;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
