const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = 'Hello'; // 타입 단언

const bodyElement1 = document.querySelector('body') as HTMLBodyElement;
bodyElement1!.innerText = 'Hello'; // ! not null 타입 단언

const bodyElement2 = document.querySelector('body');
if (bodyElement2) {
  bodyElement2.innerText = 'hello'; // 타입 가드
}

// 잘못된 예시
function func(arg: string | null) {
  // if(arg) { return arg.toLowerCase(); };  // 타입 가드로 해야 됨
  // return arg.toLowerCase();
}
func('hello');
func(null);
