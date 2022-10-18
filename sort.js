//정수 내림차순으로 배치하기
//내림차순으로 쉽게 정리하기 위해 정수를 toString시켜서 문자화시킨 뒤 Spread시켜서 배열에 넣는다
//그 후 +로 다시 정수화 시킨 뒤 sort해 숫자를 오름차순으로 정리하고 reverse시켜 내림차순으로 바꾼다
//그렇게하면 배열에 [1,2,3,4] 같이 ,로 구분되어 들어가 있으니 이것들을 다시 자리에 맞게 정리해야 한다
//length를 통해 숫자의 자릿수를 알아내고 자릿수의 인자만큼 10을 제곱시켜 배열의 순서대로 곱해준다
//이 때 for문을 통해 자릿수의 인자를 -1씩 줄여가며 더해준다

function solution(n) {
  let tmp = n.toString();
  let arr = tmp.split("");
  let sum = 0;
  let tmp2 = 0;
  let z = 0;

  for (let i in arr) {
    arr[i] = +arr[i];
  }
  arr.sort();
  arr.reverse();

  for (let j = arr.length - 1; j !== -1; j--) {
    tmp2 = arr[z] * Math.pow(10, j);
    sum = sum + tmp2;
    z++;
  }

  return sum;
}
