<template lang="pug">
  #app
    nav.ui.fixed.top.inverted.menu.thin-only
      router-link.item(to="/", exact='') 
        | 聊聊
      router-link.item(to="/short", exact='') 
        | 認識
      router-link.item(to="/contact", exact='')
        | 諮詢
      router-link.item(to="/donate", exect="")
        | 贊助
      router-link.item(to="/app", exect="")
        | App
    nav.ui.fixed.top.labeled.icon.inverted.menu.fat-only
      router-link.item(to="/", exact='') 
        i.comments.icon
        | 聊天機器人
      router-link.item(to="/faq", exact='') 
        i.home.icon
        | 自學問答集
      router-link.item(to="/short", exact='')
        i.info.icon
        | 認識自學
      router-link.item(to="/contact", exact='')
        i.assistive.listening.systems.icon
        | 諮詢專線
      a.item(href="https://we.alearn.org.tw", target="_blank", rel="noopener noreferrer")
        i.users.icon
        | 自學交友
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
          router-link.item(to='/auto4', exact='')
            i.users.icon
            | 學習自律四階段
          router-link.item(to="/app", exect="")
            i.mobile.icon
            | 自學手冊App  
      .right.menu.fat-only
        router-link.item(to="/history", exect="")
          i.book.icon
          | 本會簡史
        router-link.item(to="/donate", exect="")
          i.gift.icon
          | 贊助會員
        router-link.item(to="/books", exect="")
          i.book.icon
          | 出版品義賣
        .item
          iframe(src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmap.alearn.org.tw&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=100&height=20" width="100" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media")
    //chatbox(:id="id", :user="user", :photoURL="photoURL", @loginFB="loginFB", @loginGoogle="loginGoogle")
    main
      router-view(:myKey="myKey")
      //a.big.downer.item(href="/static/img/自主學習發票捐贈.png")
        | 發票捐贈(購物時出示)：
        br
        img(src="/static/img/自主學習發票捐贈.png")
      ad
</template>

<script>
import Ad from './components/Ad-Be'
import { handsRef } from './firebase'
import firebase from 'firebase/app'
import mix from './mixins/mix.js'
import Chatbox from './components/Chatbox'

export default {
  name: 'app',
  mixins: [mix],
  components: { Chatbox, Ad },
  data () {
    return {
      myKey: '',
      user: '',
      token: '',
      id: '',
      provider: '',
      photoURL: ''
    }
  },
  firebase: {
    hands: handsRef
  },
  methods: {
    loginFB: function () {
      var vm = this
      var provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        vm.provider = 'facebook'
        vm.token = result.credential.accessToken
        // The signed-in user info.
        vm.user = result.user
        vm.id = result.user.uid.split(':')[1]
        for (var i = 0; i < vm.hands.length; i++) {
          if (vm.hands[i].id === vm.id) {
            vm.center = vm.hands[i].latlngColumn.split(',')
            vm.zoom = 13
          }
        }
        // ...
      }).catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode + errorMessage)
      })
    },
    loginGoogle: function () {
      var vm = this
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        vm.provider = 'google'
        vm.token = result.credential.accessToken
        // The signed-in user info.
        vm.id = result.user.uid
        vm.user = result.user
        vm.photoURL = vm.user.photoURL
        for (var i = 0; i < vm.hands.length; i++) {
          if (vm.hands[i].id === vm.id) {
            vm.center = vm.hands[i].latlngColumn.split(',')
            vm.zoom = 13
          }
        }
        // ...
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(errorCode + errorMessage + email + credential)
      })
    }
  },
  watch: {
    $route (to, from) {
      console.log(from.path)
      console.log(to.path)
      this.$gtag.event('action', {
        event_category: 'navigate',
        event_action: 'from:' + from.path + ' to:' + to.path,
        event_label: 'from:' + from.path + ' to:' + to.path,
        value: 'from:' + from.path + ' to:' + to.path
      })
    }
  }
}
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,
               'Microsoft JhengHei',
                'Microsoft YaHei',
                'STHeiti',
                'Apple LiGothic Medium';
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
  background-color: #19c !important;
}

.invisible {
  color: transparent !important;
}

.red.note {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 0px;
  font-size: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}

.big {
  font-size: 2em;
  margin: 1em 0;
}

.downer {
  position: relative;
  top: 1.5em;
}

.timeline-item .title-item {
  font-size: 22px !important;
}

.timeline-item .description-item {
  font-size: 18px !important;
  color: #333 !important;
  font-weight: normal !important;
}

img.history {
  width: 180px !important;
  float: left !important;
  margin-right: 1em !important;
}

</style>
