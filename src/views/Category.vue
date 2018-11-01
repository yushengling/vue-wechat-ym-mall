<template>
  <div class="Category">
    <Search disabled />
    <Banner :data="bannerList" />
    <div class="GoodsWarp mt10" v-if="todayOnSaleList.length">
      <SectionTitle title="今日限时抢购" />
      <div class="GoodsWarp-content">
        <van-row gutter="20">
          <van-col class="GoodsWarp-content-item" span="12" v-for="item of todayOnSaleList" :key="item.ProductID">
            <GoodsItem :pic="item.ProductPic" :title="item.ProductName" :price="Number(item.ProductPrice)" :sales="Number(item.ProductSalesNum)" />
          </van-col>
        </van-row>
      </div>
      <More />
    </div>
    <!-- 热销商品 -->
    <div class="GoodsWarp mt10" v-if="hotProductList.length">
      <SectionTitle title="热卖推荐" />
      <div class="GoodsWarp-content">
        <van-row gutter="20">
          <van-col class="GoodsWarp-content-item" span="12" v-for="item of hotProductList" :key="item.ProductID">
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
export default {
  name: 'Category',
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
      hotProductList: [],
      todayOnSaleList: []
    }
  },
  created () {
    // 初始化页面数据
    this.initViewData()
  },
  methods: {
    async initViewData () {
      const { CategoryID } = this.$route.params
      const requestList = [
        Goods.getBanners(CategoryID, 2),
        Goods.getTodayOnSale({ UserID: '', Category: CategoryID }),
        Goods.getPromoteProductList({ UserID: '', PageNum: 1, Category: CategoryID, OrderCategory: 1 })
      ]
      const [bannerList, todayOnSaleList, hotProductList] = await Promise.all(requestList)
      this.todayOnSaleList = todayOnSaleList
      this.bannerList = bannerList
      this.hotProductList = hotProductList
    }
  }
}
</script>

<style lang="stylus" scoped>
.Category
  .GoodsWarp
      padding 35px 18px 30px 18px
      background-color $color-white
      &-content
        @extends .row
        flex-wrap wrap
        &-item
          margin-top 30px
</style>
