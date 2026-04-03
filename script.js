let qty = 1;

const minusBtn = document.querySelectorAll(".qty-box button")[0];
const plusBtn = document.querySelectorAll(".qty-box button")[1];
const input = document.querySelector(".qty-box input");

minusBtn.onclick = () => {
  if (qty > 1) qty--;
  input.value = qty;
};

plusBtn.onclick = () => {
  qty++;
  input.value = qty;
};