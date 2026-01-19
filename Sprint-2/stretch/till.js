// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const valueInPence = parseInt(coin, 10);
    total += valueInPence * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

/* a) What is the target output when totalTill is called with the till object
£4.40
// b) Why do we need to use Object.entries inside the for...of loop in this function?
the object.entries turn the object iterable so for ... of loop can loop over each coin-quantity pair separately. 
// c) What does coin * quantity evaluate to inside the for...of loop?
it evaluate to the total value in pence. 
// d) Write a test for this function to check it works and then fix the implementation of totalTill
*/
module.exports = totalTill;
