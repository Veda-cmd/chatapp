var app = angular.module("myApp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider)
{
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('login',
    {
        url:"/login",
        templateUrl:"templates/login.html",
        controller: "loginController"
    })
    .state('register',
    {
        url:"/register",
        templateUrl:"templates/registration.html",
        controller: "registerController"
    })
    .state('reset',
    {
        url:"/reset/:token",
        templateUrl:"templates/resetPassword.html",
        controller: "resetController"
    })
    .state('forgot',
    {
        url:"/forgot",
        templateUrl:"templates/forgotPassword.html",
        controller: "forgotController"
    })
})