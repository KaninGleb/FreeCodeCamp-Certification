const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
}

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}

const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

const formatNumber = (num) => {
  if (num === null) return "No mode";
  return Number.isInteger(num) ? num : num.toFixed(4);
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;

  if (!value.trim()) {
    alert("Please enter some numbers");
    return false;
  }

  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  if (numbers.length === 0) {
    alert("Please enter valid numbers");
    return false;
  }

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#mean").textContent = formatNumber(mean);
  document.querySelector("#median").textContent = formatNumber(median);
  document.querySelector("#mode").textContent = formatNumber(mode);
  document.querySelector("#range").textContent = formatNumber(range);
  document.querySelector("#variance").textContent = formatNumber(variance);
  document.querySelector("#standardDeviation").textContent = formatNumber(standardDeviation);

  document.querySelectorAll('.stat-card').forEach(card => {
    card.style.animation = 'none';
    setTimeout(() => {
      card.style.animation = 'fadeIn 0.5s ease-out forwards';
    }, 10);
  });

  return false;
}