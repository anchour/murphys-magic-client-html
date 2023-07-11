<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>

  <link rel="stylesheet" href="/static/style.css" />
</head>

<body>
  
  <?php include '../../partials/header.php'; ?>

  <div class="mobile-navigation">
    <button type="button" class="mobile-navigation__close">
      <span class="sr-only">Close navigation</span>
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.61677 1L0.884766 1.71505L9.17584 10.0079L0.884766 18.2852L1.61677 19L9.90784 10.7227L18.1989 19L18.9309 18.2852L10.6398 10.0079L18.9309 1.71505L18.1989 1L9.90784 9.27735L1.61677 1Z"></path>
      </svg>
    </button>
    <form method="get" action="" class="relative block w-full mobile-search-form">
      <label for="mobile-search-term" class="sr-only">Search</label>
      <input id="mobile-search-term" type="search" name="s" placeholder="Search" class="block w-full pl-12 text-base bg-white rounded-full text-smoke h-11 mobile-search-form__input" />
      <button type="submit" class="mobile-search-form__button absolute left-0 top-1/2 w-11 h-11 p-3 -mt-[1.375rem]">
        <span class="sr-only">Search</span>
        <svg enable-background="new 0 0 19 19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
          <path d="m16.9 8.5c0-4.7-3.8-8.5-8.5-8.5-4.6 0-8.4 3.8-8.4 8.5s3.8 8.5 8.5 8.5c2 0 3.9-.7 5.3-1.9l4 4 1.2-1.2-4-4c1.2-1.5 1.9-3.4 1.9-5.4zm-8.4 6.7c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7z"></path>
        </svg>
      </button>
    </form>
    <ul class="mobile-menu">
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link" style="animation-delay: 0s">
          <img src="/static/images/nav--image-random.jpeg" width="342" height="80" loading="lazy" alt="Placeholder" class="mobile-menu__link__image" />
          <div class="mobile-menu__link-text typography-h5">Magic Tricks</div>
          <span aria-hidden="true" class="mobile-menu__link-icon">
            <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2"></path>
            </svg>
          </span>
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link" style="animation-delay: 0.15s">
          <img src="/static/images/nav--image-random-2.jpeg" width="342" height="80" loading="lazy" alt="Placeholder" class="mobile-menu__link__image" />
          <div class="mobile-menu__link-text typography-h5">Books &amp; Digital</div>
          <span aria-hidden="true" class="mobile-menu__link-icon">
            <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2"></path>
            </svg>
          </span>
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link" style="animation-delay: 0.3s">
          <img src="/static/images/nav--image-random.jpeg" width="342" height="80" loading="lazy" alt="Placeholder" class="mobile-menu__link__image" />
          <div class="mobile-menu__link-text typography-h5">Playing Cards</div>
          <span aria-hidden="true" class="mobile-menu__link-icon">
            <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2"></path>
            </svg>
          </span>
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link" style="animation-delay: 0.45s">
          <img src="/static/images/nav--image-random-2.jpeg" width="342" height="80" loading="lazy" alt="Placeholder" class="mobile-menu__link__image" />
          <div class="mobile-menu__link-text typography-h5">Brands</div>
          <span aria-hidden="true" class="mobile-menu__link-icon">
            <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2"></path>
            </svg>
          </span>
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link" style="animation-delay: 0.6s">
          <img src="/static/images/nav--image-random.jpeg" width="342" height="80" loading="lazy" alt="Placeholder" class="mobile-menu__link__image" />
          <div class="mobile-menu__link-text typography-h5">Latest</div>
          <span aria-hidden="true" class="mobile-menu__link-icon">
            <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2"></path>
            </svg>
          </span>
        </a>
      </li>
    </ul>
    <ul class="mobile-utility-menu">
      <li class="mobile-utility-menu__item">
        <a href="#" class="mobile-utility-menu__link">Become a Dealer</a>
        <span class="mobile-utility-menu__link-icon">
          <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2"></path>
          </svg>
        </span>
      </li>
      <li class="mobile-utility-menu__item">
        <a href="#" class="mobile-utility-menu__link">Store Locator<span class="mobile-utility-menu__link-icon">
            <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2"></path>
            </svg>
          </span>
        </a>
      </li>
    </ul>
    <div class="mobile-menu-actions">
      <a href="#" class="mobile-menu-actions__action btn btn--primary">Log in<span class="btn__icon">
          <svg width="23" height="16" viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.27 7.13C18.62 7.13 17.18 6.18 15.99 4.3C15.5 3.52 15.15 2.73 14.95 2.21C14.84 1.92 14.76 1.69 14.71 1.52L14.56 1L13.6 1.25C13.53 1.27 12.93 1.44 12.93 1.44L12.64 1.52L12.82 2.12C12.88 2.32 12.97 2.59 13.1 2.92C13.33 3.52 13.73 4.44 14.31 5.36C14.74 6.04 15.21 6.63 15.71 7.13H2V9.11H15.72C15.21 9.61 14.74 10.21 14.32 10.88C13.74 11.8 13.34 12.71 13.11 13.32C12.98 13.65 12.89 13.93 12.83 14.12L12.66 14.7L12.94 14.79C12.94 14.79 13.53 14.97 13.62 15L14.29 15.17L14.59 15.19L14.73 14.72C14.78 14.56 14.86 14.32 14.97 14.03C15.17 13.51 15.51 12.72 16.01 11.94C17.2 10.06 18.63 9.11 20.29 9.11H20.59V7.13H20.29H20.27Z"></path>
          </svg>
        </span>
      </a>
    </div>
  </div>

  <!-- Start main content -->

  <main role="main">
    <div class="hero-carousel">
      <div class="splide splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized" id="splide01" role="region" aria-roledescription="carousel">
        <div class="splide__track splide__track--loop splide__track--ltr splide__track--draggable" id="splide01-track" style="padding-left: 0px; padding-right: 0px" aria-live="polite" aria-atomic="true">
          <ul class="splide__list" id="splide01-list" role="presentation" style="transform: translateX(-3024px)">
            <li class="splide__slide splide__slide--clone" id="splide01-clone01" role="tabpanel" aria-roledescription="slide" aria-label="2 of 3" style="width: calc(100%)" aria-hidden="true">
              <section class="hero hero--page hero--mobile-overlay hero--dark hero--align-left">
                <div class="hero__inner">
                  <div class="container">
                    <div class="hero__content">
                      <div>
                        <h1 class="hero__title typography-heading typography-heading-lg">
                          Anverdi Magic
                        </h1>
                      </div>
                      <div class="actions">
                        <a href="#" class="btn btn--primary" tabindex="-1">View Product<span class="btn__icon">
                            <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li class="splide__slide splide__slide--clone is-prev" id="splide01-clone02" role="tabpanel" aria-roledescription="slide" aria-label="3 of 3" style="width: calc(100%)" aria-hidden="true">
              <section class="hero hero--page hero--mobile-overlay hero--dark hero--align-left">
                <div class="hero__inner">
                  <div class="container">
                    <div class="hero__content">
                      <div>
                        <h1 class="hero__title typography-heading typography-heading-lg">
                          Anverdi Magic
                        </h1>
                      </div>
                      <div class="actions">
                        <a href="#" class="btn btn--primary" tabindex="-1">View Product<span class="btn__icon">
                            <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li class="splide__slide is-active is-visible" id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 3" style="width: calc(100%)">
              <section class="hero hero--page hero--mobile-stacked hero--dark hero--align-left">
                <div class="hero__inner">
                  <div class="hero__background hero__background--desktop">
                    <img src="/static/images/home-hero-carousel-1.jpg" srcset="
                          /static/images/home-hero-carousel-1.jpg,
                          /static/images/home-hero-carousel-1_mc8axv_c_scale_w_1104.jpg 1104w,
                          /static/images/home-hero-carousel-1_mc8axv_c_scale_w_1400.jpg 1400w
                        " alt="Apprentice Magic" width="3978" height="1620" />
                  </div>
                  <div class="hero__background hero__background--mobile">
                    <img src="/static/images/home-hero-mobile-carousel-1.jpg" alt="Apprentice Magic" width="722" height="709" />
                  </div>
                  <div class="container">
                    <div class="hero__content">
                      <span class="tag tag--label tag--secondary-invert">
                        <span class="tag__decoration tag__decoration--left">
                          <svg width="7" height="6" viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27216 3.35991L1.12019 4.60793L2.53621 5.6639L3.40018 4.17588L4.24021 5.66387L5.65619 4.60784L4.50416 3.33586L6.18416 2.99983L5.63212 1.34384L4.09614 2.06387L4.2641 0.335864L2.5121 0.335899L2.68014 2.0639L1.14412 1.34393L0.592155 2.99994L2.27216 3.35991Z"></path>
                          </svg> </span>Trending Now<span class="tag__decoration tag__decoration--right">
                          <svg width="7" height="6" viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27216 3.35991L1.12019 4.60793L2.53621 5.6639L3.40018 4.17588L4.24021 5.66387L5.65619 4.60784L4.50416 3.33586L6.18416 2.99983L5.63212 1.34384L4.09614 2.06387L4.2641 0.335864L2.5121 0.335899L2.68014 2.0639L1.14412 1.34393L0.592155 2.99994L2.27216 3.35991Z"></path>
                          </svg>
                        </span>
                      </span>
                      <div>
                        <h1 class="hero__title typography-heading typography-heading-lg">
                          Apprentice Magic
                        </h1>
                      </div>
                      <div class="actions">
                        <a href="#" class="btn btn--primary">View Product<span class="btn__icon">
                            <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li class="splide__slide is-next" id="splide01-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 3" style="width: calc(100%)" aria-hidden="true">
              <section class="hero hero--page hero--mobile-overlay hero--dark hero--align-left">
                <div class="hero__inner">
                  <div class="container">
                    <div class="hero__content">
                      <div>
                        <h1 class="hero__title typography-heading typography-heading-lg">
                          Anverdi Magic
                        </h1>
                      </div>
                      <div class="actions">
                        <a href="#" class="btn btn--primary" tabindex="-1">View Product<span class="btn__icon">
                            <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li class="splide__slide" id="splide01-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 3" style="width: calc(100%)" aria-hidden="true">
              <section class="hero hero--page hero--mobile-overlay hero--dark hero--align-left">
                <div class="hero__inner">
                  <div class="container">
                    <div class="hero__content">
                      <div>
                        <h1 class="hero__title typography-heading typography-heading-lg">
                          Anverdi Magic
                        </h1>
                      </div>
                      <div class="actions">
                        <a href="#" class="btn btn--primary" tabindex="-1">View Product<span class="btn__icon">
                            <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li class="splide__slide splide__slide--clone is-active" id="splide01-clone03" role="tabpanel" aria-roledescription="slide" aria-label="1 of 3" style="width: calc(100%)" aria-hidden="true">
              <section class="hero hero--page hero--mobile-stacked hero--dark hero--align-left">
                <div class="hero__inner">
                  <div class="hero__background hero__background--desktop">
                    <img src="/static/images/home-hero-carousel-1.jpg" srcset="
                          /static/images/home-hero-carousel-1.jpg,
                          /static/images/home-hero-carousel-1_mc8axv_c_scale_w_1104.jpg 1104w,
                          /static/images/home-hero-carousel-1_mc8axv_c_scale_w_1400.jpg 1400w
                        " alt="Apprentice Magic" width="3978" height="1620" />
                  </div>
                  <div class="hero__background hero__background--mobile">
                    <img src="/static/images/home-hero-mobile-carousel-1.jpg" alt="Apprentice Magic" width="722" height="709" />
                  </div>
                  <div class="container">
                    <div class="hero__content">
                      <span class="tag tag--label tag--secondary-invert">
                        <span class="tag__decoration tag__decoration--left">
                          <svg width="7" height="6" viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27216 3.35991L1.12019 4.60793L2.53621 5.6639L3.40018 4.17588L4.24021 5.66387L5.65619 4.60784L4.50416 3.33586L6.18416 2.99983L5.63212 1.34384L4.09614 2.06387L4.2641 0.335864L2.5121 0.335899L2.68014 2.0639L1.14412 1.34393L0.592155 2.99994L2.27216 3.35991Z"></path>
                          </svg> </span>Trending Now<span class="tag__decoration tag__decoration--right">
                          <svg width="7" height="6" viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27216 3.35991L1.12019 4.60793L2.53621 5.6639L3.40018 4.17588L4.24021 5.66387L5.65619 4.60784L4.50416 3.33586L6.18416 2.99983L5.63212 1.34384L4.09614 2.06387L4.2641 0.335864L2.5121 0.335899L2.68014 2.0639L1.14412 1.34393L0.592155 2.99994L2.27216 3.35991Z"></path>
                          </svg>
                        </span>
                      </span>
                      <div>
                        <h1 class="hero__title typography-heading typography-heading-lg">
                          Apprentice Magic
                        </h1>
                      </div>
                      <div class="actions">
                        <a href="#" class="btn btn--primary" tabindex="-1">View Product<span class="btn__icon">
                            <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li class="splide__slide splide__slide--clone" id="splide01-clone04" role="tabpanel" aria-roledescription="slide" aria-label="2 of 3" style="width: calc(100%)" aria-hidden="true">
              <section class="hero hero--page hero--mobile-overlay hero--dark hero--align-left">
                <div class="hero__inner">
                  <div class="container">
                    <div class="hero__content">
                      <div>
                        <h1 class="hero__title typography-heading typography-heading-lg">
                          Anverdi Magic
                        </h1>
                      </div>
                      <div class="actions">
                        <a href="#" class="btn btn--primary" tabindex="-1">View Product<span class="btn__icon">
                            <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div class="carousel__pagination">
          <div class="container">
            <ul class="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
              <li role="presentation">
                <button class="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide01-slide01" aria-label="Go to slide 1" aria-selected="true"></button>
              </li>
              <li role="presentation">
                <button class="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide02" aria-label="Go to slide 2" tabindex="-1"></button>
              </li>
              <li role="presentation">
                <button class="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide03" aria-label="Go to slide 3" tabindex="-1"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section class="brand-header page-section page-section--tall">
      <div class="container">
        <div class="brand-header__grid">
          <div role="presentation" aria-hidden="true" class="brand-header__graphic brand-header__graphic--one color-secondary-earth">
            <svg width="39" height="357" viewBox="0 0 39 357" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.0643 3.46759L34.2296 2.37247V1.95272H25.998V0.145752H36.4016V3.61358L31.3458 4.56271V4.92772L36.4016 6.09586V9.30819H25.998V7.50123H34.2296V7.08147L29.0643 5.98635V3.46759V3.46759Z"></path>
              <path d="M29.9411 23.2339H36.4022V25.0956H29.6856C27.3493 25.0956 25.7432 23.1974 25.7432 20.8611C25.7432 18.5249 27.3493 16.6267 29.6856 16.6267H36.4022V18.4884H29.9228C28.4809 18.4884 27.4771 19.5105 27.4771 20.8611C27.4771 22.2118 28.4809 23.2339 29.9411 23.2339Z"></path>
              <path d="M25.998 34.8976V33.0359H36.4016V37.3798C36.4016 40.0445 35.27 41.596 33.1893 41.596C31.6561 41.596 30.6523 40.7746 30.2325 39.278H29.8127L25.998 42.0705V39.8438L29.9952 36.9417V34.8976H25.998V34.8976ZM34.6859 35.4451L34.1384 34.8976H31.7109V37.3433C31.7109 38.9312 32.2584 39.6795 33.1893 39.6795C34.1201 39.6795 34.6859 38.9312 34.6859 37.3433V35.4451V35.4451Z"></path>
              <path d="M29.9952 51.2508H25.998V49.3892H36.4016V53.7331C36.4016 56.3979 35.27 57.9493 33.1893 57.9493C31.1086 57.9493 29.9952 56.3979 29.9952 53.7331V51.2508ZM31.7109 53.6966C31.7109 55.2845 32.2584 56.0328 33.1893 56.0328C34.1201 56.0328 34.6859 55.2845 34.6859 53.6966V51.7984L34.1384 51.2508H31.7109V53.6966V53.6966Z"></path>
              <path d="M25.998 66.8385V64.9768H36.4016V66.8385H32.7512L32.2037 67.386V71.1459L32.7512 71.6935H36.4016V73.5551H25.998V71.6935H29.9404L30.488 71.1459V67.386L29.9404 66.8385H25.998Z"></path>
              <path d="M25.998 86.3127V84.451H30.0682L36.4016 80.0889V82.3156L32.4227 85.0716V85.6921L36.4016 88.4482V90.6749L30.0682 86.3127H25.998V86.3127Z"></path>
              <path d="M38.4996 98.4502L34.1191 98.1399V97.1543L38.4996 96.8623V98.4502V98.4502Z"></path>
              <path d="M28.9007 112.413C29.6673 112.413 29.9776 111.866 30.1601 111.117L30.7624 108.653C31.1822 106.919 31.894 105.696 33.5732 105.696C35.3619 105.696 36.6577 107.376 36.6577 109.821C36.6577 111.446 36.0919 112.888 35.1246 114.129L33.6645 112.961C34.5588 111.92 34.9421 110.734 34.9421 109.675C34.9421 108.343 34.4675 107.558 33.6827 107.558C33.0074 107.558 32.7701 108.179 32.5511 109.036L31.9123 111.5C31.5107 113.07 30.6529 114.275 29.0467 114.275C27.0938 114.275 25.7432 112.468 25.7432 109.986C25.7432 108.087 26.3272 106.207 27.4406 105.039L29.0102 106.134C28.0246 107.157 27.4771 108.58 27.4771 109.986C27.4771 111.3 27.9516 112.413 28.9007 112.413V112.413Z"></path>
              <path d="M29.0643 140.904L34.2296 139.809V139.389H25.998V137.582H36.4016V141.05L31.3458 141.999V142.364L36.4016 143.532V146.744H25.998V144.937H34.2296V144.517L29.0643 143.422V140.904V140.904Z"></path>
              <path d="M28.8271 160.507V156.053L25.998 155.013V153.042L36.4016 157.112V159.503L25.998 163.555V161.547L28.8271 160.507V160.507ZM30.4332 159.43L30.78 159.777L34.0836 158.554V158.006L30.7618 156.783L30.4332 157.112V159.43V159.43Z"></path>
              <path d="M26.6193 176.988L26.8018 176.696C25.9987 175.984 25.7432 175.017 25.7432 174.268C25.7432 171.531 28.1707 169.687 31.2005 169.687C34.4128 169.687 36.6577 171.877 36.6577 174.579C36.6577 176.568 35.7087 177.846 33.92 178.868L32.7519 177.335C34.0112 176.568 34.8326 175.783 34.8326 174.56C34.8326 172.608 33.2082 171.658 31.2005 171.658C29.1928 171.658 27.5136 172.626 27.5136 174.579C27.5136 175.491 28.1524 176.258 28.919 176.988H30.0323V174.305H31.6385V178.758H25.9987V176.988H26.6193V176.988Z"></path>
              <path d="M27.7137 192.028V194.327H25.998V186.808H27.7137V189.107L28.2613 189.655H34.1384L34.6859 189.107V186.808H36.4016V194.327H34.6859V192.028L34.1384 191.48H28.2613L27.7137 192.028Z"></path>
              <path d="M27.5683 207.067C27.5683 208.289 28.3897 209.074 29.649 209.841L28.4809 211.374C26.6923 210.352 25.7432 209.074 25.7432 207.085C25.7432 204.365 27.9699 202.193 31.2005 202.193C34.431 202.193 36.6577 204.365 36.6577 207.085C36.6577 209.074 35.7087 210.352 33.92 211.374L32.7519 209.841C34.0112 209.074 34.8326 208.289 34.8326 207.067C34.8326 205.095 33.2082 204.146 31.2005 204.146C29.1928 204.146 27.5683 205.095 27.5683 207.067Z"></path>
              <path d="M28.9007 241.49C29.6673 241.49 29.9776 240.942 30.1601 240.194L30.7624 237.73C31.1822 235.996 31.894 234.773 33.5732 234.773C35.3619 234.773 36.6577 236.452 36.6577 238.898C36.6577 240.523 36.0919 241.965 35.1246 243.206L33.6645 242.037C34.5588 240.997 34.9421 239.811 34.9421 238.752C34.9421 237.42 34.4675 236.635 33.6827 236.635C33.0074 236.635 32.7701 237.256 32.5511 238.113L31.9123 240.577C31.5107 242.147 30.6529 243.352 29.0467 243.352C27.0938 243.352 25.7432 241.545 25.7432 239.062C25.7432 237.164 26.3272 235.284 27.4406 234.116L29.0102 235.211C28.0246 236.233 27.4771 237.657 27.4771 239.062C27.4771 240.377 27.9516 241.49 28.9007 241.49V241.49Z"></path>
              <path d="M29.9411 257.478H36.4022V259.339H29.6856C27.3493 259.339 25.7432 257.441 25.7432 255.105C25.7432 252.769 27.3493 250.871 29.6856 250.871H36.4022V252.732H29.9228C28.4809 252.732 27.4771 253.754 27.4771 255.105C27.4771 256.456 28.4809 257.478 29.9411 257.478Z"></path>
              <path d="M29.9952 269.36H25.998V267.498H36.4016V271.842C36.4016 274.507 35.27 276.058 33.1893 276.058C31.1086 276.058 29.9952 274.507 29.9952 271.842V269.36ZM31.7109 271.805C31.7109 273.393 32.2584 274.142 33.1893 274.142C34.1201 274.142 34.6859 273.393 34.6859 271.805V269.907L34.1384 269.36H31.7109V271.805V271.805Z"></path>
              <path d="M29.9952 285.495H25.998V283.633H36.4016V287.977C36.4016 290.642 35.27 292.193 33.1893 292.193C31.1086 292.193 29.9952 290.642 29.9952 287.977V285.495ZM31.7109 287.941C31.7109 289.528 32.2584 290.277 33.1893 290.277C34.1201 290.277 34.6859 289.528 34.6859 287.941V286.042L34.1384 285.495H31.7109V287.941V287.941Z"></path>
              <path d="M27.7137 302.377V307.67H25.998V299.986H36.4016V301.83H28.2613L27.7137 302.377V302.377Z"></path>
              <path d="M27.7137 321.105V323.404H25.998V315.885H27.7137V318.184L28.2613 318.732H34.1384L34.6859 318.184V315.885H36.4016V323.404H34.6859V321.105L34.1384 320.557H28.2613L27.7137 321.105Z"></path>
              <path d="M27.7137 334.209V340.232H25.998V331.818H36.4016V340.05H34.6859V334.209L34.1384 333.662H32.2037V339.247H30.488V333.662H28.2613L27.7137 334.209V334.209Z"></path>
              <path d="M28.9007 354.432C29.6673 354.432 29.9776 353.884 30.1601 353.136L30.7624 350.672C31.1822 348.938 31.894 347.715 33.5732 347.715C35.3619 347.715 36.6577 349.394 36.6577 351.84C36.6577 353.464 36.0919 354.906 35.1246 356.148L33.6645 354.979C34.5588 353.939 34.9421 352.753 34.9421 351.694C34.9421 350.362 34.4675 349.577 33.6827 349.577C33.0074 349.577 32.7701 350.197 32.5511 351.055L31.9123 353.519C31.5107 355.089 30.6529 356.294 29.0467 356.294C27.0938 356.294 25.7432 354.487 25.7432 352.004C25.7432 350.106 26.3272 348.226 27.4406 347.058L29.0102 348.153C28.0246 349.175 27.4771 350.599 27.4771 352.004C27.4771 353.318 27.9516 354.432 28.9007 354.432V354.432Z"></path>
              <path d="M5.17222 7.37374C5.93879 7.37374 6.24908 6.82615 6.4316 6.07783L7.03389 3.61382C7.45369 1.8799 8.16551 0.657038 9.84467 0.657038C11.6334 0.657038 12.9292 2.33622 12.9292 4.78196C12.9292 6.40637 12.3634 7.84824 11.3961 9.08936L9.93594 7.92127C10.8303 6.88092 11.2136 5.69458 11.2136 4.63597C11.2136 3.30359 10.739 2.51876 9.95419 2.51876C9.27888 2.51876 9.0416 3.13931 8.82258 3.99715L8.18377 6.46115C7.78223 8.03081 6.92439 9.23541 5.31823 9.23541C3.36529 9.23541 2.01465 7.42847 2.01465 4.94622C2.01465 3.04804 2.59871 1.16812 3.71207 0L5.28172 1.09512C4.29613 2.11722 3.74858 3.54083 3.74858 4.94622C3.74858 6.26035 4.22312 7.37374 5.17222 7.37374V7.37374Z"></path>
              <path d="M3.98618 22.085V24.3847H2.27051V16.865H3.98618V19.1647L4.53374 19.7123H10.4108L10.9584 19.1647V16.865H12.674V24.3847H10.9584V22.085L10.4108 21.5374H4.53374L3.98618 22.085Z"></path>
              <path d="M2.27051 38.5476L9.79025 34.3862V33.8387H2.27051V32.1047H12.674V34.6235L5.7201 38.4016V38.9492H12.674V40.6831H2.27051V38.5476Z"></path>
              <path d="M3.83983 52.5285C3.83983 53.7514 4.66116 54.5362 5.92053 55.3028L4.75242 56.8359C2.96374 55.8138 2.01465 54.5362 2.01465 52.5468C2.01465 49.8273 4.24138 47.6553 7.47195 47.6553C10.7025 47.6553 12.9292 49.8273 12.9292 52.5468C12.9292 54.5362 11.9801 55.8138 10.1915 56.8359L9.02335 55.3028C10.2827 54.5362 11.1041 53.7514 11.1041 52.5285C11.1041 50.5573 9.47965 49.6082 7.47195 49.6082C5.46425 49.6082 3.83983 50.5573 3.83983 52.5285Z"></path>
              <path d="M3.98618 66.3631V72.3863H2.27051V63.9722H12.674V72.2037H10.9584V66.3631L10.4108 65.8156H8.47612V71.4007H6.76046V65.8156H4.53374L3.98618 66.3631V66.3631Z"></path>
              <path d="M12.674 99.107V101.407H2.27051V99.5633H10.1553L10.5021 99.0888L8.36662 95.9129L9.82675 94.9456L12.674 99.107Z"></path>
              <path d="M11.2686 118.619C10.5932 119.039 9.68065 119.258 8.80456 119.258C5.20896 119.258 1.63161 116.246 0.5 112.103L2.10615 111.61C2.56245 113.362 3.98609 115.571 5.62875 116.629L5.90253 116.429C5.77477 116.064 5.70176 115.699 5.70176 115.334C5.70176 113.198 7.14366 111.501 9.29737 111.501C11.3233 111.501 12.9295 113.216 12.9295 115.352C12.9295 116.629 12.3637 117.907 11.2686 118.619V118.619ZM7.30791 115.352C7.30791 116.465 8.1475 117.36 9.29737 117.36C10.4472 117.36 11.2686 116.465 11.2686 115.352C11.2686 114.238 10.4107 113.326 9.29737 113.326C8.18401 113.326 7.30791 114.22 7.30791 115.352Z"></path>
              <path d="M11.2686 134.388C10.5932 134.808 9.68065 135.027 8.80456 135.027C5.20896 135.027 1.63161 132.015 0.5 127.872L2.10615 127.379C2.56245 129.131 3.98609 131.34 5.62875 132.398L5.90253 132.198C5.77477 131.833 5.70176 131.467 5.70176 131.102C5.70176 128.967 7.14366 127.27 9.29737 127.27C11.3233 127.27 12.9295 128.985 12.9295 131.121C12.9295 132.398 12.3637 133.676 11.2686 134.388V134.388ZM7.30791 131.121C7.30791 132.234 8.1475 133.128 9.29737 133.128C10.4472 133.128 11.2686 132.234 11.2686 131.121C11.2686 130.007 10.4107 129.095 9.29737 129.095C8.18401 129.095 7.30791 129.989 7.30791 131.121Z"></path>
              <path d="M5.35473 142.82C6.52285 142.82 7.27118 143.532 7.67272 144.28H8.11076C8.47579 143.678 9.24237 143.167 10.3375 143.167C12.3087 143.167 13.6228 144.7 13.6228 146.781C13.6228 148.861 12.3087 150.395 10.3375 150.395C9.24237 150.395 8.47579 149.884 8.11076 149.281H7.67272C7.27118 150.03 6.52285 150.741 5.35473 150.741C3.29228 150.741 2.01465 148.934 2.01465 146.781C2.01465 144.627 3.29228 142.82 5.35473 142.82ZM5.35473 148.843C6.46809 148.843 6.9974 147.985 6.9974 146.781C6.9974 145.576 6.46809 144.718 5.35473 144.718C4.24137 144.718 3.71207 145.649 3.71207 146.781C3.71207 147.912 4.27788 148.843 5.35473 148.843ZM10.3375 148.569C11.3596 148.569 11.9254 147.821 11.9254 146.781C11.9254 145.74 11.3596 144.992 10.3375 144.992C9.31538 144.992 8.76782 145.759 8.76782 146.781C8.76782 147.803 9.33363 148.569 10.3375 148.569Z"></path>
              <path d="M10.4108 258.117H2.27051V256.219H10.4108L10.9584 255.671V252.313H12.674V262.023H10.9584V258.664L10.4108 258.117Z"></path>
              <path d="M2.27051 270.839V268.977H12.674V273.321C12.674 275.986 11.5424 277.537 9.46172 277.537C7.92857 277.537 6.92472 276.716 6.50492 275.219H6.08514L2.27051 278.012V275.785L6.26766 272.883V270.839H2.27051V270.839ZM10.9584 271.387L10.4108 270.839H7.98333V273.285C7.98333 274.873 8.53088 275.621 9.46172 275.621C10.3926 275.621 10.9584 274.873 10.9584 273.285V271.387V271.387Z"></path>
              <path d="M2.27051 284.637H12.674V287.685C12.674 291.317 10.4473 293.361 7.47228 293.361C4.49724 293.361 2.27051 291.317 2.27051 287.685V284.637V284.637ZM4.49723 286.498L3.94968 287.046V287.685C3.94968 290.167 5.46458 291.408 7.47228 291.408C9.47998 291.408 10.9949 290.167 10.9949 287.685V287.046L10.4473 286.498H4.49723V286.498Z"></path>
              <path d="M5.33681 318.986L10.5021 317.891V317.472H2.27051V315.665H12.674V319.132L7.61829 320.082V320.447L12.674 321.615V324.827H2.27051V323.02H10.5021V322.6L5.33681 321.505V318.986V318.986Z"></path>
              <path d="M2.27051 333.916V332.055H12.674V336.399C12.674 339.063 11.5424 340.615 9.46172 340.615C7.92857 340.615 6.92472 339.793 6.50492 338.297H6.08514L2.27051 341.089V338.863L6.26766 335.961V333.916H2.27051V333.916ZM10.9584 334.464L10.4108 333.916H7.98333V336.362C7.98333 337.95 8.53088 338.698 9.46172 338.698C10.3926 338.698 10.9584 337.95 10.9584 336.362V334.464V334.464Z"></path>
              <path d="M7.10724 351.22L5.46457 349.54H2.27051V347.679H12.674V349.54H8.09284V349.924L12.674 354.45V356.932L8.69515 352.844H8.09284L2.27051 356.659V354.395L7.10724 351.22V351.22Z"></path>
            </svg>
          </div>
          <div class="brand-header__content">
            <h2 class="typography-quote">
              We are the largest distributor of magic supplies in the world. Come journey into the
              mysterious.
            </h2>
            <a href="#" class="btn btn--secondary brand-header__button brand-header__button--desktop">Find a Dealer<span class="btn__icon">
                <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                </svg>
              </span>
            </a>
          </div>
          <div role="presentation" aria-hidden="true" class="brand-header__graphic brand-header__graphic--two">
            <div class="responsive-embed">
              <div class="responsive-embed__scale" style="padding-top: 123.457%"></div>
              <div class="responsive-embed__item">
                <svg width="223" height="277" viewBox="0 0 223 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M110.812 243.628C90.0785 248.463 30.5312 233.882 30.5312 179.64C30.5312 109.181 126.258 0.452881 126.258 0.452881C126.258 0.452881 183.379 76.8766 198.825 103.894C214.272 130.911 239.539 182.199 205.768 237.457C174.517 288.594 82.8538 275.405 82.8538 275.405C82.8538 275.405 190.321 262.16 194.949 195.764C199.578 129.368 126.973 44.4596 126.973 44.4596C126.973 44.4596 72.2049 129.387 66.0338 147.129C36.5518 231.041 110.812 243.628 110.812 243.628Z" fill="url(#paint0_linear_548_25545)"></path>
                  <path d="M96.7763 0.452881C96.7763 0.452881 -2.281 124.364 0.559961 182.933C3.41973 241.521 51.5279 275.574 87.2375 275.574C122.947 275.574 189.267 261.464 194.93 195.764C200.594 130.065 126.954 44.4596 126.954 44.4596L111.301 69.0875C117.51 77.6856 123.493 86.4719 129.344 95.3334C139.541 110.761 150.736 126.885 157.208 144.307C161.234 155.144 163.153 166.79 162.739 178.361C162.081 196.611 156.041 217.062 142.232 229.63C134.198 236.949 124.038 241.558 113.371 243.383C91.4895 247.108 67.934 239.62 51.8478 224.418C32.7136 206.338 27.8219 179.734 34.6139 154.862C36.1943 149.086 38.3015 143.46 40.7849 138.023C64.5474 86.0768 126.221 0.452881 126.221 0.452881H96.7575H96.7763Z" fill="url(#paint1_linear_548_25545)"></path>
                  <defs>
                    <linearGradient id="paint0_linear_548_25545" x1="126.503" y1="0.452881" x2="126.503" y2="276.929" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DCD5C8"></stop>
                      <stop offset="0.03" stop-color="#D6CDBF"></stop>
                      <stop offset="0.19" stop-color="#B6A189"></stop>
                      <stop offset="0.34" stop-color="#9F8161"></stop>
                      <stop offset="0.46" stop-color="#916E49"></stop>
                      <stop offset="0.53" stop-color="#8C6741"></stop>
                      <stop offset="0.63" stop-color="#7B5C3D"></stop>
                      <stop offset="0.83" stop-color="#514233"></stop>
                      <stop offset="0.98" stop-color="#2B2B2B"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_548_25545" x1="97.8863" y1="275.574" x2="97.8863" y2="0.452881" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DCD5C8"></stop>
                      <stop offset="0.03" stop-color="#D6CDBF"></stop>
                      <stop offset="0.2" stop-color="#B6A189"></stop>
                      <stop offset="0.35" stop-color="#9F8161"></stop>
                      <stop offset="0.47" stop-color="#916E49"></stop>
                      <stop offset="0.54" stop-color="#8C6741"></stop>
                      <stop offset="0.62" stop-color="#6D543A"></stop>
                      <stop offset="0.71" stop-color="#504233"></stop>
                      <stop offset="0.8" stop-color="#3B352E"></stop>
                      <stop offset="0.9" stop-color="#2F2D2B"></stop>
                      <stop offset="0.98" stop-color="#2B2B2B"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div class="brand-header__actions-mobile">
            <a href="#" class="btn btn--secondary brand-header__button brand-header__button--mobile">Find a Dealer<span class="btn__icon">
                <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="product-cards-carousel">
      <div class="product-cards-carousel__bg">
        <svg width="1729" height="1785" viewBox="0 0 1729 1785" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
          <path d="M50.2495 762.115L44.0355 777.233L25.3002 776.399C35.9662 790.867 37.6357 801.719 31.4216 816.837C25.3002 831.676 13.7995 841.322 -0.112808 843.548C-14.6743 845.496 -29.5141 842.25 -55.2054 831.769L-127.178 802.183C-159.269 789.012 -168.915 782.52 -177.077 767.216C-184.126 754.603 -184.589 738.835 -178.561 724.367C-169.193 701.551 -148.696 689.4 -124.767 692.739C-116.605 693.945 -113.081 695.058 -88.4094 705.168L-101.208 736.331C-113.544 731.23 -121.706 728.262 -126.436 726.685C-136.824 723.903 -146.006 727.706 -149.623 736.609C-152.777 744.308 -150.272 752.191 -142.482 757.941C-139.143 760.353 -128.569 765.454 -112.246 772.225L-47.0435 799.029C-31.5545 805.336 -17.9205 809.881 -13.4686 810.345C-5.21399 811.272 1.55676 807.098 4.61745 799.771C7.7709 792.073 5.35934 783.818 -2.15327 778.532C-6.04871 775.842 -15.6946 771.112 -32.6676 764.156L-41.0149 760.724L-48.7129 779.552L-74.3115 768.979L-53.907 719.266L50.4349 762.208L50.2495 762.115Z" fill="#DAD3C6"></path>
          <path d="M-32.768 567.435C-50.9467 558.717 -59.4794 559.366 -65.9718 569.939C-71.9077 579.678 -68.2904 590.437 -56.8824 597.393C-43.7121 605.369 -32.9533 604.906 -1.78979 596.094C43.3787 582.924 59.7023 583.017 82.7967 597.115C111.92 614.83 120.452 645.065 104.222 671.87C87.2486 699.787 55.714 706.094 24.0868 688.008L35.6803 657.958C56.1777 669.273 69.9045 668.531 77.6953 655.732C84.095 645.158 80.2924 633.472 67.4004 625.681C60.2588 621.322 51.8186 619.745 42.3582 620.58C33.5471 621.507 30.5793 621.971 6.27927 629.113C-30.5418 639.593 -50.8538 638.944 -72.0004 626.052C-100.196 608.894 -108.172 579.492 -91.8487 552.688C-76.6379 527.553 -52.3377 522.359 -20.0612 537.385L-32.8606 567.528L-32.768 567.435Z" fill="#DAD3C6"></path>
          <path d="M202.908 459.476L231.938 499.821L208.38 523.101L77.6973 339.088L108.583 308.574L292.781 439.72L268.295 463.928L228.321 434.434L202.908 459.569V459.476ZM130.935 361.997L184.358 434.063L202.908 415.791L130.935 361.997Z" fill="#DAD3C6"></path>
          <path d="M356.679 390.476L329.504 409.86L200.213 228.63L238.24 201.455C269.775 179.009 295.28 185.409 321.064 221.488C337.759 244.861 341.747 260.813 335.44 280.105L415.668 348.368L386.823 368.958L315.592 305.333L302.515 314.608L356.587 390.383L356.679 390.476ZM293.24 283.166C302.515 276.581 305.019 272.685 304.926 266.193C304.555 259.886 300.659 250.426 294.074 241.151C287.118 231.412 278.957 223.992 272.557 222.508C267.085 220.653 262.818 222.045 254.1 228.259L245.381 234.473L284.521 289.38L293.24 283.166Z" fill="#DAD3C6"></path>
          <path d="M456.113 110.93L404.545 136.25L431.349 190.786L468.541 172.515L482.175 200.432L444.983 218.704L475.312 280.474L526.88 255.154L540.514 283.071L458.988 323.046L360.953 123.08L442.479 83.1055L456.113 111.023V110.93Z" fill="#DAD3C6"></path>
          <path d="M747.247 229.742L678.891 100.914L699.388 236.976L668.688 241.614L635.484 21.4291L668.874 16.4206L733.798 140.332L714.043 9.55734L744.742 4.91992L777.946 225.104L747.247 229.742Z" fill="#DAD3C6"></path>
          <path d="M937.38 156.376C935.525 189.394 932.279 201.266 920.871 213.694C911.225 224.175 896.571 230.111 881.175 229.183C865.5 228.348 851.495 220.836 843.148 209.335C833.224 195.701 831.184 183.273 833.039 150.625L837.305 72.9023C839.067 40.2548 842.499 28.012 853.814 15.5837C863.46 5.10313 878.114 -0.832754 893.789 0.0947298C909.092 0.929465 923.468 8.44208 931.444 19.9429C941.368 33.5769 943.409 45.7269 941.554 78.6526L937.288 156.376H937.38ZM866.613 148.77C865.5 169.732 865.593 179.841 866.984 184.571C869.21 192.733 874.961 197.742 882.937 198.205C891.285 198.669 897.87 193.661 900.745 184.479C901.95 180.212 903.249 169.546 904.269 150.904L908.164 80.5076C909.37 58.8044 909.185 49.4369 907.794 44.7067C905.568 36.5448 899.817 31.5365 892.119 31.1655C883.494 30.7018 876.816 35.7101 873.94 44.8922C872.735 49.1586 871.436 60.4739 870.416 78.4671L866.521 148.77H866.613Z" fill="#DAD3C6"></path>
          <path d="M1042.65 251.817L1010.29 243.748L1056.66 57.7874L1022.34 49.2546L1029.85 19.1113L1131.6 44.5244L1124.09 74.6677L1089.12 65.9493L1042.75 251.91L1042.65 251.817Z" fill="#DAD3C6"></path>
          <path d="M1250.32 285.112L1218.51 323.231L1190.22 306.258L1336.11 134.117L1373.3 156.47L1291.78 367.287L1262.28 349.572L1281.02 303.569L1250.41 285.204L1250.32 285.112ZM1326.93 191.343L1270.35 260.904L1292.71 274.353L1327.02 191.343H1326.93Z" fill="#DAD3C6"></path>
          <path d="M1393.98 455.026L1327.57 396.038L1475.5 229.555L1500.45 251.722L1373.2 395.018L1414.66 431.839L1394.07 455.026H1393.98Z" fill="#DAD3C6"></path>
          <path d="M1479.13 558.997L1573.64 460.035L1452.23 522.826L1434.88 499.546L1593.76 339.926L1613.7 366.73L1516.69 459.571L1636.15 396.966L1652.66 419.226L1558.89 516.333L1676.03 450.575L1695.32 476.544L1496.38 582.277L1479.03 558.997H1479.13Z" fill="#DAD3C6"></path>
          <path d="M1589.96 652.862L1541.82 665.198L1528.74 634.869L1747.72 580.426L1764.88 620.308L1575.49 743.756L1561.95 712.129L1604.06 685.695L1589.96 652.862ZM1707.01 621.513L1620.38 644.886L1630.68 668.815L1707.01 621.513Z" fill="#DAD3C6"></path>
          <path d="M1595.9 838.915L1589.68 806.082L1678.26 789.295L1800.68 723.629L1807.18 757.76L1725.65 797.364L1815.9 803.763L1822.2 836.875L1684.47 822.22L1595.9 839.008V838.915Z" fill="#DAD3C6"></path>
          <path d="M1770.35 992.317C1790.48 991.111 1797.62 986.381 1798.18 974.045C1798.64 962.73 1790.2 955.032 1776.94 954.475C1761.54 953.826 1752.36 959.484 1729.36 982.3C1696.34 1015.78 1681.96 1023.57 1654.97 1022.46C1620.93 1021.16 1598.77 998.902 1599.97 967.553C1601.27 934.905 1625.85 914.13 1662.21 914.594L1666.66 946.499C1643.29 946.499 1631.6 953.826 1631.04 968.851C1630.58 981.187 1639.58 989.534 1654.6 990.183C1662.95 990.554 1671.11 987.865 1678.99 982.485C1686.23 977.384 1688.64 975.529 1706.35 957.536C1733.44 930.546 1751.52 921.271 1776.19 922.199C1809.21 923.497 1830.45 945.386 1829.15 976.735C1828.04 1006.14 1809.31 1022.37 1773.78 1024.96L1770.35 992.409V992.317Z" fill="#DAD3C6"></path>
          <path d="M1604.15 1197.57L1562.04 1171.23L1575.03 1140.81L1765.62 1261.57L1748.65 1301.45L1528.65 1249.79L1542.1 1218.16L1590.24 1230.31L1604.24 1197.48L1604.15 1197.57ZM1707.56 1260.55L1630.86 1214.08L1620.66 1238.01L1707.56 1260.55Z" fill="#DAD3C6"></path>
          <path d="M1599.61 1441.87C1616.86 1452.25 1625.48 1452.44 1632.9 1442.51C1639.67 1433.43 1637.17 1422.3 1626.41 1414.32C1614.07 1405.14 1603.32 1404.58 1571.41 1410.42C1525.22 1419.33 1508.99 1417.57 1487.29 1401.43C1460.02 1381.02 1454.27 1350.14 1473.1 1325C1492.67 1298.75 1524.67 1295.6 1554.44 1316.56L1540.06 1345.41C1520.77 1332.24 1507.04 1331.59 1498.05 1343.65C1490.63 1353.57 1493.32 1365.53 1505.37 1374.53C1512.05 1379.54 1520.31 1381.86 1529.86 1381.95C1538.67 1381.95 1541.73 1381.67 1566.59 1376.85C1604.24 1369.99 1624.37 1372.49 1644.22 1387.24C1670.74 1406.99 1675.85 1437.04 1657.02 1462.18C1639.49 1485.74 1614.82 1488.61 1584.02 1470.62L1599.61 1441.87Z" fill="#DAD3C6"></path>
          <path d="M1301.14 1486.39L1329.15 1468.21L1433.49 1628.94L1463.17 1609.65L1480.05 1635.71L1392.13 1692.75L1375.25 1666.69L1405.48 1647.03L1301.14 1486.29V1486.39Z" fill="#DAD3C6"></path>
          <path d="M1231.76 1630.15L1201.99 1534.15L1233.89 1524.23L1299.84 1736.9L1267.93 1746.83L1240.94 1659.83L1205.51 1670.77L1232.5 1757.77L1200.6 1767.7L1134.65 1555.02L1166.56 1545.1L1196.33 1641.09L1231.76 1630.15Z" fill="#DAD3C6"></path>
          <path d="M999.151 1753.97L1056.56 1753.23L1055.82 1692.48L1014.45 1693.03L1014.08 1661.96L1055.45 1661.41L1054.61 1592.59L997.203 1593.33L996.832 1562.26L1087.63 1561.14L1090.51 1783.83L999.707 1784.95L999.336 1753.88L999.151 1753.97Z" fill="#DAD3C6"></path>
          <path d="M885.996 1538.23L918.087 1547.32L893.601 1634.04L897.682 1772.98L864.293 1763.52L865.313 1672.9L819.31 1750.81L786.848 1741.63L861.511 1624.95L885.996 1538.23Z" fill="#DAD3C6"></path>
          <path d="M683.621 1481L722.204 1449.75L746.69 1471.92L570.375 1612.71L538.191 1583.58L658.764 1392.43L684.27 1415.52L657.095 1457.08L683.621 1481ZM590.409 1558.26L659.414 1500.85L640.122 1483.42L590.502 1558.26H590.409Z" fill="#DAD3C6"></path>
          <path d="M617.217 1331.68L634.375 1360.34L443.221 1474.61L419.292 1434.45C397.403 1397.72 404.267 1376.11 445.54 1351.44C487.091 1326.58 509.443 1330.75 531.332 1367.48L538.195 1378.98L617.31 1331.68H617.217ZM506.012 1385.66C494.882 1367.02 486.164 1366 462.606 1380.1C439.419 1394.01 436.079 1402.17 447.209 1420.81L452.682 1429.99L511.391 1394.94L505.919 1385.75L506.012 1385.66Z" fill="#DAD3C6"></path>
          <path d="M559.426 1199.43L566.011 1232.17L347.681 1275.86L338.499 1230.04C330.152 1188.12 343.878 1170.03 390.994 1160.66C438.482 1151.2 458.144 1162.52 466.492 1204.44L469.088 1217.52L559.426 1199.43ZM436.534 1213.16C432.268 1191.92 424.384 1188.02 397.487 1193.4C370.961 1198.69 365.118 1205.37 369.384 1226.61L371.518 1237.09L438.667 1223.64L436.534 1213.16Z" fill="#DAD3C6"></path>
          <path d="M369.205 971.725L361.229 1028.58L421.422 1037.02L427.173 996.025L457.872 1000.29L452.122 1041.29L520.199 1050.84L528.176 993.985L558.968 998.251L546.354 1088.22L325.799 1057.24L338.412 967.273L369.205 971.633V971.725Z" fill="#DAD3C6"></path>
          <path d="M544.59 902.543L584.379 932.315L568.89 961.531L389.236 825.098L409.548 786.793L624.446 856.911L608.308 887.332L561.377 871.101L544.683 902.636L544.59 902.543ZM446.833 831.034L519.363 883.808L531.605 860.806L446.926 831.034H446.833Z" fill="#DAD3C6"></path>
          <path d="M673.785 806.54L648.743 828.614L501.459 661.574L536.518 630.689C565.548 605.09 591.61 608.893 620.919 642.19C639.932 663.707 645.59 679.196 641.231 699.044L728.043 758.681L701.517 782.054L624.165 726.034L612.108 736.607L673.693 806.54H673.785ZM599.679 706.279C608.212 698.766 610.345 694.685 609.603 688.193C608.583 681.978 603.667 672.889 596.155 664.356C588.178 655.36 579.368 648.867 572.783 647.94C567.218 646.641 563.044 648.496 555.067 655.545L547.091 662.594L591.703 713.235L599.679 706.186V706.279Z" fill="#DAD3C6"></path>
        </svg>
      </div>
      <div class="container">
        <div class="product-cards-carousel__header">
          <div class="product-cards-carousel__header-left">
            <h2 class="product-cards-carousel__title typography-heading-md">
              Check out the latest drop
            </h2>
            <p class="product-cards-carousel__subtitle typography-body-sm">
              New magic that thrills
            </p>
          </div>
          <div class="product-cards-carousel__header-right">
            <a href="#" class="btn btn--link product-cards-carousel__view-more">Peek New Arrivals<span class="btn__icon">
                <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div>
          <div class="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized" id="splide02" role="region" aria-roledescription="carousel">
            <div class="splide__track splide__track--slide splide__track--ltr splide__track--draggable" id="splide02-track" style="padding-left: 0px; padding-right: 2rem" aria-live="polite" aria-atomic="true">
              <ul class="splide__list" id="splide02-list" role="presentation" style="transform: translateX(0px)">
                <li class="splide__slide is-active is-visible" id="splide02-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem)">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation" />
                    </div>
                    <div class="card__content">
                      <h3 class="card__title typography-body-lg">Magic Cards Set</h3>
                      <p class="card__description">Card description</p>
                      <div class="flex space-x-3 card__price typography-body-sm">
                        <span class="color-secondary-light">Wholesale $19.99</span>
                        <span aria-hidden="true" role="presentation">|</span>
                        <span> Retail $29.99 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="splide__slide is-visible is-next" id="splide02-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem)">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation" />
                    </div>
                    <div class="card__content">
                      <h3 class="card__title typography-body-lg">The Vault Set</h3>
                      <p class="card__description">Card description</p>
                      <div class="flex space-x-3 card__price typography-body-sm">
                        <span class="color-secondary-light">Wholesale $19.99</span>
                        <span aria-hidden="true" role="presentation">|</span>
                        <span> Retail $29.99 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="splide__slide is-visible" id="splide02-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem)">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation" />
                    </div>
                    <div class="card__content">
                      <h3 class="card__title typography-body-lg">Magic Cards Set</h3>
                      <p class="card__description">Card description</p>
                      <div class="flex space-x-3 card__price typography-body-sm">
                        <span class="color-secondary-light">Wholesale $19.99</span>
                        <span aria-hidden="true" role="presentation">|</span>
                        <span> Retail $29.99 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="splide__slide is-visible" id="splide02-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem)">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation" />
                    </div>
                    <div class="card__content">
                      <h3 class="card__title typography-body-lg">The Vault Set</h3>
                      <p class="card__description">Card description</p>
                      <div class="flex space-x-3 card__price typography-body-sm">
                        <span class="color-secondary-light">Wholesale $19.99</span>
                        <span aria-hidden="true" role="presentation">|</span>
                        <span> Retail $29.99 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="splide__slide" id="splide02-slide05" role="tabpanel" aria-roledescription="slide" aria-label="5 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem)" aria-hidden="true">
                  <a href="#" class="card" tabindex="-1">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation" />
                    </div>
                    <div class="card__content">
                      <h3 class="card__title typography-body-lg">Magic Cards Set</h3>
                      <p class="card__description">Card description</p>
                      <div class="flex space-x-3 card__price typography-body-sm">
                        <span class="color-secondary-light">Wholesale $19.99</span>
                        <span aria-hidden="true" role="presentation">|</span>
                        <span> Retail $29.99 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="splide__slide" id="splide02-slide06" role="tabpanel" aria-roledescription="slide" aria-label="6 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem)" aria-hidden="true">
                  <a href="#" class="card" tabindex="-1">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation" />
                    </div>
                    <div class="card__content">
                      <h3 class="card__title typography-body-lg">The Vault Set</h3>
                      <p class="card__description">Card description</p>
                      <div class="flex space-x-3 card__price typography-body-sm">
                        <span class="color-secondary-light">Wholesale $19.99</span>
                        <span aria-hidden="true" role="presentation">|</span>
                        <span> Retail $29.99 </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="product-cards-carousel__pagination">
              <ul class="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
                <li role="presentation">
                  <button class="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide02-slide01 splide02-slide02 splide02-slide03 splide02-slide04" aria-label="Go to page 1" aria-selected="true"></button>
                </li>
                <li role="presentation">
                  <button class="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide03 splide02-slide04 splide02-slide05 splide02-slide06" aria-label="Go to page 2" tabindex="-1"></button>
                </li>
              </ul>
              <a href="#" class="btn btn--link product-cards-carousel__view-more">Peek New Arrivals<span class="btn__icon">
                  <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="text-image-split text-image-split--image-first bg-background-bone color-primary-smoke">
      <div class="container">
        <div class="text-image-split__content">
          <h2 class="typography-h2">THE MAGIC OF ANVERDI</h2>
          <div class="rte">
            <p class="typography-body-sm">
              The extraordinary Tony Anverdi changed the magic industry decades ago, and his
              secrets were well hidden. Until now. Peek behind the curtain, and indulge yourself
              in all of Anverdi’s curious pleasures.
            </p>
          </div>
          <div class="actions">
            <a href="#" class="btn btn--secondary">See Anverdi’s Magic</a>
          </div>
        </div>
        <div class="text-image-split__image">
          <div class="text-image-split__image-tag bg-secondary-water color-primary-dove typography-heading-xs">
            <div class="text-image-split__image-tag__inner">
              <span class="text-image-split__image-tag__decoration">
                <svg enable-background="new 0 0 34.3 36.8" viewBox="0 0 34.3 36.8" xmlns="http://www.w3.org/2000/svg">
                  <path d="m34.3 19.7-9.4-5.4v-5.7l-14.8-8.6-5.1 3-.3 11.1-4.7 2.9v16.9l5.5 2.9 9.4-5.3 4.9 2.7 14.5-8.6zm-1.5.3-3.6 2-9.5 5.4-4.3-2.4v-4l3.9 2.3 3.9-2.1 1.6-.9v-4.9zm-22.2 7.7v-4.2l3.8 2.1v4.2zm-.5-11-4-2.3 4-2.4 3.9 2.5zm1.9 0 2.4-1.4v3.9l-3.3-2zm-.9 5.9 3.4-2.2v4zm12.8-8.9v6l-4 2.2v-10.2l4-2zm-13.8-12.6 13.2 7.7-4 2-12.9-7.6zm-4.1 2.9 12.9 7.6v10.1l-3.4-2.2v-5.4l-5.3-3.4-4.4 2.6zm-.9 11 4 2.3-3.6 2.1-4-2.3zm-.1 20.2-4-2.1v-15.1l4 2.3zm1 0v-14.9l4.1-2.4 3.4 2-3.9 2.5v5.9l4.3 2.4zm9.4-4.8v-4.2l3.8 2.1v4.3zm4.9 2.2v-4.3l8.9-5.1 4.2-2.4v4z"></path>
                </svg>
              </span>
              <span class="text-image-split__image-tag__text">BEGINNER FRIENDLY</span>
            </div>
          </div>
          <img src="/static/images/placeholder--split.jpg" alt="Anverdi Book" width="1789" height="1289" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="page-section callout-grid">
      <div class="container">
        <h2 class="callout-grid__title typography-section">Popular Collections</h2>
        <div class="callout-grid__grid">
          <a href="#" class="callout-grid__area callout-grid__area--primary">
            <img src="/static/images/callout-grid-primary.jpg" loading="lazy" width="1348" height="1661" alt="Toy &amp; Hobby Collection" />
            <div class="callout-grid__area__title typography-heading-xs">
              Toy &amp; hobby collection
              <svg width="23" height="16" viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.27 7.13C18.62 7.13 17.18 6.18 15.99 4.3C15.5 3.52 15.15 2.73 14.95 2.21C14.84 1.92 14.76 1.69 14.71 1.52L14.56 1L13.6 1.25C13.53 1.27 12.93 1.44 12.93 1.44L12.64 1.52L12.82 2.12C12.88 2.32 12.97 2.59 13.1 2.92C13.33 3.52 13.73 4.44 14.31 5.36C14.74 6.04 15.21 6.63 15.71 7.13H2V9.11H15.72C15.21 9.61 14.74 10.21 14.32 10.88C13.74 11.8 13.34 12.71 13.11 13.32C12.98 13.65 12.89 13.93 12.83 14.12L12.66 14.7L12.94 14.79C12.94 14.79 13.53 14.97 13.62 15L14.29 15.17L14.59 15.19L14.73 14.72C14.78 14.56 14.86 14.32 14.97 14.03C15.17 13.51 15.51 12.72 16.01 11.94C17.2 10.06 18.63 9.11 20.29 9.11H20.59V7.13H20.29H20.27Z"></path>
              </svg>
            </div>
          </a>
          <a href="#" class="callout-grid__area callout-grid__area--secondary">
            <img src="/static/images/callout-grid-secondary.jpg" loading="lazy" width="1380" height="813" alt="Cult Classics" />
            <div class="callout-grid__area__title typography-heading-xs">
              Cult Classics
              <svg width="23" height="16" viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.27 7.13C18.62 7.13 17.18 6.18 15.99 4.3C15.5 3.52 15.15 2.73 14.95 2.21C14.84 1.92 14.76 1.69 14.71 1.52L14.56 1L13.6 1.25C13.53 1.27 12.93 1.44 12.93 1.44L12.64 1.52L12.82 2.12C12.88 2.32 12.97 2.59 13.1 2.92C13.33 3.52 13.73 4.44 14.31 5.36C14.74 6.04 15.21 6.63 15.71 7.13H2V9.11H15.72C15.21 9.61 14.74 10.21 14.32 10.88C13.74 11.8 13.34 12.71 13.11 13.32C12.98 13.65 12.89 13.93 12.83 14.12L12.66 14.7L12.94 14.79C12.94 14.79 13.53 14.97 13.62 15L14.29 15.17L14.59 15.19L14.73 14.72C14.78 14.56 14.86 14.32 14.97 14.03C15.17 13.51 15.51 12.72 16.01 11.94C17.2 10.06 18.63 9.11 20.29 9.11H20.59V7.13H20.29H20.27Z"></path>
              </svg>
            </div>
          </a>
          <a href="#" class="callout-grid__area callout-grid__area--tertiary">
            <img src="/static/images/callout-grid-tertiary.jpg" loading="lazy" width="674" height="813" alt="New Magicians Collection" />
            <div class="callout-grid__area__title typography-heading-xs">
              New Magicians Collection
              <svg width="23" height="16" viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.27 7.13C18.62 7.13 17.18 6.18 15.99 4.3C15.5 3.52 15.15 2.73 14.95 2.21C14.84 1.92 14.76 1.69 14.71 1.52L14.56 1L13.6 1.25C13.53 1.27 12.93 1.44 12.93 1.44L12.64 1.52L12.82 2.12C12.88 2.32 12.97 2.59 13.1 2.92C13.33 3.52 13.73 4.44 14.31 5.36C14.74 6.04 15.21 6.63 15.71 7.13H2V9.11H15.72C15.21 9.61 14.74 10.21 14.32 10.88C13.74 11.8 13.34 12.71 13.11 13.32C12.98 13.65 12.89 13.93 12.83 14.12L12.66 14.7L12.94 14.79C12.94 14.79 13.53 14.97 13.62 15L14.29 15.17L14.59 15.19L14.73 14.72C14.78 14.56 14.86 14.32 14.97 14.03C15.17 13.51 15.51 12.72 16.01 11.94C17.2 10.06 18.63 9.11 20.29 9.11H20.59V7.13H20.29H20.27Z"></path>
              </svg>
            </div>
          </a>
          <a href="#" class="callout-grid__area callout-grid__area--quaternary">
            <img src="/static/images/callout-grid-quaternary.jpg" loading="lazy" width="674" height="813" alt="Best Sellers" />
            <div class="callout-grid__area__title typography-heading-xs">
              Best Sellers
              <svg width="23" height="16" viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.27 7.13C18.62 7.13 17.18 6.18 15.99 4.3C15.5 3.52 15.15 2.73 14.95 2.21C14.84 1.92 14.76 1.69 14.71 1.52L14.56 1L13.6 1.25C13.53 1.27 12.93 1.44 12.93 1.44L12.64 1.52L12.82 2.12C12.88 2.32 12.97 2.59 13.1 2.92C13.33 3.52 13.73 4.44 14.31 5.36C14.74 6.04 15.21 6.63 15.71 7.13H2V9.11H15.72C15.21 9.61 14.74 10.21 14.32 10.88C13.74 11.8 13.34 12.71 13.11 13.32C12.98 13.65 12.89 13.93 12.83 14.12L12.66 14.7L12.94 14.79C12.94 14.79 13.53 14.97 13.62 15L14.29 15.17L14.59 15.19L14.73 14.72C14.78 14.56 14.86 14.32 14.97 14.03C15.17 13.51 15.51 12.72 16.01 11.94C17.2 10.06 18.63 9.11 20.29 9.11H20.59V7.13H20.29H20.27Z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="hero hero--page hero--mobile-overlay hero--dark hero--align-left">
      <div class="hero__inner">
        <div class="hero__background">
          <img src="/static/images/hero--left-aligned-background.jpg" alt="Bridging ordinary" width="1729" height="973" loading="lazy" class="hero__background--image" />
        </div>
        <div class="hero__brand-element">
          <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M79.9225 79.0568C92.5536 86.6031 108.131 88.7063 137.947 63.2016C137.276 59.8734 136.329 56.6492 135.162 53.5289C111.09 80.5014 94.6569 83.3442 80.8355 77.3696C88.5667 78.2248 96.4481 77.9243 104.792 72.331C112.916 67.1192 121.491 56.8572 130.32 43.4749C128.274 40.0543 125.928 36.8532 123.305 33.8948C116.972 48.5944 110.385 60.1392 103.359 66.6107C96.2054 73.4751 88.5782 75.0352 80.824 75.4513C95.6507 72.2733 107.843 60.3703 112.165 23.9795C108.397 21.3562 104.341 19.1258 100.042 17.3577C104.075 56.3949 93.6746 67.7201 80.2693 73.6138C91.5598 64.6461 100.435 52.6044 86.5905 13.5095C83.1468 12.9316 79.6221 12.6196 76.0165 12.6196C75.5542 12.6196 75.1036 12.6196 74.6529 12.6427C95.2 48.5482 88.5551 61.5953 78.894 72.2733C86.4518 59.6076 88.555 43.9834 62.8307 14.0064C59.5141 14.7113 56.2899 15.6705 53.1928 16.8723C80.327 41.0366 83.193 57.5043 77.1953 71.3603C78.0504 63.6292 77.75 55.7477 72.1567 47.4041C66.9333 39.2569 56.625 30.6474 43.1851 21.8069C39.7991 23.8755 36.621 26.2445 33.6857 28.8909C48.3969 35.2353 59.9533 41.8224 66.4248 48.8486C73.2893 56.002 74.8493 63.6291 75.2653 71.3834C72.0873 56.5682 60.2075 44.3879 23.886 40.0659C21.309 43.8217 19.1133 47.8664 17.3798 52.1537C56.2437 48.1784 67.5226 58.5791 73.4163 71.9497C64.4717 60.6823 52.4763 51.8302 13.6356 65.5128C13.0809 68.8757 12.792 72.3195 12.792 75.8442C12.792 76.3527 12.7919 76.8611 12.8151 77.358C48.4547 57.0652 61.444 63.6869 72.0873 73.3249C59.4794 65.7902 43.9246 63.6754 14.1903 89.0761C14.8952 92.3697 15.8428 95.5708 17.0447 98.6448C41.0125 71.8688 57.3994 69.0606 71.1745 75.0237C63.4433 74.1685 55.5619 74.469 47.2182 80.0622C39.1635 85.2279 30.658 95.3628 21.9214 108.572C23.9669 111.935 26.3128 115.101 28.9246 118.013C35.1996 103.545 41.7058 92.1732 48.6627 85.7826C55.8161 78.9182 63.4433 77.358 71.1976 76.942C56.4633 80.0969 44.3291 91.8843 39.9377 127.755C43.6589 130.344 47.6573 132.539 51.8985 134.284C48.0734 95.8482 58.4279 84.6385 71.7407 78.7795C60.5195 87.6894 51.6904 99.627 65.1535 138.121C68.6782 138.734 72.2953 139.046 75.9934 139.046C76.3169 139.046 76.629 139.046 76.9526 139.034C56.9024 103.66 63.5126 90.7171 73.1159 80.12C65.6043 92.6933 63.478 108.19 88.6592 137.774C91.9643 137.104 95.1653 136.168 98.2624 135.001C71.6598 111.114 68.8631 94.7734 74.8146 81.0214C73.9594 88.7641 74.26 96.634 79.8533 104.978C85.0074 113.009 95.096 121.48 108.247 130.205C111.645 128.183 114.834 125.86 117.781 123.26C103.336 116.996 91.9758 110.478 85.5852 103.533C78.7207 96.3797 77.1606 88.7526 76.7445 80.9983C79.911 95.7441 91.71 107.89 127.662 112.27C130.297 108.549 132.527 104.527 134.318 100.274C95.697 104.169 84.4641 93.7911 78.5935 80.4551C87.5266 91.711 99.5104 100.563 138.247 86.9382C138.883 83.3327 139.218 79.6346 139.218 75.8442C139.218 75.5784 139.218 75.301 139.218 75.0352C103.578 95.3397 90.5775 88.7063 79.9457 79.0799L79.9225 79.0568Z" fill="#C9F327"></path>
            <path d="M3.33961 60.4395L9.40667 61.6529L9.11777 63.0628L3.05071 61.8494L2.56529 62.173L2.06838 64.6691L0.785645 64.4149L2.24175 57.1807L3.52448 57.4349L3.016 59.9426L3.33961 60.428V60.4395Z" fill="#C9F327"></path>
            <path d="M11.0819 55.1932L10.6197 56.5338L3.1543 53.9451L3.61658 52.6046L6.23981 53.5176L6.77143 53.2633L7.70748 50.5707L7.45328 50.0391L4.82998 49.1262L5.29226 47.7856L12.7576 50.3742L12.2954 51.7148L9.46406 50.7325L8.93245 50.9867L7.99639 53.6909L8.25067 54.2225L11.0819 55.2048V55.1932Z" fill="#C9F327"></path>
            <path d="M13.6478 45.3473L15.7279 41.2795L16.8836 41.8688L13.9713 47.5545L6.93359 43.9605L9.7764 38.3904L10.932 38.9798L8.90968 42.932L9.09462 43.4867L10.4005 44.157L12.3304 40.3781L13.486 40.9675L11.5561 44.7463L13.0584 45.5206L13.6131 45.3357L13.6478 45.3473Z" fill="#C9F327"></path>
            <path d="M25.4809 27.0303L23.1928 29.5149L24.2328 31.5488L23.2159 32.6467L19.5063 25.0195L20.7429 23.679L28.6358 26.7761L27.6073 27.897L25.4925 27.0187L25.4809 27.0303ZM24.0248 26.7992V26.4294L21.5403 25.4124L21.2629 25.7129L22.4878 28.105H22.8346L24.0248 26.7992Z" fill="#C9F327"></path>
            <path d="M31.4325 24.3495L30.3462 25.2509L25.3076 19.1607L27.85 17.0574C29.4101 15.7631 30.8663 15.6822 31.8717 16.8956C32.6113 17.797 32.6228 18.7793 31.941 19.75L32.149 19.9927L35.6275 20.871L34.3216 21.9457L30.6929 21.0097L29.491 22.0035L31.4209 24.3495H31.4325ZM27.5495 18.9989L27.4918 19.5883L28.6705 21.0097L30.1035 19.8309C31.028 19.0567 31.2014 18.3748 30.7507 17.8317C30.2884 17.277 29.5835 17.3232 28.659 18.0859L27.5495 18.9989Z" fill="#C9F327"></path>
            <path d="M37.5351 12.2963L40.794 17.5544L39.569 18.3172L36.3101 13.059L35.7323 12.9204L33.5597 14.2609L32.8779 13.1515L39.1414 9.26855L39.8232 10.378L37.6507 11.7185L37.5119 12.2963H37.5351Z" fill="#C9F327"></path>
            <path d="M57.1686 10.5974C55.0076 11.2214 53.1239 9.85778 52.4883 7.62742C51.8527 5.39705 52.7079 3.24756 54.8689 2.62352C57.03 1.99947 58.9136 3.36313 59.5492 5.59349C60.1847 7.82386 59.3297 9.97335 57.1686 10.5974ZM55.2387 3.90628C53.8172 4.32231 53.4821 5.73217 53.9097 7.22294C54.3373 8.7137 55.3658 9.73066 56.7987 9.32619C58.2202 8.91017 58.5553 7.5003 58.1277 6.00954C57.7002 4.51878 56.6717 3.50181 55.2387 3.90628Z" fill="#C9F327"></path>
            <path d="M63.3171 8.87514L62.1846 1.05154L68.3672 0.150146L68.5521 1.44445L64.1607 2.08003L63.814 2.55384L64.022 4.00995L68.2169 3.39747L68.4019 4.69177L64.2069 5.30425L64.6923 8.67871L63.3055 8.87514H63.3171Z" fill="#C9F327"></path>
            <path d="M86.2216 2.26503L85.4357 8.40142L84.0027 8.21655L84.7885 2.08012L84.4303 1.61788L81.8994 1.2943L82.0612 0L89.3765 0.936058L89.2146 2.23036L86.6837 1.90678L86.2216 2.26503Z" fill="#C9F327"></path>
            <path d="M92.0462 9.62634L90.6826 9.25656L92.7395 1.62939L94.1032 1.9992L93.3752 4.68024L93.6641 5.18872L96.4261 5.92834L96.9345 5.63943L97.651 2.95836L99.0147 3.32817L96.9576 10.9553L95.594 10.5855L96.3798 7.69645L96.0909 7.18797L93.3405 6.44835L92.8321 6.73726L92.0462 9.62634Z" fill="#C9F327"></path>
            <path d="M102.007 11.4757L106.214 13.2669L105.706 14.4688L99.8232 11.9726L102.909 4.69214L108.664 7.13054L108.155 8.33237L104.064 6.59892L103.521 6.81849L102.944 8.1706L106.85 9.82314L106.341 11.025L102.435 9.37246L101.776 10.9325L101.996 11.4757H102.007Z" fill="#C9F327"></path>
            <path d="M121.746 21.414L124.808 17.5773L125.918 18.4556L122.728 22.4425C121.619 23.8293 119.735 23.887 118.348 22.7776C116.961 21.6682 116.603 19.8193 117.713 18.4325L120.902 14.4456L122.011 15.3238L118.937 19.1721C118.256 20.0272 118.383 21.102 119.18 21.7492C119.978 22.3847 121.064 22.2807 121.757 21.414H121.746Z" fill="#C9F327"></path>
            <path d="M126.438 30.0811L128.403 23.8523L128.114 23.5518L123.976 27.4925L123.063 26.5333L128.796 21.0903L130.113 22.4771L128.264 28.1975L128.553 28.4979L132.378 24.8577L133.291 25.8169L127.559 31.2599L126.438 30.0811Z" fill="#C9F327"></path>
            <path d="M133.971 33.5482L132.215 33.2477L130.25 34.6692L129.418 33.5251L135.832 28.9026L136.664 30.0467L133.844 32.0806L134.017 32.3232L138.848 33.0744L139.946 34.5998L135.682 33.8487L135.312 34.1145L133.417 39.049L132.411 37.6507L133.983 33.5482H133.971Z" fill="#C9F327"></path>
            <path d="M136.918 45.3586L140.477 39.8924L140.281 39.5226L135.242 42.2037L134.618 41.0365L141.598 37.3269L142.5 39.0142L139.183 44.0296L139.379 44.3994L144.048 41.9263L144.672 43.0935L137.692 46.8031L136.929 45.3701L136.918 45.3586Z" fill="#C9F327"></path>
            <path d="M139.738 52.431C138.964 50.3278 140.189 48.3517 142.361 47.5543C144.534 46.7569 146.741 47.4618 147.515 49.5766C148.29 51.6914 147.065 53.656 144.892 54.4534C142.72 55.2508 140.512 54.5458 139.738 52.431ZM146.267 50.0273C145.759 48.629 144.326 48.4095 142.87 48.941C141.414 49.4726 140.466 50.5705 140.986 51.9688C141.506 53.3671 142.928 53.5867 144.384 53.0551C145.84 52.5235 146.787 51.4257 146.267 50.0273Z" fill="#C9F327"></path>
            <path d="M147.285 60.093L142.315 60.3935L141.899 58.452L149.353 55.5398L149.665 56.9497L144.014 58.9836L144.084 59.284L149.319 58.972L149.677 60.6015L144.788 62.4851L144.858 62.7856L150.844 62.2887L151.133 63.6408L143.147 64.0915L142.72 62.15L147.366 60.3588L147.308 60.093H147.285Z" fill="#C9F327"></path>
            <path d="M143.991 72.1119L149.445 68.5179L149.411 68.1018L143.713 68.541L143.609 67.2236L151.491 66.6111L151.641 68.5179L146.591 71.7883L146.626 72.2043L151.895 71.7883L151.999 73.1057L144.118 73.7182L143.991 72.1003V72.1119Z" fill="#C9F327"></path>
            <path d="M148.73 90.8674L142.663 89.6771L142.94 88.2672L149.007 89.4575L149.493 89.134L149.978 86.6262L151.261 86.8805L149.84 94.1263L148.557 93.872L149.042 91.3643L148.719 90.879L148.73 90.8674Z" fill="#C9F327"></path>
            <path d="M141.01 96.1601L141.472 94.8196L148.949 97.3851L148.487 98.7256L145.863 97.8242L145.332 98.0785L144.407 100.783L144.662 101.314L147.285 102.216L146.823 103.556L139.346 100.991L139.808 99.6501L142.639 100.621L143.171 100.367L144.095 97.6625L143.841 97.1308L141.01 96.1601Z" fill="#C9F327"></path>
            <path d="M138.513 105.972L136.456 110.063L135.289 109.473L138.167 103.764L145.227 107.324L142.408 112.905L141.241 112.316L143.24 108.352L143.055 107.798L141.749 107.139L139.842 110.929L138.675 110.34L140.582 106.549L139.068 105.787L138.513 105.972Z" fill="#C9F327"></path>
            <path d="M126.738 124.392L129.014 121.896L127.963 119.862L128.968 118.753L132.724 126.368L131.499 127.709L123.583 124.658L124.612 123.537L126.726 124.404L126.738 124.392ZM128.194 124.612V124.982L130.69 125.987L130.968 125.675L129.731 123.283H129.384L128.194 124.6V124.612Z" fill="#C9F327"></path>
            <path d="M120.797 127.096L121.884 126.195L126.946 132.262L124.415 134.377C122.855 135.671 121.398 135.775 120.393 134.562C119.642 133.672 119.642 132.678 120.301 131.707L120.093 131.465L116.603 130.598L117.897 129.512L121.537 130.436L122.727 129.442L120.786 127.108L120.797 127.096ZM124.704 132.435L124.75 131.846L123.571 130.425L122.138 131.615C121.214 132.389 121.04 133.071 121.491 133.614C121.953 134.169 122.658 134.123 123.583 133.348L124.692 132.424L124.704 132.435Z" fill="#C9F327"></path>
            <path d="M114.754 139.173L111.472 133.938L112.697 133.175L115.979 138.41L116.556 138.537L118.718 137.185L119.411 138.294L113.159 142.2L112.466 141.091L114.627 139.739L114.754 139.161V139.173Z" fill="#C9F327"></path>
            <path d="M95.1312 140.964C97.2923 140.329 99.1759 141.692 99.823 143.911C100.47 146.13 99.6151 148.291 97.4656 148.927C95.3046 149.562 93.4209 148.199 92.7737 145.98C92.1265 143.761 92.9818 141.6 95.1312 140.964ZM97.0842 147.644C98.5056 147.228 98.8292 145.818 98.39 144.327C97.9509 142.836 96.9224 141.819 95.501 142.236C94.0795 142.652 93.756 144.061 94.1835 145.552C94.6227 147.043 95.6512 148.06 97.0842 147.644Z" fill="#C9F327"></path>
            <path d="M88.9951 142.721L90.1623 150.544L83.9797 151.469L83.7832 150.174L88.1747 149.516L88.5214 149.042L88.3018 147.586L84.1068 148.21L83.9104 146.915L88.1053 146.291L87.5968 142.917L88.9835 142.709L88.9951 142.721Z" fill="#C9F327"></path>
            <path d="M66.1254 149.435L66.8764 143.287L68.3096 143.46L67.5584 149.608L67.9165 150.07L70.4474 150.382L70.2856 151.677L62.959 150.775L63.1206 149.481L65.6516 149.793L66.1138 149.435H66.1254Z" fill="#C9F327"></path>
            <path d="M60.3114 142.108L61.675 142.467L59.6526 150.105L58.2891 149.747L58.994 147.066L58.6935 146.557L55.9315 145.829L55.4231 146.13L54.7182 148.811L53.3545 148.453L55.3768 140.814L56.7406 141.172L55.9778 144.061L56.2783 144.57L59.0402 145.298L59.5487 144.997L60.3114 142.108Z" fill="#C9F327"></path>
            <path d="M50.3384 140.305L46.1203 138.537L46.6288 137.335L52.5225 139.809L49.4717 147.101L43.7051 144.685L44.2136 143.483L48.3045 145.194L48.8476 144.974L49.4139 143.622L45.4963 141.981L46.0048 140.779L49.9108 142.42L50.5695 140.86L50.35 140.317L50.3384 140.305Z" fill="#C9F327"></path>
            <path d="M30.4972 130.448L27.4463 134.296L26.3369 133.418L29.5033 129.419C30.6012 128.021 32.4965 127.963 33.8832 129.061C35.27 130.159 35.6513 132.019 34.5534 133.406L31.387 137.404L30.2777 136.526L33.3285 132.666C34.0103 131.811 33.8716 130.725 33.0627 130.089C32.2538 129.454 31.179 129.569 30.4857 130.436L30.4972 130.448Z" fill="#C9F327"></path>
            <path d="M25.8053 121.827L23.8753 128.067L24.1642 128.367L28.2782 124.404L29.1912 125.351L23.494 130.829L22.165 129.454L23.9793 123.722L23.6904 123.421L19.8769 127.085L18.9639 126.137L24.6611 120.659L25.7821 121.827H25.8053Z" fill="#C9F327"></path>
            <path d="M18.2594 118.406L20.016 118.695L21.9805 117.262L22.8126 118.406L16.4335 123.063L15.6015 121.919L18.4096 119.874L18.2363 119.643L13.4057 118.915L12.2964 117.389L16.5722 118.117L16.942 117.852L18.8025 112.906L19.8195 114.292L18.271 118.406H18.2594Z" fill="#C9F327"></path>
            <path d="M15.2424 106.607L11.7177 112.096L11.9142 112.466L16.9411 109.762L17.5652 110.918L10.6083 114.673L9.69539 112.986L12.9773 107.959L12.7809 107.589L8.13525 110.097L7.51123 108.941L14.4681 105.197L15.2424 106.63V106.607Z" fill="#C9F327"></path>
            <path d="M12.3764 99.5C13.1623 101.603 11.9373 103.579 9.77627 104.388C7.60368 105.197 5.39646 104.492 4.61063 102.389C3.8248 100.286 5.04977 98.3097 7.2108 97.5007C9.37183 96.6918 11.5906 97.3968 12.3764 99.5ZM5.84717 101.927C6.3672 103.314 7.78863 103.545 9.24472 103.002C10.7008 102.458 11.6369 101.361 11.1168 99.9738C10.5968 98.5871 9.17538 98.3559 7.71928 98.899C6.26319 99.4422 5.32713 100.54 5.84717 101.938V101.927Z" fill="#C9F327"></path>
            <path d="M4.77244 91.8842L9.74163 91.5607L10.1692 93.5021L2.72695 96.449L2.4149 95.0391L8.06595 92.9705L7.99662 92.6701L2.75008 93.0167L2.39184 91.3873L7.28013 89.469L7.2108 89.1685L1.21307 89.6886L0.912598 88.3365L8.90954 87.8511L9.33719 89.7926L4.69153 91.6069L4.7493 91.8727L4.77244 91.8842Z" fill="#C9F327"></path>
            <path d="M8.02008 79.8544L2.5886 83.4831L2.62323 83.8991L8.32055 83.4253L8.42452 84.7427L0.543113 85.4014L0.381378 83.4946L5.40834 80.2011L5.37364 79.7851L0.103967 80.2242L0 78.9068L7.88141 78.248L8.02008 79.866V79.8544Z" fill="#C9F327"></path>
          </svg>
        </div>
        <div class="container">
          <div class="hero__content">
            <div>
              <h2 class="hero__title typography-heading typography-heading-lg">
                Our Beginner Magic Collection
              </h2>
              <p class="hero__description">
                Every trick has a strong start — and so do all great magicians. Enter the world of
                curiosity with our collection of best-selling Beginner Magic.
              </p>
            </div>
            <div class="actions">
              <a href="#" class="btn btn--secondary btn--dark">See Anverdi’s Magic<span class="btn__icon">
                  <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section role="presentation" class="logo-ticker page-section--tall">
      <div class="container">
        <h2 class="logo-ticker__header typography-heading-lg">Elite Brands</h2>
      </div>
      <div class="marquee-wrap">
        <div class="ticker">
          <div class="ticker__logo">
            <img src="/static/images/floofly-magic-room.png" alt="Floofly Magic Room logo" width="171" height="92" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/magic-room.png" alt="Magic Room logo" width="126" height="58" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/theory-11.png" alt="Theory 11 logo" width="78" height="78" />
          </div>
        </div>
        <div class="ticker">
          <div class="ticker__logo">
            <img src="/static/images/floofly-magic-room.png" alt="Floofly Magic Room logo" width="171" height="92" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/magic-room.png" alt="Magic Room logo" width="126" height="58" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/theory-11.png" alt="Theory 11 logo" width="78" height="78" />
          </div>
        </div>
        <div class="ticker">
          <div class="ticker__logo">
            <img src="/static/images/floofly-magic-room.png" alt="Floofly Magic Room logo" width="171" height="92" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/magic-room.png" alt="Magic Room logo" width="126" height="58" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/theory-11.png" alt="Theory 11 logo" width="78" height="78" />
          </div>
        </div>
        <div class="ticker">
          <div class="ticker__logo">
            <img src="/static/images/floofly-magic-room.png" alt="Floofly Magic Room logo" width="171" height="92" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/magic-room.png" alt="Magic Room logo" width="126" height="58" />
          </div>
          <div class="ticker__logo">
            <img src="/static/images/theory-11.png" alt="Theory 11 logo" width="78" height="78" />
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- End main content -->

  <?php include '../../partials/mailing-list-signup.php'; ?>
  <?php include '../../partials/footer.php'; ?>
</body>

</html>