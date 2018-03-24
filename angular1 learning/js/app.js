var app = angular.module("tutorialApp",["ngRoute","tutorialCtrlModule "]);// module

app.config(function($routeParams) {

    $routeParams
        .when("/",{


            templateUrl :"views/tutorial.html",
            controller :"TutorialCtrl"

        })
})

