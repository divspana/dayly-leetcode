/**
 * 374. 猜数字大小
 * https://leetcode.cn/problems/guess-number-higher-or-lower/
 *
 * var guess = function(num) {}
 */

var guess = function (num) {};

function guessNumber(n: number): number {
  let left = 1; //开区间
  let right = n; //开区间
  while (left<=right){
    const mid=Math.floor((right-left)/2)+left
    const ret=guess(mid)
    if(ret===1){ //在右边找  pick>num
       left=mid+1
    }else if (ret===-1){ //左边找
      right=mid-1
    }else if(ret===0){
      return mid
    }
  }
}
