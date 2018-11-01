<template>
  <div class="Search" @click="onClick">
    <form action="/">
      <van-search
        placeholder="搜索全部商品"
        v-model="value"
        :background="background"
        :show-action="showAction"
        :disabled="disabled"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    background: {
      type: String,
      default: 'f2f2f2'
    },
    showAction: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {

    },
    onCancel () {

    },
    onClick () {
      this.disabled && this.$router.push({ name: 'Search' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.Search
  & /deep/ .van-search
    background-color $color-white !important
  & /deep/ .van-cell
    background-color $color-e5 !important
  & /deep/ .van-search__action
    color $color-777
</style>
