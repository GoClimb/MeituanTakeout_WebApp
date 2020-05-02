<template>
  <div class="page-foodlist">
    <ul>
      <li v-for='item in info' :key='item.shopName' @click='toDetails'>
        <div class="foodlist-logo">
          <img
            :src="item.picUrl"
            alt
          />
        </div>

        <div class="foodlist-text">
          <div class="foodName">{{ item.shopName }}</div>
          <div class="foodSouce">
            <div class="foodSouce-left">
              <div class="start">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span class="span1">{{ item.wmPoiScore | filtersSorce }}</span>
              <span>{{ item.monthSalesTip }}</span>
            </div>
            <div class="foodSouce-right">
              <span>{{ item.deliveryTimeTip }}</span>
              <span>{{ item.distance }}</span>
            </div>
          </div>
          <div class="foodDistance">
            <span>{{ item.minPriceTip }}</span>
            <span>{{ item.shippingFeeTip }}</span>
            <span>{{ item.averagePriceTip }}</span>
          </div>
          <div class="foodDiscount">
            <p v-for='item in item.discounts2' :key='item.activityId'>
              <img
                :src="item.iconUrl"
                alt
              />
              <span>{{ item.info }}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FoodList',

  props: {
    info: {
      type: Array,
      default () {
        return []
      }
    }
  },

  filters: {
    filtersSorce (value) {
      var index1 = value.toString().charAt(0)
      var index2 = value.toString().charAt(1)
      if (value === 0) {
        return value
      } else {
        return index1 + '.' + index2
      }
    }
  },

  methods: {
    toDetails () {
      this.$router.push('/details')
    }
  }

}
</script>

<style lang='scss' scoped>
.page-foodlist {
  li {
    display: flex;
    padding: 10px 12px 10px 10px;
    box-sizing: border-box;
    .foodlist-logo {
      width: 76px;
      height: 57px;
      margin-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .foodlist-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: #333;
      font-size: 11px;

      .foodName {
        font-size: 16px;
        font-weight: 600;
      }

      .foodSouce {
        display: flex;
        justify-content: space-between;
        margin:4px 0;

        .foodSouce-left {
          display: flex;
          align-items: center;
          .start {
            width: 50px;
            i {
              width: 10px; height: 10px;
              float: left;
              background: url('~@/assets/icon/start.png') no-repeat;
              background-size: 100%;
              background-position: 40% 5.66%;
            }
          }
          .span1 {
            margin: 0 15px 0 5px;
          }
        }

        .foodSouce-right {
          &>span:nth-child(2) {
            &::before {
              content: "";
              display: inline-block;
              margin: 0 3px;
              height: 6px;
              width: 1px;
              background: #ccc;
            }
          }
        }
      }

      .foodDistance {
        display: flex;
        justify-content: flex-start;
        margin: 0 0 8px 0;
        &>span:nth-child(2), &>span:nth-child(3){
           &::before {
            content: "";
            display: inline-block;
            margin: 0 3px;
            height: 6px;
            width: 1px;
            background: #ccc;
          }
          margin-left: 2px;
        }
      }

      .foodDiscount {
        max-height: 40px;
        overflow: hidden;
        p {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          img {
            width: 15px; height: 15px;
            margin-right: 5px
          }
        }
      }

    }
  }
}
</style>
