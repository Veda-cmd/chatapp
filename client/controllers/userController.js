app.controller("loginController", function($scope,userService)
{
   $scope.submit = () =>
   {
      var data = {
         email : $scope.username,
         password : $scope.password
      }
      userService.login(data).
      then(function(response)
      {
         console.log(response);
      }).catch(function(response)
      {
         console.log(response);
      })
   }

});

app.controller("registerController", function($scope,userService)
{
   $scope.submit = () =>
   {
      var data = {
         firstName:$scope.first,
         lastName:$scope.last,
         email : $scope.username,
         password : $scope.password
      }
      userService.register(data).
      then(function(response)
      {
         console.log(response);
      }).catch(function(response)
      {
         console.log(response);
      })
   }

});