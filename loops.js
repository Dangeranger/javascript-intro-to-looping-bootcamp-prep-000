function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    let string = (i === 1) ? 'I am 1 strange loop.' : `I am ${i} strange loops.`;
    array.push(string)
  }
  return array;
}

function whileLoop(num) {
  while(num > 0) {
    console.log(num)
    num--
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}
