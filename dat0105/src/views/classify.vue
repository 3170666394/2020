<template>
  <div id="list">
    <div class="item12">
      <ul>
        <router-link to="/classify" tag="li">手机数码</router-link>
        <router-link to="/classify/peijian" tag="li">官方配件</router-link>
        <router-link to="/classify/shoe" tag="li">鞋包服饰</router-link>
        <router-link to="/classify/huxi" tag="li">畅呼吸</router-link>
        <router-link to="/classify/health" tag="li">健康服务</router-link>
        <router-link to="/classify/eletic" tag="li">家用电器</router-link>
        <router-link to="/classify/compute" tag="li">电脑办公</router-link>
      </ul>
    </div>
    <div class="item13">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
#list {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 0.83rem auto;

  .item12 {
    border-right: 1px solid #ccc;
    ul {
      padding: 0.28rem 0.06rem 0;
      text-align: center;
      li {
        margin-bottom: 0.18rem;
        padding: 0.03rem 0.08rem;
        border-radius: 0.04rem;
      }
    }
  }
  .item13 {
    background: lightgreen;
  }
}
</style>