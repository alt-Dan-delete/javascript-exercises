const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
  }
  return sum
};

const multiply = function(nums) {
  let result = 1
  nums.forEach(element => {
    result *= element
  });
  return result
};

const power = function(base, expo) {
	return Math.pow(base, expo)
};

const factorial = function(num) {
  let result = 1
  for (let i = 2; i <= num; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
