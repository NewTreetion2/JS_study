/* 절대값을 모아둔 배열 absolutes와 각 부호를 결정하는 true, false가 들어있는 배열 signs를 참고해 정수배열을 완성하고 합을 구하라
정수배열을 만들기 위해 absolutes[0]과 signs[0]을 동시에 참고해야 하므로 for in 반복문을 사용해준다
absolutes의 배열을 돌면서 index를 가져오고 해당 index의 signs값이 true라면 해당 absolutes는 +, false라면 -absolutes를 반환해준다
그렇게 완성된 정수 배열을 reduce를 이용해 합을 구해주면 완성*/

function solution(absolutes, signs) {
  for (let i in absolutes) {
    if (signs[i] === true) {
      absolutes[i] = +absolutes[i];
    } else {
      absolutes[i] = -absolutes[i];
    }
  }

  return absolutes.reduce((acc, el, l) => {
    return (acc += el);
  }, 0);
}
