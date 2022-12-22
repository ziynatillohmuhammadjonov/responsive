const headerWrapper = document.querySelector(".header__wrapper");
const headerToggleBtn = document.querySelector(".header__toggle-btn");
const headerWraperBtn = document.querySelector(".header__wrapper-btn");
headerToggleBtn.addEventListener("click", () => {
  headerWrapper.classList.add("show-nav");
});
headerWraperBtn.addEventListener("click", () => {
  headerWrapper.classList.remove("show-nav");
});
