function sum(elements) {
  const nums = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (nums.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
}

module.exports = sum;
