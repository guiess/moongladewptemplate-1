<?php
/*
Template Name: Страница Главная
*/
?>

<?php get_header(); ?>

<body>
  <div class="fixed w-full h-full bg-black text-white flex items-center justify-center p-40 lg:p-60 text-center" data-component="preloader">
    <div class="w-full h-full preloader-holder relative">
      <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/10 flex justify-center">
        <div class="relative" data-preloader-image="">
          <img src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/preloader/image01@2x.jpg" width="276" height="163" alt="preloader"><span class="preloader__image-overlay absolute w-full h-full top-0 left-0 opacity-50" data-image-overlay=""></span>
        </div>
      </div>
      <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center" data-preloader-logo="">
        <svg class="max-w-full h-auto" width="480" height="52" viewbox="0 0 316 33" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div class="flex justify-center absolute bottom-0 w-full opacity-70 text-sm">
        <div class="preloader__progress flex items-center justify-center">
          <div class="preloader__progress-item" data-progress-value="">000</div>
          <div class="preloader__progress-item">100</div>
        </div>
      </div>
    </div>
  </div>
  <div data-page-layout>
    <header class="header" data-component="header">
      <div class="container">
        <div class="header__holder flex justify-between items-center">
          <a class="header__logo" href="<?php echo home_url(); ?>"><svg class="logo--default" width="132" height="14" viewbox="0 0 132 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.4953 0.991113C18.0516 2.98086 17.2538 6.85284 19.0773 10.013C20.9007 13.1703 24.6556 14.4177 28.0992 12.4279C31.5429 10.4413 32.3406 6.56621 30.5172 3.40911C28.6936 0.248775 24.9389 -0.998638 21.4953 0.991113ZM27.8897 12.0676C25.6226 13.3767 22.4838 11.9844 20.7744 9.02432C19.0648 6.06114 19.4284 2.64826 21.6954 1.33914C23.9625 0.0300223 27.1012 1.42229 28.8107 4.38239C30.5201 7.34573 30.1568 10.7586 27.8897 12.0676Z" fill="currentColor"></path>
              <path d="M87.1709 12.6607H82.6688V2.24732C82.6688 1.6034 83.0384 0.709882 83.4819 0.300146V0.232422H80.3154V0.300146C80.7591 0.709882 81.1286 1.6034 81.1286 2.24732V11.1696C81.1286 11.8135 80.759 12.707 80.3154 13.1167V13.1845H81.1286H82.6686V13.1843H89.6883V12.6618H89.6885V11.637H89.6011C88.9888 12.2761 88.1874 12.6553 87.1709 12.6607Z" fill="currentColor"></path>
              <path d="M112.78 0.235199V0.232422H108.038V0.235044H108.034H107.221V0.304465C107.666 0.714201 108.034 1.60572 108.034 2.2521V11.1614C108.034 11.8079 107.666 12.6994 107.221 13.109V13.1785H108.034V13.1382H108.038V13.1797H112.779V13.1845C116.678 13.1848 119.254 10.2861 119.254 6.7103C119.254 3.13436 116.679 0.235353 112.78 0.235199ZM112.779 12.7744V12.779H109.575V0.63321H112.78V0.630588C115.347 0.630742 117.329 3.34941 117.329 6.70289C117.328 10.0562 115.346 12.7746 112.779 12.7744Z" fill="currentColor"></path>
              <path d="M7.43881 11.9967L2.06071 0.233398H0V0.32272C0.545184 0.846306 0.902623 1.50549 0.994875 2.31864V11.1681C0.994875 11.8149 0.625249 12.7051 0.181728 13.1148V13.1856H2.33176V13.1148C1.91277 12.7297 1.56166 11.9258 1.51862 11.2913V2.75306L6.28673 13.1858H7.53122L7.74071 12.6591L7.96857 12.083L12.1423 1.57029V11.1682C12.1423 11.8151 11.7727 12.7052 11.3291 13.1149V13.1858H14.4957V13.1149C14.0521 12.7052 13.6825 11.8151 13.6825 11.1682V2.77142C13.6825 1.74569 14.0645 0.938712 14.7082 0.322565V0.233398H12.1114L7.43881 11.9967Z" fill="currentColor"></path>
              <path d="M37.9976 8.85606C36.1895 5.72658 36.8087 1.94407 39.3314 0.132812C39.1651 0.212878 38.9987 0.299114 38.8355 0.394606C35.5335 2.30121 34.4 6.5243 36.3096 9.82934C38.2162 13.1344 42.4393 14.2649 45.7444 12.3583C45.9014 12.2689 46.0524 12.1734 46.1973 12.0718C43.3634 13.3317 39.7966 11.9732 37.9976 8.85606Z" fill="currentColor"></path>
              <path d="M58.6471 0.302099C59.0937 0.711835 59.4602 1.60196 59.4602 2.24881V11.7144L51.3747 0.234375H48.9629V0.320611C49.6067 0.936604 49.9855 1.74373 49.9855 2.77239V11.2892C49.9423 11.9237 49.5912 12.7278 49.1755 13.1127V13.1835H51.3254V13.1158C50.8788 12.706 50.5091 11.8128 50.5091 11.1691V1.68203L58.61 13.1836H59.9838V2.24881C59.9838 1.60196 60.3534 0.711835 60.797 0.302099V0.234375H58.6469V0.302099H58.6471Z" fill="currentColor"></path>
              <path d="M102.573 11.0286L98.6091 0.229492H96.3944V0.315728C96.8902 0.790103 97.0011 1.40918 96.8194 2.11449L93.4773 11.2101L93.4127 11.3919C93.0739 12.2851 92.6088 12.9504 91.9805 13.1106V13.1783H94.1274L94.1243 13.1106C93.5514 12.9227 93.7454 12.0233 93.9611 11.4227C93.9611 11.4166 93.9642 11.4073 93.9673 11.4011L94.9847 8.63232H100.052L101.231 11.8385C101.394 12.3436 101.338 12.7409 100.913 13.1106L100.91 13.1814H101.723V13.1783H104.129V13.1814H104.172L104.175 13.1106C103.685 12.9907 102.807 11.6169 102.573 11.0286ZM95.1837 8.09131L97.5187 1.7296L99.7951 7.93303L99.8532 8.09131H95.1837Z" fill="currentColor"></path>
              <path d="M129.469 0.75683C130.492 0.758681 131.298 1.13895 131.913 1.78086H132V0.756522H132V0.233398H124.981H123.441H122.627V0.302819C123.072 0.712401 123.441 1.60407 123.441 2.25045V11.1685C123.441 11.8149 123.072 12.7064 122.627 13.1162V13.1856H123.441H123.448H132V12.6625H132V11.638H131.913C131.298 12.28 130.492 12.6605 129.468 12.6622H124.981V6.97091H127.553C128.516 7.00268 129.283 7.37401 129.872 7.98907H129.96V6.97091V6.44747V5.42946H129.872C129.284 6.04345 128.519 6.41446 127.558 6.44747H124.981V0.75683H129.469Z" fill="currentColor"></path>
              <path d="M70.1216 7.49267H74.9217V9.79928C74.9203 9.84896 74.9171 9.96651 74.9166 10.0136C74.911 10.5759 74.8944 11.4362 73.9254 12.0298C73.9199 12.0331 73.9151 12.0373 73.9095 12.0405C71.6426 13.3496 68.4178 11.8615 66.7446 9.04692C65.0697 6.22936 65.4493 2.62057 67.7164 1.31145C69.6016 0.224168 72.3087 1.03361 74.0094 3.00362H76.3109C74.2509 -0.076655 70.4206 -0.844293 67.5165 0.963112C67.5159 0.963421 67.5154 0.963729 67.5148 0.964038C64.0711 2.95086 63.2734 6.82577 65.0968 9.98595C66.9203 13.1432 70.7258 14.3906 74.1695 12.4009C74.1736 12.3985 74.1772 12.3958 74.1812 12.3933C75.6131 11.553 76.3524 10.4856 76.6125 9.94183C76.6274 9.91036 76.6298 9.86037 76.6293 9.82273H76.6296V7.49267H76.6321V6.96892H70.1215V7.49267H70.1216Z" fill="currentColor"></path>
            </svg><svg class="max-w-full block logo-food logo--secondary" width="564" height="112" viewbox="0 0 564 112" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div class="ml-20 justify-end items-center header-part--secondary uppercase">
            <ul class="main-nav main-nav--secondary hidden lg:flex">
              <li class="main-nav__item hidden lg:block"><a class="link" href="<?php echo get_template_directory_uri() . "/home"; ?>">Moonglade website</a></li>
              <li class="main-nav__item hidden lg:block">
                <span class="inline-flex items-center group" data-toggle-popup="popup-cart-empty"><span class="link hidden lg:block">CART</span></span>
              </li>
            </ul>
            <div class="pl-10 cursor-pointer">
              <span class="w-40 h-40 lg:w-30 lg:h-30 bg-white text-black inline-flex rounded-full items-center justify-center text-sm" data-toggle-popup="popup-cart-full">0</span>
            </div>
          </div>
          <div class="ml-20 header-part--main">
            <div class="header-menu uppercase" data-header-menu="">
              <div class="header-menu__holder">
                <span class="header-menu__background bg-black bg-cover absolute lg:hidden" style="background-image: url(<?php echo get_template_directory_uri() . "/assets/"; ?>images/bgs/header-menu-bg.png)"></span>
                <div class="header-menu__scroller flex flex-col flex-grow" data-menu-scroller="">
                  <div class="flex-grow flex items-center justify-center lg:block">
                    <ul class="main-nav main-nav--main">
                      <li class="main-nav__item"><a class="link" href="<?php echo home_url('/products', ''); ?>">SuperFood </a></li>
                      <li class="main-nav__item"><a class="link" href="<?php echo home_url('/films', ''); ?>" target="_blank">Films</a></li>
                      <li class="main-nav__item"><a class="link" href="<?php echo home_url('/sounds', ''); ?>" target="_blank">Sound</a></li>
                    </ul>
                  </div>
                </div>
                <div class="header-menu__subnav text-center grid gap-10 lg:hidden">
                  <ul class="social-list list--tilda">
                    <li class="header-nav__stagger"><a class="link" href="?instagram" target="_blank">Instagram</a></li>
                  </ul>
                  <ul class="list--tilda">
                    <li class="header-nav__stagger"><a class="link" href="<?php echo home_url('/privacypolicy', ''); ?>">Privacy Policy</a></li>
                    <li class="header-nav__stagger"><a class="link" href="<?php echo home_url('/termsconditions', ''); ?>">Terms & Conditions</a></li>
                  </ul>
                  <div class="header-nav__stagger">
                    <p class="m-0 opacity-40">Moonglade &copy;2020. All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:hidden">
              <button class="nav-toggle" type="button" data-component="nav-toggle">
                <i class="icon-burger nav-toggle__closed"></i><i class="icon-close nav-toggle__opened"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
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
                      <p class="scroll-down uppercase mb-0"><span>Roll Down</span></p>
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
                            <video class="object-cover w-full h-full md:transform md:scale-110 origin-center absolute left-0 top-0 w-full h-full" src="<?php echo wp_get_attachment_url(carbon_get_theme_option('first_video')); ?>" 1.mp4" playsinline="" autoplay="" muted="" loop=""></video>
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
                      Moon Way
                    </h2>
                    <div class="lg:mb-80 relative z-2" data-component="horizontal-scroll-section" data-target="#h-photos">
                      <div class="horizontal-blocks grid grid-flow-col auto-cols-max">
                        <?php
                        $table = carbon_get_theme_option('gorizont_pictures');
                        if (!empty($table)) : ?>
                          <?php foreach ($table as $key => $tr) : ?>

                            <div class="image-heading-block inline-block align-top">
                              <div data-scroll="" data-scroll-call="moveLeft" data-delay="<?php $key = $key / 5;
                                                                                          echo (string) $key; ?>" data-ease="power3.out" data-movement="200" data-speed="1.3">
                                <div data-block="" data-scroll-speed="<?php echo (rand(0, 30)) / 10; ?>">
                                  <div class="mb-15 md:mb-20 overflow-hidden relative">
                                    <picture><img class="transition-opacity duration-300 object-cover" data-animate="data-animate" src="<?php echo image_downsize($tr['gor_img500x250'], 'full')[0]; ?>" width="<?php echo image_downsize($tr['gor_img500x250'], 'full')[1]; ?>" height="<?php echo image_downsize($tr['gor_img500x250'], 'full')[2]; ?>" data-srcset="<?php echo image_downsize($tr['gor_img500x250'], 'full')[0]; ?> 1x,
                                    <?php echo image_downsize($tr['gor_img1000x5000'], 'full')[0]; ?> 2x" alt="image description" /></picture><span class="bg-black opacity-10 absolute w-full h-full top-0 left-0"></span>
                                  </div>
                                  <h3 class="text-sm md:text-md mb-0 font-sans"><?php echo $tr['title']; ?></h3>
                                </div>
                              </div>
                            </div>

                          <?php endforeach; ?>
                        <?php endif; ?>

                        <!-- конец -->
                      </div>
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
                          <picture><img class="w-full max-w-full transition-opacity duration-300 md:transform md:scale-105" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1270 1570'%3E%3C/svg%3E" width="1270" height="1570" data-src="<?php echo carbon_get_theme_option('first_big_picture_1x'); ?>" data-srcset="<?php echo carbon_get_theme_option('first_big_picture_1x'); ?>, <?php echo carbon_get_theme_option('first_big_picture_2x'); ?> 2x" alt="image description" /></picture><span class="bg-black-100 absolute left-0 top-0 w-full h-full"></span>
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
                          <a class="text-left uppercase group" href="https://vimeo.com/290865574"><span class="link">moonglade</span><br /><span class="link">Films</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="video-block relative video-block--center" data-scroll="" data-scroll-call="video-component" data-scroll-repeat="">
                      <div class="relative mb-15 lg:mb-30" data-scroll="" data-css-call="maskDown" data-delay="2">
                        <div class="relative w-full parallax-media overflow-hidden" data-scroll="">
                          <div class="parallax-media__element" data-no-touch-parallax="" data-scroll="" data-scroll-speed="-0.7">
                            <div data-component="video-poster">
                              <picture><img class="w-full max-w-full transition-opacity duration-300 object-cover w-full h-full md:transform md:scale-110 origin-center" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 946 540'%3E%3C/svg%3E" width="946" height="540" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06.jpg" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06.jpg 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/image06@2x.jpg 2x" alt="image description" /></picture><video class="object-cover w-full h-full md:transform md:scale-110 origin-center absolute left-0 top-0 w-full h-full" src="<?php echo wp_get_attachment_url(carbon_get_theme_option('third_video')); ?>" 3.mp4" playsinline="" autoplay="" muted="" loop=""></video>
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
                          <a class="text-left uppercase group" href="https://vimeo.com/290865574"><span class="link">moonglade</span><br /><span class="link">Films</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-50 md:hidden text-center">
                    <button class="btn btn--dark" type="button">
                      <span class="btn__text-holder"><span class="btn__text">moonglade Films</span></span>
                    </button>
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
                            <video class="object-cover w-full h-full md:transform md:scale-110 origin-center absolute left-0 top-0 w-full h-full" src="<?php echo wp_get_attachment_url(carbon_get_theme_option('fourth_video')); ?>" 4.mp4" playsinline="" autoplay="" muted="" loop=""></video>
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
                        moon spirit
                      </h2>
                    </div>
                    <div class="photo-vertical-flow">

                      <?php $data_scroll_speed = -0.3;
                      $table = carbon_get_theme_option('moon_spirit_pictures');
                      if (!empty($table)) : ?>
                        <?php foreach ($table as $tr) : ?>

                          <div class="photo-vertical-flow__item">
                            <div class="photo-box photo-box--oldscool" data-no-touch-parallax="" data-component="webgl-light" data-scroll="" data-scroll-speed="<?php echo $data_scroll_speed;
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
                              <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 <?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[1]; ?> <?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[2]; ?>'%3E%3C/svg%3E" width="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[1]; ?>" height="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[2]; ?>" data-src="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[0]; ?>" data-srcset="<?php echo image_downsize(carbon_get_theme_option('last_left_picture_1x'), 'full')[0]; ?>, <?php echo image_downsize(carbon_get_theme_option('last_left_picture_2x'), 'full')[1]; ?> 2x" alt="image description" /></picture>
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
                            <?php echo carbon_get_theme_option("last_right_picture_text_3"); ?>
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
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="0.30000000000000004" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="0.4" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="0.5" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="0.6000000000000001" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="0.7000000000000001" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="0.8" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="0.9" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="1" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="1.1" data-ease="circ.out" data-movement="60" data-speed="1">
                          <a class="product-simple" href="/products.html">
                            <div class="relative mb-15 text-center">
                              <div class="product-simple__image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01@2x.png 2x" alt="image description" /></picture>
                              </div>
                              <div class="product-simple__hover-image">
                                <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
                              </div>
                            </div>
                            <div class="product-simple__info">
                              <h4 class="product-simple__title">TURMERIC</h4>
                              <div class="product-simple__meta">
                                <div class="product-simple__category">Leaf Powder</div>
                                <div class="product-simple__price">$ 30</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between laptop:hidden">
                      <div class="carousel-pagination"></div>
                      <div class="text-xl font-serif"><span data-slide-current="">1</span><span data-slide-total="">9</span></div>
                    </div>
                  </div>
                  <div class="text-center" data-scroll="" data-css-call="moveUp" data-delay="5">
                    <a class="btn btn--light" href="/products.html"><span class="btn__text-holder"><span class="btn__text">Visit our Store</span></span></a>
                  </div>
                </div>
              </div>
            </section>
            <section class="site-section relative laptop:-mt-100">
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

      <?php get_footer(); ?>