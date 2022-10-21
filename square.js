//프로그래머스 정수의 제곱근 찾기 문제풀이
//제곱은 1 4 9 16 ~ 처럼 2n-1을 더해가는 배열이므로 2n-1을 더해주는 배열을 생성
//그 후 n값이 배열에 있는지 검색해주는 includes와 n값의 index를 반환해주는 indexOf를 사용
//나온 인덱스 값은 n값보다 1이 작으니 문제에서 요구한대로 n+1의 제곱을 구하기 위해 +2
//그 값의 제곱을 반환

//문제점: 값을 구하려면 배열을 생성해야하는데 i값의 범위가 매우 한정적이고 숫자가 무한대로 커질 경우 처리속도가 너무 오래걸린다
//따라서 다른 문제 해결방법을 찾아보는 것이 바람직하겠다

function solution(n) {
  let x = 0;
  let arr = [];
  let sum = 0;
  let tmp = 0;
  let answer = 0;

  for (let i = 1; i < 10000000; i++) {
    tmp = sum + (2 * i - 1);
    sum = tmp;
    arr.push(tmp);
  }
  if (n > 0 && arr.includes(n) === true) {
    x = arr.indexOf(n);
    console.log(x);
    x = x + 2;
    answer = x * x;
  } else {
    return -1;
  }
  return answer;
}
