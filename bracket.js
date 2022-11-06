/* 괄호가 열렸는지 닫혔는지 판단하는 함수 ()
일단 ()가 올바르려면 s의 길이는 짝수여야한다 (로 열면 )로 닫아야 올바른 괄호이므로 필연적으로 짝수일때만 올바르다
그 뒤 조건을 충족한다면 반복문으로 s의 요소를 돌며 (라면 stack에 push하고 )라면 스택에서 pop한다
그렇게 모든 요소를 돌고났을 때 스택이 비어있다면 올바른 괄호이지만
숫자가 0이 아니라면 닫혔든 열렸든 무언가 문제가 있다는 뜻이므로 false를 반환한다
또한 중간에 push된 것이 없는데 pop을 시도한다면 괄호가 열리지 않았는데 닫으려는 것이므로 false를 반환한다 */

function solution(s) {
  let stack = [];
  if (s.length % 2 === 1) {
    return false;
  } else {
    for (let i of s) {
      if (i === "(") {
        stack.push(1);
      } else {
        if (!stack.pop()) {
          return false;
        }
      }
    }
    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
