// 정수를 입력받아 약수의 합을 출력

function solution(n) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    sum = sum + arr[j];
  }
  var answer = sum;
  return answer;
}
