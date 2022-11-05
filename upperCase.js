/* 주어진 문자열 s에 대하여 가장 앞 문자만 대문자로 바꾸는 함수를 만들어라
ex) HelLo WoRLD -> Hello World (문자가 아닌 것이 맨 앞일 경우 다음 문자는 소문자로 한다)
문자열 s를 split(' ')하여 공백을 기준으로 잘라 배열에 담아준다
그 후 잘린 s를 담은 result배열의 각 요소를 대상으로 toLowerCase를 적용시켜 모두 소문자화 시킨 뒤
맨 앞에 있는 문자만 떼와 toUpperCase로 대문자화 시키고 replace시켜준다
그리고 배열 result를 join시켜주면 완성
! 이 때, split을 공백으로 기준했기 때문에 연속된 공백이 나올 경우 toUpperCase시 빈 문자열을 대상할 수 있기 때문에
오류의 위험이 있다! 그러므로 조건문을 달아 대상이 빈 문자열일때는 넘어가도록 설계해주자 */

function solution(s) {
  let result = s.split(" ");
  let tmp = "";

  for (let i in result) {
    if (result[i] === "") {
      i++;
    } else {
      result[i] = result[i].toLowerCase();
      tmp = result[i][0].toUpperCase();
      result[i] = result[i].replace(result[i][0], tmp);
    }
  }
  return result.join(" ");
}
