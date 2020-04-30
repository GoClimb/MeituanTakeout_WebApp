<template>
  <div class="page-food" ref='refPageFood'>
    <ClassifyHeader></ClassifyHeader>

    <div class="classify-list" v-if="classifyListIsShow" ref='refClassifyList'>

      <nav>
        <ul>
          <li v-for="item in classifyName" :key="item" :class="{ active: classifyNameIsShow === item }" @click='classifyClick(item)'>{{ item }}</li>
        </ul>
      </nav>
      <div class="classify-list-right" @click="TreeSelectIsShow = !TreeSelectIsShow">
        <i class="iconfont icon-xiajiantou" :class="{'icon-xiajiantou-active': TreeSelectIsShow }"></i>
      </div>

      <TreeSelect
        :height="450"
        :items="classifyList"
        :main-active-index.sync="activeIndex"
        :active-id.sync="activeId"
        v-show="TreeSelectIsShow"
      ></TreeSelect>
    </div>
    <Screen :sortInfo='sortList' :screenInfo='screenList' @handlerClick='handlerClick' ref='refScreen' class="aa"></Screen>
    <FoodList :info='foodList' ref='refFoodList'></FoodList>
  </div>
</template>

<script>
import ClassifyHeader from '@/components/ClassifyHeader'
import FoodList from '@/components/FoodList'
import Screen from '@/components/Screen'
import { TreeSelect } from 'vant'

import { classify, sort, screen, foodList } from '@/api/food'
export default {
  name: 'Food',
  components: {
    ClassifyHeader,
    TreeSelect,
    Screen,
    FoodList
  },
  data () {
    return {
      classifyListIsShow: JSON.parse(this.$route.query.isShow),
      activeIndex: 0,
      activeId: 1,
      classify: [],
      TreeSelectIsShow: false,
      classifyNameIsShow: this.$route.query.title,
      sortList: [],
      screenList: {},
      foodList: []
    }
  },

  methods: {
    getClassify () {
      classify().then(res => {
        this.classify = res
      })
    },
    getSort () {
      sort().then(res => {
        this.sortList = res
      })
      screen().then(res => {
        this.screenList = res
      })
    },
    getfoodList (keyword) {
      foodList(keyword).then(res => {
        this.foodList = res
      })
    },
    classifyClick (name) {
      this.classifyNameIsShow = name
      console.log(name)
      this.getfoodList(name)
    },
    handlerClick (payload) {
      this.getfoodList(payload)
    }
  },

  computed: {
    classifyName () {
      const tmp = []
      for (var i = 0; i < this.classify.length; i++) {
        if (this.classify[i].name === this.$route.query.title) {
          tmp.push(this.classify[i].name)
        }
      }
      const index = this.classify.findIndex(item => {
        return item.name === tmp[0]
      })

      if (index > -1) {
        this.classify[index].list.forEach(item => {
          if (item.id > 1) {
            tmp.push(item.text)
          }
        })
      }
      return tmp
    },

    classifyList () {
      return this.classify.map(item => {
        return {
          text: item.name,
          className: 'my-class',
          children: item.list
        }
      })
    }
  },

  created () {
    this.getClassify()
    this.getSort()
    this.getfoodList(this.$route.query.title)
  },

  mounted () {
    var refPageFood = this.$refs.refPageFood
    var refFoodList = this.$refs.refFoodList.$el
    var refClassifyList = this.$refs.refClassifyList
    // var refScreen = this.$refs.refScreen.$el
    // var refHeader = this.$refs.refHeader.$el
    refPageFood.addEventListener('scroll', () => {
      if (refPageFood.scrollTop >= 40) {
        if (refClassifyList) {
          $('.classify-list').addClass('refClassify')
          $('.aa').addClass('refScreen1')
          refFoodList.style.marginTop = 80 + 'px'
        } else {
          $('.aa').addClass('refScreen2')
          refFoodList.style.marginTop = 40 + 'px'
        }

        // refClassifyList.style.position = 'fixed'
        // refClassifyList.style.top = 0
        // refClassifyList.style.background = 'white'
        // refClassifyList.style.width = 100 + '%'
        // refScreen.style.position = 'fixed'
        // refScreen.style.top = 40
        // refScreen.style.background = 'white'
        // refScreen.style.width = 100 + '%'
      } else {
        // refClassifyList.setAttribute('class', 'refClassifyList')
        // refScreen.setAttribute('class', 'refScreen')
        // refClassifyList.style.position = 'relative'
        // refClassifyList.style.top = 0
        // refClassifyList.style.background = 'white'
        // refClassifyList.style.width = 100 + '%'
        if (refClassifyList) {
          $('.classify-list').removeClass('refClassify')
          $('.aa').removeClass('refScreen1')
          refFoodList.style.marginTop = 0
        } else {
          $('.classify-list').removeClass('refClassify')
          $('.aa').removeClass('refScreen2')
          refFoodList.style.marginTop = 0
        }
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.page-food {
  height: 100%;
  overflow-y: auto;

  .fixed-box {
    position: relative;
    height: 40px;
  }

  .classify-list {
    overflow-y: auto;
    position: relative;
    nav {
      height: 40px;
      overflow-y: hidden;
    }
    ul {
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
        text-align: center;
      }
      .active {
        color: #ffb000;
        font-weight: 600;
        &::before {
          content: "";
          width: 20px;
          height: 2px;
          right: 50%;
          margin-right: -10px;
          bottom: 0;
          background-color: #ffb000;
          position: absolute;
        }
      }
    }

    .classify-list-right {
      position: absolute;
      right: 0;
      top: 0;
      width: 13%;
      height: 40px;
      background-image: linear-gradient(
        -270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(250, 250, 250, 0.8) 10%,
        #fafafa 38%
      );
      .icon-xiajiantou {
        position: absolute;
        top: 28%;
        right: 30%;
      }
      .icon-xiajiantou-active {
        transform: rotate(180deg);
      }
    }
  }
  .refClassify {
    position: fixed;
    top: 0;
    background: white;
    width: 100%;
  }
  .refScreen1 {
    position: fixed;
    background: white;
    top: 40;
    width: 100%
  }
   .refScreen2 {
    position: fixed;
    background: white;
    width: 100%;
    top: 0;
  }
  .van-tree-select {
    position: fixed;
    background: white;
    width: 100%;
    z-index: 1;
  }
  .van-tree-select__nav {
    .van-sidebar-item--select {
      color: #ffb000;
    }
    .van-sidebar-item--select::before {
      background-color: white;
    }
  }

  .van-tree-select__content {
    .van-tree-select__item {
      font-weight: normal;
    }
    .van-tree-select__item--active {
      color: #ffb000;
      .van-icon {
        display: none;
      }
    }
  }
}
</style>
