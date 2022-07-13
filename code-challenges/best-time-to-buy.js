var maxProfit = function(prices) {
    let profit = 0
    let buy = 0
    for (let i=0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i+1]) {
            buy = prices[i]
        } else if (prices[i] > prices[i+1]) {
            if (buy > 0) {
                profit = buy - prices[i] 
                buy = 0
            }
        }
    }
    return profit
};