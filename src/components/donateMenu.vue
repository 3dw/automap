<template lang="jade">
  .hello
    .ui.four.item.menu.thin-only
      router-link.item(to="/donate", exect="")
        i.circular.camera.retro.icon
      router-link.item(to="/doner/gift", exect="")
        i.circular.gift.icon
      router-link.item(to="/doner/notify", exect="")
        i.circular.alarm.outline.icon
      router-link.item(to="/doner/thanks", exect="")
        i.circular.smile.icon
          .ui.top.fixed.menu.fat-only
    .ui.ordered.four.steps
      router-link.step(to="/donate", exect="")        
        .content
          .title
            i.circular.camera.icon
          .center.aligned.description 認識
            
      router-link.step(to="/doner/gift", exect="")
        .content
          .title
            i.circular.gift.icon
          .description 樂捐
      router-link.step(to="/doner/notify", exect="")
        .content
          .title
            i.circular.alarm.outline.icon
          .description 通知
      router-link.step(to="/doner/thanks", exect="")
        .content
          .title 
            i.circular.smile.icon     
          .description 感謝

 
</template>

<script>
export default {
  name: 'donate',
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
