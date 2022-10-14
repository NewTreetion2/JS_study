// 변수 ->
// 이론은 나중에

// 지금은 문법 중요!
/* var, let, const */

let maple = 0;

// 조건
if (maple < 10) {
  console.log("박현웅1");
} else if (maple <= 10) {
  console.log("박현웅2");
} else if (maple > 10) {
  console.log("박현웅3");
} else if (maple >= 10) {
  console.log("박현웅4");
} else if (maple === 10) {
  console.log("박현웅5");
} else {
  console.log("박현웅6");
}

// 반복 while, for
for (let i = 0; i < 5; i++) {
  console.log(i);

  for (let j = i; j < 5; j++) {
    console.log(j);
  }
}

while (maple <= 100) {
  console.log(maple);
  maple++;
}

// 린트 설정

// 숙제!
// 컴파일러, 인터프리터 차이
// js === 이유
// http://blog.302chanwoo.com/2017/08/javascript-array-method/  -> 다 공부하기
