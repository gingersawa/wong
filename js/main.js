$(function () {

    // $("#intro").delay(2500).fadeOut(1500); // 인트로 선택자 활용이 중복될경우 아래와 같이 사용
    // $(인트로).on("스크롤", function () {
    //
    // }).delay().fadeOut(); // << 이부분

    $('#intro').on("scroll touchmove mousewheel", function(event) { // 인트로에선 화면이동관련 중단
        event.preventDefault();
        event.stopPropagation();
        return false;
    }).delay(2500).fadeOut(1500);

    function reloadEvent() { // 새로고침시 인트로 반복 재생 중단
        const pageReload = window.performance
            .getEntriesByType("navigation")
            .map((nav) => nav.type)
            .includes("reload");

        if (pageReload === true) {
            $("#intro").css("display", "none");

        } else {}
    }


    function scrollAnimation() { // 스크롤 이벤트

        const sec2_offset = $(".sec2").offset().top;
        const pic_offset = $(".wong_pic img").offset().top;
        const chap01_offset = $(".chap01").offset().top;
        const chap02_offset = $(".chap02").offset().top;
        const chap03_offset = $(".chap03").offset().top;
        const chap03_height = $(".chapter.chap03").innerHeight();
        const num_width = $(".num_wrap span").outerWidth();
        const poster_height = $(".poster_wrap img").innerHeight();
        const desc_width = $(".desc_wrap .desc").innerWidth();
        const mov_width = $(".mov_wrap h1").outerWidth();

        const sec3_offset = $(".sec3").offset().top;
        const sec3_height = $(".sec3").innerHeight();
        const sec4_offset = $(".sec4").offset().top;
        const sec5_offset = $(".sec5").offset().top;

        const windowHeight = $(window).innerHeight();
        const sec1_offset = $(".sec1").offset().top;

        const scrollTop = $(this).scrollTop();
        const pic_scrollTop = scrollTop - pic_offset;

        const per_chap03 =
            ((scrollTop - chap03_offset) / (chap03_height - windowHeight)) * 100;
        const per_sec03 = (scrollTop - sec3_offset) / (sec3_height - windowHeight);

        $(".pos").text(per_sec03);

        /* ---*-**||sec2 start||**-*--- */
        /* -- ssec2 el01 -- */
        if (scrollTop > sec1_offset + windowHeight * 0.4) {
            $(".sec2 .spread_title h2").css({
                opacity: "1",
                width: "100%",
            });
        } else {
            $(".sec2 .spread_title h2").css({
                opacity: "",
                width: "",
            });
        }

        /* -- sec2 el02 -- */
        /* sec2 wong-pic << side / center >> */

        /* -----sec2_chap01----- */
        if (scrollTop > sec1_offset + windowHeight * 0.6) {
            $(".pic_01").css({
                transform:
                    "translate(" +
                    -pic_scrollTop * 0.15 +
                    "px," +
                    -pic_scrollTop * 0.15 +
                    "px) rotate(-15deg)",
                opacity: "1",
            });

            $(".pic_02").css({
                transform:
                    "translate(" +
                    pic_scrollTop * 0.1 +
                    "px," +
                    -pic_scrollTop * 0.33 +
                    "px) rotate(10deg)",
                opacity: "1",
            });

            $(".side_desc.side_chap01 img:nth-of-type(1)").css({
                transform: "translateY(" + -pic_scrollTop * 0.1 + "px)",
            });

            $(".side_desc.side_chap01 img:nth-of-type(2)").css({
                transform: "translateY(" + -pic_scrollTop * 0.2 + "px)",
            });
        } else {
            $(".pic_01").css({
                transform: "",
                opacity: "",
            });
            $(".pic_02").css({
                transform: "",
                opacity: "",
            });

            $(".side_desc.side_chap01 img:nth-of-type(1)").css({
                transform: "",
            });

            $(".side_desc.side_chap01 img:nth-of-type(2)").css({
                transform: "",
            });
        }

        if (scrollTop > sec1_offset + windowHeight * 0.8) {
            $(".chap01 .chap_desc").css({
                opacity: "0.4",
            });

            $(".side_desc.side_chap01 p").css({
                transform: "translateY(0px)",
                opacity: "1",
            });
        } else {
            $(".chap01 .chap_desc").css({
                opacity: "",
            });

            $(".side_desc.side_chap01 p").css({
                transform: "",
                opacity: "",
            });
        }

        /* -----sec2_chap02----- */

        if (scrollTop > chap02_offset - windowHeight * 0.4) {
            $(".pic_03").css({
                transform:
                    "translate(" +
                    pic_scrollTop * 0.11 +
                    "px," +
                    -pic_scrollTop * 0.12 +
                    "px) rotate(10deg)",
                opacity: "1",
            });

            $(".pic_04").css({
                transform:
                    "translate(" +
                    -pic_scrollTop * 0.08 +
                    "px," +
                    -pic_scrollTop * 0.08 +
                    "px) rotate(-10deg)",
                opacity: "1",
            });
            // $(".chap02 .chap_desc").css({
            //   clipPath: "circle(" + pic_scrollTop * 0.08 + "% at center)",
            // });
            $(".chap02 .chap_desc").css({
                opacity: "0.4",
            });
        } else {
            $(".pic_03").css({
                transform: "",
                opacity: "",
            });
            $(".pic_04").css({
                transform: "",
                opacity: "",
            });
            $(".chap02 .chap_desc").css({
                clipPath: "",
            });
        }

        if (scrollTop > chap02_offset - windowHeight * 0.2) {
            $(".side_desc.side_chap02 img:nth-of-type(1)").css({
                right: "-20%",
                top: "40%",
            });

            $(".side_desc.side_chap02 img:nth-of-type(2)").css({
                right: "10%",
                top: "45%",
            });
            $(".side_desc.side_chap02 img:nth-of-type(3)").css({
                right: "5%",
                top: "65%",
            });

            $(".side_desc.side_chap02 img:nth-of-type(4)").css({
                right: "-20%",
                top: "52%",
            });

            $(".chap02 .chap_desc").css({
                opacity: "0.4",
            });

            $(".side_desc.side_chap02 p").css({
                transform: "translateY(0px)",
                opacity: "1",
            });
        } else {
            $(
                ".side_desc.side_chap02 img:nth-of-type(1),.side_desc.side_chap02 img:nth-of-type(2),.side_desc.side_chap02 img:nth-of-type(3),.side_desc.side_chap02 img:nth-of-type(4)"
            ).css({
                right: "",
                top: "",
            });

            $(".chap02 .chap_desc").css({
                opacity: "",
            });

            $(".side_desc.side_chap02 p").css({
                transform: "",
                opacity: "",
            });
        }

        /* -----sec2_chap03----- */
        /* ----- poster slide scroll << side / center >> ----- */

        if (scrollTop > chap03_offset) {
            $(".poster_slide, .year_slide, .movie_slide").css({
                position: "fixed",
            });
            $(".year_slide").css({
                left: "4.215vw",
            });
            $(".movie_slide").css({
                right: "4.215vw",
            });
        } else {
            $(".poster_slide, .year_slide").css({
                position: "",
                top: "0",
                left: "",
            });
            $(".movie_slide").css({
                position: "",
                top: "0",
                right: "",
            });
        }
        // 열혈남아
        if (per_chap03 < 10) {
            $(".no-1 .num_wrap span ").css({
                transform: "translate(" + -num_width * 8 + "px, 0px)",
            });
            $(".poster_wrap img").css({
                transform: "",
            });
            $(".desc_wrap .desc").css({
                transform: "",
            });
            $(".mov_wrap h1").css({
                transform: "",
            });
        } else {
        }
        // 아비정전
        if (per_chap03 > 10) {
            $(".no-10 .num_wrap span ").css({
                transform: "translate(" + -num_width * 1 + "px, 0px)",
            });
            $(".no-1 .num_wrap span ").css({
                transform: "",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 1 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 1 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 1 + "px, 0px)",
            });
        } else {
            $(".no-10 .num_wrap span ").css({
                transform: "",
            });
        }
        // 동서사독
        if (per_chap03 > 20) {
            $(".no-1 .num_wrap span ").css({
                transform: "translate(" + -num_width * 4 + "px, 0px)",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 2 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 2 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 2 + "px, 0px)",
            });
        } else {
        }
        // 중경삼림
        if (per_chap03 > 30) {
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 3 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 3 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 3 + "px, 0px)",
            });
        } else {
        }
        // 타락천사
        if (per_chap03 > 40) {
            $(".no-1 .num_wrap span ").css({
                transform: "translate(" + -num_width * 5 + "px, 0px)",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 4 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 4 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 4 + "px, 0px)",
            });
        } else {
        }
        // 춘광사설

        if (per_chap03 > 50) {
            $(".no-1 .num_wrap span ").css({
                transform: "translate(" + -num_width * 7 + "px, 0px)",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 5 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 5 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 5 + "px, 0px)",
            });
        } else {
        }
        // 화양연화

        if (per_chap03 > 60) {
            $(".no-1000 .num_wrap span ").css({
                transform: "translate(" + -num_width * 1 + "px, 0px)",
            });
            $(".no-100 .num_wrap span ").css({
                transform: "translate(" + -num_width * 1 + "px, 0px)",
            });
            $(".no-10 .num_wrap span ").css({
                transform: "translate(" + -num_width * 2 + "px, 0px)",
            });
            $(".no-1 .num_wrap span ").css({
                transform: "",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 6 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 6 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 6 + "px, 0px)",
            });
        } else {
            $(".no-1000 .num_wrap span ").css({
                transform: "",
            });
            $(".no-100 .num_wrap span ").css({
                transform: "",
            });
        }
        // 2046

        if (per_chap03 > 70) {
            $(".no-1 .num_wrap span ").css({
                transform: "translate(" + -num_width * 4 + "px, 0px)",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 7 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 7 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 7 + "px, 0px)",
            });
        } else {
        }
        // 마이블루베리

        if (per_chap03 > 80) {
            $(".no-1 .num_wrap span ").css({
                transform: "translate(" + -num_width * 7 + "px, 0px)",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 8 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 8 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 8 + "px, 0px)",
            });
        } else {
        }
        // 일대종사
        if (per_chap03 > 90) {
            $(".no-10 .num_wrap span ").css({
                transform: "translate(" + -num_width * 3 + "px, 0px)",
            });
            $(".no-1 .num_wrap span ").css({
                transform: "translate(" + -num_width * 3 + "px, 0px)",
            });
            $(".poster_wrap img").css({
                transform: "translate(0px, " + -poster_height * 9 + "px)",
            });
            $(".desc_wrap .desc").css({
                transform: "translate(" + -desc_width * 9 + "px, 0px)",
            });
            $(".mov_wrap h1").css({
                transform: "translate(" + -mov_width * 9 + "px, 0px)",
            });
        } else {
        }

        /* ---*-**|| sec3 start ||**-*--- */

        if (scrollTop > sec3_offset - windowHeight) {
            $(".poster_slide, .year_slide, .movie_slide").css({
                position: "",
                top: "inherit",
                bottom: 0,
            });
            $(".year_slide").css({
                left: "",
            });
            $(".movie_slide").css({
                right: "",
            });
        }

        if (scrollTop > sec3_offset) {
            $(".scrap_wrap").css({
                position: "fixed",
            });
        } else {
            $(".scrap_wrap").css({
                position: "",
                top: "0",
                bottom: "inherit",
            });
        }

        if (per_sec03 > 0) {
            $(".scr_01").css({
                transform: "scale(" + (0.5 + per_sec03) * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_01").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.1) {
            $(".scr_01").css({
                opacity: "0",
            });
            $(".scr_02").css({
                transform: "scale(" + (0.5 + per_sec03) * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_02").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.2) {
            $(".scr_02").css({
                opacity: "0",
            });
            $(".scr_03").css({
                transform: "scale(" + (0.4 + per_sec03) * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_03").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.3) {
            $(".scr_03").css({
                opacity: "0",
            });
            $(".scr_04").css({
                transform: "scale(" + (0.4 + per_sec03) * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_04").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.4) {
            $(".scr_04").css({
                opacity: "0",
            });
            $(".scr_05").css({
                transform: "scale(" + (0.3 + per_sec03) * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_05").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.5) {
            $(".scr_05").css({
                opacity: "0",
            });
            $(".scr_06").css({
                transform: "scale(" + (0.2 + per_sec03) * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_06").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.6) {
            $(".scr_06").css({
                opacity: "0",
            });
            $(".scr_07").css({
                transform: "scale(" + (0.1 + per_sec03) * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_07").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.7) {
            $(".scr_07").css({
                opacity: "0",
            });
            $(".scr_08").css({
                transform: "scale(" + per_sec03 * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_08").css({
                opacity: "0",
            });
        }
        if (per_sec03 > 0.8) {
            $(".scr_08").css({
                opacity: "0",
            });
            $(".scr_09").css({
                transform: "scale(" + per_sec03 * 3 + ")",
                opacity: "1",
            });
        } else {
            $(".scr_09").css({
                opacity: "0",
            });
        }
        if (per_sec03 >= 0.9) {
            $(".scr_09").css({
                opacity: "0",
            });
            $(".scr_10").css({
                transform: "scale(" + per_sec03 * 3 + ")",
                opacity: "1",
            });
        } else {
            if (per_sec03 < 0.9) {
                $(".scr_10").css({
                    opacity: "0",
                });
            }
        }

        if (scrollTop > sec3_offset + windowHeight * 0.4) {
            $(".sec4 .spread_title h2").css({
                opacity: "1",
                width: "100%",
            });
        } else {
            $(".sec5 .spread_title h2").css({
                opacity: "",
                width: "",
            });
        }
        /* ---*-**|| sec4 start ||**-*--- */

        if (scrollTop > sec4_offset - windowHeight) {
            $(".scrap_wrap").css({
                position: "",
                top: "inherit",
                bottom: 0,
            });
            // $(".scr_10").css({
            //   transform: "scale(inherit)",
            // });
        }

        if (scrollTop > sec4_offset) {
            $(".but_cursor").css({
                display: "block",
            });
        } else {
            $(".but_cursor").css({
                display: "none",
            });
        }

        /* ---*-**|| sec5 start ||**-*--- */
        if (scrollTop > sec4_offset + windowHeight * 0.4) {
            $(".sec5 .spread_title h2").css({
                opacity: "1",
                width: "100%",
            });
        } else {
            $(".sec5 .spread_title h2").css({
                opacity: "",
                width: "",
            });
        }

    }
    

    // 클릭 이벤트 함수 내용 확인
    function clickAnimation() { // 클릭 이벤트

        // sec4
        $(".ro_f01,.ro_f02,.ro_f03,.ro_f04").click(function (e) {
            e.preventDefault();
            window.location.href = "sub_movies.html";
        });


        // 마우스 leave 공통
        function mouseLeaveEvent() {
            $(this).parent(".film_wrap").css({
                backgroundImage: "",
                backgroundColor: "",
            });
        }
        $(".ro_f01, .ro_f02, .ro_f03, .ro_f04").on("mouseleave", mouseLeaveEvent);


        // f03, f04 도 아래와 같이 사용
        $(".ro_f01").on("mouseenter", function () {
            $(this).parent(".film_wrap").css({
                backgroundImage: "url(../images/bg4.png)",
                backgroundColor: "#D5E8E1",
            });
        });

        $(".ro_f02").on("mouseenter", function () {
            $(this).parent(".film_wrap").css({
                backgroundImage: "url(../images/bg5.png)",
                backgroundColor: "#891212",
            });
        });




        // $(".ro_f02").mouseleave(function () {
        //     $(this).parent(".film_wrap").css({
        //         backgroundImage: "",
        //         backgroundColor: "",
        //     });
        // });

        // $(".ro_f01").on({
        //     mouseenter: function () {
        //         $(this).parent(".film_wrap").css({
        //             backgroundImage: "url(../images/bg4.png)",
        //             backgroundColor: "#D5E8E1",
        //         });
        //     },
        //     mouseleave: mouseLeaveEvent
        // });

        // $(".ro_f01").mouseenter(function () {
        //     $(this).parent(".film_wrap").css({
        //         backgroundImage: "url(../images/bg4.png)",
        //         backgroundColor: "#D5E8E1",
        //     });
        // });
        // $(".ro_f01").mouseleave(function () {
        //     $(this).parent(".film_wrap").css({
        //         backgroundImage: "",
        //         backgroundColor: "",
        //     });
        // });


        $(".ro_f03").mouseenter(function () {
            $(this).parent(".film_wrap").css({
                backgroundImage: "url(../images/bg3.png)",
                backgroundColor: "#2F3150",
            });
        });
        $(".ro_f03").mouseleave(function () {
            $(this).parent(".film_wrap").css({
                backgroundImage: "",
                backgroundColor: "",
            });
        });
        $(".ro_f04").mouseenter(function () {
            $(this).parent(".film_wrap").css({
                backgroundImage: "url(../images/bg2.png)",
                backgroundColor: "#532E13",
            });
        });
        $(".ro_f04").mouseleave(function () {
            $(this).parent(".film_wrap").css({
                backgroundImage: "",
                backgroundColor: "",
            });
        });

        // sec5
        // $(".audio_controler .fas,.rr_album").click(function () {
        //   $(".rec_pop").css({ display: "block" }).delay(1000).fadeOut(1500);
        // });
        $(".rec_01").click(function () {
            $(".rec_pop.pop_01").css({display: "block"}).delay(1000).fadeOut(1500);
            $(".slide_container .bg").css({
                backgroundImage: "",
                backgroundColor: "",
            });
            $(".frame,.frame02").css({
                borderColor: "#d5e8e1",
            });
            document.getElementById("album").src = "images/record/album_01.png";
            document.getElementById("clip_video").src = "video/chungking_02.m4v";
            $(this).children("img").addClass("jump");
            $(this).siblings(".rr_album").children("img").removeClass("jump");
        });
        $(".rec_02").click(function () {
            $(".rec_pop.pop_02").css({display: "block"}).delay(1000).fadeOut(1500);
            $(".slide_container .bg").css({
                backgroundImage: "url(../images/bg5.png)",
                backgroundColor: "#891212",
            });
            $(".frame,.frame02").css({
                borderColor: "#615944",
            });
            document.getElementById("album").src = "images/record/album_02.png";
            document.getElementById("clip_video").src = "video/chungking.m4v";

            $(this).children("img").addClass("jump");
            $(this).siblings(".rr_album").children("img").removeClass("jump");
        });
        $(".rec_03").click(function () {
            $(".rec_pop.pop_03").css({display: "block"}).delay(1000).fadeOut(1500);
            $(".slide_container .bg").css({
                backgroundImage: "url(../images/bg3.png)",
                backgroundColor: "#2F3150",
            });
            $(".frame,.frame02").css({
                borderColor: "#aabab4",
            });
            document.getElementById("album").src = "images/record/album_03.png";
            $(this).children("img").addClass("jump");
            $(this).siblings(".rr_album").children("img").removeClass("jump");
        });
        $(".rec_04").click(function () {
            $(".rec_pop.pop_04").css({display: "block"}).delay(1000).fadeOut(1500);
            $(".slide_container .bg").css({
                backgroundImage: "url(../images/bg2.png)",
                backgroundColor: "#532E13",
            });
            $(".frame,.frame02").css({
                borderColor: "#4a422d",
            });
            document.getElementById("album").src = "images/record/album_04.png";
            $(this).children("img").addClass("jump");
            $(this).siblings(".rr_album").children("img").removeClass("jump");
        });

    }

    reloadEvent(); // 리로드 이벤트는 resize에 넣지 말것!
    clickAnimation();

    $(window).on("scroll", function () {
        if ( $(window).innerWidth() > 1000 ) { // 예시
            scrollAnimation();
        }
    });

    $(window).on("resize", function () {
        scrollAnimation();
        clickAnimation();
    });

    [...document.querySelectorAll(".roll_film")].map((column) => {
        column.style.setProperty("--animation", "film_roll_ani");
        column.style.setProperty("width", "100%");
        column.innerHTML = column.innerHTML + column.innerHTML;
    });
    //mouseover+click
});
