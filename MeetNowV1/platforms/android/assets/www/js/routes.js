angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('meetNow', {
    url: '/page1',
    templateUrl: 'templates/meetNow.html',
    controller: 'meetNowCtrl'
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

  .state('candidates', {
    url: '/page4',
    templateUrl: 'templates/candidates.html',
    controller: 'candidatesCtrl'
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

  .state('candidates_new', {
    url: '/page8',
    templateUrl: 'templates/candidates_new.html',
    controller: 'candidates_newCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});