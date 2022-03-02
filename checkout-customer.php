<?php
/*
Template Name: Страница вводо данных покупателя
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
            <section class="site-section relative">
              <div class="section__holder lg:pb-100">
                <div class="md:grid md:grid-cols-2 md:items-start" id="sticky-container">
                  <div class="py-40 lg:py-80 px-15 laptop:px-120">
                    <div class="text-center">
                      <a class="inline-flex mb-30" href="<?php echo home_url('/products', ''); ?>"><svg class="max-w-full block logo-food w-130 md:w-250 h-auto mx-auto" width="564" height="112" viewbox="0 0 564 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M137.402 103.748C137.402 105.157 137.104 106.376 136.508 107.406C135.913 108.436 135.141 109.29 134.194 109.967C133.246 110.645 132.164 111.153 130.946 111.492C129.728 111.83 128.496 112 127.251 112C124.598 112 122.19 111.404 120.025 110.212L119.7 106.878C121.892 109.155 124.557 110.293 127.698 110.293C128.51 110.293 129.322 110.198 130.134 110.008C130.947 109.819 131.678 109.507 132.327 109.073C132.977 108.64 133.497 108.091 133.89 107.427C134.282 106.764 134.479 105.958 134.479 105.009C134.479 103.003 133.342 101.337 131.068 100.009C130.013 99.4404 128.957 98.8715 127.901 98.302C126.845 97.7332 125.776 97.1782 124.694 96.6357C122.42 95.1185 121.283 93.2351 121.283 90.9855C121.283 89.7125 121.554 88.6216 122.096 87.7136C122.637 86.8055 123.347 86.0677 124.227 85.4982C125.107 84.9287 126.095 84.5156 127.191 84.2582C128.288 84.0015 129.39 83.8728 130.5 83.8728C132.395 83.8728 134.155 84.2252 135.779 84.9294L135.941 87.9379C134.344 86.339 132.382 85.5398 130.054 85.5398C129.35 85.5398 128.639 85.6282 127.922 85.8037C127.205 85.9799 126.548 86.2505 125.954 86.6168C125.358 86.983 124.878 87.4569 124.512 88.0389C124.147 88.6223 123.964 89.3198 123.964 90.1328C123.964 91.84 125.128 93.3031 127.456 94.5226C128.538 95.0658 129.614 95.5996 130.684 96.1282C131.753 96.6568 132.828 97.192 133.911 97.7338C136.237 99.2767 137.402 101.282 137.402 103.748Z" fill="currentColor"></path>
                          <path d="M177.23 84.3585C176.987 84.8739 176.865 85.9575 176.865 87.6106V100.74C176.865 108.246 173.306 112 166.187 112C159.258 112 155.793 108.437 155.793 101.309V87.6106C155.793 85.8763 155.684 84.7928 155.468 84.3585H159.285C159.041 85.1174 158.919 86.2017 158.919 87.6106V101.675C158.919 107.42 161.368 110.293 166.268 110.293C171.952 110.293 174.794 107.353 174.794 101.472V87.6106C174.794 85.9311 174.685 84.8469 174.469 84.3585H177.23Z" fill="currentColor"></path>
                          <path d="M212.594 91.7562C212.594 92.9758 212.343 94.0732 211.843 95.0486C211.342 96.0246 210.679 96.8442 209.854 97.5081C209.028 98.1727 208.08 98.6867 207.011 99.0523C205.942 99.4186 204.839 99.6007 203.702 99.6007C202.565 99.6007 201.361 99.3843 200.089 98.9501V108.218C200.089 109.898 200.211 110.982 200.455 111.47H196.719C196.963 110.982 197.085 109.899 197.085 108.218V87.6086C197.085 86.0374 196.963 84.9538 196.719 84.3565H203.337C204.501 84.3565 205.638 84.4925 206.748 84.7631C207.857 85.0343 208.845 85.4678 209.712 86.0638C210.578 86.6597 211.275 87.4252 211.803 88.3603C212.329 89.2974 212.594 90.4291 212.594 91.7562ZM209.507 92.0004C209.507 88.0435 206.976 86.0657 201.915 86.0657H200.088V97.2441C201.306 97.7048 202.469 97.9351 203.579 97.9351C205.392 97.9351 206.833 97.3999 207.903 96.3295C208.973 95.2591 209.507 93.8159 209.507 92.0004Z" fill="currentColor"></path>
                          <path d="M247.794 111.471H230.457C230.701 110.984 230.823 109.9 230.823 108.219V87.61C230.823 86.0387 230.701 84.9551 230.457 84.3579H247.185L246.739 87.3255C245.737 86.4861 243.68 86.0657 240.567 86.0657H233.868V96.0246H241.866C243.138 96.0246 244.018 95.9164 244.505 95.6993V98.0572C243.91 97.8401 243.03 97.7318 241.866 97.7318H233.868V109.764H240.689C244.695 109.764 247.361 109.263 248.688 108.26L247.794 111.471Z" fill="currentColor"></path>
                          <path d="M280.478 111.471C279.882 110.713 278.908 109.317 277.554 107.285C276.201 105.252 274.428 102.543 272.236 99.1553H270.693C270.341 99.1824 270.036 99.1955 269.779 99.1955C269.521 99.1955 269.299 99.1955 269.109 99.1955V108.219C269.109 109.899 269.231 110.983 269.475 111.471H265.74C265.984 110.984 266.106 109.9 266.106 108.219V87.61C266.106 86.0387 265.984 84.9551 265.74 84.3579H272.439C273.63 84.3579 274.787 84.4799 275.91 84.7241C277.033 84.9683 278.035 85.3748 278.915 85.9437C279.794 86.5125 280.505 87.2648 281.047 88.1999C281.588 89.135 281.859 90.28 281.859 91.6348C281.859 92.6102 281.676 93.4984 281.311 94.2976C280.946 95.0974 280.459 95.8016 279.849 96.4107C279.24 97.0204 278.529 97.5226 277.717 97.9153C276.905 98.3086 276.038 98.5719 275.119 98.7072L277.108 101.634C278.136 103.179 279.111 104.575 280.031 105.82C280.952 107.067 281.818 108.192 282.63 109.195C283.495 110.279 284.226 111.038 284.822 111.471H280.478V111.471ZM278.813 92.0413C278.813 90.0088 278.217 88.5048 277.026 87.5294C275.835 86.5534 274.265 86.0657 272.317 86.0657H269.109V97.4877H271.018C276.214 97.4877 278.813 95.6729 278.813 92.0413Z" fill="currentColor"></path>
                          <path d="M317.099 87.3255C316.097 86.4861 314.04 86.0657 310.928 86.0657H304.432V96.0246H312.227C313.5 96.0246 314.38 95.9164 314.867 95.6993V98.0572C314.271 97.8401 313.391 97.7318 312.227 97.7318H304.432V108.219C304.432 109.899 304.554 110.983 304.798 111.471H301.062C301.306 110.984 301.428 109.9 301.428 108.219V87.61C301.428 86.0387 301.306 84.9551 301.062 84.3579H317.546L317.099 87.3255Z" fill="currentColor"></path>
                          <path d="M358.959 97.6097C358.959 101.811 357.66 105.252 355.061 107.935C352.435 110.645 349.079 112 344.992 112C341.121 112 337.982 110.754 335.573 108.26C333.164 105.768 331.96 102.502 331.96 98.4643C331.96 94.3722 333.326 90.9175 336.06 88.099C338.794 85.2804 342.11 83.8715 346.007 83.8715C349.797 83.8715 352.91 85.1583 355.345 87.7327C357.754 90.3071 358.959 93.6001 358.959 97.6097ZM355.426 97.9351C355.426 94.2224 354.492 91.2963 352.624 89.1548C350.702 86.987 348.212 85.9027 345.154 85.9027C342.176 85.9027 339.807 86.9593 338.048 89.073C336.262 91.1867 335.369 94.0191 335.369 97.5688C335.369 101.417 336.316 104.493 338.211 106.796C340.079 109.127 342.555 110.291 345.641 110.291C352.164 110.292 355.426 106.174 355.426 97.9351Z" fill="currentColor"></path>
                          <path d="M403.822 97.6097C403.822 101.811 402.522 105.252 399.924 107.935C397.298 110.645 393.942 112 389.855 112C385.985 112 382.844 110.754 380.436 108.26C378.027 105.768 376.822 102.502 376.822 98.4643C376.822 94.3722 378.189 90.9175 380.923 88.099C383.656 85.2804 386.973 83.8715 390.87 83.8715C394.66 83.8715 397.773 85.1583 400.208 87.7327C402.617 90.3071 403.822 93.6001 403.822 97.6097ZM400.289 97.9351C400.289 94.2224 399.355 91.2963 397.488 89.1548C395.566 86.987 393.076 85.9027 390.017 85.9027C387.039 85.9027 384.671 86.9593 382.912 89.073C381.125 91.1867 380.232 94.0191 380.232 97.5688C380.232 101.417 381.179 104.493 383.074 106.796C384.942 109.127 387.419 110.291 390.504 110.291C397.027 110.292 400.289 106.174 400.289 97.9351Z" fill="currentColor"></path>
                          <path d="M444.3 97.8539C444.3 99.8053 444.022 101.58 443.468 103.179C442.913 104.778 442.108 106.161 441.052 107.325C439.997 108.491 438.704 109.426 437.175 110.13C435.645 110.835 433.906 111.254 431.958 111.39C431.606 111.417 431.071 111.438 430.354 111.451C429.636 111.465 428.71 111.471 427.573 111.471H422.295C422.539 110.984 422.661 109.9 422.661 108.219V87.61C422.661 85.9575 422.539 84.8733 422.295 84.3579H429.36C431.525 84.3579 433.521 84.6291 435.349 85.1709C437.176 85.7133 438.752 86.5323 440.079 87.6298C441.404 88.7279 442.44 90.1236 443.185 91.8163C443.928 93.5116 444.3 95.5237 444.3 97.8539ZM441.011 98.1384C441.011 95.9435 440.733 94.0805 440.179 92.5495C439.624 91.0191 438.812 89.7646 437.743 88.7892C436.673 87.8139 435.333 87.1097 433.723 86.6755C432.112 86.2426 430.251 86.0248 428.14 86.0248H425.664V109.764C427.314 109.764 428.621 109.764 429.582 109.764C430.542 109.764 431.172 109.75 431.47 109.723C433.175 109.641 434.637 109.29 435.854 108.666C437.072 108.043 438.06 107.217 438.818 106.187C439.576 105.157 440.131 103.951 440.483 102.569C440.835 101.187 441.011 99.7103 441.011 98.1384Z" fill="currentColor"></path>
                          <path d="M91.8427 4.23809C77.1286 12.7498 73.7202 29.3131 81.5113 42.8316C89.3024 56.3376 105.346 61.6737 120.059 53.162C134.774 44.6636 138.182 28.087 130.391 14.5817C122.599 1.06254 106.556 -4.27358 91.8427 4.23809ZM119.164 51.6205C109.478 57.2206 96.0665 51.2648 88.7625 38.6022C81.4579 25.9264 83.0115 11.327 92.6976 5.72687C102.384 0.126773 115.795 6.08257 123.099 18.7451C130.403 31.4216 128.851 46.021 119.164 51.6205Z" fill="currentColor"></path>
                          <path d="M372.459 54.1572H353.222V9.61117C353.222 6.85666 354.802 3.03439 356.697 1.28164V0.991931H343.167V1.28164C345.063 3.03439 346.641 6.85666 346.641 9.61117V47.7784C346.641 50.5329 345.062 54.3552 343.167 56.1079V56.3976L383.215 56.397V54.1618H383.215V49.778H382.842C380.226 52.512 376.802 54.1341 372.459 54.1572Z" fill="currentColor"></path>
                          <path d="M481.878 1.00843V0.99655H461.617V1.00777H458.125V1.30473C460.026 3.05749 461.602 6.87117 461.602 9.63625V47.748C461.602 50.5138 460.026 54.3275 458.125 56.0795V56.3765H461.602V56.2043H461.617V56.3818H481.874V56.4023C498.534 56.4036 509.539 44.0037 509.539 28.7073C509.541 13.4103 498.539 1.00909 481.878 1.00843ZM481.874 54.6482V54.668H468.182V2.71103H481.878V2.69981C492.845 2.70047 501.314 14.3303 501.313 28.6756C501.311 43.0204 492.841 54.6488 481.874 54.6482Z" fill="currentColor"></path>
                          <path d="M31.784 51.3176L8.80487 0.99721H0V1.3793C2.32942 3.61908 3.85666 6.43892 4.25083 9.91737V47.7731C4.25083 50.5402 2.67152 54.3479 0.776474 56.1007V56.4036H9.96299V56.1007C8.17275 54.4535 6.67253 51.0147 6.48863 48.3004V11.7757L26.8615 56.4042H32.1788L33.074 54.1513L34.0475 51.6871L51.8807 6.71609V47.7738C51.8807 50.5408 50.3014 54.3486 48.4063 56.1013V56.4042H61.936V56.1013C60.0409 54.3486 58.4616 50.5408 58.4616 47.7738V11.8542C58.4616 7.46642 60.0937 4.01437 62.8443 1.37865V0.99721H51.7489L31.784 51.3176Z" fill="currentColor"></path>
                          <path d="M162.352 37.8862C154.626 24.499 157.272 8.31838 168.051 0.570241C167.341 0.91274 166.629 1.28164 165.932 1.69013C151.824 9.8461 146.98 27.9115 155.14 42.0496C163.286 56.1878 181.33 61.0237 195.452 52.8677C196.123 52.4856 196.768 52.0771 197.387 51.6422C185.279 57.0318 170.039 51.2206 162.352 37.8862Z" fill="currentColor"></path>
                          <path d="M250.581 1.29352C252.49 3.04627 254.056 6.85402 254.056 9.62107V50.1125L219.509 1.00381H209.204V1.37271C211.954 4.00777 213.573 7.46048 213.573 11.8608V48.2938C213.389 51.0081 211.888 54.4476 210.112 56.0941V56.397H219.298V56.1073C217.39 54.3545 215.81 50.5336 215.81 47.7797V7.19651L250.423 56.3976H256.293V9.62107C256.293 6.85402 257.872 3.04627 259.767 1.29352V1.00381H250.581V1.29352H250.581Z" fill="currentColor"></path>
                          <path d="M438.267 47.1779L421.329 0.982032H411.866V1.35093C413.984 3.38019 414.458 6.02845 413.682 9.04562L399.402 47.9546L399.126 48.732C397.678 52.5529 395.691 55.3992 393.006 56.0842V56.3739H402.18L402.167 56.0842C399.718 55.2804 400.548 51.433 401.469 48.864C401.469 48.8376 401.482 48.798 401.496 48.7716L405.843 36.9273H427.495L432.529 50.6425C433.227 52.803 432.99 54.503 431.174 56.0842L431.16 56.3871H434.635V56.3739H444.913V56.3871H445.098L445.111 56.0842C443.018 55.5714 439.267 49.6948 438.267 47.1779ZM406.693 34.613L416.67 7.39911L426.645 34.613H406.693Z" fill="currentColor"></path>
                          <path d="M553.183 3.23632C557.556 3.24424 560.997 4.87095 563.626 7.61688H563.999L563.999 0.99721H523.95V1.29417C525.851 3.04627 527.427 6.86061 527.427 9.62569V47.7751C527.427 50.5402 525.851 54.3539 523.95 56.1066V56.4036H563.999V54.1658H564V49.7832H563.627C560.997 52.5298 557.554 54.1572 553.179 54.1645H534.007V29.8186H544.997C549.113 29.9546 552.388 31.543 554.907 34.1741H555.281V23.2247H554.907C552.392 25.8512 549.124 27.4383 545.019 27.5795H534.007V3.23632H553.183Z" fill="currentColor"></path>
                          <path d="M299.612 32.0518H320.121V41.919C320.115 42.1315 320.102 42.6343 320.1 42.8356C320.076 45.241 320.005 48.9214 315.865 51.4608C315.841 51.4746 315.82 51.4924 315.797 51.5063C306.111 57.1064 292.332 50.7408 285.183 38.7005C278.026 26.6477 279.648 11.2102 289.335 5.61006C297.39 0.958935 308.957 4.42154 316.223 12.8487H326.057C317.255 -0.327912 300.889 -3.61168 288.481 4.11996C288.478 4.12128 288.476 4.1226 288.474 4.12392C273.76 12.6231 270.351 29.199 278.142 42.7175C285.933 56.2234 302.193 61.5595 316.907 53.0479C316.925 53.038 316.94 53.0261 316.957 53.0155C323.076 49.4209 326.234 44.8549 327.346 42.5287C327.41 42.3941 327.419 42.1803 327.417 42.0193H327.419V32.0518H327.429V29.8114H299.611L299.612 32.0518Z" fill="currentColor"></path>
                        </svg></a>
                    </div>
                    <div class="flex justify-center mb-40">
                      <ul class="form-steps-list">
                        <li class="form-steps-list__item form-steps-list__item--active">
                          <a class="form-steps-list__link link link--underline" href="<?php echo home_url('/checkout-customer', ''); ?>">Customer info</a>
                        </li>
                        <li class="form-steps-list__item"><a class="form-steps-list__link link link--underline" href="<?php echo home_url('/checkout-shipping', ''); ?>">Shipping</a></li>
                        <li class="form-steps-list__item"><a class="form-steps-list__link link link--underline" href="<?php echo home_url('/checkout-payment', ''); ?>">Payment</a></li>
                      </ul>
                    </div>
                    <div class="hidden-form-empty-cart">
                      <h2 class="h5 font-serif mb-15 normal-case">Customer info</h2>
                      <form name="customerinfo" class="form-theme--dark">
                        <div class="form-group">
                          <div class="form-group__control"><input name="customerInfoEmail" class="form-control" type="text" placeholder="E-mail" pattern="^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$" required /></div>
                        </div>
                        <div class="form-group">
                          <div class="form-group__control"><input name="customerInfoFirstName" data-inputmask-regex="[A-Za-z]+$" class="form-control" type="text" placeholder="First name" maxlength="30" pattern="[A-Za-z]+$" required /></div>
                        </div>
                        <div class="form-group">
                          <div class="form-group__control"><input name="customerInfoLastName" data-inputmask-regex="[A-Za-z]+$" class="form-control" type="text" placeholder="Last name" maxlength="30" pattern="[A-Za-z]+$" required /></div>
                        </div>
                        <div class="form-group">
                          <div class="form-group__control"><input name="customerInfoAddress" class="form-control" type="text" placeholder="Address" maxlength="60" required /></div>
                        </div>
                        <div class="form-group">
                          <div class="form-group__control"><input name="customerInfoApartment" class="form-control" type="text" placeholder="Apartment, suite, etc.  " maxlength="30" required /></div>
                        </div>
                        <div class="form-group">
                          <div class="form-group__control">
                            <select id="customerInfoSelectCountry" class="form-control js-select-country">
                              <option value="placeholder">Country</option>
                              <?php
                              $countries_string = carbon_get_theme_option("moon_countries_list");
                              $countries_array = explode("\n", $countries_string);
                              sort($countries_array); ?>
                              <?php foreach ($countries_array as $tr) : ?>
                                <?php
                                $tr = trim($tr);
                                $pieces = explode(",", $tr);

                                ?>

                                <option value="<?php echo trim($pieces[1]); ?>"><?php echo trim($pieces[0]); ?></option>

                              <?php endforeach; ?>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-group__control"><input name="customerInfoProvince" data-inputmask-regex="[a-zA-Z0-9 ]+$" class="form-control" type="text" placeholder="Province" maxlength="100" required /></div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-x-20">
                          <div class="form-group">
                            <div class="form-group__control"><input name="customerInfoCity" data-inputmask-regex="[a-zA-Z0-9]+$" class="form-control" type="text" placeholder="City" maxlength="50" pattern="[a-zA-Z0-9]+$" required /></div>
                          </div>
                          <div class="form-group">
                            <div class="form-group__control"><input name="customerInfoPostalCode" data-inputmask-regex="[a-zA-Z0-9]+$" class="form-control" type="text" placeholder="Postal code" maxlength="10" pattern="[a-zA-Z0-9]+$" required /></div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-group__control"><input name="customerInfoPhone" class="form-control" type="text" placeholder="Phone (optional)" maxlength="15" minlength="10" pattern="[+][0-9]+$" /></div>
                        </div>
                        <div class="text-right pt-20">
                          <button class="btn btn--light js-btn-continue">
                            <span class="btn__text-holder"><span class="btn__text js-btn-continue">Continue</span></span>
                          </button>
                        </div>
                      </form>
                    </div>

                  </div>
                  <div class="fixed bottom-0 right-0 w-full md:static" data-component="checkout-products" data-scroll="" data-scroll-sticky="" data-scroll-target="#sticky-container">
                    <div class="w-full text-black bg-white pb-80 md:pb-0" data-products="">
                      <div class="overflow-y-auto md:overflow-visible max-h-full h-full" data-scroller="">

                        <div class="px-15 md:px-30 laptop:px-50 border-b border-black-100 js-cart">

                          <!-- goods here -->

                        </div>

                        <div class="px-15 md:px-30 laptop:px-50 py-25 lg:py-30 border-b border-black-100">
                          <div class="flex-grow flex items-center cart-popup__body js-cart-is-empty-plug">
                          </div>
                          <form class="form-theme--light mb-25" data-component="discount-form">
                            <div class="flex items-center">
                              <div class="flex-grow"><input id="discountInputField" class="form-control" type="text" placeholder="Discount code " /></div>
                              <div class="flex-shrink-0 ml-15">

                                <button class="btn btn--primary js-button-apply-disount">
                                  <span class="btn__text-holder"><span class="btn__text js-button-apply-disount">apply</span></span>
                                </button>

                              </div>
                            </div>
                          </form>
                          <div class="flex justify-between items-baseline text-sm lg:text-md"><span>Subtotal:</span><span class="js-cart-subtotal-price">$ 0</span></div>
                          <div class="flex justify-between items-baseline text-sm lg:text-md mt-10"><span>Shipping:</span><span class="js-delivery-sum">$ 0</span></div>
                          <div class="flex justify-between items-baseline text-sm lg:text-md mt-10"><span>Discount code:</span><span class="js-discount-sum">$ 0</span></div>
                        </div>

                      </div>
                    </div>
                    <div class="bg-white text-black rounded-t-2xl md:rounded-none p-15 md:p-30 laptop:px-50 laptop:py-45 uppercase leading-none" data-toggle="">
                      <div class="grid grid-cols-3 items-center md:items-baseline text-lg lg:text-2xl">
                        <span>total:</span>
                        <div class="text-center">
                          <span class="md:invisible md:pointer-events-none"><span class="checkout-summary__toggler w-30 h-30 rounded-full inline-flex items-center justify-center"><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 -3.49691e-07L0.535899 4.5L7.4641 4.5L4 -3.49691e-07Z" fill="currentColor" />
                              </svg></span></span>
                        </div>
                        <span class="text-right js-cart-total-price">$ 0</span>
                      </div>
                    </div>
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

  <?php get_footer(); ?>