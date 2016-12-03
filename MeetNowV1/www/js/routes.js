angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('just2', {
    url: '/page1',
    templateUrl: 'templates/just2.html',
    controller: 'just2Ctrl'
  })

  .state('settings', {
    url: '/page2',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('iMInTheMoodFor', {
    url: '/page3',
    templateUrl: 'templates/iMInTheMoodFor.html',
    controller: 'iMInTheMoodForCtrl'
  })

  .state('candidates_old', {
    url: '/page4',
    templateUrl: 'templates/candidates_old.html',
    controller: 'candidates_oldCtrl'
  })

  .state('myProfile', {
    url: '/page5',
    templateUrl: 'templates/myProfile.html',
    controller: 'myProfileCtrl'
  })

  .state('peopleToMeet', {
    url: '/page6',
    templateUrl: 'templates/peopleToMeet.html',
    controller: 'peopleToMeetCtrl'
  })

  .state('mortan', {
    url: '/page7',
    templateUrl: 'templates/mortan.html',
    controller: 'mortanCtrl'
  })

  .state('candidates', {
    url: '/page8',
    templateUrl: 'templates/candidates.html',
    controller: 'candidatesCtrl'
  })

  .state('findMeNow', {
    url: '/page10',
    templateUrl: 'templates/findMeNow.html',
    controller: 'findMeNowCtrl'
  })

  .state('chat', {
    url: '/page11',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});