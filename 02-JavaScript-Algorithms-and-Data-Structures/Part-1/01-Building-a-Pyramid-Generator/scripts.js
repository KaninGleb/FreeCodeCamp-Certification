
document.getElementById('levels').addEventListener('input', (e) => {
  let currLevel = e.currentTarget.value
  const validPattern = /^(0|[1-9]\d{0,1}|[1-2][0-9]|30)$/

  if (!validPattern.test(currLevel) || currLevel.includes('e') || currLevel.includes('-')) {
    e.currentTarget.value = ''
  } else {
    if (+currLevel > 30) {
      e.currentTarget.value = '30'
    } else if (+currLevel < 0) {
      e.currentTarget.value = '0'
    }
  }
})

document.getElementById('generate').addEventListener('click', () => {
  const character = document.getElementById('symbol').value;
  const count = parseInt(document.getElementById('levels').value);
  const direction = document.getElementById('direction').value;
  const rows = [];


  function padRow(rowNumber, rowCount) {
    return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
  }

  for (let i = 1; i <= count; i++) {
    if (direction === 'inverted') {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }

  let result = '';

  for (const row of rows) {
    result += '\n' + row;
  }

  document.getElementById('pyramid').textContent = result;
})


// // While
// while (rows.length < count) {
//     rows.push(padRow(rows.length + 1, count));
// }

// // For
// for (let i = count; i > 0; i--) {
//     rows.push(padRow(i, count));
// }