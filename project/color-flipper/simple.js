const color = ["green", "red", "rgba(133,122,200)", "#f15025"];

const changeColor = function () {
  const randomNumber = Math.round(Math.random() * (color.length - 1));
  document.getElementById("color").textContent = color[randomNumber];
  document.querySelector("main").style.backgroundColor = color[randomNumber];
};
