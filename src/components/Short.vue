<template lang="pug">
  .hello
    h1 認識自學
    .ui.grid
      .ui.two.column.doubling.row
        .column
          section.ui.segment
            h2 自學短講
            .ui.ordered.list
              a.item(v-for="s in shorts", :href="s.url" target="_blank")
                img(:src="'http://www.google.com/s2/favicons?domain='+s.url")
                | {{s.n}} -- {{s.p}}主講
        .column
          section.ui.segment        
            h2 自學諮詢
            .ui.ordered.list
              a.item(href="http://www.k12ea.gov.tw/ap/nonschool2.aspx", target="_blank")
                img(src="http://www.google.com/s2/favicons?domain=http://www.k12ea.gov.tw/ap/nonschool2.aspx")
                | 教育局專線
              router-link.item(to="/contact", exact='')
                i.assistive.listening.systems.icon
                | 自主學習促進會專線
        .column
          section.ui.segment        
            h2 認識朋友
            .ui.ordered.list
              a.item(href="http://we.alearn.org.tw", target="_blank")
                img(src="http://www.google.com/s2/favicons?domain=http://we.alearn.org.tw")
                | 自學2.0
              a.item(href="https://docs.google.com/spreadsheets/d/1BbdFTBmHNehZIRoqpzaFmd1E5HE2qTdvnaQUWnB5m50/edit", target="_blank")
                img(src="http://www.google.com/s2/favicons?domain=https://docs.google.com/spreadsheets/d/1BbdFTBmHNehZIRoqpzaFmd1E5HE2qTdvnaQUWnB5m50/edit")
                | 自學社團普查結果
              a.item(href="https://docs.google.com/forms/d/e/1FAIpQLSdWQf1xFlugOLL1cQwlMc-od06wHSTLLwlpjYTqli5bHAHgcw/viewform", target="_blank")
                img(src="http://www.google.com/s2/favicons?domain=https://docs.google.com/forms/d/e/1FAIpQLSdWQf1xFlugOLL1cQwlMc-od06wHSTLLwlpjYTqli5bHAHgcw/viewform")
                | 自學社團普查
        .column
          section.ui.segment        
            h2 認識自己
            .ui.ordered.list
              router-link.item(to='/Khr10', exact='')
                i.hourglass.half.icon
                | 一萬小時試算機
              router-link.item(to='/style', exact='')
                i.tasks.icon
                | 學習風格自我測試
              router-link.item(to='/auto4', exact='')
                i.tasks.icon
                | 學習自律四階段
        .column
          section.ui.segment        
            h2 開放教材
            .ui.ordered.list
              a.item(href="https://docs.google.com/spreadsheets/d/15FKNUNb_MIh7Pl0VaNgUmOuDmFGEQ_IJB1WJ5sobFYU/edit?usp=sharing", target="_blank")
                img(src="http://www.google.com/s2/favicons?domain=https://docs.google.com/spreadsheets/d/15FKNUNb_MIh7Pl0VaNgUmOuDmFGEQ_IJB1WJ5sobFYU/edit?usp=sharing")
                | 開放教材普查結果
              a.item(href="https://docs.google.com/forms/d/e/1FAIpQLSdI57nznV3O1crEuyCUwg7cWhwnaqzVs5y2Zwv0v3du_ql7ew/viewform", target="_blank")
                img(src="http://www.google.com/s2/favicons?domain=https://docs.google.com/forms/d/e/1FAIpQLSdI57nznV3O1crEuyCUwg7cWhwnaqzVs5y2Zwv0v3du_ql7ew/viewform")
                | 開放教材普查
      .ui.row
        .column
          h2 非學校型態實驗教育學生概況
          img#main(src = "/static/img/非學校型態實驗教育學生概況.png")


                
 
</template>

<script>
export default {
  name: 'short',
  data () {
    return {
      shorts: [
        // {n: '全球化與自主學習', p: '唐光華', url: 'https://paper.dropbox.com/doc/--AQBcedy5uB92xxIu5D2rmgtpAg-N7UMI4fSy0g1c72X7q8Fp'},
        // {n: '如何做學習計畫', p: '朱佳仁', url: 'https://paper.dropbox.com/doc/5UjmL5UYMDnep8mNkEMt0'},
        // {n: '談教師成長', p: '唐宗浩', url: 'https://paper.dropbox.com/doc/rIvhXRXPZKuuNfMz6GPl7'},
        {n: '如何成為未來職場需要的自由人才', p: '唐鳳', url: 'https://paper.dropbox.com/doc/RbEVa09jhkx3D0wdVYcp2'},
        {n: '人工智慧與未來學習', p: '唐鳳', url: 'https://www.youtube.com/embed/6lTVUp5xprA'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  font-size: 1.5rem !important;
}

#main {
  width: 66%;
  height: 400px;
}
</style>
