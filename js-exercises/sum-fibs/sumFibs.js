function sumFibs(num) {
  var a = 1;
  var b = 1;
  var sum = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }
    a = [b, b=b+a][0];
  }

  return sum;
}

export {
  sumFibs,
};
