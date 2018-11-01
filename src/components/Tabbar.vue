<template>
  <div class="Tabbar" v-if="isShow">
    <van-tabbar v-model="active" :fixed="tabbarList.fixed" :z-index="tabbarList.zIndex">
      <van-tabbar-item
        v-for="item of tabbarList"
        :key="item.title"
        :dot="item.dot"
        :info="item.info"
        :to="item.to"
        :replace="item.replace"
      >
        <span class="title" v-text="item.title"></span>
        <img
          class="icon"
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.icon.active : item.icon.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { TABBAR_ACTIVE } from '@/store/mutation-types'
const { mapState, mapMutations } = createNamespacedHelpers('Tabbar')

export default {
  name: 'Tabbar',
  computed: {
    ...mapState([
      'tabbarList'
    ]),
    active: {
      get () {
        return this.tabbarList.findIndex(item => item.to === this.$route.path)
      },
      set (active) {
        this.TABBAR_ACTIVE({
          active
        })
      }
    },
    isShow () {
      return this.tabbarList.some(item => item.to === this.$route.path)
    }
  },
  methods: {
    ...mapMutations([
      TABBAR_ACTIVE
    ])
  }
}
</script>

<style lang="stylus">
.Tabbar
  .icon
    width 24px
    height 24px
  .title
    font-size 11px

.van-tabbar-item--active
  color $color-main
.van-tabbar-item__icon
  margin-bottom 2px
</style>
