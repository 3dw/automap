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
        | 自學問答集
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
          iframe(src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmap.alearn.org.tw&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=77&height=20" width="85" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media")
    chatbox(:id="id", :user="user", :photoURL="photoURL", @loginFB="loginFB", @loginGoogle="loginGoogle")
    main
      a.item(href="/static/img/自主學習發票捐贈.png")
        | 發票捐贈(購物時出示)：
        br
        img(src="/static/img/自主學習發票捐贈.png")
      transition(name='fade', mode='out-in')
        router-view(:myKey="myKey")
</template>

<script>
import { handsRef } from './firebase'
import firebase from 'firebase/app'
import mix from './mixins/mix.js'
import Chatbox from './components/Chatbox'

export default {
  name: 'app',
  mixins: [mix],
  components: { Chatbox },
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
  }
}
</script>

<style lang="scss">

@mixin keyframes($animation-name) {
    @-webkit-keyframes #{$animation-name} {
        @content;
    }
    @-moz-keyframes #{$animation-name} {
        @content;
    }  
    @-ms-keyframes #{$animation-name} {
        @content;
    }
    @-o-keyframes #{$animation-name} {
        @content;
    }  
    @keyframes #{$animation-name} {
        @content;
    }
}

@mixin animation($str) {
  -webkit-animation: #{$str};
  -moz-animation: #{$str};
  -ms-animation: #{$str};
  -o-animation: #{$str};
  animation: #{$str};      
}

@mixin transition($args...) {
  -webkit-transition: $args;
  -moz-transition: $args;
  -ms-transition: $args;
  -o-transition: $args;
  transition: $args;
}

@mixin transform($transforms) {
     -moz-transform: $transforms;
       -o-transform: $transforms;
      -ms-transform: $transforms;
  -webkit-transform: $transforms;
          transform: $transforms;
}

.fade-leave {  }

.fade-leave-active {
  @include transition(all .3s ease);
  opacity: 0;
}

.fade-enter {
  opacity: 0;
  @include transform(rotateY(45deg));
}

.fade-enter-active {
  @include transition(all .5s ease-in);
}

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

</style>
