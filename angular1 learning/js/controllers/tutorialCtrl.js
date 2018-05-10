 angular.module("tutorialCtrlModule",[])  //controller

      .controller("TutorialCtrl",["$scope","cal",function($scope , cal) {

        $scope.tutorialObject = {};
        $scope.tutorialObject.title = " main page";
        $scope.tutorialObject.subTitle = " sb title";

        $scope.tutorialObject.bindOutput = 2;
//declared in a way so it can be used two way data binding
          $scope.tutorialObject.firstname ="Nihar";
          $scope.tutorialObject.lastname = "Saini";
//one way data binding
$scope.timeTwo =function () {

    //now including our services there
    $scope.tutorialObject.bindOutput = cal.timeTwo($scope.tutorialObject.bindOutput);
    
}
    }])
//creating directives
      .directive ("welcomemessage",function() {
          return{
              restrict : "E",
              template:"<div> nihar what's doing on</div>"
          }


      })

 //creating services

 .factory("cal",function () {

     var cal ={};
     cal.timeTwo = function(a) {

         return a * 2;

     }
     return cal;
 })
 .controller("TutorialCtrl2",["$scope",function($scope) {
     $scope.secondTutorial = "this is the second tutorial"
 }]);
