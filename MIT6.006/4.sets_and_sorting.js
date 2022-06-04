/* 
选择排序
输入： <array>[]
*/
const selectionSort = function(A, i = null ){
  if (i === null) i = A.length - 1  // i 最后一项的索引
  if (i <= 0) return 
  let j = maxIndex(A, i);  // 下一行已 [] () 开头，该行要加分号
  [A[j], A[i]] = [A[i], A[j]]
  selectionSort(A, i - 1)
}

// 返回 数组A的前i项的最大值的索引
const maxIndex = function(A, i){
  if(i <= 0) return i
  let max = maxIndex(A, i - 1)
  if(A[max] > A[i]){
    return max
  }
  return i
}

// const arr = [4,3,2,1]
// selectionSort(arr)
// console.log(arr);


/* 
插入排序
假定前数组的前 i-1 项已经sorted，然后递归交换最后一项与arr每一项的位置
*/
const insertSort = function(arr,i = null){
  i = i === null ? arr.length - 1 : i
  if(i > 0){
    insertSort(arr, i -1)
    insertLast(arr,i)
  }
}

const insertLast = function(arr, i){
  if(i <= 0) return
  if(arr[i - 1] > arr[i]){
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
  }
  insertLast(arr, i-1)
}
const arr2 = [4,3,2,1]
insertSort(arr2)
console.log(arr2);