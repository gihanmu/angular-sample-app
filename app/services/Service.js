(function() {

    angular.module('app')
        .factory('TestService', ['$q','$http',TestService]);


    function TestService($q,$http) {
         return{
            getData:getData
        }
        

        function getData(){
			return "Hello World"
			
			//use below code snippet to make a web service call
//           var defered=$q.defer();
//           
//                $http({
//                     method: 'GET',
//                    url: 'http://restUrl/api'
//                }).then(function(response){
//                    defered.resolve(response);
//
//                }).catch(function(response){
//                    defered.reject("Error in retrieving data "+response.status);
//
//                })
//
//           return defered.promise;
        }

           
        


       

    }

  

}());