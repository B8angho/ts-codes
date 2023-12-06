'use strict';
// // 기본적인 구조는 같지만 매개변수가 다를 때
// // 오버로딩을 이용해서 두 함수를 하나로 만들 수 있다.
function saySomething(word) {
  if (typeof word === 'string') {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(' ');
  }
  throw new Error('unable to say something');
}
saySomething(['hello', 'world']);
