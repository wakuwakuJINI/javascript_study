/**
 * fetch()
 * 1.api 주소
 * 2.옵션(method,headers,body등
 * 요청에 성공하면 response 객체를 반환
 * response.json() :데이터를 자바스크립트 객체로 반환한다.
 */

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // console.log(response);
    

    if (response.ok) {
        if (response.status === 404) {
            return Promise.reject("연결되지 않았습니다");
          }
      return response.json();
    } else {
      return Promise.reject("데이터를 받을 수가 없습니다");
    }
  })
  .then((data) => {
    console.log(data.body);
  })
  .catch((error) => {
    console.log(error);
  });
