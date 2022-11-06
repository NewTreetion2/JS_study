/* 배열에서 가장 작은 수를 골라 제거한 뒤 반환하는 함수
배열에서 가장 작은 수를 반환할 임시Arr tmpArr을 만들어 준 뒤 for in으로 arr과 똑같이 만들어 준다
여기서 tmpArr = arr로 하지 않는 이유는 자바스크립트는 새로운 메모리를 할당한 뒤 그 곳에 값을 넣는 것이 아니라
각자가 하나의 메모리를 '참조'하는 것이므로 tmpArr의 내용을 바꾸면 arr의 값도 바뀌기 때문이다
그 후 반환하는 배열이 빈 배열일 경우 -1을 반환하라는 말은 배열에 요소가 1개일 경우 -1을 반환하라는 말이므로
arr[1]에 값이 없다면 -1을 반환해주면 된다
이 후 tmpArr을 sort시켜 오름차순으로 바꾼 뒤 reverse시켜 내림차순으로 변경
이 후 pop시켜 맨 마지막 숫자를 꺼내오면 배열에서 가장 작은 수가 된다
그리고 forEach함수로 arr의 요소를 돌면서 뽑아온 가장 작은 수를 담고 있는 tmp와 값이 같을 경우
splice로 해당 인덱스부터 1개의 숫자를 제거한다
그 뒤 arr을 반환하면 완성 */

function solution(arr) {
  let tmpArr = [];
  let tmp = 0;

  for (let i in arr) {
    tmpArr[i] = arr[i];
  }
  if (arr[1] === undefined) {
    return [-1];
  } else {
    tmpArr.sort(function (a, b) {
      return a - b;
    });
    tmpArr.reverse();
    tmp = tmpArr.pop();

    arr.forEach(function (el, l) {
      if (el === tmp) {
        arr.splice(l, 1);
      }
    }, 0);
  }
  return arr;
}
