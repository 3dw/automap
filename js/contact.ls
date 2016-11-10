myCtrl = ($scope, $route)!->
    teachers = [
    #   {
    #       img: \tang-ba.jpg
    #       name: \唐光華
    #       xp: \2011~至今
    #       times: [\週一上午9:30-12:00]
    #       phone: \0975002749
    #   }
        {
            img: \yi-ting.jpg
            name: \蔡伊婷
            xp: \諮詢經驗：2016~至今
            times: [\週一下午2:00-4:00]
            phone: \0919979804
        }
        {
            img: \chia-jen.jpg
            name: \朱佳仁
            xp: \2011~至今
            times: [\週四下午2:00-5:00]
            phone: \0915165369
        }
    ]

    angular.extend $scope, {
        teachers:teachers,
        $route:$route
    }

    angular.extend $scope, {
        checkRoute: (n)->
            return $route
                and $route.current
                and $route.current.templateUrl
                and $route.current.templateUrl.indexOf(n) > -1
    }



app = angular.module('contactApp',['ngRoute'])
    .controller('myCtrl', ['$scope','$route', myCtrl])

app.config(($routeProvider)->
    $routeProvider
    .when("/", {
        templateUrl : "contact-pages/main.html"
    })
    .when("/start", {
        templateUrl : "contact-pages/start.html"
    })
    .when("/plan", {
        templateUrl : "contact-pages/plan.html"
    })
    .when("/consult", {
        templateUrl : "contact-pages/consult.html"
    });
)