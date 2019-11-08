// Moving the title on scroll
// if the window width > 1350px
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let w = window.innerWidth;
  let title = document.getElementById("logo");
  let header = document.getElementById("header");
  let currentScrollPos = window.pageYOffset;
  if (window.pageYOffset > 25) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.90)";
    header.style.boxShadow =
      "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }

  if (w < 1349) {
    title.style.left = "0px";
  } else if (window.pageYOffset > 25) {
    title.style.left = "0px";
  } else {
    title.style.left = "400px";
  }
  prevScrollpos = currentScrollPos;
};

// navigation starts here
$("#hamburger").click(function() {
  $("#mobile-menu").toggleClass("show");
  $("#mobile-menu").toggleClass("hide");
});

$("#mobile-menu .nav-link").click(function() {
  $("#mobile-menu").toggleClass("show");
  $("#mobile-menu").toggleClass("hide");
});
// navigation ends here
