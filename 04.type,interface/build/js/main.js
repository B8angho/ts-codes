"use strict";
// // Interface 확장 extends
// interface Animal {
//   name: string;
// }
// interface Bear extends Animal {
//   honey: boolean;
// }
// const bear1: Bear = {
//   name: 'honey bear',
//   honey: true,
// };
// // Type 확장 (&)intersection
// type Animal = {
//   name: string;
// };
// type Bear = Animal & {
//   honey: boolean;
// };
// const bear1: Bear = {
//   name: 'honey bear',
//   honey: true,
// };
// interface Animal {
//   name: string;
// }
// interface Animal {
//   honey: boolean;
// }
// const bear1: Animal = {
//   name: 'honey bear',
//   honey: true,
// };
// // 'Animal' 식별자가 중복되었습니다. => type은 선언 병합이 X
// type Animal = {
//   name: string;
// };
// type Animal = {
//   honey: boolean;
// };
