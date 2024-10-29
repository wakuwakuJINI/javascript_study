// vendingMachine.js
document.addEventListener('DOMContentLoaded', () => {
  let currentAmount = 0;

  const messageElement = document.getElementById('message');
  const currentAmountElement = document.getElementById('current-amount');
  const moneyInputElement = document.getElementById('money-input');
  const insertMoneyButton = document.getElementById('insert-money');
  const productButtons = document.querySelectorAll('.product');

  insertMoneyButton.addEventListener('click', () => {
      const amount = parseInt(moneyInputElement.value, 10);
      if (isNaN(amount) || amount <= 0) {
          messageElement.textContent = '유효한 금액을 입력하세요.';
      } else {
          currentAmount += amount;
          currentAmountElement.textContent = currentAmount;
          messageElement.textContent = '제품을 선택하세요.';
          moneyInputElement.value = '';
      }
  });

  productButtons.forEach(button => {
      button.addEventListener('click', () => {
          const price = parseInt(button.getAttribute('data-price'), 10);
          const productName = button.textContent.split(' - ')[0];

          if (currentAmount >= price) {
              currentAmount -= price;
              currentAmountElement.textContent = currentAmount;
              messageElement.textContent = `${productName}가 나왔습니다.`;
          } else {
              messageElement.textContent = '잔액이 부족합니다. 돈을 더 투입하세요.';
          }
      });
  });
});
