document
  .querySelector(".hamburger")
  .addEventListener("click", toggleHamburger, false);

function toggleHamburger() {
  this.classList.toggle("is-active");
}
