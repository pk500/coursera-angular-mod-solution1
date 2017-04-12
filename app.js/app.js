(function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',textMoond)
    textMoond.$inject['$scope'];
    function textMoond($scope) {
        $scope.disList='';
        
        $scope.result="";
        $scope.mystyle="";
        
        $scope.checkMoond=function(){
            var totaldis=$scope.disList.split(/\s*,\s*/);
            
            var totalle= totaldis.length;
            console.log($scope.disList);
            console.log(totaldis);
            console.log(totalle);

            if(totalle<=3&&$scope.disList!==""){
               if($scope.disList!=='""'){
                $scope.result="Enjoy!";
                $scope.mystyle={
                    
                    "color":"green",
                    "border":"1px solid green",
                    "padding":"5px"};
               }
            
               else {
                    $scope.result="Please enter data first";
                $scope.mystyle={"color":"red",
                    "border":"1px solid red",
                    "padding":"5px"};
                   
               }
            }
            else if (totalle>3) {
                $scope.result="Too much!";
                $scope.mystyle={"color":"green",
                    "border":"1px solid green",
                    "padding":"5px"};
                
            }
            else {
                $scope.result="Please enter data first";
                $scope.mystyle={"color":"red",
                    "border":"1px solid red",
                    "padding":"5px"};
            }


            
           


        };

        
    }
})();
