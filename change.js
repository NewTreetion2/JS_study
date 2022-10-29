function solution(s) {
  let tmp = 0;
  let arr = [...s];
  let z = 1;
  let sum = 0;
  let tmp2 = 0;
  if (arr[0] === "-") {
    for (let i = arr.length - 2; i !== -1; i--) {
      tmp = arr[z] * Math.pow(10, i);
      sum = sum + tmp;
      z++;
    }
  } else if (arr[0] === "+") {
    for (let i = arr.length - 2; i !== -1; i--) {
      tmp = arr[z] * Math.pow(10, i);
      sum = sum + tmp;
      z++;
    }
  } else {
    for (let j = arr.length - 1; j !== -1; j--) {
      tmp = arr[tmp2] * Math.pow(10, j);
      sum = sum + tmp;
      tmp2++;
    }
  }
  if (arr[0] === "-") {
    return -sum;
  } else {
    return sum;
  }
}
