// y,p의 갯수를 탐색해 y,p의 갯수가 같다면 true, 다르다면 false를 반환하는 프로그램 (대,소문자 구별)

function solution(s) {
  let arr = [];
  let yCount = 0;
  let pCount = 0;
  var answer = true;

  for (let j = 0; j < s.length; j++) {
    arr.push(s[j]);
  }
  for (let i = 0; i < s.length; i++) {
    if (arr[i] === "y" || arr[i] === "Y") {
      yCount++;
    } else if (arr[i] === "p" || arr[i] === "P") {
      pCount++;
    }
  }
  if (yCount === pCount) {
    answer = true;
    console.log(
      "'p'의 개수" +
        pCount +
        "개, 'y'의 개수 " +
        yCount +
        "개로 같으므로 " +
        answer +
        "를 return 합니다."
    );
    return answer;
  } else {
    answer = false;
    console.log(
      "'p'의 개수" +
        pCount +
        "개, 'y'의 개수 " +
        yCount +
        "개로 다르므로 " +
        answer +
        "를 return 합니다."
    );
    return answer;
  }
}
