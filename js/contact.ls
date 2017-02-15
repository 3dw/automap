myCtrl = ($scope, $route)!->

    intro =
        start: {
            title: \自學申請
            subTitle: '如果您或您的孩子聽過「自學」但不知如何申請，\n
                        請先參考<自學地圖>上的常見問答：'
            urls: [
                {t:\自學地圖, h:\http://map.alearn.org.tw}
            ]
        }
        plan: 
            title: \學習計畫
            subTitle: '每個人都不一樣，計畫書也沒有標準答案。 \n
                        請先參考<如何做學習計畫>與<高中自學工作坊>記錄：'
            urls: [
                {t:\如何做學習計畫, h:\https://autolearn.hackpad.com/9euGQDfEG5G}
                {t:\高中自學工作坊, h:\https://autolearn.hackpad.com/ep/pad/static/t7jK9GT2uyS}
            ]
        consult:
            title: \學習方法諮詢
            subTitle: '如果在特定的學科上遇到瓶頸，\n
                        請先參考<如何成為未來職場需要的自由人才>講座記錄：'
            urls: [
                {t:\如何成為未來職場需要的自由人才, h:\https://autolearn.hackpad.com/eHxKDAIpFhy}
            ]


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
                and $route.current.params.step
                and $route.current.params.step == n
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