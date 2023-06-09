import { Splide, SplideSlide, SplideProps, SplideTrack } from "@splidejs/react-splide"
import { Tag } from "../Tags";
import { useRef, useState } from "preact/hooks";
import classNames from "classnames";

interface ProductGalleryProps {
}

const ProductGallery = (props: ProductGalleryProps) => {
  const splideProps: SplideProps = {
    hasTrack: false,
    options: {
      type: 'loop',
      rewind: true,
      autoplay: false,
      gap: '0.5rem',
      pagination: true,
      padding: {
        left: 0,
        right: '10%',
      },
      arrows: false,
      mediaQuery: 'min',
      breakpoints: {
        768: {
          padding: {
            left: 0,
            right: 0,
          },
        },
        1024: {
          destroy: true,
          pagination: false,
        }
      }
    }
  };

  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const slides = [
    {
      type: 'video',
      video: {
        src: '/video/video-placeholder.mp4',
      },
      alt: 'Video slide',
      image: 'https://via.placeholder.com/1200',
      width: 1200,
      height: 1200,
    },
    {
      type: 'image',
      alt: 'Image slide',
      image: 'https://via.placeholder.com/1200x625',
      width: 1200,
      height: 625,
    },
    {
      type: 'video',
      alt: 'Image slide 2',
      video: {
        src: '/video/video-placeholder.mp4',
      },
      image: 'https://via.placeholder.com/1200x625',
      width: 1200,
      height: 625,
    },
    {
      type: 'image',
      alt: 'Image slide 2',
      image: 'https://via.placeholder.com/1200x625',
      width: 1200,
      height: 625,
    }
  ];


  function handlePlayButtonClick(index: number) {
    const old = videoRefs.current[currentVideoIndex];

    if (currentVideoIndex != null && old) {
      old.pause();
      old.currentTime = 0;
    }

    setCurrentVideoIndex(index)

    const video = videoRefs.current[index];

    if (video) {
      video.play();
      setCurrentVideoIndex(index)
    }
  }

  function setupVideoRef(video: HTMLVideoElement, index) {
    if (video) {
      videoRefs.current[index] = video;

      video.addEventListener('ended', () => {
        setCurrentVideoIndex(null)

        video.currentTime = 0;
        video.src = video.src
      })
    }
  }

  return <>
    <div className="product-gallery">

      <div className="product-gallery__thumbnails">

        <ul className="product-gallery__thumbnails-list">
          {slides.map((slide, index) => {
            return <li
              className="product-gallery__thumbnails-list-item"
              key={`thumbnail-${index}`}
            >
              <button type="button" data-slide-index={index}>
                <img alt={slide.alt} src={slide.image} loading="lazy" width={slide.width} height={slide.height} />
              </button>
            </li>
          })}
        </ul>
      </div>

      <Tag component="div" className="product-form-section__tag product-form-section__tag--mobile" variant='label secondary' disableCopy>New</Tag>

      <Splide {...splideProps}>
        <SplideTrack>
          {
            slides.map((slide, index) => {
              let slideProps: { key: number, [key: string]: any } = {
                key: index
              };

              return <SplideSlide {...slideProps}>
                {slide.type === 'video' && slide.video?.src ?
                  <div className="relative gallery-video">
                    <video preload="metadata" poster={slide.image} controls={currentVideoIndex === index} ref={(el) => setupVideoRef(el, index)} src={slide.video.src} />

                    {currentVideoIndex !== index && (
                  <button
                    type="button"
                    aria-label="Play video"
                    className={classNames('gallery-video__button gallery-video__button--play', { 'gallery-video__button--hide': currentVideoIndex === index })}
                    onClick={() => handlePlayButtonClick(index)}
                  >
                    {/* SVG play button at 64 px, no circle BG */}
                    <svg width="50" height="58" viewBox="0 0 50 58" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 29L0.499997 57.5788L0.5 0.421159L50 29Z" fill="#fff" fill-opacity="0.8" />
                    </svg>
                  </button>
                )}

              </div>
                  :
          <img src={slide.image} />
                }
        </SplideSlide>
            }
        )
          }
      </SplideTrack>

      <div className="splide__pagination--below">
        <ul className="splide__pagination"></ul>
      </div>
    </Splide>

  </div >
  </>
}

export default ProductGallery