/* 两数之和 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i];
    } else {
      obj[target - nums[i]] = i;
    }
  }
};

var twoSum = function(nums, target) {
  const map = new Map()
  for(let i = 0 ; i < nums.length;i++){
      if(map.has(nums[i])){
          return [map.get(nums[i]),i]
      }
      else{
          map.set(target - nums[i],i)
      }
  }
};