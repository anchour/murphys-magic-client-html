import { srcSet } from "../lib/utils"

export const heroCarouselOne = {
  src: require('/src/images/hero/home-hero-carousel-1.jpg'),
  srcSet: srcSet([
    { src: require('/src/images/hero/home-hero-carousel-1.jpg'), },
    { size: 200, src: require('/src/images/hero/home-hero-carousel-1_mc8axv_c_scale,w_200.jpg'), },
    { size: 1104, src: require('/src/images/hero/home-hero-carousel-1_mc8axv_c_scale,w_1104.jpg'), },
    { size: 1400, src: require('/src/images/hero/home-hero-carousel-1_mc8axv_c_scale,w_1400.jpg'), },
  ])
}
export const heroMobileCarouselOne = {
  src: require('/src/images/hero/home-hero-mobile-carousel-1.jpg'),
}