/* 최댓값과 최솟값 찾기 
공백으로 구분된 문자열 s에서 최댓값과 최솟값을 찾아 반환하라
공백으로 구분된 문자열을 배열에 담기 위해 split에 " "로 파라미터를 주어 result배열을 만들어준다
그 뒤 sort메서드를 사용해 정렬한 뒤 맨 앞 숫자와 맨 뒤 숫자를 반환하면 완성 */

function solution(s) {
  let result = s.split(" ");
  result.sort((a, b) => {
    return a - b;
  });
  return `${result[0]} ${result[result.length - 1]}`;
}
