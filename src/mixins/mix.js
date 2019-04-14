export default {
  props: ['mySearch'],
  methods: {
    part: function (str) {
      return String(str).substring(0, 50)
    },
    toAge: function (y) {
      var ans = (new Date()).getFullYear()
      return ans - parseInt(y)
    },
    highlight: function (text, search) {
      var keys, i$, len$, k
      if (!text) {
        return ''
      }
      text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      text = text.replace(/&lt;\s*br\/?\s*&gt;/g, '<br/>')
      if (!search) {
        return text
      }
      if (search.substr(0, 1) === '$') {
        return text
      }
      keys = search.split(/\s+/g)
      for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
        k = keys[i$]
        text = text.replace(new RegExp(k, 'gi'), '<span class="highlightedText">$&</span>')
      }
      return text
    },
    getIcon: function (h) {
      if (!h) {
        return ''
      }
      if (h.photoURL) { return h.photoURL }
      return 'https://graph.facebook.com/' + (h.fbid || h.id || h.username || h.username) + '/picture'
    },
    countDateDiff: function (num) {
      var ans
      if (!num) {
        return ''
      }
      ans = new Date(num).toLocaleDateString()
      return ans
    },
    makeHref: function (str) {
      var ans
      if (!str) {
        return ''
      }
      ans = '' + str
      if (str.indexOf('http://') === -1) {
        ans = 'http://' + str
      }
      ans = ans.replace('https://', '')
      return ans
    },
    badAge: function (y) {
      var ans
      if (!y) {
        return false
      }
      ans = (new Date()).getFullYear() - parseInt(y)
      return isNaN(ans)
    },
    isValid: function (root) {
      return root &&
            root.name && root.share &&
            root.learner_habit && root.note &&
            root.address &&
            !(root.latlngColumn === 'undefined,undefined') &&
            !(root.latlngColumn === '36.778261,-119.4179324') &&
            root.connect_me
    },
    asValid: function (root) {
      return root && root.name && root.note && root.note.length >= 20 && root.address && !(root.latlngColumn === 'undefined,undefined') && !(root.latlngColumn === '36.778261,-119.4179324')
    },
    searchBy: function (list, key) {
      if (!list) { return [] }
      if (!key) { key = '' }
      var toAge = function (y) {
        var ans = (new Date()).getFullYear()
        return ans - parseInt(y)
      }

      var keys = key.split(/[\s&]+/g)
      var ans = list

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i]
        var min, max
        [min, max] = k.split(/[~-]/)
        if (k.match(/(\d+)[~-](\d+)/)) {
          ans = ans.filter(function (o) {
            return (toAge(o.learner_birth) <= max && toAge(o.learner_birth)) >= min ||
              (toAge(o.child_birth) <= max && toAge(o.child_birth) >= min) ||
              (toAge(o.child_birth2) <= max && toAge(o.child_birth2) >= min)
          })
        } else if (k.match(/(\d+)\+/)) {
          min = k.split('+')[0]
          ans = ans.filter(function (o) {
            return (toAge(o.learner_birth) >= min) ||
            (toAge(o.child_birth) >= min) ||
            (toAge(o.child_birth2) >= min)
          })
        } else if (k.match(/(\d+)-/)) {
          max = k.split('-')[0]
          ans = ans.filter(function (o) {
            return (toAge(o.learner_birth) <= max) ||
            (toAge(o.child_birth) <= max) ||
            (toAge(o.child_birth2) <= max)
          })
        } else {
          ans = ans.filter(function (o) {
            return (o.name + o.address + o.note + o.freetime + o.learner_habit + o.share + o.ask + o.id).indexOf(k) > -1
          })
        }
      }
      ans.sort(function (a, b) {
        if (!a.lastUpdate) { a.lastUpdate = 0 }
        if (!b.lastUpdate) { b.lastUpdate = 0 }
        return b.lastUpdate - a.lastUpdate
      })
      return ans
    }
  }
}
