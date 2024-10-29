
// 첫번째
// 사용자 id를 받아와서 사용자 데이터를 가져오는 getUser 함수를 만드세요.
// 이 함수는 1초후에 사용자 데이터를반환합니다.
// 성공적으로 데이터를 받으면 콘솔로그를 출력합니다.

// 두번째
// 사용자id를 받아서 사용자가 작성한 게시글을 가져오는 getPosts 함수를 만드세요.
// 이 함수는 1초후에 사용자의 게시글을 반환합니다.
// 성공적으로 데이터를 받으면 콘솔로그를 출력합니다.

// 세번째
// 존재하지 않는 사용자id를 받아올경우 사용자가 없습니다. 라는 메시지를 출력합니다.
// 게시글이 없으면 게시글이 없습니다라는 메시지를 출력합니다.

const minji = { id: 21, name: "민지" };
const hani = { id: 12, name: "하니" };
const heyin = { id: 24, name: "혜인" };

const users = [minji, hani, heyin];

const posts = [
  { userId: 21, id: 1, content: "안녕하세요. 민지입니다." },
  { userId: 12, id: 2, content: "안녕하세요. 하니입니다.1" },
  { userId: 12, id: 3, content: "안녕하세요. 하니입니다.2" },
  { userId: 24, id: 4, content: "안녕하세요. 혜인입니다." },
];

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      if (user) {
        resolve(user);
        // console.log(`사용자 데이터:`, user);
      } else {
        reject("사용자가 없습니다.");
      }
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPosts = posts.filter((posts) => posts.userId === userId);
      if (userPosts) {
        resolve(userPosts);
        // console.log(`사용자 게시글:`, userPosts);
      } else {
        reject("게시글이 없습니다");
      }
    }, 1000);
  });
}

getUser(21)
  .then((user) => {
    console.log(user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });