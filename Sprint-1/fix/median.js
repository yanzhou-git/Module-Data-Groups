// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //extract numbers(not NaN) from array, and sort numbers array by sequence for median
  if (!Array.isArray(list)) return null;
  const numberArray = list
    .filter((item) => typeof item === "number" && !Number.isNaN(item))
    .sort((a, b) => a - b);
  //without numbers
  if (numberArray.length === 0) {
    return null;
  }
  //sort numbers array by sequence for median

  const middleIndex = Math.floor(numberArray.length / 2);
  const median = numberArray[middleIndex];
  //odd number
  if (numberArray.length % 2 !== 0) {
    return median;
  }
  //even number
  else {
    return (numberArray[middleIndex - 1] + numberArray[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
