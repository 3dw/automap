<template lang="pug">
  .hello
    h1 歷史故事
    Timeline(:timeline-items="timelineItems", :message-when-no-items="messageWhenNoItems")
 
</template>

<script>

import Timeline from 'timeline-vuejs'

export default {
  name: 'short',
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'There are not items',
    timelineItems: [
      {
        from: new Date(1994, 8),
        title: '種籽親子實驗小學',
        description:
          '台灣民主學校的先驅，由十個家庭共同創立。獨立教育工作者社群（以下簡稱社群）教師李雅卿為創辦人及首任苑長。種籽的特色是討論文化、課程選修和師生平權的生活公約。社群教師朱佳仁曾任種籽理化與數學老師，以及苑長。'
      },
      {
        from: new Date(1998, 8),
        title: '台北市自主學習實驗計畫',
        description:
          '台北市唯一一次公民合作辦理的國、高中六年一貫自主中學實驗計畫。由社群教師李雅卿主持。社群教師戎培芬、朱佳仁、陳家帶、唐光華都在自主中學計畫任教多年，陪伴中學生從他律到自律。朱靜芬老師也曾在自主中學開設美術課程。實驗計畫透過必修、選修和自主三個學程，讓不同性向的學生都能發展特長，找到自己的目標和未來，也證明了自主學習的理念與作法，在中學階段可以有非常大的力道。自主中學實驗計畫經三次評鑑優良，唯因政府政策考量，只招三屆學生。'
      },
      {
        from: new Date(2016, 6),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2012, 1),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      }
    ]
  })
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
