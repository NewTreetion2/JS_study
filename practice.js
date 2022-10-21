// 학점을 계산하는 코드입니다

let score = 33;

if (score > 100 || score < 0) {
  console.log("잘못됐습니다");
} else if (score >= 90) {
  console.log("학점은 A입니다");
} else if (score >= 80) {
  console.log("학점은 B입니다");
} else if (score >= 70) {
  console.log("학점은 C입니다");
} else {
  console.log("학점은 F입니다");
}
