<template>
  <div class="page-index" ref='pageIndex'>

    <!-- 头部搜索栏开始  -->
    <div class="index-header">
      <div class="header-left" ref='header'>
        <div class="header-address">水岸花园7栋</div>
      </div>
      <div class="header-right">
        <input disabled readonly placeholder="请输入商家或商品名称" />
      </div>
    </div>
    <!--  头部搜索栏结束  -->

    <!--  主页商品分类start  -->
    <div class="classify">
      <a href='javascript:;' v-for="item in classifyList" :key="item.cateId" @click='toClass(item)'>
        <div class="classify-logo">
          <img :src="item.icon" alt />
        </div>
        <div class="classify-name">{{ item.name }}</div>
      </a>
    </div>
    <!--  主页商品分类end  -->

    <div class="nearby" ref='near'>附近商家</div>

    <!-- 筛选菜单栏start -->
    <Screen :sortInfo="sortList" :screenInfo="screenList" ref='screen' @handlerClick='handlerClick'></Screen>
    <!-- 筛选菜单栏end -->

    <FoodList :info="computed_getFoodList" ref='foodlist'></FoodList>
  </div>
</template>

<script>
// import IndexHeader from '@/components/IndexHeader'
import Screen from '@/components/Screen'
import FoodList from '@/components/FoodList'
import { classify, screen1, screen2, foodList } from '@/api/index'

export default {
  name: 'MyIndex',

  data () {
    return {
      classifyList: [],
      sortList: [],
      screenList: {},
      foodList: []
    }
  },

  components: {
    Screen,
    FoodList
  },

  methods: {
    classify () {
      classify().then(res => {
        this.classifyList = res
      })
    },
    screen1 () {
      screen1().then(res => {
        this.sortList = res
      })
    },
    screen2 () {
      screen2().then(res => {
        this.screenList = res
      })
    },
    getFoodList (keyword) {
      foodList(keyword).then(res => {
        this.foodList = res
      })
    },
    handlerClick (payload) {
      this.screen.style.position = 'fixed'
      this.screen.style.top = 50 + 'px'
      this.pageIndex.scrollTop = 200
      this.getFoodList(payload)
    },
    toClass (item) {
      this.$router.push({
        path: '/food',
        query: {
          title: item.name,
          isShow: item.isShow
        }
      })
    }
  },

  computed: {
    computed_getFoodList () {
      return this.foodList.map(item => {
        return {
          shopName: item.shopName,
          wmPoiScore: item.wmPoiScore,
          monthSalesTip: item.monthSalesTip,
          deliveryTimeTip: item.deliveryTimeTip,
          distance: item.distance,
          minPriceTip: item.minPriceTip,
          shippingFeeTip: item.shippingFeeTip,
          averagePriceTip: item.averagePriceTip,
          discounts2: item.discounts2,
          picUrl: item.picUrl
        }
      })
    }
  },

  created () {
    this.classify()
    this.screen1()
    this.screen2()
    this.getFoodList()
  },

  mounted () {
    this.pageIndex = this.$refs.pageIndex
    this.header = this.$refs.header
    this.screen = this.$refs.screen.$refs['page-screen-box']
    this.foodlist = this.$refs.foodlist.$el

    console.log(this.$refs)
    this.pageIndex.addEventListener('scroll', () => {
      if (this.pageIndex.scrollTop >= 166) {
        this.header.style.maxWidth = 0
      } else {
        this.header.style.maxWidth = 180 + 'px'
      }

      if (this.pageIndex.scrollTop >= 200) {
        this.screen.style.position = 'fixed'
        this.screen.style.top = 50 + 'px'
        this.foodlist.style.marginTop = 40 + 'px'
      } else {
        this.screen.style.position = ''
        this.screen.style.top = 0
        this.foodlist.style.marginTop = 0
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.page-index {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  box-sizing: border-box;
  overflow-y: auto;

  .index-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: black;
    display: flex;
    align-items: center;
    padding: 0 6px;
    box-sizing: border-box;
    z-index: 10;

    .header-left {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      max-width: 180px;
      transition: 500ms;

      &::before {
        content: "";
        width: 15px;
        height: 15px;
        background: url("~@/assets/icon/index-header-gps.png");
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        margin-right: 5px;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
      &::after {
        content: "";
        width: 10px;
        height: 10px;
        background: url("~@/assets/icon/index-header-right.png");
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        margin-left: 2px;
        margin-right: 20px;
      }
      .header-address {
        max-width: 140px;
        overflow: hidden;
        white-space: nowrap;
        // text-overflow: ellipsis;
      }
    }
  }
  .header-right {
    position: relative;
    width: 100px;
    flex: 1;
    &::after {
      content: "";
      background: url("~@/assets/icon/index-header-search.png");
      background-repeat: no-repeat;
      background-size: contain;
      width: 15px;
      height: 15px;
      margin: 0 5px 0 10px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    // position: relative;
    // background: #fff;
    // border-radius: 100px;
    input {
      width: 100%;
      position: relative;
      border: none;
      height: 30px;
      padding-left: 30px;
      box-sizing: border-box;
      border-radius: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 30px;
      font-size: 14px;
      opacity: 1;
    }
  }

  .classify {
    height: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5px;
    a {
      width: 20%;
      height: 80px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      font-size: 11px;
      color: #333;
    }

    .classify-logo {
      width: 44px;
      height: 44px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .nearby {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 800;
    &::before {
      content: "";
      height: 1px;
      width: 60px;
      background: #666;
      margin-right: 3px;
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      display: inline-block;
    }
    &::after {
      content: "";
      height: 1px;
      width: 60px;
      background: #666;
      margin-left: 3px;
      -webkit-transform-origin: 0 50%;
      transform-origin: 0 50%;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      display: inline-block;
    }
  }
}
</style>
