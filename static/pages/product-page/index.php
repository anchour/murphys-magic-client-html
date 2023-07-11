<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>

  <?php $template = 'product'; ?>
  <?php include '../../partials/head.php'; ?>
</head>

<body>

  <?php include '../../partials/header.php'; ?>

  <div class="mobile-navigation">
    <button type="button" class="mobile-navigation__close">
      <span class="sr-only">Close navigation</span>
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.61677 1L0.884766 1.71505L9.17584 10.0079L0.884766 18.2852L1.61677 19L9.90784 10.7227L18.1989 19L18.9309 18.2852L10.6398 10.0079L18.9309 1.71505L18.1989 1L9.90784 9.27735L1.61677 1Z"> </path>
      </svg>
    </button>
    <form method="get" action="" class="relative block w-full mobile-search-form">
      <label for="mobile-search-term" class="sr-only">Search</label>
      <input id="mobile-search-term" type="search" name="s" placeholder="Search" class="block w-full pl-12 text-base bg-white rounded-full text-smoke h-11 mobile-search-form__input" />
      <button type="submit" class="mobile-search-form__button absolute left-0 top-1/2 w-11 h-11 p-3 -mt-[1.375rem]">
        <span class="sr-only">Search</span>
        <svg enable-background="new 0 0 19 19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
          <path d="m16.9 8.5c0-4.7-3.8-8.5-8.5-8.5-4.6 0-8.4 3.8-8.4 8.5s3.8 8.5 8.5 8.5c2 0 3.9-.7 5.3-1.9l4 4 1.2-1.2-4-4c1.2-1.5 1.9-3.4 1.9-5.4zm-8.4 6.7c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7z"> </path>
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
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2">

              </path>
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
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2">

              </path>
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
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2">

              </path>
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
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2">

              </path>
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
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2">

              </path>
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
            <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2">

            </path>
          </svg>
        </span>
      </li>
      <li class="mobile-utility-menu__item">
        <a href="#" class="mobile-utility-menu__link">Store Locator<span class="mobile-utility-menu__link-icon">
            <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L6 7.16667L0.999999 1.33333" stroke-width="2">

              </path>
            </svg>
          </span>
        </a>
      </li>
    </ul>
    <div class="mobile-menu-actions">
      <a href="#" class="mobile-menu-actions__action btn btn--primary">Log in<span class="btn__icon">
          <svg width="23" height="16" viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.27 7.13C18.62 7.13 17.18 6.18 15.99 4.3C15.5 3.52 15.15 2.73 14.95 2.21C14.84 1.92 14.76 1.69 14.71 1.52L14.56 1L13.6 1.25C13.53 1.27 12.93 1.44 12.93 1.44L12.64 1.52L12.82 2.12C12.88 2.32 12.97 2.59 13.1 2.92C13.33 3.52 13.73 4.44 14.31 5.36C14.74 6.04 15.21 6.63 15.71 7.13H2V9.11H15.72C15.21 9.61 14.74 10.21 14.32 10.88C13.74 11.8 13.34 12.71 13.11 13.32C12.98 13.65 12.89 13.93 12.83 14.12L12.66 14.7L12.94 14.79C12.94 14.79 13.53 14.97 13.62 15L14.29 15.17L14.59 15.19L14.73 14.72C14.78 14.56 14.86 14.32 14.97 14.03C15.17 13.51 15.51 12.72 16.01 11.94C17.2 10.06 18.63 9.11 20.29 9.11H20.59V7.13H20.29H20.27Z">

            </path>
          </svg>
        </span>
      </a>
    </div>
  </div>

  <!-- Start main content -->

  <main role="main">
    <section class="page-section product-page">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol role="list" class="breadcrumb__list">
            <li class="breadcrumb__item">
              <a href="#" class="breadcrumb__link">All Products</a>
            </li>
            <li class="breadcrumb__item">
              <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="hero__breadcrumb__delimiter">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z">

                </path>
              </svg>
              <a href="#" class="breadcrumb__link">Magic Tricks</a>
            </li>
            <li class="breadcrumb__item">
              <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="hero__breadcrumb__delimiter">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z">

                </path>
              </svg>
              <a href="#" aria-current="page" class="breadcrumb__link">Atom Rings</a>
            </li>
          </ol>
        </nav>
      </div>
      <div class="container product-container">
        <div class="product-gallery">
          <div class="product-gallery__thumbnails">
            <ul class="product-gallery__thumbnails-list">
              <li class="product-gallery__thumbnails-list-item">
                <button type="button" data-slide-index="0">
                  <img alt="Video slide" src="/static/video/poster-1200x675.png" loading="lazy" width="1200" height="1200">
                </button>
              </li>
              <li class="product-gallery__thumbnails-list-item">
                <button type="button" data-slide-index="1">
                  <img alt="Image slide" src="/static/video/poster-1200x675.png" loading="lazy" width="1200" height="625">
                </button>
              </li>
              <li class="product-gallery__thumbnails-list-item">
                <button type="button" data-slide-index="2">
                  <img alt="Image slide 2" src="/static/video/poster-1200x675.png" loading="lazy" width="1200" height="625">
                </button>
              </li>
              <li class="product-gallery__thumbnails-list-item">
                <button type="button" data-slide-index="3">
                  <img alt="Image slide 2" src="/static/video/poster-1200x675.png" loading="lazy" width="1200" height="625">
                </button>
              </li>
            </ul>
          </div>

          <div class="tag tag--label tag--secondary product-form-section__tag product-form-section__tag--mobile">New</div>

          <div class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <div class="gallery-video">
                    <video preload="metadata" poster="/static/video/poster-1200x675.png" src="/static/video/video-placeholder.mp4"></video>
                    <button type="button" aria-label="Play video" class="gallery-video__button gallery-video__button--play">
                      <svg width="50" height="58" viewBox="0 0 50 58" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 29L0.499997 57.5788L0.5 0.421159L50 29Z" fill="#fff" fill-opacity="0.8"> </path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li class="splide__slide">
                  <img src="/static/video/poster-1200x675.png">
                </li>
                <li class="splide__slide">
                  <div class="gallery-video">
                    <video preload="metadata" poster="/static/video/poster-1200x675.png" src="/static/video/video-placeholder.mp4"></video>
                    <button type="button" aria-label="Play video" class="gallery-video__button gallery-video__button--play">
                      <svg width="50" height="58" viewBox="0 0 50 58" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 29L0.499997 57.5788L0.5 0.421159L50 29Z" fill="#fff" fill-opacity="0.8"> </path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li class="splide__slide">
                  <img src="/static/video/poster-1200x675.png">
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="product-form-section">
          <div class="product-form-section__inner">
            <div class="tag tag--label tag--secondary product-form-section__tag product-form-section__tag--desktop">New</div>
            <div class="product-form-section__header">
              <h1 class="typography-section product-form-section__title">Atom Rings</h1>
              <div class="product-form-section__vendor">
                <a href="#">By Apprentice Magic</a>
              </div>
            </div>
            <form action="" method="POST" class="product-form form">
              <div class="form-field">
                <label for="product-form__size" class="form-label">Size</label>
                <div class="form-field product-form__options">
                  <input id="size-xs" type="radio" name="size" class="sr-only product-form__option" value="xs">
                  <label for="size-xs"> X-Small </label>
                  <input id="size-sm" type="radio" name="size" class="sr-only product-form__option" value="sm">
                  <label for="size-sm"> Small </label>
                  <input id="size-md" type="radio" name="size" class="sr-only product-form__option" value="md">
                  <label for="size-md"> Medium </label>
                  <input id="size-lg" type="radio" name="size" class="sr-only product-form__option" value="lg">
                  <label for="size-lg"> Large </label>
                  <input id="size-xl" type="radio" name="size" class="sr-only product-form__option" value="xl">
                  <label for="size-xl"> X-Large </label>
                </div>
              </div>
              <div class="form-field">
                <label for="product-form__style" class="form-label">Style</label>
                <select class="form-select">
                  <option value="">Select a style</option>
                  <option value="1">Style 1</option>
                  <option value="2">Style 2</option>
                  <option value="3">Style 3</option>
                </select>
              </div>
              <div class="form-field">
                <label class="form-label">Color</label>
                <div class="product-form__colors">
                  <input type="radio" name="color" id="color-smoke" aria-label="Smoke" class="sr-only" value="smoke">
                  <label for="color-smoke">Smoke</label>
                  <input type="radio" name="color" id="color-water" aria-label="Water" class="sr-only" value="water">
                  <label for="color-water">Water</label>
                  <input type="radio" name="color" id="color-light" aria-label="Light" class="sr-only" value="light">
                  <label for="color-light">Light</label>
                  <input type="radio" name="color" id="color-earth" aria-label="Eart" class="sr-only" value="earth">
                  <label for="color-earth">Earth</label>
                </div>
              </div>
              <div class="form-field">
                <div class="form-label">Bulk Discount</div>
                <table class="pricing-table">
                  <tbody>
                    <tr>
                      <th>Quantity</th>
                      <td>1–11</td>
                      <td>12–23</td>
                      <td>24+</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>$3.50/ea</td>
                      <td>$3.00/ea</td>
                      <td>$2.50/ea</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="product-form-prices">
                <div class="product-form-prices__price-wrap">
                  <div class="typography-body-sm product-form-prices__label">Wholesale</div>
                  <div class="product-form-prices__price product-form-prices__price--wholesale">$3.50</div>
                </div>
                <div class="product-form-prices__price-wrap">
                  <div class="typography-body-sm product-form-prices__label">Retail</div>
                  <div class="product-form-prices__price product-form-prices__price--retail">$8.95</div>
                </div>
              </div>
              <div class="product-form-footer product-form-footer--with-quantity">
                <div class="product-form-quantity">
                  <label for="quantity" class="form-label form-label--quantity">Quantity</label>
                  <div class="quantity-input">
                    <button type="button" aria-label="Decrement quantity" class="quantity-input__button quantity-input__button--decrement">−</button>
                    <input type="text" id="quantity" pattern="[0-9]*" inputmode="numeric" class="quantity-input__field form-input">
                    <button type="button" aria-label="Increment quantity" class="quantity-input__button quantity-input__button--increment">+</button>
                  </div>
                  <div class="product-form-quantity__remaining">145 in stock</div>
                </div>
                <a href="#" class="block btn btn--primary product-form-footer__submit">Add to cart<span class="btn__icon">
                    <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z">

                      </path>
                    </svg>
                  </span>
                </a>
              </div>
            </form>
            <div class="product-form-section__details">
              <details open="" class="accordion">
                <summary class="accordion__title typography-heading-xs">Orders <div class="accordion__caret">
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L8 7L15 1" stroke="#2B2B2B">

                      </path>
                    </svg>
                  </div>
                </summary>
                <div class="accordion__content">
                  <div class="rte">
                    <p> Date Added: 11/3/2022 </p>
                    <p>Weight (lbs): 0.1</p>
                    <p>Dimensions: 4.5 x 4.5 x 0.1</p>
                    <p>⚠️ This item is potentially hazardous.</p>
                  </div>
                </div>
              </details>
              <details class="accordion">
                <summary class="accordion__title typography-heading-xs">Marketing Resources <div class="accordion__caret">
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L8 7L15 1" stroke="#2B2B2B">

                      </path>
                    </svg>
                  </div>
                </summary>
                <div class="accordion__content">
                  <div class="rte">
                    <ul>
                      <li>
                        <a href="#">🎬 Video Teaser #1 HD Version SD Version</a>
                      </li>
                      <li>
                        <a href="#">🎬 Video Teaser #2 HD Version SD Version</a>
                      </li>
                      <li>
                        <a href="#">📁 Product Photography</a>
                      </li>
                      <li>
                        <a href="#">Download All</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
              <details class="accordion">
                <summary class="accordion__title typography-heading-xs">Instructions <div class="accordion__caret">
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L8 7L15 1" stroke="#2B2B2B">

                      </path>
                    </svg>
                  </div>
                </summary>
                <div class="accordion__content">
                  <div class="rte">
                    <p> Date Added: 11/3/2022 </p>
                    <p>Weight (lbs): 0.1</p>
                    <p>Dimensions: 4.5 x 4.5 x 0.1</p>
                    <p>⚠️ This item is potentially hazardous.</p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-description page-section page-section--tall">
      <div class="container product-description__grid">
        <div class="product-description__content">
          <div class="rte">
            <p class="typography-body-md product-description__header">Description</p>
            <p class="typography-body-sm">ATOM RINGS is a VISUAL demonstration of SOLID THROUGH SOLID! The Apprentice Line of magic is focused toward beginners yet, many professional magicians around the world use these same tricks in their live shows. Learn magic the right way with the Apprentice Line of magic!</p>
            <p class="typography-body-md product-description__header">Effect</p>
            <p class="typography-body-sm">In this version, You show four separate, solid rings of steel. You explain how you have the ability to break down atoms and pass a SOLID RING THROUGH ANOTHER SOLID RING, linking them together!! You do the same with the other two rings. You can even hand out the rings to show they have been linked together!</p>
            <div class="tag tag--simple">Close-up Performer</div>
            <div class="tag tag--simple">Illusionist</div>
          </div>
        </div>
        <div class="product-description__features">
          <div class="rte">
            <p class="typography-body-md product-description__header">Features</p>
            <ul class="typography-body-sm product-description__features-list">
              <li>Easy to perform</li>
              <li>Self-working gimmick</li>
              <li>No slight of hand</li>
              <li>Easy to learn</li>
              <li>Online video instructions</li>
              <li>All props included</li>
              <li>No slight of hand</li>
              <li>Story/patter included</li>
              <li>Great quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="product-cards-carousel">
      <div class="product-cards-carousel__bg">
        <svg width="1729" height="1785" viewBox="0 0 1729 1785" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
          <path d="M50.2495 762.115L44.0355 777.233L25.3002 776.399C35.9662 790.867 37.6357 801.719 31.4216 816.837C25.3002 831.676 13.7995 841.322 -0.112808 843.548C-14.6743 845.496 -29.5141 842.25 -55.2054 831.769L-127.178 802.183C-159.269 789.012 -168.915 782.52 -177.077 767.216C-184.126 754.603 -184.589 738.835 -178.561 724.367C-169.193 701.551 -148.696 689.4 -124.767 692.739C-116.605 693.945 -113.081 695.058 -88.4094 705.168L-101.208 736.331C-113.544 731.23 -121.706 728.262 -126.436 726.685C-136.824 723.903 -146.006 727.706 -149.623 736.609C-152.777 744.308 -150.272 752.191 -142.482 757.941C-139.143 760.353 -128.569 765.454 -112.246 772.225L-47.0435 799.029C-31.5545 805.336 -17.9205 809.881 -13.4686 810.345C-5.21399 811.272 1.55676 807.098 4.61745 799.771C7.7709 792.073 5.35934 783.818 -2.15327 778.532C-6.04871 775.842 -15.6946 771.112 -32.6676 764.156L-41.0149 760.724L-48.7129 779.552L-74.3115 768.979L-53.907 719.266L50.4349 762.208L50.2495 762.115Z" fill="#DAD3C6">

          </path>
          <path d="M-32.768 567.435C-50.9467 558.717 -59.4794 559.366 -65.9718 569.939C-71.9077 579.678 -68.2904 590.437 -56.8824 597.393C-43.7121 605.369 -32.9533 604.906 -1.78979 596.094C43.3787 582.924 59.7023 583.017 82.7967 597.115C111.92 614.83 120.452 645.065 104.222 671.87C87.2486 699.787 55.714 706.094 24.0868 688.008L35.6803 657.958C56.1777 669.273 69.9045 668.531 77.6953 655.732C84.095 645.158 80.2924 633.472 67.4004 625.681C60.2588 621.322 51.8186 619.745 42.3582 620.58C33.5471 621.507 30.5793 621.971 6.27927 629.113C-30.5418 639.593 -50.8538 638.944 -72.0004 626.052C-100.196 608.894 -108.172 579.492 -91.8487 552.688C-76.6379 527.553 -52.3377 522.359 -20.0612 537.385L-32.8606 567.528L-32.768 567.435Z" fill="#DAD3C6">

          </path>
          <path d="M202.908 459.476L231.938 499.821L208.38 523.101L77.6973 339.088L108.583 308.574L292.781 439.72L268.295 463.928L228.321 434.434L202.908 459.569V459.476ZM130.935 361.997L184.358 434.063L202.908 415.791L130.935 361.997Z" fill="#DAD3C6">

          </path>
          <path d="M356.679 390.476L329.504 409.86L200.213 228.63L238.24 201.455C269.775 179.009 295.28 185.409 321.064 221.488C337.759 244.861 341.747 260.813 335.44 280.105L415.668 348.368L386.823 368.958L315.592 305.333L302.515 314.608L356.587 390.383L356.679 390.476ZM293.24 283.166C302.515 276.581 305.019 272.685 304.926 266.193C304.555 259.886 300.659 250.426 294.074 241.151C287.118 231.412 278.957 223.992 272.557 222.508C267.085 220.653 262.818 222.045 254.1 228.259L245.381 234.473L284.521 289.38L293.24 283.166Z" fill="#DAD3C6">

          </path>
          <path d="M456.113 110.93L404.545 136.25L431.349 190.786L468.541 172.515L482.175 200.432L444.983 218.704L475.312 280.474L526.88 255.154L540.514 283.071L458.988 323.046L360.953 123.08L442.479 83.1055L456.113 111.023V110.93Z" fill="#DAD3C6">

          </path>
          <path d="M747.247 229.742L678.891 100.914L699.388 236.976L668.688 241.614L635.484 21.4291L668.874 16.4206L733.798 140.332L714.043 9.55734L744.742 4.91992L777.946 225.104L747.247 229.742Z" fill="#DAD3C6">

          </path>
          <path d="M937.38 156.376C935.525 189.394 932.279 201.266 920.871 213.694C911.225 224.175 896.571 230.111 881.175 229.183C865.5 228.348 851.495 220.836 843.148 209.335C833.224 195.701 831.184 183.273 833.039 150.625L837.305 72.9023C839.067 40.2548 842.499 28.012 853.814 15.5837C863.46 5.10313 878.114 -0.832754 893.789 0.0947298C909.092 0.929465 923.468 8.44208 931.444 19.9429C941.368 33.5769 943.409 45.7269 941.554 78.6526L937.288 156.376H937.38ZM866.613 148.77C865.5 169.732 865.593 179.841 866.984 184.571C869.21 192.733 874.961 197.742 882.937 198.205C891.285 198.669 897.87 193.661 900.745 184.479C901.95 180.212 903.249 169.546 904.269 150.904L908.164 80.5076C909.37 58.8044 909.185 49.4369 907.794 44.7067C905.568 36.5448 899.817 31.5365 892.119 31.1655C883.494 30.7018 876.816 35.7101 873.94 44.8922C872.735 49.1586 871.436 60.4739 870.416 78.4671L866.521 148.77H866.613Z" fill="#DAD3C6">

          </path>
          <path d="M1042.65 251.817L1010.29 243.748L1056.66 57.7874L1022.34 49.2546L1029.85 19.1113L1131.6 44.5244L1124.09 74.6677L1089.12 65.9493L1042.75 251.91L1042.65 251.817Z" fill="#DAD3C6">

          </path>
          <path d="M1250.32 285.112L1218.51 323.231L1190.22 306.258L1336.11 134.117L1373.3 156.47L1291.78 367.287L1262.28 349.572L1281.02 303.569L1250.41 285.204L1250.32 285.112ZM1326.93 191.343L1270.35 260.904L1292.71 274.353L1327.02 191.343H1326.93Z" fill="#DAD3C6">

          </path>
          <path d="M1393.98 455.026L1327.57 396.038L1475.5 229.555L1500.45 251.722L1373.2 395.018L1414.66 431.839L1394.07 455.026H1393.98Z" fill="#DAD3C6">

          </path>
          <path d="M1479.13 558.997L1573.64 460.035L1452.23 522.826L1434.88 499.546L1593.76 339.926L1613.7 366.73L1516.69 459.571L1636.15 396.966L1652.66 419.226L1558.89 516.333L1676.03 450.575L1695.32 476.544L1496.38 582.277L1479.03 558.997H1479.13Z" fill="#DAD3C6">

          </path>
          <path d="M1589.96 652.862L1541.82 665.198L1528.74 634.869L1747.72 580.426L1764.88 620.308L1575.49 743.756L1561.95 712.129L1604.06 685.695L1589.96 652.862ZM1707.01 621.513L1620.38 644.886L1630.68 668.815L1707.01 621.513Z" fill="#DAD3C6">

          </path>
          <path d="M1595.9 838.915L1589.68 806.082L1678.26 789.295L1800.68 723.629L1807.18 757.76L1725.65 797.364L1815.9 803.763L1822.2 836.875L1684.47 822.22L1595.9 839.008V838.915Z" fill="#DAD3C6">

          </path>
          <path d="M1770.35 992.317C1790.48 991.111 1797.62 986.381 1798.18 974.045C1798.64 962.73 1790.2 955.032 1776.94 954.475C1761.54 953.826 1752.36 959.484 1729.36 982.3C1696.34 1015.78 1681.96 1023.57 1654.97 1022.46C1620.93 1021.16 1598.77 998.902 1599.97 967.553C1601.27 934.905 1625.85 914.13 1662.21 914.594L1666.66 946.499C1643.29 946.499 1631.6 953.826 1631.04 968.851C1630.58 981.187 1639.58 989.534 1654.6 990.183C1662.95 990.554 1671.11 987.865 1678.99 982.485C1686.23 977.384 1688.64 975.529 1706.35 957.536C1733.44 930.546 1751.52 921.271 1776.19 922.199C1809.21 923.497 1830.45 945.386 1829.15 976.735C1828.04 1006.14 1809.31 1022.37 1773.78 1024.96L1770.35 992.409V992.317Z" fill="#DAD3C6">

          </path>
          <path d="M1604.15 1197.57L1562.04 1171.23L1575.03 1140.81L1765.62 1261.57L1748.65 1301.45L1528.65 1249.79L1542.1 1218.16L1590.24 1230.31L1604.24 1197.48L1604.15 1197.57ZM1707.56 1260.55L1630.86 1214.08L1620.66 1238.01L1707.56 1260.55Z" fill="#DAD3C6">

          </path>
          <path d="M1599.61 1441.87C1616.86 1452.25 1625.48 1452.44 1632.9 1442.51C1639.67 1433.43 1637.17 1422.3 1626.41 1414.32C1614.07 1405.14 1603.32 1404.58 1571.41 1410.42C1525.22 1419.33 1508.99 1417.57 1487.29 1401.43C1460.02 1381.02 1454.27 1350.14 1473.1 1325C1492.67 1298.75 1524.67 1295.6 1554.44 1316.56L1540.06 1345.41C1520.77 1332.24 1507.04 1331.59 1498.05 1343.65C1490.63 1353.57 1493.32 1365.53 1505.37 1374.53C1512.05 1379.54 1520.31 1381.86 1529.86 1381.95C1538.67 1381.95 1541.73 1381.67 1566.59 1376.85C1604.24 1369.99 1624.37 1372.49 1644.22 1387.24C1670.74 1406.99 1675.85 1437.04 1657.02 1462.18C1639.49 1485.74 1614.82 1488.61 1584.02 1470.62L1599.61 1441.87Z" fill="#DAD3C6">

          </path>
          <path d="M1301.14 1486.39L1329.15 1468.21L1433.49 1628.94L1463.17 1609.65L1480.05 1635.71L1392.13 1692.75L1375.25 1666.69L1405.48 1647.03L1301.14 1486.29V1486.39Z" fill="#DAD3C6">

          </path>
          <path d="M1231.76 1630.15L1201.99 1534.15L1233.89 1524.23L1299.84 1736.9L1267.93 1746.83L1240.94 1659.83L1205.51 1670.77L1232.5 1757.77L1200.6 1767.7L1134.65 1555.02L1166.56 1545.1L1196.33 1641.09L1231.76 1630.15Z" fill="#DAD3C6">

          </path>
          <path d="M999.151 1753.97L1056.56 1753.23L1055.82 1692.48L1014.45 1693.03L1014.08 1661.96L1055.45 1661.41L1054.61 1592.59L997.203 1593.33L996.832 1562.26L1087.63 1561.14L1090.51 1783.83L999.707 1784.95L999.336 1753.88L999.151 1753.97Z" fill="#DAD3C6">

          </path>
          <path d="M885.996 1538.23L918.087 1547.32L893.601 1634.04L897.682 1772.98L864.293 1763.52L865.313 1672.9L819.31 1750.81L786.848 1741.63L861.511 1624.95L885.996 1538.23Z" fill="#DAD3C6">

          </path>
          <path d="M683.621 1481L722.204 1449.75L746.69 1471.92L570.375 1612.71L538.191 1583.58L658.764 1392.43L684.27 1415.52L657.095 1457.08L683.621 1481ZM590.409 1558.26L659.414 1500.85L640.122 1483.42L590.502 1558.26H590.409Z" fill="#DAD3C6">

          </path>
          <path d="M617.217 1331.68L634.375 1360.34L443.221 1474.61L419.292 1434.45C397.403 1397.72 404.267 1376.11 445.54 1351.44C487.091 1326.58 509.443 1330.75 531.332 1367.48L538.195 1378.98L617.31 1331.68H617.217ZM506.012 1385.66C494.882 1367.02 486.164 1366 462.606 1380.1C439.419 1394.01 436.079 1402.17 447.209 1420.81L452.682 1429.99L511.391 1394.94L505.919 1385.75L506.012 1385.66Z" fill="#DAD3C6">

          </path>
          <path d="M559.426 1199.43L566.011 1232.17L347.681 1275.86L338.499 1230.04C330.152 1188.12 343.878 1170.03 390.994 1160.66C438.482 1151.2 458.144 1162.52 466.492 1204.44L469.088 1217.52L559.426 1199.43ZM436.534 1213.16C432.268 1191.92 424.384 1188.02 397.487 1193.4C370.961 1198.69 365.118 1205.37 369.384 1226.61L371.518 1237.09L438.667 1223.64L436.534 1213.16Z" fill="#DAD3C6">

          </path>
          <path d="M369.205 971.725L361.229 1028.58L421.422 1037.02L427.173 996.025L457.872 1000.29L452.122 1041.29L520.199 1050.84L528.176 993.985L558.968 998.251L546.354 1088.22L325.799 1057.24L338.412 967.273L369.205 971.633V971.725Z" fill="#DAD3C6">

          </path>
          <path d="M544.59 902.543L584.379 932.315L568.89 961.531L389.236 825.098L409.548 786.793L624.446 856.911L608.308 887.332L561.377 871.101L544.683 902.636L544.59 902.543ZM446.833 831.034L519.363 883.808L531.605 860.806L446.926 831.034H446.833Z" fill="#DAD3C6">

          </path>
          <path d="M673.785 806.54L648.743 828.614L501.459 661.574L536.518 630.689C565.548 605.09 591.61 608.893 620.919 642.19C639.932 663.707 645.59 679.196 641.231 699.044L728.043 758.681L701.517 782.054L624.165 726.034L612.108 736.607L673.693 806.54H673.785ZM599.679 706.279C608.212 698.766 610.345 694.685 609.603 688.193C608.583 681.978 603.667 672.889 596.155 664.356C588.178 655.36 579.368 648.867 572.783 647.94C567.218 646.641 563.044 648.496 555.067 655.545L547.091 662.594L591.703 713.235L599.679 706.186V706.279Z" fill="#DAD3C6">

          </path>
        </svg>
      </div>
      <div class="container">
        <div class="product-cards-carousel__header">
          <div class="product-cards-carousel__header-left">
            <h2 class="product-cards-carousel__title typography-heading-md">More from Apprentice Magic</h2>
          </div>
        </div>
        <div>
          <div class="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized" id="splide02" role="region" aria-roledescription="carousel">
            <div class="splide__track splide__track--slide splide__track--ltr splide__track--draggable" id="splide02-track" style="padding-left: 0px; padding-right: 2rem;" aria-live="polite" aria-atomic="true">
              <ul class="splide__list" id="splide02-list" role="presentation" style="transform: translateX(0px);">
                <li class="splide__slide is-active is-visible" id="splide02-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                    <form method="post" action="/cart/add" class="card__add-to-cart">
                      <a href="#" class="btn btn--primary card__add-to-cart__submit">Add to Cart <span class="btn__icon">
                          <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z">

                            </path>
                          </svg>
                        </span>
                      </a>
                    </form>
                  </a>
                </li>
                <li class="splide__slide is-visible is-next" id="splide02-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                    <form method="post" action="/cart/add" class="card__add-to-cart">
                      <a href="#" class="btn btn--primary card__add-to-cart__submit">Add to Cart <span class="btn__icon">
                          <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z">

                            </path>
                          </svg>
                        </span>
                      </a>
                    </form>
                  </a>
                </li>
                <li class="splide__slide is-visible" id="splide02-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                    <form method="post" action="/cart/add" class="card__add-to-cart">
                      <a href="#" class="btn btn--primary card__add-to-cart__submit">Add to Cart <span class="btn__icon">
                          <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z">

                            </path>
                          </svg>
                        </span>
                      </a>
                    </form>
                  </a>
                </li>
                <li class="splide__slide is-visible" id="splide02-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                    <form method="post" action="/cart/add" class="card__add-to-cart">
                      <a href="#" class="btn btn--primary card__add-to-cart__submit">Add to Cart <span class="btn__icon">
                          <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z">

                            </path>
                          </svg>
                        </span>
                      </a>
                    </form>
                  </a>
                </li>
                <li class="splide__slide" id="splide02-slide05" role="tabpanel" aria-roledescription="slide" aria-label="5 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);" aria-hidden="true">
                  <a href="#" class="card" tabindex="-1">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                    <form method="post" action="/cart/add" class="card__add-to-cart">
                      <a href="#" class="btn btn--primary card__add-to-cart__submit" tabindex="-1">Add to Cart <span class="btn__icon">
                          <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z">

                            </path>
                          </svg>
                        </span>
                      </a>
                    </form>
                  </a>
                </li>
                <li class="splide__slide" id="splide02-slide06" role="tabpanel" aria-roledescription="slide" aria-label="6 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);" aria-hidden="true">
                  <a href="#" class="card" tabindex="-1">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                    <form method="post" action="/cart/add" class="card__add-to-cart">
                      <a href="#" class="btn btn--primary card__add-to-cart__submit" tabindex="-1">Add to Cart <span class="btn__icon">
                          <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z">

                            </path>
                          </svg>
                        </span>
                      </a>
                    </form>
                  </a>
                </li>
              </ul>
            </div>
            <div class="product-cards-carousel__pagination">
              <ul class="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
                <li role="presentation">
                  <button class="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide02-slide01 splide02-slide02 splide02-slide03 splide02-slide04" aria-label="Go to page 1" aria-selected="true">

                  </button>
                </li>
                <li role="presentation">
                  <button class="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide03 splide02-slide04 splide02-slide05 splide02-slide06" aria-label="Go to page 2" tabindex="-1">

                  </button>
                </li>
              </ul>
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
            <p class="typography-body-sm">The extraordinary Tony Anverdi changed the magic industry decades ago, and his secrets were well hidden. Until now. Peek behind the curtain, and indulge yourself in all of Anverdi’s curious pleasures.</p>
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
                  <path d="m34.3 19.7-9.4-5.4v-5.7l-14.8-8.6-5.1 3-.3 11.1-4.7 2.9v16.9l5.5 2.9 9.4-5.3 4.9 2.7 14.5-8.6zm-1.5.3-3.6 2-9.5 5.4-4.3-2.4v-4l3.9 2.3 3.9-2.1 1.6-.9v-4.9zm-22.2 7.7v-4.2l3.8 2.1v4.2zm-.5-11-4-2.3 4-2.4 3.9 2.5zm1.9 0 2.4-1.4v3.9l-3.3-2zm-.9 5.9 3.4-2.2v4zm12.8-8.9v6l-4 2.2v-10.2l4-2zm-13.8-12.6 13.2 7.7-4 2-12.9-7.6zm-4.1 2.9 12.9 7.6v10.1l-3.4-2.2v-5.4l-5.3-3.4-4.4 2.6zm-.9 11 4 2.3-3.6 2.1-4-2.3zm-.1 20.2-4-2.1v-15.1l4 2.3zm1 0v-14.9l4.1-2.4 3.4 2-3.9 2.5v5.9l4.3 2.4zm9.4-4.8v-4.2l3.8 2.1v4.3zm4.9 2.2v-4.3l8.9-5.1 4.2-2.4v4z">

                  </path>
                </svg>
              </span>
              <span class="text-image-split__image-tag__text">BEGINNER FRIENDLY</span>
            </div>
          </div>
          <img src="/assets/placeholder--split-e0409ba3.jpg" alt="Anverdi Book" width="1789" height="1289" loading="lazy">
        </div>
      </div>
    </section>
    <div class="product-cards-carousel">
      <div class="product-cards-carousel__bg">
        <svg width="1729" height="1785" viewBox="0 0 1729 1785" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
          <path d="M50.2495 762.115L44.0355 777.233L25.3002 776.399C35.9662 790.867 37.6357 801.719 31.4216 816.837C25.3002 831.676 13.7995 841.322 -0.112808 843.548C-14.6743 845.496 -29.5141 842.25 -55.2054 831.769L-127.178 802.183C-159.269 789.012 -168.915 782.52 -177.077 767.216C-184.126 754.603 -184.589 738.835 -178.561 724.367C-169.193 701.551 -148.696 689.4 -124.767 692.739C-116.605 693.945 -113.081 695.058 -88.4094 705.168L-101.208 736.331C-113.544 731.23 -121.706 728.262 -126.436 726.685C-136.824 723.903 -146.006 727.706 -149.623 736.609C-152.777 744.308 -150.272 752.191 -142.482 757.941C-139.143 760.353 -128.569 765.454 -112.246 772.225L-47.0435 799.029C-31.5545 805.336 -17.9205 809.881 -13.4686 810.345C-5.21399 811.272 1.55676 807.098 4.61745 799.771C7.7709 792.073 5.35934 783.818 -2.15327 778.532C-6.04871 775.842 -15.6946 771.112 -32.6676 764.156L-41.0149 760.724L-48.7129 779.552L-74.3115 768.979L-53.907 719.266L50.4349 762.208L50.2495 762.115Z" fill="#DAD3C6">

          </path>
          <path d="M-32.768 567.435C-50.9467 558.717 -59.4794 559.366 -65.9718 569.939C-71.9077 579.678 -68.2904 590.437 -56.8824 597.393C-43.7121 605.369 -32.9533 604.906 -1.78979 596.094C43.3787 582.924 59.7023 583.017 82.7967 597.115C111.92 614.83 120.452 645.065 104.222 671.87C87.2486 699.787 55.714 706.094 24.0868 688.008L35.6803 657.958C56.1777 669.273 69.9045 668.531 77.6953 655.732C84.095 645.158 80.2924 633.472 67.4004 625.681C60.2588 621.322 51.8186 619.745 42.3582 620.58C33.5471 621.507 30.5793 621.971 6.27927 629.113C-30.5418 639.593 -50.8538 638.944 -72.0004 626.052C-100.196 608.894 -108.172 579.492 -91.8487 552.688C-76.6379 527.553 -52.3377 522.359 -20.0612 537.385L-32.8606 567.528L-32.768 567.435Z" fill="#DAD3C6">

          </path>
          <path d="M202.908 459.476L231.938 499.821L208.38 523.101L77.6973 339.088L108.583 308.574L292.781 439.72L268.295 463.928L228.321 434.434L202.908 459.569V459.476ZM130.935 361.997L184.358 434.063L202.908 415.791L130.935 361.997Z" fill="#DAD3C6">

          </path>
          <path d="M356.679 390.476L329.504 409.86L200.213 228.63L238.24 201.455C269.775 179.009 295.28 185.409 321.064 221.488C337.759 244.861 341.747 260.813 335.44 280.105L415.668 348.368L386.823 368.958L315.592 305.333L302.515 314.608L356.587 390.383L356.679 390.476ZM293.24 283.166C302.515 276.581 305.019 272.685 304.926 266.193C304.555 259.886 300.659 250.426 294.074 241.151C287.118 231.412 278.957 223.992 272.557 222.508C267.085 220.653 262.818 222.045 254.1 228.259L245.381 234.473L284.521 289.38L293.24 283.166Z" fill="#DAD3C6">

          </path>
          <path d="M456.113 110.93L404.545 136.25L431.349 190.786L468.541 172.515L482.175 200.432L444.983 218.704L475.312 280.474L526.88 255.154L540.514 283.071L458.988 323.046L360.953 123.08L442.479 83.1055L456.113 111.023V110.93Z" fill="#DAD3C6">

          </path>
          <path d="M747.247 229.742L678.891 100.914L699.388 236.976L668.688 241.614L635.484 21.4291L668.874 16.4206L733.798 140.332L714.043 9.55734L744.742 4.91992L777.946 225.104L747.247 229.742Z" fill="#DAD3C6">

          </path>
          <path d="M937.38 156.376C935.525 189.394 932.279 201.266 920.871 213.694C911.225 224.175 896.571 230.111 881.175 229.183C865.5 228.348 851.495 220.836 843.148 209.335C833.224 195.701 831.184 183.273 833.039 150.625L837.305 72.9023C839.067 40.2548 842.499 28.012 853.814 15.5837C863.46 5.10313 878.114 -0.832754 893.789 0.0947298C909.092 0.929465 923.468 8.44208 931.444 19.9429C941.368 33.5769 943.409 45.7269 941.554 78.6526L937.288 156.376H937.38ZM866.613 148.77C865.5 169.732 865.593 179.841 866.984 184.571C869.21 192.733 874.961 197.742 882.937 198.205C891.285 198.669 897.87 193.661 900.745 184.479C901.95 180.212 903.249 169.546 904.269 150.904L908.164 80.5076C909.37 58.8044 909.185 49.4369 907.794 44.7067C905.568 36.5448 899.817 31.5365 892.119 31.1655C883.494 30.7018 876.816 35.7101 873.94 44.8922C872.735 49.1586 871.436 60.4739 870.416 78.4671L866.521 148.77H866.613Z" fill="#DAD3C6">

          </path>
          <path d="M1042.65 251.817L1010.29 243.748L1056.66 57.7874L1022.34 49.2546L1029.85 19.1113L1131.6 44.5244L1124.09 74.6677L1089.12 65.9493L1042.75 251.91L1042.65 251.817Z" fill="#DAD3C6">

          </path>
          <path d="M1250.32 285.112L1218.51 323.231L1190.22 306.258L1336.11 134.117L1373.3 156.47L1291.78 367.287L1262.28 349.572L1281.02 303.569L1250.41 285.204L1250.32 285.112ZM1326.93 191.343L1270.35 260.904L1292.71 274.353L1327.02 191.343H1326.93Z" fill="#DAD3C6">

          </path>
          <path d="M1393.98 455.026L1327.57 396.038L1475.5 229.555L1500.45 251.722L1373.2 395.018L1414.66 431.839L1394.07 455.026H1393.98Z" fill="#DAD3C6">

          </path>
          <path d="M1479.13 558.997L1573.64 460.035L1452.23 522.826L1434.88 499.546L1593.76 339.926L1613.7 366.73L1516.69 459.571L1636.15 396.966L1652.66 419.226L1558.89 516.333L1676.03 450.575L1695.32 476.544L1496.38 582.277L1479.03 558.997H1479.13Z" fill="#DAD3C6">

          </path>
          <path d="M1589.96 652.862L1541.82 665.198L1528.74 634.869L1747.72 580.426L1764.88 620.308L1575.49 743.756L1561.95 712.129L1604.06 685.695L1589.96 652.862ZM1707.01 621.513L1620.38 644.886L1630.68 668.815L1707.01 621.513Z" fill="#DAD3C6">

          </path>
          <path d="M1595.9 838.915L1589.68 806.082L1678.26 789.295L1800.68 723.629L1807.18 757.76L1725.65 797.364L1815.9 803.763L1822.2 836.875L1684.47 822.22L1595.9 839.008V838.915Z" fill="#DAD3C6">

          </path>
          <path d="M1770.35 992.317C1790.48 991.111 1797.62 986.381 1798.18 974.045C1798.64 962.73 1790.2 955.032 1776.94 954.475C1761.54 953.826 1752.36 959.484 1729.36 982.3C1696.34 1015.78 1681.96 1023.57 1654.97 1022.46C1620.93 1021.16 1598.77 998.902 1599.97 967.553C1601.27 934.905 1625.85 914.13 1662.21 914.594L1666.66 946.499C1643.29 946.499 1631.6 953.826 1631.04 968.851C1630.58 981.187 1639.58 989.534 1654.6 990.183C1662.95 990.554 1671.11 987.865 1678.99 982.485C1686.23 977.384 1688.64 975.529 1706.35 957.536C1733.44 930.546 1751.52 921.271 1776.19 922.199C1809.21 923.497 1830.45 945.386 1829.15 976.735C1828.04 1006.14 1809.31 1022.37 1773.78 1024.96L1770.35 992.409V992.317Z" fill="#DAD3C6">

          </path>
          <path d="M1604.15 1197.57L1562.04 1171.23L1575.03 1140.81L1765.62 1261.57L1748.65 1301.45L1528.65 1249.79L1542.1 1218.16L1590.24 1230.31L1604.24 1197.48L1604.15 1197.57ZM1707.56 1260.55L1630.86 1214.08L1620.66 1238.01L1707.56 1260.55Z" fill="#DAD3C6">

          </path>
          <path d="M1599.61 1441.87C1616.86 1452.25 1625.48 1452.44 1632.9 1442.51C1639.67 1433.43 1637.17 1422.3 1626.41 1414.32C1614.07 1405.14 1603.32 1404.58 1571.41 1410.42C1525.22 1419.33 1508.99 1417.57 1487.29 1401.43C1460.02 1381.02 1454.27 1350.14 1473.1 1325C1492.67 1298.75 1524.67 1295.6 1554.44 1316.56L1540.06 1345.41C1520.77 1332.24 1507.04 1331.59 1498.05 1343.65C1490.63 1353.57 1493.32 1365.53 1505.37 1374.53C1512.05 1379.54 1520.31 1381.86 1529.86 1381.95C1538.67 1381.95 1541.73 1381.67 1566.59 1376.85C1604.24 1369.99 1624.37 1372.49 1644.22 1387.24C1670.74 1406.99 1675.85 1437.04 1657.02 1462.18C1639.49 1485.74 1614.82 1488.61 1584.02 1470.62L1599.61 1441.87Z" fill="#DAD3C6">

          </path>
          <path d="M1301.14 1486.39L1329.15 1468.21L1433.49 1628.94L1463.17 1609.65L1480.05 1635.71L1392.13 1692.75L1375.25 1666.69L1405.48 1647.03L1301.14 1486.29V1486.39Z" fill="#DAD3C6">

          </path>
          <path d="M1231.76 1630.15L1201.99 1534.15L1233.89 1524.23L1299.84 1736.9L1267.93 1746.83L1240.94 1659.83L1205.51 1670.77L1232.5 1757.77L1200.6 1767.7L1134.65 1555.02L1166.56 1545.1L1196.33 1641.09L1231.76 1630.15Z" fill="#DAD3C6">

          </path>
          <path d="M999.151 1753.97L1056.56 1753.23L1055.82 1692.48L1014.45 1693.03L1014.08 1661.96L1055.45 1661.41L1054.61 1592.59L997.203 1593.33L996.832 1562.26L1087.63 1561.14L1090.51 1783.83L999.707 1784.95L999.336 1753.88L999.151 1753.97Z" fill="#DAD3C6">

          </path>
          <path d="M885.996 1538.23L918.087 1547.32L893.601 1634.04L897.682 1772.98L864.293 1763.52L865.313 1672.9L819.31 1750.81L786.848 1741.63L861.511 1624.95L885.996 1538.23Z" fill="#DAD3C6">

          </path>
          <path d="M683.621 1481L722.204 1449.75L746.69 1471.92L570.375 1612.71L538.191 1583.58L658.764 1392.43L684.27 1415.52L657.095 1457.08L683.621 1481ZM590.409 1558.26L659.414 1500.85L640.122 1483.42L590.502 1558.26H590.409Z" fill="#DAD3C6">

          </path>
          <path d="M617.217 1331.68L634.375 1360.34L443.221 1474.61L419.292 1434.45C397.403 1397.72 404.267 1376.11 445.54 1351.44C487.091 1326.58 509.443 1330.75 531.332 1367.48L538.195 1378.98L617.31 1331.68H617.217ZM506.012 1385.66C494.882 1367.02 486.164 1366 462.606 1380.1C439.419 1394.01 436.079 1402.17 447.209 1420.81L452.682 1429.99L511.391 1394.94L505.919 1385.75L506.012 1385.66Z" fill="#DAD3C6">

          </path>
          <path d="M559.426 1199.43L566.011 1232.17L347.681 1275.86L338.499 1230.04C330.152 1188.12 343.878 1170.03 390.994 1160.66C438.482 1151.2 458.144 1162.52 466.492 1204.44L469.088 1217.52L559.426 1199.43ZM436.534 1213.16C432.268 1191.92 424.384 1188.02 397.487 1193.4C370.961 1198.69 365.118 1205.37 369.384 1226.61L371.518 1237.09L438.667 1223.64L436.534 1213.16Z" fill="#DAD3C6">

          </path>
          <path d="M369.205 971.725L361.229 1028.58L421.422 1037.02L427.173 996.025L457.872 1000.29L452.122 1041.29L520.199 1050.84L528.176 993.985L558.968 998.251L546.354 1088.22L325.799 1057.24L338.412 967.273L369.205 971.633V971.725Z" fill="#DAD3C6">

          </path>
          <path d="M544.59 902.543L584.379 932.315L568.89 961.531L389.236 825.098L409.548 786.793L624.446 856.911L608.308 887.332L561.377 871.101L544.683 902.636L544.59 902.543ZM446.833 831.034L519.363 883.808L531.605 860.806L446.926 831.034H446.833Z" fill="#DAD3C6">

          </path>
          <path d="M673.785 806.54L648.743 828.614L501.459 661.574L536.518 630.689C565.548 605.09 591.61 608.893 620.919 642.19C639.932 663.707 645.59 679.196 641.231 699.044L728.043 758.681L701.517 782.054L624.165 726.034L612.108 736.607L673.693 806.54H673.785ZM599.679 706.279C608.212 698.766 610.345 694.685 609.603 688.193C608.583 681.978 603.667 672.889 596.155 664.356C588.178 655.36 579.368 648.867 572.783 647.94C567.218 646.641 563.044 648.496 555.067 655.545L547.091 662.594L591.703 713.235L599.679 706.186V706.279Z" fill="#DAD3C6">

          </path>
        </svg>
      </div>
      <div class="container">
        <div class="product-cards-carousel__header">
          <div class="product-cards-carousel__header-left">
            <h2 class="product-cards-carousel__title typography-heading-md">Recently Viewed</h2>
          </div>
        </div>
        <div>
          <div class="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized" id="splide03" role="region" aria-roledescription="carousel">
            <div class="splide__track splide__track--slide splide__track--ltr splide__track--draggable" id="splide03-track" style="padding-left: 0px; padding-right: 2rem;" aria-live="polite" aria-atomic="true">
              <ul class="splide__list" id="splide03-list" role="presentation" style="transform: translateX(0px);">
                <li class="splide__slide is-active is-visible" id="splide03-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                <li class="splide__slide is-visible is-next" id="splide03-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                <li class="splide__slide is-visible" id="splide03-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                <li class="splide__slide is-visible" id="splide03-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);">
                  <a href="#" class="card">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                <li class="splide__slide" id="splide03-slide05" role="tabpanel" aria-roledescription="slide" aria-label="5 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);" aria-hidden="true">
                  <a href="#" class="card" tabindex="-1">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                <li class="splide__slide" id="splide03-slide06" role="tabpanel" aria-roledescription="slide" aria-label="6 of 6" style="margin-right: 0.5rem; width: calc(((100% + 0.5rem) / 4) - 0.5rem);" aria-hidden="true">
                  <a href="#" class="card" tabindex="-1">
                    <div class="card__thumbnail">
                      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width="300" height="300" role="presentation">
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
                  <button class="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide03-slide01 splide03-slide02 splide03-slide03 splide03-slide04" aria-label="Go to page 1" aria-selected="true">

                  </button>
                </li>
                <li role="presentation">
                  <button class="splide__pagination__page" type="button" role="tab" aria-controls="splide03-slide03 splide03-slide04 splide03-slide05 splide03-slide06" aria-label="Go to page 2" tabindex="-1">

                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- End main content -->

  <?php include '../../partials/mailing-list-signup.php'; ?>
  <?php include '../../partials/footer.php'; ?>
</body>

</html>