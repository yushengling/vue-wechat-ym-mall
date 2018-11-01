<template>
  <div class="Classify">
    <Search disabled />
    <Tab :tab-list="tabList" @change-active="changeActive" />
    <!-- 类别 -->
    <div class="Classify-content" v-if="tabList.active === 0">
      <ul class="Classify-content-left">
        <li class="title">111</li>
      </ul>
      <div class="Classify-content-right">
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
         <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
      </div>
    </div>

    <!-- 品牌 -->
    <div class="Classify-brand" v-else>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  metaInfo: {
    title: '分类',
    titleTemplate: null
  },
  components: {
    Search: () => import('@/components/Search'),
    Tab: () => import('@/components/Tab')
  },
  data () {
    return {
      tabList: {
        list: ['分类', '品牌'],
        active: 0
      }
    }
  },
  created () {

  },
  methods: {
    changeActive (i) {
      this.tabList.active = i
    }
  }
}
</script>

<style lang="stylus">
.Classify
  &-content
    height 100%
    &-left
      position fixed
      top 82px
      right 0
      left 0
      bottom 0
      width 90px
      background-color #EFEFEF
    &-right
      overflow-y scroll
      position fixed
      top 82px
      right 0
      left 90px
      bottom 0
      background-color $color-white
      padding-bottom 50px
</style>
