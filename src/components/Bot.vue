<template lang="pug">
  .hello
    vue-headful(title="聊天機器人 - 自學地圖", description="自學聊天機器人")
    h1 歡迎使用自學地圖
    .ui.comments.container
      .comment#talk(v-for = "t in talks", :class="t[0].user ? 'user' : 'bot'")
        .avatar(:class="t[0].user ? 'user' : 'bot'")
          i.user.icon(v-if="t[0].user")
          i.phone.volume.icon(v-else)
        vue-markdown(v-if="t[0].text") {{ t[0].text }}
        br
        .ui.vertical.buttons
          a.ui.green.button(v-for = "b in t[0].buttons" @click="say(b.payload)") {{ b.title }}
          a.ui.red.basic.button(v-if="!t[0].user", href="https://forms.gle/BK1HUgBzkM6MYVKT9", target="_blank", rel="noopener noreferrer") 錯誤回報
    hr
    .ui.form.container
      .ui.field
        i.user.icon
        input#say(v-autofocus='' v-model="userSay" list="intents" placeholder="您的問題..." @keyup.enter="say(userSay)")
        label(for="say") _
        a.ui.blue.button(@click="say(userSay)") 送出
    datalist#intents
      option(v-for = "i in intents") {{ i }}
 
</template>

<script>

import VueMarkdown from 'vue-markdown'

export default {
  name: 'bot',
  components: {
    VueMarkdown
  },
  data () {
    return {
      userSay: '',
      talks: [],
      domain: {},
      intents: [],
      responses: [],
      actions: []
    }
  },
  methods: {
    say: function (str) {
      console.log(str)
      this.talks.push([{
        user: true,
        text: str
      }])
      this.$gtag.event('say', {
        'event_category': 'say',
        'event_label': 'say' + str,
        'value': 10
      })
      setTimeout(() => { window.scrollTo(0, document.body.scrollHeight) }, 100)
      this.listen(str)
    },
    listen: function (str) {
      console.log(str)
      if (this.intents.indexOf(str) > -1) {
        this.talks.push(this.responses['utter_' + str])
      } else {
        this.talks.push(this.responses['utter_default'])
      }
      this.userSay = ''
      this.$forceUpdate()
    }
  },
  mounted () {
    // GET /someUrl
    this.$http.get('/static/api/domain.json').then(response => {
      console.log(response.body)
      this.domain = response.body
      this.intents = this.domain.intents
      this.actions = this.domain.actions
      this.responses = this.domain.responses

      this.listen('')
      // success callback
    }, response => {
      console.log('error')
      console.log(response)
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.item {
}

input#say {
  width: 320px;
}

.comment#talk {
  position: relative;
  max-width: 600px;
  padding: 3px 8px;
}

.comment#talk.bot {
  background-color: #ccf;
  border-radius: 0 15px 15px 15px;
}

.comment#talk.user {
  background-color: #cfc;
  border-radius: 15px 0 15px 15px;
}

.comment#talk p {
  font-size: 18px;
}

.comment#talk .avatar {
  position: absolute;
  top: 0;
}

@media screen and (max-width: 820px) {
  .comment#talk .avatar {
    position: static;
  }
}

.comment#talk .avatar.bot {
  left: -2em;
}

.comment#talk .avatar.user {
  right: -2em;
}

.ui.comments.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>