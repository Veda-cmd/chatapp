var app = angular.module("myApp");
app.service('userService',function($http)
{
   this.login = (data) =>
   {
    return $http({
        method : 'POST',
        url:"http://localhost:3000/login",
        data: data
    });
   }

   this.register = (data) =>
   {
    return $http({
        method : 'POST',
        url:"http://localhost:3000/register",
        data: data
    });
   }
})