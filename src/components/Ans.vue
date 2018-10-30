<template lang="jade">
  .hello
    section.ui.segment.container
      h1.ui.header.center.aligned
        | {{myQ.q}}
      i.huge.orange.users.icon(style="display:block; margin-left:auto; margin-right:auto")
      .ui.divider
      .ui.grid
        .row
          .column
            p.description(v-for = "line in myQ.as" v-html = "highlightAndMakeBr(line, myKey)")
        
        .row
          .eighteen.wide.right.aligned.column(v-show="myQ.es[0]")
            .ui.divider
            span(v-for = "(e,index) in myQ.es")
              .ui.divider(v-show="index")
              | 參考:&nbsp;&nbsp;
              a(:href = "e.h" target="_blank")
                i.globe.icon
                | {{e.t}}
 
</template>

<script>
export default {
  name: 'ans',
  props: ['myKey'],
  data () {
    return {
      myQ: {q: '', as: [], es: []},
      handbook: {},
      catagories: [],
      faqs: []
    }
  },
  methods: {
    makeBr: function (str) {
      str = str || ''
      return str.replace(/\s/g, '<br/>').replace(/&nbsp;/g, '<br/>') || ''
    },
    highlightAndMakeBr: function (text, search) {
      text = this.makeBr(text)
      if (!search) {
        return text
      }
      return text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>')
    },
    cataColor: function (n) {
      return (this.catagories.filter(
        function (o) { return o.t === n }
      )[0] || {}).color || '#999'
    },
    cataIcon: function (n) {
      return (this.catagories.filter(
        function (o) { return o.t === n }
      )[0] || {}).icon || 'user'
    }
  },
  mounted () {
    // GET /someUrl
    this.$http.get('https://map.alearn.org.tw/static/api/handbook-data.json').then(response => {
      this.handbook = response.body
      this.catagories = this.handbook.catagories
      this.faqs = this.handbook.faqs
      this.myQ = this.faqs[this.$route.params.id]
      // success callback
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  text-align: left
}

</style>
