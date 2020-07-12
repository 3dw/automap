<template lang="jade">
  .hello
    .ui.tall.stacked.segment
      h1.ui.header {{intro[step].title}}
      .ui.divider
      p.description {{intro[step].subTitle}}
      .ui.ordered.list
        .item(v-for="x in intro[step].urls")
          a(:href="x.h" target="_blank")
            img.favicon(:src="'http://www.google.com/s2/favicons?domain='+x.h", :alt = "x.t")
            | {{x.t}}
      br
      | 閱讀後，如果需要問人，歡迎與我們聯絡：
      .ui.divider
      .ui.four.stackable.cards
        .ui.card(v-show = "step !== 'consult'")
          .content
            .header 共同筆記
            .description
              | 您可看到其他人的問題和答覆
            .image
              img(src = "../assets/overflow.jpg")
            .content
              .extra.content
                | Dropbox Paper平台:
                .ui.list
                  .item
                    a(href="https://paper.dropbox.com/doc/FAQ-uRxprtmzs7BCoYifBF7hO")
                      img.ui.small.image.avatar(src = "../assets/dropbox.png")
                      | 自學FAQ
                    br
                    span (領域: 自學申請、常見問答)
                  .item
                  a(href="https://paper.dropbox.com/doc/FAQ-irXzLX9hfJWPEMP9xkSye" target="_blank")
                    img.ui.small.image.avatar(src = "../assets/dropbox.png")
                    img.ui.small.image.avatar(src = "../assets/bestian.jpg")
                    | 自由數學FAQ
                  br
                  span (領域: 數學、自主能力)
        .ui.card(v-show = "step == 'start'")
          .content
            .header 社群媒體
            .description
              | 志工老師在社群媒體上回覆您
          .image
            .ui.four.column.grid
              .column.right.align
                a(@click="soc = 'auto20'")
                  img.ui.tiny.image(src = "../assets/auto20.png")
              .column.right.align
                a(@click="soc = 'line'")
                  img.ui.tiny.image(src = "../assets/line.png")
              .column
                a(@click="soc = 'facebook'")
                  img.ui.tiny.image(src = "../assets/facebook.png")
          .content
            .description(v-show="soc == 'auto20'")
              a(href="https://we.alearn.org.tw/", target="_blank")
                  img(src="https://www.google.com/s2/favicons?domain=http://we.alearn.org.tw/")
                  | 自學2.0
                  br
                  | (登入自學2.0有聊聊視窗可以詢問)
            .description(v-show="soc == 'line'")
              | Line群組:
              .ui.list
                .item
                  img.ui.image(src = "../assets/line_QR.jpg")
                  br
                  | line加好友 〉 行動條碼 〉 掃描此條碼

            .ui.divider
            .description(v-show="soc == 'facebook'")
              | 臉書專頁私訊:
              .ui.list
                .item
                  a(href="https://www.facebook.com/%E8%87%AA%E4%B8%BB%E5%AD%B8%E7%BF%92%E4%BF%83%E9%80%B2%E6%9C%83-208398025852902/")
                    i.facebook.icon
                    | 自主學習促進會
               .item
                  a(href="https://www.facebook.com/homeschooltw/")
                    i.facebook.icon
                    | 台灣在家自學聯盟
        .ui.card
          .content
            .header 電子郵件
            .description
              | 志工老師以Email回覆您
          .image
            img(src = "../assets/email.png")
          .content
            .extra.content
              a(href="mailto:alearn13994229@gmail.com")
                i.mail.outline.icon
                | E-mail信箱：
                br
                | alearn13994229@gmail.com
        .ui.card(v-show = "step == 'start'")
          .content
            .header 電話
            .description
              | 教育局的電話專線
              | ，以及本會志工老師
          .image
            img(src = "../assets/phone.png")
          .content
            .extra.content

              a(href = "https://teec.nccu.edu.tw/resources2_detail/21.htm" target="_blank")
                img.ui.image.avatar(src="../assets/MOE.png")
                | 各縣市教育局承辦人-上班時間均可
              br
              span (領域: 自學申請、法規流程、行政細節)
               br
               .ui.list
                .item
                  img.ui.image.avatar(src = "../assets/ling-yu.jpg")
                  a(@click="showPhone = true") 黃鈴諭老師-週一、五下午
                  br
                  span (領域: 自學申請、法規流程、資源轉介)
                  br
                  span(v-show="showPhone")
                    br
                    | 電話號碼(週一、五下午方便):
                    br
                    | 0919-860-968
              //    img.ui.image.avatar(src = "../assets/yi-ting.jpg")
                  a(@click="showPhone = true") 蔡伊婷老師-週五晚上7-9點
                  br
                  span (領域: 自學申請、法規流程、資源轉介)
                  br
                  span(v-show="showPhone")
                    br
                    | 電話號碼(僅週五晚上7-9點方便):
                    br
                    | 0919-979-804
        .ui.card.print-only
          .image.qr
              img(src = "http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|1&chl=http%3A%2F%2Fmap.alearn.org.tw%2F")
            .content
              .center.aligned.header 自學地圖
</template>

<script>
export default {
  name: '',
  data () {
    return {
      step: 'start',
      soc: 'facebook',
      showPhone: false,
      intro: {
        start: {
          title: '自學申請',
          subTitle: '如果您或您的孩子聽過「自學」但不知如何申請，\n請先參考<自學地圖>上的常見問答：',
          urls: [{
            t: '自學地圖',
            h: 'http://map.alearn.org.tw'
          }]
        },
        plan: {
          title: '學習計畫',
          subTitle: '每個人都不一樣，計畫書也沒有標準答案。 \n請先參考<如何做學習計畫>與<第一次申請高中自學就上手>工作坊記錄：',
          urls: [
            {
              t: '如何做學習計畫',
              h: 'https://paper.dropbox.com/doc/5UjmL5UYMDnep8mNkEMt0'
            }, {
              t: '第一次申請高中自學就上手',
              h: 'https://paper.dropbox.com/doc/TPnCOtOK70l3hGH63AHzQ'
            }
          ]
        },
        consult: {
          title: '學習診斷',
          subTitle: '如果在特定的學科上遇到瓶頸，\n請先參考<如何成為未來職場需要的自由人才>講座記錄：',
          urls: [{
            t: '如何成為未來職場需要的自由人才',
            h: 'https://paper.dropbox.com/doc/RbEVa09jhkx3D0wdVYcp2'
          }]
        }
      },
      phones: [{
        img: 'yi-ting.jpg',
        name: '蔡伊婷',
        topics: ['自學申請', '審議', '法規', '流程', '資源連結轉介'],
        xp: '諮詢經驗：2016~至今',
        times: ['週一下午2:00-4:00'],
        phone: '0919979804'
      }]
    }
  },
  mounted () {
    this.step = this.$route.params.step
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card img {
  max-width: 100%;
}

p {
  white-space: pre-line;
}

</style>
