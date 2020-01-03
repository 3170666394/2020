<template>
  <div id="app">
    <div v-for="item in data" :key="item.id">
      {{item.num}}
      <HelloWorld @msg="insreace" :nums="item.num" :ids="item.id"></HelloWorld>
    </div>
    {{jishuhe}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      data: [
        {
          id: Date.now(),
          num: 2,
          name: 'produce1'
        },
        {
          id: Date.now() + 1,
          num: 3,
          name: 'produce2'
        },
        {
          id: Date.now() + 2,
          num: 5,
          name: 'produce3'
        }
      ]
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    insreace({ num, id }) {
      this.data.forEach(item => {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          item.num = num
        }
      })
    }
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    jishuhe() {
      var a = 0
      this.data.forEach(item => {
        a += item.num
      })
      return a
    }
  }
}
</script>
