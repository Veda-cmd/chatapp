/**
 * @description: 
 * @file: userController.js
 * @author: Vedant Nare
 * @version: 1.0
 */

/**
 * @description regex pattern is used for validation for input.
 */  

var emailPattern =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm,
   passwordPattern = /^[a-zA-Z0-9]{6,30}$/;

/**
 * @description login function is run from here.
 */ 

app.controller("loginController", function($scope,$window,userService)
{ 
   try
   {
      $scope.submit = () =>
      {
         if(!emailPattern.test($scope.username) && !passwordPattern.test($scope.password))
            return;

         var data = {
            email : $scope.username,
            password : $scope.password
         }
         userService.login(data).
         then(function(response)
         {
            alert('Login successful'); 
            sessionStorage.setItem('UserID',response.data.id);
            sessionStorage.setItem('Username',response.data.firstName);
            $window.location.href = 'http://localhost:3000/#!/dashboard';  
         }).catch(function(response)
         {
            alert('Email/password is incorrect');
            console.log(response);
         })
      }
   }
   catch(err)
   {
      console.log('Error: ',err);
   }

});

/**
 * @description register function is run from here.
 */

app.controller("registerController", function($scope,$window,userService)
{
   try
   {
      $scope.submit = () =>
      {
         if(!emailPattern.test($scope.username) && !passwordPattern.test($scope.password))
            return;

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
            $window.location.href = 'http://localhost:3000/#!/login';
         }).catch(function(response)
         {  
            alert('Registration unsuccessful');
            console.log(response.data);
         })
      }
   }
   catch(err)
   {
      console.log('Error: ',err);
   }
});

/**
 * @description Forgot Password function is run from here.
 */

app.controller("forgotController", function($scope,userService)
{
   try
   {
      $scope.submit = () =>
      {
         if(!emailPattern.test($scope.username))
            return;

         var data = {
            email : $scope.username,
         }
         userService.forgotPassword(data).
         then(function(response)
         {
            alert('Reset link has been sent to your email');
            console.log(response);
         }).catch(function(response)
         {
            console.log(response);
         })
      }
   }
   catch(err)
   {
      console.log('Error: ',err);
   }
});

/**
 * @description Reset password function is run from here.
 */

app.controller("resetController", function($scope,$stateParams,userService)
{
   try
   {
      $scope.submit = () =>
      {  
         if(!passwordPattern.test($scope.old) && !passwordPattern.test($scope.new))
            return;

         $scope.token = $stateParams.token;
         var data = {
            token:$scope.token,
            password:$scope.old,
            password_new:$scope.new
         }
         userService.resetPassword(data).
         then(function(response)
         {
            alert('Password reset successful');
            console.log(response.data);
         }).catch(function(response)
         {
            alert('Password reset unsuccessful');
            console.log(response.data);
         })
      }
   }
   catch(err)
   {
      console.log('Error: ',err);
   }
});

