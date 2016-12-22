/**
 * Created by Banana on 2016/5/31.
 */
var Order = angular.module('Order',['ng','ngAnimate','ngRoute','ngTouch']);
Order.config(function($routeProvider){
    $routeProvider.when('/start',{
        templateUrl:'tpl/index1.html',
        controller:'Mh'
    }).when('/main',{
        templateUrl:'tpl/main.html'
    }).when('/detail',{
        templateUrl:'tpl/detail.html',
        controller:'Mdetail'
    }).when('/order1',{
        templateUrl:'tpl/order1.html',
        controller:'Mo1'
    }).when('/order2',{
        templateUrl:'tpl/order2.html'
    }).otherwise({
        redirectTo:'/start'
    })
});
Order.controller('Mbody',function($scope,$http,$location){
    $http.get("data/shuju.json").success(function(data){
        var n = 5;
        $scope.loadData = function(){
            //if(data.length<n){
            //    n = data.length;
            //    $scope.hide = 'de';
            //    $scope.textshow = "ow";
            //}
            $scope.empList=data.slice(0,n);
            n+=5;
        };
        $scope.loadDetail = function(){
            $scope.deTail = data[this.$index];
            console.log(data[this.$index]);
            $location.path('/detail');
        };
    });
});
Order.controller('Mh',function($scope,$rootScope,$location){
    $scope.start = function(){
        $rootScope.show = 'how';
        $location.path('/main');
        $scope.loadData();
    };
});
Order.controller('Mf',function($scope,$rootScope,$location){
    $scope.index = function(){
        $location.path('/start');
        $rootScope.show = '';
    }
});
Order.controller('Mn',function($scope,$rootScope,$location){
    $scope.navLink = function(){
        $location.path('/start');
        $rootScope.show = '';
    }
});
Order.controller('Mo1',function($scope,$location){
   $scope.orderClick = function(){

       $location.path('/order2');
   }
});
Order.controller('Mdetail',function($scope,$location){
    $scope.detailClick = function(){
        $location.path('/main');
    };
    $scope.dClick = function(){
        $location.path('/order1');
    }
});