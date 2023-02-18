/*
 * @lc app=leetcode.cn id=2160 lang=javascript
 *
 * [2160] 拆分数位后四位数字的最小和
 */

// @lc code=start
/**
 * 根据题目的意思, 我们需要将两位新数的前导位上的数字尽可能的少. 所以我们先对给定的 num 进行排序. 然后大的两个数作为新数的个位, 小的两位数作为新数的前导位
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const arr = [
    Math.floor(num / 1000),
    Math.floor((num % 1000) / 100),
    Math.floor((num % 100) / 10),
    Math.floor(num % 10),
  ].sort((a, b) => a - b);

  return arr[2] + arr[3] + (arr[0] + arr[1]) * 10;
};
// @lc code=end
