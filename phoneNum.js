/* 핸드폰 번호를 입력받아 가리는 함수
phone_number를 입력받아 해당 문자열의 길이를 length로 알아낸다
그리고 0부터 length-4만큼 for문을 돌리며 해당 갯수만큼 *을 배열에 넣어준다
그 뒤 해당 배열에 4번 for문을 돌려 length-4부터 ++해가며 4번 charAt(문자열을 쪼개 index의 해당하는 문자를 반환) 시켜주고
join시켜 문자열로 반환하면 완성*/

function solution(phone_number) {
  let phoneIndex = phone_number.length;
  let tmp = [];
  let tmpNum = "";
  for (let i = 0; i < phoneIndex - 4; i++) {
    tmp.push("*");
  }

  for (let j = 0; j < 4; j++) {
    tmpNum = phone_number.charAt(phoneIndex - 4);
    tmp.push(tmpNum);
    phoneIndex++;
  }
  return tmp.join("");
}
