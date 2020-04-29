<template>
  <div class="page-screen">
    <div class="page-screen-box" ref='page-screen-box'>

      <div class="Screen-main">
        <div
          class="screen-list"
          :class="{ 'screen-active': sortMain === isShow }"
          @click="fn1(sortMain)"
        >
          综合排序
          <i
            class="iconfont icon-xiajiantou"
            :class="{ 'icon-xiajiantou-active': sortMain === isShow }"
          ></i>
        </div>

        <div class="screen-list" :class="{'active': active === 'sales'}" @click='handlerClick("sales")'>销量最高</div>
        <div class="screen-list" :class="{'active': active === 'distance'}" @click='handlerClick("distance")'>距离最近</div>

        <div
          class="screen-list"
          :class="{'screen-active': screenMain === isShow}"
          @click="fn1(screenMain)"
        >
          筛选
          <i class="screen-right"></i>
        </div>
      </div>

      <div class="sort-main" v-show="sortMain === isShow">
        <ul>
          <li v-for="item in sortInfo" :key="item.sortId">{{item.name}}</li>
        </ul>
      </div>

      <div class="screen-main-box">
      <div class="screen-main" ref="screen-main" v-show="screenMain === isShow">
        <div class="better-scroll">
          <div class="meituanZS">
            <ul>
              <li>
                <i class="screen-main-logo"></i>
                美团专送
              </li>
            </ul>
          </div>

          <div class="shangjiaTS">
            <p>商家特色</p>
            <ul>
              <li v-for="item in screenInfo.Businessfeatures" :key="item.filterId">{{ item.name }}</li>
            </ul>
          </div>

          <div class="renjunJ">
            <p>人均价</p>
            <ul>
              <li>20元以下</li>
              <li>20-40元</li>
              <li>40元以上</li>
            </ul>
          </div>

          <div class="youhuiHT">
            <p>优惠活动</p>
            <ul>
              <li v-for="item in screenInfo.Discount" :key="item.filterId">
                <img :src="item.icon" alt />
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="button">
          <span>清楚筛选</span>
          <span class="finish">完成</span>
        </div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
// import { Overlay } from 'vant'
import BScroll from 'better-scroll'
export default {
  name: 'Screen',

  components: {
    // Overlay
  },

  data () {
    return {
      screenList: ['综合排序', '销量最高', '距离最近', '筛选'],
      sortMain: 1,
      screenMain: 2,
      active: '',
      isShow: -1
    }
  },

  methods: {
    fn1 (index) {
      this.$emit('handlerClick')
      if (this.isShow !== index) {
        this.isShow = index
      } else {
        this.isShow = -1
      }
    },
    handlerClick (payload) {
      this.$emit('handlerClick', payload)
      this.active = payload
    }
  },

  props: {
    sortInfo: {
      type: Array,
      default () {
        return []
      }
    },
    screenInfo: {
      type: Object
    }
  },

  mounted () {
    // console.log(this.$refs['screen-main'])
    this.scroll = new BScroll(this.$refs['screen-main'], {
      click: true
    })
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/mixin.scss";
.page-screen {
  position: relative;

  .page-screen-box {
    width: 100%;
    background: white;
  }
}
.Screen-main {
  display: flex;
  @include border-top;

  .screen-list {
    width: 25%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #666;
    position: relative;

    .icon-xiajiantou-active {
      transform: rotateZ(180deg);
    }

    .screen-right {
      width: 15px;
      height: 15px;
      background: url("~@/assets/icon/index-screen-right.png") no-repeat;
      background-size: 100%;
    }
  }
  .screen-active {
    &::after {
      content: " ";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-top: 1px solid #e4e4e4;
      border-left: 1px solid #e4e4e4;
      position: absolute;
      left: 45%;
      bottom: -8%;
      z-index: 5;
      background-color: #fff;
      transform: translateX(-50%) rotateZ(45deg);
    }
  }

  .div-active {
    &::after {
      content: " ";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-top: 1px solid #e4e4e4;
      border-left: 1px solid #e4e4e4;
      position: absolute;
      left: 45%;
      bottom: -8%;
      z-index: 5;
      background-color: #fff;
      transform: translateX(-50%) rotateZ(45deg);
    }
  }
}
.sort-main {
  position: absolute;
  background: white;
  width: 100%;
  li {
    @include border-bottom;
    height: 42px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
    padding-left: 15px;
  }
}
.screen-main-box {
  width: 100%;
  position: absolute;
  background: white;
}

.screen-main {
  height: 300px;
  overflow: hidden;
  font-size: 12px;
  position: relative;

  .meituanZS {
    // @include border-bottom;
    display: flex;
    align-items: center;
    padding: 15px 0 15px 15px;
    box-sizing: border-box;

    ul {
      width: 29%;
      line-height: 30px;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        display: flex;
        align-items: center;

        .screen-main-logo {
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 2px;
          background-image: url("~@/assets/icon/screen-logo.png");
          background-size: cover;
        }
      }
    }
  }

  .shangjiaTS {
    @include border-top;
    padding: 15px 0 15px 15px;

    p {
      margin-bottom: 10px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29%;
        height: 30px;
        margin-bottom: 10px;
        margin-right: 3%;
        border: 1px solid #ccc;
        color: #333;
      }
    }
  }

  .renjunJ {
    @include border-top;
    padding: 15px 0 15px 15px;

    p {
      margin-bottom: 10px;
    }

    ul {
      display: flex;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29%;
        height: 30px;
        margin-right: 3%;
        border: 1px solid #ccc;
        color: #333;
      }
    }
  }

  .youhuiHT {
    @include border-top;
    padding: 15px 0 5px 15px;
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        align-items: center;
        width: 50%;
        height: 30px;
        line-height: 30px;

        img {
          width: 15px;
          height: 15px;
          margin-right: 5px;
        }
      }
    }
  }

  .button {
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 15px;

    span {
      display: inline-block;
      width: 50%;
      line-height: 50px;
      text-align: center;
      background: #fff;
    }
    .finish {
      background: #ffd161;
    }
  }
}
.active {
  color: #333333 !important;
  font-weight: 600;
}
</style>
