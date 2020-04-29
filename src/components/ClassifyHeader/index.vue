<template>
 <div class="page-classify-header">
    <div class="header-search">
      <input type="text" readonly disabled placeholder="请输入商家或商品名字">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassifyHeader'
}
</script>

<style lang='scss' scoped>
.page-classify-header {
  height: 40px;
  background: #fafafa;
  padding: 10px;
  box-sizing: border-box;

  .header-search {
    position: relative;
     &::before {
      content: '';
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
  }

  input {
    font-size: 14px;
    height: 30px;
    background: #e4e4e4;
    border: none;
    border-radius: 100px;
    width: 100%;
    padding-left: 30px;
    box-sizing: border-box;
    opacity: 1;
  }
}
</style>
