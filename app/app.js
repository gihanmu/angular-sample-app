

    var app = angular.module('app', ['ui.router']);



    app.config(function($stateProvider, $urlRouterProvider) {
		//use below code snippet for routing 
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider    
        .state('home', {
            url: '/home',
            controller:'MainController',
            templateUrl: 'app/views/partial1.html'
              
        })
      
        
});



