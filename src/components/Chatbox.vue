<template lang="jade">
  .chats(v-bind:class = "{ full : isFull, mini: isMini }")
    #menu.ui.inverted.menu
      .item.ui.form
        .ui.input
          input(v-model="key", placeholder="搜索")
      .right.menu
        a.item(v-if="!isFull" @click="isFull = true; isMini = false")
          i.comments.icon
          | 聊聊
          .red.note {{ chats.length }}
        a.item(v-if="!isMini" @click="isFull = false; isMini = true")
          i.compress.icon
          | 縮小
    #box
      .ui.list
        .item(v-for="c in fil(chats).slice(fil(chats).length - 5, fil(chats).length)")
          router-link(:to="'/flag/'+c.id")
            img.ui.avatar(:src="c.photoURL || 'http://graph.facebook.com/' + c.id + '/picture'", alt="^_^")
          a(@click = "key = c.l") [{{c.l}}]
          span {{c.n}} : {{c.t}}
          span.gray(v-show="isFull") &nbsp;&nbsp;-{{ countDateDiff(c.time) }}
        .item(v-if="id")
          .ui.form
            .field
              img.ui.avatar(:src="photoURL || 'http://graph.facebook.com/' + id + '/picture'")
              input#input(v-model="msg" placeholder="在想什麼嗎?" autofocus)
            .inline.fields
              .field
                .ui.radio.checkbox
                  input(type='radio', name='label', v-model="label", value="諮詢" checked='checked == "諮詢"')
                  label 諮詢
              .field
                .ui.radio.checkbox
                  input(type='radio', name='label', v-model="label", value="故障", checked='checked == "故障"')
                  label 故障
              .field
                .ui.radio.checkbox
                  input(type='radio', name='label', v-model="label", value="找伴", checked='checked == "找伴"')
                  label 找伴
              .field
                .ui.radio.checkbox
                  input(type='radio', name='label', value="閒聊", checked='checked == "閒聊"')
                  label 閒聊
              a.ui.green.small.button(@click="addChat") 留言
        .item(v-else) 
          .ui.big.buttons(v-if="!user")
            button.ui.blue.button(@click="loginFB")
              i.facebook.icon
              | 登入以留言 
            .or
            button.ui.orange.button(@click="loginGoogle")
              i.google.icon
              | 登入以留言 
</template>

<script>

import { chatsRef } from '../firebase'
import mix from '../mixins/mix.js'

export default {
  name: 'chats',
  mixins: [mix],
  props: ['id', 'user', 'photoURL'],
  data () {
    return {
      msg: '',
      key: '',
      isFull: false,
      isMini: true,
      label: ''
    }
  },
  firebase: {
    chats: chatsRef
  },
  methods: {
    addChat: function () {
      var o = {
        id: this.id,
        n: this.user.providerData[0].displayName,
        t: this.msg,
        l: this.label,
        photoURL: this.photoURL || '',
        time: (new Date()).getTime()
      }
      if (this.msg) {
        this.$firebaseRefs.chats.push(o)
        this.msg = ''
      }
    },
    loginFB: function () {
      this.$emit('loginFB')
    },
    loginGoogle: function () {
      this.$emit('loginGoogle')
    },
    fil: function (list) {
      var k = this.key
      return list.filter(function (o) { return (o.t + o.l).indexOf(k) > -1 || !k })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chats {
    position: fixed;
    z-index: 999999;
    bottom: 0;
    right: 0;
    width: 33vw;
    height: 33vh;
    overflow: visible;
    border: 1px solid black;
    background-color: white;
  }

  .chats.full {
    width: 100vw;
    height: 66vh;    
  }

  .chats.mini {
    width: 50vh;
    height: 0;    
  }

  img.ui.avatar {
    float: left;
    width: 50px;
    height: 50px;
  }

  #input {
    width: 60% !important;
    vertical-align: bottom !important;
  }

  @media screen and (max-width: 600px) {
    .chats {
      width: 100vw;
      height: 20vh;
    }

    .chats.full {
      width: 100vw;
      height: 80vh;    
    }

    .chats.mini {
      width: 100vw;
      height: 0;    
    }

    #input {
      width: 150px !important;
      vertical-align: bottom !important;
    }
  }

  .gray {
    color: gray;
  }

  #menu {
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
  }

  #box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .ui.list {
    position: absolute;
/*    bottom: 0; */
    left: 0;
    width: 100%;
  }

  input {
    width: 110px !important
  }
</style>
