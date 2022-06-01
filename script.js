const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const closed = document.getElementById("closed");

//For Mobile nav Bar
if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

//For Closed Icon
if (closed) {
  closed.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
