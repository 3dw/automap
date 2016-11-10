
$(document).ready(function(){
    $('#forceYes').prop('checked', false);
// console.log(navigator.userAgent);
});


angular.module("listApp",["firebase"])
  .controller('Ctrl', ['$scope', '$firebase', Ctrl])
  .config(['$compileProvider', function($compileProvider) {  // fix unsafe bug
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|data):/);
  }]).filter('makeQR',function(){
    return function(str){
      return str.replace('https://','').replace('http://','');
    }
  }).filter('maybeHTTP',function(){
    return function(str){
      if (str.substr(0,4) != 'http') str = 'http://' + str;
      return str;
    }
  }).filter('makeMoe',function(){
    return function(x){      
      return encodeURIComponent(x.replace(/ /g, '　').replace(/[ -~]/g, function(it){ return String.fromCharCode(it.charCodeAt(0) + 0xFEE0); }))
    }
  }).filter('makeCharList',function(){
    return function(str) {
      var ans = [];
      for (var i = 0; i < str.length; i++) {
        ans.push(str.substr(i,1));
      };
      return ans;
    }
  }).filter('checked',function(){
    return function(objs) {
      var list = [];
        for (var i = 0; i < objs.length; i++) {
           if (objs[i].checked) list.push(objs[i]);
         }; 
      return list;
    }
  }).filter('notNullTag',function(){
    return function(objs) {
//      console.log(objs.filter(function(o){ return o.t == '字典'})   )
      return objs.filter(function(o){ return o.n && o.t });
    }
  }).filter('limitTag',function(){
    return function(str, lim) {
      if (lim < 0) lim = 0;
      var tags = str.split(' ');
      return tags.slice(0,lim).join(' ');
    }
  }).filter('useKey',function(){
    return function(objs, key, inv) {

      if (!key) return objs;

      var keys=[];
      try {keys = key.split(' ')} catch(err){ };
      var list = [], others = [];
      var min = 0, max = Infinity;
    
      for (var i = 0; i < objs.length; i++) {

          var good = true;
              
          for (var j = 0; j < keys.length; j++) {
              var thisGood = false;
              var akey = keys[j];
              var akeys = akey.split('/');

              for (var k = 0; k < akeys.length; k++) {
                var ke = akeys[k];

                try {
                  min = objs[i].tags.match(/\d+[~\+]/g)[0].replace(/[~\+]/,'');        
                  max = objs[i].tags.match(/\d+/g)[1] ? objs[i].tags.match(/\d+/g)[1] : Infinity;
      //             console.log(min+'/'+max);
                } catch (err){ }

                if (min <= parseInt(ke) && parseInt(ke) <= max) {
                  thisGood = true;
                }
                if ( parseInt(ke) != ke && (objs[i].title + objs[i].url + objs[i].tags).indexOf(ke) > -1) thisGood = true;
                }              

              if (!thisGood) good = false;
             
          };

          if (good) { list.push(objs[i]) } else { others.push(objs[i]) };
      };

      
      return inv ? others : list;
    }
  })/*.filter('noKey',function(){
    return function(objs, no) {

      if (!no) return objs;

      var nos = [];
      try {nos = no.split(' ')} catch(err){console.log(err)};
      var list = [];
      var min = 0, max = Infinity;


      for (var i = 0; i < objs.length; i++) {
        
        var good = true;

        for (var j = 0; j < nos.length; j++) {
            var not = nos[j];

            try {
              min = objs[i].tags.match(/\d+/g)[0];        
              max = objs[i].tags.match(/\d+/g)[1] ? objs[i].tags.match(/\d+/g)[1] : Infinity;
               console.log(min+'/'+max);
            } catch (err){ console.log(err) }

           if ((objs[i].title + objs[i].url + objs[i].tags).indexOf(not) > -1
                || (min <= parseInt(not) && parseInt(not) <= max)) {
              good = false;
           };
        };

        if (good) list.push(objs[i]);
      };
      return list;
    }
  })*/.filter('addQuote',function(){
    return function(str) {      
      return str ? '('+str+')' : '';
    }
  }).filter('sortByLocal',function(){
    return function(objs,locals) {
      if (!locals) return objs;
      var prio = locals.split('/');    
      return objs.sort(function(a,b){
        var aVal = 1, bVal = 1;  //a.ord b.ord
        for (var i = 0; i < prio.length; i++) {
          if ((a.title + a.url + a.tags).indexOf(prio[i]) > -1) aVal -= (prio.length - i) * 100;
          if ((b.title + b.url + b.tags).indexOf(prio[i]) > -1) bVal -= (prio.length - i) * 100;
        };
        return aVal - bVal;
      });
    }
  }).filter('allChecked',function(){
    return function(objs) {
        var ans = true;
        for (var i = 0; i < objs.length; i++) {

          if (!(objs[i].checked)) ans = false;
        };

   //     console.log(ans);
        return ans;
    }
  }).filter('forceChecked',function(){
    return function(objs,bool) {
        for (var i = 0; i < objs.length; i++) {

          objs[i].checked = bool;
        };
        
    }
  }).directive('autoComplete', function($timeout) {                
                  return {
                      replace: true,
                      scope: {
                        maps: '='
                      },
                      link: function(scope, iElement, iAttrs) {
                        scope.$watch(iAttrs.uiItems, function(newValue, oldValue) {
                            if (newValue) {
              //                console.log(scope['tags'].map(function(o){return o.t }) );
                  //              console.log("I see a data change!" + newValue);
                                iElement.autocomplete({
                                    source: (scope[iAttrs.uiItems].map(function(o){return o.t || '' }) ),
                                    select: function() {
                                        $timeout(function() {
                                          iElement.trigger('input');
                                        }, 0);
                                    }
                                });
                            }
                        }, true);                      
                      }
                  };
  }).directive('popup', function() {
    var p = {
        link : function(scope, iElement, iAttrs){
             //code to wrap the div (iElement) with a abs pos div (parentDiv)
            // code to add a mask layer div behind 
            // if the parent is already there, then skip adding it again.
           //use jquery ui to make it dragable etc.
            scope.$watch(iAttrs.popup, function(newVal, oldVal){
                 if(newVal){
         //            $(iElement).show();
                     console.log(newVal);

                     var fThis = myframe.contentWindow;

                     $('#myframe').attr('src', newVal);
                     

                   } 
                else{
           //        $(iElement).hide();
                  }
            });
        }
     }
    return p;  /* TOOL */
  }).filter('forDownload',function(){
    return function(obj){
      return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj))
    }   
  }).filter('forDownloadName',function(){
    return function(str){
      if (!str) {str = '' } else {str += '的'};
      return str+'資源分享.list.json';  //改這裡
    }   
    return function(list, x){
      var ans = [];
      var m = list.length;
      for (var i = 0; i < m; i++) {
        var k = (x+i-1) % m;
        ans.push(list[k]);
      };
      return ans;
    } 
  }).directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();

                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        var f = loadEvent.target.result; 
                        
                        if (f.substr(0,1) == '{') {
                            f = JSON.parse(f);
                        }                    
                        
                        scope.fileread = f;
                      
                    });
                }

                if (attributes.filetype == 'json') {
                  reader.readAsText(changeEvent.target.files[0]);
                } else {
                  reader.readAsDataURL(changeEvent.target.files[0]);
                
                }
            });
        }
      }
  }]);   /* TOOL */;

  function Ctrl ($scope, $firebase) {

//    $scope.Math = window.Math;
    $scope.$ = jQuery;
    $scope.key = decodeURI(location.hash).replace('#','');
    $scope.counter = 0;
    $scope.root = {};
    $scope.root.gifts = [];
    $scope.root.public = 2;  /// TOOL ///

    $scope.lrList = ["https://ethercalc.org/1v3161t7tu.csv"];

  //  $scope.lrList = ["data/learning_resouces.csv"];
    $scope.metaList = ["local_taiwan", "special_edu"];
    $scope.tags =[];  // $scope.tags = [{t: '數學', n: 3}, {t: '科學', n: 6}];
    $scope.pureTags =['數學','科學'];
    $scope.ageIndex = [0,0,0,0,1,1,3,4,5,6,7,5,0,0,0];
    $scope.ages = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,30,40,50,60,70,80,90,'無限'];

    $scope.local_taiwan = []; 
    $scope.special_edu = []; 

    $.ajax({
    type: "GET",    url: 'data/local_taiwan.txt',    dataType: "text",
        success: function(data) {
          $scope.readTxt(data,'local_taiwan');
          $scope.$digest();

 //        console.log($scope.local_taiwan);
        }
    });

    $.ajax({
        type: "GET",     url: 'data/special_edu.txt',   dataType: "text",
            success: function(data) {
              $scope.readTxt(data,'special_edu');
              $scope.$digest();

  //            console.log($scope.special_edu);
            }
    });

    for (var i = 0; i < $scope.lrList.length; i++) {      
        $.ajax({
        type: "GET",
        url: $scope.lrList[i],
        dataType: "text",
            success: function(data) {
              $scope.root.gifts = $scope.root.gifts.concat($scope.processData(data));
              $scope.tags = $scope.processTags(data, $scope.tags);          
              
              $scope.$digest();

   /*             $.ajax({
              type: "GET",     url: 'json/shackhand-autolearn-export.json',   dataType: "json",
                  success: function(data) {
           //         console.log(data.hands);
      // console.log($scope.tags.filter(function(o){ return o.t == '字典'} ));

                      var newtagObjs = [];

                      for (var i = 0; i < data.hands.length; i++) {

                        if (!data.hands[i]) continue;

                        var newTags = (data.hands[i].learner_habit.split(/\s/).join()+','+data.hands[i].share.split(/\s/).join()+','+data.hands[i].address).split(/[,，.、\/;]\s?/);

                        
                        $scope.root.gifts.push({
                          title: '自學夥伴-'+data.hands[i].name,
                          url: 'http://bestian.github.io/shackhand/auto20#'+data.hands[i].name,
                          tags: newTags.join(' ')
                        });
                     
                        for (var j = 0; j < newTags.length; j++) {
                          if (typeof (newtagObjs[newTags[j]]) == 'undefined') {
                            newtagObjs[newTags[j]] = 0;
                          }
                   
                          newtagObjs[newTags[j]] += 1;
                        };

                        var goodObjs = [];

                        for (var j = 0; j < Object.keys(newtagObjs).length; j++) {
                            var k = Object.keys(newtagObjs)[j];
                          goodObjs.push({
                            t: k,
                            n: newtagObjs[k]
                          });
                        };
                    }

                    console.log(goodObjs);

                    $scope.tags = $scope.tags.concat(goodObjs); 

                    var usedkeys = [];
                    var usedObjs = [];

                    for (var i = 0; i < $scope.tags.length; i++) {
                      if ($.inArray($scope.tags[i].t, usedkeys) > -1) {
                        usedObjs[$scope.tags[i].t] += $scope.tags[i].n;
                      }
                      else {
                        usedkeys.push($scope.tags[i].t);
                        usedObjs[$scope.tags[i].t] = $scope.tags[i].n;
                      } 
                    };

                    $scope.tags = [];

                    for (var i = 0; i < usedkeys.length; i++) {
                      $scope.tags.push({
                        t: usedkeys[i].replace(/"/g,''),
                        n: usedObjs[usedkeys[i]]
                      });
                    };

                    $scope.$digest();
                  }            
              }); */


            }
         });
    };


