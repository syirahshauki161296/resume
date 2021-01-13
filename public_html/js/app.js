var app = angular.module('ResumeApp', ['ngRoute','resumeCtrlModule']);

app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: "views/profile.html",
            controller: "ProfileCtrl"
        })
        .when("/education",{
            templateUrl: "views/education.html",
            controller: "ProfileCtrl"
        })
        .when("/work_experience",{
            templateUrl: "views/work_experience.html",
            controller: "ProfileCtrl"
        })
        .when("/skill",{
            templateUrl: "views/skill.html",
            controller: "ProfileCtrl"
        })
        .when("/contact",{
            templateUrl: "views/contact.html",
            controller: "ProfileCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });

});