/**
 * 销售数量超过1w转文字
 * @param {*} num 销售数量
 */
export const handleSales = num => num >= 10000 ? `${(num / 10000).toFixed(1)}万` : num
