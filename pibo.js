//  피보나치 수열 연습
let num = 0;
let sum = 1;
let result = 0;

for (let i = 0; i < 10; i++) {
  result = sum + num;
  console.log(result);
  num = sum;
  sum = result;
}
