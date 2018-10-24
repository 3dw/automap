<template lang="jade">
  .hello
    .ui.ogrange.piled.segment.container
      h3.ui.header
        i.bicycle.icon
        | 一萬小時原則
      .ui.divider
      |  根據許多領域達人的經驗，無論資質如何聰穎，都要在你感興趣的領域，投入大約一萬小時之後，才能進到達人的水平。
      br
      br
      | 這不是科學定律，但是的確有參考價值。
      .ui.divider
      | 我感興趣的領域是
      .ui.left.icon.input
        i.heart.icon
        input(type='text', v-model='myField', placeholder='請輸入興趣', autofocus='')
      br
      .ui(v-show='myField')
        | 我每週在
        span(v-html='myField')
        | 的學習、研究、詢問、練習、創作、遊玩
        |           上，大約投入
        .ui.left.icon.input
          i.calendar.icon
          input(type='number', v-model='week', placeholder='?')
        | 個小時          
        .ui.divider
        .ui(ng-show='myField && week')
          p
            | 一萬除以
            span(v-html='week')
            |  = 
            span(v-html='Math.floor(10000 / week + 0.5)')          
          .ui.divider
          p
            | 需要累積  
            span(v-html='Math.floor(10000 / week + 0.5)')
            | 週可達一萬小時
          .ui.divider
          p
          h3.ui.header
            | 每年有52週，所以我大約需要
            span(v-html='Math.floor(10000 / week / 52 + 0.5)')
            | 年的努力，就能成為
            span(v-html='myField')
            | 達人。

 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      myField: '',
      week: 1
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
