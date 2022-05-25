/**
 * 283. 移动零
 * https://leetcode.cn/problems/move-zeroes/
 */

/**
 * 1. 遍历原数组，将非0元素加入一个新数组中
 * 2. 将新数组的元素赋值给原素组
 * 3. 将剩余数据赋值为o
 * @param nums
 */
function moveZeroes(nums: number[]): void {
  const nonZeroArray = nums.filter((item) => item);

  for (let i = 0; i < nonZeroArray.length; i++) {
    nums[i] = nonZeroArray[i];
  }

  for (let index = nonZeroArray.length; index < nums.length; index++) {
    nums[index] = 0;
  }
}

/**
 * 上面的实现时间复杂度为O(n),空间复杂度也是O(n)
 * 可以不用新创建数组，在原数组上进行
 * 1.定义一个索引k,默认值k=0 遍历数组，当遇到非零元素就赋值给k索引对应的值，此时k++
 * 2. 数组遍历完后非零元素都赋值到数组最前面了，那么此时从索引k开始给数组元素赋值为0
 *
 * @param nums
 */
function moveZeroes1(nums: number[]): void {
  let k = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index]) {
      nums[k] = nums[index];
      k++;
    }
  }

  for (let index = k; index < nums.length; index++) {
    nums[index] = 0;
  }
}

/**
 * 第二种解法就是后面多了一个零元素数组长度的循环，
 * 如果在遇到非零元素和前面索引对应值进行交换是否就可以了呢
 *
 * @param nums
 */
function moveZeroes2(nums: number[]): void {
  let k = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index]) {
      const temp = nums[k];
      nums[k] = nums[index];
      nums[index] = temp;
      k++;
    }
  }
}
