<template lang="pug">
.hello
  #ad
    a(href="https://hack.bestian.tw", target="_blank", rel="noopener noreferrer")
      img.ad(src="/static/ad-be.jpg", alt="Bestian")
      | 本站由Bestian製作，歡迎學習架網站
</template>

<script>
export default {
  name: 'Ad',
  data () {
    return { }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#ad {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(255,255,255,0.8);
  border-radius: 5px;
  padding: .5em .5em;
  font-size: 16px;
  transition: all 0.5s ease;
}

#ad:hover {
  font-size: 20px;
}

.ad {
  width: 3em;
}

</style>
