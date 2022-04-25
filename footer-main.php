<div class="modal-shadow"></div>

<div class="modal-video">
  <div class="modal-video-bg"></div>
  <div class="video-holder">
    <div class="mngld-video">
      <video id="video" src="" playsinline autoplay muted loop></video>
      <div class="controls">
        <div class="trigger pause">
          <span>P</span>
          <span>L</span>
          <span>A</span>
          <span>U</span>
          <span>Y</span>
          <span>S</span>
          <span>E</span>
        </div>
        <div class="progress">
          <div class="progress-line"></div>
          <div class="progress-selector"></div>
        </div>
        <div class="time"><span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span>:<span class="millisecond">00</span></div>
        <svg class="mute muted" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 202.205 202.205" xml:space="preserve">
          <path d="M82.16 52.638H50.365v96.407h31.104l70.371 53.16V0L82.16 52.638zm3.836 92.628V56.94l60.103-45.401V190.67l-60.103-45.404zm-5.744-86.888v84.926H56.109V58.378h24.143z" fill="#fff" />
        </svg>
        <svg class="fullscreen" width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M1.5 13a.5.5 0 0 1-.5-.5v-9A2.5 2.5 0 0 1 3.5 1h9a.5.5 0 0 1 0 1h-9A1.5 1.5 0 0 0 2 3.5v9a.5.5 0 0 1-.5.5ZM46.5 13a.5.5 0 0 1-.5-.5v-9A1.5 1.5 0 0 0 44.5 2h-9a.5.5 0 0 1 0-1h9A2.5 2.5 0 0 1 47 3.5v9a.5.5 0 0 1-.5.5ZM12.5 47h-9A2.5 2.5 0 0 1 1 44.5v-9a.5.5 0 0 1 1 0v9A1.5 1.5 0 0 0 3.5 46h9a.5.5 0 0 1 0 1ZM44.5 47h-9a.5.5 0 0 1 0-1h9a1.5 1.5 0 0 0 1.5-1.5v-9a.5.5 0 0 1 1 0v9a2.5 2.5 0 0 1-2.5 2.5Z" />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
      </div>
    </div>
  </div>
  <div class="btn-close">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 371.23 371.23" xml:space="preserve">
      <path fill="#fff" d="M371.23 21.213 350.018 0 185.615 164.402 21.213 0 0 21.213l164.402 164.402L0 350.018l21.213 21.212 164.402-164.402L350.018 371.23l21.212-21.212-164.402-164.403z" />
    </svg>
  </div>
</div>

<div class="modal modal-cookie js-cookies">
  <p>By continuing to use our site you agree to using cookies in accordance with our <a href="<?php echo home_url('/privacypolicy', ''); ?>">Privacy Policy</a>.</p>
  <div class="btn-wrap">
    <button class="btn-accept js-btn-cookies"><span class="js-btn-cookies">Accept cookies</span></button>
    <div class="btn-close"><svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M.409 7.003a.578.578 0 0 1 0-.817L6.186.408a.578.578 0 1 1 .817.817L1.226 7.003a.578.578 0 0 1-.817 0Z" fill="#000" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M.409.409a.578.578 0 0 1 .817 0l5.777 5.777a.578.578 0 1 1-.817.817L.409 1.226a.578.578 0 0 1 0-.817Z" fill="#000" />
      </svg></div>
  </div>
</div>

<span class="custom-cursor pointer-events-none" data-page-cursor=""><span class="custom-cursor__body fixed left-0 top-0 rounded-full pointer-events-none"><span class="custom-cursor__zoomer"></span></span></span>

<span class="fixed w-full h-full z-100 bg-black page-overlay top-0 left-0"></span>

<?php wp_footer(); ?>
</body>

</html>