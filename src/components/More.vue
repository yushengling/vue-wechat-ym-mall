<template>
  <div class="More">查看更多</div>
</template>

<script>
export default {
  name: 'More'
}
</script>

<style lang="stylus" scoped>
.More
  @extends .row-center
  font-size 12px
  color $color-777
  margin-top 20px
  &::after
    display inline-block
    width 13px
    height 13px
    content ''
    background-image url(../assets/images/right.png)
    vertical-align middle
    background-size 100% 100%
    background-repeat no-repeat
</style>
