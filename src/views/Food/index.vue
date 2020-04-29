<template>
  <div class="page-food">
    <ClassifyHeader></ClassifyHeader>

    <div class="classify-list">
      <nav>
      <ul>
        <li v-for='item in 10' :key='item'>美食</li>
      </ul>
      </nav>
      <div class="classify-list-right"><i class="iconfont icon-xiajiantou "></i></div>
      <TreeSelect :items='items'></TreeSelect>
    </div>

  </div>
</template>

<script>
import ClassifyHeader from '@/components/ClassifyHeader'
import { TreeSelect } from 'vant'
export default {
  name: 'Food',
  components: {
    ClassifyHeader,
    TreeSelect
  },
  data () {
    return {
      items: [
        {
          text: '1',
          children: [
            {
              text: '1',
              id: 1
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.page-food {
  height: 100%;

  .classify-list {
    overflow-y: auto;
    position: relative;
    nav {
      height: 40px;
      overflow: hidden;
    }
    ul{
      width: 90%;
      padding-bottom: 20px;
      box-sizing: border-box;
      white-space: nowrap;
      overflow-x: auto;

      li {
        line-height: 40px;
        margin: 0 10px;
        display: inline-block;
        color: #666666;
        font-size: 15px;
        position: relative;
      }
      .active {
        color: #FFB000;
        font-weight: 600;
        &::before {
          content: '';
          width: 20px; height: 2px;
          left:14%; bottom: 0;
          background-color: #FFB000;
          position: absolute
        }
      }
    }

    .classify-list-right {
      position: absolute;
      right: 0;
      top: 0;
      width: 13%;
      height: 40px;
      background-image: linear-gradient(-270deg, rgba(255, 255, 255, 0) 0%, rgba(250, 250, 250, 0.8) 10%, #FAFAFA 38%);
      .icon-xiajiantou {
        position: absolute;
        top: 28%;
        right: 30%;
      }
      .icon-xiajiantou-active {
        transform: rotate(180deg)
      }
    }
  }
}
</style>
