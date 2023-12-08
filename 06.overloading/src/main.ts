// // 기본적인 구조는 같지만 매개변수가 다를 때
// // 오버로딩을 이용해서 두 함수를 하나로 만들 수 있다.

//// 예시 1
// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//   return a + b;
// }

// add('hello', 'world');
// add(1, 1);
// // add(1, 'hello');

// // 예시 2: 이 방법이 가독성이 더 좋네

// function saySomething(word: string | string[]): string {
//   if (typeof word === 'string') {
//     return word;
//   } else if (Array.isArray(word)) {
//     return word.join(' ');
//   }
//   throw new Error('unable to say something');
// }

// saySomething(['hello', 'world']); // 'hello world'

// 예시 3

function saySomething(word: string): string;
function saySomething(words: string[]): string;
function saySomething(word: any): any {
  if (typeof word === 'string') {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(' ');
  }
  throw new Error('unable to say something');
}

saySomething(['hello', 'world']);
