const menuLinkEls = document.querySelectorAll(".header-list-item");
const menuItemEls = document.querySelectorAll(".header-item");

menuLinkEls.forEach((menuLinkEl) => {
  menuLinkEl.addEventListener("click", () => toggleActive(menuLinkEl));
});

menuItemEls.forEach((menuItemEl) => {
  menuItemEl.addEventListener("click", () => toggleActive(menuItemEl));
});

function toggleActive(item) {
  document.querySelector(".active")?.classList.remove("active");
  item.classList.add("active");
}
