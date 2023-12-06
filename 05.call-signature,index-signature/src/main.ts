// // *call-singature

// interface getLikeNumber {
//   (like: number): number;
// }

// interface Post {
//   id: number;
//   title: string;
//   getLikeNumber: (like: number) => number; // 이 함수 타입을 재사용하기 위해
// }

// const post1: Post = {
//   id: 1,
//   title: 'post 1',
//   getLikeNumber(like: number) {
//     return like;
//   },
// };

// post1.getLikeNumber(1);

// *index-signature

interface Post {
  // 타입을 확실히 아는 부분은 주고
  // 모르는 부분들은 인덱스 시그니처를 이용해 처리
  [key: string]: unknown;
  id: number;
  title: string;
}

const post1: Post = {
  id: 1,
  title: 'post 1',
};

post1['description'] = 'description 1';
post1['pages'] = 300;

interface Names {
  [item: number]: string;
}

const userNames = ['John', 'kim', 'joe'];
userNames[0] === 'John';
