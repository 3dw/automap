angular.module("automap")
  .factory('$handbook', function(){
    return {
      faqs: [
        { "q" : "不上學，合法嗎？",
          "c" : "法源",          
          "a" : "教育基本法保障家長的教育選擇權和孩子的受教權。 &nbsp;經過多年的努力，台灣非學校教育(通稱自學)已經合法，目前比日本、中國、香港、韓國，對自學都更友善、更開放。 &nbsp;只要經過申請的手續，和過程的評鑑，就可以自訂學習計畫，不必上學。",
          "e" : "體制外學校、在家自學有法源了_http://udn.com/news/story/6886/476385-%E9%AB%94%E5%88%B6%E5%A4%96%E5%AD%B8%…1%E5%9C%A8%E5%AE%B6%E8%87%AA%E5%AD%B8-%E6%9C%89%E6%B3%95%E6%BA%90%E4%BA%86 做個堂堂正正的「不在校上學」學生_http://www.homeschool.tw/2014/10/blog-post.html",         
          "i" : "img/scales.png"},
        { "q" : "自學申請的時程是什麼時候？",
          "c" : "申請",
          "a" : "在台灣要自學，要申請「非學校型態實驗教育」，你可以搜尋你們戶籍所在地教育局或處的非學校型態教育的網站，下載申請的工具包或是檔案，依照說明，完成實驗計畫，在時間內送件即可。一年有兩次，大部份縣市上學期要在4/30日前送件，下學期要申請，要在10/30日前送件。",
          "e" : "",
          "i" : ""},
        { "q" : "如何經營良好的家庭合作討論文化?",
          "c" : "家庭",
          "a" : "合作討論並不只是彼此對話，要有一些前提和準備，比如願意好好聴人說話，願意幫助對方把話說清楚。 &nbsp;所以每個人都要先學會「聽」。 &nbsp;好好的，專注聽人把話說完、說清楚，不急著回應或評斷，也是需要練習的事。",
          "e" : "合作討論文化_https://sites.google.com/site/alearn13994229/a-03/he-zuo-tao-lun-wen-hua",
          "i" : "img/hearing.png"},
        { "q" : "自學對未來的出路和職場生涯有幫助嗎？",
          "c" : "計畫",
          "a" : "自學是一種脈絡和節奏，內涵很多元。每家的方法不盡相同。 &nbsp;因為可以量身打造，所以可以視自己的情況和能力，安排相關專業社群的接觸，多認識不同圈子、不同年齡層的家長、避免閉車造車，並培養專注和實現目標的習慣，這樣的自學才能對工作能力的發展有很大的幫助。",
          "e" : "如何成為未來職場需要的自由人才(上)_https://www.youtube.com/watch?v=ZPzqw3x05-g 如何成為未來職場需要的自由人才(中)_https://www.youtube.com/watch?v=Yc-fHn5aevo 如何成為未來職場需要的自由人才(下)_https://www.youtube.com/watch?v=IqQTLQH-S_M",
          "i" : "img/work-in-progress.png"},
        { "q" : "為什麼自學要有審議?",
          "c" : "法源",
          "a" : "教育基本法同時保障家長的教育選擇權和孩子的受教權，在實行條例中並明定和非學校教育和補習教育不同。 &nbsp;教育選擇權不能無限擴大，所以需要機制來保障孩子的受教權。 &nbsp;在更好的機制被研發出來之前，審議制是目前政府認為比較可行的方式。",
          "e" : "教育基本法_http://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0020045",
          "i" : ""},
        { "q" : "時間怎麼安排好呢？",
          "c" : "計畫",
          "a" : "離開學校後，健康規律的生活作息要靠自己和家庭來維持。學習和專業成長的部份，時間安排上，要能專注，不要太切割零散。",
          "e" : "自學週課表分析_http://pulse.naer.edu.tw/content.aspx?type=N&sid=207 一萬小時定律試算機_http://bestian.github.io/freemath/%E5%B7%A5%E5%85%B7%E8%BB%9F%E9%AB%94/%E4%B8%80%E8%90%AC%E5%B0%8F%E6%99%82%E5%AE%9A%E5%BE%8B.html",
          "i" : "https://pixabay.com/static/uploads/photo/2015/04/03/18/58/clock-705672_960_720.jpg"},
        { "q" : "在家自學，怎麼交朋友？",
          "c" : "交友",
          "a" : "在家自學只是沒有每天上學，並不是一直待在家裡不出門。 大部份自學家庭，都會找到孩子接觸人際的機會，依興趣、依地緣來參與社群，交友圈可能很多元，往往還能更長久，不會因為在學校的畢業或重新分班就被拆散。",
          "e" : "自學2.0互助地圖_http://map.alearn.org.tw/we/",
          "i" : "http://we.alearn.org.tw/img/handshake0.png"},
        { "q" : "我家附近有人自學嗎？",
          "c" : "交友",
          "a" : "您可以在自學地圖上尋找在地的自學社團，也可以上自學2.0互助地圖登錄自己和尋找夥伴，彼此認識。",
          "e" : "自學2.0互助地圖_http://map.alearn.org.tw/we/",
          "i" : ""},
        { "q" : "有沒有辦法一部份時間在家自學，一部份時間上學呢？",
          "c" : "計畫",
          "a" : "您可以跟教育局申請自學，自學計畫裡面可以將學校資源列入，比方說每週去上學三天。 &nbsp;同時也要跟學校溝通，最好讓導師能瞭解並支持。",
          "e" : "",
          "i" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Go-home.svg/2000px-Go-home.svg.png"},
        { "q" : "自學很花錢嗎？有沒有不花錢的方法？",
          "c" : "資源",
          "a" : "您可以使用免費學習資源，像是公立圖書館、博物館、網路教材、參與網路學習社群，也可以在一些地方用換工的方式來替代學費，或是在願意栽培新人而非剝削勞力的技藝工作室當學徒。 &nbsp;您可以在社群中向其他有經驗的自學家庭打聽，或是在家庭附近尋找。",
          "e" : "",
          "i" : "img/poverty.jpg"},
        { "q" : "申請自學後，教育單位成本會撥到何處？",
          "c" : "資源",
          "a" : "現況(2016)是學生教育單位成本全部撥給設籍學校。這中間當然有不盡合理之處，尚待未來的改革。",
          "e" : "炸蝦便當寓言_https://homeschool.hackpad.com/JnIeVmNyy7L",
          "i" : ""},
        { "q" : "邊鄉部落可以自學嗎？",
          "c" : "資源",
          "a" : "事實上有部落自學的先例，透過互助合作、耆老與家長協同傳承文化，部落自行辦學、發展共同經濟",
          "e" : "八八風災後大社部落返鄉自學_http://titv.ipcf.org.tw/news-6901 司馬庫斯部落自學與共同經濟_http://www.meworks.net/meworksv2/meworks/page1.aspx?no=4073",
          "i" : ""},
        { "q" : "遇到審議委員不合理的對待怎麼辦？",
          "c" : "審議",
          "a" : "一、您可以現場錄音，加上文字說明向教育局發信投訴。二、在自學社群（非學校論壇、臉書社團等）尋求支援與共同發聲",
          "e" : "",
          "i" : ""},
        { "q" : "自學審查的點是不是學校也要做到呢？",
          "c" : "審議",
          "a" : "簡單來說，學校教育辦不好、有漏洞，那是學校的事。如果要改它，就得出力支持（如推修法、辦遊行、找支持團體、民代、法律學者等人籌備進行）。 &nbsp;非學校教育在法條、執行面有不合宜之處，也是要發起修法或行政上的檢舉申訴。 &nbsp;這兩邊法條和執行都是分開的，無法相互比較。",
          "e" : "",
          "i" : ""},
        { "q" : "如何下載申請書並提出申請？",
          "c" : "申請",
          "a" : "如需申請書，請聯絡你的戶籍地的縣市的「承辦單位」。 各縣市公告的「實驗教育計畫」是僅供參考的範例，家長可自行設計，不一定要完全按照公告的格式撰寫。 進一步資訊，可參考「保障教育選擇權聯盟」網站。",
          "e" : "申請書下載與各縣市承辦人_http://www.homeschool.tw/p/02-272088896371-edupe.html",
          "i" : ""}]         
      };
  })