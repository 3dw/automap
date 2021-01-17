<template lang="pug">
  .hello
    vue-headful(title="諮詢專線 - 自學地圖", description="本會的諮詢專線")
    .ui.tall.stacked.segment
      h1.ui.center.aligned.header 歡迎，請做好準備
      h3.ui.center.aligned.header 選擇您想諮詢的項目
      h2.ui.center.aligned.icon.header      
        router-link.item(to="/inner/start", exact='')
          i.circular.users.icon
          | 自學申請
      .ui.grid
        .eight.wide.column
          h2.ui.center.aligned.icon.header
            router-link.item(to="/inner/plan", exact='')
              i.circular.calendar.icon
              | 自學計畫
        .eight.wide.column            
          h2.ui.center.aligned.icon.header
            router-link.item(to="/inner/consult", exact='')
              i.circular.law.icon
              | 學習診斷

 
</template>

<script>
export default {
  name: 'contact',
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
