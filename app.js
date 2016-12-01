(function () {
    angular.module('MyAngularApp', [])
        .controller('MyAngularController', CallController);

    function CallController($scope, $filter, $injector) {
        $scope.name = "Rajeshkumar"
        $scope.SayHello = function () {
            return "Hello World";
        };

        $scope.upper = function () {
            var upCase = $filter("uppercase");
            $scope.name = upCase($scope.name);
        };

        console.log($injector.annotate(CallController));
    }
})();