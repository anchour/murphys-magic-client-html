import { Options as SplideOptions, Splide, SplideSlide, SplideProps } from "@splidejs/react-splide"
import { Video } from "@splidejs/splide-extension-video";
import slider from './Slider.html?raw';
import { Helmet } from 'react-helmet'
import { Tag } from "../Tags";

interface ProductGalleryProps {
}

const ProductGallery = (props: ProductGalleryProps) => {
  const splideOptions: SplideOptions = {
    type: 'loop',
    rewind: true,
    autoplay: false,
    gap: '0.5rem',
    pagination: false,
    arrows: false,
    mediaQuery: 'min',
    breakpoints: {
      1024: {
        destroy: true,
      }
    }
  };

  return <>
    <div className="product-gallery">
      <Tag component="div" className="product-form-section__tag product-form-section__tag--mobile" variant='label secondary' disableCopy>New</Tag>

      <div dangerouslySetInnerHTML={{ __html: slider }} />
    </div>

    <Helmet>
      <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.8.0/dist/js/splide-extension-video.min.js" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.8.0/dist/css/splide-extension-video.min.css"></link>

      <script defer src="/src/scripts/raw/pdp.js"></script>
    </Helmet>
  </>
}

export default ProductGallery