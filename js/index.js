

angular.module("automap",["goban"])
  .controller('autoCtrl',  ['$scope','$timeout','$window', '$goban', autoCtrl]);

  function autoCtrl($scope, $timeout, $window, $goban){
    $scope.goban = $goban.$default({
      path : 'https://ethercalc.org/',
//      path : './backup/',
      title : 'autolearn_main',
      colMax : 0,//3,
      hasLimit: true,
      isLoop: true,
      data : indexData,
      sectionTitle : '自學地圖'
    });
    $scope.goban.init();

    $scope.countHeight = function(){
      var navH = 50;
      return $window.innerHeight - 40 - navH;
    };

    $scope.countWidth = function(hideSideBar){
      var delta = (!hideSideBar && 285) || 0;
      return $window.innerWidth - delta;
    };

    if($window.innerWidth < 540) {
      $scope.hideSideBar = true;
    }

    angular.element($window).bind('resize', function(){
      $scope.$digest();
    });

    $scope.myOptsNew = [
      {h:'autolearn_main', n:'非學校教育'}
    ];

    //models
    angular.extend($scope, {
      steps: [
        {n:0, t:'自學123'},
        {n:1, t:'學習資源'},
//        {n:'社群參與'},
//        {n:'志願服務'}
      ]
    });

    //methods
    angular.extend($scope, {
      maybeNewTab: function(event, j){
        console.log(j);
        if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            window.open($scope.goban.data[j].url);
        }
      },
      logData: function(){
        console.log($goban.data);
        console.log(JSON.stringify($goban.data));
      },
      countElemsIn: function(j, data) {
//        console.log(data);
//        console.log(j);
        var ans = 0;
        for (var i = j+1; i < data.length; i++) {
          if (data[i].isFolder) { break } else { ans++ }
        }
        return ans
      }
    });

    $timeout(function() {
      $scope.late = true
    },5000);


  } 
  

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-26178243-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();




