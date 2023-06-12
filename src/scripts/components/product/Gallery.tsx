import { Splide, SplideSlide, SplideProps, SplideTrack } from "@splidejs/react-splide"
import { Tag } from "../Tags";
import { useEffect, useRef, useState } from "preact/hooks";
import classNames from "classnames";
import useMediaQuery from '@mui/material/useMediaQuery';

interface ProductGalleryProps {
}

const ProductGallery = (props: ProductGalleryProps) => {
  const matches = useMediaQuery('(min-width:1024px)');
  const [isMobile, setIsMobile] = useState(matches);
  const [shouldReinit, setShouldReinit] = useState(false);

  // Update the isMobile state when the breakpoint changes
  useEffect(() => {
    if (matches != isMobile) {
      setIsMobile(matches);
      setShouldReinit(true);
    }
  }, [matches])

  // Reinit the Splide component when the breakpoint changes
  useEffect(() => {
    if (shouldReinit) {
      setShouldReinit(false);
    }
  }, [shouldReinit])

  const splideProps: SplideProps = {
    hasTrack: false,

    onMove(splide, index, prev, dest) {
      pauseActiveVideo();
    },

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
      image: '/video/poster-1200x1200.png',
      width: 1200,
      height: 1200,
    },
    {
      type: 'image',
      alt: 'Image slide',
      image: '/video/poster-1200x675.png',
      width: 1200,
      height: 625,
    },
    {
      type: 'video',
      alt: 'Image slide 2',
      video: {
        src: '/video/video-placeholder.mp4',
      },
      image: '/video/poster-1200x675.png',
      width: 1200,
      height: 625,
    },
    {
      type: 'image',
      alt: 'Image slide 2',
      image: '/video/poster-1200x675.png',
      width: 1200,
      height: 625,
    }
  ];

  /**
   * When the active slide is changed, pause the existing video.
   */
  useEffect(() => {
    pauseActiveVideo();
    playActiveVideo();
  }, [currentVideoIndex])

  function handlePlayButtonClick(index: number) {
    setCurrentVideoIndex(index)
  }

  function playActiveVideo() {
    const active = videoRefs.current[currentVideoIndex];

    if (currentVideoIndex != null && active) {
      active.play();
    }
  }

  function pauseActiveVideo() {
    videoRefs.current.forEach(v => v.pause());
  }

  function setupVideoRef(video: HTMLVideoElement, index) {
    if (video) {
      videoRefs.current[index] = video;

      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.src = video.src
      })
    }
  }

  return shouldReinit ? null : <>
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