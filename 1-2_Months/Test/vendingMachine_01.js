const products = [
    { name: "콜라", price: 2000 },
    { name: "사이다", price: 2000 },
    { name: "물", price: 1000 },
    { name: "커피", price: 2500 },
];

let insertedMoney = 0;

function renderProducts() {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} - ${product.price}원</span>
            <button onclick="buyProduct(${index})">구매</button>  
        `;
        productContainer.appendChild(productDiv);       //button onclick
    });
}

function insertMoney() {
    const moneyInput = document.getElementById("moneyInput");
    const money = parseInt(moneyInput.value);
    if (isNaN(money) || money <= 0) {       //입력한 meney값이 숫자가 아니거나, 0보다 작을경우
        alert("유효한 금액을 입력하세요.");   //경고창을 띄운다.
        return;            
    }
    insertedMoney += money;
    moneyInput.value = "";
    updateStatus(`현재 금액: ${insertedMoney}원`);
}

function buyProduct(index) {
    const product = products[index];
    if (insertedMoney >= product.price) {
        insertedMoney -= product.price;
        updateStatus(`${product.name} 구매 완료! 남은 금액: ${insertedMoney}원`);
    } else {
        updateStatus(`잔액이 부족합니다. ${product.price - insertedMoney}원이 더 필요합니다.`);
    }
}

function updateStatus(message) {
    const statusDiv = document.getElementById("status");
    statusDiv.textContent = message;
}

renderProducts();