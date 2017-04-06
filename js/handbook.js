
var app = angular.module("automap",["ngStorage", 'ngRoute', 'ngAnimate']);

app.controller('autoCtrl', 
    ['$scope', '$http', '$filter', '$sce', '$localStorage', '$route', '$handbook', autoCtrl]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "handbook-pages/main.html"
    })
    .when("/ans/:id", {
        templateUrl : "handbook-pages/answer.html"
    })
  }
)

app.filter('makeBr', function(){
    return function(str){
      str = str || '';
      return str.replace(/\s/g, '<br>').replace(/&nbsp;/g, '<br>') || '';

    }
  }).filter('has', function(){
    return function(list, key){
      list = list || [];
      return list.filter(function(o){return !key || (o.q+o.c).indexOf(key) > -1});

    }
  }).directive('focus', function($timeout) {
    return {
      scope : { trigger : '@focus' },
       link : function(scope, element) {
 
       scope.$watch('trigger', function(value) {
        
        if (value === "true") {         
         $timeout(function() {         
           element[0].focus();
         });
        }
       });
   }
  };
 }
); 


  function autoCtrl ($scope, $http, $filter, $sce, $localStorage, $route, $handbook) {


    $scope.storage = $localStorage.$default(
      {}
    );

    $scope.catagories =  $handbook.catagories;



    angular.extend($scope, {
      $route: $route,
      feedback: false,
      highlightAndMakeBr: function(text, search) {
        text = $filter('makeBr')(text);
              if (!search) {
                  return $sce.trustAsHtml(text);
              }
              return $sce.trustAsHtml(text
                .replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));

      },
      viewH: function(){
        return $scope.current || $scope.here;
      },
      myOrd: function(faq){
        var id = $scope.faqs.indexOf(faq);
        var o = $scope.catagories.map(function(o){return o.t}).indexOf(faq.c);
        o = (o==-1) ? 10000 : o;
        return o*100 + id;
      },
      toCatagory: function(list,key) {
        var ans = {};
        for (var i = 0; i < list.length; i++) {
          if (list[i][key]) {
            var ks = list[i][key].split(' ');
            for (var j = 0; j < ks.length; j++) {
              var c = ks[j];
              ans[c] = ans[c] || 0;
              ans[c]++; 
            };
          }
        };
        return ans;
      },
      cataColor: function(n) {
        return ($scope.catagories.filter(
          function(o){return o.t == n}
        )[0] || {}).color || '#999'
      },
      cataIcon: function(n) {
        return ($scope.catagories.filter(
          function(o){return o.t == n}
        )[0] || {}).icon || 'user'
      },
      feed: function(x,q) {
        console.log(x);
        console.log(q);

        var cell = x ? 'A2' : 'C2';

        $http({
        method : 'GET',
        url : 'https://ethercalc.org/handbook-feedback.csv'
          }).then(
            function(res) {
                var time = new Date().toString();
                var d = res.data;
                console.log(d);
                cell_lenth = d.split("\n").length;
                console.log(cell_lenth);
                var url = 'https://ethercalc.org/_/handbook-feedback';
                my_post( 'A' + cell_lenth, time);
                my_post( 'B' + cell_lenth, 'website');
                my_post( 'C' + cell_lenth, x);
                my_post( 'D' + cell_lenth, q);
                function my_post(cell,text) {
                  $http({
                    method : 'POST',
                    url: url,
                    dataType: 'application/json',
                    processData: false,
                    //data: { "command" : 'append' + '???'}
                    data: { "command": 'set ' + cell + ' text t ' + text}
                  });
                }
            }, function(res){
              console.log(res.statusText)
            }
        ) 
      }
    })            

    var allData = ['faqs'];
    for (var i = 0; i < allData.length; i++) {
      var t = allData[i];
      $scope[t] =  $handbook[t] || $localStorage[t];
      if (JSON.stringify($localStorage[t]) != JSON.stringify($scope[t])) $scope[t+'S'] = $scope[t+'S'] || 'new';
      $localStorage[t] = $scope[t] || $localStorage[t] || [];
    };


    $http({
        method : 'GET',
        url : './static/api/handbook-data.json'
    }).then(
      function(res) {
          var d = res.data;
          console.log(d);
          $scope.faqs = d.faqs;
          $scope.catagories = d.catagories;
      }, function(res){
        console.log(res.statusText)
      }
    )


  }
