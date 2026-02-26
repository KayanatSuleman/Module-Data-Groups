// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

module.exports = calculateMedian;

function calculateMedian(list) {
  // 1) Must be an Array
  if (!Array.isArray(list)) return null;

  // 2) Keep only real numbers (strings like "3" are excluded)
  const numbers = list.filter(
    (value) => typeof value === "number" && Number.isFinite(value)
  );

  // 3) If no numbers, return null
  if (numbers.length === 0) return null;

  //4) Sort a copy (don't mutate input)
  const sorted = [...numbers].sort((a, b) => a - b);

  // Compute median
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted [mid];
  }

  return (sorted[mid - 1] + sorted[mid]) / 2;
}