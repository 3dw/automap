<template lang="pug">
  .hello
    .ui.container
      .slide(v-show = "!step")
        .ui.attached.segment
            h1.ui.heaer 
              i.purple.puzzle.icon
              | 何謂學習風格？

            p 現代的教育研究者發現，每個人擅長的學習方式都有不同。即使在同一個課室中，每個人去掌握和理解的方法也不一樣。這就是每個人的學習風格。
                i.purple.fire.icon

            p 學習風格有千百種以上，要細分有很多角度。本測試採取的是「
                i.purple.unhide.icon
                | 視
                i.purple.assistive.listening.systems.icon
                |聽
                i.purple.book.icon
                |讀
                i.purple.sign.language.icon
                |作」(VARK)架構，特色是只要回答16個問題，就能讓您很快找出適合自己的有效學習方式。

            p 原文的問題出處與更多資訊，請至
                a(href="http://vark-learn.com" target="_blank") VARK介紹網站

        a.ui.large.green.bottom.attached.button(tabindex="0" @click ="step = 1") 開始測驗!

    .ui.form.slide.container(v-show="step == 1")
        .ui.segment.repeated-item(v-for="q in qs")
          h2.ui.dividing.header {{q.t}}
          br
          .field
            .list(v-for="(c,index) in q.cs")
              .item
                .ui.checkbox
                  input(type="checkbox" v-model = "q.checked[index]")
                  label {{c}}

        a.ui.large.green.top.attached.button(tabindex="0" @click="step = 2") 看結果!
        .ui.attached.segment

    #resault.ui.segment.slide2(v-show="step == 2")
        h1.ui.header 
            i.purple.puzzle.icon
            | 測驗結果：你是一名「{{getFinal()}}」優勢的學習者!!
            .sub.header {{getNum()}}
        p(v-html = "getAdvice()")

 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      step: 0,
      qs: [
        {
          t: '回想一下，你是如何學習新事物的，試著避開選擇像肢體類的技術學習，如騎腳踏車。你比較偏好從：（可複選）',
          cs: ['文字解說，如手冊或是教科書。', '觀看現場的示範', '圖片或是圖表－視覺上的提示', '別人解釋或是問問題'],
          checked: [false, false, false, false],
          rs: ['r', 'k', 'v', 'a']
        }, {
          t: '你想學習一個新的程式語言、電腦技術或是電玩，你會：（可複選）',
          cs: ['使用滑鼠或是鍵盤，先做再說', '閱讀相關文件，如說明書、教科書', '根據書中的圖片指示學習', ' 跟其他知道這項程式的人討論'],
          checked: [false, false, false, false],
          rs: ['k', 'r', 'v', 'a']
        }, {
          t: '一個旅行團想認識在你的區域內的公園或是野生動物保護區，你會：（可複選）',
          cs: ['帶他們到公園或是野生動物保護區並且和他們一起在裏面逛', '展示網路上的圖片、相片或是攝影集給他們看', '給他們關於這個公園或是保護區的介紹小冊子', '跟他們聊或是安排一個關於這個公園或是保護區的解說活動'],
          checked: [false, false, false, false],
          rs: ['k', 'v', 'r', 'a']
        }, {
          t: '我喜歡的網站，最好要有：（可複選）',
          cs: ['我可以按、可以移動與嘗試的物件', '有聲音介紹，如我可以聽到音樂、廣播或是訪談', '有趣的文字介紹、條目與解釋', '有趣的設計與視覺效果'],
          checked: [false, false, false, false],
          rs: ['k', 'a', 'r', 'v']
        }, {
          t: '你想為你的家人煮一頓特別的好料吃，你會：（可複選）',
          cs: ['詢問好朋友他們的建議', '直接就煮就是了，不用任何的指導', '從食譜中的圖片得到靈感', '去讀食譜，閱讀材料與步驟，找到你認為最好的。'],
          checked: [false, false, false, false],
          rs: ['a', 'k', 'v', 'r']
        }, {
          t: '除了價格之外，當你想買一本非小說類的書，什麼因素影響你的決定？（可複選）',
          cs: ['這本書的封面與外觀', '迅速的讀過它', '有朋友談論它並推薦它', '這本書有現實生活的故事、經驗與例子'],
          checked: [false, false, false, false],
          rs: ['v', 'r', 'a', 'k']
        }, {
          t: '當你在餐廳或是咖啡館點菜時，你會：（可複選）',
          cs: ['從菜單上的文字描述選擇', '或是詢問朋友他們推薦的菜色', '點你之前點過的', '看看別人吃的或是菜單上的圖片'],
          checked: [false, false, false, false],
          rs: ['r', 'a', 'k', 'v']
        }, {
          t: '你想告訴別人如何到機場、市中心或是火車站，你會：（可複選）',
          cs: ['和他一起去', '寫下如何去的指示', '告訴他如何走', '畫地圖或是給他地圖'],
          checked: [false, false, false, false],
          rs: ['k', 'r', 'a', 'v']
        }, {
          t: '你經由書、光碟或是網站來學如何用你的新數位相機拍照，你會喜歡：（可複選）',
          cs: ['明確的書面指示，並列出如何拍照的重點', '展示許多好的與不好的照片的例子並且如何改善它們的方法。', '相機的結構圖並且標出每個部份的功能', '一個可以讓人問問題而且討論相機的功能的機會，如網站上的討論區'],
          checked: [false, false, false, false],
          rs: ['r', 'k', 'v', 'a']
        }, {
          t: '你想買一台新的數位相機或是手機，除了價格外，什麼因素最能影響你的決定？（可複選）',
          cs: ['店員告訴我，介紹給我它的特色', '閱讀所有關於產品特色的文件', '動手試驗', '外觀看起來是否有型？是否順眼？'],
          checked: [false, false, false, false],
          rs: ['a', 'r', 'k', 'v']
        }, {
          t: '你正為一個團體策畫節慶活動，你會如何展示你的構想，並收集他們對這項活動的想法？（可複選）',
          cs: ['打電話、寫信或是寄電子郵件給他們', '向他們描述這個活動最重要的部份', '給他們一份印出來的行程表', '使用地圖或是網站來展示'],
          checked: [false, false, false, false],
          rs: ['k', 'a', 'r', 'v']
        }, {
          t: '你將要在一個重要場合發表演說，你會如何準備？（可複選）',
          cs: ['寫下幾個關鍵字，並反覆地練習你的演說', '收集許多例子與故事，讓這個演說變得實際有用', '做圖表、收集圖片來解釋事物', '寫下你的講稿，並且反覆的閱讀它'],
          checked: [false, false, false, false],
          rs: ['a', 'k', 'v', 'r']
        }, {
          t: '膝蓋有問題，你喜歡醫生怎麼做？（可複選）',
          cs: ['使用一個塑膠的膝蓋模型，向你展示哪邊出了問題', '用一個圖來解釋', '仔細的描述問題在那裏', '給你一個網站，或是介紹，讓你能夠閱讀'],
          checked: [false, false, false, false],
          rs: ['k', 'v', 'a', 'r']
        }, {
          t: '你喜歡老師或是演講者使用：（可複選）',
          cs: ['模型、示範或是實際操作的部份', '問與答、對談、小組討論或是邀請講者', '圖片、圖說與圖表', '手冊、書本、文字重點'],
          checked: [false, false, false, false],
          rs: ['k', 'a', 'v', 'r']
        }, {
          t: '你不確定一個字要拼成 dependent 還是 dependant時，你會：（可複選）',
          cs: ['把兩個字都寫在紙上，選一個', '在腦中「看」這個字，並且從他們看起來的外觀來選', '查字典', '想想這兩個字的發音，並且選擇一個'],
          checked: [false, false, false, false],
          rs: ['k', 'v', 'r', 'a']
        }, {
          t: '你完成了某項測試，你會喜歡那種方式呈現結果？（可複選）',
          cs: ['從你已經做過的試題中舉實例說明', '使用詳細的文字說明來描述結果', '測試者使用口頭方式來解說結果', '使用圖表來展示你的成果'],
          checked: [false, false, false, false],
          rs: ['k', 'r', 'a', 'v']
        }
      ],
      model: {
        r: {
          v: 0,
          a: 0,
          r: 0,
          k: 0
        },
        l: [6, 9],
        icon: '👍',
        it$$: '🐬何謂學習風格？',
        i: '<p>🔥現代的教育研究者發現，每個人擅長的學習方式都有不同。即使在同一個課室中，每個人去掌握和理解的方法也不一樣。這就是每個人的學習風格。🔥</p><p>學習風格有千百種以上，要細分有很多角度。本測試採取的是「👀視👂聽📖讀作🙌」(VARK)架構，特色是只要回答16個問題，就能讓您很快找出適合自己的有效學習方式。</p>',
        ow: '原文的問題出處與更多資訊，請至VARK介紹網站',
        g: 'http://www.vark-learn.com/english/index.asp',
        num: 0
      }
    }
  },
  methods: {
    countVARK: function () {
      var ans, i, l, vark
      ans = {}
      i = 0
      while (i < ['v', 'a', 'r', 'k'].length) {
        l = this.qs.filter(fn$).length
        vark = ['v', 'a', 'r', 'k'][i]
        ans[vark] = l
        i++
      }
      return ans
      function fn$ (q) {
        var j
        j = 0
        while (j < [0, 1, 2, 3].length) {
          if (q.rs[j] === ['v', 'a', 'r', 'k'][i] && q.checked[j]) {
            return true
          }
          j++
        }
      }
    },
    getNum: function () {
      var vark, ans, i$, len$, t
      vark = ['v', 'a', 'r', 'k']
      ans = []
      for (i$ = 0, len$ = vark.length; i$ < len$; ++i$) {
        t = vark[i$]
        ans.push(t + ':' + this.countVARK()[t])
      }
      return ans.join(' ')
    },
    getFinal: function () {
      var vark, titles, ans, i$, len$, t
      vark = ['v', 'a', 'r', 'k']
      titles = {
        v: '視覺',
        a: '聽覺',
        r: '閱讀',
        k: '操作'
      }
      ans = []
      for (i$ = 0, len$ = vark.length; i$ < len$; ++i$) {
        t = vark[i$]
        if (this.countVARK()[t] > 9) {
          ans.push(titles[t])
        }
      }
      if (ans.length === 0) {
        ans = ['正在試探自己']
      }
      return ans.join('+')
    },
    getAdvice: function () {
      var vark, ans, maxADV, minADV, i$, len$, t, res
      vark = ['v', 'a', 'r', 'k']
      ans = []
      maxADV = {
        'v': '你具有視覺學習的優勢。視覺優勢的人，通常擅於看圖表、做圖形的設計與資訊整理。<br/>你的筆記本應該充滿你自己的圖鴨和圖象式筆記吧？太雜亂的顏色與空間，可能會打亂你的思考、降低學習效率，最好在一個視覺單純的環境下學習。',
        'a': '你具有聽覺、對話學習的優勢。聽覺、對話優勢的人，通常也比較人際取向，喜歡在討論的過程中學習，喜歡與人合作，而不是每個人各做各的。<br/>在一般的講述課堂，單向的聽講也是可以差強人意地學會新知，更喜歡合作討論的氣氛，以及有來有往的互動。如果不能發問就會不舒服。因此，有學習夥伴和可以提問的老師或討論區是很重要的。</p>',
        'r': '你具有閱讀學習的優勢。閱讀學習是少數完全不依賴真人互動的學習方式。對你而言，好的學習材料非常重要。如果能擅用圖書館和網路，你將能以自己的步調學到很多。<br/>如果遇到不好的材料，可能會消耗你的心力，讓你事倍功半，因此，當初學一門領域時，若能找到視野又深又廣的人，請他推薦真正好的學習材料給你，會更有效率。',
        'k': '你具有實作學習的優勢。實作優勢的人，通常都有驚人的創造潛力，只是在一般的單向講述課堂中，難以發揮。<br/>你適合在家中弄一塊小工作區，動手拆裝各種裝置的小零件，實作出一些作品，把學到的知識製成模型。你也適合在實作課堂中，透過邊做邊學的方式學習新知。<br/>紙跟筆對你是不夠用的，最好找到其他的學習工具，例如棋子、紙牌、方塊、模型、電腦程式等等。'
      }
      minADV = {
        'v': '你目前還不大擅長視覺學習。遇到圖象與圖表時，試著用你擅長的能力，例如聽覺、閱讀和實作，去分析它們吧！',
        'a': '你目前還不大擅長聽覺與對話的學習。如果很多知識用聽的不易理解，試著靠閱讀、圖象與實作，來學會它吧！',
        'r': '你目前還不大擅長閱讀。如果很多知識用讀的不易理解，那麼試著把它們唸出來、或轉換成圖象、動作來理解吧！<br/>大部份的自學知識都以閱讀為主，因此你可能需要一些擅長閱讀的學習夥伴，以及願意回答你問題的老師，才不會因為閱讀上的困難而被卡住。',
        'k': '你目前還不大擅長實作學習。試著把你學到的知識，拿來創作一些作品吧！'
      }
      for (i$ = 0, len$ = vark.length; i$ < len$; ++i$) {
        t = vark[i$]
        res = this.countVARK()
        if (res[t] > 9) {
          ans.push(maxADV[t])
        }
        if (res[t] < 6) {
          ans.push(minADV[t])
        }
      }
      return ans.join('<br/><br/>')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list .item {
  text-align: left;
}

</style>
