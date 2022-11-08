/* 0~9중 랜덤한 수가 들어있는 배열 numbers에서 없는 숫자의 합을 구하라
0~9의 합은 45이므로 45에서 numbers에 들어있는 숫자들의 합을 빼면 답이 나온다
하지만 들어있지 않은 숫자까지 구하려고한다면 아래 방식을 이용하면 된다
우선 0~9의 숫자를 요소로 가진 배열 answer를 만든다
그리고 numbers의 index를 돌면서 해당 index의 요소가 answer안에 있는지 확인한다
만일 존재한다면 splice함수를 사용해 해당 숫자를 answer에서 제거한다
그렇게 numbers의 마지막 요소까지 반복했다면 answer에 남은 숫자는 numbers에 없는 숫자 뿐이다
그러므로 answer의 합을 구해주면 완성*/

// function solution(numbers) {
//     if (numbers.length >= 1 && numbers.length <= 9){
//         return 45 - numbers.reduce((acc, el, l) => { return acc += el },0);
//     }
// }

function solution(numbers) {
  let anwser = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (numbers.length >= 1 && numbers.length <= 9) {
    for (let i in numbers) {
      for (let j in anwser) {
        if (numbers[i] === anwser[j]) {
          anwser.splice(j, 1);
        }
      }
    }
  }

  return anwser.reduce((acc, el, l) => {
    return (acc += el);
  }, 0);
}
