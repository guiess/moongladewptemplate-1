<?php
/*
Template Name: Страница с заглушкой при технических работах на сайте
*/
?>

<?php get_header(); ?>

<body>

  <?php include(get_template_directory() . "/include/preloader.php"); ?>

<div data-page-layout>
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
		                      <div>Something is</div>
		                      <div>being created</div>
		                    </h1>
		                  </div>
		                </div>
		              </div>
		            </section>
				</main>
			</div>
		</div>
	</div>
</div>


  <?php get_footer(); ?>