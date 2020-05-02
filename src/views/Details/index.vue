<template>
  <div class="page-details">
    <!--详情页返回功能头部start-->
    <div class="details-back">
      <i class="iconfont icon-iconfontjiantou1"></i>
    </div>
    <!--详情页返回功能头部end-->

    <!--详情页logo头部start-->
    <div class="details-header">
      <div class="details-header-content">
        <div class="header-logo"></div>
        <div class="header-content">
          <div class="header-content-top">
            <span>30分支</span>
            <span>2.0km</span>
          </div>

          <div class="header-content-mid">公告：Jy真帅～～</div>

          <div class="header-content-bottom">
            <Carousel height="17px" direction="vertical" :autoplay="true" :loop='true' indicator-position='none'>
              <CarouselItem v-for="item in 2" :key="item">
                <i
                  style="background-image: url('https://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png')"
                ></i>
                <span>满30减3</span>
                <!-- <h3 class="medium">{{ item }}</h3> -->
              </CarouselItem>
            </Carousel>
          </div>

        </div>
      </div>
    </div>
    <!--详情页logo头部end-->

    <!--详情页主体内容 start-->
    <div class="details-main">
      <Tabs v-model="active" animated :duration='0.3' line-width='20'>

        <Tab title="点菜">
          <div class="order">
            <nav>
              <div v-for='item in 20' :key='item' class="nav-list">
                <span>
                  <img src="" alt="">
                  热销
                </span>
              </div>
            </nav>
            <div class="order-right">
              <div>热销</div>
              <div>
                <div>
                  <dl>
                    <dt>热销</dt>
                    <dd>
                      <div><img src="https://p1.meituan.net/xianfu/11daa06ba3895630b988fb3f02d9042a200485.jpg@225w_225h_80Q_0e_1l.webp" alt=""></div>
                      <div>sss</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab title="评价">
          <div>评价</div>
        </Tab>
        <Tab title="商家">
          <div>商家</div>
        </Tab>
      </Tabs>
    </div>
    <!--详情页主体内容 end-->
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import { Carousel, CarouselItem } from 'element-ui'
import { Tab, Tabs } from 'vant'

import '@/assets/style/reset.scss'

export default {
  name: 'Details',
  components: {
    Carousel,
    CarouselItem,
    Tab,
    Tabs
  },

  data () {
    return {
      active: 0,
      tabName: ['点菜', '评价', '商家']
    }
  },

  methods: {
  }
}
</script>

<style lang='scss' scoped>
.page-details {
  height: 100%;

  .details-back {
    width: 100%;
    height: 50px;
    background: rgb(46, 47, 59);
    i {
      display: block;
      width: 40px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 15px;
      font-weight: 700;
      color: rgb(201, 198, 198);
    }
  }

  .details-header {
    padding-bottom: 10px;
    box-sizing: border-box;
  }

  .details-header-content {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 5px 0 0 10px;
    box-sizing: border-box;
    background: rgb(46, 47, 59);

    .header-logo {
      width: 85px;
      height: 64px;
      background-image: url("https://p0.meituan.net/xianfu/b9f9daecbae15c3ce1975e1a5770eba436467.jpg");
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .header-content {
      color: rgb(236, 233, 233);
      font-size: 12px;
      flex: 1;
      margin-left: 10px;
      padding-top: 5px;
      box-sizing: border-box;
      .header-content-top {
        > span:nth-child(1) {
          position: relative;
          margin-right: 8px;
          &::after {
            content: " ";
            display: inline-block;
            position: absolute;
            width: 1px;
            height: 12px;
            background-color: #fff;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            right: -4px;
            top: 3px;
          }
        }
      }
      .header-content-mid {
        margin: 8px 0;
      }
      .header-content-bottom {
        position: relative;
        &::after {
          position: absolute;
          content: ' ';
          width: 5px;
          height: 9px;
          right: 10px;
          top: 3px;
          background-image: url('~@/assets/icon/youjiantou.png');
          background-size: 5px 9px;
          background-repeat: no-repeat;
        }
        .el-carousel {
          width: 270px;
        }
        .el-carousel__item {
          height: 15px;
          display: flex;
          align-items: center;
        i {
          display: inline-block;
          width: 15px;
          height: 15px;
          background-size: 100%;
          margin-right: 5px;
        }
      }
      }
    }
  }
  .order {
    height: 100%;
    display: flex;
    overflow: hidden;
    nav {
      width: 80px;
      height: 600px;
      overflow-y: auto;
      div {
        min-width: 80px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
    div {
      flex: 1;
    }
  }
}

</style>
