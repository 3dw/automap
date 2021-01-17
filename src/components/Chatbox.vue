<template lang="pug">
  .chats(v-bind:class = "{ full : isFull, mini: isMini }")
    vue-headful(title="聊天室 - 自學地圖", description="自學聊天室")
    #menu.ui.inverted.big.menu
      .item.ui.form(v-show="isFull")
        .ui.input
          input(v-model="key", placeholder="搜索")
      .right.menu
        a.item(v-if="!isFull" @click="isFull = true; isMini = false; reCount()")
          i.comments.icon
          | 聊聊
          .red.note(v-show = "chats.length > read") {{ chats.length - read }}
        a.item(v-if="!isMini" @click="isFull = false; isMini = true")
          i.compress.icon
          | 縮小
    #box
      .ui.list
        .item(v-for="(c, idx) in fil(chats).slice(fil(chats).length - 5, fil(chats).length)" v-bind:key="c.t")
          .ui(v-show = "edit !== c") 
              router-link(:to="'/flag/'+c.id")
                img.ui.avatar(:src="c.photoURL || 'http://graph.facebook.com/' + c.id + '/picture'", alt="^_^")
              a(@click = "key = c.l" v-bind:class = "c.l") [{{c.l}}]
              a(@click = "edit = c", v-show="c.id == id")
                i.edit.icon(title = "edit")
              vue-markdown
                | {{c.n}} : {{c.t}}
              span.gray(v-show="isFull") &nbsp;&nbsp;-
                vue-markdown 
                  |{{ countDateDiff(c.time) }}
          .ui.form(v-show="edit == c")
            .ui.input
              input#input(v-model="c.t", placeholder="更新")
              a.ui.green.small.button(@click="edit = ''; updateChat(c)") 更新

        .item.preview(v-if="p.t")
          router-link(:to="'/flag/'+p.id")
            img.ui.avatar(:src="p.photoURL || 'http://graph.facebook.com/' + p.id + '/picture'", alt="^_^")
          a(@click = "key = p.l" v-bind:class = "p.l") [{{p.l}}]
          vue-markdown
            | {{p.n}} : {{p.t}}
          span.gray(v-show="isFull") &nbsp;&nbsp;-
            vue-markdown 
              |{{ countDateDiff(p.time) }}
        .item(v-if="id")
          .ui.form
            .field
              img.ui.avatar(:src="photoURL || 'http://graph.facebook.com/' + id + '/picture'")
              input#input(v-model="msg" placeholder="在想什麼嗎?" autofocus)
            .inline.fields
              .field(v-for = "l in labels")
                .ui.radio.checkbox
                  input(type='radio', name='l', v-model="label", :value="l" checked='checked == l')
                  label
                    a(@click="label=l", v-bind:class="l") {{l}}
              .ui.button.group
                a.ui.blue.small.button(@click="preview") 預覽
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
import VueMarkdown from 'vue-markdown'

export default {
  name: 'chats',
  mixins: [mix],
  components: { VueMarkdown },
  props: ['id', 'user', 'photoURL'],
  data () {
    return {
      p: '',
      msg: '',
      key: '',
      edit: '',
      read: 0,
      isFull: false,
      isMini: true,
      label: '閒聊',
      labels: ['諮詢', '故障', '找伴', '閒聊']
    }
  },
  firebase: {
    chats: chatsRef
  },
  methods: {
    preview: function () {
      var o = {
        id: this.id,
        n: this.user.providerData[0].displayName,
        t: this.msg,
        l: this.label,
        edit: false,
        photoURL: this.photoURL || '',
        time: (new Date()).getTime()
      }
      this.p = o
    },
    updateChat: function (c) {
      var o = {
        id: c.id,
        n: c.n,
        t: c.t,
        l: c.l,
        photoURL: c.photoURL || '',
        time: (new Date()).getTime()
      }
      chatsRef.child(c['.key']).set(
        o
      )
    },
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
      return list.filter(function (o) { return (o.t + o.l).indexOf(k) > -1 || !k }).map(function (o) {
        o.edit = false; return o
      })
    },
    reCount: function () {
      this.read = this.chats.length
      this.$localStorage.set('read', this.read)
    }
  },
  mounted () {
    this.read = this.$localStorage.get('read') || 0
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .諮詢 { background-color: yellow }
  .找伴 { background-color: lightgreen }
  .故障 { background-color: pink }
  .閒聊 { background-color: white }

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

  .item.preview {
    opacity: 0.86;
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
    top: 1em;
/*    bottom: 0; */
    left: 0;
    width: 100%;
    padding-left: 1em; 
  }

  input {
    width: 110px !important
  }
</style>
