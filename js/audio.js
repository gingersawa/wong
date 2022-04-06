$(function () {
    let currentAudio = 1;
    let track_count = 7;

    const btnPlay = $(".fa-play");
    const btnPause = $(".fa-pause");
    const btnMute = $(".fa-volume-mute");
    const btnVolume = $(".fa-volume-up");
    const btnPrev = $(".fa-step-backward");
    const btnNext = $(".fa-step-forward");

    // btnPlay.click(function () {
    //     myAudio.play();
    // });

    //
    //
    // btnMute.click(function () {
    //     myAudio.muted = "true";
    // });
    // btnVolume.click(function () {
    //     myAudio.muted = "false";
    // });
    //


    const myAudio = $("#myAudio")[0];

    btnPause.click(function () {
        myAudio.pause();
    });

    btnPrev.click(function () {
        clickPrevAudio();
    });

    btnNext.click(function () {
        clickNextAudio();
    });


    function loadAudio() {
        myAudio.src = "audio/sample_" + currentAudio + ".wav";
        // myAudio.src = `audio/sample_${currentAudio}.wav`;
        myAudio.play();
    }

    function clickPrevAudio() {
        if (currentAudio > 1) {
            currentAudio--;
        } else {
            currentAudio = 1;
        }
        loadAudio();
    }

    function clickNextAudio() {
        if (currentAudio < track_count) {
            currentAudio++;
        } else {
            currentAudio = 1;
        }
        loadAudio();
    }

    // console.log(currentAudio);
    // const myAudio = new Audio();
    // myAudio.src = "audio/sample_" + currentAudio + ".wav";

    // $("#myAudio source").attr("src", myAudio.src);
});
