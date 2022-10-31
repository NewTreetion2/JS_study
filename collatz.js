function solution(num) {
  let n = 0;
  let count = 0;
  if (num === 1) {
    return count;
  } else if (num > 1 && num < 8000000) {
    while (num !== 1) {
      if (num % 2 === 0) {
        num /= 2;
        count++;
      } else {
        num = num * 3 + 1;
        count++;
      }

      if (num === 1) {
        return count;
      }
      if (count === 500) {
        return -1;
      }
    }
  }
}
