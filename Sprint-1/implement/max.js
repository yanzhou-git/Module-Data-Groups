function findMax(elements) {
  //extract numbers
  const numbers = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  return Math.max(...numbers);
}

module.exports = findMax;
