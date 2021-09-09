<footer class="footer" data-scroll="" data-scroll-repeat="" data-scroll-call="footer-inview">
  <div class="footer__holder container">
    <div class="footer__top-bar">
      <ul class="footer-list list--tilda mb-10 md:mb-0 lg:w-1/5">
        <li><a class="link" href="<?php echo carbon_get_theme_option('instagram_link'); ?>" target="_blank">Instagram</a></li>
      </ul>
      <div class="footer__nav-wrapper lg:flex-grow lg:px-10 lg:justify-center opacity-40">
        <ul class="footer-list list--tilda mb-10 md:mb-0">
          <li><a class="link" href="<?php echo home_url('/privacypolicy', ''); ?>">Privacy Policy</a></li>
          <li><a class="link" href="<?php echo home_url('/termsconditions', ''); ?>">Terms &amp; Conditions</a></li>
        </ul>
        <p class="footer__copy"><span class="footer__copy-text">Moonglade &copy;2021. All rights reserved</span></p>
      </div>
      <div class="hidden lg:block lg:w-1/5 lg:text-right opacity-40"><a class="link" href="https://obys.agency">Designed by obys</a></div>
    </div>
    <div class="footer__bottom-bar lg:hidden opacity-40">
      <div class="flex justify-between items-center">
        <a class="link" href="https://obys.agency">Designed by obys</a><span class="lg:hidden" data-smooth-scroll="top">( Back to top )</span>
      </div>
    </div>
  </div>
</footer>
</div>
</div>
<div class="video-modal" data-video-modal="">
  <div class="video-modal__close">
    <button class="btn btn--outline-light w-55 h-55 p-0" type="button" data-modal-close="">
      <span class="btn__text-holder"><i class="btn__icon btn__icon--append icon-close text-xs"></i></span>
    </button>
  </div>
  <div class="video-modal__body">
    <div class="video-modal__content" data-content=""></div>
  </div>
</div>
<div class="hidden laptop:fixed laptop:w-full laptop:h-screen laptop:flex laptop:items-center laptop:justify-center laptop:pointer-events-none laptop:top-0 laptop:left-0 mb-50 laptop:mb-0 z-50">
  <h2 class="h1 uppercase font-serif text-center m-0" data-scroll="" data-scroll-call="split" data-split="chars" data-animation-type="fade" data-interval="0.04" data-scroll-repeat="" data-delay="0" data-no-touch-parallax="" data-sticky-heading="">
    moon spirit
  </h2>
</div>
<div class="webgl-canvas"></div>
<span class="custom-cursor pointer-events-none" data-page-cursor=""><span class="custom-cursor__body fixed left-0 top-0 rounded-full pointer-events-none"><span class="custom-cursor__zoomer"></span></span></span><span class="fixed w-full h-full z-100 bg-black page-overlay top-0 left-0"></span><!-- new code start -->
<div class="fixed right-20 bottom-20 left-20 z-30 js-cookies" data-cookies-popup="">
  <div class="bg-gray-800 text-white p-15 lg:px-40 lg:py-25 text-sm md:flex md:items-center md:justify-between max-w-800 ml-auto rounded-3xl">
    <div class="w-full mb-20 md:mb-0 md:pr-40 max-w-500 uppercase reset-last">
      <p>By continuing to use our site you agree to using cookies in accordance with our <a class="link link--underline" href="<?php echo home_url('/privacypolicy', ''); ?>">Privacy Policy</a>.</p>
    </div>
    <div class="grid justify-between gap-20 grid-flow-col items-center md:justify-end flex-shrink-0">
      <button class="btn btn--light py-10 h-46 js-btn-cookies" type="button" data-control="accept">
        <span class="btn__text-holder"><span class="btn__text js-btn-cookies">Accept cookies</span></span></button><button class="btn btn--outline w-46 h-46 rounded-full border-white border-opacity-10 text-white p-0 hover:text-black text-xxs" type="button" data-control="decline">
        <span class="btn__text-holder"><i class="btn__icon btn__icon--append icon-close"></i></span>
      </button>
    </div>
  </div>
</div>
<div class="fixed bg-gray-800 text-white top-0 left-0 right-0 py-15 px-20 lg:px-40 z-110 flex items-center justify-between" data-product-added-panel="">
  <div class="pr-20 reset-last">
    <p class="text-base uppercase">
      <span class="mr-10" data-count=""></span><span class="mr-10" data-product-name=""></span><span class="opacity-50">added to Your order</span>
    </p>
  </div>
  <div class="grid justify-between gap-20 grid-flow-col items-center md:justify-end flex-shrink-0">
    <button class="btn btn--outline w-45 h-45 rounded-full border-white border-opacity-10 text-white p-0 hover:text-black text-xxs" type="button" data-control="close">
      <span class="btn__text-holder"><i class="btn__icon btn__icon--append icon-close"></i></span>
    </button>
  </div>
</div>
<!-- new code end -->
<?php wp_footer(); ?>
<script defer src="<?php echo get_template_directory_uri() . "/assets/"; ?>js/cookies.js?ver=0.0.0.1"></script>
</body>
</html>