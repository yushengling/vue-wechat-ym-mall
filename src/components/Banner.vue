<template>
  <div class="Banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item of data" :key="item.BannerID">
        <img v-lazy="item.BannerPic" @click="navigateTo(item)" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    navigateTo (item) {
      if (this.link) {
        window.location.href = item.BannerURL
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.Banner
  & /deep/ .van-swipe
    height 194px
  & /deep/ .van-swipe__indicator
    background-color $color-93
    &--active
      background-color $color-white
</style>
