<template lang="jade">
  .hello
    .ui.tall.stacked.segment
      h1.ui.header {{intro[step].title}}
      .ui.divider
      h3.ui.header {{intro[step].subTitle}}
        .ui.ordered.list
          .item(v-for="x in intro[step].urls")
            a(:href="x.h" target="_blank")
              img.favicon(:src="'http://www.google.com/s2/favicons?domain='+x.h", :alt = "x.t")
              | {{x.t}}

 
</template>

<script>
export default {
  name: '',
  data () {
    return {
      step: '',
      intro: {
        start: {
          title: '自學申請',
          subTitle: '如果您或您的孩子聽過「自學」但不知如何申請，\n請先參考<自學地圖>上的常見問答：',
          urls: [{
            t: '自學地圖',
            h: 'http://map.alearn.org.tw'
          }]
        },
        plan: {
          title: '學習計畫',
          subTitle: '每個人都不一樣，計畫書也沒有標準答案。 \n請先參考<如何做學習計畫>與<第一次申請高中自學就上手>工作坊記錄：',
          urls: [
            {
              t: '如何做學習計畫',
              h: 'https://paper.dropbox.com/doc/5UjmL5UYMDnep8mNkEMt0'
            }, {
              t: '第一次申請高中自學就上手',
              h: 'https://paper.dropbox.com/doc/TPnCOtOK70l3hGH63AHzQ'
            }
          ]
        },
        consult: {
          title: '學習方法諮詢',
          subTitle: '如果在特定的學科上遇到瓶頸，\n請先參考<如何成為未來職場需要的自由人才>講座記錄：',
          urls: [{
            t: '如何成為未來職場需要的自由人才',
            h: 'https://paper.dropbox.com/doc/RbEVa09jhkx3D0wdVYcp2'
          }]
        }
      },
      phones: [{
        img: 'yi-ting.jpg',
        name: '蔡伊婷',
        topics: ['自學申請', '審議', '法規', '流程', '資源連結轉介'],
        xp: '諮詢經驗：2016~至今',
        times: ['週一下午2:00-4:00'],
        phone: '0919979804'
      }]
    }
  },
  mounted () {
    this.step = this.$route.params.step
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  font-size: 1.5rem !important;
}
</style>
