(function () {
  //selectors
  const moveBody = document.querySelector(".body");
  const menu = document.querySelector(".side-menu");
  const btn = document.querySelector(".toggle");

  //Event handlers
  btn.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open");
    moveBody.classList.toggle("body-menu");
  });
})();
