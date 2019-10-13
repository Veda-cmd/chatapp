/**
 * @description: 
 * @file: userService.js
 * @author: Vedant Nare
 * @version: 1.0
 */

app.service('userService',function($http)
{
    /**
    *@description login service is used to check whether credentials are correct or not. 
    */ 

   this.login = (data) =>
   {
    return $http({
        method : 'POST',
        url:"http://localhost:3000/login",
        data: data
    });
   }

    /**
    *@description register service is used to for user registration. 
    */

   this.register = (data) =>
   {
    return $http({
        method : 'POST',
        url:"http://localhost:3000/register",
        data: data
    });
   }

    /**
    *@description forgot password service is used for resetting user password. 
    */

   this.forgotPassword = (data) =>
   {
    return $http({
        method : 'POST',
        url:"http://localhost:3000/forgot",
        data: data
    });   
   }

    /**
    *@description reset password service is used for storing new password. 
    */

   this.resetPassword = (data) =>
   {
    return $http({
        method : 'POST',
        url:"http://localhost:3000/reset",
        data: data
    });   
   }

   /**
    *@description To get list of registered users for chat template. 
    */

   this.getAllUsers = () =>
   {
    return $http({
        method : 'GET',
        url:"http://localhost:3000/dashboard",
    });
   }

})