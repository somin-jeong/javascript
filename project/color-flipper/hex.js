const changeColor = function () {
  let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  document.getElementById("color").textContent = colorCode;
  document.querySelector("main").style.backgroundColor = colorCode;
};
