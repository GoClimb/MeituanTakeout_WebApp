<template>
  <div class="page-home">
    <div class="home-top">
      <router-view></router-view>
    </div>
      <div class="home-main">
        <a @click="handlerClick('/home/index', 'index-logo-active')">
          <div
            class="index-logo"
            :class="{ 'index-logo-active': isActive === 'index-logo-active' }"
          ></div>
          <div class="home-text">订单</div>
        </a>
        <a @click="handlerClick('/home/order', 'order-logo-active')">
          <div
            class="order-logo"
            :class="{ 'order-logo-active': isActive === 'order-logo-active' }"
          ></div>
          <div class="home-text">订单</div>
        </a>
        <a @click="handlerClick('/home/my', 'my-logo-active')">
          <div class="my-logo" :class="{ 'my-logo-active': isActive === 'my-logo-active' }"></div>
          <div class="home-text">我的</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      isActive: 'index-logo-active',
      footerList: [
        { name: 'index', content: '首页' },
        { name: 'order', content: '订单' },
        { name: 'my', content: '我的' }
      ]
    }
  },

  methods: {
    handlerClick (to, active) {
      this.isActive = active
      this.$router.push(to)
    }
  }
}
</script>

<style lang='scss' scoped>
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-top {
    flex: 1;
    overflow-y: auto;
  }

  .home-main {
    height: 49px;
    display: flex;

    a {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    .index-logo {
      width: 30px;
      height: 30px;
      background-image: url("~@/assets/icon/home-index.png");
      background-size: 100%;
    }
    .order-logo {
      width: 30px;
      height: 30px;
      background-image: url("~@/assets/icon/home-order.png");
      background-size: 100%;
    }
    .my-logo {
      width: 30px;
      height: 30px;
      background-image: url("~@/assets/icon/home-my.png");
      background-size: 100%;
    }
    .home-text {
      font-size: 12px;
      color: #999;
    }

    .index-logo-active {
      background-image: url("~@/assets/icon/home-index-active.png");
    }
    .order-logo-active {
      background-image: url("~@/assets/icon/home-order-active.png");
    }
    .my-logo-active {
      background-image: url("~@/assets/icon/home-my-active.png");
    }
  }
}
</style>
