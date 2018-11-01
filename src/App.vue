<template>
  <div id="app">
    <transition
      mode="out-in"
      :duration="500"
      enter-active-class="animated fadeIn"
    >
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <transition
      mode="out-in"
      :duration="1000"
      enter-active-class="animated fadeIn"
    >
      <Tabbar />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: '云梦商城',
    titleTemplate: '%s | My Awesome Webapp'
  },
  components: {
    Tabbar: () => import('@/components/Tabbar')
  }
}
</script>

<style lang="stylus">
@import "./assets/styles/reset"
@import "./assets/styles/utils"
</style>
