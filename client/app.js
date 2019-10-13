/**
* @description: 
* @file: app.js
* @author: Vedant Nare
* @version: 1.0
*/ 

/** 
*@description variable app is used to import abngular module and inject dependencies.
*/
var app = angular.module("myApp",['ui.router','btford.socket-io']);

/** 
*@description ui-router dependency is being used for routing to different templates
*/

app.config(function($stateProvider,$urlRouterProvider)
{
    /** 
    *@description default page on loading will be login. This is done by $urlRouterProvider.
    */

    $urlRouterProvider.otherwise("/register");
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
    .state('dashboard',
    {
        url:'/dashboard',
        templateUrl:'templates/dashboard.html',
        controller:'chatController'
    })
})

/** 
*@description Socket Service is used for socket-io connection.
*/

app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000/')
    });

}]);

