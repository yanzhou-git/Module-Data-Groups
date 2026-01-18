function createLookup(pairs) {
  let result = {};
  for (const pair of pairs) {
    const key = pair[0];
    const value = pair[1];
    result[key] = value;
  }
  return result;
}

module.exports = createLookup;
