angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.factory('PlaylistFactory', function(){
    var factory = {
      playlists : [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
      ],
      getPlaylists : function(){
        return factory.playlists;
      },
      getPlaylist : function(id){
        var playlist = {};
        angular.forEach(factory.playlists, function(value, key){
          if(value.id == id){
            playlist = value
          }
        });
        return playlist;
      }
    };
    return factory;
})

.controller('PlaylistsCtrl', function($scope, PlaylistFactory) {
  $scope.playlists = PlaylistFactory.getPlaylists();
})

.controller('PlaylistCtrl', function($scope, $stateParams, PlaylistFactory) {
    var playlist = PlaylistFactory.getPlaylist($stateParams.playlistId);
    $scope.title = playlist.title;
});