/// Tool
  if(location.hash) { 
          console.log(location.hash.replace('#',''));
      if (location.hash.indexOf('http') > -1) {
        $.getJSON( location.hash.replace('#',''), function(data){          
          console.log(data);
          $scope.root = data;
          $scope.$digest;
        });
      }
  }

  $scope.save = function (){

      console.log('saving');

      newsAuto20('支持與資源分享列印')

      var d = new Date;
      console.log(d.getTime());
      console.log($scope.root);
      $scope.root.time = d.getTime();

      var data = angular.copy($scope.root);

      var ref = new Firebase('https://listShare.firebaseio.com/' + encodeURI($scope.root.myName));   ///改這裡

      $scope.base = $firebase(ref);
      $scope.base.$set(data);
/*
      var refIndex = new Firebase('https://listShare.firebaseio.com/index/');

      $scope.ind = $firebase(refIndex);

      var n = $scope.ind.$getIndex.length;
      var has = false;
      for (var i = 0; i < $scope.ind.$getIndex.length; i++) {
        if ($scope.ind.$getIndex[i] == $scope.root.myName) {
          has = true;
          $scope.ind.child[i].$set($scope.root.myName);
        }
      };
      if (!has) $scope.ind.child[n].$set($scope.root.myName); */

      return;
  }

