$(".mngld-video video").prop("volume", 0.3);
$(".mngld-video video").prop("controls", false);

if($(window).width() > 992) {
  $('.mngld-video .fullscreen').on('click', function(){
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        $(this).parents('.mngld-video').removeClass("already-fullscreen");
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
        element = $(this).parents('.mngld-video').get(0);
        $(this).parents('.mngld-video').addClass("already-fullscreen");
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
    $(".progress").on("hover mouseover mousemove", function(){
        let w = this.offsetWidth;
        let o = event.pageX - $(".progress").offset().left;
        $(this).find(".progress-selector").css("left", 100 * o / w + "%");
    });

    $(".progress").on("mouseenter", function(){
        $(this).find(".progress-selector").fadeIn("fast");
    });

    $(".progress").on("mouseleave", function(){
        $(this).find(".progress-selector").fadeOut("fast");
    });

} else {
    $('.mngld-video .fullscreen').on('click', function(){
        video = $(this).parents(".mngld-video").find('video').get(0);
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

$(".mngld-video .trigger").click(function(){
    if ($(this).hasClass("play")){
        $(this).addClass("pause");
        $(this).removeClass("play");
        $(this).parent().siblings("video").trigger('play');
    } else {
        $(this).addClass("play");
        $(this).removeClass("pause");
        $(this).parent().siblings("video").trigger('pause');
    }
});

$(".mngld-video .mute").click(function(){
    if ($(this).hasClass("muted")){
        $(".mngld-video video").prop("muted", false);
        $(this).removeClass("muted");
    } else {
        $(".mngld-video video").prop("muted", true);
        $(this).addClass("muted");
    }
});

function countUp (max, time) {
  var num = 10;
  var step = time / max;
  var fn = function () {
    num++;
    if (num <= max) {
      $(".mngld-video").find(".millisecond").text(num);
      window.setTimeout(fn, step);
    }
  }
  
  fn();
}

$(".mngld-video video").bind('timeupdate', function(){
    var pos = this.currentTime / this.duration;
    $(this).parent().find(".progress-line").width(pos * 100 + "%");
    var time = this.currentTime;
    var h = Math.floor(time / 3600);
    time = time - h * 3600;               
    var m = Math.floor(time / 60);
    var s = Math.floor(time % 60);
    // var ms = Math.floor(time * 1000 % 60);
    if(h.toString().length<2){h='0'+h;}
    if(m.toString().length<2){m='0'+m;}
    if(s.toString().length<2){s='0'+s;}
    // if(ms.toString().length<2){ms='0'+ms;}
    $(this).parent().find(".hours").text(h);
    $(this).parent().find(".minutes").text(m);
    $(this).parent().find(".seconds").text(s);
    // $(this).parent().find(".millisecond").text(ms);
    countUp(99, 1000);
});

(function ($) {
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            $(event.target).trigger('mousemoveend');
        }, 5000);
    });
}(jQuery));

$(".mngld-video").on("mousemove", function(){
    $(this).find(".controls").addClass("visible");
});

$(".mngld-video").on("mousemoveend", function(){
    $(this).find(".controls").removeClass("visible");
});

$(".mngld-video").on("mouseleave", function(){
    var controls = $(this).find(".controls");
    var cursor = $(".ccursor-video");
    setTimeout(function(){
        controls.removeClass("visible");
    }, 2000);
});

$(".progress").click(function(){
    var video = document.getElementById("video");
    let w = this.offsetWidth;
    let o = event.offsetX;
    $(this).find(".progress-line").width(100 * o / w + "%");
    video.pause();
    video.currentTime = video.duration * ( o / w );
    video.play();
});

function videoChangeTime(e) { 
    var mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
    var progress = mouseX / (progressBar.offsetWidth / 100);
    videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
}

$(".call-modal-video").click(function(e){
    console.log(e);
    e.preventDefault();
    $(".modal-video").addClass("active");
    var videoVideo = $(this).closest('.call-modal-video').attr('data-video-link');
    console.log(videoVideo);
    $("#video").attr("src", videoVideo);
});

$(".modal-video .btn-close").click(function(){
    $(".modal-video").removeClass("active");
    $(this).parents(".modal-video").find(".trigger").addClass("play");
    $(this).parents(".modal-video").find(".trigger").removeClass("pause");
    $(this).parents(".modal-video").find("video").trigger('pause');
});