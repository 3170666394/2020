 <template>
  <div id="app">
    <div class="item0"></div>
    <div class="item1">
      <router-view></router-view>
    </div>
    <div class="item2">
      <router-link to="/">
        <figure>
          <figcaption>
            <i class="iconfont icon-fangzi"></i>
          </figcaption>首页
        </figure>
      </router-link>
      <router-link to="/classify">
        <figure>
          <figcaption>
            <i class="iconfont icon-caidan"></i>
          </figcaption>分类
        </figure>
      </router-link>
      <router-link to="/shopping">
        <figure>
          <figcaption>
            <i class="iconfont icon-gouwuche"></i>
          </figcaption>购物车
        </figure>
      </router-link>
      <router-link to="/mine">
        <figure>
          <figcaption>
            <i class="iconfont icon-ren"></i>
          </figcaption>个人中心
        </figure>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 0.46rem auto 0.56rem;
  .item1 {
    overflow: auto;
    height: 100%;
  }
  .item2 {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ccc;
    figure {
      width: 0.76rem;
      height: 0.56rem;
      background: white;
      text-align: center;
      figcaption {
        margin-top: 0.04rem;
        .iconfont {
          font-size: 0.25rem;
        }
      }
    }
    a {
      color: #222;
    }
  }
}
</style>