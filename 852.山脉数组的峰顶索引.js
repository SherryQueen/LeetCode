/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * 题目可以转换为找数组的最大值的下标 简单点的方法就是直接遍历, 找到最大值. 但可能会超时
 * 根据山脉数组的特性， 我们可知在山峰的两侧， 数组呈现为递增/递减的趋势. 所以我们可以利用双指针+二分法的方式，快速判断当前的 mid 地区是在山峰还是在山峰的两侧. 重复该逻辑可快速找到山峰
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  const len = arr.length;
  if (len < 3) return 0;
  return find(0, len - 1);

  function find(l, r) {
    if (l === r) return l;
    if (l + 1 === r) return arr[l] > arr[r] ? l : r;

    const mid = Math.floor((l + r) / 2);

    return arr[mid] > arr[mid - 1]
      ? /* 在山顶的左侧, 往右侧寻找 */ find(mid, r)
      : /* 在山顶的右侧, 往左侧寻找 */ find(l, mid);
  }
};
// @lc code=end

console.info(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
