
const maxProfit = (prices) => {
  let maxProfit = 0
  let minPrice = prices[0]
  // we can't start with the selling price at prices[0] because we did not have a precvious buy
  for(let sell = 1; sell < prices.length; sell++){
    let sellPrice = prices[sell]
    let profit = sellPrice - minPrice
    maxProfit = Math.max(maxProfit,profit)

    // for a maximum profit, we always need to have the lowest byuing price
    if(sellPrice < minPrice) minPrice = sellPrice
  }
  return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))