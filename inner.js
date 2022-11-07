/* 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성
이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이) 
제한사항은 a,b의 길이는 1~1000까지다

각 a,b의 길이를 length를 사용해 구해준 뒤 1~1000사이로 조건을 걸어준다 (제한사항)
그 후 반복문을 통해 result 배열에 a[i] b[i]를 곱한 값을 넣어주고
reduce를 통해 result의 값을 더해주면 완성 */

function solution(a, b) {
  let aLeng = a.length;
  let bLeng = b.length;
  let result = [];
  if (aLeng >= 1 && aLeng <= 1000 && bLeng >= 1 && bLeng <= 1000) {
    for (let i = 0; i < aLeng; i++) {
      result[i] = a[i] * b[i];
    }

    return result.reduce((acc, el, l) => {
      return (acc += el);
    }, 0);
  }
}
