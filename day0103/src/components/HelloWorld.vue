<template>
  <div>
    <button @click="inc">+</button>
    <button @click="xiao">-</button>
  </div>
</template>

<script>
export default {
  props: {
    nums: {
      type: Number
    },
    ids: Number
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    inc() {
      var shuzhi = this.nums + 1
      this.$emit('msg', { num: shuzhi, id: this.ids })
    },
    // eslint-disable-next-line space-before-function-paren
    xiao() {
      var shuzhi = null
      if (this.nums < 1) {
        shuzhi = 0
      } else {
        shuzhi = this.nums - 1
      }
      this.$emit('msg', { num: shuzhi, id: this.ids })
    }
  }
}
</script>

<style>
</style>
