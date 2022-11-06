// a,b에 담긴 배열들의 요소들을 각각 곱해 가장 최솟값을 만드는 함수
// a의 최솟값과 b의 최댓값, 그리고 a의 최댓값과 b의 최솟값을 곱해야 가장 작은 수를 만들 수 있으므로
// a와 b를 각각 sort시켜 a는 0부터 b는 maxindex부터 a는++, b는--시켜 곱해주며 그 값들을 배열에 저장하고
// 그 배열의 합을 구해 전달해주면 완성

function solution(A, B) {
  let result = [];
  A.sort((a, b) => {
    return a - b;
  });
  B.sort((a, b) => {
    return a - b;
  });
  for (let i = 0, j = A.length - 1; i < A.length; i++) {
    result.push(A[i] * B[j]);
    j--;
  }

  return result.reduce((acc, el) => {
    return (acc += el);
  });
}
