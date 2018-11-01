<template>
  <div class="GoodsItem">
    <img class="GoodsItem-pic" :src="pic" :alt="title" />
    <p class="GoodsItem-title" v-text="title"></p>
    <div class="GoodsItem-info">
      <span class="price">￥{{ price }}</span>
      <span class="sales">已售: {{ sales }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    pic: String,
    title: String,
    price: {
      type: Number,
      default: 0
    },
    sales: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/styles/utils"

.GoodsItem
  flex 1
  &-pic
    background-color $color-c6
  &-title
    @extends .mt10
    font-size 12px
    color #010101
    text-ellipsis()
  &-info
    @extends .row-center
    @extends .mt12
    .price
      font-size 11px
      color $color-secondary
      margin-right 10px
    .sales
      font-size 11px
      color $color-777
</style>
