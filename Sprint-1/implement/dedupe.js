function dedupe(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

module.exports = dedupe;
