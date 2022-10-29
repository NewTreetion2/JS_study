function solution(x, n) {
  let arr = [];
  let num = 0;
  for (let i = 0; i < n; i++) {
    num = x + i * x;
    arr.push(num);
  }

  return arr;
}
