//뉴스 가지고 오는 함수

const API_KEY = `ed8bb8a7b9c24d08bff4371d1b910926`;
let newsList = [];
const menus = document.querySelectorAll(".menus button");

menus.forEach((menu) =>
  menu.addEventListener("click", (e) => getNewsByCategory(e))
);
/*
document
  .getElementById("search-input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      getNewsByKeyword();
      e.preventDefault();
      this.value = "";
    }
  });
*/
document.getElementById("search-input").addEventListener("focus", function () {
  this.value = "";
});

//코드리팩토링하면서 url 전역변수로 넘김
let url = new URL(
  `http://localhost:3000/top-headlines?country=us&apiKey=${API_KEY}`
);

let totalResults = 0;
let page = 1;
const pageSize = 10; //한페이지에 보여주고자 하는 컨텐츠 수
const groupSize = 5; //한페이지에 보여주고자하는 페이지 버튼 개수 ex) 1~5:1그룹/6~10:2그룹)

//반복되는 async,await 부분 새로운 함수로 만들어주고, try-catch로 변경.
const getNews = async () => {
  try {
    url.searchParams.set("page", page); //=> &page={page}
    url.searchParams.set("pageSize", pageSize);

    const response = await fetch(url);
    const data = await response.json();

    if (response.status === 200) {
      if (data.articles.length === 0) {
        throw new Error("No result for this search");
      }
      newsList = data.articles;
      totalResults = data.totalResults;
      render();
      paginationRender();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    errorRender(error.message);
  }
};
//첫페이지 렌더링 = > 최신뉴스리스트 보여주는 함수
async function getLatestNews() {
  url = new URL(
    `http://localhost:3000/top-headlines?country=us&apiKey=${API_KEY}`
  );
  getNews();
}

//카테고리 click 했을때 해당하는 뉴스가 나오는 함수
const getNewsByCategory = async (e) => {
  const category = e.target.textContent.toLowerCase();
  url = new URL(
    `http://localhost:3000/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );

  getNews();
};
//검색창에 keyword 입력했을때 해당하는 뉴스 나오는 함수
const getNewsByKeyword = async () => {
  const keyword = document.getElementById("search-input").value;
  url = new URL(
    `http://localhost:3000/everything?&q=${keyword}&apiKey=${API_KEY}`
  );

  getNews();
};
//날짜선택했을때 뉴스 나오는 함수
const getNewsByDate = async (e) => {
  const keyword = $("#search-input").val();
  const date = $("#datePicker").datepicker("getDate");
  const formattedDate = moment(date).format("YYYY-MM-DD");

  url = new URL(
    `http://localhost:3000/everything?keyword=${keyword}&from=${formattedDate}&to=${formattedDate}&apiKey=${API_KEY}`
  );

  getNews();
};

const render = () => {
  const newsHTML = newsList
    .map(
      (news) => `<div class="row news">
          <div class="col-lg-4">
            <img                                 
              class="news-img-size"
              src="${news.urlToImage}"/>
          </div>
          <div class="col-lg-8">
            <h2>
             ${news.title}
            </h2>
            <p>
              ${news.description}
            </p>
            <div class="newsDate">${news.source.name}*${news.publishedAt}</div>
          </div>
        </div>`
    )
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};

//error 메시지 나오는 함수
const errorRender = (errorMessage) => {
  const errorHTML = `<div class="alert alert-danger" role="alert">
  ${errorMessage}
  </div>`;
  document.getElementById("news-board").innerHTML = errorHTML;
};

//페이지네이션
const paginationRender = () => {
  const totalPages = Math.ceil(totalResults / pageSize); //총 페이지개수
  const pageGroup = Math.ceil(page / groupSize);

  let lastPage = pageGroup * groupSize;
  //만약, 마지막 페이지그룹이 그룹사이즈보다 작을때
  if (lastPage > totalPages) {
    lastPage = totalPages;
  }
  //const firstPage = lastPage-(groupSize-1) <=0 ? 1 : lastPage-(groupSize-1) 도 가능
  //첫번째 페이지가 0으로 나와서 수정했음.
  const firstPage = (pageGroup - 1) * groupSize + 1;

  let paginationHTML = `<li class="page-item" onclick="moveToPage(${
    page - 1
  })"><a class="page-link">Previous</a></li>`;
  for (let i = firstPage; i <= lastPage; i++) {
    paginationHTML += `
      <li class="page-item ${
        i === page ? "active" : ""
      }" onclick="moveToPage(${i})">
        <a class="page-link">
          ${i}
        </a>
      </li>`;
  }
  paginationHTML += `<li class="page-item" onclick="moveToPage(${
    page + 1
  })"><a class="page-link">Next</a></li>`;

  document.querySelector(".pagination").innerHTML = paginationHTML;
};

const moveToPage = (pageNum) => {
  page = pageNum;
  getNews();
};
getLatestNews();
