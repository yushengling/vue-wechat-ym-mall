import { Toast } from 'vant'
import Axios from '@/plugins/Axios'

export default class Classify {
  /**
   * 获取所有类别
   */
  static async getCategories () {
    try {
      const { Code, Message, Result } = await Axios.get(`GetCategories.ashx`)
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
   * 获取主页类别列表
   */
  static async getHomeCategories () {
    const result = await this.getCategories()
    const imgList = [
      require('@/assets/images/Classify/Furniture.png'),
      require('@/assets/images/Classify/Debris.png'),
      require('@/assets/images/Classify/Beauty.png'),
      require('@/assets/images/Classify/Clothes.png'),
      require('@/assets/images/Classify/Food.png')
    ]
    return result
      .filter(cv => cv.CategoryName !== '其他' && cv.CategoryName !== '推荐' && cv.CategoryName !== '815')
      .map((item, i) => {
        item.CategoryImg = imgList[i]
        return item
      })
  }
}
