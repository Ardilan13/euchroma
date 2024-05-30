window.onload = function () {
  document.getElementById("menuButton").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });

  document.getElementById("menu").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.add("hidden");
  });
};
