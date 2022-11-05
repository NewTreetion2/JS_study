/* 자연수 n을 입력받아 n의 크기만큼 "수박"을 반복시키는 함수
3이라면 수박수를 4라면 수박수박을 반환한다
반복문을 사용해 n의 갯수를 파악한 뒤 result배열에 push해주는 방식을 채택
홀수와 짝수마다 push해주어야 하는 문자가 다르므로 조건문으로 달아준다 */

function solution(n) {
  let result = [];
  let i = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      result.push("박");
    } else {
      result.push("수");
    }
  }
  return result.join("");
}
