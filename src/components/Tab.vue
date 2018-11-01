<template>
  <div class="Tab van-hairline--bottom">
    <ul class="Tab-content">
      <li
        class="Tab-content-item"
        :class="tabList.active === index && 'active'"
        v-for="(item, index) of tabList.list"
        :key="item"
        v-text="item"
        @click="$emit('change-active', index)"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabList: Object
  }
}
</script>

<style lang="stylus" scoped>
.Tab
  @extends .row-center
  height 38px
  line-height 38px
  background-color $color-white
  &-content
    @extends .row-center
    height inherit
    &-item
      padding 0 10px
      color $color-34
      font-size 13px
      height inherit
      &.active
        color $color-main
        border-bottom 1px solid $color-main
</style>
