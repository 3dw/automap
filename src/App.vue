<template lang="jade">
  #app
    nav.ui.fixed.top.inverted.menu.thin-only
      router-link.item(to="/", exact='') 
        | FAQ
      router-link.item(to="/short", exact='') 
        | 認識
      router-link.item(to="/contact", exact='')
        | 諮詢
      router-link.item(to="/donate", exect="")
        | 樂捐
      router-link.item(to="/app", exect="")
        | App
    nav.ui.fixed.top.labeled.icon.inverted.menu.fat-only
      router-link.item(to="/", exact='') 
        i.home.icon
        | 自學FAQ
      router-link.item(to="/short", exact='') 
        i.comments.icon
        | 認識自學
      router-link.item(to="/contact", exact='')
        i.assistive.listening.systems.icon
        | 諮詢專線
      .ui.simple.dropdown.item.fat-only
        i.angle.double.down.icon
        | 小工具
        .menu
          router-link.item(to='/Khr10', exact='')
            i.hourglass.half.icon
            | 一萬小時試算機
          router-link.item(to='/style', exact='')
            i.tasks.icon
            | 學習風格自我測試
          router-link.item(to="/app", exect="")
            i.mobile.icon
            | 自學手冊App  
      .right.menu.fat-only
        router-link.item(to="/donate", exect="")
          i.gift.icon
          | 樂捐支持
        router-link.item(to="/books", exect="")
          i.book.icon
          | 出版品義賣
        .item
          iframe(src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmap.alearn.org.tw&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=77&height=20" width="77" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media")

    main
      router-view(:myKey="myKey")
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      myKey: ''
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  text-align: left;
  font-size: 14px;
  line-height: 1.6;
}

main {
  text-align: center;
  margin-top: 80px;
}

.print-only {
  visibility: hidden !important;
  display: none !important;
}

@media print {
  .no-print {
    visibility: hidden !important;
    display: none !important;
    height: 0 !important;
  }
  .print-only {
    visibility: visible !important;
    display: block !important;
  }
  img, div, .card, .column {
    page-break-inside: avoid !important;
  }
}

a, button, .clickable {
  cursor: pointer !important;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
  .button {
    max-width: 100% !important;
  }
}

@media screen and (max-width: 991px) {
  .fater-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

.router-link-active, .router-link-active::after {
  background-color: #acf !important;
}

.invisible {
  color: transparent !important;
}

</style>
