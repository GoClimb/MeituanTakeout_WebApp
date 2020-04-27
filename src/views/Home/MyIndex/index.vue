<template>
  <div class="page-index">
    <div class="index-header">
      <div class="header-left">
        <div class="header-address">水岸花园7栋</div>
      </div>
      <div class="header-right">
        <input disabled readonly placeholder="请输入商家或商品名称" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyIndex'
}
</script>

<style lang='scss' scoped>
.page-index {
  height: 100%;
  display: flex;
  flex-direction: column;

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

    .header-left {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      max-width: 180px;
      transition: 500ms;

      &::before {
        content: '';
        width: 15px;
        height: 15px;
        background: url('~@/assets/icon/index-header-gps.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        margin-right: 5px;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        background: url('~@/assets/icon/index-header-right.png');
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

    .header-right {
      position: relative;
      flex: 1;
      &::after {
        content: "";
        background: url('~@/assets/icon/index-header-search.png');
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
  }
}
</style>
