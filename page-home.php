<?php
/*
Template Name: Страница Главная
*/
?>

<?php get_header(); ?>

<body class="page-home">

  <?php include(get_template_directory() . "/include/preloader.php"); ?>

  <div data-page-layout>
    <?php include(get_template_directory() . "/include/menu.php"); ?>
    <div class="wrapper w-full min-h-screen flex flex-col" data-scroller="">
      <div class="flex-grow">
        <div class="page-holder">
          <main class="main">
            <section class="site-section hero-section hero-section--default h-screen">
              <div class="section__holder" data-scroll="" data-scroll-call="ambient-move" data-movement="25">
                <div class="container">
                  <span class="site-section__bg hero-section__bg hero-section__bg--left" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 705 800'%3E%3C/svg%3E" width="705" height="800" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Left_1.jpg" alt="image description" /></picture>
                  </span><span class="site-section__bg hero-section__bg hero-section__bg--right" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 705 800'%3E%3C/svg%3E" width="705" height="800" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Right_1.jpg" alt="image description" /></picture>
                  </span>
                  <div class="heading-decorated">
                    <h1 class="heading-decorated__title font-serif uppercase" data-scroll="" data-scroll-call="split" data-delay="0.5" data-split="words, lines" data-speed="2" data-interval="0.07">
                      <div>THE WAY WE LIVE,</div>
                      <div>LOVE, &nbsp; &nbsp; CREATE</div>
                      <div>` AND FEEL</div>
                    </h1>
                    <div class="heading-decorated__decoration">
                      <div data-element="parallax-box">
                        <div data-scroll="" data-scroll-speed="0.7" data-delay="0.15">
                          <div data-scroll="" data-scroll-call="scale" data-delay="0.8" data-speed="2">
                            <picture><img class="w-full max-w-full transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 379 425'%3E%3C/svg%3E" width="379" height="425" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/hero-decoration01.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/hero-decoration01.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/hero-decoration01@2x.png 2x" alt="image description" /></picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute bottom-0 w-full text-center opacity-70 left-0 pb-45 xl:pb-60 h-min:pb-30">
                    <div data-scroll="" data-scroll-call="fadeIn" data-delay="1.2">
                      <i class="scroll-down__icon icon-infinity mb-5"></i>
                      <p class="scroll-down uppercase mb-0"><span>~ Scoll Down ~</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative">
              <div class="section__holder py-50 laptop:py-80 xl:py-100 relative">
                <div class="container">
                  <div class="embed-responsive aspect-ratio-1270/800 min-h-350" data-scroll="" data-scroll-call="video-component" data-scroll-repeat="" data-scroll-offset="-20%, -20%">
                    <div class="embed-responsive-item">
                      <div class="absolute w-full h-full parallax-media h-full overflow-hidden" data-scroll="">
                        <div class="parallax-media__element absolute w-full h-full" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                          <div class="absolute h-full w-full top-0 left-0">
                            <video class="object-cover w-full h-full md:transform md:scale-110 origin-center absolute left-0 top-0 w-full h-full" src="<?php echo wp_get_attachment_url(carbon_get_theme_option('first_video')); ?>" playsinline="" autoplay="" muted="" loop=""></video>
                          </div>
                        </div>
                      </div>
                      <span class="absolute left-0 top-0 w-full h-full bg-black opacity-20 pointer-events-none"></span><span class="absolute left-0 top-0 w-full h-full bg-repeat opacity-50 pointer-events-none" style="background-image: url(<?php echo get_template_directory_uri() . "/assets/"; ?>images/noize.png)"></span>
                    </div>
                    <div class="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" data-scroll="" data-scroll-call="magnetic" data-scroll-repeat="">
                      <div data-magnet="">
                        <button class="btn btn--play" type="button" data-video-id="<?php echo carbon_get_theme_option('first_video_vimeo_id'); ?>" data-component="fullscreen-video"><span class="btn__text-holder"></span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative site-section--horizontal-blocks">
              <div class="section__holder" id="h-photos">
                <div class="inner-container w-full py-50 xl:py-100 relative">
                  <span class="site-section__bg site-section__bg--left" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 705 709'%3E%3C/svg%3E" width="705" height="709" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Left_2.jpg" alt="image description" /></picture>
                  </span><span class="site-section__bg site-section__bg--right" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 705 621'%3E%3C/svg%3E" width="705" height="621" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Right_2.jpg" alt="image description" /></picture>
                  </span>
                  <div class="container">
                    <h2 class="font-serif text-center mb-30 lg:mb-60 leading-none flex justify-center h-min:mb-30" data-scroll="" data-scroll-call="split" data-split="chars" data-speed="2" data-animation-type="fade" data-interval="0.05">
                      M <span>o</span><span>o</span>n Way
                    </h2>
                    <div class="lg:mb-80 relative z-2" data-component="horizontal-scroll-section" data-target="#h-photos">
                      <div class="horizontal-blocks grid grid-flow-col auto-cols-max">

                        <?php

                        $scroll_speed = [2, 3, 1, 1.5, 2, 0];

                        $table = carbon_get_theme_option('gorizont_pictures');
                        if (!empty($table)) : ?>
                          <?php foreach ($table as $key => $tr) : ?>

                            <div class="image-heading-block inline-block align-top">
                              <div data-scroll="" data-scroll-call="moveLeft" data-delay="<?php $key / 5;
                                                                                          echo (string) $key; ?>" data-ease="power3.out" data-movement="200" data-speed="1.3">
                                <div data-block="" data-scroll-speed="<?php echo $scroll_speed[$key]; ?>">
                                  <div class="mb-15 md:mb-20 overflow-hidden relative">
                                    <picture><img class="transition-opacity duration-300 object-cover" data-animate="data-animate" src="<?php echo image_downsize($tr['gor_img500x250'], 'full')[0]; ?>" width="<?php echo image_downsize($tr['gor_img500x250'], 'full')[1]; ?>" height="<?php echo image_downsize($tr['gor_img500x250'], 'full')[2]; ?>" data-srcset="<?php echo image_downsize($tr['gor_img500x250'], 'full')[0]; ?> 1x, <?php echo image_downsize($tr['gor_img1000x5000'], 'full')[0]; ?> 2x" alt="image description" /></picture><span class="bg-black opacity-10 absolute w-full h-full top-0 left-0"></span>
                                  </div>
                                  <h3 class="text-sm md:text-md mb-0 font-sans"><?php echo $tr['title']; ?></h3>
                                </div>
                              </div>
                            </div>

                          <?php endforeach; ?>

                        <?php endif; ?>

                      </div>
                    </div>
                    <div class="flex items-center justify-between laptop:hidden pagination-for-horizontal">
                      <div class="carousel-pagination swiper-moonway-pagination"></div>
                      <div class="text-xl font-serif"><span data-slide-current="" class="pagination-counter-current">1</span><span data-slide-total="" class="pagination-counter-total">9</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative site-section--wide-visual">
              <div class="section__holder">
                <div class="wide-visual" data-scroll="" data-scroll-speed="2" data-scroll-delay="" data-scroll-direction="horizontal">
                  <picture><img class="w-full max-w-full transition-opacity duration-300 min-h-350 object-cover" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1933 863'%3E%3C/svg%3E" width="1933" height="863" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/wide-photo.jpg" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/wide-photo.jpg 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/wide-photo@2x.jpg 2x" alt="image description" /></picture>
                </div>
              </div>
            </section>
            <section class="site-section relative site-section--large-image">
              <div class="section__holder py-50 laptop:py-80 xl:py-100 relative">
                <div class="container">
                  <span class="site-section__bg site-section__bg--top" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 1011'%3E%3C/svg%3E" width="1440" height="1011" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Bg_Light_3.jpg" alt="image description" /></picture>
                  </span>
                  <div class="heading-centered text-center mb-50 md:mb-150 laptop:transform laptop:-translate-y-150 laptop:mb-0">
                    <h2 class="mb-0 leading-xs" data-scroll="" data-scroll-call="split" data-speed="2">
                      LET’S ENJOY WHAT <br />
                      ` WE HAVE
                    </h2>
                    <div class="flex justify-center -my-10 lg:-my-40" data-scroll="" data-scroll-speed="0.9">
                      <div class="relative parallax-media overflow-hidden w-120 lg:w-auto" data-scroll="">
                        <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.8">
                          <picture><img class="transition-opacity duration-300 md:transform md:scale-110" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 215'%3E%3C/svg%3E" width="230" height="215" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image04.png" alt="image description" /></picture>
                        </div>
                      </div>
                    </div>
                    <h2 class="leading-xs mb-0" data-scroll="" data-scroll-call="split" data-speed="2">
                      LET’S KEEP THE <br />
                      VIBE~VIBE
                    </h2>
                  </div>
                  <div class="overflow-hidden relative">
                    <div data-scroll="" data-scroll-repeat="" data-scroll-call="progress-scale" data-from="1.5" data-to="1" data-scroll-id="large-image-scale">
                      <div class="relative parallax-media overflow-hidden" data-scroll="">
                        <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.8">
                          <picture><img class="w-full max-w-full transition-opacity duration-300 md:transform md:scale-105" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1270 1570'%3E%3C/svg%3E" width="1270" height="1570" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image05.jpg" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image05.jpg 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image05@2x.jpg 2x" alt="image description" /></picture><span class="bg-black-100 absolute left-0 top-0 w-full h-full"></span>
                        </div>
                      </div>
                    </div>
                    <div class="absolute w-full bottom-0 left-0 right-0 p-30 md:py-50 lg:py-110 text-center large-image__text">
                      <div class="max-w-680 mx-auto">
                        <h3 class="large-image__title uppercase font-serif mb-0" data-scroll="" data-scroll-call="split" data-split="chars, lines" data-animation-type="fade" data-interval="0.07" data-speed="2.5">
                          <?php echo carbon_get_theme_option('first_big_picture_text'); ?>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative site-section--video-blocks">
              <div class="section__holder py-50 laptop:py-80 xl:py-100 relative">
                <div class="container">
                  <span class="site-section__bg site-section__bg--top" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 745'%3E%3C/svg%3E" width="720" height="745" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/bg_Light_Right_4.jpg" alt="image description" /></picture>
                  </span><span class="site-section__bg site-section__bg--bottom" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 1008'%3E%3C/svg%3E" width="720" height="1008" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Bg_Light_Left_4.jpg" alt="image description" /></picture>
                  </span>
                  <div class="md:mb-50 xl:mb-100">
                    <div class="video-block relative video-block--left" data-scroll="" data-scroll-call="video-component" data-scroll-repeat="">
                      <div class="relative mb-15 lg:mb-30" data-scroll="" data-css-call="maskDown" data-delay="2">
                        <div class="relative w-full parallax-media overflow-hidden" data-scroll="">
                          <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                            <div data-component="video-poster">
                              <picture><img class="w-full max-w-full transition-opacity duration-300 object-cover w-full h-full md:transform md:scale-110 origin-center" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 946 540'%3E%3C/svg%3E" width="946" height="540" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06.jpg" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06.jpg 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06@2x.jpg 2x" alt="image description" /></picture><video class="object-cover w-full h-full md:transform md:scale-110 origin-center absolute left-0 top-0 w-full h-full" src="<?php echo wp_get_attachment_url(carbon_get_theme_option('second_video')); ?>" playsinline="" autoplay="" muted="" loop=""></video>
                            </div>
                          </div>
                        </div>
                        <span class="absolute left-0 top-0 w-full h-full bg-black opacity-20 pointer-events-none"></span>
                        <div class="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" data-scroll="" data-scroll-call="magnetic" data-scroll-repeat="">
                          <div data-magnet="">
                            <button class="btn btn--play" type="button" data-video-id="<?php echo carbon_get_theme_option('second_video_vimeo_id'); ?>" data-component="fullscreen-video">
                              <span class="btn__text-holder"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="flex md:grid md:grid-cols-12 md:gap-x-15 items-start">
                        <div class="col-span-2 flex min-w-30" data-scroll="" data-scroll-call="fadeIn" data-delay="0.5" data-speed="1.5">
                          <span class="video-block__counter">01</span>
                        </div>
                        <div class="col-span-10 md:col-span-8 flex-grow">
                          <h2 class="h4 mb-0 video-block__title uppercase" data-scroll="" data-scroll-call="split" data-split="words, lines" data-speed="2" data-interval="0.05" data-no-whitespace="">
                            <?php echo carbon_get_theme_option('second_video_text'); ?>
                          </h2>
                        </div>
                        <div class="hidden md:col-span-2 md:flex justify-end" data-scroll="" data-scroll-call="fadeIn" data-delay="0.5" data-speed="1.5">
                          <a class="text-left uppercase group" href="<?php echo carbon_get_theme_option('vimeo_link'); ?>"><span class="link">moonglade</span><br /><span class="link">Films</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="video-block relative video-block--center" data-scroll="" data-scroll-call="video-component" data-scroll-repeat="">
                      <div class="relative mb-15 lg:mb-30" data-scroll="" data-css-call="maskDown" data-delay="2">
                        <div class="relative w-full parallax-media overflow-hidden" data-scroll="">
                          <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                            <div data-component="video-poster">
                              <picture><img class="w-full max-w-full transition-opacity duration-300 object-cover w-full h-full md:transform md:scale-110 origin-center" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 946 540'%3E%3C/svg%3E" width="946" height="540" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06.jpg" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06.jpg 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06@2x.jpg 2x" alt="image description" /></picture><video class="object-cover w-full h-full md:transform md:scale-110 origin-center absolute left-0 top-0 w-full h-full" src="<?php echo wp_get_attachment_url(carbon_get_theme_option('third_video')); ?>" playsinline="" autoplay="" muted="" loop=""></video>
                            </div>
                          </div>
                        </div>
                        <span class="absolute left-0 top-0 w-full h-full bg-black opacity-20 pointer-events-none"></span>
                        <div class="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" data-scroll="" data-scroll-call="magnetic" data-scroll-repeat="">
                          <div data-magnet="">
                            <button class="btn btn--play" type="button" data-video-id="<?php echo carbon_get_theme_option('third_video_vimeo_id'); ?>" data-component="fullscreen-video">
                              <span class="btn__text-holder"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="flex md:grid md:grid-cols-12 md:gap-x-15 items-start">
                        <div class="col-span-2 flex min-w-30" data-scroll="" data-scroll-call="fadeIn" data-delay="0.5" data-speed="1.5">
                          <span class="video-block__counter">02</span>
                        </div>
                        <div class="col-span-10 md:col-span-8 flex-grow">
                          <h2 class="h4 mb-0 video-block__title uppercase" data-scroll="" data-scroll-call="split" data-split="words, lines" data-speed="2" data-interval="0.05" data-no-whitespace="">
                            <?php echo carbon_get_theme_option('third_video_text'); ?>
                          </h2>
                        </div>
                        <div class="hidden md:col-span-2 md:flex justify-end" data-scroll="" data-scroll-call="fadeIn" data-delay="0.5" data-speed="1.5">
                          <a class="text-left uppercase group" href="<?php echo carbon_get_theme_option('vimeo_link'); ?>"><span class="link">moonglade</span><br /><span class="link">Films</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-50 md:hidden text-center">
                    <a class="btn btn--dark" href="<?php echo carbon_get_theme_option('vimeo_link'); ?>">
                      <span class="btn__text-holder"><span class="btn__text">moonglade Films</span></span>
                    </a>
                    <!-- <a class="text-left uppercase group" href="<?php echo carbon_get_theme_option('vimeo_link'); ?>"><span class="link">moonglade</span><br /><span class="link">Films</span></a> -->
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative">
              <div class="section__holder overflow-hidden lg:h-screen">
                <div class="lg:h-full px-15 md:px-0" data-scroll="" data-scroll-speed="-8" data-scroll-offset="-100%, 100%" data-no-touch-parallax="">
                  <div class="embed-responsive aspect-ratio-1270/800 lg:aspect-ratio-none lg:p-0 lg:h-full min-h-350" data-scroll="" data-scroll-call="video-component" data-scroll-repeat="" data-scroll-offset="-20%, -20%">
                    <div class="embed-responsive-item lg:h-full" data-scroll="" data-scroll-call="container-mask" data-scroll-offset="100%, 0" data-scroll-id="video-container-mask">
                      <div class="absolute w-full h-full parallax-media h-full overflow-hidden" data-scroll="">
                        <div class="parallax-media__element absolute w-full h-full" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                          <div class="absolute h-full w-full top-0 left-0">
                            <video class="object-cover w-full h-full md:transform md:scale-110 origin-center absolute left-0 top-0 w-full h-full" src="<?php echo wp_get_attachment_url(carbon_get_theme_option('fourth_video')); ?>" playsinline="" autoplay="" muted="" loop=""></video>
                          </div>
                          <span class="absolute left-0 top-0 w-full h-full bg-black opacity-20 pointer-events-none"></span><span class="absolute left-0 top-0 w-full h-full bg-repeat opacity-50 pointer-events-none" style="background-image: url(<?php echo get_template_directory_uri() . "/assets/"; ?>images/noize.png)"></span>
                          <div class="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" data-scroll="" data-scroll-call="magnetic" data-scroll-repeat="">
                            <div data-magnet="">
                              <button class="btn btn--play" type="button" data-video-id="<?php echo carbon_get_theme_option('fourth_video_vimeo_id'); ?>" data-component="fullscreen-video">
                                <span class="btn__text-holder"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative site-section--photo-gallery-vertical">
              <div class="section__holder py-50 laptop:py-80 xl:py-100 relative">
                <div class="container">
                  <span class="site-section__bg site-section__bg--top" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1060 880'%3E%3C/svg%3E" width="1060" height="880" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Left_5.jpg" alt="image description" /></picture>
                  </span><span class="site-section__bg site-section__bg--middle" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 960 760'%3E%3C/svg%3E" width="960" height="760" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Right_6.jpg" alt="image description" /></picture>
                  </span><span class="site-section__bg site-section__bg--bottom" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1250 990'%3E%3C/svg%3E" width="1250" height="990" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Left_7.jpg" alt="image description" /></picture>
                  </span>
                  <div class="md:grid md:grid-cols-12 mb-50 md:mb-100 lg:pt-100 laptop:mb-150 relative">
                    <div class="md:col-start-3 md:col-span-9 xl:col-start-4 xl:col-span-6">
                      <p class="text-xxs md:text-sm mb-20 uppercase" data-scroll="" data-css-call="moveUp" data-speed="1.5">Moon InSpiration</p>
                      <p class="h4 text-gray font-serif leading-none" data-scroll="" data-scroll-call="split" data-split="lines" data-speed="2">
                        <?php echo carbon_get_theme_option('moon_inspiration_text'); ?>
                      </p>
                    </div>
                  </div>
                  <div id="photos-vertical" data-scroll="" data-scroll-call="sticky-heading" data-scroll-repeat="" data-scroll-offset="50%, 75%">
                    <div class="mb-50 laptop:mb-0 z-5 laptop:hidden">
                      <h2 class="h1 uppercase font-serif text-center" data-scroll="" data-scroll-call="split" data-split="chars" data-animation-type="fade" data-interval="0.05">
                        m<span>o</span><span>o</span> n spirit
                      </h2>
                    </div>
                    <div class="photo-vertical-flow">


                      <?php $data_scroll_speed = -0.3;
                      $table = carbon_get_theme_option('moon_spirit_pictures');
                      if (!empty($table)) : ?>
                        <?php foreach ($table as $tr) : ?>

                          <div class="photo-vertical-flow__item">
                            <div class="photo-box photo-box--oldscool" data-no-touch-parallax="" data-component="webgl-light" data-scroll="" data-scroll-speed="
                            <?php echo $data_scroll_speed;
                            $data_scroll_speed = $data_scroll_speed * -1; ?>">
                              <div class="photo-box__header mb-10 grid grid-flow-col gap-x-10 justify-between items-start uppercase text-xxs md:text-sm">
                                <div class="photo-box__meta-element"><?php echo $tr['left_up_text']; ?></div>
                                <div class="photo-box__meta-element"><?php echo $tr['center_up_text']; ?></div>
                                <div class="photo-box__meta-element"><?php echo $tr['right_up_text']; ?></div>
                              </div>
                              <div class="relative">
                                <div class="relative w-full parallax-media h-full overflow-hidden" data-scroll="">
                                  <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                                    <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 <?php echo image_downsize($tr['moon_spirit_pictur_1x'], 'full')[1]; ?> <?php echo image_downsize($tr['moon_spirit_pictur_1x'], 'full')[2]; ?>'%3E%3C/svg%3E" width="<?php echo image_downsize($tr['moon_spirit_pictur_1x'], 'full')[1]; ?>" height="<?php echo image_downsize($tr['moon_spirit_pictur_1x'], 'full')[2]; ?>" data-src="<?php echo image_downsize($tr['moon_spirit_pictur_1x'], 'full')[0]; ?>" data-srcset="<?php echo image_downsize($tr['moon_spirit_pictur_1x'], 'full')[0]; ?> 1x, <?php echo image_downsize($tr['moon_spirit_pictur_2x'], 'full')[0]; ?> 2x" alt="image description" /></picture>
                                  </div>
                                </div>
                                <span class="absolute w-full h-full top-0 left-0 bg-black opacity-25"></span>
                              </div>
                              <div class="photo-box__footer mt-10 grid grid-flow-col gap-x-10 justify-between items-start uppercase text-xxs md:text-sm">
                                <div class="photo-box__meta-element"><?php echo $tr['left_down_text']; ?></div>
                                <div class="photo-box__meta-element"><?php echo $tr['location_text']; ?></div>
                              </div>
                            </div>
                          </div>

                        <?php endforeach; ?>
                      <?php endif; ?>


                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative">
              <div class="section__holder py-50 laptop:py-80 xl:py-100 relative">
                <div class="container">
                  <div class="md:grid md:grid-cols-12">
                    <div class="md:col-span-10 md:col-start-2 flex justify-center">
                      <h3 class="mb-0 standalone-headline uppercase font-serif" data-scroll="" data-scroll-call="split" data-split="chars, lines" data-animation-type="fade" data-interval="0.05" data-speed="2">
                        WH E N E V E R&nbsp;WE&nbsp;TO U CH~ <br />
                        N AT URE&nbsp;WE <br />
                        ` G E T&nbsp;CL EA N.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative site-section--photo-gallery-stacked">
              <div class="section__holder py-50 laptop:py-80 xl:py-100 relative">
                <div class="container">
                  <span class="site-section__bg site-section__bg--bottom" data-scroll="" data-scroll-call="fadeIn" data-scroll-position="bottom" data-speed="1">
                    <picture><img data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 735 800'%3E%3C/svg%3E" width="735" height="800" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/Right_8.jpg" alt="image description" /></picture>
                  </span>
                  <div class="photo-vertical-flow photo-vertical-flow--stacked md:mb-50 xl:mb-100">
                    <div class="photo-vertical-flow__item">
                      <div class="photo-box photo-box--default" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.3">
                        <div class="relative">
                          <div class="relative w-full parallax-media h-full overflow-hidden" data-scroll="">
                            <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                              <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 <?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[1]; ?> <?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[2]; ?>'%3E%3C/svg%3E" width="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[1]; ?>" height="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[2]; ?>" data-src="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[0]; ?>" data-srcset="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[0]; ?>, <?php echo image_downsize(carbon_get_theme_option('last_left_picture_2x'), 'full')[0]; ?> 2x" alt="image description" /></picture>
                            </div>
                          </div>
                          <span class="absolute w-full h-full top-0 left-0 bg-black opacity-25"></span>
                        </div>
                        <div class="photo-box__footer mt-10 grid grid-flow-col gap-x-10 justify-between items-start uppercase text-xxs md:text-sm">
                          <div class="photo-box__meta-element">
                            <?php echo carbon_get_theme_option("last_left_picture_text"); ?>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="photo-vertical-flow__item">
                      <div class="photo-box photo-box--default" data-no-touch-parallax="" data-scroll="" data-scroll-speed="0.3">
                        <div class="relative">
                          <div class="relative w-full parallax-media h-full overflow-hidden" data-scroll="">
                            <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                              <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 <?php echo image_downsize(carbon_get_theme_option('last_right_picture_1x'), 'full')[1]; ?> <?php echo image_downsize(carbon_get_theme_option('last_right_picture_1x'), 'full')[2]; ?>'%3E%3C/svg%3E" width="<?php echo image_downsize(carbon_get_theme_option('last_right_picture_1x'), 'full')[1]; ?>" height="<?php echo image_downsize(carbon_get_theme_option('last_right_picture_1x'), 'full')[2]; ?>" data-src="<?php echo image_downsize(carbon_get_theme_option('last_right_picture_1x'), 'full')[0]; ?>" data-srcset="<?php echo image_downsize(carbon_get_theme_option('last_right_picture_1x'), 'full')[0]; ?>, <?php echo image_downsize(carbon_get_theme_option('last_right_picture_2x'), 'full')[0]; ?> 2x" alt="image description" /></picture>
                            </div>
                          </div>
                          <span class="absolute w-full h-full top-0 left-0 bg-black opacity-25"></span>
                        </div>
                        <div class="photo-box__footer mt-10 grid grid-flow-col gap-x-10 justify-between items-start uppercase text-xxs md:text-sm">
                          <div class="photo-box__meta-element">
                            <?php echo carbon_get_theme_option("last_right_picture_text_1"); ?>
                          </div>
                          <div class="photo-box__meta-element">
                            <?php echo carbon_get_theme_option("last_right_picture_text_2"); ?>
                          </div>
                          <div class="photo-box__meta-element">
                            <?php echo carbon_get_theme_option("last_right_picture_text_2"); ?>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative site-section--products-overview overflow-hidden">
              <div class="section__holder py-50 laptop:py-80 xl:py-100 relative">
                <div data-scroll="" data-scroll-speed="-5" data-scroll-offset="-100%, 0" data-no-touch-parallax="">
                  <div class="multi-parallax-visual overflow-hidden relative" id="multiparallax">
                    <div class="top-0 h-full w-full relative" data-no-touch-parallax="" data-scroll="" data-scroll-speed="2" data-scroll-offset="-50%, -100%">
                      <picture>
                        <source media="(min-width: 1024px)" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/T_5.png" />
                        <img class="object-cover object-center min-h-400 origin-bottom w-full max-w-none" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 1486'%3E%3C/svg%3E" width="2048" height="1486" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/5.png" alt="image description" />
                      </picture>
                    </div>
                    <div class="top-0 h-full w-full absolute" data-no-touch-parallax="">
                      <picture>
                        <source media="(min-width: 1024px)" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/T_4.png" />
                        <img class="object-cover object-center min-h-400 origin-bottom w-full max-w-none" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 1486'%3E%3C/svg%3E" width="2048" height="1486" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/4.png" alt="image description" />
                      </picture>
                    </div>
                    <div class="top-0 h-full w-full absolute" data-no-touch-parallax="" data-scroll="" data-scroll-offset="-50%, -100%" data-scroll-speed="0.6">
                      <picture>
                        <source media="(min-width: 1024px)" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/T_3.png" />
                        <img class="object-cover object-center min-h-400 origin-bottom w-full max-w-none" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 1486'%3E%3C/svg%3E" width="2048" height="1486" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/3.png" alt="image description" />
                      </picture>
                    </div>
                    <div class="top-0 h-full w-full absolute" data-no-touch-parallax="" data-scroll="" data-scroll-offset="-50%, -100%" data-scroll-speed="1.3">
                      <picture>
                        <source media="(min-width: 1024px)" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/T_2.png" />
                        <img class="object-cover object-center min-h-400 origin-bottom w-full max-w-none" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 1486'%3E%3C/svg%3E" width="2048" height="1486" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/2.png" alt="image description" />
                      </picture>
                    </div>
                    <div class="top-0 h-full w-full absolute" data-no-touch-parallax="" data-scroll="" data-scroll-speed="1.5" data-scroll-offset="-50%, -100%">
                      <picture>
                        <source media="(min-width: 1024px)" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/T_1.png" />
                        <img class="object-cover object-center min-h-400 origin-bottom w-full max-w-none" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 1486'%3E%3C/svg%3E" width="2048" height="1486" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/parallax/1.png" alt="image description" data-scroll="" data-scroll-call="progress-scale" data-scroll-id="parallax-scale-image" data-scroll-offset="-50%, -100%" data-from="1" data-to="1.2" />
                      </picture>
                    </div>
                    <span class="pointer-events-none absolute w-full h-1/2 bg-gradient-to-t from-black to-transparent bottom-0" data-scroll="" data-scroll-speed="1.5" data-scroll-offset="-50%, -100%"></span>
                  </div>
                </div>
                <div class="container">
                  <div class="text-center mb-30 lg:mb-100">
                    <h2 class="uppercase font-serif flex justify-center" data-scroll="" data-scroll-call="split" data-split="chars" data-animation-type="fade" data-interval="0.05" data-delay="0">
                      superfood
                    </h2>
                  </div>
                  <div class="mb-40 lg:mb-100" data-component="products-carousel">
                    <div class="swiper-container mb-50" data-carousel="" data-component="drag-carousel">
                      <div class="swiper-wrapper">

                        <?php

                        $catalog_products = carbon_get_theme_option("catalog_products");
                        $catalog_products_ids = wp_list_pluck($catalog_products, "id");

                        // echo "<pre>";
                        // print_r($catalog_products);
                        // print_r($catalog_products_ids);
                        // echo "</pre>";

                        $catalog_products_args = [
                          'post_type' => 'product',
                          'posts_per_page' => '6',
                          'post__in' => $catalog_products_ids
                        ];

                        // echo "<pre>";
                        // print_r($catalog_products_args);
                        // echo "</pre>";

                        $catalog_products_query = new WP_Query($catalog_products_args);
                        ?>

                        <?php
                        // echo "<pre>";
                        // print_r($catalog_products_query);
                        // echo "</pre>";
                        ?>

                        <?php if ($catalog_products_query->have_posts()) : ?>

                          <?php $count_delay = 2; ?>

                          <?php while ($catalog_products_query->have_posts()) : $catalog_products_query->the_post(); ?>

                            <?php $count_delay = $count_delay + 1;
                            echo get_template_part('product-box-content', null, ['count_delay' => "$count_delay"]); ?>

                          <?php endwhile; ?>

                        <?php endif; ?>

                        <?php wp_reset_query(); ?>


                      </div>
                    </div>
                    <div class="flex items-center justify-between laptop:hidden">
                      <div class="carousel-pagination"></div>
                      <div class="text-xl font-serif"><span data-slide-current="">1</span><span data-slide-total="">9</span></div>
                    </div>
                  </div>
                  <div class="text-center" data-scroll="" data-css-call="moveUp" data-delay="5">
                    <a class="btn btn--light" href="<?php echo home_url('/products', ''); ?>"><span class="btn__text-holder"><span class="btn__text">Visit our Store</span></span></a>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative laptop:-mt-100 block-prefooter">
              <div class="section__holder">
                <div class="relative laptop:h-screen" data-scroll="" data-scroll-speed="3" data-scroll-offset="0">
                  <picture><img class="w-full max-w-full transition-opacity duration-300 laptop:absolute laptop:top-0 laptop:w-full laptop:h-full object-cover min-h-400" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image16@2x.jpg" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image16@2x.jpg 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image16@2x.jpg 2x" alt="image description" /></picture><span class="h-3/12 absolute left-0 -top-5 w-full bg-gradient-to-b from-black to-transparent"></span><span class="h-6/12 absolute left-0 -bottom-5 w-full bg-gradient-to-t from-black to-transparent"></span>
                  <div class="absolute w-full flex justify-center p-40 laptop:p-100 bottom-0" data-scroll="" data-scroll-call="reveal-random" data-target-selector="path">
                    <svg class="max-w-full h-auto large-logo" width="316" height="33" viewbox="0 0 316 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M51.4581 2.37256C43.214 7.1359 41.3044 16.4052 45.6696 23.9705C50.0348 31.5287 59.0238 34.515 67.2675 29.7516C75.5116 24.9957 77.4213 15.719 73.056 8.16111C68.6904 0.595448 59.7018 -2.39078 51.4581 2.37256ZM66.766 28.8889C61.3386 32.0229 53.8247 28.6899 49.7323 21.6036C45.6397 14.5099 46.5101 6.33968 51.9371 3.20572C57.3645 0.0717679 64.8784 3.40478 68.9707 10.4911C73.063 17.5851 72.1933 25.7553 66.766 28.8889Z" fill="currentColor"></path>
                      <path d="M208.682 30.3093H197.904V5.38018C197.904 3.83869 198.789 1.69965 199.851 0.718767V0.556641H192.271V0.718767C193.333 1.69965 194.217 3.83869 194.217 5.38018V26.7395C194.217 28.281 193.332 30.4201 192.271 31.4009V31.5631H194.217H197.904V31.5627H214.709V30.3118H214.709V27.8585H214.5C213.034 29.3886 211.116 30.2963 208.682 30.3093Z" fill="currentColor"></path>
                      <path d="M269.988 0.563288V0.556641H258.636V0.562919H258.628H256.68V0.729108C257.745 1.70999 258.628 3.84423 258.628 5.39163V26.7199C258.628 28.2677 257.745 30.402 256.68 31.3825V31.5487H258.628V31.4523H258.636V31.5516H269.986V31.5631C279.321 31.5638 285.486 24.6245 285.487 16.0643C285.487 7.50371 279.323 0.563657 269.988 0.563288ZM269.986 30.5814V30.5925H262.315V1.5161H269.988V1.50983C276.133 1.5102 280.878 8.01852 280.877 16.0466C280.876 24.0742 276.131 30.5818 269.986 30.5814Z" fill="currentColor"></path>
                      <path d="M17.8081 28.7191L4.93323 0.558594H0V0.772423C1.30514 2.02586 2.16083 3.60391 2.38167 5.55054V26.7356C2.38167 28.2841 1.49681 30.415 0.435046 31.3959V31.5654H5.5821V31.3959C4.57906 30.4741 3.73851 28.5496 3.63547 27.0306V6.59051L15.0501 31.5658H18.0293L18.5308 30.3049L19.0763 28.9259L29.0679 3.75902V26.7359C29.0679 28.2844 28.1831 30.4154 27.1213 31.3962V31.5658H34.7017V31.3962C33.64 30.4154 32.7551 28.2844 32.7551 26.7359V6.63446C32.7551 4.17893 33.6695 2.24707 35.2106 0.772054V0.558594H28.9941L17.8081 28.7191Z" fill="currentColor"></path>
                      <path d="M90.9633 21.2008C86.6346 13.709 88.117 4.65392 94.1563 0.317871C93.7582 0.509542 93.3597 0.715986 92.969 0.944588C85.0643 5.50887 82.3506 15.6187 86.9223 23.5308C91.4866 31.4428 101.596 34.1491 109.508 29.5848C109.884 29.371 110.246 29.1424 110.593 28.899C103.809 31.9152 95.2698 28.6631 90.9633 21.2008Z" fill="currentColor"></path>
                      <path d="M140.396 0.723162C141.465 1.70405 142.343 3.83496 142.343 5.38347V28.0435L122.987 0.561035H117.213V0.767479C118.754 2.24213 119.661 4.17435 119.661 6.6369V27.0257C119.558 28.5447 118.717 30.4695 117.722 31.3909V31.5604H122.868V31.3983C121.799 30.4174 120.914 28.2791 120.914 26.738V4.02663L140.308 31.5608H143.596V5.38347C143.596 3.83496 144.481 1.70405 145.543 0.723162V0.561035H140.396V0.723162H140.396Z" fill="currentColor"></path>
                      <path d="M245.554 26.4017L236.064 0.549316H230.762V0.75576C231.949 1.89138 232.214 3.37342 231.779 5.0619L223.779 26.8363L223.624 27.2714C222.813 29.4097 221.7 31.0025 220.195 31.3859V31.548H225.335L225.328 31.3859C223.956 30.936 224.421 28.783 224.937 27.3452C224.937 27.3305 224.944 27.3083 224.952 27.2935L227.387 20.6652H239.519L242.339 28.3405C242.73 29.5497 242.598 30.501 241.58 31.3859L241.572 31.5554H243.519V31.548H249.278V31.5554H249.381L249.389 31.3859C248.216 31.0989 246.114 27.8102 245.554 26.4017ZM227.864 19.37L233.453 4.14047L238.903 18.9911L239.042 19.37H227.864Z" fill="currentColor"></path>
                      <path d="M309.94 1.81166C312.389 1.81609 314.318 2.72644 315.791 4.26313H316V1.81092H315.999V0.558594H299.195H295.509H293.561V0.724783C294.626 1.7053 295.509 3.8399 295.509 5.38731V26.7367C295.509 28.2841 294.626 30.4183 293.561 31.3992V31.5654H295.509H295.525H316V30.3131H316V27.8605H315.791C314.318 29.3975 312.388 30.3083 309.937 30.3123H299.195V16.6878H305.353C307.659 16.7639 309.494 17.6528 310.905 19.1252H311.115V16.6878V15.4347V12.9976H310.905C309.497 14.4675 307.665 15.3557 305.365 15.4347H299.195V1.81166H309.94Z" fill="currentColor"></path>
                      <path d="M167.868 17.937H179.359V23.4589C179.355 23.5778 179.348 23.8592 179.346 23.9719C179.333 25.318 179.293 27.3776 176.974 28.7987C176.96 28.8065 176.949 28.8165 176.936 28.8242C171.509 31.9582 163.789 28.3958 159.783 21.6578C155.774 14.9127 156.682 6.27349 162.11 3.13953C166.623 0.536644 173.103 2.47441 177.175 7.19048H182.684C177.753 -0.183508 168.583 -2.02119 161.631 2.30563C161.63 2.30637 161.629 2.30711 161.627 2.30785C153.383 7.06418 151.473 16.3405 155.839 23.9058C160.204 31.464 169.314 34.4503 177.558 29.6869C177.568 29.6814 177.576 29.6747 177.586 29.6688C181.014 27.6572 182.784 25.102 183.406 23.8001C183.442 23.7248 183.448 23.6051 183.447 23.515H183.447V17.937H183.453V16.6832H167.867V17.937H167.868Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
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