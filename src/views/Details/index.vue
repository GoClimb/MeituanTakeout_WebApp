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
            <Carousel
              height="17px"
              direction="vertical"
              :autoplay="true"
              :loop="true"
              indicator-position="none"
            >
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
      <Tabs v-model="active" animated :duration="0.3" line-width="20">
        <Tab title="点菜">
          <div class="order">
            <!--左侧导航栏start-->
            <nav>
              <div v-for="item in 20" :key="item" class="nav-list">
                <span>
                  <img src alt />
                  热销
                </span>
              </div>
            </nav>
            <!--左侧导航栏end-->

            <!--右侧内容区start-->
            <div class="order-right">
              <div class="order-right-fixed">热销</div>
              <div class="order-right-content">
                <div class="order-right-content-list" v-for="item in 5" :key="item">
                  <dl>
                    <dt>热销</dt>
                    <dd v-for="item in 5" :key="item">
                      <div class="logo">
                        <img
                          src="https://p1.meituan.net/xianfu/11daa06ba3895630b988fb3f02d9042a200485.jpg@225w_225h_80Q_0e_1l.webp"
                          alt
                        />
                      </div>
                      <div class="content">
                        <div class="content-header">麦辣鸡腿</div>
                        <div class="content-text">麦辣椒1麦辣椒1麦辣椒1麦辣椒1麦辣椒1麦辣椒1麦辣椒1</div>
                        <div class="content-sales">
                          <span>月售300</span>
                          <span>赞20</span>
                        </div>
                        <div class="content-piece">
                          <div>¥ 5</div>
                          <div>22.5</div>
                          <button></button>
                        </div>
                        <div class="discount">
                          <div>
                          <span>2.22折 限1份</span>
                          </div>
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <!--右侧内容区end-->
          </div>
        </Tab>

        <Tab title="评价">
          <div>评价</div>
          <div>评价</div>
          <div>评价</div>
          <div>评价</div>
        </Tab>
        <Tab title="商家">
          <div>商家</div>
        </Tab>
      </Tabs>
    </div>
    <!--详情页主体内容 end-->
    <div class="details-bottom">

      <div class="details-bottom-logo">
        <div v-if='false'>1</div>
      </div>

      <div class="details-bottom-content">

        <div class="details-bottom-content-confirm" v-if="false">
          <div>
            <span>¥ 5</span>
            <span>¥22.5</span>
          </div>
          <span>另需配送费¥9</span>
        </div>

        <span v-else>另需配送费¥9</span>

      </div>

      <div class="details-bottom-right">¥0起送</div>
    </div>
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

  methods: {}
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
          content: " ";
          width: 5px;
          height: 9px;
          right: 10px;
          top: 3px;
          background-image: url("~@/assets/icon/youjiantou.png");
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
      background: #f5f5f5;
      font-size: 13.5px;
      font-weight: normal;
      div {
        min-width: 80px;
        min-height: 49px;
        padding: 18px;
        box-sizing: border-box;
      }
      .active {
        background: white;
      }
    }
    .order-right {
      flex: 1;
      height: 100%;
      overflow: hidden;
      position: relative;
      .order-right-fixed {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
        box-sizing: border-box;
        font-size: 13px;
        position: absolute;
        top: 0;
        color: #333333;
        background: white;
        z-index: 1;
      }
      .order-right-content {
        height: 688px;
        overflow: scroll;
        .order-right-content-list {
          dl {
            dt {
              width: 100%;
              height: 36px;
              line-height: 36px;
              padding-left: 10px;
              box-sizing: border-box;
              font-size: 13px;
            }
            dd {
              display: flex;
              margin-top: 10px;
              .logo {
                width: 75px;
                img {
                  width: 100%;
                }
              }
              .content {
                width: 220px;
                .content-header {
                  color: #333333;
                  font-weight: bold;
                  line-height: 22.5px;
                }
                .content-text {
                  color: #666666;
                  font-size: 11px;
                  line-height: 15px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  word-break: break-all;
                }
                .content-sales {
                  span {
                    color: #666;
                    font-size: 11px;
                    line-height: 15px;
                    margin-right: 8px;
                  }
                }
                .content-piece {
                  width: 100%;
                  // line-height: 26px;
                  // display: flex;
                  position: relative;
                  > div:nth-child(1) {
                    display: inline-block;
                    color: #fb4e44;
                    font-size: 18px;
                    height: 21.5px;
                    line-height: 21.5px;
                    vertical-align: middle;
                  }
                  > div:nth-child(2) {
                    display: inline-block;
                    color: #a9a9a9;
                    font-size: 11px;
                    text-decoration: line-through;
                    margin-left: 4px;
                  }
                  button {
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    background-image: url("~@/assets/icon/add.png");
                    background-size: 100%;
                    background-repeat: no-repeat;
                    border: none;
                    border-radius: 50%;
                    position: absolute;
                    right: 0;
                  }
                }

                .discount {
                  div {
                    width: 80px; height: 15px;
                    position: relative;
                    font-size: 11px;
                    text-align: center;
                    line-height: 15px;
                    color: #fb4e44;
                     &::before {
                      content: '';
                      position: absolute;
                      top: -50%;
                      bottom: -50%;
                      left: -50%;
                      right: -50%;
                      -webkit-transform: scale(0.5);
                      transform: scale(0.5);
                      border-style: solid;
                      border-width: 1px;
                      border-color: #fb4e44;
                      border-radius: 0;
                  }
                 }
                }
              }
            }
          }
        }
      }
    }
  }
  .details-bottom {
    width: 100%; height: 50px;
    position: fixed;
    bottom: 0; left: 0;
    background: #3b3b3c;
    z-index: 2;
    display: flex;
    align-items: center;
    .details-bottom-logo {
      width: 50px; height: 50px;
      position: relative;
      top: -10px;
      border-radius: 50%;
      background: url('~@/assets/icon/details-bottom.png') no-repeat;
      background-size: contain;
      margin: 0 10px;
    }
    .details-bottom-logo-active {
      width: 50px; height: 50px;
      position: relative;
      top: -10px;
      border-radius: 50%;
      background: url('~@/assets/icon/details-bottom-active.png') no-repeat;
      background-size: contain;
      margin: 0 10px;
    }
    .details-bottom-content {
      flex: 1 1 auto;
      span {
        font-size: 14px;
        color: #999;
      }
    }
    .details-bottom-right {
      padding: 0 18px;
      line-height: 50px;
      font-size: 16px;
      font-weight: bold;
      color: #999;
    }
  }
}
</style>
