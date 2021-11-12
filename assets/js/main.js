$(":input").inputmask({ placeholder: "" });

// $(".modal-cookie").addClass("visible");

// $(".modal-cookie .btn-close, .modal-cookie .btn-accept").click(function(){
//     $(".modal-cookie").removeClass("visible");
// });

$(".modal-cookie .btn-close").click(function () {
  $(".modal-cookie").removeClass("visible");
});

$("body").on("click", ".product .call-modal-add-to-cart", function () {
  var name = $(this).parents(".product").find(".product__title").text();
  var quantity = $(this).parents(".product").find(".stepper__input").val();
  $(".modal-add-to-cart p span").text(quantity + " " + name);
  $(".modal-add-to-cart").addClass("active");
  window.setTimeout(function () {
    $(".modal-add-to-cart").removeClass("active");
  }, 5000);
});

$("body").on("click", ".product-popup .call-modal-add-to-cart", function () {
  var name = $(this)
    .parents(".product-popup")
    .find(".product-popup__title")
    .text();
  var quantity = $(this)
    .parents(".product-popup")
    .find(".stepper__input")
    .val();
  $(".modal-add-to-cart p span").text(quantity + " " + name);
  $(".modal-add-to-cart").addClass("active");
  window.setTimeout(function () {
    $(".modal-add-to-cart").removeClass("active");
  }, 5000);
});

$(".modal-add-to-cart .btn-close").click(function () {
  $(".modal-add-to-cart").removeClass("active");
});

$(".modal-success .btn-close").click(function () {
  $("body").removeClass("noscroll");
  $(".modal-shadow").fadeOut();
  $(".modal-shadow").removeClass("active");
  $(".modal-success").removeClass("active");
});

$("#discountInputField").on("input", function () {
  // $(".modal-add-to-cart").removeClass("active");
  // $(".modal-add-to-cart").removeClass("active");
  console.log("press");
  if ($("#discountInputField").val())
    $(".js-button-apply-disount").removeAttr("disabled");
  else $(".js-button-apply-disount").attr("disabled", "disabled");
});

// $(".call-modal-cart-empty").click(function(){
//     $("body").addClass("noscroll");
//     $(".modal-shadow").fadeIn();
//     $(".modal-shadow").addClass("active");
//     $(".modal-cart-empty").addClass("active");
// });

// $(".call-modal-cart-not-empty").click(function(){
//     $("body").addClass("noscroll");
//     $(".modal-shadow").fadeIn();
//     $(".modal-shadow").addClass("active");
//     $(".modal-cart-not-empty").addClass("active");
// });

$(".modal-cart .btn-close, .modal-cart .btn-continue").click(function () {
  $("body").removeClass("noscroll");
  $(".modal-shadow").fadeOut();
  $(".modal-shadow").removeClass("active");
  $(".modal-cart").removeClass("active");
});

$(".btn-edit").click(function () {
  location.href = "WPJS/checkout-customer";
  // $(this).siblings("input").removeAttr("readonly");
  // $(this).parents(".form-group__control").removeClass("input-editable");
  // $(this).remove();
});

$(".btn-edit-shiping-method").click(function () {
  location.href = "WPJS/checkout-shipping";
  // $(this).siblings("input").removeAttr("readonly");
  // $(this).parents(".form-group__control").removeClass("input-editable");
  // $(this).remove();
});

$(".counter .minus").on("click", function () {
  var e = parseFloat($(this).next("input").val());
  if ("1" != e) {
    $(this)
      .next("input")
      .val(e - 1);
  }
});

$(".counter .plus").on("click", function () {
  var e = parseFloat($(this).prev("input").val());
  $(this)
    .prev("input")
    .val(e + 1);
});

$(".call-modal-support").click(function () {
  $("body").addClass("noscroll");
  $(".modal-shadow").fadeIn();
  $(".modal-shadow").addClass("active");
  $(".modal-support").addClass("active");
});

$(".modal-support .btn-close").click(function () {
  $("body").removeClass("noscroll");
  $(".modal-shadow").fadeOut();
  $(".modal-shadow").removeClass("active");
  $(".modal-support").removeClass("active");
});

if ($(window).width() < 1025) {
  $(".horizontal-blocks").addClass("swiper");
  $(".horizontal-blocks .image-heading-block").addClass("swiper-slide");
  $(".horizontal-blocks .image-heading-block").wrapAll(
    "<div class='swiper-wrapper' />"
  );

  var swiper2 = new Swiper(".horizontal-blocks", {
    slidesPerView: 1,
    spaceBetween: 16,
    freeMode: false,
    pagination: {
      el: ".swiper-moonway-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
    },
  });

  $(".site-section--horizontal-blocks .pagination-counter-total").text(
    swiper2.slides.length
  );

  swiper2.on("transitionEnd", function () {
    $(".site-section--horizontal-blocks .pagination-counter-current").text(
      swiper2.realIndex + 1
    );
  });
} else {
}

if ($(window).width() > 1024) {
  window.addEventListener("load", function () {
    window.dispatchEvent(new Event("resize"));
  });
  $("body").height($(".wrapper").height());
}

$(".form-theme--dark select.form-control").on("change", function () {
  if ($(this).val()) {
    return $(this).css({
      color: "#fff",
      "font-size": "1.4rem",
    });
  } else {
    return $(this).css({
      color: "rgba(255,255,255,.7)",
      "font-size": "1.3rem",
    });
  }
});
