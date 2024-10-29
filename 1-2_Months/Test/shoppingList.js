const itemList = document.getElementById("list");
const result = document.getElementById("result");

// 상품 객체 생성
const tshirt = {
  name: "티셔츠",
  price: 20000,
};

const onepeice = {
  name: "원피스",
  price: 50000,
};

const cap = {
  name: "모자",
  price: 25000,
};

// 합계를 담을 변수 생성
let total = 0;

//상품 객체 배열에 담기
const shoppingList = [tshirt, onepeice, cap];

// 구매목록 배열 생성
let buyList = [];

shoppingList.forEach((item) => {
  // 각각의 태그생성 및 클래스 속성 넣기
  const li = document.createElement("li");
  li.setAttribute("class", "item");

  const image = document.createElement("img");
  // 이미지태그에 이미지경로 넣기
  image.setAttribute("src", `IMG/${item.name}.png`);
  image.setAttribute("class", "item-image");

  const name = document.createElement("span");
  name.setAttribute("class", "item-name");
  name.textContent = item.name;

  const price = document.createElement("span");
  price.setAttribute("class", "item-price");
  price.textContent = `${item.price}원`;

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", "numberInput");
  input.setAttribute("min", "0");
  
  const button = document.createElement("button");
  button.setAttribute("class", "item-add");
  button.textContent = "장바구니 담기";

  // 버튼 클릭이벤트 생성
  button.addEventListener("click", () => {
    const number = input.value;
    // 구매항목에서 현재 선택된 항목을 제외한 나머지를 배열에 다시 대입 
    buyList = buyList.filter((buyItem) => buyItem.name !== item.name);
    // 구매한 숫자만큼 배열에 넣기
    for (let i = 0; i < number; i++) {
      buyList.push(item);
    }
    // reduce를 사용하여 구매항목안에있는 상품객체의 총합 구하기
    const totalPrice = buyList.reduce((acc, cur) => acc + cur.price, 0);
    // result태그에 문자열값 넣기
    result.textContent = `총 구매금액: ${totalPrice}원`;
  });

  
  li.appendChild(image);
  li.appendChild(name);
  li.appendChild(price);
  li.appendChild(input);
  li.appendChild(button);
  itemList.appendChild(li);
});