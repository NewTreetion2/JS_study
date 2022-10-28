// function solution(a, b) {
//   let arr = [];
//   let sum = 0;
//   if (a >= -10000000 && a <= 10000000 && b >= -10000000 && b <= 10000000) {
//     if (a === b) {
//       return a;
//     } else if (a < b) {
//       while (a !== b) {
//         arr.push(a);
//         a++;

//         if (a === b) {
//           arr.push(b);
//           console.log(arr);
//           sum = arr.reduce((acc, el) => acc + el);
//           return sum;
//         }
//       }
//     } else if (a > b) {
//       while (b !== a) {
//         arr.push(b);
//         b++;

//         if (b === a) {
//           arr.push(a);
//           sum = arr.reduce((acc, el) => {
//             acc = acc + el;
//             return acc;
//           });
//           return sum;
//         }
//       }
//     }
//   } else {
//     console.log("범위에 벗어난 값입니다");
//   }
// }

function solution(a, b) {
  if (a >= -10000000 && a <= 10000000 && b >= -10000000 && b <= 10000000) {
    if (a === b) {
      return a;
    } else if (a < b) {
      return Array(b - a + 1)
        .fill(a)
        .map((v, i) => {
          return i + v;
        })
        .reduce((acc, el) => {
          return (acc += el);
        }, 0);
    } else if (a > b) {
      return Array(a - b + 1)
        .fill(b)
        .map((v, i) => {
          return i + v;
        })
        .reduce((acc, el) => {
          return (acc += el);
        }, 0);
    } else {
      console.log("값이 잘못되었습니다");
    }
  }
}
