<template>
  <div class="Home">
    <Search disabled />
    <Banner :data="bannerList" />
    <div class="classify">
      <router-link :to="{ name: 'Category', params: { CategoryID: item.CategoryID } }" class="classify-item" v-for="item of classifyList" :key="item.CategoryID">
        <img class="classify-item-img" :src="item.CategoryImg" :alt="item.CategoryName" />
        <span class="classify-item-desc" v-text="item.CategoryName"></span>
      </router-link>
    </div>
    <!-- 今日限时抢购 -->
    <div class="FlashSale" v-if="todayOnSaleList.length">
      <SectionTitle title="今日限时抢购" :time="{}" />
      <div class="FlashSale-content mt15">
        <div class="FlashSale-item" v-for="item of todayOnSaleList" :key="item.ProductID">
          <GoodsItem
            :pic="item.ProductPic"
            :title="item.ProductName"
            :price="Number(item.ProductPrice)"
            :sales="Number(item.ProductSalesNum)"
          />
        </div>
      </div>
      <More />
    </div>
    <!-- 组团拼团 -->
    <div class="GroupBuy" v-if="groupList.length">
      <SectionTitle title="组团拼团" desc="抱团买实惠，拼单不浪费" />
      <ul class="GroupBuy-content mt10">
        <li class="GroupBuy-item" v-for="item of groupList" :key="item.ProductID">
          <img class="GroupBuy-item-img" :src="item.ProductPic" :alt="item.ProductName" />
          <div class="GroupBuy-item-info">
            <div class="title" v-text="item.ProductName"></div>
            <p class="desc mt10" v-text="item.ProductName"></p>
            <div class="price mt10">
              <p class="price-alone">单独购￥ {{ item.ProductPrice }}</p>
              <p class="price-group">组团购￥ {{ item.GroupOnPrice }}</p>
            </div>
            <p class="num mt10">已拼 {{ handleSales(item.ProductGroupOn) }}件</p>
          </div>
        </li>
      </ul>
      <More />
    </div>
    <!-- 热销商品 -->
    <div class="HotProduct" v-if="hotProductList.length">
      <SectionTitle title="热销商品" desc="编辑推荐，好货果断买" />
      <div class="HotProduct-content">
        <van-row gutter="20">
          <van-col class="HotProduct-content-item" span="8" v-for="item of hotProductList" :key="item.ProductID">
            <GoodsItem :pic="item.ProductPic" :title="item.ProductName" :price="Number(item.ProductPrice)" :sales="Number(item.ProductSalesNum)" />
          </van-col>
        </van-row>
      </div>
      <More />
    </div>
  </div>
</template>

<script>
import Goods from '@/api/Goods'
import Classify from '@/api/Classify'
import { handleSales } from '@/utils/Lang'
export default {
  name: 'Home',
  metaInfo: {
    title: '首页',
    titleTemplate: null
  },
  components: {
    Search: () => import('@/components/Search'),
    Banner: () => import('@/components/Banner'),
    SectionTitle: () => import('@/components/SectionTitle'),
    GoodsItem: () => import('@/components/GoodsItem'),
    More: () => import('@/components/More')
  },
  data () {
    return {
      bannerList: [],
      classifyList: [],
      groupList: [],
      hotProductList: [],
      todayOnSaleList: []
    }
  },
  created () {
    this.initViewData()
  },
  methods: {
    async initViewData () {
      const requestList = [
        Goods.getTodayOnSale({ UserID: '', Category: '' }),
        Goods.getBanners(),
        Classify.getHomeCategories(),
        Goods.getGroupOn(),
        Goods.getPromoteProductList({ UserID: '', PageNum: 1, Category: '', OrderCategory: 1 })
      ]
      const [todayOnSaleList, bannerList, classifyList, groupList, hotProductList] = await Promise.all(requestList)
      this.todayOnSaleList = todayOnSaleList
      this.bannerList = bannerList
      this.classifyList = classifyList
      this.groupList = groupList
      this.hotProductList = hotProductList
    },
    handleSales
  }
}
</script>

<style lang="stylus" scoped>
.Home
  padding-bottom 50px
  will-change transform
  .classify
    display flex
    width 100%
    padding 10px 0
    background-color $color-white
    &-item
      display flex
      flex-direction column
      justify-content center
      align-items center
      flex 1
      &-img
        icon-size(28px)
      &-desc
        font-size 11px
        margin-top 5px
        color $color-black

  .FlashSale, .GroupBuy, .HotProduct
    margin-top 7px
    padding 15px 10px
    background-color $color-white
  .FlashSale
    &-content
      @extends .row
      overflow-x scroll
      -webkit-overflow-scrolling touch
      padding 20px 0
    &-item
      width calc(100% / 3)
      margin-right 20px
  .GroupBuy
    &-item
      @extends .row
      padding 20px 0 22px 0
      &-img
        icon-size(105px)
        background-color $color-c6
        margin-right 15px
      &-info
        .title
          width 220px
          font-size 13px
          font-family "MicrosoftYaHei"
          color $color-black
          text-ellipsis()
        .desc
          width 102px
          font-size 12px
          font-family "MicrosoftYaHei"
          color $color-black
          text-ellipsis()
        .price
          @extends .row
          align-items stretch
          padding 5px
          background-color $color-main
          border-radius 1px
          &-alone
            display inline-block
            background-color $color-white
            font-size 11px
            color $color-black
            border-radius 1px
            padding 7px
            text-align center
          &-group
            display inline-block
            font-size 11px
            color $color-white
            border-radius 1px
            padding 7px
            text-align center
        .num
          width 220px
          font-size 12px
          font-family "MicrosoftYaHei"
          color #010101
          text-ellipsis()
  .HotProduct
    background-color $color-white
    &-content
      @extends .row
      flex-wrap wrap
      &-item
        margin-top 30px
</style>
