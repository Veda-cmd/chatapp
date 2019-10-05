app.controller("loginController", function($scope,$window,userService)
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
         alert('Login successful');
         console.log(response.data)
      }).catch(function(response)
      {
         console.log(response.data);
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
         alert('Registration successful');
         console.log(response.data);
      }).catch(function(response)
      {
         console.log(response.data);
      })
   }

});

app.controller("forgotController", function($scope,userService)
{
   $scope.submit = () =>
   {
      var data = {
         email : $scope.username,
      }
      userService.forgotPassword(data).
      then(function(response)
      {
         alert('New Password entered successful');
         console.log(response.data);
      }).catch(function(response)
      {
         console.log(response.data);
      })
   }

});

app.controller("resetController", function($scope,userService)
{
   $scope.submit = () =>
   {
      var data = {
         password:$scope.old,
         password_new:$scope.new
      }
      userService.resetPassword(data).
      then(function(response)
      {
         alert('New Password entered successful');
         console.log(response.data);
      }).catch(function(response)
      {
         console.log(response.data);
      })
   }

});