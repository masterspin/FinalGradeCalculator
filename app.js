const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const current = document.querySelector(".current").value;
  const desired = document.querySelector(".desired").value;
  const weight = document.querySelector(".weight").value;

  num = (desired - ((100-weight)/100)*(current))/(weight/100);
  lowest = "Minimum Score Needed: " + Math.round(num*100)/100 + "%";

  const randomNumEl = document.querySelector(".randomNumEl");
  randomNumEl.innerHTML = lowest;
}
