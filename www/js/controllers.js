angular.module('starter.controllers', [])

.controller('SigninCtrl', function($scope) {})

.controller('ClientCtrl', function($scope) {})

.controller('NewClientCtrl', function($scope) {})

.controller('ResourceCtrl', function($scope) {})

.controller('RemindersCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

clientmanagement.controller('ClientInfo',function($scope) {
  $scope.saveData = function(v) {
    console.log('v');
    window.localStorage.setItem("data", v);
  }
  $scope.loadData = function() {
  var records = [{ name: 'Pinky', age: 1 }, { name: 'Brain', age: 2 }];  
  localStorage.setItem('records', JSON.stringify(records));  
  var output = JSON.parse(localStorage.getItem('records'));  
  console.table(output); 
  }

});



clientmanagement.controller('ClientSaveCtrl', function($scope, $localStorage, $ionicPopup) {
  $scope.save = function() {

      $localStorage.firstname = $scope.firstname;
      $localStorage.lastname = $scope.lastname;
      $localStorage.middlename = $scope.middlename;
      $localStorage.birthdate = $scope.birthdate;
      $localStorage.address = $scope.address;
      $localStorage.city = $scope.city;
      $localStorage.telno = $scope.telno;

            $ionicPopup.alert({
              title: 'Success',
              content: 'Data Saved'
            });
  }

  $scope.load = function() {
      $scope.firstname = $localStorage.firstname;
      $scope.lastname = $localStorage.lastname;
      $scope.middlename = $localStorage.middlename;
      $scope.birthdate = new Date($localStorage.birthdate);
      $scope.address = $localStorage.address;
      $scope.city = $localStorage.city;
      $scope.telno = $localStorage.telno;
  }

});
