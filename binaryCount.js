/* 2진수 문자열 s를 입력받아 s가 가진 0을 모두 지우고 그 길이를 계산해 다시 2진수로 변경하며 1이 될 때가지 반복
그 후 몇 번이나 반복했으며 0을 몇번 지웠는지 확인하는 프로그램
각 역할을 하는 함수를 제작하고 그 함수를 반복시켜 코드를 세분화
각 역할은 주석으로 설명*/

// 배열을 입력받아 0을 제거해주는 함수
function deleteZero(array) {
  return array.filter((number) => number === "1");
}

// 배열을 입력받아 0의 갯수를 찾아주는 함수
function countZero(array) {
  return array.filter((number) => number === "0").length;
}

// 문자열을 입력받아 2진수로 반환하는 함수
function returnBinary(str) {
  return str.length.toString(2);
}

function solution(s) {
  let result = s.split("");
  let sLength = s.length;
  let zeroNumber = 0;
  let count = 0;
  let resultArray = [];
  let tmp;

  // zeroNumber에 0의 갯수를 계속 합해준다
  // count로 반복한 숫자를 계산해 건네준다
  // result는 제로 카운트가 끝나면 0을 제거한 뒤 2진수로 바꿔 다시 배열에 담아 반환한다
  // sLength은 바뀐 result의 길이를 계속 최신화 해준다 -> 1이되면 종료해야하므로
  while (sLength !== 1) {
    zeroNumber += countZero(result);
    result = returnBinary(deleteZero(result)).split("");
    sLength = result.length;
    count++;
    if (sLength === 1) {
      break;
    }
  }

  // 반복문이 끝나고 저장된 횟수와 0갯수를 파악한 변수를 넘겨준다
  resultArray.push(count);
  resultArray.push(zeroNumber);
  return resultArray;
}
