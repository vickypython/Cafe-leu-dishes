const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const fragement = document.createDocumentFragment();
burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
