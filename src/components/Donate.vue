<template lang="pug">
  .hello
    vue-headful(title="贊助會員 - 自學地圖", description="本會開始招募贊助會員")
    .ui.two.column.doubling.grid.container
      .one.column.row
        .column
          //h1.ui.center.aligned.header 歡迎捐贈發票
            .sub.header 電子發票捐贈愛心碼：9806
          h1.ui.center.aligned.header 本會開始招募贊助會員，請
            a(href="https://sites.google.com/view/autoalearn/關於本會/成為贊助會員") 參考這裡
            .sub.header 以下是本會的公益事項，如果您願意支持我們，請
              a(href="https://sites.google.com/view/autoalearn/關於本會/成為贊助會員")  加入我們
      .column(v-for="(o, index) in objs")
        .ui.stacked.segment
          h3.ui.center.aligned.icon.header
            .ui.green(@click="showIndex = index")
              i.circular.icon(v-bind:class="o.i")
              .content {{o.t}}
                .sub.header {{o.p1}}
          .ui.divider
          .ui(v-show="true || showIndex == index")
            p(v-for="p in o.ps") {{p}}  
          .ui.divider
          .ui.three.item.menu
            a.item(:href="o.url" target="_blank")
              i.globe.icon
              | 瞭解更多
            a.item(href="mailto:alearn13994229@gmail.com")
              i.mail.outline.icon
              | 提供意見
            a.item(href="https://sites.google.com/view/autoalearn/關於本會/成為贊助會員")
              i.user.add.icon
              | 贊助會員
 
</template>

<script>

