import { Toast } from 'vant'
import Axios from '@/plugins/Axios'

export default class Goods {
  /**
   * 获取banners数据
   * @param {*} CategoryID 类别ID
   * @param {*} BannerType 1.首页 2.团购
   */
  static async getBanners (CategoryID = '', BannerType = 1) {
    try {
      const { Code, Message, Result } = await Axios.get(`GetBanners.ashx?CategoryID=${CategoryID}&BannerType=${BannerType}`)
      if (Code === '1') {
        return Result
      } else {
        Toast(Message)
      }
    } catch (e) {
      Toast('网络好像开小差了~')
    }
  }

  /**
   * 主界面-组团拼团
   * @param {*} UserID 用户id
   * @param {*} Category 类别ID，主界面的组团拼团传空
   */
  static async getGroupOn (UserID = '', Category = '') {
    try {
      const { Code, Message, Result } = await Axios.get(`GetGroupOn.ashx?UserID=${UserID}&Category=${Category}`)
      if (Code === '1') {
        return Result
      } else {
        Toast(Message)
      }
    } catch (e) {
      Toast('网络好像开小差了~')
    }
  }

  /**
   * 首页-热销商品/热卖推荐
   * @param {*} params
   * UserID 可选
   * PageNum 页码
   * Category 可选，类别ID，主界面传空
   * OrderCategory  可选，排序方式  1.默认 2.销量  3.价格正序  4.价格倒序  5.新品
   */
  static async getPromoteProductList (params) {
    try {
      const { Code, Message, Result } = await Axios.get(`GetPromoteProductList.ashx?UserID=${params.UserID}&PageNum=${params.PageNum}&OrderCategory=${params.OrderCategory}&Category=${params.Category}`)
      if (Code === '1') {
        return Result
      } else {
        return Toast(Message)
      }
    } catch (e) {
      Toast('网络好像开小差了~')
    }
  }
  /**
   * 今日限时抢购
   * @param {*} params
   * UserID 可选
   * Category Category 可选，类别ID，主界面的限时抢购传空
   */
  static async getTodayOnSale (params) {
    try {
      const { Code, Message, Result } = await Axios.get(`GetTodayOnSale.ashx?UserID=${params.UserID}&Category=${params.Category}`)
      if (Code === '1') {
        return Result
      } else {
        return Toast(Message)
      }
    } catch (e) {
      Toast('网络好像开小差了~')
    }
  }
}
