$(function () {
  const sec1_offset = $(".sec01").offset().top;
  const scrollTop = $(window).scrollTop();
  // const clickTab = $("album_list").attr("data-tab");

  $(".pos").text(sec1_offset);




  $(".see_more").click(function () {
    $(".slide_container").css({
      opacity: "0",
      pointerEvents: "none",
    });
    $(".sub_btn.menu_btn").addClass("act");
    $("html, body").stop().animate({ scrollTop: "0" }, 500);
    return false;
  });

  // $(".sub_btn.menu_btn").click(function () {
  //   $(".sub_btn.menu_btn").toggleClass("blue");
  //   $(".menu_full").toggleClass("pop");
  //   $(".but_cursor").css({
  //     display: "block",
  //   });
  //   popSlide();
  // });

  // function popSlide() {
  //   if ($(".sub_btn.menu_btn").hasClass("act")) {
  //     slideVisible();
  //     $(".sub_btn.menu_btn").removeClass("act");
  //     $(".menu_full").removeClass("pop");
  //     $(".sub_btn.menu_btn").removeClass("blue");
  //   }
  // }

  $(".album_slide").slick({
    dots: false,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    initialSlide: 0,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".album_slide")
    .on("init", function (event, slick) {})
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      starList();
    })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      starList();
    });

  function list01() {
    $(".bg").css({
      backgroundImage: "url(../images/bg4.png)",
      backgroundColor: "#4f6259",
    });
    $(".frame,.frame02").css({
      borderColor: "#d5e8e1",
    });
    $(".slide_container .title h3").text("중경삼림");
    $(".slide_container .desc p").text("중경삼림 description");

    $(".more_desc").addClass("block");
    $(".more_desc.chungking").removeClass("block");
  }

  function list02() {
    $(".bg").css({
      backgroundImage: "url(../images/bg5.png)",
      backgroundColor: "#891212",
    });
    $(".frame,.frame02").css({
      borderColor: "#615944",
    });
    $(".slide_container .title h3").text("Fallen Angel");
    $(".slide_container .desc p").text("fallen angell description");
    $(".more_desc").removeClass("block");
    $(".more_desc.fallen").addClass("block");
  }

  function list03() {
    $(".bg").css({
      backgroundImage: "url(../images/bg3.png)",
      backgroundColor: "#2f3150",
    });
    $(".frame,.frame02").css({
      borderColor: "#aabab4",
    });
    $(".slide_container .title h3").text("Mood For Love");
    $(".slide_container .desc p").text("mood for love description");

    $(".more_desc").removeClass("block");
    $(".more_desc.mood").addClass("block");
  }

  function list04() {
    $(".bg").css({
      backgroundImage: "url(../images/bg2.png)",
      backgroundColor: "#4a422d",
    });
    $(".frame,.frame02").css({
      borderColor: "#4a422d",
    });
    $(".slide_container .title h3").text("2046");
    $(".slide_container .desc p").text("2046 description");

    $(".more_desc").removeClass("block");
    $(".more_desc.twenty").addClass("block");
  }

  function starList() {
    if ($(".slick01").hasClass("slick-active")) {
      list01();
    }
    if ($(".slick02").hasClass("slick-active")) {
      list02();
    }
    if ($(".slick03").hasClass("slick-active")) {
      list03();
    }
    if ($(".slick04").hasClass("slick-active")) {
      list04();
    }
  }

  // chungking

  $(".see_more").click(function () {
    $(".text_typing,.btn_nextPage i").addClass("ani");
  });
  $(".sec01 .btn_nextPage").click(function () {
    $(".sec01").css({
      opacity: "0",
      pointerEvents: "none",
      transform: "translateX(-20vw)",
    });
  });
  $(".sec02 .btn_nextPage").click(function () {
    $(".sec02").css({
      opacity: "0",
      pointerEvents: "none",
      transform: "translateX(-20vw)",
    });
  });
  $(".sec03 .btn_nextPage").click(function () {
    $(".sec03").css({
      opacity: "0",
      pointerEvents: "none",
      transform: "translateX(-20vw)",
    });
  });
  $(".sec04 .btn_nextPage").click(function () {
    slideVisible();
    $(".sec01,.sec02,.sec03").css({
      opacity: "",
      pointerEvents: "",
      transform: "translateX(0)",
    });
    $(".text_typing,.btn_nextPage i").removeClass("ani");
    $(".sub_btn.menu_btn").removeClass("act");
  });

  function slideVisible() {
    $(".slide_container").css({
      opacity: "",
      pointerEvents: "",
    });
  }
});
