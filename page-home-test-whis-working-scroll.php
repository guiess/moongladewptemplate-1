<?php
/*
Template Name: Страница Главная
*/
?>

<?php get_header(); ?>
<?php get_header(); ?>

<body class="page-home">

  <?php include(get_template_directory() . "/include/preloader.php"); ?>

  <div data-page-layout>
    <?php include(get_template_directory() . "/include/menu.php"); ?>
    <div class="wrapper w-full min-h-screen flex flex-col" data-scroller="">
      <div class="flex-grow">
        <div class="page-holder">
          <main class="main">



            <div class="section__holder" id="h-photos">
              <div class="inner-container w-full py-50 xl:py-100 relative">
                <div class="container">
                  <div class="lg:mb-80 relative z-2" data-component="horizontal-scroll-section" data-target="#h-photos">


                    <div class="horizontal-blocks grid grid-flow-col auto-cols-max">

                      


                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="section__holder" id="h-photos2">
              <div class="inner-container w-full py-50 xl:py-100 relative">
                <div class="container">
                  <div class="lg:mb-80 relative z-2" data-component="horizontal-scroll-section" data-target="#h-photos2">


                    <div class="horizontal-blocks grid grid-flow-col auto-cols-max">

                      <div>
                        <div id="square"></div>
                      </div>


                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                      <div>
                        <div id="square"></div>
                      </div>

                    </div>


                  </div>

                </div>
              </div>
            </div>



          </main>
        </div>
      </div>
      <?php include(get_template_directory() . "/include/block-footer.php"); ?>
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
  <div class="spirit-overlay hidden laptop:fixed laptop:w-full laptop:h-screen laptop:flex laptop:items-center laptop:justify-center laptop:pointer-events-none laptop:top-0 laptop:left-0 mb-50 laptop:mb-0 z-50">
    <h2 class="h1 uppercase font-serif text-center m-0" data-scroll="" data-scroll-call="split" data-split="chars" data-animation-type="fade" data-interval="0.04" data-scroll-repeat="" data-delay="0" data-no-touch-parallax="" data-sticky-heading="">
      m<span>o</span>o<span></span>n spirit
    </h2>
  </div>
  <div class="webgl-canvas"></div>

  <?php get_footer(); ?>