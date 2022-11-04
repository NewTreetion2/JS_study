/* 나누어 떨어지는 수의 배열을 구하기
arr로 임의의 수가 가득 찬 배열을 입력받고 divisor를 추가로 입력받는다
그리고 divisor로 나누어 떨어지는 수로만 구성된 배열을 반환하는 함수
forEach함수를 사용해 arr의 배열을 차례로 돌며 divisor로 나누어떨어지는지 (% === 0인지) 확인
그 뒤 해당 숫자가 나누어 떨어지면 result배열에 push 시켜 담아준다
전부 다 돌면서 result 배열이 만들어지면 sort시켜주는데 sort는 기본적으로 아스키코드를 기준으로 sort하기 때문에
오름차순, 내림차순 시 오류가 생긴다
따라서 function에 a-b를 return시켜 앞자리 수가 더 클 경우 자리를 바꿔주는 함수를 추가한다
ex) 1, 3, 10 , 2 일 경우 평소 sort라면 1, 10, 2, 3 순으로 배치가 되지만 함수를 추가시켜주면
1 - 10은 음수이므로 false가 반환되어서 동작하지 않고 10 - 2는 양수이므로 true가 반환되어 동작해 1, 2, 3, 10이 반환된다 */

function solution(arr, divisor) {
  let result = [];
  let i = 0;
  arr.forEach((el, l) => {
    if (el % divisor === 0) {
      result.push(el);
      i++;
    }
  }, 0);

  if (i === 0) {
    result.push(-1);
    return result;
  } else {
    return result.sort(function (a, b) {
      return a - b;
    });
  }
}
