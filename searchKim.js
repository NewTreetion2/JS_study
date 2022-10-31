/* 서울에서 김서방 찾기 
seoul이라는 여러가지 성이 들어있는 배열을 입력받아 몇번째에 Kim이 존재하는지 찾는 함수
forEach함수를 사용해 seoul의 배열을 모두 돌면서 Kim인지 확인하고 만약 Kim이라면 해당 인덱스를 반환한다
반환받은 tmp를 return 값으로 전달하면 완성*/

function solution(seoul) {
  let tmp = 0;
  seoul.forEach((item, index) => {
    if (item === "Kim") {
      tmp = index;
    }
  }, 0);

  return "김서방은 " + tmp + "에 있다";
}
