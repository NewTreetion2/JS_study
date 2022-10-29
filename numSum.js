// 1번 풀이

// function solution(n)
// {
//      let num = n.toString();
//      let nLength = num.length;
//      let tmp = 0;
//      let tmp2 =0;
//      let sum = 0;
//      for(let a=0; a<nLength; a++){
//          tmp = n % 10;
//          tmp2 = Math.floor(tmp);
//          sum += tmp2
//          n = n / 10;
//      }
//      return sum;
// }

// 2번 풀이 (reduce함수 사용)

function solution(n) {
  let nToString = n.toString();
  let nString = [...nToString];
  console.log(nString);
  let result = nString.reduce((acc, el, i) => {
    return +acc + +el;
  }, 0);

  return result;
}
