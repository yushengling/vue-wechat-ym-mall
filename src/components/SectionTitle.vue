<template>
  <div class="SectionTitle">
    <p class="SectionTitle-title" v-text="title"></p>
    <span class="SectionTitle-desc" v-text="desc" v-if="desc"></span>
    <div class="SectionTitle-time" v-if="time">
      <span class="desc">仅剩</span>&nbsp;
      <van-tag color="#96358C">0</van-tag>&nbsp;
      <van-tag color="#96358C">0</van-tag>&nbsp;时&nbsp;
      <van-tag color="#96358C">0</van-tag>&nbsp;
      <van-tag color="#96358C">0</van-tag>&nbsp;分&nbsp;
      <van-tag color="#96358C">0</van-tag>&nbsp;
      <van-tag color="#96358C">0</van-tag>&nbsp;秒
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    time: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus">
.SectionTitle
  position relative
  @extends .column-center
  &::before, &::after
    position absolute
    display inline-block
    content ''
    width 34px
    height 1px
    background-color #A2A2A2
  &::before
    transform translateX(-70px) scaleY(.5)
  &::after
    transform translateX(70px) scaleY(.5)
  &-title
    font-size 16px
    color $color-black
  &-desc
    font-size 11px
    color $color-black
    margin-top 10px
  &-time
    @extends .row-center
    font-size 11px
    color $color-black
    margin-top 10px
    .desc
      color $color-main
      font-size 12px
.van-tag
  border-radius 0
  padding 2px 3px
  font-size 11px
</style>