/// Tool ///
/// Tool



    $scope.readTxt = function(allText, name) {
          var ans = [];
          var allTextLines = allText.split(/\r\n|\n/); 

          for (var i=0; i<allTextLines.length; i++) {
              if (allTextLines[i].split('/')[1]) {
                ans.push(allTextLines[i].replace(/\s/g, ''));
              }
              else if (allTextLines[i].substr(0,1) == '【' ) {
                ans.push(allTextLines[i].split('【')[1].split('】')[0]);
              }
          }
        $scope[name] =  ans;
    }

    $scope.processData = function(allText) {
        var ans = [];
        var allTextLines = allText.split(/\r\n|\n/); 
        var headers = allTextLines[0].split(',');

        for (var i=1; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {

                ans.push({
                    title: data[0],
                    url: data[1],
                    tags: data[2].replace(/"/g, '')
                });
            }
        }
   //     console.log(ans);
        return ans;
    }

    $scope.processTags = function(allText, oldTags) {
        var ansRow = new Object;
        var ans = [];

        if (oldTags) {
          for (var i = 0; i < oldTags.length; i++) {
              if (!ansRow[oldTags[i].t]) ansRow[oldTags[i].t] = 0;
              ansRow[oldTags[i].t] += oldTags[i].n;
          };
        }

        var allTextLines = allText.split(/\r\n|\n/); 
        var headers = allTextLines[0].split(',');

        for (var i=1; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');

            if (data.length == headers.length) {

                var tags = data[2].replace(/"/g,'').split(' ');

     //            console.log(tags.join());

                for (var j = 0; j < tags.length; j++) {
                    if (!(ansRow[tags[j]])) ansRow[tags[j]] = 0;
                    ansRow[tags[j]] += 1;

                };                
            }
        }

        for (var i = 0; i < Object.keys(ansRow).length; i++) {
           ans[i] = {t: Object.keys(ansRow)[i],
                     n: ansRow[Object.keys(ansRow)[i]]};
        };

   //     console.log(ans.filter(function(o){ return o.t == '字典'} ));
        return ans;

    }


/// Tool ///

  $scope.askPublic = function() {
            $scope.root.public = (confirm(
               '公開: 公開分享\n\n'
      //        +'不公開: 資料僅供研發團隊改進參考，不公開分享\n\n'
              +'私人: 研發團隊也不會儲存您的資料') && 2) || 1;
    }

/// TOOL ///

  };
