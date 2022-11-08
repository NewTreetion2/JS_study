/* 임의의 자연수 n에 대하여 다음 조건을 만족하는 최솟값을 찾아라
조건 1. n의 다음 큰 숫자는 n보다 큰 자연수
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같음.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수
2개의 함수를 선언해준다
changeBinary -> 매개변수로 받은 숫자를 2진수의 문자열로 반환한다
countOne -> 입력받은 문자열을 split을 통해 1로 구분한 뒤 배열의 길이를 반환한다 (-1을 하는 이유는 0부터 세기때문)
그 후 변수 i를 선언한 뒤 n+1부터 시작해 countOne(chaneBinary())이 같아질 때까지 i++ 하며 반복문을 돌려준다
같은 값이 나와 반복문이 끝나면 해당 숫자를 반환해주면 완성*/

function changeBinary(number) {
  return number.toString(2);
}

function countOne(str) {
  return str.split("1").length - 1;
}

function solution(n) {
  let i = n + 1;
  while (countOne(changeBinary(i)) !== countOne(changeBinary(n))) {
    i++;
  }
  return i;
}
