<template lang="jade">
  #app
    nav.ui.fixed.top.labeled.icon.inverted.menu
      router-link.item(to="/", exact='') 
        i.home.icon
        | 自學FAQ
      router-link.item(to="/short", exact='') 
        i.comments.icon
        | 認識自學
      router-link.item(to="/contact", exact='')
        i.assistive.listening.systems.icon
        | 諮詢專線
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
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 100px;
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

.router-link-active {
  background-color: #339 !important;
}

.invisible {
  color: transparent !important;
}

</style>
