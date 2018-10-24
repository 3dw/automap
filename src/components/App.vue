<template lang="jade">
  .hello
    .ui.container
      .ui.stacked.segment
        h1.ui.dividing.header
          | 自學手冊手機版
          .sub.header 自學問答集，收進回袋中
        img.ui.small.image(src='../assets/handbook_be.gif')
        .ui.button.group
          | 下載〈自學手冊〉: 
          a.ui.large.black.button(href='https://play.google.com/store/apps/details?id=com.ionicframework.handbook713413')
            img.ui.small.image(src='../assets/google_play.png')
          a.ui.large.black.button(href='https://itunes.apple.com/us/app/%E8%87%AA%E5%AD%B8%E6%89%8B%E5%86%8A/id1227607164?l=zh&ls=1&mt=8')
            img.ui.small.image(src='../assets/app_store.png')
        .ui.divider
      .ui.center.aligned.footer.segment
        a(href='https://www.github.com/3dw/handbook')
          i.github.icon
          |         Code on Github
 
</template>

<script>
export default {
  name: 'app',
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
