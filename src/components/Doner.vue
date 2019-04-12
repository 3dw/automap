<template lang="jade">
  .hello
    donate-menu
    .ui.container(v-show="$route.params.step == 'gift'")
      h1.ui.center.aligned.header 樂捐 × 支持
          .sub.header 即刻伸援手
      .ui.segment
        p 
          | 請利用ＡＴＭ、網路ATM等匯款方式，將捐助的款項匯到本會的銀行帳戶。
        .ui.divider
        p
          | 戶名：社團法人中華民國自主學習促進會
          br
          | 銀行：台北富邦銀行（012）   士林分行
          br
          | 帳號：3001200-00601
        .ui.divider
        p
          | 接著請您通知我們
          | ，讓我們知道您的樂捐項目與金額。
          router-link.item(to="/doner/notify", exect="")
            | 通知我們

    .ui.divided.items(v-show="$route.params.step == 'notify'")
      .item
        .ui.image
          i.circular.huge.alarm.outline.icon
        .middle.aligned.content
          h4.ui.header
            | 通知我們
          .description
            p
              | 請填寫下列表單，讓我們知道您捐助的指定項目以及金額，
              br
              | 以便專款專用、對帳以及寄捐款收據給您。
              br
              | （若表單無法正常顯示，請按此
              a(href= "https://docs.google.com/forms/d/e/1FAIpQLSfJ2qMK4_S-3vj5b6U4qQOH101XAbNVNx2mbSaWn8eIozEm1g/viewform" target="_blank") 表單連結
              | 並允許https加密通訊）
            .ui.divider
            router-link(to="/doner/thanks")
              | 感謝您
              i.chevron.right.icon
      .ui.divider
      iframe(src="https://docs.google.com/forms/d/e/1FAIpQLSfJ2qMK4_S-3vj5b6U4qQOH101XAbNVNx2mbSaWn8eIozEm1g/viewform?embedded=true" width="100%"  frameborder="0" marginheight="0" marginwidth="0" height="3500" onload="resizeIframe(this)" )
        | Loading...

    .ui.divided.items(v-show="$route.params.step == 'thanks'")
      .item
        .ui.image
          i.huge.circular.smile.icon
        .middle.aligned.content
          h1.ui.header
            | 感謝您
          .description
            p
              | 本會行政志工與您核對之後，將製發正式收據，可供抵稅。
            p 
              | 並公告於捐款芳名錄，以表謝意。
            .ui.divider
            a(href="https://sites.google.com/view/autoalearn/%E5%85%AC%E7%9B%8A%E6%A8%82%E6%8D%90/%E6%8D%90%E6%AC%BE%E8%8A%B3%E5%90%8D%E9%8C%84?authuser=0" target="_blank")
              | 捐款芳名錄
              i.chevron.right.icon
            br
            | （若連結無法正常顯示，請設定允許https加密通訊）
 
</template>

<script>

import donateMenu from './donateMenu'

export default {
  name: 'donate',
  components: {
    donateMenu
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  font-size: 1.5rem !important;
}
</style>
