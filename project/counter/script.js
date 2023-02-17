const decreaseFn = function () {
  document.getElementById("value").textContent =
    document.getElementById("value").textContent - 1;
  textColor();
};

const increaseFn = function () {
  document.getElementById("value").textContent =
    parseInt(document.getElementById("value").textContent) + 1;
  textColor();
};

const resetFn = function () {
  document.getElementById("value").textContent = 0;
  textColor();
};

const textColor = function () {
  if (document.getElementById("value").textContent > 0) {
    document.getElementById("value").style.color = "green";
  } else if (document.getElementById("value").textContent < 0) {
    document.getElementById("value").style.color = "red";
  } else {
    document.getElementById("value").style.color = "black";
  }
};
