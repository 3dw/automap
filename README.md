# 自學地圖

一個自學者的起手指南

# 參與

##參與版本控制

歡迎協作，請先：

1. 註冊一個Github帳號，並將帳號e-mail至bestian@gmail.com
2. bestian會邀你進本專案並開協作權限，請找到「接受邀請」的鈕按下去。接受邀請的按鈕在:
        https://github.com/3dw
3. 按watch訂閱所有本專案的議題討論(新議題會自動e-mail給你)

----

* **更多問題**與**錯誤回報**，使用github免費提供的[議題區issues](https://github.com/3dw/handbook/issues)功能，以便分類匯整

* 在[議題區issues](https://github.com/3dw/handbook/issues)所提出的問題與答案都會利用Email傳給大家


##校對環境(不必寫程式)

1. 下載安裝github桌機的程式

2. 在[本網頁](https://github.com/3dw/automap)上，複製(clone)本專案到自己的電腦上

3. 下載並安裝[node.js](https://nodejs.org/en/)。這會同時安裝它的套件管理器npm

4. 安裝「lite-server」。在命令列(window系統則是在node command prompt)輸入

        npm install -g lite-server

5. 在專案根目錄，鍵入

        lite-sever

即可開啟本地伺服器。
開啟本地伺服器後，鍵入網址即可測試。
例如
* 目前校對中的諮詢頁面，位於http://127.0.0.1:3000/contact.html
* 首頁是 http://127.0.0.1:3080/

##開發環境

除以上1~4外，再：

5. use jade

        npm install -g jade

6. use livescript

        npm install -g livescript
        
7. use compass

        gem install compass
        
        compass watch

# 應用API

## API

* 自學問答集資料以靜態JSON的方式分享，歡迎抓取後自行設計介面。

### 同步更新

* 你可以用AJAX Request，以GET方法，取得[http://map.alearn.org.tw/static/api/handbook-data.json](http://map.alearn.org.tw/static/api/handbook-data.json)上的資料

* 這筆資料會隨著法令與社群的演變，不定期更新維護


### 純資料

* 你可以下載[http://map.alearn.org.tw/static/api/handbook-data.json](http://map.alearn.org.tw/static/api/handbook-data.json)上的資料後，自行修改維護


## 錯誤回報

* 錯誤回報與功能許願，請提至[議題區](https://github.com/3dw/automap/issues)


## 參與協作

* [Clone本專案](https://github.com/3dw/automap)
* 要做的內容與相關討論，請見[議題區](https://github.com/3dw/automap/issues)
* 本專案的技術框架使用Angular 1，請參考[Angular 教學](http://www.w3schools.com/angular/)

