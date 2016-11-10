
var app = angular.module("automap",["ngStorage", 'ngRoute', 'ngAnimate']);

app.controller('autoCtrl', 
    ['$scope', '$filter', '$sce', '$localStorage', '$route',
     '$hack', '$handbook', autoCtrl]);

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


app.factory('$hack', function() {
    return {        
          fromTable: function(str) {

                  if (!(str.match(/<tr(.*?)<\/tr>/))) return [];

                  var heads = str.match(/<tr(.*?)<\/tr>/)[0]
                                .match(/\((.*?)\)/g)
                                  .map(function(s){return s.replace(/\((.*)\)/g,'"$1"')});
            //      console.log(heads);
                  var ans = 
                          str
                          .replace(/(.*)<tbody>/g,'[')
                                .replace(/<\/tbody>(.*)/g,']')
                          .replace(/<tr(.*?)<\/tr>/,'')
                                .replace(/<tr>/g,'{')
                                .replace(/<\/tr>/g,'},\n')
                                  .replace(/<\/td>/g,'",')
                                    .replace(/,(\s*)}/g, '}')
                                    .replace(/,(\s*)]/g, ']')
                                      .replace(/&amp;/g, '&')
                                ;

                  var counter = 0;
                  while(/<td(.*?)>/.exec(ans) !== null) {
                       ans = ans.replace(/<td(.*?)>/,heads[counter]+' : "');
                       counter++;
                       counter = counter % heads.length;
                  }

                  ans = ans.replace(/<.*noscript>/gm,'')
                          .replace(/&lt;.+&gt;/g,'');
          //         console.log(ans);

                   var json;
                     try {json = JSON.parse(ans)} catch (err) { console.log(err)};
                   
                   return json;

        }
      }
  }).filter('makeBr', function(){
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


  function autoCtrl ($scope, $filter, $sce, $localStorage, $route, $hack, $handbook) {

    $scope.storage = $localStorage.$default(
      {}
    );


    $scope.catagories = [
      {t: '法源', color: '#9ef', icon: 'law'},
      {t: '申請', color: '#f99', icon: 'edit'},
      {t: '家庭', color: '#f93', icon: 'home'},
      {t: '交友', color: '#fca', icon: 'add user'},
      {t: '計畫', color: '#0f0', icon: 'hourglass half'},
      {t: '審議', color: '#fcf', icon: 'protect'},
      {t: '資源', color: '#c9c', icon: 'in cart'},
//      {t: '其他', color: '#999'},
    ];



    angular.extend($scope, {
      $route: $route,
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
      }
    })            

    var allData = ['faqs'];

            for (var i = 0; i < allData.length; i++) {
              var t = allData[i];
          //    var j = $hack.fromTable(
          //      document.getElementById(t).innerHTML);
                          // j ||
              $scope[t] =  $handbook[t] || $localStorage[t];
           //   $scope[t+'S'] = (!j && 'bug') || '';

              if (JSON.stringify($localStorage[t]) != JSON.stringify($scope[t])) $scope[t+'S'] = $scope[t+'S'] || 'new';

              $localStorage[t] = $scope[t] || $localStorage[t] || [];

            };

   
   /*
    var catagory = $scope.toCatagory($scope.faqs, 'c');    
    var os = Object.keys($scope.catagory);
    for (var i = 0; i < os.length; i++) {
      $scope.catagories.push({
        t: os[i],
        n: $scope.catagory[os[i]]
      });
    }; */

  }
