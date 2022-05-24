/**
 * https://leetcode.cn/problems/binary-search/
 * 给定一个  n  个元素有序的（升序）整型数组  nums 和一个目标值  target   ，写一个函数搜索  nums  中的 target，如果目标值存在返回下标，否则返回 -1。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

import {runTime} from "../utils";

/**
 * 直接遍历
 * @param nums
 * @param target
 *
 * 通过遍历每个元素对比,相等返回index
 *
 * 这种方法如果需要找的元素在数据后面，那么效率是比较低的
 *
 * 时间复杂度 O(n)
 *
 */
const search = function (nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) return i;
  }
  return -1;
};

/**
 * 对半查找
 * @param nums
 * @param target
 */

const search2 = function (nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1; // 这个是索引
  for (; left <= right; ) {
    //这里要索引
    let mid = Math.floor((right - left) / 2) + left;
    if (target > nums[mid]) {
      //取区间坐边
      left = mid + 1;
    } else if (target < nums[mid]) {
      // 取右边区间
      right = mid - 1;
    } else if (target === nums[mid]) {
      return mid;
      //这里不能直接返回i,必须是否判断相等，可能存在找不到的情况
    }
  }
  return -1;
};

