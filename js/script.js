$(document).ready(function () {
  // Initialize wow js
  new WOW().init();
});

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  let windowWidth = $(window).width();
  console.log("scrollTop", scrollTop);
  if (windowWidth > 600) {
    if (scrollTop > 200) {
      $("#header-section").addClass("sticky");
    } else {
      $("#header-section").removeClass("sticky");
    }
  }
});

$(window).resize(function () {
  loadScreen();
});

loadScreen();

function loadScreen() {
  let windowWidth = $(window).width();
  if (windowWidth < 600) {
    $("#header-section").addClass("sticky");
  } else {
    $("#header-section").removeClass("sticky");
  }
}

$(".menu-icon").click(function () {
  if ($("#mobile-menu").hasClass("collapsed")) {
    $("#mobile-menu").removeClass("collapsed");
    $("#mobile-menu").addClass("d-none").removeClass("d-block");
  } else {
    $("#mobile-menu").addClass("collapsed");
    $("#mobile-menu").removeClass("d-none").addClass("d-block");
  }
});
