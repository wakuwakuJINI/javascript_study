$(document).ready(function () {
  //전체 게시글이 들어갈 요소 선택
  const postGrid = $("#post-grid");
  let posts = [];
  // 전체 게시글을 불러오는 api호출
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // 성공했을때 json데이터를 반환
      if (response.ok) {
        return response.json();
        //실패했을때 status코드가 404일겨우 에러를 반환
      } else if (response.status === 404) {
        return Promise.reject("404오류입니다.");
      } else {
        return Promise.reject("데이터를 가져오는데 실패했습니다.");
      }
    })
    .then((json) => {
      // post배열에 json데이터를 복사
      posts = [...json];
      // post생성 함수 호출
      json.forEach((post) => makePost(post));
    })
    .catch((error) => {
      // 에러메세지 출력
      console.error(error);
      const errorMessage = `<div>${error}</div>`;
      $(postGrid).append(errorMessage);
    });

  // 검색 이벤트
  $("#form").on("submit", function (e) {
    // 웹페이지 새로고침방지
    e.preventDefault();
    // 검색한 문자 데이터 반환
    const value = $("#search").val();
    // 게시글중 제목에 문자열을 포함한 게시글만 반환
    const filteredPosts = posts.filter((post) => post.title.includes(value));
    // 기존에 있던 요소를 비움
    $(postGrid).empty();
    // 검색된 게시글배열에서 다시 요소 생성
    filteredPosts.forEach((post) => makePost(post));
  });

  function clickPost(id) {
    //페이지를 이동할때 id값을 전달
    window.location.href = `detail.html?id=${id}`;
  }

  // 게시글 요소 생성 함수
  function makePost(post) {
    //div 태그 생성
    const postElement = $("<div></div>");
    // post-id라는 속성을 만들고 id값 넣기
    postElement.attr("post-id", post.id);
    // 클릭이벤트를 등록하여 id를 인수로 전달
    postElement.click(function () {
      // 이벤트함수 실행
      clickPost(post.id);
      // this 선택자를 사용하여 클릭한 요소의 post-id값을 가져옴
      clickPost($(this).attr("post-id"));
    });
    // 클래스 속성 삽입
    $(postElement).addClass("post-item");
    // 자식으로 제목데이터가 들어간 h2요소 삽입
    $(postElement).append(`<h2>${post.title}</h2>`);
    // 게시글 삽입
    $(postGrid).append(postElement);
  }
});
