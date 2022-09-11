$(".mngld-video video").prop("volume", 0.3);
$(".mngld-video video").prop("controls", false);

if ($(window).width() > 992) {
  $(".mngld-video .fullscreen").on("click", function () {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      $(this).parents(".mngld-video").removeClass("already-fullscreen");
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      element = $(this).parents(".mngld-video").get(0);
      $(this).parents(".mngld-video").addClass("already-fullscreen");
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  });
  $(".progress").on("hover mouseover mousemove", function () {
    let w = this.offsetWidth;
    let o = event.pageX - $(".progress").offset().left;
    $(this)
      .find(".progress-selector")
      .css("left", (100 * o) / w + "%");
  });

  $(".progress").on("mouseenter", function () {
    $(this).find(".progress-selector").fadeIn("fast");
  });

  $(".progress").on("mouseleave", function () {
    $(this).find(".progress-selector").fadeOut("fast");
  });
} else {
  $(".mngld-video .fullscreen").on("click", function () {
    video = $(this).parents(".mngld-video").find("video").get(0);
    if (video.requestFullScreen) {
      video.requestFullScreen();
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      vid.msRequestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  });
}

$(".mngld-video .trigger").click(function () {
  let video = $("#video").get(0);
  if (video.paused) {
    console.log("video paused");
    $(this).addClass("pause");
    $(this).removeClass("play");
    $(this).parent().siblings("video").trigger("play");
  } else {
    console.log("video played");
    $(this).addClass("play");
    $(this).removeClass("pause");
    $(this).parent().siblings("video").trigger("pause");
  }
});

$(".mngld-video .mute").click(function () {
  if ($(this).hasClass("muted")) {
    $(".mngld-video video").prop("muted", false);
    $(this).removeClass("muted");
  } else {
    $(".mngld-video video").prop("muted", true);
    $(this).addClass("muted");
  }
});

function countUp(max, time) {
  let num = 10;
  let step = time / max;
  let fn = function () {
    num++;
    if (num <= max) {
      $(".mngld-video").find(".millisecond").text(num);
      window.setTimeout(fn, step);
    }
  };

  fn();
}

$(".mngld-video video").bind("timeupdate", function () {
  let pos = this.currentTime / this.duration;
  $(this)
    .parent()
    .find(".progress-line")
    .width(pos * 100 + "%");
  let time = this.currentTime;
  let h = Math.floor(time / 3600);
  time = time - h * 3600;
  let m = Math.floor(time / 60);
  let s = Math.floor(time % 60);
  // let ms = Math.floor(time * 1000 % 60);
  if (h.toString().length < 2) {
    h = "0" + h;
  }
  if (m.toString().length < 2) {
    m = "0" + m;
  }
  if (s.toString().length < 2) {
    s = "0" + s;
  }
  // if(ms.toString().length<2){ms='0'+ms;}
  $(this).parent().find(".hours").text(h);
  $(this).parent().find(".minutes").text(m);
  $(this).parent().find(".seconds").text(s);
  // $(this).parent().find(".millisecond").text(ms);
  countUp(99, 1000);
});

(function ($) {
  let timeout;
  $(document).on("mousemove", function (event) {
    if (timeout !== undefined) {
      window.clearTimeout(timeout);
    }
    timeout = window.setTimeout(function () {
      $(event.target).trigger("mousemoveend");
    }, 5000);
  });
})(jQuery);

$(".mngld-video").on("mousemove", function () {
  $(this).find(".controls").addClass("visible");
});

$(".mngld-video").on("mousemoveend", function () {
  $(this).find(".controls").removeClass("visible");
});

$(".mngld-video").on("mouseleave", function () {
  let controls = $(this).find(".controls");
  let cursor = $(".ccursor-video");
  setTimeout(function () {
    controls.removeClass("visible");
  }, 2000);
});

$(".progress").click(function () {
  let video = document.getElementById("video");

  if (video.paused) videoPlayed = false;
  else videoPlayed = true;

  console.log("videoPlayed", videoPlayed);
  let w = this.offsetWidth;
  let o = event.offsetX;
  $(this)
    .find(".progress-line")
    .width((100 * o) / w + "%");
  video.pause(); //! вохможно удалить
  video.currentTime = video.duration * (o / w);
  video.pause(); //! вохможно удалить. но совсем не точно
  if (videoPlayed) video.play();
  else video.pause();
});

// function videoChangeTime(e) {
//   let mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
//   let progress = mouseX / (progressBar.offsetWidth / 100);
//   videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
// }

$(".call-modal-video").click(function (e) {
  $(".trigger").hide();
  $(".buff").show();

  e.preventDefault();
  let videoLink = $(this).closest(".call-modal-video").attr("data-video-link");
  $("#video").attr("src", videoLink);
  $(".modal-video").addClass("active");

  // let waitVideoReady = 0;
  let video = $("#video").get(0);
  console.log("pause1", video.paused);
  video.play();

  video.oncanplay = () => {
    console.log("Video can start, but not sure it will play through.");
    console.log("pause2", video.paused);
    $(".trigger").show();
    $(".buff").hide();

    if (!video.paused) {
      $(".trigger").removeClass("play");
      $(".trigger").addClass("pause");
      video.play();
    } else {
      video.pause();
      $(".trigger").removeClass("pause");
      $(".trigger").addClass("play");
    }
  };

  //https://stackoverflow.com/questions/25651719/why-does-audio-buffered-end0-get-an-error-message-when-i-try-to-get-buffered-t
  // let video = $("#video").get(0);
  video.onprogress = function () {
    console.log("onprogress");
    if (video.readyState < video.HAVE_FUTURE_DATA) {
      $(".trigger").hide();
      $(".buff").show();
      console.log("!HAVE_FUTURE_DATA");
    }
  };
});

async function reloadProgressLine() {
  await delay();
  console.log("after");
  $(".progress-line").width(0);
  console.log(document.querySelector(".progress-line").offsetWidth);
  let condition = 1;
  while (condition) {
    await delay();
    if (document.querySelector(".progress-line").offsetWidth == 0)
      condition = 0;
  }
}

async function delay() {
  return new Promise((res, rej) => {
    setTimeout(() => res(), 200);
  });
}

$(".modal-video .btn-close").click(function () {
  let video = document.getElementById("video");
  video.pause();
  reloadProgressLine();

  $(".modal-video").removeClass("active");
  $(this).parents(".modal-video").find(".trigger").addClass("play");
  $(this).parents(".modal-video").find(".trigger").removeClass("pause");
  $(this).parents(".modal-video").find("video").trigger("pause");
});
