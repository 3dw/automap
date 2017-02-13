myCtrl = ($scope, $route)!->

    intro =
        start: {
            title: \自學申請
            subTitle: '如果您或您的孩子聽過「自學」但不知如何申請，\n
                        請先參考自學地圖上的常見問答：'
            url: 'http://map.alearn.org.tw'
        }
        plan: 
            title: \學習計畫
            subTitle: '每個人都不一樣，計畫書也沒有標準答案。 \n
                        請先參考高中自學工作坊記錄：'
            url: 'https://autolearn.hackpad.com/ep/pad/static/t7jK9GT2uyS'
        consult:
            title: \學習方法諮詢
            subTitle: '如果在特定的學科上遇到瓶頸，\n
                      我們可引介相關領域專長的老師，做進一步協談。'
            url: ''


    phones = [
        {
            img: \yi-ting.jpg
            name: \蔡伊婷
            topics: [\自學申請 \審議 \法規 \流程 \資源連結轉介]
            xp: \諮詢經驗：2016~至今
            times: [\週一下午2:00-4:00]
            phone: \0919979804
        }
    #    {
    #        img: \chia-jen.jpg
    #        name: \朱佳仁
    #        xp: \2011~至今
    #        times: [\週四下午2:00-5:00]
    #        phone: \0915165369
    #    }
    ]

    angular.extend $scope, {
        $route: $route,
        intro: intro
        phones: phones,
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
    .when("/:step", {
        templateUrl : "contact-pages/start.html"
    })
)