export default {
  name: 'donate',
  components: {
  },
  data () {
    return {
      showIndex: -1,
      objs: [
        {
          t: '自學法制化',
          i: 'law',
          p1: '您知道在家自學是逐步合法的嗎？',
          ps: ['本會陳怡光先生號召並組成「保障教育選擇權聯盟」，與許多家庭一起將台灣的自學法規，一步步修正至亞洲最進步開明的版本。', '未來，還有自學教育補助等可能的新政策，尚待規劃、遊說與推動。', '您願意贊助自學法制化的持續推動嗎?'],
          rs: ['跑立法、遊說都需要時間。如果有經濟支持，比較能鼓勵更多人投入。', '關心自學法制化的人', '扣除行政費15%以外，全數撥給專案負責人，作為車馬費補貼。'],
          url: 'https://sites.google.com/site/alearn13994229/zi-xue-de-tu/laws'
        }, {
          t: '諮詢專線',
          i: 'phone',
          p1: '您知道許多想自學的家庭，不知如何起步嗎？',
          ps: ['本會老師們為了讓新手家庭可以得到第一線的專業諮詢，長期投入電話諮詢。', '未來，在您的支持下，我們可增加詢諮志工的人力與專業分工，讓自學家庭不分所得高低的，都可以得到全面專業的諮詢協助。', '您願意贊助這項專業而免費的諮詢專線嗎？'],
          rs: ['接電話需要時間和專業。如果有經濟支持，比較能擴大諮詢專線的人力。', '了解人對人通話效力的人', '捐款去向：扣除行政費15%以外，全數撥給專案負責人，作為諮詢費補貼。'],
          url: '#contact'
        }, {
          t: '自學地圖',
          i: 'sitemap',
          p1: '您知道自學資源的分散，常讓新手家庭感到迷惘嗎？',
          ps: ['自學家庭需要知道相關法規、社群、課程、學習資源、諮詢管道等等。離開學校後，也會需要建立新的交友圈。', '為此，唐宗浩老師設計了「自學地圖」平台，統整各方自學資訊，建立交友互助地圖，讓有需要的家庭，減輕收集資訊所需的時間心力。', '未來，還可以建立交流自學空間、資源的自學社交網站。', '您願意支持自學地圖平台，持續存在、持續更新嗎？'],
          rs: ['整理資訊和程式設計需要時間。伺服器端的服務也有租金的需求。', '希望網路空間更完善、想支持自學新手的人', '扣除行政費15%與平台租金以外，全數撥給專案負責人，作為設計與維護費補貼。'],
          url: '#/'
        }, {
          t: '自由數學',
          i: 'cloud download',
          p1: '您曾經下載「自由數學」中的公益教材嗎？',
          ps: ['朱佳仁老師、唐宗浩老師從教育實務與理論中發現，自學者需要講解清析、能啟發人思考的數學教材。', '因此共同設計了邊學習、邊作答、邊思考的「數學形成性教材」。', '此外，更擴充了數學教法、數學遊戲，並且免費釋出，成為開源教材。', '未來，優質開放教材的概念，還可應用到其他學科，以及其他年段。'],
          rs: ['以學習者經驗為中心的教材設計，需要專業能力與加倍的時間。', '重視數學教育的人', '扣除行政費15%以外，全數撥給專案負責人，作為設計與維護費補貼。'],
          url: 'http://math.alearn.org.tw'
        }, {
          t: '高中自學工作坊',
          i: 'user add',
          p1: '您知道許多弱勢自學生，做學習計畫時，很需要面對面的指導協助嗎？',
          ps: ['工作坊計劃：', '配合每年4月及10月的計畫書申請時程，', '預計在2.3.4月及8.9.10月各辦一梯次。', '一梯次指：每月一次，連續三次，每次2小時），', '以面對面的方式，協助青少年訂定學習計畫、尋找學習資源、撰寫自學計畫書。', '未來，我們可以繼續辦理高中自學工作坊。'],
          rs: ['有些想自學的弱勢青少年，不知如何撰寫計畫書、不知如何思考學習目標、不知如何規畫學習進程，甚至不知如何與學校或審議委員打交道。他們需要系統性的、面對面的指導。', '所有讓想申請高中自學的弱勢青少年得到面對面協助的人。', '募款達7000元（講師及諮詢費每場2000*3場=6000元，行政費3場1000元）即可開辦一梯次的工作坊。超過7000元之募款移到下一梯次使用。'],
          url: 'https://paper.dropbox.com/doc/--AbGBa8mG_khetR25x9XOSP6qAg-TPnCOtOK70l3hGH63AHzQ'
        }, {
          t: '自主學習師培',
          i: 'asl interpreting icon',
          p1: '您相信自主學習的教與學，在學校或非學校都可以發生嗎？',
          ps: ['師培計畫：', '從理念、溝通、教學、問題解決為四大軸線，規劃啟發性的講座，設計深入性的研習課程工作坊，安排疑難雜症的討論。', '我們希望協助「學習真實發生」', '本專案從2016.9起跑'],
          rs: ['實驗教育蓬勃發展，但具備實驗教育知能經驗的師資不足，藉由本會豐富的教學經驗，培育與陪伴有志從事「自主學習」教育工作的人，可在各自的位置實踐自主學習的教學。', '認同自主學習理念，願自我培育或支持培育自主學習教育者的人', '扣除行政費15%以外，捐款用於區域平衡用，於雙北以外辦理時，補足辦理成本之不足，支持各縣市成案。'],
          url: 'http://sites.google.com/view/autoalearn/%E5%9F%B9%E8%82%B2%E8%AA%B2%E7%A8%8B/%E6%95%99%E5%AD%B8%E5%B7%A5%E4%BD%9C%E5%9D%8A?authuser=0s'
        }, {
          t: '不指定',
          i: 'thumbs up',
          p1: '本會長久從事自主學習理念與實務的推廣，您願意捐款本會，傳達您的支持與鼓勵嗎？',
          ps: ['如果您支持我們，但不想指定單獨的項目，請選「不指定」。', '我們會視需求彈性運用。', '您願意不指定捐助嗎？'],
          rs: ['我們是非營利組織，您的捐款是我們很大的鼓勵。', '重視台灣教育的朋友', '彈性運用'],
          url: 'http://www.alearn.org.tw/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 18px;
}

p::first-letter {
  font-size: 1.2em;
  margin-left: 1em;
}

.green {
  color: green;
}

</style>
