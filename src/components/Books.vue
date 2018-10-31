<template lang="jade">
  .hello
    h1.ui.header 自主學習出版品
    .ui.segment.container
      .ui.grid
        .ui.row
          .six.wide.column
            h2.ui.header 購書方式                     
            h3.ui.header 郵資與處理費用：
            p 一 ~ 三本70元
            p 四本以上免郵資（需購買本會出版品）
            p ※海外購書郵資自付，可用paypal付款。

            h3.ui.header 流程：
            .ui.list
              .item
                a(href="mailto:alearn13994229@gmail.com") E-MAIL
                | 告知以下訊息：
                .ui.bulleted.list
                  .item 已轉帳或即將轉帳
                  .item 書名
                  .item 本數
                  .item 總金額   
                  .item 寄送地址
                  .item 收件人
                  .item 匯款者姓名（或轉帳帳號後三碼）

              .item 核對無誤後，回信給您並以郵局掛號寄書。

         
            h3.ui.header 匯款資料：
            p ATM轉帳 
            p 郵局700
            p 帳號0281231-0050033
       
            h3.ui.header
              | 購書相關詢問與需要，請來信聯絡
              a(href="mailto:alearn13994229@gmail.com") alearn13994229@gmail.com
          .ten.wide.column
            .ui.two.doubling.cards
              a.ui.card(v-for="b in books", :href="b.url", target="_blank")
                .image
                  img(:src="'/static/img/' + b.img")
                .content
                  h2.ui.header 《{{b.t}}》
                  p.description {{b.p}}

 
</template>

<script>
export default {
  name: 'books',
  data () {
    return {
      books: [
        { t: '異動中的永恆',
          url: 'https://sites.google.com/view/autoalearn/%E5%87%BA%E7%89%88%E5%93%81%E6%8E%A8%E5%BB%A3/%E7%95%B0%E5%8B%95%E4%B8%AD%E7%9A%84%E6%B0%B8%E6%81%86?authuser=0',
          img: 'forever.png',
          p: '150元' },
        { t: '自主學習六講',
          url: 'https://sites.google.com/view/autoalearn/%E5%87%BA%E7%89%88%E5%93%81%E6%8E%A8%E5%BB%A3/%E8%87%AA%E4%B8%BB%E5%AD%B8%E7%BF%92%E7%90%86%E5%BF%B5%E5%85%AD%E8%AC%9B?authuser=0',
          img: 'sixtalks.jpg',
          p: '200元' },
        { t: '青少年人權手冊',
          url: 'https://sites.google.com/view/autoalearn/%E5%87%BA%E7%89%88%E5%93%81%E6%8E%A8%E5%BB%A3/%E6%A0%A1%E5%9C%92%E9%9D%92%E5%B0%91%E5%B9%B4%E4%BA%BA%E6%AC%8A%E6%89%8B%E5%86%8A?authuser=0',
          img: 'right.jpg',
          p: '150元' },
        { t: '普格碼島的法師：歡樂自學寫程式',
          url: 'https://www.books.com.tw/products/0010759330',
          img: 'prog.jpg',
          p: '340元（約七五折，原價450元）' },
        { t: '跟孩子一起玩數學',
          url: 'https://www.books.com.tw/products/0010687205',
          img: 'playmath.jpg',
          p: '210元（七五折，原價280元）' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  max-height: 33vh;
}

.ui.list {
  text-align: left;
}

</style>
