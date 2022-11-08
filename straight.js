/* 주어진 숫자 n에 대해 그 숫자를 만들 수 있는 연속된 자연수의 갯수를 구하라
ex) 15-> 1+2+3+4+5 4+5+6 7+8 15 총 4를 반환
임의의 변수 tmp를 만들어 1부터 늘어나는 i를 더해 저장해준다
그러다가 tmp의 수가 n을 넘어서면 i를 이전 i에 1을 더한 값을 저장해둔 j로 바꾸고
tmp를 초기화한 뒤 다시 계산해준다
그렇게 반복하다가 tmp가 n과 같아지면 count 값을 ++ 해준다
반복이 모두 완료되면 자연수의 갯수가 나온다*/

function solution(n) {
  let tmp = 0;
  let count = 0;
  for (let i = 1, j = 1; i <= n; i++) {
    tmp += i;
    if (tmp > n) {
      i = j;
      j++;
      tmp = 0;
    } else if (tmp === n) {
      count++;
      i = j;
      j++;
      tmp = 0;
    }
  }
  return count;
}
