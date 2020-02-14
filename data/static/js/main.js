const
  $ = x => document.getElementById(x),
  menuBtn = $("hamburger"),
  closeMenuBtn = $("close-menu"),
  nav = $("nav");

document.querySelector(`nav>div a[href="${window.location.pathname}"]`)
  .classList
  .add("active");


window.onscroll = () => {
  if (window.scrollY > 0) {
    nav
      .classList
      .add("scrolling");
  } else {
    nav
      .classList
      .remove("scrolling");
  }
}

menuBtn.onclick = () => {
  document
    .body
    .classList
    .add("nav-out");
}

closeMenuBtn.onclick = () => {
  document
    .body
    .classList
    .remove("nav-out");
}