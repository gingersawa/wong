$(function () {
  // nav
  let didscroll;
  let lastScrollTop = 0;
  const delta = 10;

  setInterval(function () {
    if (didscroll) {
      scroll_headerEvent();
      didscroll = false;
    }
  }, 200);
  $(window).on("scroll", function () {
    didscroll = true;
  });
  function scroll_headerEvent() {
    const scrollTop = $(this).scrollTop();
    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    }
    if (scrollTop > lastScrollTop && scrollTop > 0) {
      $(".nav").addClass("sticky");
    } else {
      if (scrollTop + $(window).innerHeight() < $(document).innerHeight()) {
        $(".nav").removeClass("sticky");
      }
    }

    lastScrollTop = scrollTop;
  }

  // click event


  // nav
  $(".nav.sub .fa-arrow-left").click(function () {
    window.history.back();
  });
  $(".nav.sub .fa-home").click(function (e) {
    e.preventDefault();
    window.location.href = "index.html";
  });


  
  $(".sub_btn.menu_btn").click(function () {
    $(".sub_btn.menu_btn").toggleClass("blue");
    $(".menu_full").toggleClass("pop");
    $(".but_cursor").css({
      display: "block",
    });
    popSlide();
  });

  function popSlide() {
    if ($(".sub_btn.menu_btn").hasClass("act")) {
      slideVisible();
      $(".sub_btn.menu_btn").removeClass("act");
      $(".menu_full").removeClass("pop");
      $(".sub_btn.menu_btn").removeClass("blue");
    }
  }


// menu_full
  $(".main_btn.menu_btn").click(function () {
    $(this).toggleClass("pop");
    $(".menu_full").toggleClass("pop");
    $(".but_cursor").css({
      display: "block",
    });
  });

  $(".menu_full li a").click(function(){
    $(".main_btn.menu_btn").removeClass("pop");
    $(".menu_full").removeClass("pop");
    // if((".main_btn.menu_btn").hasClass("pop")){
    // };
  })

  $(".fa-arrow-circle-up").on("click", function () {
    $("html, body").stop().animate({ scrollTop: "0" }, 500);
    return false;
  });

  // butter cursor
  $(window).on("mousemove", function (event) {
    let x, y;
    x = event.clientX;
    y = event.clientY;

    $(".but_cursor").css({
      transform: "translate(" + x + "px," + y + "px)",
    });
  });

  $("#intro,.menu_full").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  // loading

  
  $('#loading_sub').on("scroll touchmove mousewheel", function(event) { // 인트로에선 화면이동관련 중단
    event.preventDefault();
    event.stopPropagation();
    return false;
}).delay(1500).fadeOut(1000);

function reloadEvent() { // 새로고침시 인트로 반복 재생 중단
    const pageReload = window.performance
        .getEntriesByType("navigation")
        .map((nav) => nav.type)
        .includes("reload");

    if (pageReload === true) {
        $("#loading_sub").css("display", "none");

    } else {}
}

});
