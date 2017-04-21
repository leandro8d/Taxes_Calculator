/*
  Author: Leandro Correa
  Github: leandro8d
  linkedin/email: leandro8d@hotmail.com
*/
app.controller("calcController", function ($scope) {
    
    //Data for the dropdown
    $scope.typeTaxes = [{desc: "Monthly", id: 1}, {desc: "Half Semester", id: 3}, {desc: "Half Yearly", id: 6}, {desc: "Yearly", id: 12}];

    
    // Function that trigger the calculation to be made according to the selected item from dropdown
    $scope.callFunction = function ()
      {
                   if ($scope.selection == 1)
                       $scope.calcSimpleTaxes();
              else if($scope.selection == 2)
                       $scope.calcCompoundTaxes();
              else alert('Select an option before to continue!');
      };

    $scope.calcSimpleTaxes = function ()
      {
            var total = ($scope.iniValue * (1 + ($scope.tax / 100) * $scope.months));
            $scope.result = "Calculated Interest: " + (total - $scope.iniValue).toFixed(2) + "         Total Amount: " + total.toFixed(2);
      };
    
    $scope.calcCompoundTaxes = function ()
      {
            var total = $scope.iniValue * (Math.pow(parseInt(($scope.selectedOption), 10) + ($scope.tax / 100), $scope.months));
            $scope.result = "Calculated Interest: " + (total - $scope.iniValue).toFixed(2) + "         Total Amount: " + total.toFixed(2);
      };


});