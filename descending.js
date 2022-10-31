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
  sum = arr.join("");
  // for(let j=arr.length-1; j!==-1 ; j--){
  //     tmp2 = arr[z] * Math.pow(10,j);
  //     sum = sum + tmp2;
  //     z++;
  // }

  return +sum;
}
