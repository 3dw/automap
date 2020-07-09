<template lang="jade">
  .hello
    h1
    .ui.comments.container
      .comment(v-for = "t in talks")
        hr
        .avatar
          i.user.icon(v-if="t[0].user")
          i.comments.icon(v-else)
        vue-markdown(v-if="t[0].text") {{ t[0].text }}
        br
        .ui.buttons(v-if = "t[0].buttons")
          a.ui.button(v-for = "b in t[0].buttons" @click="say(b.payload)") {{ b.title }}
    hr
    .ui.form.container
      .ui.field
        input(v-model="userSay" list="intents" placeholder="您的問題" @keyup.enter="say(userSay)")
        a.ui.button(@click="say(userSay)") 送出
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
      console.log(this.talks)
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
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
}

.comment {
  max-width: 600px;
}

</style>
